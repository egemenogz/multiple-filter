import "./App.css";
import Grid from "@mui/material/Grid";
import Topbar from "./components/Topbar/Topbar";
import LeftArc from "./components/LeftArc/LeftArc";
import RightArc from "./components/RightArc/RightArc";
import { dataStore } from "./data/StoreData";

function App() {
  // let content = null;

  // if (dataStore.filteredData.length > 0) {
  //   content = ;
  // } else {
  //   content = <p>No result found. Please check search bar!</p>;
  // }

  return (
    <div className="App">
      <Topbar />
      <div className="appBody" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <LeftArc />
          </Grid>
          <Grid item xs={9.5}>
          <RightArc />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
