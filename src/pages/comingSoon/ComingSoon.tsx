import Card from "../../components/Card";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="flex flex-col max-w-96 p-3">
        <h5 className="my-5 text-lg text-primary-foreground">
          This page is currently in maintenance
        </h5>
        <p className="text-center">
          The page is currently undergoing maintenance to ensure optimal
          performance and an improved user experience. We are working diligently
          to update and enhance its features. Please check back soon—thank you
          for your patience and understanding!
        </p>
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

export default ComingSoon;
