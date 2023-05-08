import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h2>OOps!!</h2>
      <br></br>
      <h3>something went wrong</h3>
      <strong>{err.data}</strong>
    </>
  );
};
export default Error;
