// complete this code
class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	// getters
	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	// method
	getArea() {
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
		this.side = side;
	}

	getPerimeter() {
		return 4 * this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
