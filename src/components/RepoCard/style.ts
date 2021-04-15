import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
}));
