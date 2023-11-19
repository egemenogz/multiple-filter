import { action, makeObservable, observable } from 'mobx';
import data from '../data/Data';

class DataStore {
  filteredData = data;
  filteredDataKey = data;
  searchValue = '';
  color = [];
  serial = [];
  il = [];
  fiyatMin = ' ';
  fiyatMaks = ' ';

  kmMin = ' ';
  kmMaks = ' ';

  puanMin = ' ';
  puanMaks = ' ';

  yilMin = ' ';
  yilMaks = ' ';

  mhMin = ' ';
  mhMaks = ' ';

  constructor() {
    makeObservable(this, {
      filteredData: observable,
      setFilteredData: action,
      filteredDataKey: observable,
      setFilteredDataKey: action,
      searchValue: observable,
      setSearchValue: action,
      color: observable,
      setColor: action,
      serial: observable,
      setSeri: action,
      il: observable,
      setIl: action,
      fiyatMin: observable,
      setFiyatMin: action,
      fiyatMaks: observable,
      setFiyatMaks: action,

      kmMin: observable,
      setKmMin: action,
      kmMaks: observable,
      setKmMaks: action,

      puanMin: observable,
      setPuanMin: action,
      puanMaks: observable,
      setPuanMaks: action,

      yilMin: observable,
      setYilMin: action,
      yilMaks: observable,
      setYilMaks: action,

      mhMin: observable,
      setMhMin: action,
      mhMaks: observable,
      setMhMaks: action,
    });
  }

  setFilteredData(newValue) {
    this.filteredData = newValue;
  }
  setFilteredDataKey(newValue) {
    this.filteredDataKey = newValue;
  }
  setSearchValue(newValue) {
    this.searchValue = newValue;
  }
  setColor(newValue) {
    this.color = newValue;
  }
  setSeri(newValue) {
    this.serial = newValue;
  }
  setIl(newValue) {
    this.il = newValue;
  }
  setFiyatMin(newValue) {
    this.fiyatMin = newValue;
  }
  setFiyatMaks(newValue) {
    this.fiyatMaks = newValue;
  }

  setKmMin(newValue) {
    this.kmMin = newValue;
  }
  setKmMaks(newValue) {
    this.kmMaks = newValue;
  }

  setPuanMin(newValue) {
    this.puanMin = newValue;
  }
  setPuanMaks(newValue) {
    this.puanMaks = newValue;
  }

  setYilMin(newValue) {
    this.yilMin = newValue;
  }
  setYilMaks(newValue) {
    this.yilMaks = newValue;
  }

  setMhMin(newValue) {
    this.mhMin = newValue;
  }
  setMhMaks(newValue) {
    this.mhMaks = newValue;
  }
}

export const dataStore = new DataStore();