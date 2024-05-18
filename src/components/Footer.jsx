import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between mt-32 px-14 py-12 border-t">
      <p className="text-sm lg:text-base font-medium order-last lg:order-first mt-3 lg:m-0">
        &copy; {new Date().getFullYear()} Em Izrofi
      </p>
      <ul className="flex space-x-4 text-slate-800">
        <li>
          <Link
            to="https://web.facebook.com/emizrofi/"
            title="Facebook"
            target="_blank"
            className="hover:underline"
          >
            Facebook
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/zibriil"
            title="Github"
            target="_blank"
            className="hover:underline"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/m-izrofi/"
            title="LinkedIn"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </footer>
  );
}
