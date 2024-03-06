import { useState } from "react";
import Firstcomponent from "../component/firstcomponent";

const Firstpage = (props) => {
  const [data, setData] = useState(0);
  const Count = () => {
    setData(data + 1);
  };
  return (
    <div>
      <Firstcomponent data={data} />
      <button on onClick={Count}>
        {" "}
        click me{" "}
      </button>
    </div>
  );
};
export default Firstpage;
