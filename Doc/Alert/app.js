// Obtener el elemento de la alerta por su ID
const myAlertElement = document.getElementById("myAlert");

// Escuchar el evento de cierre de la alerta
myAlertElement.addEventListener("close.bs.alert", event => {
    console.log("Alerta cerrada");
});

// Crear o recuperar la instancia de la alerta
const myAlertInstance = bootstrap.Alert.getOrCreateInstance(myAlertElement);

// Cerrar la alerta manualmente después de 3 segundos
setTimeout(() => {
    myAlertInstance.close();
    console.log("Alerta cerrada manualmente.");
}, 3000);
