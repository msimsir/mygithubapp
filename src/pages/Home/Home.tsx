import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import searchLogo from "../../assets/searchLogo.svg";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Main>
                <Grid container direction="column" justify="center" alignItems="center">
                    <img src={searchLogo} />
                    <Typography style={{ fontSize: "1.5rem", color:"#85b0f2" }}>Search results will appear here</Typography>
                </Grid>
            </Main>
        </>
    )
};

export default Home;