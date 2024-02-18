import { useState, useEffect, useRef } from 'react';

import { ARTICLES } from '../data/articles';
import Article from './Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Portfolios({ showDetail }) {
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const limit = 4;

  useEffect(() => {
    setDisplayedData(ARTICLES.slice(0, startIndex + limit));
  }, [startIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: '-100px' }
    );
    observer.observe(ref.current);
    if (isVisible) {
      ref.current
        .querySelector('.portfolio')
        .classList.add('translate-y-0', 'opacity-1');
    } else {
      ref.current
        .querySelector('.portfolio')
        .classList.remove('translate-y-0', 'opacity-1');
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="w-full mt-32 max-w-5xl mx-auto px-5"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
        My Portfolio
      </h2>
      <ul
        className={`grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 portfolio  transition duration-500 ${
          !isVisible && 'translate-y-32 opacity-0'
        }`}
      >
        {displayedData.map(article => (
          <li
            key={article.id}
            className="w-full relative bg-white rounded-xl hover:shadow-[0px_10px_50px_rgba(0,0,0,0.1)] ease-out duration-150 overflow-hidden border border-gray-200"
          >
            <Article {...article} onShowDetail={showDetail} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-12">
        {ARTICLES.length > startIndex + limit && (
          <button
            type="button"
            className="flex items-center bg-amber-400 lg:px-6 lg:py-3 px-4 py-2.5 lg:text-lg text-base font-medium rounded"
            onClick={() => setStartIndex(startIndex + limit)}
          >
            Load More
            <span className="ms-0.5">
              <ExpandMoreIcon />
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
