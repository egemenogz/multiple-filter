import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { dataStore } from "../../data/StoreData";

export default function Point() {
  return (
    <TableContainer
      sx={{
        marginTop: "3px",
      }}
      component={Paper}
    >
      <TableHead sx={{ backgroundColor: "black" }}>
        <TableRow>
          <TableCell sx={{ color: "white" }} align="center">
            Point
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <div>
          <input
            type="text"
            placeholder="Min"
            value={dataStore.puanMin}
            onChange={(e) => dataStore.setPuanMin(e.target.value)}
          />{" "}
          -
          <input
            type="text"
            placeholder="Max"
            value={dataStore.puanMaks}
            onChange={(e) => dataStore.setPuanMaks(e.target.value)}
          />
        </div>
      </TableBody>
    </TableContainer>
  );
}
