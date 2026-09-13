import { useState } from "react";
import { FaStar, FaTimes, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import technologiesData from "../data/technologies.json";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const technologies = technologiesData as Technology[];

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already added to your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (technologyId: string) => {
    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === technologyId,
    );

    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== technologyId),
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  const isAdded = (technologyId: string) => {
    return selectedTechnologies.some(
      (technology) => technology.id === technologyId,
    );
  };

  return (
    <>
      <section
        id="technologies"
        className="bg-gray-50 px-4 py-14 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      >
        <div className="mx-auto w-full max-w-360">
          {/* Title */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Explore the{" "}
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[1fr_340px]">
            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology.id}
                  className="card border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="card-body p-5">
                    {/* Card Top */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 p-3">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <span className="badge badge-secondary">
                        {technology.badge}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {technology.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 min-h-18 text-sm leading-6 text-gray-600">
                      {technology.description}
                    </p>

                    {/* Category and Difficulty */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="badge badge-outline">
                        {technology.category}
                      </span>

                      <span className="badge badge-ghost">
                        {technology.difficulty}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold text-gray-800">
                        {technology.rating}
                      </span>
                      <span className="text-gray-500">/ 5.0</span>
                    </div>

                    {/* Add Button */}
                    <button
                      type="button"
                      onClick={() => addToStack(technology)}
                      disabled={isAdded(technology.id)}
                      className={`btn mt-5 w-full rounded-full ${
                        isAdded(technology.id)
                          ? "btn-disabled"
                          : "border-0 bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90"
                      }`}
                    >
                      {isAdded(technology.id)
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Your Stack Sidebar */}
            <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md xl:sticky xl:top-24">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Your Stack
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {selectedTechnologies.length} Technology
                    {selectedTechnologies.length !== 1 ? "ies" : "y"} Selected
                  </p>
                </div>

                <span className="badge badge-primary badge-lg">
                  {selectedTechnologies.length}
                </span>
              </div>

              {/* Empty State */}
              {selectedTechnologies.length === 0 ? (
                <div className="py-10 text-center">
                  <div className="mb-4 text-5xl">🧰</div>

                  <h4 className="font-semibold text-gray-800">
                    Your stack is empty
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Add technologies from the cards to build your ideal stack.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Items */}
                  <div className="mt-5 space-y-3">
                    {selectedTechnologies.map((technology) => (
                      <div
                        key={technology.id}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-2">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-semibold text-gray-800">
                            {technology.name}
                          </h4>

                          <p className="text-xs text-gray-500">
                            {technology.category}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromStack(technology.id)}
                          aria-label={`Remove ${technology.name}`}
                          className="btn btn-circle btn-sm btn-ghost text-red-500 hover:bg-red-50 hover:text-red-600"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Remove All */}
                  <button
                    type="button"
                    onClick={removeAll}
                    className="btn btn-outline mt-5 w-full rounded-full border-red-300 text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <FaTrash />
                    Remove All
                  </button>
                </>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Technologies;
