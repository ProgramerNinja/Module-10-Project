const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a common color name or a hexidecimal including the "#" for the fill color',
    },
    {
        type: 'input',
        name: 'borderColor',
        message: 'Please enter a common color name or a hexidecimal including the "#" for the border color',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the shape (max 3 characters):',
        validate: function(input) {
            if (input.length <= 3) {
                return true;
            } else {
                return 'Text must be 3 characters or less.';
            }
        }
    },
    // Add more prompts for color, size, etc. as needed
])
.then((answers) => {
    let shape;
    switch (answers.shape) {
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        default:
            console.log('Invalid shape selected');
            return;
    }

    shape.setText(answers.text);
    setColor(answers.color);
    setBorderColor(answers.borderColor);
    // Set other properties based on user input

    const svgCode = shape.render();
    console.log(svgCode);
})
.catch((error) => {
    console.error(error);
});