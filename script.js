let array = [2, 7, 4, 22, 15]
let novoArray = array.slice()
novoArray.pop()
novoArray.push(5)
novoArray.splice(1, 1)
console.log(array)
console.log(novoArray)