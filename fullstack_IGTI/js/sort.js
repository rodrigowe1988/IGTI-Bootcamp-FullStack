const array1 = [30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const array2 = ["banana", "maçã", "pera", "melancia", "ameixa"];

// Sem função de ordenação - problemas
console.log(array1.sort());

// Sem função de ordenação - com texto funciona
console.log(array2.sort());

//perceba que nesses dois próximos casos, como as arrow functions possuem uma única instrução, por isso coloquei o retorno na mesma linha após =>
// Resolvendo a questão com números
console.log(array1.sort((a, b) => a - b
));

// Boa prática para strings
console.log(array2.sort((a, b) => a.localeCompare(b)));

const array3 = [
  {
    id: 1,
    name: 'Neil Peart',
    instrument: "Drums"
  },
  {
    id: 2,
    name: 'Alex Lifeson',
    instrument: "Guitar"
  },
  {
    id: 3,
    name: 'Geddy Lee',
    instrument: "Bass"
  },
];

// Ordenando objetos por "instrumento"
console.log(array3.sort((a, b) => {
  return a.instrument.localeCompare(b.instrument);
}));
