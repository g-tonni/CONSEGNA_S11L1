// 1) Quali sono i tipi primitivi principali in TypeScript?

// - string
// - number
// - boolean
// - null
// - undefined
// - any
// - never

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const myName: string = 'Giada'
const myAge: number = 23
const TS: boolean = true

// 3) Tipizza il parametro della seguente funzione:

const greet = (name: string) => {
  return 'Ciao' + name
}

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }

// Torna sempre number

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const prezzoIVA = (num: number) => {
  return num + num * 0.22
}

console.log(prezzoIVA(80))

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const conc = (s1: string, s2: string) => {
  const frase = s1 + s2
  return frase.length
}

console.log(conc('Ciao', 'sono Giada'))

// 7) Cos'è un Type Union e come si scrive?

// Il type Union è un tipo che permette a una variabile di assumere più tipi
let typeUnion: number | string = 10

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let varMista: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type giorni =
  | 'Lunedì'
  | 'Martedì'
  | 'Mercoledì'
  | 'Giovedì'
  | 'Venerdì'
  | 'Sabato'
  | 'Domenica'

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const arrNum2: number[] = [1, 2, 3]
const arrNum3: Array<number> = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tupla: [string, string, string, number, number] = [
  'Ciao ',
  'sono ',
  'Giada',
  23,
  8,
]

// 12) Qual è la differenza tra type e interface?

// Interface è molto più utile per gli oggetti e più versatile poichè possiamo inserire dei parametri (che possono quindi differire tra le diverse variabili) e possiamo anche creare delle nuove interfacce estendendo quelle preesistenti

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Persona {
  firstName: string
  lastName: string
  age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface Form {
  email: string
  phone?: number
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Studente {
  nome: string
  voto: number
}

const stu1: Studente = {
  nome: 'Marco',
  voto: 10,
}
const stu2: Studente = {
  nome: 'Giorgio',
  voto: 10,
}

const arrStudenti: Studente[] = [stu1, stu2]

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  ruote: boolean
  numRuote: number
  velocitàMax: number
}

interface Auto extends Veicolo {
  coloreCarrozzeria: string
  passeggeri: number
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const autoObj: Auto = {
  ruote: true,
  numRuote: 4,
  velocitàMax: 270,
  coloreCarrozzeria: 'blu',
  passeggeri: 5,
}

// 18) Cosa sono i Generics in TypeScript?

// Un generic è un tipo che viene passato come argomento per un'interfaccia.

// 19) È possibile avere più tipi generici in un'interfaccia?

// Sì, basta separarli con una virgola (come nelle funzioni)

// 20) Crea un interfaccia generica per una richiesta API

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface User<A, B> {
  id: number
  name: string
  username: string
  email: string
  address: A
  phone: string
  website: string
  company: B
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('ERRORE NELLA RESPONSE')
    }
  })
  .then((data) => {
    console.log('DATI: ', data)

    const newAddress: Address = {
      street: data[0].address.street,
      suite: data[0].address.suite,
      city: data[0].address.city,
      zipcode: data[0].address.zipcode,
      geo: {
        lat: data[0].address.geo.lat,
        lng: data[0].address.geo.lng,
      },
    }
    console.log('ADDRESS: ', newAddress)

    const newCompany: Company = {
      name: data[0].company.name,
      catchPhrase: data[0].company.catchPhrase,
      bs: data[0].company.bs,
    }
    console.log('COMPANY: ', newCompany)

    const newObj: User<Address, Company> = {
      id: data[0].id,
      name: data[0].name,
      username: data[0].username,
      email: data[0].email,
      address: data[0].address,
      phone: data[0].phone,
      website: data[0].website,
      company: data[0].company,
    }

    console.log('OGGETTO: ', newObj)
  })
  .catch((err) => {
    console.log('ERRORE: ', err)
  })
