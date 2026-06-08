const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const res = await fetch(`${BASE_URL}/character`);
  if (!res.ok) return;
  const data = await res.json();
  return data;
};
