
// // Obtener la instancia del dropdown si ya ha sido creada
// const myDropdownI2 = bootstrap.Dropdown.getInstance('#myDropdown');

// // Verificar si existe la instancia
// if (myDropdownI2) {
//     console.log('Instancia encontrada:', myDropdownI2);
// } else {
//     console.log('No se encontró la instancia.');
// }

// // Crear una nueva instancia o devolver la existente
// const myDropdownI = bootstrap.Dropdown.getOrCreateInstance('#myDropdown');
// console.log('Instancia creada o recuperada:', myDropdownI);

// // Abrir el dropdown manualmente después de 2 segundos
// setTimeout(() => {
//     myDropdownI.show();
//     console.log('Dropdown abierto manualmente.');
// }, 2000);


const myTab = document.getElementById('myDropdown');
myTab.addEventListener('show.bs.dropdown', event => {
    console.log('Abierto');
})

myTab.addEventListener('hide.bs.dropdown', event => {
    console.log('Cerrado');
})

const myDropdownI = bootstrap.Dropdown.getOrCreateInstance('#myDropdown')
myDropdownI.show()
myDropdownI.hide()