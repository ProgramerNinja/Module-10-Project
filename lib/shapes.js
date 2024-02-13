class Square {
    constructor() {
        this.text = '';
        this.color = '';
        this.borderColor = '';
        // Add more properties like color, size, etc. as needed
    }

    setText(text) {
        this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
    setBorderColor(borderColor) {
        this.borderColor = borderColor;
    }


    render() {
        // Generate SVG code for a square with text in the middle
        return `<svg width="100" height="100">
                    <rect width="100" height="100" fill="${this.color}" stroke="${this.borderColor}"/>
                    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
                </svg>`;
    }
}

class Triangle {
    constructor() {
        this.text = '';
        this.color = '';
        this.borderColor = '';
        // Add more properties like color, size, etc. as needed
    }

    setText(text) {
        this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
    setBorderColor(borderColor) {
        this.borderColor = borderColor;
    }


    render() {
        // Generate SVG code for a triangle with text in the middle
        return `<svg width="100" height="100">
                    <polygon points="50,10 10,90 90,90" fill="${this.color}" stroke="${this.borderColor}"/>
                    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
                </svg>`;
    }
}

class Circle {
    constructor() {
        this.text = '';
        this.color = '';
        this.borderColor = '';
        // Add more properties like color, size, etc. as needed
    }

    setText(text) {
        this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
    setBorderColor(borderColor) {
        this.borderColor = borderColor;
    }


    render() {
        // Generate SVG code for a circle with text in the middle
        return `<svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="${this.color}" stroke="${this.borderColor}"/>
                    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
                </svg>`;
    }
}

module.exports = Square, Triangle, Circle;