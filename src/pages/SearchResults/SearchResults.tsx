import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, CircularProgress, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import { RootState } from "../../store";
import { Repo } from "../../store/repo/types";
import { User } from "../../store/user/types";
import { formatRepoName } from "../../utils/formatRepoName";
import useStyles from "./style";
import { getOneUserBySelected, getUserReposBySelected } from "../../store/user/actions";
import RepoCard from "../../components/RepoCard/RepoCard";

const SearchResults: React.FC = () => {
    const [filteredRepos, setFilteredRepos] = useState<Repo[] | []>([]);
    const [filteredRepoCount, setFilteredRepoCount] = useState(0);
    const [filteredUsers, setFilteredUsers] = useState<User[] | []>([]);
    const [filteredUserCount, setFilteredUserCount] = useState(0);
    const [filteredBookmarks, setFilteredBookmarks] = useState<Repo[] | []>([]);
    const [selectedSidebarItem, setSelectedSidebarItem] = useState("Repos");
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const repos = useSelector((state: RootState) => state.repo.repos)
    const repoCount = useSelector((state: RootState) => state.repo.totalCount)
    const reposLoading = useSelector((state: RootState) => state.repo.loading);
    const users = useSelector((state: RootState) => state.user.users)
    const userCount = useSelector((state: RootState) => state.user.totalCount)
    const bookmarks = useSelector((state: RootState) => state.bookmark.bookmarks)

    useEffect(() => {
        setFilteredRepos(repos);
    }, [repos]);

    useEffect(() => {
        setFilteredRepoCount(repoCount);
    }, [repoCount]);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    useEffect(() => {
        setFilteredUserCount(userCount);
    }, [userCount]);

    useEffect(() => {
        repos && bookmarks && setFilteredBookmarks(repos.filter((repo: Repo) => bookmarks.find((bookmark: Repo) => repo.id === bookmark.id)));
    }, [repos, bookmarks]);


    const handleUserDetail = (user: User) => {
        dispatch(getOneUserBySelected(user.login))
        dispatch(getUserReposBySelected(user.login))
        history.push("/userdetail")
    }

    return (
        <>
            <Header />
            <Main>
                <Grid container>
                    <Grid item md={3} sm={12} className={classes.sidebarContainer}>
                        <List className={classes.actionContainer}>
                            <ListItem button className={classes.action} onClick={() => setSelectedSidebarItem("Repos")} style={selectedSidebarItem === "Repos" ? {
                                backgroundColor: "#d9e8ff",
                                color: "rgba(55, 95, 157, 0.87)",
                            } : {}}>
                                <ListItemIcon style={selectedSidebarItem === "Repos" ? {
                                    color: "rgba(55, 95, 157, 0.87)",
                                } : {}}>
                                    <InsertDriveFileIcon />
                                </ListItemIcon>
                                <ListItemText primary="Repositories" />
                                <ListItemText primary={filteredRepoCount && filteredRepoCount} className={classes.actionCount}
                                />

                            </ListItem>
                            <ListItem button className={classes.action} onClick={() => setSelectedSidebarItem("Users")} style={selectedSidebarItem === "Users" ? {
                                backgroundColor: "#d9e8ff",
                                color: "rgba(55, 95, 157, 0.87)",
                            } : {}}>
                                <ListItemIcon style={selectedSidebarItem === "Users" ? {
                                    color: "rgba(55, 95, 157, 0.87)",
                                } : {}}>
                                    <InsertEmoticonOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                                <ListItemText primary={filteredUserCount && filteredUserCount} className={classes.actionCount}
                                />

                            </ListItem>
                            <ListItem button className={classes.action} onClick={() => setSelectedSidebarItem("Bookmarked")} style={selectedSidebarItem === "Bookmarked" ? {
                                backgroundColor: "#d9e8ff",
                                color: "rgba(55, 95, 157, 0.87)",
                            } : {}}
                            >
                                <ListItemIcon style={selectedSidebarItem === "Bookmarked" ? {
                                    color: "rgba(55, 95, 157, 0.87)",
                                } : {}}>
                                    <BookmarkBorderSharpIcon />
                                </ListItemIcon>
                                <ListItemText primary="Bookmarked" />
                                <ListItemText primary={filteredBookmarks && filteredBookmarks.length} className={classes.actionCount}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={9} sm={12}>
                        {reposLoading && <div className={classes.loadingPanel}> <CircularProgress /></div>}
                        {!reposLoading && (
                            <div className={classes.mainPanelContainer}>

                                {selectedSidebarItem === "Repos" && (
                                    <>
                                        <Typography className={classes.headerText} variant="h5">{repoCount} Repository Results</Typography>
                                        {filteredRepos && filteredRepos.map((repo: Repo) => (
                                            <RepoCard key={repo.id} repo={repo} />
                                        ))}
                                    </>
                                )}

                                {selectedSidebarItem === "Users" && (
                                    <>
                                        <Typography className={classes.headerText} variant="h5">{userCount} User Results</Typography>
                                        {filteredUsers && filteredUsers.map((user: User) => (
                                            <div key={user.id} className={classes.cardContainer}>
                                                <div className={classes.cardContent} onClick={() => handleUserDetail(user)}>
                                                    <div className={classes.cardIcon}>
                                                        <Avatar alt={user.login} src={user.avatar_url} className={classes.userPic} />
                                                    </div>
                                                    <div className={classes.cardInfo}>

                                                        <Typography variant="h6" className={classes.cardDescription}>{formatRepoName(user.html_url)}</Typography>
                                                        <Typography variant="body1" className={classes.cardDescription}>{user.bio}</Typography>

                                                    </div>
                                                </div>
                                                <Divider />
                                            </div>
                                        ))}
                                    </>
                                )}

                                {selectedSidebarItem === "Bookmarked" && (
                                    <>
                                        <Typography className={classes.headerText} variant="h5">{filteredBookmarks && filteredBookmarks.length} Bookmarked Repository Results</Typography>
                                        {filteredBookmarks && filteredBookmarks.length > 0 && filteredBookmarks.map((filteredBookmark: Repo) => (
                                            <RepoCard key={filteredBookmark.id} repo={filteredBookmark} />
                                        ))}
                                    </>
                                )}

                            </div>
                        )}


                    </Grid>
                </Grid>
            </Main>
        </>
    )
};

export default SearchResults;