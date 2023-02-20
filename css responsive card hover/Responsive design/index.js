function inicio(){
  let produto = prompt('Qual produto você está comprando?')
  let preço = Number(prompt('Quando custa esse ' + produto + ' ?'))
  let valor_pago = Number(prompt('Quanto você pagou ao vendedor?'))
  let troco = valor_pago - preço
  alert(`Você comprou um ${produto} que custou R$${preço}, e recebeu R$${troco} de troco`)
}