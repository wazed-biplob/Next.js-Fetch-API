import React from "react";
import styles from "./about.module.css";
const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();
  return (
    <div>
      <h1 className="text-center mx-auto m-4">All Shoes</h1>
      <div
        className={`mt-4 mx-20 grid gap-x-2 gap-y-8 justify-items-center ${styles.fix}`}
      >
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">View</div>
                <div className="badge badge-outline">Purchase</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
