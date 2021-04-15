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

  repoDetailIcon: {
    width: 64,
    height: 64,
    color: "#323232",
  },

  repoTitle: {
    marginTop: "1.5rem",
    color: "#375f9d",
  },

  sectionOne: {
    marginBottom: "4rem",
  },

  sectionTwo: {
    marginBottom: "2rem",
  },

  linkWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "2rem",
  },

  linkIcon: {
    color: "#323232",
    marginRight: "0.5rem",
  },

  linkTitle: {
    fontSize: "1.25rem",
    color: "#2c98f0",
    cursor: "pointer",
  },

  infoWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem",
    marginBottom: "1rem",
  },

  infoText: {
    fontSize: "1.25rem",
    paddingLeft: "0.5rem",
  },

  infoCountText: {
    color: "#2c98f0",
    fontWeight: "bold",
  },

  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    "& > svg": {
      color: "#24292e",
    },
  },

  addBookmarkButton: {
    width: "268px",
    height: "38px",
    color: "#2c98f0",
    textTransform: "capitalize",
    fontSize: "1rem",
    border: "1px solid #2c98f0",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#2c98f0",
      color: "#ffffff",
    },
  },

  removeBookmarkButton: {
    width: "268px",
    height: "38px",
    color: "#ffffff",
    backgroundColor: "#2c98f0",
    textTransform: "capitalize",
    fontSize: "1rem",
    border: "1px solid #2c98f0",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#2c98f0",
    },
  },

  customIcon: {
    width: "1.25rem",
    height: "1.25rem",
    color: "#24292e",
  },

  mainContainer: {
    padding: "2.625rem 4rem",
  },

  repoContent: {
    width: "100%",
    height: "100%",
  },

  alertContent: {
    display: "flex",
    flexDirection: "row",
  },
}));
