import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>this is profile component</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(1)}>count</button>
    </>
  );
};
export default Profile;
