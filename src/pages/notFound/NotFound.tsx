import Card from "../../components/Card";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="flex flex-col max-w-96 p-3">
        <p className="text-center">Oops you are lost! Go back.</p>
        <Link
          className="mt-10 mb-2 text-center text-secondary-foreground"
          to="/"
        >
          Go Home
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
