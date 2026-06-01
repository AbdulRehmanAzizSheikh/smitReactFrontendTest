import { useParams, Link } from 'react-router-dom';
import { cardsData } from '../../data/cardsData';
import Button from '../../components/button';

function ProductDetail() {
    // useParams URL se "id" nikalega (e.g., /product/3 me se 3 nikalega)
    const { id } = useParams();

    // Data array me se matching id wala product dhoondo
    const product = cardsData.find((item) => item.id === parseInt(id));

    // Agar product nahi milta toh error message dikhao
    if (!product) {
        return (
            <div className="container mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold text-red-500">Product Not Found!</h2>
                <Link to="/" className="text-blue-500 underline mt-4 inline-block">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Link to="/" className="text-sm font-semibold text-blue-600 hover:underline mb-6 inline-block">
                ← Back to Home
            </Link>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden md:flex">
                <div className="md:w-1/2">
                    <img className="w-full h-64 md:h-full object-cover" src={product.image} alt={product.title} />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Product ID: #{product.id}</span>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                    <Button
                        variant="primary"
                        onClick={() => alert(`Inquiry sent for ${product.title}!`)}
                    >
                        Order/Inquire Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;