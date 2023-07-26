// setting value of kelvin to 293
var kelvin = 0;

// converting kelvin to celsius
var celsius = (kelvin - 293);

var fahrenheit = (celsius *(9/5) + 32);

// rounding fahrenheit value to a whole number
fahrenheit = (Math.floor(fahrenheit));

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');
