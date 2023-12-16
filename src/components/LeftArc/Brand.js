import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import datas from "../../data/Data";
import { dataStore } from "../../data/StoreData";

const Brand = () => {
  const brands = datas.map((o) => o.brand);
  const serials = datas.map((o) => o.serial);

  const onClick = (datas) => {
    if (dataStore.serial.includes((item) => item === datas)) {
      dataStore.setSeri(dataStore.serial.filter((item) => item !== datas));
    } else {
      dataStore.setSeri([...dataStore.serial, datas]);
    }
  };

  const brandDuplicateFilter = datas.filter(function (o, index) {
    return !brands.includes(o.brand, index + 1);
  });

  const serialDuplicateFilter = datas.filter(function (o, index) {
    return !serials?.includes(o.serial, index + 1);
  });

  return (
    <TableContainer sx={{ marginTop: "3px" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "black" }}>
          <TableCell sx={{ color: "white" }}>Brand/Serial</TableCell>
        </TableHead>
        <TableBody>
          {brandDuplicateFilter.map((datas) => (
            <TableRow
              key={datas.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell style={{ paddingTop: 10 }} align="center">
                {datas.brand}
              </TableCell>
              <TableCell>
                {serialDuplicateFilter.map((x) =>
                  x.brand === datas.brand ? (
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
