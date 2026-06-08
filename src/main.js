import { getCharacters } from './api';
import { renderUi } from './render';
import { setCharactersAction } from './state';

document.addEventListener('DOMContentLoaded', async () => {
  console.log('First render!');
  const { results } = await getCharacters();
  setCharactersAction(results);
  renderUi();
});
