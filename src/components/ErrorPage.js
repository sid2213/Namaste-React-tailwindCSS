import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS Something went wrong...</h1>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};
export default ErrorPage;
