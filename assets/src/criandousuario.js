const nome = document.getElementById('name');
const cargo = document.getElementById('job');
const atividades = document.getElementsByName('activity');
const result = document.getElementById('result');
const details = document.getElementById('details');

const avatarMax = 36;

// //LEARN: Pegar o resultado pela URL
// const parametros = new URLSearchParams(window.location.search);
// const nomeURL = parametros.get('name');

function gerarResultado() {
  const numeroAleatorio = Math.floor(Math.random() * avatarMax) + 1;

  let cartaoKanban = `<cartao-kanban `;

  if (nome.value != '' && nome.value != undefined) {
    cartaoKanban += `nome="${nome.value}" `;
  }

  if (
    cargo.value != '' &&
    cargo.value != 'Choose one' &&
    cargo.value != undefined
  ) {
    cartaoKanban += `cargo="${cargo.value}" `;
  }

  const atividadesSelecionadas = Array.from(atividades)
    .filter(atividade => atividade.checked == true)
    .map(atividade => atividade.id)
    .join(',');

  if (atividadesSelecionadas !== '') {
    cartaoKanban += `tags="${atividadesSelecionadas}" `;
  }

  if (details.value != '' && details.value != undefined) {
    cartaoKanban += `detalhes="${details.value}" `;
  }

  cartaoKanban += `imgsrc="${numeroAleatorio}"
  ></cartao-kanban>`;

  result.innerHTML = cartaoKanban;
}

async function copiarElemento() {
  try {
    await navigator.clipboard.writeText(result.value);
    alert('Copied that!');
  } catch (e) {
    alert(`Erro: ${e.message}`);
  }
}
