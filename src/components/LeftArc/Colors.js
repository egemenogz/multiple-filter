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

export default function colors() {
  
  const onClick = (data) => {
    if (dataStore.color.includes(data)) {
      dataStore.setColor(dataStore.color.filter((item) => item !== data));
    } else {
      dataStore.setColor([...dataStore.color, data]);
    }
  };

  const colors = data.map((x) => x.color);  

  const colorDublicateFilter = data.filter(
    (x, index) => !colors.includes(x.color, index + 1)
  );
  return (
    <div>
      <TableContainer sx={{ marginTop: "3px" }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }} align="center">
                Color
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colorDublicateFilter.map((data) => (
              
              <TableRow>
                <TableCell sx={{ paddingLeft: "10px" }} key={data.id}>
                  <Checkbox
                    checked={dataStore.color.includes(data.color)}
                    onChange={() => {
                      onClick(data.color);
                    }}
                  />
                  {data.color}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
