export default class APIUtils{
  static recordstoArray(records) {
    const recordsArray = Object.keys(records);
    recordsArray.splice(-1,1);
    return recordsArray.map(function(key) { return records[key] });
  }
}
