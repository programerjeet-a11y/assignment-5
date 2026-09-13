import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:px-10 lg:px-16 xl:px-20 sm:py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-360 flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Build Your Ideal{" "}
            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0 lg:text-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <button
              type="button"
              className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:border-pink-500 hover:text-pink-500"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={Banner}
            alt="Dev Stack Banner"
            className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
