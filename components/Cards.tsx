// components/Card.js
import Image from 'next/image';

const Card = () => {
  const cardsData = [
    {
      title: "Card Title 1",
      description: "This is a description for card 1.",
      buttonText: "Learn More",
      imageUrl: "https://images.bewakoof.com/t1080/men-s-brown-naruto-ramen-graphic-printed-super-loose-fit-t-shirt-637225-1719408973-1.jpg"
    },
    {
      title: "Card Title 2",
      description: "This is a description for card 2.",
      buttonText: "Learn More",
      imageUrl: "/images/image2.jpg"
    },
    {
      title: "Card Title 3",
      description: "This is a description for card 3.",
      buttonText: "Learn More",
      imageUrl: "/images/image3.jpg"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-around">
        {cardsData.map((card, index) => (
          <div key={index} className="grid grid-cols-10 bg-white rounded-lg shadow-lg p-4">
            <div className="col-span-6 p-4">
              <h1 className="text-xl font-bold mb-2">{card.title}</h1>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">{card.buttonText}</button>
            </div>
            <div className="col-span-4">
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={100}
                height={100}
                className="object-cover rounded-r-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
