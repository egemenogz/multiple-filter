import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import data from "../../data/Data";
import { dataStore } from "../../data/StoreData";

const Brand = () => {
  const brands = data.map((o) => o.brand);
  const serials = data.map((o) => o.serial);

  const onClick = (data) => {
    if (dataStore.serial.includes((item) => item === data)) {
      dataStore.setSeri(dataStore.serial.filter((item) => item !== data));
    } else {
      dataStore.setSeri([...dataStore.serial, data]);
    }
  };

  const brandDuplicateFilter = data.filter(function (o, index) {
    return !brands.includes(o.brand, index + 1);
  });

  const serialDuplicateFilter = data.filter(function (o, index) {
    return !serials?.includes(o.serial, index + 1);
  });

  return (
    <TableContainer sx={{ marginTop: "3px" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "black"}}>
          
            <TableCell
              sx={{ color: "white" }}
              
            >
              Brand / Serial
            </TableCell>
          
        </TableHead>
        <TableBody>
          {brandDuplicateFilter.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell style={{ paddingTop: 10 }} align="center">
                {data.brand}
              </TableCell>
              <TableCell>
                {serialDuplicateFilter.map((x) =>
                  x.brand === data.brand ? (
                    <div
                      key={x.km}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox
                        checked={dataStore.serial?.includes(x.serial)}
                        onChange={() => {
                          onClick(x.serial);
                        }}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                      {x.serial}
                    </div>
                  ) : null
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Brand;
