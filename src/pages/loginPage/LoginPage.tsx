import { signInWithPopup, signInAnonymously } from "firebase/auth";
import Button from "../../components/Button";
import { auth, googleProvider } from "../../utils/firebase";
import { useAuthStore } from "../../store";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const { setUser, user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
      setUser({
        displayName: user.displayName || "Anonymous",
        email: user.email || "No Email",
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Error during login");
    } finally {
      setIsLoading(false);
    }
  };
  const loginAnonymously = async () => {
    setIsLoading(true);

    try {
      await signInAnonymously(auth);
      setUser({
        displayName: "Guest",
        email: "guest@example.com",
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Error during login");
    } finally {
      setIsLoading(false);
    }
  };

  if (user !== null) {
    <Navigate to={"/"} />;
  }

  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <div className="flex  flex-col items-center gap-2">
        <Button disabled={isLoading} onClick={handleSubmit} className="w-80">
          {isLoading ? "Loading..." : "Login With Google"}
        </Button>
        <p>Or</p>
        <Button
          disabled={isLoading}
          onClick={loginAnonymously}
          className="w-80"
        >
          {isLoading ? "Loading..." : "  Login As Guest"}
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
