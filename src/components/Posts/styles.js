import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => {
  return {
    mainContainer: {
      display: "flex",
      alignItems: "center",
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: "center",
    },
  };
});
