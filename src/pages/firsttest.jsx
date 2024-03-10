import { useState } from "react";

const Firsttesst = () => {
  const [data, setData] = useState("");
  console.log(data, 56445);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <form><div>
    <h1>regitrations form</h1>
  <div><input placeholder="enter your name" onChange={handleChange} /></div>
    <div> <input placeholder="password" onChange={handleChange}/></div>
    <div>  <input placeholder="email" onChange={handleChange} /></div>
    <div> <button type="submit"> Submit </button></div>
    
  </div>
  </form>
  )
};
export default Firsttesst;
