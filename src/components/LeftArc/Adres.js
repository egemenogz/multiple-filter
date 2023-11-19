import React, {useState} from "react";
import city from "../../data/City";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from '@mui/material/Checkbox';

export default function ComboBox() {
  const [dataStore, setDataStore] = useState({ il: [] });

  const onClick = (data) => {
    console.log(data);
    if (dataStore.il.some((item) => item === data)) {
      setDataStore({ ...dataStore, il: dataStore.il.filter((item) => item !== data) });
    } else {
      setDataStore({ ...dataStore, il: [...dataStore.il, data] });
    }
  };
  return (
    <div className="adres">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={city}
        disableCloseOnSelect
        onChange={(event) => {
          onClick(event.currentTarget.textContent);
        }}
        getOptionLabel={(option) => option.il}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.il}
          </li>
        )}
        style={{ backgroundColor: "lightgrey" }}
        renderInput={(params) => (
          <TextField {...params} label="City"  />
        )}
      />
    </div>
  );
}
