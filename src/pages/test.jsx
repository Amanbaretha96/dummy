import { useState } from "react";

const Test = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [name, setName] = useState();
  console.log(name);
  const [password, setPassword] = useState();
  console.log(password);

  const handlesubmit = () => {
    localStorage.setItem(name, "name");
    localStorage.getItem(password, "password");
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>name</h1>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <h1>password</h1>
        <input
          type="password"
          placeholder="number"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default Test;
