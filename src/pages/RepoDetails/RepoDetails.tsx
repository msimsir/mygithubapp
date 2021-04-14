import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import gitPullRequestIcon from "../../assets/git-pull-request-icon.svg";
import gitForkIcon from "../../assets/git-fork-icon.svg";
import gitBranchIcon from "../../assets/git-branch-icon.svg";
import { formatCount } from "../../utils/formatCount";

const RepoDetails: React.FC = () => {
    const classes = useStyles();
    const [selectedRepoDetail, setSelectedRepoDetail] = useState<Repo | undefined>(undefined);
    const [selectedRepoContent, setSelectedRepoContent] = useState<RepoContent | undefined>(undefined);
    const [selectedRepoBranch, setSelectedRepoBranch] = useState<number>(0);
    const [selectedRepoPull, setSelectedRepoPull] = useState<number>(0);
    const selectedRepo = useSelector((state: RootState) => state.repo.selectedRepo);
    const repoContent = useSelector((state: RootState) => state.repo.repoContent);
    const branchCount = useSelector((state: RootState) => state.repo.branchCount);
    const pullCount = useSelector((state: RootState) => state.repo.pullCount);

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


    const handleRepoContent = (content: string) => {
        const text = base64.decode(content)
        return {
            __html: marked(text)
        };
    }

    console.log("*******repodetail", selectedRepoDetail);
    console.log("*******repocontent", selectedRepoContent);
    return (
        <>
            <Header />
            <Main>
                <Grid container>
                    {selectedRepo && (
                        <Grid item md={3} className={classes.sidebarContainer}>
                            <BookOutlinedIcon className={classes.repoDetailIcon} />
                            <Typography variant="h5" className={classes.repoTitle}>{selectedRepo.full_name}</Typography>
                            <Typography variant="body1">{selectedRepo.description}</Typography>
                            <div className={classes.linkWrapper} onClick={() => selectedRepo && window.open(selectedRepo.html_url)}>
                                <LinkIcon className={classes.linkIcon} />
                                <Typography className={classes.linkTitle}>{selectedRepo?.full_name}</Typography>
                            </div>
                            <div className={classes.sectionOne}>
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <VisibilityOutlinedIcon />
                                        <Typography className={classes.infoText}>Watch</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepo.subscribers_count)}</Typography>
                                    </div>
                                </div>
                                <Divider />
                                <div className={classes.infoWrapper}>
                                    <div className={classes.iconWrapper}>
                                        <StarOutlineRoundedIcon />
                                        <Typography className={classes.infoText}>Star</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepo.stargazers_count)}</Typography>
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
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepo.forks_count)}</Typography>
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
                                        <Typography className={classes.infoCountText}>{formatCount(selectedRepo.open_issues_count)}</Typography>
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
                            <Button startIcon={<BookmarkBorderOutlinedIcon />} className={classes.addBookmarkButton}>
                                Add to Bookmarks
                        </Button>
                        </Grid>
                    )}

                    <Grid item md={9} className={classes.mainContainer}>
                        {
                            selectedRepoContent && (
                                <div dangerouslySetInnerHTML={handleRepoContent(selectedRepoContent.content)}>

                                </div>
                            )
                        }
                    </Grid>
                </Grid>
            </Main>
        </>
    );
}

export default RepoDetails