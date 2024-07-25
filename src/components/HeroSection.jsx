import React from "react";

const HeroSection = () => {
  return (
    <div className="h-full flex flex-col gap-5 justify-center items-center text-white">
      <div className="flex flex-col gap-5 sm:px-0 px-4 text-center">
        <div className="text-3xl sm:text-[80px] font-semibold leading-normal">FoodieFly</div>
        <div className="hero-heading text-[16px] sm:text-2xl font-semibold drop-shadow-2xl">
          Flavors at Your Doorstep: Savor Every Moment with Fast and Fresh
          Delivery
        </div>
      </div>
      <form className="sm:w-1/2 w-4/5 mt-8">
        <div class="relative text-gray-600 focus-within:text-gray-400 w-4/5 mx-auto">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="w-full py-3 text-base text-black bg-white rounded-lg pl-10 focus:outline-none shadow-2xl focus:bg-white focus:text-gray-900"
            placeholder="Search for Restaurant, Cusines or a Dish"
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
