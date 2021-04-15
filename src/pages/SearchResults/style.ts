import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
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
  },
  actionCount: { position: "absolute", right: "22px" },
  mainPanelContainer: { padding: "2.625rem 4rem" },
  headerText: { marginBottom: "1rem" },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    paddingTop: "1.5rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: "1.5rem",
  },
  cardInfo: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  cardIcon: {
    marginTop: "0.25rem",
    marginRight: "0.5rem",
    color: "#323232",
    fontSize: 24,
  },
  cardDescription: {
    color: "#375f9d",
  },
  userPic: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  loadingPanel: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
}));
