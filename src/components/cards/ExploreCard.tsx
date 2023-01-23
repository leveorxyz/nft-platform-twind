import { motion } from 'framer-motion';

interface Props {
  title: string;
  image: string;
  sub_images: string[];
  creator_username: string;
  creator_thumbnail: string;
  items_count: string;
}

const ExploreCard = ({
  title,
  image,
  sub_images,
  creator_username,
  creator_thumbnail,
  items_count,
}: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 5 }}
      className="dark:bg-brand-700 dark:border-brand-700 border-brand-200 rounded-lg border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg cursor-pointer"
    >
      <a className="flex space-x-[0.625rem]">
        <span className="w-[74.5%]">
          <img
            src={image}
            alt="item 1"
            className="h-full w-full rounded-[0.625rem] object-cover"
            loading="lazy"
          />
        </span>
        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
          {sub_images.map((item, idx) => (
            <img
              key={`image-${idx}`}
              src={item}
              alt="thumb"
              className="h-full rounded-[0.625rem] object-cover"
              loading="lazy"
            />
          ))}
        </span>
      </a>

      <a className="font-display hover:text-accent dark:hover:text-accent text-brand-700 mt-4 block text-base dark:text-white">
        {title}
      </a>

      <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
        <div className="flex flex-wrap items-center">
          <a className="mr-2 shrink-0">
            <img src={creator_thumbnail} alt="owner" className="h-5 w-5 rounded-full" />
          </a>
          <span className="dark:text-brand-400 mr-1">by</span>
          <a className="text-accent">
            <span>{creator_username}</span>
          </a>
        </div>
        <span className="dark:text-brand-300 text-sm">{items_count} Items</span>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
