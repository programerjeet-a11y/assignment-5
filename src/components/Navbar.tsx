import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [activeLink, setActiveLink] = useState<string>(
    window.location.pathname === "/"
      ? "/"
      : window.location.hash || window.location.pathname,
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/#technologies" },
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleLocationChange = () => {
      const currentLocation =
        window.location.pathname === "/"
          ? "/"
          : window.location.hash || window.location.pathname;

      setActiveLink(currentLocation);
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-18 grid-cols-[auto_1fr_auto] items-center gap-3 md:flex md:justify-between">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-800 transition hover:bg-gray-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <a
            href="/"
            onClick={() => handleLinkClick("/")}
            className="justify-self-center md:justify-self-auto"
          >
            <img
              src={Logo}
              alt="Dev Stack Logo"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`relative text-sm font-semibold transition duration-300 ${
                  activeLink === link.path
                    ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-orange-500 after:via-pink-500 after:to-violet-600"
                    : "text-gray-700 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center justify-end gap-1 sm:gap-3">
            <button
              type="button"
              className="rounded-lg px-2 py-2 text-xs font-semibold text-gray-700 transition hover:text-pink-500 sm:px-3 sm:text-sm"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-md transition hover:scale-105 sm:px-5 sm:text-sm"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  activeLink === link.path
                    ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
