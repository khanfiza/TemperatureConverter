const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp1');
    const valueTemp = temp1.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("result").style.backgroundColor="rgba(101, 100, 100, 0.329)";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result").style.backgroundColor="rgba(101, 100, 100, 0.329)";
    }
}