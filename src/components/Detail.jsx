// import { ARTICLES } from '../data/articles';
import { useEffect, useRef } from 'react';

export default function Detail({ portfolio, onClose }) {
  // const slugUrl = el.title.toLowerCase().split(' ').join('-');
  const ref = useRef();

  useEffect(() => {
    document
      .querySelector('dialog')
      .addEventListener('click', function (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose();
        }
      });
  }, [onClose]);

  return (
    <div ref={ref} className="relative">
      <img src={portfolio?.image} alt={portfolio?.title} />
      <div className="p-5 space-y-3">
        <h2 className="text-3xl text-gray-800 font-bold">{portfolio?.title}</h2>
        {/* <p className="text-lg leading-8">{portfolio?.description}</p> */}

        <ul className="flex items-center space-x-2 my-3 overflow-x-auto">
          {portfolio?.tags.map(tag => (
            <li
              key={tag}
              className="px-3 py-1 bg-slate-200 rounded text-xs lg:text-sm text-gray-800 font-medium whitespace-nowrap"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {/* <span className="fixed top-5 right-5 bg-white px-3 py-1 rounded shadow-lg font-medium text-sm hover:animate-pulse">
        ESC
      </span> */}
    </div>
  );
}
