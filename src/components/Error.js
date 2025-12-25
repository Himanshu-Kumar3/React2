import { useRouteError } from "react-router"
const Error = () => {
    const er = useRouteError()
    console.log(er)
  return (
    <div className="error">
    <h1> Error !!!</h1>
    <h2> Something Went Wrong :(</h2>
    <h2>{er.status} {er.statusText} ..!</h2>
    </div>
  )
}

export default Error;