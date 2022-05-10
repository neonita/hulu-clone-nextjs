import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  // Get our router
  const router = useRouter();

  return (
    <nav className="relative">
      {/* Options */}
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* Loop through everything inside of the request and get the "title" keys! */}
        {/* 14:02:11 */}
        {Object.entries(requests).map(([key, { title, url }]) => (
          // This is a direct return, hence, the closing brace ()
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;

// space-x-10: space between, controls the space between child elements
// last:pr-24: targets last child and gives it a right padding of 24 units
