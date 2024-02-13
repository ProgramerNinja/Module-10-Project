const { Square, Triangle, Circle } = require('./shapes.js');

test('render method should return the correct SVG string with the specified color for Square', () => {
    const square = new Square();
    square.setColor("red");
    square.setBorderColor("black");
    square.setText("TST");
    expect(square.render()).toEqual(`<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="red" stroke="black"/>
    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle">TST</text>
</svg>`);
});

test('render method should return the correct SVG string with the specified color for a triangle', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    triangle.setBorderColor("black");
    triangle.setText("TST");
    expect(triangle.render()).toEqual(`<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 10,90 90,90" fill="blue" stroke="black"/>
    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle">TST</text>
</svg>`);
});

test('render method should return the correct SVG string with the specified color for Circle', () => {
    const circle = new Circle();
    circle.setColor("blue");
    circle.setBorderColor("black");
    circle.setText("TST");
    expect(circle.render()).toEqual(`<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="blue" stroke="black"/>
    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle">TST</text>
</svg>`);
});