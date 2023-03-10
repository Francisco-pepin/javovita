function inicio (){
    document.querySelector("#btn").addEventListener("click", mostrarEjercicio);
}

function convertirCelsiusAFahrenheit(temperatura) {
    let conversion = (temperatura * 1.8) + 32;

    return conversion;

}

function mostrarEjercicio(){
    let laTemperatura = Number(document.querySelector("#val1").value);

    let temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(laTemperatura);
    
    if (temperaturaEnFahrenheit) {
        mensaje = "la temperatura en fahrenheit es "+conversion;
        
    }

    document.querySelector("#resultado").innerHTML = mensaje;

}