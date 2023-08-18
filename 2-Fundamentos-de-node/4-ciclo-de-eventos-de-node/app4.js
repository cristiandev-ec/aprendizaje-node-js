//En que orden pensarías que se ejecutaría.

console.log('Inicio de programa'); // 1 - ejecuto: "1"

setTimeout ( () => {
    console.log('Primer Timeout'); // 4 - ejecuto: "5"
}, 3000 );


setTimeout ( () => {
    console.log('Segundo Timeout'); // 2 - ejecuto: "3"
}, 0 );


setTimeout ( () => {
    console.log('Tercer Timeout');  // 3 - ejecuto: "4"
}, 0 );



console.log('Fin de programa'); // 5 - ejecuto: "2"

