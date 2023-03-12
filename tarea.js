var respuesta = ' ';
    respuesta = prompt ("¿Hiciste la tarea?").toUpperCase();
    
    if (respuesta == "SI")
    {
        alert("¡Bien hecho!");
        console.log("¡Bien hecho!");
    }
    else if (respuesta == "NO")
    {
        alert("No te rindas, ¡empieza ya mismo!");
        console.log("No te rindas, ¡empieza ya mismo!");
    }
    else
    {
        alert("Intente de nuevo");
        console.log("Intente de nuevo");
    }