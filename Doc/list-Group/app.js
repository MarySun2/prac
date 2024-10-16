// Obtener el contenedor de las pestañas
const myTab = document.getElementById('myTab');

// Escuchar el evento 'show' cuando se muestra una pestaña
myTab.addEventListener('show.bs.tab', event => {
    console.log('Pestaña mostrada:', event.target);
});

// Escuchar el evento 'hide' cuando se oculta una pestaña
myTab.addEventListener('hide.bs.tab', event => {
    console.log('Pestaña oculta:', event.target);
});

// Escuchar el evento 'hidden' cuando se ha ocultado completamente una pestaña
myTab.addEventListener('hidden.bs.tab', event => {
    console.log('Pestaña cerrada completamente:', event.target);
});

// Crear o recuperar la instancia de la pestaña principal
const myTabI = bootstrap.Tab.getOrCreateInstance('#myTab');

// Obtener una pestaña específica (por ejemplo, la segunda pestaña)
const myTabItem = bootstrap.Tab.getOrCreateInstance(document.querySelector('#profile-tab'));

// Mostrar la segunda pestaña programáticamente
myTabItem.show();
