import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import { RootState } from "../../store";
import { Repo } from "../../store/repo/types";
import { User } from "../../store/user/types";
import { formatRepoName } from "../../utils/formatRepoName";
import useStyles from "./style";

const SearchResults: React.FC = () => {
    const [filteredRepos, setFilteredRepos] = useState<Repo[] | []>([])
    const [filteredRepoCount, setFilteredRepoCount] = useState(0);
    const [filteredUsers, setFilteredUsers] = useState<User[] | []>([])
    const [filteredUserCount, setFilteredUserCount] = useState(0);

    const classes = useStyles();
    const dispatch = useDispatch();
    const repos = useSelector((state: RootState) => state.repo.repos)
    const repoCount = useSelector((state: RootState) => state.repo.totalCount)
    const users = useSelector((state: RootState) => state.user.users)
    const userCount = useSelector((state: RootState) => state.user.totalCount)

    useEffect(() => {
        repos && setFilteredRepos(repos);
        repoCount && setFilteredRepoCount(repoCount);
    }, [repos, repoCount]);

    useEffect(() => {
        repos && setFilteredUsers(users);
        userCount && setFilteredUserCount(userCount);
    }, [users, userCount]);

    return (
        <>
            <Header />
            <Main>
                <Grid container>
                    <Grid item md={3} className={classes.sidebarContainer}>
                        <List className={classes.actionContainer}>
                            <ListItem button className={classes.action}>

                                <ListItemIcon className={classes.actionIcon}>
                                    <InsertDriveFileIcon />
                                </ListItemIcon>
                                <ListItemText primary="Repositories" />

                                <ListItemText primary={filteredRepoCount && filteredRepoCount} className={classes.actionCount}
                                />

                            </ListItem>
                            <ListItem button className={classes.action}>
                                <ListItemIcon className={classes.actionIcon}>
                                    <InsertEmoticonOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                                <ListItemText primary={filteredUserCount && filteredUserCount} className={classes.actionCount}
                                />

                            </ListItem>
                            <ListItem button className={classes.action}>
                                <ListItemIcon className={classes.actionIcon}>
                                    <BookmarkBorderOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Bookmarked" />
                                <ListItemText primary="100" className={classes.actionCount}
                                />

                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={9}>
                        <div className={classes.mainPanelContainer}>
                            <Typography className={classes.headerText} variant="h5">{repoCount} Repository Results</Typography>
                            {filteredRepos && filteredRepos.map((repo: Repo) => (
                                <div key={repo.id} className={classes.repoContainer}>
                                    <div className={classes.repoContent}>
                                        <div className={classes.repoIcon}>
                                            <BookOutlinedIcon  />
                                        </div>
                                        <div className={classes.repoInfo}>
                                            <Typography variant="h6" className={classes.repoDescription}>{formatRepoName(repo.html_url)}</Typography>
                                            <Typography variant="body1">{repo.description}</Typography>
                                        </div>
                                    </div>
                                    <Divider />
                                </div>
                            ))}
                        </div>

                    </Grid>
                </Grid>
            </Main>
        </>
    )
};

export default SearchResults;