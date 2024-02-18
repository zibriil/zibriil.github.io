import headerBg from '../assets/bg0.jpg';

export default function Header({ children }) {
  return (
    <>
      <img
        src={headerBg}
        className="w-full lg:h-96 h-64 mx-auto absolute top-0 select-none object-center lg:object-fill object-cover -z-10"
      />
      {children}
    </>
  );
}
