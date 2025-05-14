import { useState } from "react";
import StateList from "./components/StateList";

const App = () => {
  const [inputState, setInputState] = useState("");
  const [states, setStates] = useState([]);

  const [stateSelect, setStateSelect] = useState("");

  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState([]);

  const [page, setPage] = useState(1);

  function handleSaveState() {
    console.log("clicked");
    const id = String(Date.now());
    const stateArr = [id, inputState];
    setStates((prev) => [...states, stateArr]);

    setInputState("");
  }

  function handleAddCity() {
    const id = Date.now();
    const cityArr = [id, stateSelect, cityInput];

    setCities((prev) => [...cities, cityArr]);
    setCityInput("");
  }

  return (
    <>
      <input
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <button onClick={() => handleSaveState()}>Save State</button>

      <div className="city-input-row">
        <select onChange={(e) => setStateSelect(e.target.value)}>
          <option value="">Select state</option>
          {states.map((state) => {
            return (
              <option key={state[0]} value={state[1]}>
                {state[1]}
              </option>
            );
          })}
        </select>
        <input
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button onClick={() => handleAddCity()}>Add City</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {cities.slice(page * 5 - 5, page * 5).map((city) => {
          return (
            <StateList
              key={city[0]}
              cities={cities}
              city={city}
              setCities={setCities}
            />
          );
        })}
      </table>
      {cities.length > 0 && (
        <div className="pagination">
          <button
            className={page < 2 ? "pagination-btn-off" : "pagination-btn-on"}
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          >
            {"< Prev"}
          </button>
          <div>{`Page ${page}`}</div>
          <button
            className={
              page >= Math.ceil(cities.length / 5)
                ? "pagination-btn-off"
                : "pagination-btn-on"
            }
            onClick={() =>
              setPage((prev) =>
                Math.min(Math.ceil(cities.length / 5), prev + 1)
              )
            }
          >
            {"Next >"}
          </button>
        </div>
      )}
    </>
  );
};

export default App;
