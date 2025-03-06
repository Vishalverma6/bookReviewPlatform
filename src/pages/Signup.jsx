import SignupForm from "../components/core/auth/SignupForm";



const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Join the Book Review Platform</h1>
      <p className="text-lg text-gray-600 mb-6">Sign up to explore, review, and rate books.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
