import { BallTriangle } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallTriangle
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="loading"
      />
    </div>
  );
};

export default LoadingSpinner;