const app = "I don't do much."

function kittens () {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

 function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}


function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  const newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  const newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  const newKittens = kittens.slice(0, -1)
  return newKittens
}
  
function removeFirstKitten() {
  const newKittens = kittens.slice(1)
  return newKittens
}