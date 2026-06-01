import Card from '../../components/card';
import { cardsData } from '../../data/cardsData';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-gray-800 text-center mb-10 tracking-tight">
        Our Featured Services
      </h1>
      
      {/* Responsive Grid Setup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {cardsData.map((card) => (
          <Card 
            key={card.id} // Unique Key required by React
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText="Explore More" // Custom button text prop
          />
        ))}
      </div>
    </div>
  );
}

export default Home;