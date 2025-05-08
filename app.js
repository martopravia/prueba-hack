// Ejercicio 1:

function existeElemento(arr, str) {
  return arr.includes(str);
}

console.log(existeElemento(["hola", "chau"], "hola"));
console.log(existeElemento(["Milanesa", "Ensalada"], "Pizza"));

// Ejercicio 2:

function filtrarImpares(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filtrarImpares([13, 2, 4, 5, 17]));
console.log(filtrarImpares([20, 32, 9, 8]));

// Ejercicio 3:

function tieneDosLetrasSeguidas(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(tieneDosLetrasSeguidas("aabcd"));
console.log(tieneDosLetrasSeguidas("diccionario"));
console.log(tieneDosLetrasSeguidas("hola"));
