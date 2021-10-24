const object = {
	id: 1,
	name: 'Neil Peart',
	band: 'Rush',
	instrument: 'Drums'
  };

  const array = [1, 2, 3, 4, 5];

  // Método "comum" para criação de variáveis a partir de um objeto
  // const id = object.id;
  // const name = object.name;
  // const band = object.band;
  // const instrument = object.instrument;

  // Método "comum" para criação de variáveis a partir de um array
  // const um = array[0];
  // const dois = array[1];
  // const tres = array[2];
  // const quatro = array[3];
  // const cinco = array[4];

  // Utilizando object destructuring
  const { id, name, band, instrument } = object;

  // Utilizando array destructuring
  const [ um, dois, tres, quatro, cinco ] = array;

  console.log(um);
  console.log(name);
