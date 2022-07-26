class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
const a = new Rectangle(1, 2)
const b = new Rectangle(1, 2) 
console.log(a === b) // false
