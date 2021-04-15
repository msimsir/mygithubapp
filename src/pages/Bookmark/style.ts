import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  sidebarContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRight: "1px solid #c4c4c4",
    padding: "2.625rem 2.875rem",
    maxWidth: "360px",
    minWidth: "200px",
    height: "100%",
  },
  mainContainer: {
    padding: "2.625rem 4rem",
  },

  bookmarkIcon: {
    width: 64,
    height: 64,
    color: "#000000",
  },
  bookmarkTitle: {
    marginTop: "1.5rem",
    color: "#000000",
  },
  subTitle: {
    color: "#646464",
  },
}));
