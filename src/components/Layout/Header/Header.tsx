import React from "react";
import { AppBar, Toolbar, InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import useStyles from "./style";
import logo from "../../../assets/logo.svg";

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <img src={logo} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Button className={classes.bookmarkButton} startIcon={<BookmarkBorderOutlinedIcon />}>
                    Bookmarks
                </Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header;