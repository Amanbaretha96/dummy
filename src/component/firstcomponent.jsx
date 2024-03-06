import { useState } from "react";
import Firstpage from "../pages/firstpage";

const Firstcomponent = (props) => {
  const { data } = props;

  return (
    <div>
      <p>
        <h1>{data}</h1>
      </p>
    </div>
  );
};
export default Firstcomponent;
