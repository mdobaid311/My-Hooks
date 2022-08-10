import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const UseContext = () => {
  const { name, age, changeAge } = useContext(GlobalContext);
  return (
    <div>
      {name}
      <h1>{age}</h1>
      <button
        onClick={() => {
          changeAge();
        }}
      >Change age</button>
    </div>
  );
};

export default UseContext;
