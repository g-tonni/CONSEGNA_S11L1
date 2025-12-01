// 1) Quali sono i tipi primitivi principali in TypeScript?
// - string
// - number
// - boolean
// - null
// - undefined
// - any
// - never
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = 'Giada';
var myAge = 23;
var TS = true;
// 3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return 'Ciao' + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }
// Torna sempre number
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoIVA = function (num) {
    return num + num * 0.22;
};
console.log(prezzoIVA(80));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var conc = function (s1, s2) {
    var frase = s1 + s2;
    return frase.length;
};
console.log(conc('Ciao', 'sono Giada'));
// 7) Cos'è un Type Union e come si scrive?
// Il type Union è un tipo che permette a una variabile di assumere più tipi
var typeUnion = 10;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var varMista;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var arrNum2 = [1, 2, 3];
var arrNum3 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = [
    'Ciao ',
    'sono ',
    'Giada',
    23,
    8,
];
var stu1 = {
    nome: 'Marco',
    voto: 10,
};
var stu2 = {
    nome: 'Giorgio',
    voto: 10,
};
var arrStudenti = [stu1, stu2];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var autoObj = {
    ruote: true,
    numRuote: 4,
    velocitàMax: 270,
    coloreCarrozzeria: 'blu',
    passeggeri: 5,
};
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error('ERRORE NELLA RESPONSE');
    }
})
    .then(function (data) {
    console.log('DATI: ', data);
    var newAddress = {
        street: data[0].address.street,
        suite: data[0].address.suite,
        city: data[0].address.city,
        zipcode: data[0].address.zipcode,
        geo: {
            lat: data[0].address.geo.lat,
            lng: data[0].address.geo.lng,
        },
    };
    console.log('ADDRESS: ', newAddress);
    var newCompany = {
        name: data[0].company.name,
        catchPhrase: data[0].company.catchPhrase,
        bs: data[0].company.bs,
    };
    console.log('COMPANY: ', newCompany);
    var newObj = {
        id: data[0].id,
        name: data[0].name,
        username: data[0].username,
        email: data[0].email,
        address: data[0].address,
        phone: data[0].phone,
        website: data[0].website,
        company: data[0].company,
    };
    console.log('OGGETTO: ', newObj);
})
    .catch(function (err) {
    console.log('ERRORE: ', err);
});
