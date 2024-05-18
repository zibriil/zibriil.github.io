import MobileMenu from './MobileMenu';

export default function Navbar({ isOpen, openMobileMenu, closeMobileMenu }) {
  const hoverLink =
    'relative w-fit block after:block after:absolute after:h-[3px] after:bg-gray-950 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:rounded-full';

  return (
    <div className="w-full backdrop-filter backdrop-blur-xl bg-white/50 sticky top-0 flex-none z-10">
      <nav className="w-full relative flex items-center justify-between lg:px-14 px-5 py-6">
        <h2 className="text-lg lg:text-xl text-gray-800 font-bold">
          Em Izrofi
        </h2>
        <button
          type="button"
          className="lg:hidden text-gray-800"
          onClick={openMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {isOpen && (
          <MobileMenu
            // onOpenMobileMenu={openMobileMenu}
            onCloseMobileMenu={closeMobileMenu}
            hoverLink={hoverLink}
          />
        )}
        <ul className="lg:flex items-center space-x-12 text-lg font-medium hidden">
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
        </ul>
        <a
          href="mailto:em.izrofi001@gmail.com"
          className="before:ease relative px-4 py-2.5 overflow-hidden rounded bg-amber-400 text-gray-900 font-medium tracking-wide transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 lg:block hidden"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
}
