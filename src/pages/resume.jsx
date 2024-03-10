import { useState } from "react";

const Resume = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((p) => {
      return { ...p, [name]: value };
    });
  };
  return (
    <form onSubmit={handelsubmit}>
      <h1>name:</h1>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>email:</h1>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <h1>email:</h1>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={handelsubmit}>
        submit
      </button>
    </form>
  );
};
export default Resume;
