// import using require
const Shape = require("./shape");
class Circile extends Shape {
  constructor() {
    super();
    this.calculateArea = this.calculateArea.bind(this);
  }
  calculateArea() {}
}

// declare class

// export class using module.exports
module.exports = Circile;
console.log(new Circile());
