import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Info() {
  return (
    <section className="mt-32 bg-slate-100 flex justify-center">
      <ul className="py-20 space-y-5">
        <li className="px-5 py-3 bg-slate-50 rounded-full text-lg font-medium text-stone-600 space-x-2">
          <span>
            <MailIcon />
          </span>{' '}
          <a href="mailto:em.izrofi001@gmail.com" className="">
            em.izrofi001@gmail.com
          </a>
        </li>
        <li className="px-5 py-3 bg-slate-50 rounded-full text-lg font-medium text-stone-600 space-x-2">
          <span>
            <LocalPhoneIcon />
          </span>{' '}
          <a href="#" className="">
            +6289686609819
          </a>
        </li>
      </ul>
    </section>
  );
}
