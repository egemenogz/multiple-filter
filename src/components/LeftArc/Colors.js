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

export default function Colors() {

  const onClick = (datas) => {
    if (dataStore.color.includes(datas)) {
      dataStore.setColor(dataStore.color.filter((item) => item !== datas));
    } else {
      dataStore.setColor([...dataStore.color, datas]);
    }
  };

  const colors = data.map((x) => x.color);

  const colorDuplicateFilter = data.filter(
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
            {colorDuplicateFilter.map((datas) => (
              <TableRow key={datas.id}>
                <TableCell sx={{ paddingLeft: "10px" }} key={datas.id}>
                  <Checkbox
                    checked={dataStore.color.includes(datas.color)}
                    onChange={() => onClick(datas.color)} 
                  />
                  {datas.color}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
