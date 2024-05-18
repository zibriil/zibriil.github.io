import { useState, useEffect, useRef } from 'react';

import headerBg from '../assets/bg0.jpg';

export default function Contact() {
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
        .querySelector('.contact')
        .classList.add('translate-y-0', 'opacity-1');
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={ref} id="contact" className="w-full mt-32">
      <div
        className={`contact relative transition duration-500 pt-48 pb-20 ${
          !isVisible && 'translate-y-32 opacity-0'
        }`}
      >
        <img
          src={headerBg}
          className="w-full h-64 mx-auto absolute top-0 select-none object-center lg:object-fill object-cover opacity-45 -z-10"
        />
        <div className="max-w-2xl mx-auto text-center px-5">
          <h2 className="text-4xl font-bold text-gray-900">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg font-medium text-gray-500 mt-2.5">
            Get in touch via email of contact form. Message me if you are
            interested in my portfolio and let&apos;s work together.
          </p>
          <a
            href="mailto:em.izrofi001@gmail.com"
            className="inline-block mt-6 bg-amber-400 text-gray-900 px-6 py-4 rounded-md text-lg font-medium tracking-wide hover:-translate-y-1 transition-all delay-100 hover:shadow-xl hover:shadow-amber-400/50"
          >
            <span className="flex items-center gap-x-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              Contact Me
            </span>{' '}
          </a>
        </div>
      </div>
    </section>
  );
}
