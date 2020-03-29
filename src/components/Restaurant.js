import React from "react";
import linkIcon from "../images/link.png";
import outIcon from "../images/out.png";
function Restaurant() {
  return (
    <>
      <div className="w-11/12 rounded m-4 overflow-hidden shadow-lg ">
        <div className="bg-gray-300 flex">
          <h2 className="font-bold text-xl text-right text-gray-800 py-4 px-6 w-3/4">
            Restaurant Name
          </h2>
          <span className="w-1/4 my-auto">
            <a href="#">
              {/* Web url goes here*/}
              <img src={linkIcon} />
            </a>
          </span>
        </div>

        <div className="px-6 py-4 text-center">
          <p className="text-gray-700 text-base py-1">
            <span className="font-semibold">Status: &nbsp;</span>
            Limited hours
          </p>
          <p className="text-gray-700 text-base flex flex-row py-1">
            <span className="font-semibold w-1/2 text-right">Menu: &nbsp;</span>
            <a className="w-1/2 m-auto" href="#">
              {/* Web url goes here*/}
              <img className="out-icon" src={outIcon} />
            </a>
          </p>
          <p className="text-gray-700 text-base py-1">
            <span className="font-semibold">Address: &nbsp;</span>
            416 E 5th St, Dayton
          </p>
          <p className="text-gray-700 text-base py-1">
            <span className="font-semibold">Phone: &nbsp;</span>
            <a href="tel:9375555555">937-555-5555</a>
          </p>
        </div>
        <hr className="w-11/12 m-auto" />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base font-semibold pb-2">
            Order | Delivery | Pickup
          </p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Direct Call
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Curbside
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Carry Out
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Grubhub
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Uber Eats
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Door Dash
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
            Direct from Restaurant
          </span>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
