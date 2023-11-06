import "./App.css";
import Grid from "@mui/material/Grid";
import Topbar from "./components/Topbar/Topbar";
import LeftArc from "./components/LeftArc/LeftArc";
import RightArc from "./components/RightArc/RightArc";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div sx={{ flexGrow: 1 }}>
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
