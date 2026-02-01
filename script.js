const catalog = document.getElementById("catalog");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

function renderCatalog() {
  catalog.innerHTML = "";

  const categories = ["Feminino", "Masculino", "Infantil"];
  const seasons = ["Primavera/Verão", "Outono/Inverno"];

  categories.forEach(category => {
    const categorySection = document.createElement("section");
    categorySection.className = "category-section";

    categorySection.innerHTML = `<h2>${category}</h2>`;

    seasons.forEach(season => {
      const filtered = products.filter(
        p => p.category === category && p.season === season
      );

      if (filtered.length === 0) return;

      const seasonBlock = document.createElement("div");
      seasonBlock.className = "season-block";
      seasonBlock.innerHTML = `<h3>${season}</h3>`;

      const grid = document.createElement("div");
      grid.className = "product-grid";

      filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <h4>${p.name}</h4>
          <div class="bloco-grade">
  <p>Grade: ${p.gradeQty} peças<br>R$ ${p.gradePrice}</p>
  <button onclick="addToCart(${p.id}, 'grade')">
    Adicionar Grade
  </button>
</div>

<div class="bloco-caixa">
  <p>Caixa: ${p.boxQty} peças<br>R$ ${p.boxPrice}</p>
  <button onclick="addToCart(${p.id}, 'box')">
    Adicionar Caixa
  </button>
</div>
        `;
        grid.appendChild(card);
      });

      seasonBlock.appendChild(grid);
      categorySection.appendChild(seasonBlock);
    });

    catalog.appendChild(categorySection);
  });
}

function addToCart(id, type) {
  const p = products.find(prod => prod.id === id);

  cart.push({
    name: p.name,
    type,
    qty: type === "grade" ? p.gradeQty : p.boxQty,
    price: type === "grade" ? p.gradePrice : p.boxPrice
  });

  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `
      <p>
        ${item.name}<br>
        ${item.type.toUpperCase()} · ${item.qty} peças<br>
        R$ ${item.price}
      </p>
      <hr>
    `;
  });

  cartTotal.innerText = total.toFixed(2);
}

function checkout() {
  let msg = "Pedido Torino Atacado:%0A%0A";
  let total = 0;

  cart.forEach(item => {
    msg += `${item.name} - ${item.type} (${item.qty} peças) - R$ ${item.price}%0A`;
    total += item.price;
  });

  msg += `%0ATotal: R$ ${total.toFixed(2)}`;

  window.open(
    "https://wa.me/5511939586226?text=" + msg,
    "_blank"
  );
}

renderCatalog();
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
let tipoAtacadoSelecionado = null;

function selecionarAtacado(tipo) {
  tipoAtacadoSelecionado = tipo;

  document.getElementById("tipoAtacado").style.display = "none";

  // Aqui você controla o comportamento depois
  if (tipo === "grade") {
    document.body.classList.add("modo-grade");
    document.body.classList.remove("modo-caixa");
  } else {
    document.body.classList.add("modo-caixa");
    document.body.classList.remove("modo-grade");
  }
}
function selecionarAtacado(tipo) {
  document.getElementById("tipoAtacado").style.display = "none";

  document.body.classList.remove("modo-grade", "modo-caixa");

  if (tipo === "grade") {
    document.body.classList.add("modo-grade");
  } else {
    document.body.classList.add("modo-caixa");
  }
}
