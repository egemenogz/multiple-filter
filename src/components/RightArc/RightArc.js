import { dataStore } from "../../data/StoreData";
import "./RightArc.css";
import { observer } from "mobx-react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const RightArc = observer(() => {

  const hasSearchPerformed = dataStore.filteredData.length > 0;

  return (
    <TableContainer component={Paper}>
      {hasSearchPerformed ? (

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Serial</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Points&nbsp;(/5)</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Motor/Tork</TableCell>
            <TableCell align="right">Horse Power</TableCell>
            <TableCell align="right">KM</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Area</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataStore.filteredData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  style={{ width: 100, padding: 5 }}
                  src={item.imgUrl}
                  alt=""
                />
              </TableCell>
              <TableCell align="right">{item.brand}</TableCell>
              <TableCell align="right">{item.serial}</TableCell>
              <TableCell align="right">{item.model}</TableCell>
              <TableCell align="right">{item.point}</TableCell>
              <TableCell align="right">{item.year}</TableCell>
              <TableCell align="right">{item.motorHacmi}</TableCell>
              <TableCell align="right">{item.motor}</TableCell>
              <TableCell align="right">{item.km}</TableCell>
              <TableCell align="right">{item.color}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.city}</TableCell>
              <TableCell align="right">{item.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      ) : (
        <p>No result found! Please check search again.</p>
      )}
    </TableContainer>
  );
});
export default RightArc;
