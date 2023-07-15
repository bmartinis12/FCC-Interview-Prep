class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  add(item) {
    if(this.has(item)){
      return false;
    } else {
      this.dictionary[item] = item;
      return true;
    }
  }

  remove(item) {
    if(this.has(item)){
      delete this.dictionary[item];
      return true;
    } else {
      return false;
    }
  }

  size() {
    return Object.keys(this.dictionary).length;
  }
}
