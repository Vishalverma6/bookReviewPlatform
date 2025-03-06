
import LoginForm from "../components/core/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Book Review Platform</h1>
      <p className="text-lg text-gray-600 mb-6">Discover, review, and rate your favorite books.</p>
     
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
