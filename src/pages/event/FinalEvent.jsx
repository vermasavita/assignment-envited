import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

const FinalEvent = () => {
  return (
    <section className="w-full width max-w-xl max-h-sm flex flex-col justify-start p-1  md:w-1/1 rounded-md lg:w-1/2 md:justify-center">
      <div className="text-color flex flex-col">
        <span className="text-5xl font-bold md:text-4xl md:text-center sm:text-2xl">
          Birthday Bash
        </span>
        <span className="text-lg font-normal span md:text-center sm:text-xl">
          Hosted by <strong>Elysia</strong>
        </span>
      </div>
      <div className="flex gap-4 p-2 w-full mt-12  md:items-center md:w-full">
        <div className="bg-white  p-2 rounded-md drop-shadow-2xl w-1/6 flex items-center justify-center">
          <FaRegCalendarAlt className="text-3xl text-violet-600" />
        </div>
        <div className="flex items-center justify-between gap-4  w-5/6">
          <div className="flex flex-col text-lg sm:text-sm">
            <span className="text-color font-bold">18 August 6:00PM</span>
            <span className="span font-normal">
              to <strong>19 August 1:00PM</strong> UTC +10
            </span>
          </div>
          <div className="text-xl span">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-2 w-full mt-12  md:items-center md:w-full">
        <div className="bg-white  p-2 rounded-md drop-shadow-2xl w-1/6 flex items-center justify-center">
          <FiMapPin className="text-3xl text-violet-600 sm:text-md" />
        </div>
        <div className="flex items-center justify-between gap-4  w-5/6 sm:text-sm">
          <div className="flex flex-col text-lg  sm:text-sm">
            <span className="text-color font-bold">Street name</span>
            <span className="span font-normal">Suburb, State, Postcode</span>
          </div>
          <div className="text-xl span">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </section>
  );
};

export { FinalEvent };
