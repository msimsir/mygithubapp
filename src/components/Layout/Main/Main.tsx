import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Grid container style={{ height: "calc(100% - 64px)" }}>
            {children}
        </Grid>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};


export default Main;