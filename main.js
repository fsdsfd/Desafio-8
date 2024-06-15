import "./style.css";

// 1

let a = 'Valor 1';
let b = 'Valor 2';
let temp = a
a = b
b = temp
console.log(a, b);

// 2

function suma(num1, num2) {
  if (num1 > num2) {
    return `${num1} es mayor que ${num2}`;

  } else if (num2 > num1) {
    return `${num2} es mayor que ${num1}`;
  
  } else if (num2 == num1) {
    return `${num2} es igual a ${num1}`;
  
  } else {
    return "error, intentelo de nuevo";
  
  }
}
console.log(suma(1, 2));

// 3

function par(num) {
  if (num % 2 == 0 && num !== 0) {
    return "es par";

  } else if (num % 2 !== 0) {
    return "es impar";

  } else if (num == 0) {
    return "es 0";

  } else {
    return "error";

  }
}
console.log(par(2));

// 4

function precioFinal(precio, descuento) {
  let descuentoFin = (precio * descuento) / 100;
  let precioFin = precio - descuentoFin;
  return precioFin;
}
console.log(precioFinal(50, 100));

// 5

function area(radio) {
  let pi = 3.14159;
  let area = radio ^ (2 * pi);
  return area;
}
console.log(area(50));

// 6

function aFahrenheit(celcius) {

  return `Son ${(celcius * 9) / 5 + 32} °F`;

}
console.log(aFahrenheit(32));

// 7

for (let i = 1; i <= 10; i++) {
  console.log(i);

}

// 8

let numero;
 while (true) {
   numero = parseFloat(prompt('Ingrese un número negativo'));
   if (numero < 0) {
    break
   }
 }
console.log("Saliste del bucle");

// 9

for (let i = 0; i <= 10; i++) {

  function tabla(num) {

    let resultado = num * i;
    return resultado;
  }
  console.log(tabla(5));
}

// 10

let resultado = 0;
  for (let i = 0; i <= 100; i++) {

    if (i %2 == 0) {

      resultado += i;
    }
  }
  console.log(resultado);

// 11

let persona = {
  nombre : 'Tomás',
  edad : '19',
  ciudad : 'Manhattan',
  presentacion : function presentarse() {
      console.log(`Hola, me llamo ${persona.nombre}, tengo ${persona.edad} y vivo en ${persona.ciudad}`);
      
    }
  }

persona.presentacion()

// 12

let persona1 = {
  nombre : 'Tomás',
  edad : '19',
  ciudad : 'Manhattan'
}

let persona2 = {
  nombre : 'Roberto',
  edad : '80',
  ciudad : 'Capital Federal'
}

let persona3 = {
  nombre : 'María',
  edad : '5',
  ciudad : 'Madrid'
}

let personas = [persona1, persona2, persona3]
for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
  
}

// 13

let notas = [5, 7, 9];

function promedio() {
    let resultado = (notas[0] + notas[1] + notas[2]) / 3
    return resultado;

  }
console.log(promedio());
