
console.log("EJERCICIO1");
var C = 0;
var Resultado;
console.log("El valor de C es " + C);
var A = 4 + ((Math.pow((24 % 5),2)+6)/3);
console.log("El valor de A es:" + A);
var B = A * (32 / 3 * 15);
console.log("El valor de B es:" + B);
var C = C + (B + 10 * (A / 2 + 15)/ Math.pow(3,3)) + 2 * (B + A) + 9 * B;
console.log("El nuevo valor de C es:" + C);
A = C - A;
console.log("El valor de A es:" + A);
B = A + C;
console.log("El nuevo valor a B es:" + B);
Resultado = A + B + C;
conole.log("El resultado es:" + " " + Resultado);

console.log("EJERCICIO2");
var K = 5000;
var TEA = 39.29;
var P = 30; //Periodo entre cuota.
var TEM;
var TED;
var C;
var i;
var n = 12; //periodo de credito
TEM = ((Math.pow((1 + (TEA/100)),(P/360))) - 1) * 100;
console.log("Tasa efectiva mensual:" + " " + TEM);

i = TEM/ 100;
console.log("Interes mensual:" + i);

TED = ((Math.pow((1 + (TEM/100)),(1/30))) - 1) * 100;
console.log("Tasa efectiva diaria:" + " " + TED); 

C = K * (((Math.pow((1 + i),n)) * i)/ (Math.pow((1 + i),n))- 1);
console.log("La cuota a pagar es:" + " " + C);

console.log("EJERCICIO3");
var a = 1;
var b = 5;
var c = 10;
var d = 12;
var e = 15;
var result;
result = ((a === c)&&(b > d))||((a != e)&&(c < e) || (e < a) && (b != c))
console.log("El resultado es:" + result);

console.log("EJERCICIO4");
var aLateral;
var aTotal;
var volumen;
var altura;
var lado = prompt("Ingrese el valor del lado:");
var apotema = prompt("Ingrese el Apotema");

altura = Math.sqrt(Math.pow(apotema,2) - 0.75 * Math.pow(lado,2));
console.log("La altura es:" + " " + altura);
alateral = 3 *lado*  apotema;
console.log("Area lateral:" + " " + alateral);
atotal = alateral + lado * (1.73219 * 6/4);
console.log("El área total:" + " " + atotal);
volumen = ((Math.pow(lado,2) * 1.7321 ) * 6/4 ) * altura/3;
console.log("el volumen es:" + " " + volumen);

console.log("EJERCICIO3-loop");
var seguir = true;
var total = 0;
while(seguir) {
    var precio = prompt("Ingrese el precio del producto");
    var cantidad = prompt("Ingrese la cantidad");

    total = total + precio * cantidad;
    seguir = confirm("Desea ingresar mas productos?");
}

total *= 1.18;

if(total > 2000){
	total = total- total * 0.10; //total = total - 0.90;
	alert("total  con IGV y su respectivo descuento:" + " " + total);
} else {
	alert("El total incluye IGV :" + total);
}

total = total + 1.18;
alert("El total es:" + " " + total);
console.log("Muchas gracias por usar el programa");



