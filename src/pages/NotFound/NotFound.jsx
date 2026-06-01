import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mx-auto p-8 text-center mt-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Back to Home</Link>
    </div>
  );
}

export default NotFound;