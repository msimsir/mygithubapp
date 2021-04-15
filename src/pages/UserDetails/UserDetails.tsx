import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {  Grid, Typography } from "@material-ui/core";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import useStyles from "./style";
import { User } from "../../store/user/types";
import { Repo } from "../../store/repo/types";
import { RootState } from "../../store";
import RepoCard from "../../components/RepoCard/RepoCard";

const UserDetails: React.FC = () => {
    const [selectedUserDetail, setSelectedUserDetail] = useState<User | undefined>(undefined);
    const [selectedUserRepos, setSelectedUserRepos] = useState<Repo[] | undefined>(undefined);
    const classes = useStyles();
    const selectedUser = useSelector((state: RootState) => state.user.selectedUser);
    const userRepos = useSelector((state: RootState) => state.user.userRepos);

    useEffect(() => {
        setSelectedUserDetail(selectedUser)
    }, [selectedUser]);

    useEffect(() => {
        setSelectedUserRepos(userRepos)
    }, [userRepos]);

    return (
        <>
            <Header />
            <Main>
                <Grid container>
                    <Grid item md={3} className={classes.sidebarContainer}>
                        {selectedUserDetail && (
                            <>
                                <div className={classes.userAvatarContainer}>
                                    <img src={selectedUserDetail.avatar_url} className={classes.userAvatar} />
                                </div>
                                <div className={classes.userInfoContainer}
                                >
                                    <Typography variant="h5">{selectedUserDetail.name}</Typography>
                                    <Typography variant="body1" className={classes.userLogin}>{selectedUserDetail.login}</Typography>
                                    <Typography variant="body1" className={classes.userBio}>{selectedUserDetail.bio}</Typography>
                                </div>

                            </>
                        )}
                    </Grid>
                    <Grid item md={9} className={classes.mainContainer}>
                        <div className={classes.header}>
                            <div>
                                <Typography variant="h5">Repositories</Typography>
                            </div>
                            <div className={classes.repoBox}>{selectedUserRepos && selectedUserRepos.length}</div>
                        </div>
                        {selectedUserRepos && selectedUserRepos.map((repo: Repo) => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))}
                    </Grid>
                </Grid>
            </Main>
        </>
    );
}

export default UserDetails;