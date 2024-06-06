import { useEffect, useState } from "react";

const Humor = () => {
  const [humor, setHumor] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/financial_humor_table/random")
      .then((response) => response.json())
      .then((response) => {
        setHumor(response);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img src="img14.png" alt="Description" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative bg-black bg-opacity-30 backdrop-blur-md shadow-md rounded-lg p-20 max-w-lg w-full z-10">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading...</p>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4 text-center text-black">{humor?.title}</h1>
            <p className="text-xl text-black">{humor?.content}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Humor;

