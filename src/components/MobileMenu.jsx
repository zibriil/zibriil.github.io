export default function MobileMenu({ onCloseMobileMenu, hoverLink }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen p-3 lg:hidden transition ease-in-out duration-300">
      <ul className="flex flex-col justify-center items-center lg:space-x-12 lg:space-y-0 space-y-8 text-lg font-medium w-full h-full bg-slate-400 text-gray-900 rounded lg:text-base lg:flex-row">
        <li>
          <a href="/" className={hoverLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={hoverLink}>
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" className={hoverLink}>
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="mailto:em.izrofi001@gmail.com"
            className="inline-block bg-amber-400 font-medium px-4 py-2.5 rounded tracking-wide"
          >
            Contact Me
          </a>
        </li>
        <button
          type="button"
          className="fixed -top-2 right-6 bg-slate-300 rounded lg:hidden"
          onClick={onCloseMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </ul>
    </div>
  );
}
