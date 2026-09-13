import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 text-gray-700 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-360">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Block */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Dev Stack Logo" className="mb-5 h-10 w-auto" />

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Product
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="transition hover:text-pink-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-pink-500">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="transition hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-pink-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="transition hover:text-pink-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Legal
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#privacy" className="transition hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a href="#privacy" className="transition hover:text-pink-500">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
