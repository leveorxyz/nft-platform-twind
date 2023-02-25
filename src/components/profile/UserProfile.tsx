import { FaCopy, FaEllipsisV } from 'react-icons/fa';
import AuctionCard from '@/components/auctions/AuctionCard';
import auctions from '@/data/auctions.json';
import ProfileTabs from './ProfileTabs';

const UserProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
      <div className="relative">
        <div>
          <img
            src="https://via.placeholder.com/130"
            alt="avatar"
            className="absolute -top-12 left-0 rounded-full w-24 border border-white"
          />
          <div className="flex justify-between pt-16 ">
            <div>
              <h5 className="font-medium text-xl">John Doe</h5>
              <p className="text-sm text-brand-600 mt-1 flex gap-3 dark:text-brand-200">
                0x9b3E...7a5Bc{' '}
                <a href="#!">
                  <FaCopy />
                </a>
              </p>
            </div>

            <a href="#!">
              <FaEllipsisV />
            </a>
          </div>
        </div>

        <p className="text-sm mt-5">
          A collection of beautiful NFTs where you could find a world of arts.
        </p>

        <div className="flex gap-10 mt-5 border-t border-b border-brand-400 py-3 justify-center">
          <div className="text-center">
            <h5 className="text-md font-bold">95</h5>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <h5 className="text-md font-bold">350</h5>
            <p>Following</p>
          </div>
          <div className="text-center">
            <h5 className="text-md font-bold">1,578</h5>
            <p>Items</p>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 mt-10">
        <ProfileTabs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-5">
          {auctions.slice(0, 6).map((item) => (
            <AuctionCard key={item.id} {...item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-md py-3 px-8 text-center font-semibold text-white transition-all mt-10">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
