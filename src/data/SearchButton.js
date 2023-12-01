import {dataStore} from "./StoreData";

export const searchButton = () => {
  const filterColor = dataStore.filteredDataKey.filter((item) =>
    dataStore.color((x) => x === item.color)
  );
  const filterSerial = dataStore.filteredDataKey.filter((item) =>
    dataStore.serial((x) => x === item.serial)
  );
  const filterIl = dataStore.filteredDataKey.filter((item) =>
    dataStore.il((x) => x === item.il)
  );
  const filterFiyat = dataStore.filteredDataKey.filter((item) =>
    dataStore.fiyatMin <item.fiyat && dataStore.fiyatMaks >item.fiyat,
  );
  const filterYil = dataStore.filteredDataKey.filter((item) =>
    dataStore.yilMin <item.yil && dataStore.yilMaks >item.yil,
  );
  const filterPoint = dataStore.filteredDataKey.filter((item) =>
    dataStore.puanMin <item.puan && dataStore.puanMaks >item.puan,
  );
  const filterKm = dataStore.filteredDataKey.filter(
    item => dataStore.kmMin < item.km && dataStore.kmMaks > item.km
  );

  const filteredArray = dataStore.filteredDataKey.filter(value =>
    filterColor.includes(value) &&
    filterSerial.includes(value) &&
    filterIl.includes(value) &&
    filterFiyat.includes(value) &&
    filterYil.includes(value) &&
    filterPoint.includes(value) &&
    filterKm.includes(value)
  );

  dataStore.setFilteredData(filteredArray);
};

export default searchButton;