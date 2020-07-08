import { getPokemon } from 'js-lib';
import { getPokemon as getTsPokemon } from 'ts-lib';

const main = async () => {
  const jsPokemon = await getPokemon('pikachu');
  console.log('got pokemon from js:', jsPokemon);

  const tsPokemon = await getTsPokemon('eevee');
  console.log('got pokemon from ts:', tsPokemon);
};

main().catch((error) => console.error('Something blew up:', error));
