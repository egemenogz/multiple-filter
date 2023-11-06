import React from "react";
import "./RightArc.css";
import data from "../../data/Data";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RightArc() {

  return (
    <TableContainer component={Paper}>
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
          {data.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img style={{ width: 100, padding: 5 }} src={data.imgUrl} alt="" />
              </TableCell>
              <TableCell align="right">{data.brand}</TableCell>
              <TableCell align="right">{data.serial}</TableCell>
              <TableCell align="right">{data.model}</TableCell>
              <TableCell align="right">{data.point}</TableCell>
              <TableCell align="right">{data.year}</TableCell>
              <TableCell align="right">{data.motorHacmi}</TableCell>
              <TableCell align="right">{data.motor}</TableCell>
              <TableCell align="right">{data.km}</TableCell>
              <TableCell align="right">{data.color}</TableCell>
              <TableCell align="right">{data.price}</TableCell>
              <TableCell align="right">{data.city}</TableCell>
              <TableCell align="right">{data.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default React.memo(RightArc);