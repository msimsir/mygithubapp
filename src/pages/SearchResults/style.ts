import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  sidebarContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRight: "1px solid #c4c4c4",
  },
  actionContainer: {
    borderBottom: "1px solid #c4c4c4",
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
  },
  action: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#d9e8ff",
      color: "rgba(55, 95, 157, 0.87)",
    },
    "&:hover $actionIcon": {
      color: "rgba(55, 95, 157, 0.87)",
    },
    "&:hover $actionCount": {
      color: "rgba(55, 95, 157, 0.87)",
    },

    "&:active": {
      backgroundColor: "#d9e8ff",
      color: "rgba(55, 95, 157, 0.87)",
    },
  },
  actionIcon: {},
  actionCount: { position: "absolute", right: "22px" },
  mainPanelContainer: { padding: "2.625rem 4rem" },
  headerText: {},
  repoContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "1.5rem  0  ",
  },
  repoContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: "1.5rem",
  },
  repoInfo: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  repoIcon: {
    marginTop: "0.25rem",
    marginRight: "0.5rem",
    color: "#323232",
    fontSize: 24,
  },
  repoDescription: {
      color: "#375f9d",
  },
}));
