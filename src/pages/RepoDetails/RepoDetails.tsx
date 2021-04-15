import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import marked from "marked";
import base64 from "base-64";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import useStyles from "./style";
import { Repo, RepoContent } from "../../store/repo/types";
import { RootState } from "../../store";
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import LinkIcon from '@material-ui/icons/Link';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import gitPullRequestIcon from "../../assets/git-pull-request-icon.svg";
import gitForkIcon from "../../assets/git-fork-icon.svg";
import gitBranchIcon from "../../assets/git-branch-icon.svg";
import { formatCount } from "../../utils/formatCount";
import { addToBookmark, removeBookmark } from "../../store/bookmark/actions";

const RepoDetails: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedRepoDetail, setSelectedRepoDetail] = useState<Repo | undefined>(undefined);
    const [selectedRepoContent, setSelectedRepoContent] = useState<RepoContent | undefined>(undefined);
    const [selectedRepoBranch, setSelectedRepoBranch] = useState<number>(0);
    const [selectedRepoPull, setSelectedRepoPull] = useState<number>(0);
    const [addButton, setAddButton] = useState(false);
    const selectedRepo = useSelector((state: RootState) => state.repo.selectedRepo);
    const repoContent = useSelector((state: RootState) => state.repo.repoContent);
    const branchCount = useSelector((state: RootState) => state.repo.branchCount);
    const pullCount = useSelector((state: RootState) => state.repo.pullCount);
    const repoLoading = useSelector((state: RootState) => state.repo.loading);
    const bookmarks = useSelector((state: RootState) => state.bookmark.bookmarks);

    useEffect(() => {
        setSelectedRepoDetail(selectedRepo)
    }, [selectedRepo])

    useEffect(() => {
        setSelectedRepoContent(repoContent);
    }, [repoContent])

    useEffect(() => {
        setSelectedRepoBranch(branchCount)
    }, [branchCount]);

    useEffect(() => {
        setSelectedRepoPull(pullCount)
    }, [pullCount]);


    useEffect(() => {
        selectedRepo && bookmarks && bookmarks.filter((bookmark) => bookmark.id === selectedRepo.id).length > 0 ? setAddButton(false) : setAddButton(true)
    }, [selectedRepo, bookmarks]);

    const handleRepoContent = (content: string) => {
        const text = base64.decode(content);
        return {
            __html: marked(text)
        };
    }



    return (
        <>
            <Header />
            <Main>
                <Grid container>

                    <Grid item sm={3} xs={12} className={classes.sidebarContainer}>
                        {selectedRepoDetail && (<>
                            <BookOutlinedIcon className={classes.repoDetailIcon} />
                            <Typography variant="h5" className={classes.repoTitle}>{selectedRepoDetail.full_name}</Typography>
                            <Typography variant="body1">{selectedRepoDetail.description}</Typography>
                            <div className={classes.linkWrapper} onClick={() => selectedRepoDetail && window.open(selectedRepoDetail.html_url)}>
                                <LinkIcon className={classes.linkIcon} />
                                <Typography className={classes.linkTitle}>{selectedRepoDetail.full_name}</Typography>
                            </div>
                            <div className={classes.sectionOne}>
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <VisibilityOutlinedIcon />
                                        <Typography className={classes.infoText}>Watch</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepoDetail.subscribers_count)}</Typography>
                                    </div>
                                </div>
                                <Divider />
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <StarOutlineRoundedIcon />
                                        <Typography className={classes.infoText}>Star</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepoDetail.stargazers_count)}</Typography>
                                    </div>
                                </div>
                                <Divider />
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <div className={classes.customIcon}>
                                            <img src={gitForkIcon} />
                                        </div>
                                        <Typography className={classes.infoText}>Fork</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepoDetail.forks_count)}</Typography>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                            <div className={classes.sectionTwo}>
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <div className={classes.customIcon}>
                                            <img src={gitBranchIcon} />
                                        </div>
                                        <Typography className={classes.infoText}>Branches</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{selectedRepoBranch && selectedRepoBranch}</Typography>
                                    </div>
                                </div>
                                <Divider />
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <ErrorOutlineOutlinedIcon />
                                        <Typography className={classes.infoText}>Issues</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepoDetail.open_issues_count)}</Typography>
                                    </div>
                                </div>
                                <Divider />
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <img src={gitPullRequestIcon} />
                                        <Typography className={classes.infoText}>Pull Requests</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{selectedRepoPull && selectedRepoPull}</Typography>
                                    </div>
                                </div>
                            </div>


                            {addButton === true ? (
                                <Button startIcon={<BookmarkBorderSharpIcon />} className={classes.addBookmarkButton} onClick={() => dispatch(addToBookmark(selectedRepoDetail))}>
                                    Add to Bookmarks
                                </Button>
                            ) : (
                                <Button startIcon={<BookmarkBorderSharpIcon />} className={classes.removeBookmarkButton} onClick={() => dispatch(removeBookmark(selectedRepoDetail))}>
                                    Remove Bookmarks
                                </Button>
                            )}

                        </>
                        )}
                    </Grid>


                    <Grid item sm={9} xs={12} className={classes.mainContainer}>
                        {
                            selectedRepoContent && !selectedRepoContent.message && (
                                <div className={classes.repoContent} dangerouslySetInnerHTML={handleRepoContent(selectedRepoContent.content)}>
                                </div>
                            )
                        }
                        {selectedRepoContent && selectedRepoContent.message && selectedRepoContent.message.length > 0 &&
                            <div className={classes.alertContent} ><OutlinedFlagIcon style={{ marginRight: "0.5rem" }} />
                                <Typography>There is no content</Typography>
                            </div>
                        }
                    </Grid>
                </Grid>
            </Main>
        </>
    );
}

export default RepoDetails