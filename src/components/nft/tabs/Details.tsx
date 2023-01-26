const Details = () => {
  return (
    <div className="dark:bg-brand-700 dark:border-brand-600 border-brand-100 border bg-white p-6 md:p-10">
      <div className="flex flex-col gap-y-1 md:gap-y-2">
        <div className="flex items-center gap-1 md:gap-3">
          <span className="dark:text-brand-300 min-w-[8rem]">Contract Address:</span>
          <a href="#" className="text-accent truncate">
            0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F
          </a>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <span className="dark:text-brand-300 min-w-[8rem]">Token ID:</span>
          <span className=" text-brand-700 cursor-pointer select-none dark:text-white">7714</span>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <span className="dark:text-brand-300 min-w-[8rem]">Token Standard:</span>
          <span className="text-brand-700 dark:text-white">ERC-721</span>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <span className="dark:text-brand-300 min-w-[8rem]">Chain:</span>
          <span className="text-brand-700 dark:text-white">Ethereum</span>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <span className="dark:text-brand-300 min-w-[8rem]">Last Updated:</span>
          <span className="text-brand-700 dark:text-white">3 months ago</span>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <span className="dark:text-brand-300 min-w-[8rem]">Creator Earnings:</span>
          <span className="text-brand-700 dark:text-white">5%</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
