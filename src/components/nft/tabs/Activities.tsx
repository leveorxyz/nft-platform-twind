import activities from '@/data/activities.json';

const Activities = () => {
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
        {activities.map((item) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap text-center py-3 text-sm font-medium text-gray-900 sm:pl-6">
              <span className="flex items-center gap-1">
                <svg className="mr-1 h-4 w-4 fill-accent">
                  <use xlinkHref={`/images/icons/icons.svg#icon-${item.icon}`}></use>
                </svg>
                {item.event}
              </span>
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              {item.price} ETH
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              <a href="#!" className="text-accent hover:text-accent-dark">
                {item.from}
              </a>
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              <a href="#!" className="text-accent hover:text-accent-dark">
                {item.to}
              </a>
            </td>
            <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
              <a href="#!" className="text-accent hover:text-accent-dark">
                {item.date}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Activities;

const labels = ['Event', 'Price', 'From', 'To', 'Date'];
