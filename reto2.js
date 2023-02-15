// Seleccionamos todos los elementos "li" dentro del elemento "ol"
const listItems = document.querySelectorAll('#fruits-list li');

// Recorremos cada elemento "li" y le asignamos la clase "even" a los elementos pares
listItems.forEach((item, index) => {
  if (index % 2 === 1) {
    item.classList.add('even');
  }
});