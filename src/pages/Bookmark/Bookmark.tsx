import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import useStyles from "./style";
import { RootState } from "../../store";
import RepoCard from "../../components/RepoCard/RepoCard";

const Bookmark: React.FC = () => {
    const classes = useStyles();
    const bookmarks = useSelector((state: RootState) => state.bookmark.bookmarks);

    return (
        <>
            <Header />
            <Main>
                <Grid container>
                    <Grid item md={3} sm={12} className={classes.sidebarContainer}>
                        <BookmarkBorderSharpIcon className={classes.bookmarkIcon} />
                        <Typography variant="h5" className={classes.bookmarkTitle}>Bookmarks</Typography>
                        <Typography variant="body1" className={classes.subTitle}>You have {bookmarks && bookmarks.length} bookmarks</Typography>
                    </Grid>
                    <Grid item md={9} sm={12} className={classes.mainContainer}>
                        {bookmarks && bookmarks.length > 0 && bookmarks.map(bookmark => (
                            <RepoCard key={bookmark.id} repo={bookmark} />
                        ))}
                    </Grid>
                </Grid>
            </Main>
        </>
    )
}

export default Bookmark;