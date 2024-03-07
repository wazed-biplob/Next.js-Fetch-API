import Link from "next/link";
import Navbar from "./components/Navbar";
import error from "./error";

const HomePage = async () => {
  throw new error("Error From Homepage");
  return (
    <>
      <Navbar />
      <div className="text-center">
        <Link href="/all-shoes">
          <button className="btn btn-secondary m-4">See More</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
