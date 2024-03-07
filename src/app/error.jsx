"use client";
const error = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-center text-4xl text-red-400 flex justify-center items-center">
        Something went wrong!
      </h1>
      <h2>{error.message}</h2>
    </div>
  );
};

export default error;
