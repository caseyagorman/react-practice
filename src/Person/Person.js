import React from "react";
// Just a regular old function so we don't have to deal with 'this' from classes
// We can pass props though, and children to be defined in the jsx where we use this function

const person = props => {
  return (
    <div>
      <p>
        {/* can't use state in here cause it's just a function, not a class */}
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
