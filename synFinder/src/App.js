import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import jose from "jose";
// import fetchSyn from "./api/fetchSyn";
import { useGetSyns } from "./Hooks/useGetSyns";
function App() {
  const [word, setWord] = useState("");
  const { Loading, syns, getSyns } = useGetSyns();

  //! handle if there is no syn for entered word like showing a massage
  //^ make specefic component for synonyms and give it hover tooltip to show syn score
  //? give it onload focus on the input
  //! make a functionallity to if user hovermouse on specefic word score show

  function handleFetch(someWord) {
    getSyns(someWord);

    setWord(someWord);
  }

  function handleKey() {
    const key = e.key;
    if (key === "Enter") {
      handleFetch(word);
    }
  }

  /*
  should useeffect with dependency array when fetch data from api for efficiency
  type word slow to see ui mess so make a specefic section to handle all words
  properly 
  */

  return (
    <div className="App">
      <div className="inner">
        <div className="dataform">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="word-inut">enter word</label>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={(e) => handleKey(e)}
              id="word-inut"
              type="text"
              placeholder="enter"
              autoComplete="off"
            />
          </form>
          <button onClick={() => handleFetch(word)}>request</button>
        </div>
        <div className="resultHolder">
          {Loading ? (
            <div> Loading... </div>
          ) : (
            syns.map((word, index) => (
              <li
                // onMouseOver={(e) => console.log(word.score)}
                key={index}
                onClick={(e) => {
                  // clicking the syns to set word to them and fetch data for them but in happens in second click
                  let newWord = e.target.textContent;
                  setWord(newWord);
                  handleFetch(newWord);
                }}
              >
                {word.word}
              </li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
