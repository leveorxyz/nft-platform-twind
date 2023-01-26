export const Properties = () => {
  return (
    <div className="border-brand-100 border bg-white p-6 md:p-10 dark:bg-brand-700 dark:border-brand-600 ">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {data.map((item) => (
          <a
            key={item.category}
            href="#!"
            className="dark:bg-brand-800 dark:border-brand-600 bg-light-base rounded-2lg border-brand-100 flex flex-col space-y-2 border p-5 text-center transition-shadow hover:shadow-lg"
          >
            <span className="text-accent text-sm uppercase">{item.category}</span>
            <span className="text-brand-700 text-base dark:text-white">{item.value}</span>
            <span className="text-brand-400 text-sm">{item.description}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const data = [
  { category: 'background', value: 'mint', description: '6% have this traits' },
  { category: 'body', value: 'warm', description: '25% have this traits' },
  { category: 'clothing', value: 'green sweater', description: '2% have this traits' },
  { category: 'expression', value: 'happy', description: '2% have this traits' },
  { category: 'eyewear', value: 'pink square sunglasses', description: '2% have this traits' },
  { category: 'hair', value: 'light brown spiky hair', description: '1% have this traits' },
];
