import { useState } from "react";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center relative">
      <button
        id="dropdownDefault"
        onClick={() => setOpen(!open)}
        className="text-black bg-gray-300 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
        type="button"
      >
        Filter berdasarkan instansi
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          id="dropdown"
          className="absolute top-12 z-10 w-56 p-3 bg-gray-300 rounded-lg shadow"
        >
          <h6 className="mb-3 text-sm font-medium text-black">
            Status
          </h6>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <input
                id="done"
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-1"
              />
              <label
                htmlFor="done"
                className="ml-2 text-sm font-medium text-black"
              >
                Done
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="process"
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
              />
              <label
                htmlFor="process"
                className="ml-2 text-sm font-medium text-black"
              >
                Process
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="build"
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
              />
              <label
                htmlFor="build"
                className="ml-2 text-sm font-medium text-black"
              >
                Build
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
