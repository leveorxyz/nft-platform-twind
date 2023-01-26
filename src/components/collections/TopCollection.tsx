import ButtonDropdown from '../common/ButtonDropdown';
import collections from '@/data/collections.json';

const TopCollection = () => {
  return (
    <div>
      <div className="border-b border-brand-500 my-10 pb-8">
        <h2 className="font-display text-brand-700 mb-8 text-3xl dark:text-white ">
          Top Collections
        </h2>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <ButtonDropdown
              iconName="collections"
              title="all categories"
              options={[
                'All NFT',
                'sports',
                'music',
                'art',
                'collectibles',
                'trading cards',
                'utility',
                'photography',
              ]}
            />

            <ButtonDropdown
              iconName="ETH"
              title="Select Chain"
              options={['Ethereum', 'Polygon', 'Hyperledger']}
            />
          </div>
          <ButtonDropdown
            iconName="history"
            title="Last 7 Days"
            options={['Last 7 Days', 'Last 24 Hours', 'Last 30 Days']}
          />
        </div>
      </div>

      <table className="mt-5 min-w-full divide-y divide-brand-100 border border-brand-100 dark:bg-brand-700  dark:border-brand-600 dark:divide-brand-600">
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
          {collections.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap text-center py-3 text-sm font-medium text-gray-900 sm:pl-6">
                {item.id}
              </td>
              <td className="flex items-center  whitespace-nowrap text-center py-3 text-sm font-medium text-gray-900 sm:pl-6">
                <figure className="mr-4 w-14 h-14 relative">
                  <img src={item.image} alt="Figure" className="rounded-full" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-1 -right-1"
                  >
                    <path
                      d="M10.7509 2.45001C11.4409 1.86001 12.5709 1.86001 13.2709 2.45001L14.8509 3.81001C15.1509 4.07001 15.7109 4.28001 16.1109 4.28001H17.8109C18.8709 4.28001 19.7409 5.15001 19.7409 6.21001V7.91001C19.7409 8.30001 19.9509 8.87001 20.2109 9.17001L21.5709 10.75C22.1609 11.44 22.1609 12.57 21.5709 13.27L20.2109 14.85C19.9509 15.15 19.7409 15.71 19.7409 16.11V17.81C19.7409 18.87 18.8709 19.74 17.8109 19.74H16.1109C15.7209 19.74 15.1509 19.95 14.8509 20.21L13.2709 21.57C12.5809 22.16 11.4509 22.16 10.7509 21.57L9.17086 20.21C8.87086 19.95 8.31086 19.74 7.91086 19.74H6.18086C5.12086 19.74 4.25086 18.87 4.25086 17.81V16.1C4.25086 15.71 4.04086 15.15 3.79086 14.85L2.44086 13.26C1.86086 12.57 1.86086 11.45 2.44086 10.76L3.79086 9.17001C4.04086 8.87001 4.25086 8.31001 4.25086 7.92001V6.20001C4.25086 5.14001 5.12086 4.27001 6.18086 4.27001H7.91086C8.30086 4.27001 8.87086 4.06001 9.17086 3.80001L10.7509 2.45001Z"
                      fill="#408CFF"
                    />
                    <path
                      d="M8.38086 12L10.7909 14.42L15.6209 9.57999"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </figure>
                {item.name}
              </td>
              <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
                {item.amount} ETH
              </td>
              <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
                {item.change > 0 ? (
                  <span className="text-green">+{item.change}%</span>
                ) : (
                  <span className="text-red">{item.change}%</span>
                )}
              </td>
              <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
                {item.floorPrice}
              </td>
              <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
                2.4k
              </td>
              <td className="whitespace-nowrap text-center md:px-6 py-3 text-sm text-gray-500">
                205
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-10">
        <button className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-md py-3 px-8 text-center font-semibold text-white transition-all">
          Load More
        </button>
      </div>
    </div>
  );
};

export default TopCollection;

const labels = ['#', 'Collection', 'Volume', 'change', 'Floor Price', 'Owners', 'Items'];
