import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  sidebarContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid #c4c4c4",
    padding: "2.625rem 4.75rem",
    maxWidth: "360px",
    minWidth: "200px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },

  mainContainer: {
    padding: "2.625rem 4rem",
  },

  userAvatarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  userAvatar: {
    width: "206px",
    height: "206px",
    borderRadius: "50%",
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: "1.875rem",
  },
  userLogin: {
    color: "#646464",
  },
  userBio: {
    paddingTop: "1rem",
  },
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
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  repoBox: {
    width: "4.75rem",
    height: "2rem",
    border: "1px solid #2196f3",
    borderRadius: "0.25rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "0.625rem",
    color: "#2196f3",
  },
}));
