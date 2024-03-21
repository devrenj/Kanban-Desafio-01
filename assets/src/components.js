class cartaoKanban extends HTMLElement {
  constructor() {
    super();
    const componente = this.attachShadow({ mode: 'open' });
    componente.appendChild(this.conteudoCartao());
    componente.appendChild(this.estiloCartao());
  }
  //Preguiça né Rafa? Toma hard-work :D:D:D:D:D
  conteudoCartao() {
    const caminhoImagens = '/assets/img/avatars/Avatar-'
    const cartao = document.createElement('div');
    cartao.setAttribute('class', 'cartao');

    const usuario = document.createElement('div');
    usuario.setAttribute('class', 'usuario');

    const avatar = document.createElement('div');
    avatar.setAttribute('class', 'avatar');

    const imagemAvatar = document.createElement('img');
    imagemAvatar.setAttribute('class', 'imagemAvatar');
    imagemAvatar.src =
      caminhoImagens + (this.getAttribute('imgsrc') || 1) + '.png';

    const detalhes = document.createElement('div');
    detalhes.setAttribute('class', 'detalhes');

    const nome = document.createElement('p');
    nome.setAttribute('class', 'nome');
    nome.textContent = this.getAttribute('nome') || 'Novo usuário';

    const cargo = document.createElement('p');
    cargo.setAttribute('class', 'cargo');
    cargo.textContent = this.getAttribute('cargo') || 'A definir';

    const tags = document.createElement('div');
    tags.setAttribute('class', 'tags');

    const sourced = document.createElement('span');
    sourced.setAttribute('class', 'tag-block outline');
    sourced.textContent = 'Sourced';

    const coding = document.createElement('span');
    coding.setAttribute('class', 'tag-block outline laranja');
    coding.textContent = 'Coding';

    const data = document.createElement('span');
    data.setAttribute('class', 'tag-block outline verde');
    data.textContent = 'Data';

    // Criação (A mágica acontece aqui)
    cartao.appendChild(usuario);
    usuario.appendChild(avatar);
    avatar.appendChild(imagemAvatar);
    usuario.appendChild(detalhes);
    detalhes.appendChild(nome);
    detalhes.appendChild(cargo);
    cartao.appendChild(tags);

    if (
      this.getAttribute('tags').toLowerCase().split(',').includes('sourced')
    ) {
      console.log('first');
      tags.appendChild(sourced);
    }

    if (this.getAttribute('tags').toLowerCase().split(',').includes('coding')) {
      console.log('second');
      tags.appendChild(coding);
    }

    if (this.getAttribute('tags').toLowerCase().split(',').includes('data')) {
      console.log('third');
      tags.appendChild(data);
    }

    return cartao;
  }

  estiloCartao() {
    const estilo = document.createElement('style');
    estilo.textContent = `
    .cartao {
      background-color: white;
      border: 1px solid #DADEE1;
      border-radius: 15px;
      padding: 20px;
      margin-top: 15px;
    }
    
    .usuario {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
    }
    
    .cargo {
      font-size: 12px;
      color: #A3A9B6;
    }
    
    .nome {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 3px
    }
    
    .imagemAvatar{
      width: 50px;
      background-color: #F7B7B2;
      border-radius: 15px;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    
    .tag-block {
      padding: 4px 15px;
      border-radius: 999px;
      font-size: 14px;
    }
    
    .outline {
      background-color: white;
      border: 1px solid #DADEE1;
    }
    
    .verde {
        background-color: #D1FADF;
        color: #1DC47E;
    }
    
    .laranja {
        background-color: #FFF2E5;
        color: #FF9327;
    }
    
    .cartao {
      background-color: white;
      border: 1px solid #DADEE1;
      border-radius: 15px;
      padding: 20px;
      margin-top: 15px;
    }
    
    .usuario {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
    }
    
    .cargo {
      font-size: 12px;
      color: #A3A9B6;
    }
    
    .nome {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 3px
    }
    
    .imagemAvatar{
      width: 50px;
      background-color: #F7B7B2;
      border-radius: 15px;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    
    .tag-block {
      padding: 4px 15px;
      border-radius: 999px;
      font-size: 14px;
    }
    
    .outline {
      background-color: white;
      border: 1px solid #DADEE1;
    }
    
    .verde {
        background-color: #D1FADF;
        color: #1DC47E;
    }
    
    .laranja {
        background-color: #FFF2E5;
        color: #FF9327;
    }
    `;

    return estilo;
  }
}

customElements.define('cartao-kanban', cartaoKanban);
