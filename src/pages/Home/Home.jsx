import Card from '../../components/card';
import { cardsData } from '../../data/cardsData';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id} // Yeh line lazmi add karo takay link sahi banay
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;