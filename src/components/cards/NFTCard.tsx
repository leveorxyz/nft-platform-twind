import { motion } from 'framer-motion';

interface Props {
  name: string;
  creator: string;
  bid: number;
  image: string;
}

const NFTCard = ({ name, creator, bid, image }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 5 }}
      className="bg-cover bg-center relative w-[250px] h-[320px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" bg-brand-900 bg-opacity-20 backdrop-blur-xl absolute left-0 right-0 bottom-0 px-3 py-2">
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold">{name}</p>
          <span className="flex justify-center items-center w-6 h-6">
            <svg className="h-6 w-6 bg-brand-200 rounded-full p-1">
              <use xlinkHref="/images/icons/icons.svg#icon-ETH" />
            </svg>
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-1">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Avatar"
            />
            <div>
              <p className="text-brand-200 text-xs">Creator</p>
              <p className="text-white text-xs">{creator}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-brand-200">Highest Bid</p>
            <p className="text-xs text-white">{bid} ETH</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
