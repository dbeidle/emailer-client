import React, { Fragment, useState } from "react";

import Payments from "./payments";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const Credits = () => {
  const [value, setValue] = useState(0);
  const [credits, setCredits] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "6.99") {
      setCredits(1);
    }
    if (event.target.value === "25.99") {
      setCredits(5);
    }
    if (event.target.value === "95.99") {
      setCredits(20);
    }
  };

  return (
    <Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Purchase Credits</FormLabel>
        <RadioGroup
          aria-label="Purchase Credits"
          name="credits"
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            value="6.99"
            control={<Radio />}
            label="1 for $6.99"
          />
          <FormControlLabel
            value="25.99"
            control={<Radio />}
            label="5 for $25.99"
          />
          <FormControlLabel
            value="95.99"
            control={<Radio />}
            label="20 for $95.99"
          />
        </RadioGroup>
      </FormControl>
      <Payments price={value} credits={credits} />
    </Fragment>
  );
};

export default Credits;
