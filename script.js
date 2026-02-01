let carrinho = [];
let total = 0;

function selecionarAtacado(tipo) {
  document.getElementById("tipoAtacado").style.display = "none";
  document.body.classList.remove("modo-grade", "modo-caixa");

  if (tipo === "grade") {
    document.body.classList.add("modo-grade");
  } else {
    document.body.classList.add("modo-caixa");
  }
}

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  renderCarrinho();
}

function renderCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent =
    "Total: R$ " + total.toFixed(2);
}

function finalizarPedido() {
  let msg = "Pedido Atacado Torino:%0A%0A";

  carrinho.forEach(item => {
    msg += `- ${item.nome} | R$ ${item.preco.toFixed(2)}%0A`;
  });

  msg += `%0ATotal: R$ ${total.toFixed(2)}`;

  window.open(
    `https://wa.me/5511939586226?text=${msg}`,
    "_blank"
  );
}
