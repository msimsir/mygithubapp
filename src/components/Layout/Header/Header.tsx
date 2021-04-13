import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import useStyles from "./style";
import logo from "../../../assets/logo.svg";
import { getReposBySearch } from "../../../store/repo/actions";
import { getUsersBySearch } from "../../../store/user/actions";

const Header: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState("");

    const getReposAndUsers = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            dispatch(getReposBySearch(search));
            dispatch(getUsersBySearch(search))
            history.push("/search");
        }
    }
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <img src={logo} onClick={() => history.push("/")} className={classes.logo} />
                <div className={classes.search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} onKeyPress={(e: React.KeyboardEvent) => getReposAndUsers(e)}
                >
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
        </AppBar >
    )
}

export default Header;