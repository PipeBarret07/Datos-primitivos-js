let mil_millones = 1000000000;

let milMillones = 1_000_000_000;

console.log(mil_millones);
console.log(milMillones);

console.log(mil_millones == milMillones);
console.log(mil_millones === milMillones);
console.log(typeof(milMillones));

let milMill = 1e9; // Notación cientifica
console.log(milMill);

// 0.12
console.log(1.2e-3);

console.log(0xFF); // 255
console.log(0xff); // 255
console.log(0xfff); // 4095
console.log(0xFFFF); // 65535


console.log(0b1111);
console.log(0b11111111);
console.log(0b111111111111);
console.log(0b1111111111111111);


let num = 255;

console.log(num.toString());
console.log(num.toString(16));
console.log(num.toString(2));
console.log(123456..toString(36));

// redondeo  Math


//            ARRIBA                    ABAJO<5 - ARR>4                  ABAJO
console.log(Math.ceil(2.4) + "- " + Math.round(2.4) + "- " + Math.floor(2.4));
console.log(Math.ceil(2.6) + "- " + Math.round(2.6) + "- " + Math.floor(2.6));


console.log(Math.trunc(2.1)); // Sólo toma la parte entera

num = 12.34;
console.log(num.toFixed(1)); // Redondea a la cantidad de decimales que indique el parametro
console.log(num.toFixed(5));

num = 12.36;

console.log(num.toFixed(1));

// Cálculos Impresisos

console.log(1e500);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);

let sum = 0.1 + 0.2;
console.log(sum.toFixed(1) == 0.3);

console.log(9999999999999999);

console.log(parseInt("$100px"));
console.log(parseInt("100em"));
console.log(parseInt("2n9c", 36));
console.log(parseInt("2n9c", 36));

console.log(Math.max(3, 5, -10, 1, 8, 3));
console.log(Math.min(3, 5, -10, 1, 8, 3));


console.log(Math.pow(2, ));




