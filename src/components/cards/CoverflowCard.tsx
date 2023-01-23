interface Props {
  title: string;
  image: string;
  creatorName: string;
  creatorAvatar: string;
}

const CoverflowCard = ({ title, image, creatorName, creatorAvatar }: Props) => {
  return (
    <div className="block overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg dark:bg-brand-700">
      <div className="relative">
        <img src={image} alt={title} className="h-[340px] w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex ">
          <img src={creatorAvatar} alt="avatar" className="mr-4 h-10 w-10 rounded-full" />
          <div>
            <p className="font-display text-lg text-brand-700 hover:text-accent dark:text-white">
              {title}
            </p>
            <a className="text-2xs text-accent">{creatorName}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverflowCard;
