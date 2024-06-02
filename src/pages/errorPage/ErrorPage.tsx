import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

type TErrorMessage = {
    message: string
}
type TError = {
    error: TErrorMessage
}

const ErrorPage = () => {
    const { error } = useRouteError() as TError
  return (
    <div className="h-[100vh]">
      <main className="h-screen w-full flex flex-col justify-center items-center ">
        <img className="w-[40%] rounded-2xl" src="https://i.ibb.co/6X7NSJW/error.jpg" alt="Error Image" />
        
        <Button className="my-10"><Link to="/">Go Home</Link></Button>
        <p className='font-semibold'>
            Please read the ERROR Message:
            <span className="text-red-700 ml-2">{error?.message}</span>
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
