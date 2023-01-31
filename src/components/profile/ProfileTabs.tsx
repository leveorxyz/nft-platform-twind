import { Tab } from '@headlessui/react';

const tabs = ['Collected', 'Created', 'Favorites', 'Activity', 'Inactive listing'];

const ProfileTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="space-x-4">
        {tabs.map((tab) => (
          <Tab key={tab}>
            {({ selected }) => (
              <button
                className={`px-3 py-2 font-medium text-sm rounded-md cursor-pointer capitalize hover:bg-accent  ${
                  selected ? 'bg-accent text-indigo-700' : 'text-gray-500 hover:text-gray-700'
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

export default ProfileTabs;
