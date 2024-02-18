import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between mt-32 px-14 py-12 border-t">
      <p className="text-sm lg:text-base font-medium order-last lg:order-first mt-3 lg:m-0">
        &copy; {new Date().getFullYear()} Em Izrofi
      </p>
      <menu className="flex space-x-4 text-slate-800">
        <li>
          <a href="https://web.facebook.com/emizrofi/" title="Facebook">
            <FacebookRoundedIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/zibriil" title="Github">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/m-izrofi/" title="LinkedIn">
            <LinkedInIcon />
          </a>
        </li>
      </menu>
    </footer>
  );
}
