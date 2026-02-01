const produtos = [
  {
    nome: "Shorts Dry Fit Masculino",
    preco: 25,
    container: "masc-pv-shorts"
  },
  {
    nome: "Camiseta Poliamida Masculina",
    preco: 29,
    container: "masc-pv-camisetas"
  },
  {
    nome: "Bobojaco Masculino",
    preco: 120,
    container: "masc-oi-bobojaco"
  }
];

const carrinho = [];
let total = 0;

produtos.forEach(p => {
  const div = document.getElementById(p.container);
  div.innerHTML += `
    <div class="produto">
      <p>${p.nome}</p>
      <p>R$ ${p.preco}</p>
      <button onclick="addCarrinho('${p.nome}', ${p.preco})">
        Adicionar
      </button>
    </div>
  `;
});

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const area = document.getElementById("itensCarrinho");
  area.innerHTML = "";
  carrinho.forEach(i => {
    area.innerHTML += `<p>${i.nome}</p>`;
  });
  document.getElementById("total").innerText = total.toFixed(2);
}

function finalizarPedido() {
  const msg = `Pedido Atacado:%0A${carrinho.map(i => i.nome).join("%0A")}%0ATotal: R$ ${total}`;
  window.open(`https://wa.me/5511939586226?text=${msg}`);
}
