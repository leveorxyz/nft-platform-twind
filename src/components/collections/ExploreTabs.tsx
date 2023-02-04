import { Tab } from '@headlessui/react';

const tabs = [
  'All NFT',
  'sports',
  'music',
  'art',
  'collectibles',
  'trading cards',
  'utility',
  'photography',
];

const ExploreTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="space-x-4">
        {tabs.map((tab) => (
          <Tab key={tab}>
            {({ selected }) => (
              <button
                className={`px-3 py-2 font-medium text-sm rounded-md cursor-pointer capitalize hover:bg-accent hover:text-white  ${
                  selected
                    ? 'bg-accent text-indigo-700 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

export default ExploreTabs;
