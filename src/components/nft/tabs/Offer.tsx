import offers from '@/data/offers.json';

const Offer = () => {
  return (
    <table className="min-w-full divide-y divide-brand-100 border border-brand-100 dark:bg-brand-700  dark:border-brand-600 dark:divide-brand-600">
      <thead className="bg-light-base dark:bg-brand-600">
        <tr>
          {labels.map((label) => (
            <th
              key={label}
              scope="col"
              className="py-3 px-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-brand-100 dark:bg-brand-700 dark:divide-brand-600">
        {offers.map((item) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap text-center py-3 text-sm font-medium text-gray-900 sm:pl-6">
              {item.price}
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              {item.usdPrice}
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              {item.floorDifference}
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              {item.expiration}
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              <a href="#!" className="text-accent hover:text-accent-dark">
                {item.from}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Offer;

const labels = ['Price (ETH)', 'USD Price', 'Floor Difference', 'Expiration', 'From'];
