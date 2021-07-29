import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

function DogeFilter({ data = [], value, onChange }) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const letterData = alphabet.reduce((accumulator, letter) => {
    accumulator[letter] = data.filter((element) => element.toUpperCase().startsWith(letter));

    return accumulator;
  }, {});

  function handleChange(_, letter) {
    onChange(letterData[letter]);
  }

  return (
    <RadioGroup
      aria-label="dogeFilter"
      name="dogeFilter"
      value={value}
      onChange={handleChange}
      className="radio-group"
    >
      {alphabet.map((letter) => (
        <FormControlLabel
          value={letter}
          control={<Radio />}
          label={`${letter} ${letterData[letter].length}`}
          className="radios"
        />
      ))}
    </RadioGroup>
  );
}

export default DogeFilter;
