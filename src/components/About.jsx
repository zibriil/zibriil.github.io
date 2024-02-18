import { useState, useEffect, useRef } from 'react';

import MyFoto from '../assets/landscape.jpg';

export default function About() {
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: '-100px', threshold: 0.15 }
    );
    observer.observe(ref.current);

    if (isVisible) {
      ref.current
        .querySelector('.about')
        .classList.add('translate-y-0', 'opacity-1');
    } else {
      ref.current
        .querySelector('.about')
        .classList.remove('translate-y-0', 'opacity-1');
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="about"
      className="mt-44 bg-slate-100 py-20 overflow-hidden"
    >
      <div
        className={`about max-w-5xl px-5 mx-auto transition duration-500 ${
          !isVisible && 'translate-y-32 opacity-0'
        }`}
      >
        <div className="grid lg:grid-cols-2">
          <div className="bg-slate-500 lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl overflow-hidden">
            <img
              src={MyFoto}
              className="object-cover object-center select-none"
              alt=""
            />
          </div>
          <div className="bg-white lg:rounded-r-xl lg:rounded-bl-none rounded-b-xl p-5">
            <h2 className="text-xl font-medium">About Me</h2>
            <div className="text-justify">
              <p className="text-lg mt-1 mb-5 leading-[1.95rem]">
                Hi, I&apos;m Muhammad Izrofi, a fresh graduate with a high
                passion for web development. I started my journey as a web
                developer to pursue my interest and desire to keep learning. For
                more information please click the following button to download
                my CV. Thank you :)
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://drive.google.com/file/d/1y7Ob-nVeJFTi4YbHDpG2_0A4AzFCsTOS/view?usp=sharing"
                className="inline-block bg-amber-400 text-gray-900 px-5 py-3 rounded font-medium tracking-wide"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
