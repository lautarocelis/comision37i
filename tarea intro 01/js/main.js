// 1.La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente , por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.

// let nombre, edad, actividadfav, deportefav
// nombre= prompt(`Ingresa tu nombre`);
// edad= parseInt(prompt(`Cuantos años tienes?`));
// actividadfav= prompt(`Que es lo que mas te gusta hace?`);
// deportefav= prompt(`Cual es tu deporte favorito?`);

// document.write(`Mi nombre es ${nombre},tengo ${edad} años, lo que mas me gusta hacer es ${actividadfav} y mi deporte favorito es ${deportefav}`)

// 2. Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.

// let num1, num2, num3, num4, suma, producto
// num1= parseInt(prompt(`ingresa un valor numerico`))
// num2= parseInt(prompt(`ingresa un valor numerico`))
// num3= parseInt(prompt(`ingresa un valor numerico`))
// num4= parseInt(prompt(`ingresa un valor numerico`))
// suma= num1+num2+num3+num4
// producto= num1*num2*num3*num4

// document.write(`Siendo que los valores con los que contamos son ${num1}, ${num2}, ${num3} y ${num4}, el resultado de la suma de los mismos es ${suma}, mientras que el producto resultante entre ellos es ${producto}`)

// 3. Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)

 let precio, cantidad
 precio= parseInt(prompt(`Ingrese el precio del producto`))
 cantidad= parseInt(prompt(`Cuantas unidades lleva?`))
 abonar= precio*cantidad

 document.write(`El precio unitario del producto en cuestion es ${precio}, y el cliente lleva ${cantidad} unidades, entonces debe abonar $ ${abonar}`)
