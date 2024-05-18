import myFoto from '../assets/em_izrofi.jpg';

export default function Hero() {
  return (
    <div className="text-center mt-28">
      <img
        src={myFoto}
        className="w-36 min-h-36 mx-auto rounded-full border-4 border-white shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
      />
      <h3 className="mt-5 text-3xl font-bold text-gray-800">M. Izrofi</h3>
      <h4 className="mt-1 text-xl font-semibold text-gray-800">
        Frontend Web Developer
      </h4>
    </div>
  );
}
