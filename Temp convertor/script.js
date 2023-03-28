function convertTemp() {
	let celsius = parseFloat(document.getElementById("celsius-input").value);
	let fahrenheit = (celsius * 9/5) + 32;
	document.getElementById("fahrenheit-input").value = fahrenheit.toFixed(2);
}

