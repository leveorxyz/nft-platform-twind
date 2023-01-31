import { Tab } from '@headlessui/react';

const tabs = ['Items', 'Activity'];

const CollectionTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="space-x-4">
        {tabs.map((tab) => (
          <Tab key={tab}>
            {({ selected }) => (
              <button
                className={`px-3 py-2 font-medium text-sm rounded-md cursor-pointer capitalize hover:bg-accent  ${
                  selected ? 'bg-accent text-white' : 'text-gray-500 hover:text-gray-700'
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

export default CollectionTabs;
