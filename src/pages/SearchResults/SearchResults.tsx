import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
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
import { getBranchCountBySelected, getOneRepoBySelected, getPullCountBySelected, getRepoContentBySelected } from "../../store/repo/actions";

const SearchResults: React.FC = () => {
    const [filteredRepos, setFilteredRepos] = useState<Repo[] | []>([])
    const [filteredRepoCount, setFilteredRepoCount] = useState(0);
    const [filteredUsers, setFilteredUsers] = useState<User[] | []>([])
    const [filteredUserCount, setFilteredUserCount] = useState(0);
    const [selectedSidebarItem, setSelectedSidebarItem] = useState("Repos");
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const repos = useSelector((state: RootState) => state.repo.repos)
    const repoCount = useSelector((state: RootState) => state.repo.totalCount)
    const users = useSelector((state: RootState) => state.user.users)
    const userCount = useSelector((state: RootState) => state.user.totalCount)

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


    const handleRepoDetail = (repo: Repo) => {
        dispatch(getRepoContentBySelected(formatRepoName(repo.html_url)));
        dispatch(getOneRepoBySelected(formatRepoName(repo.html_url)));
        dispatch(getBranchCountBySelected(formatRepoName(repo.html_url)));
        dispatch(getPullCountBySelected(formatRepoName(repo.html_url)));
        history.push("/repodetail");
    }

    return (
        <>
            <Header />
            <Main>
                <Grid container>
                    <Grid item md={3} className={classes.sidebarContainer}>
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
                            {selectedSidebarItem === "Repos" && (
                                <>
                                    <Typography className={classes.headerText} variant="h5">{repoCount} Repository Results</Typography>
                                    {filteredRepos && filteredRepos.map((repo: Repo) => (
                                        <div key={repo.id} className={classes.repoContainer}>
                                            <div className={classes.repoContent} onClick={() => handleRepoDetail(repo)}>
                                                <div className={classes.repoIcon}>
                                                    <BookOutlinedIcon />
                                                </div>
                                                <div className={classes.repoInfo}>
                                                    <Typography variant="h6" className={classes.repoDescription}>{formatRepoName(repo.html_url)}</Typography>
                                                    <Typography variant="body1">{repo.description}</Typography>
                                                </div>
                                            </div>
                                            <Divider />
                                        </div>
                                    ))}
                                </>
                            )}

                            {selectedSidebarItem === "Users" && (
                                <>
                                    <Typography className={classes.headerText} variant="h5">{userCount} User Results</Typography>
                                    {filteredUsers && filteredUsers.map((user: User) => (
                                        <div key={user.id} className={classes.repoContainer}>
                                            <div className={classes.repoContent}>
                                                <div className={classes.repoIcon}>
                                                    <Avatar alt={user.login} src={user.avatar_url} className={classes.userPic} />
                                                </div>
                                                <div className={classes.repoInfo}>

                                                    <Typography variant="h6" className={classes.repoDescription}>{formatRepoName(user.html_url)}</Typography>
                                                    <Typography variant="body1" className={classes.repoDescription}>{user.bio}</Typography>

                                                </div>
                                            </div>
                                            <Divider />
                                        </div>
                                    ))}
                                </>
                            )}

                            {selectedSidebarItem === "Bookmarked" && (
                                <>
                                    <p>Bookmarked Repos</p>
                                </>
                            )}

                        </div>

                    </Grid>
                </Grid>
            </Main>
        </>
    )
};

export default SearchResults;