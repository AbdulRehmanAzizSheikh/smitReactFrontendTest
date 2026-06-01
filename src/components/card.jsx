import { Link } from 'react-router-dom';

function Card({ id, title, description, image }) {
  return (
    <div className="bg-white block max-w-sm p-6 border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
      <div className="overflow-hidden rounded-xl">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </div>
      <div className="mt-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-1">{title}</h5>
        <p className="mb-6 text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
      <Link
        to={`/product/${id}`}
        className="w-full inline-flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-xl text-sm px-4 py-2.5 transition-colors"
      >
        Read More
        <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
      </Link>
    </div>
  );
}

export default Card;