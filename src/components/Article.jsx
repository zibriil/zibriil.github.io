export default function Article({
  id,
  title,
  image,
  tags,
  // description,
  onShowDetail,
}) {
  return (
    <article>
      <div className="p-3">
        <picture className="block p-3 rounded overflow-hidden">
          <img
            src={image}
            className="w-full h-60 object-cover scale-125"
            alt={title}
          />
        </picture>
      </div>
      <div className="px-3">
        <button onClick={() => onShowDetail(id)}>
          <h3 className="text-lg lg:text-xl font-bold text-slate-800 outline-none border-none">
            {title}
          </h3>
        </button>
        {/* <p className="my-1 lg:text-lg text-base text-slate-800 line-clamp-3">
          {description}
        </p> */}
        <ul className="flex items-center space-x-2 my-3 overflow-auto">
          {tags.map(tag => (
            <li
              key={tag}
              className="whitespace-nowrap px-3 py-1 bg-slate-200 rounded text-xs lg:text-sm text-gray-800 font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
