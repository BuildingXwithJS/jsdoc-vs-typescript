import { getPokemon as getJsPokemon } from 'js-lib';
import { getPokemon } from 'ts-lib';

const main = async () => {
  const jsPokemon = await getJsPokemon('pikachu');
  console.log('got pokemon from js:', jsPokemon);

  const tsPokemon = await getPokemon('eevee');
  console.log('got pokemon from ts:', tsPokemon);
};

main().catch((error) => console.error('Something blew up:', error));
