// Get all buttons with the class "btn" and add click event listeners to them
const buttons = document.querySelectorAll(".btn button");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // Toggle the 'active' class on the clicked button
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// Conversion factors for different unit types
const lengthConversionFactors = {
    m: { m: 1, cm: 100, dm: 10, ft: 3.28084, in: 39.370079, km: 0.001, mi: 0.000621371 },
    cm: { m: 0.01, cm: 1, dm: 0.1, ft: 0.0328084, in: 0.393701, km: 0.00001, mi: 0.0000062137 },
    dm: { m: 0.1, cm: 10, dm: 1, ft: 0.328084, in: 3.93701, km: 0.0001, mi: 0.0000621371 },
    ft: { m: 0.3048, cm: 30.48, dm: 3.048, ft: 1, in: 12, km: 0.0003048, mi: 0.000189394 },
    in: { m: 0.0254, cm: 2.54, dm: 0.254, ft: 0.0833333, in: 1, km: 0.0000254, mi: 0.000015783 },
    km: { m: 1000, cm: 100000, dm: 10000, ft: 3280.84, in: 39370.079, km: 1, mi: 0.621371 },
    mi: { m: 1609.344, cm: 160934.4, dm: 16093.44, ft: 5280.84, in: 63360.079, km: 1.609344, mi: 1 },
};

const temperatureConversionFactors = {
    celsius: { celsius: 1, fahrenheit: 33.8, kelvin: 274.15, rankine: 493.47 },
    fahrenheit: { celsius: -17.22, fahrenheit: 1, kelvin: 255.93, rankine: 459.67 },
    kelvin: { celsius: 273.15, fahrenheit: 33.8, kelvin: 1, rankine: 1.8 },
    rankine: { celsius: -272.594, fahrenheit: -458.67, kelvin: 0.5556, rankine: 1 },
};

const timeConversionFactors = {
    sec: { sec: 1, min: 1/60, hour: 1/3600, day: 1/86400, year: 1/31536000, dec: 1/315360000 },
    min: { sec: 60, min: 1, hour: 1/60, day: 1/1440, year: 1/525600, dec: 1/5256000 },
    hour: { sec: 3600, min: 60, hour: 1, day: 1/24, year: 1/8760, dec: 1/87600 },
    day: { sec: 86400, min: 1440, hour: 24, day: 1, year: 1/365, dec: 1/3650 },
    year: { sec: 31536000, min: 525600, hour: 8760, day: 365, year: 1, dec: 1/10 },
    dec: { sec: 315360000, min: 5256000, hour: 87600, day: 3650, year: 10, dec: 1 },
};

const massConversionFactors = {
    mg: { mg: 1, g: 0.001, oz: 0.000035274, lb: 0.00000220462, kg: 0.000001, ton: 1.1023e-9 },
    g: { mg: 1000, g: 1, oz: 0.035274, lb: 0.00220462, kg: 0.001, ton: 1.1023e-6 },
    oz: { mg: 28349.5, g: 28.3495, oz: 1, lb: 0.0625, kg: 0.0283495, ton: 2.835e-5 },
    lb: { mg: 453592, g: 453.592, oz: 16, lb: 1, kg: 0.453592, ton: 0.000453592 },
    kg: { mg: 1000000, g: 1000, oz: 35.274, lb: 2.20462, kg: 1, ton: 0.001 },
    ton: { mg: 907185000, g: 907185, oz: 32000, lb: 2204.62, kg: 907.185, ton: 1 },
};

// Event listeners for unit type buttons
document.querySelector(".btn_length").addEventListener("click", function () {
    // Show the Length section and hide other sections
    document.querySelector(".message").style.display = "none";
    document.querySelector(".Length").style.display = "block";
    document.querySelector(".Temperature").style.display = "none";
    document.querySelector(".Time").style.display = "none";
    document.querySelector(".Mass").style.display = "none";
});

document.querySelector(".btn_temp").addEventListener("click", function () {
    // Show the Temperature section and hide other sections
    document.querySelector(".Temperature").style.display = "block";
    document.querySelector(".Length").style.display = "none";
    document.querySelector(".Time").style.display = "none";
    document.querySelector(".Mass").style.display = "none";
});

document.querySelector(".btn_time").addEventListener("click", function () {
    // Show the Time section and hide other sections
    document.querySelector(".Temperature").style.display = "none";
    document.querySelector(".Length").style.display = "none";
    document.querySelector(".Time").style.display = "block";
    document.querySelector(".Mass").style.display = "none";
});

document.querySelector(".btn_mass").addEventListener("click", function () {
    // Show the Mass section and hide other sections
    document.querySelector(".Temperature").style.display = "none";
    document.querySelector(".Length").style.display = "none";
    document.querySelector(".Time").style.display = "none";
    document.querySelector(".Mass").style.display = "block";
})

// Conversion functions for different unit types
function convertLength() {
    // Get input values
    const inputUnit = document.getElementById("length_inputUnit").value;
    const outputUnit = document.getElementById("length_outputUnit").value;
    const inputValue = parseFloat(document.getElementById("length_inpfrom").value);

    // Calculate the converted value
    const convertedValue = inputValue * lengthConversionFactors[inputUnit][outputUnit];

    // Display the converted value
    document.getElementById("length_inpto").value = convertedValue.toFixed(6);
}

// Conversion functions to convert back to the original unit
function convertbackLength() {
    const inputUnit = document.getElementById("length_inputUnit").value;
    const outputUnit = document.getElementById("length_outputUnit").value;
    const outputValue = parseFloat(document.getElementById("length_inpto").value);

    const convertedValue = outputValue / lengthConversionFactors[inputUnit][outputUnit];
    document.getElementById("length_inpfrom").value = convertedValue.toFixed(6);
}
// ... (similar conversion functions for other unit types).............................

function convertTemperature() {
    const inputUnit = document.getElementById("temp_inputUnit").value;
    const outputUnit = document.getElementById("temp_outputUnit").value;
    const inputValue = parseFloat(document.getElementById("temp_inpfrom").value);

    const convertedValue = inputValue * temperatureConversionFactors[inputUnit][outputUnit];
    document.getElementById("temp_inpto").value = convertedValue.toFixed(6);
}

function convertbackTemperature() {
    const inputUnit = document.getElementById("temp_inputUnit").value;
    const outputUnit = document.getElementById("temp_outputUnit").value;
    const outputValue = parseFloat(document.getElementById("temp_inpto").value);

    const convertedValue = outputValue / temperatureConversionFactors[inputUnit][outputUnit];
    document.getElementById("temp_inpfrom").value = convertedValue.toFixed(6);
}

function convertTime() {
    const inputUnit = document.getElementById("time_inputUnit").value;
    const outputUnit = document.getElementById("time_outputUnit").value;
    const inputValue = parseFloat(document.getElementById("time_inpfrom").value);

    const convertedValue = inputValue * timeConversionFactors[inputUnit][outputUnit];
    document.getElementById("time_inpto").value = convertedValue.toFixed(6);
}

function convertbackTime() {
    const inputUnit = document.getElementById("time_inputUnit").value;
    const outputUnit = document.getElementById("time_outputUnit").value;
    const outputValue = parseFloat(document.getElementById("time_inpto").value);

    const convertedValue = outputValue / timeConversionFactors[inputUnit][outputUnit];
    document.getElementById("time_inpfrom").value = convertedValue.toFixed(6);
}

function convertMass() {
    const inputUnit = document.getElementById("mass_inputUnit").value;
    const outputUnit = document.getElementById("mass_outputUnit").value;
    const inputValue = parseFloat(document.getElementById("mass_inpfrom").value);

    const convertedValue = inputValue * massConversionFactors[inputUnit][outputUnit];
    document.getElementById("mass_inpto").value = convertedValue.toFixed(6);
}

function convertbackMass() {
    const inputUnit = document.getElementById("mass_inputUnit").value;
    const outputUnit = document.getElementById("mass_outputUnit").value;
    const outputValue = parseFloat(document.getElementById("mass_inpto").value);

    const convertedValue = outputValue / massConversionFactors[inputUnit][outputUnit];
    document.getElementById("mass_inpfrom").value = convertedValue.toFixed(6);
}

  