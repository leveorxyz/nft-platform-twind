import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { MdFavoriteBorder } from 'react-icons/md';

interface Props {
  image: string;
  title: string;
  bid_amount: number;
  price: number;
  reaction_count: number;
}

const NotableCard = ({ image, title, bid_amount, price, reaction_count }: Props) => {
  return (
    <div className="dark:bg-brand-700 dark:border-brand-700 border-brand-100 rounded-[20px] block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-brand-500">
      <figure>
        <a>
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              height={230}
              width={230}
              className="rounded-[0.625rem] w-full"
              loading="lazy"
            />
          </div>
        </a>
      </figure>
      <div className="mt-4 flex items-center justify-between">
        <a>
          <span className="font-display text-brand-700 hover:text-accent text-base dark:text-white">
            {title}
          </span>
        </a>

        <span className="dark:border-brand-600 border-brand-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2">
          <img src="/images/icons/eth-icon.svg" alt="" className="w-3 h-3 mr-1" />

          <span className="text-green text-sm font-medium tracking-tight">{price} ETH</span>
        </span>
      </div>
      <div className="mt-2 text-sm">
        <span className="dark:text-brand-300 text-brand-500">Current Bid </span>
        <span className="dark:text-brand-100 text-brand-700">{bid_amount} ETH</span>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button type="button" className="text-accent font-display text-sm font-semibold">
          Place bid
        </button>

        <button className="relative cursor-pointe flex gap-1 items-center">
          <MdFavoriteBorder className="icon icon-heart-fill dark:fill-brand-200 fill-brand-500 hover:fill-red dark:hover:fill-red h-4 w-4" />
          <span className="dark:text-brand-200 text-sm">{reaction_count}</span>
        </button>
      </div>
    </div>
  );
};

export default NotableCard;
