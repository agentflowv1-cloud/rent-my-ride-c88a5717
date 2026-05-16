import React from 'react';

interface CardProps {
  title: string;
  description: string;
  cta: string;
}

function Card({ title, description, cta }: CardProps) {
  return (
    <div className="max-w-sm mx-auto mb-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log(\`You clicked ${cta}\`)}>
        {cta}
      </button>
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-wrap justify-center">
      <Card title="Sedan" description="Our sedan selection offers a range of comfortable and fuel-efficient vehicles" cta="Learn More"/>
      <Card title="SUV" description="Explore our selection of SUVs, offering ample space and versatility" cta="Browse Inventory"/>
      <Card title="Truck" description="Discover our lineup of rugged and reliable trucks, perfect for work or play" cta="Learn More"/>
    </div>
  );
}

export { Cards };