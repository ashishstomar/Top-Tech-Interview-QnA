import React, { useState } from "react";
import "../index.css";

const StateList = ({ city, cities, setCities }) => {
  const [editFlag, setEditFlag] = useState(false);
  const [newCity, setNewCity] = useState("");

  function handleSave(id) {
    const UpdatedCities = cities.map((city) =>
      city[0] === id ? [id, city[1], newCity] : city
    );
    setCities(UpdatedCities);
    setEditFlag(false);
    setNewCity("");
    console.log(UpdatedCities);
  }

  function handleEdit() {
    setEditFlag(true);
  }

  function handleDelete(id) {
    const filteredCities = cities.filter((city) => city[0] !== id);
    setCities(filteredCities);
  }

  function handleCancel() {
    setEditFlag(false);
  }

  return (
    <tbody>
      {!editFlag ? (
        <tr>
          <td>{city[1]}</td>
          <td>{city[2]}</td>
          <td>
            <button onClick={() => handleEdit(city[0])}>Edit</button>
          </td>
          <td>
            <button onClick={() => handleDelete(city[0])}>Delete</button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{city[1]}</td>
          <td>
            <input
              placeholder={city[2]}
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </td>
          <td>
            <button onClick={() => handleSave(city[0])}>Save</button>
          </td>
          <td>
            <button onClick={() => handleCancel()}>Cancel</button>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default StateList;
