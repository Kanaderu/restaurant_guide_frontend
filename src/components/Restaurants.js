import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import linkIcon from "../images/link.png";
import outIcon from "../images/out.png";

const Restaurants = () => {
  const data = useStaticQuery(graphql`
    {
      restaurants {
        listings {
          name
          status
          website_url
          pickup_options
          order_methods
          delivery_options
          dietary_options
          locations {
            hours {
              from_hour
              to_hour
              weekday
            }
            city
            phone_number
            street_address
            zipcode
          }
          menu_url
        }
      }
    }
  `);

  /**
   * Format the address and prepare it for "Open in Google Maps" Directions link.
   *
   * @param {object} location The location information for a restaurant
   * @returns {string} A properly formatted Google Directions link.
   */
  const getGoogleMapsDirectionsLink =  ( location ) => {

    const { city, street_address, zipcode } = location;
    const formattedAddress = `${street_address}, ${city}, Ohio ${zipcode}`;

    // Google Maps URL generated from following docs: https://developers.google.com/maps/documentation/urls/guide
    const encodedAddress = formattedAddress.replace(new RegExp(/ /g), '+');
    const link = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

    return link;

  }

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
      {/*<pre>{JSON.stringify(data, null, 4)}</pre>*/}
      {data.restaurants.listings.map(listing => (
        <div
          className="w:11/12 sm:w-1/4 rounded m-4 overflow-hidden shadow-lg restaurant-card"
          key={listing.name}
        >
          <a
            href={listing.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 flex w-full transition duration-150 ease-in-out"
          >
            <h2 className="font-bold text-xl text-left text-gray-800 py-4 px-6 w-4/5">
              {listing.name}
            </h2>
            <span className="w-1/5 my-auto">
                {/* Web url goes here*/}
                <img src={linkIcon} />
            </span>
          </a>

          <div className="px-6 py-4 text-center">
            <p className="text-gray-700 text-base py-1">
              <span className="font-semibold">Status: &nbsp;</span>
              {listing.status}
            </p>
            <p className="text-gray-700 text-base flex flex-row py-1">
              <span className="font-semibold w-1/2 text-right">
                Menu: &nbsp;
              </span>
              <a
                className="w-1/2 m-auto"
                href={listing.menu_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Web url goes here*/}
                <img className="out-icon" src={outIcon} />
              </a>
            </p>
            <p className="text-gray-700 text-base py-1">
              <span className="font-semibold">Address: &nbsp;</span>
              {listing.locations[0].street_address}
            </p>
            <p className="text-gray-700 text-base py-1">
              <span className="font-semibold">Phone: &nbsp;</span>
              <a href={`tel:${listing.locations[0].phone_number}`}>
                {listing.locations[0].phone_number}
              </a>
            </p>
          </div>
          <hr className="w-11/12 m-auto" />
          <div className="px-6 py-2">
            <p className="text-gray-700 text-base font-semibold pb-2">Order</p>
            {listing.order_methods.map(method => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
                key={method}
              >
                {method}
              </span>
            ))}
          </div>
          <hr className="w-11/12 m-auto" />
          <div className="px-6 py-2">
            <p className="text-gray-700 text-base font-semibold pb-2">
              Delivery | Pickup
            </p>
            {listing.delivery_options.map(option => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
                key={option}
              >
                {option}
              </span>
            ))}

            {listing.pickup_options.map(option => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
                key={option}
              >
                {option}
              </span>
            ))}
          </div>
          {/*         
              <hr className="w-11/12 m-auto" />
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                  facebook
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                  instagram
                </span>
              </div>
              */}
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
