
var dragged;

function allowDrop(evento) {
  evento.preventDefault();

  // Adiciona a classe "borderDrag" apenas se a div for dropaAqui
  if (evento.target.classList.contains('dropaAqui')) {
    evento.target.classList.add("borderDrag");
  }

  // Adiciona a classe "active" se a div for dropável
  if (evento.target.classList.contains('dropavel')) {
    evento.target.classList.add('active');
  }
}

function drag(evento) {
  evento.dataTransfer.setData("text/plain", evento.target.id);
  dragged = evento.target;
  evento.target.classList.add("dragging");
}

function drop(evento) {
  evento.preventDefault();
  var data = evento.dataTransfer.getData("text");

  // Remove a classe "borderDrag" quando o cartão é solto
  evento.target.classList.remove('borderDrag');

  // Verifica se a div é dropável antes de adicionar o cartão
  if (evento.target.classList.contains('dropavel')) {
    evento.target.before(document.getElementById(data));
  }

  // Remove a classe "active" após o drop
  dragged.classList.remove("dragging");
  evento.target.classList.remove('active');
}

// Remove a classe "borderDrag" quando o mouse é retirado da div
function dragLeave(evento) {
  evento.target.classList.remove('borderDrag');
}
