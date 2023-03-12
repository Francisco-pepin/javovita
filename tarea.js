var respuesta = ' ';
    respuesta = prompt ("HEY BRO, ¿Hiciste la tarea?").toUpperCase();
    
    if (respuesta == "SI")
    {
        alert("¡FELICIDADES ! ¡Bien hecho!");
        console.log("¡FELICIDADES!¡Bien hecho!");
    }
    else if (respuesta == "NO")
    {
        alert("BRO, No te rindas, ¡empieza ya mismo!");
        console.log("BRO, No te rindas, ¡empieza ya mismo!");
    }
    else
    {
        alert("Intente de nuevo");
        console.log("Intente de nuevo");
    }