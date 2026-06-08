import { state } from './state';

const list = document.querySelector('.list');
export const renderUi = () => {
  const markup = state.characters
    .map((char) => {
      return `
    <li class="character-card" data-id="${char.id}">
      <div class="card-header">
        <img class="avatar" src="${char.image}" alt="${char.name}" />

        <div class="basic-info">
          <h2>${char.name}</h2>
          <p class="status ${char.status.toLowerCase()}">${char.status}</p>
        </div>

      </div>
    </li>`;
    })
    .join('');

  list.innerHTML = markup;
};
