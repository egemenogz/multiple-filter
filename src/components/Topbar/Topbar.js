// import { useEffect } from "react";
import {observer} from "mobx-react";
import "./Topbar.css";
import data from "../../data/Data";
import { dataStore } from "../../data/StoreData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBrush } from "@fortawesome/free-solid-svg-icons";

const Topbar = observer(()=> {
  // useEffect(()=> {
  //   console.log("Search value:", dataStore.searchValue);
  //   console.log("Filtered Data:", dataStore.filteredData);
  //   console.log("Filtered Data Key:", dataStore.filteredDataKey);
  // },[dataStore.searchValue, dataStore.filteredData, dataStore.filteredDataKey]); 
  
  return (
    <header className="App-header">
      <div className="header-items">
        <input
          placeholder="search"
          value={dataStore.searchValue}
          onChange={(e) => dataStore.setSearchValue(e.target.value)}
        />
        <button
          type="button"
          className="search"
          onClick={() => {
            const filteredData = data.filter(
              (item) =>
                item.brand
                  .toLowerCase()
                  .includes(dataStore.searchValue.toLowerCase()) ||
                item.serial
                  .toLowerCase()
                  .includes(dataStore.searchValue.toLowerCase()) ||
                item.model
                  .toLowerCase()
                  .includes(dataStore.searchValue.toLowerCase())
            );

            dataStore.setFilteredDataKey(filteredData);
            dataStore.setFilteredData(filteredData);
          }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "#000000" }}
          />
        </button>
        <button type="button" className="clear" onClick={()=> {
          dataStore.setFilteredDataKey(data);
          dataStore.setFilteredData(data);
          dataStore.setSearchValue('');
        }}>
          <FontAwesomeIcon
            icon={faBrush}
            size="lg"
            style={{ color: "#000000" }}
          />
        </button>
      </div>
    </header>
  );
});

export default Topbar;