import React, { useState } from "react";
import "./BeerForm.css";

interface FormProps {
  id: string;
}

// beer name: text input
// beer type: combobox with different beer types (Ale, Lager, Stout, etc)
// has corn: checkbox
// ingredients: text area

function CreateBeerForm({ id }: FormProps) {
  const [name, setName] = useState("");
  const [hasCorn, setHasCorn] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const [type, setType] = useState("None Selected");

  function handleSubmit() {
    console.log(
      `Name: ${name} \nType: ${type} \nHas corn: ${hasCorn} \nIngredients: ${ingredients}`
    );
  }

  return (
    <>
      <form id={id} className="form-container">
        Beer name:
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        Beer Type:
        <select
          id="type"
          name="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="None Selected">None Selected</option>
          <option value="Beer 1">Beer 1</option>
          <option value="Beer 2">Beer 2</option>
          <option value="Beer 3">Beer 3</option>
          <option value="Other Beer">Other Beer</option>
        </select>
        Has corn:
        <input
          id="hasCorn"
          name="hasCorn"
          type="checkbox"
          checked={hasCorn}
          onChange={(event) => setHasCorn(event.target.checked)}
        />
        Ingredients
        <textarea
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <button className="button small" type="button" onClick={handleSubmit}>
          Log This!
        </button>
      </form>
    </>
  );
}

export default CreateBeerForm;
