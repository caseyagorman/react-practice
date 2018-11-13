import React from "react";
// Just a regular old function so we don't have to deal with 'this' from classes
// We can pass props though, and children to be defined in the jsx where we use this function

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>

      <input type="text" onChange={props.ageChanged} />
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
