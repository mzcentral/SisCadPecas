const listaDePecas = ["Peça Teste","Peça A","Peça B"]
//verificação tamanho lista
if (listaDePecas.length<=10){
console.log("Item pode ser cadastrado")
  }else{
  console.log("Item não pode ser cadastrado")
  }

//verificação nome
for ( let index = 0; index < listaDePecas.length; index++){
  if(listaDePecas[index].lenght <3){
console.log (listaDePecas[index] + "Item não pode ser cadastrado") 
  }else{
console.log (listaDePecas[index] + "Item pode ser cadastrado") 
  }
}

//verificação peso
let peso = 50;

if(peso >=100){
  console.log("Item pode ser cadastrado")
  }else{
  console.log("Item não pode ser cadastrado")
  }