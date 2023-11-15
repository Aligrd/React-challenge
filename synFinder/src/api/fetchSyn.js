export default function fetchSyn(newWord) {
  return fetch(`https://api.datamuse.com/words?rel_syn=${newWord}`).then(
    (response) => response.json()
  );
}
