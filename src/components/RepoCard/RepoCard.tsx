import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Divider, Typography } from "@material-ui/core";
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import { formatRepoName } from "../../utils/formatRepoName";
import { Repo } from "../../store/repo/types";
import useStyles from "./style";
import { getBranchCountBySelected, getOneRepoBySelected, getPullCountBySelected, getRepoContentBySelected } from "../../store/repo/actions";

interface IProps {
    repo: Repo
}

const RepoCard = ({
    repo
}: IProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRepoDetail = (repo: Repo) => {
        dispatch(getRepoContentBySelected(formatRepoName(repo.html_url)));
        dispatch(getOneRepoBySelected(formatRepoName(repo.html_url)));
        dispatch(getBranchCountBySelected(formatRepoName(repo.html_url)));
        dispatch(getPullCountBySelected(formatRepoName(repo.html_url)));
        history.push("/repodetail");
    }
    
    return (
        <div key={repo.id} className={classes.cardContainer} >
            <div className={classes.cardContent} onClick={() => handleRepoDetail(repo)} >
                <div className={classes.cardIcon}>
                    <BookOutlinedIcon />
                </div>
                <div className={classes.cardInfo}>
                    <Typography variant="h6" className={classes.cardDescription}>{formatRepoName(repo.html_url)}</Typography>
                    <Typography variant="body1">{repo.description}</Typography>
                </div>
            </div>
            <Divider />
        </div>
    )
}



export default RepoCard;