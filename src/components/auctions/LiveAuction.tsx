import { motion } from 'framer-motion';
import AuctionCard from './AuctionCard';
import auctions from '@/data/auctions.json';

const LiveAuction = () => {
  return (
    <motion.div className="dark:bg-brand-900 relative py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h5 className="font-display text-brand-700  text-3xl dark:text-white">Live Auction</h5>
          <a href="#!" className="text-md font-medium text-accent dark:text-brand-200">
            View All
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center"
        >
          {auctions.map((item) => (
            <AuctionCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LiveAuction;
