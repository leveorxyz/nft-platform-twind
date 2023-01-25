import NFTTabs from './NFTTabs';

const NFTDetails = () => {
  return (
    <>
      <section className="relative lg:mt-24 lg:pt-24 lg:pb-24 mt-24 pt-12 pb-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="/images/gradient_light.jpg" alt="gradient" className="h-full" />
        </picture>
        <div className="container">
          <div className="md:flex md:flex-wrap">
            <div className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2 w-full">
              <img
                src="/images/nfts/single-nft.jpeg"
                alt="Image"
                className="rounded-lg cursor-pointer w-full"
              />
            </div>

            <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
              <div className="mb-3 flex">
                <div className="flex items-center">
                  <a className="text-accent mr-2 text-sm font-bold">CryptoGuysNFT</a>
                  <span
                    className="dark:border-brand-600 bg-green inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                    data-tippy-content="Verified Collection"
                  >
                    <svg className="icon h-[.875rem] w-[.875rem] fill-white">
                      <use xlinkHref="/images/icons/icons.svg#icon-right-sign"></use>
                    </svg>
                  </span>
                </div>

                <div className="ml-auto flex items-stretch space-x-2 relative">
                  <div className="dark:bg-brand-700 dark:border-brand-600 border-brand-100 flex items-center space-x-1 rounded-lg border bg-white py-2 px-4">
                    <button className="relative cursor-pointer">
                      <svg className="icon icon-heart-fill dark:fill-brand-200 fill-brand-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                        <use xlinkHref="/images/icons/icons.svg#icon-heart-fill"></use>
                      </svg>
                    </button>
                    <span className="dark:text-brand-200 text-sm">99</span>
                  </div>

                  {/* <!-- Actions --> */}
                  {/* <Auctions_dropdown classes="dark:border-brand-600 dark:hover:bg-brand-600 border-brand-100 dropdown hover:bg-brand-100 dark:bg-brand-700 rounded-xl border bg-white" /> */}
                </div>
              </div>

              <h1 className="font-display text-brand-700 mb-4 text-4xl font-semibold dark:text-white">
                Golden Skull
              </h1>

              <div className="mb-8 flex items-center space-x-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="-ml-1">
                    <svg className="icon mr-1 h-4 w-4">
                      <use xlinkHref="/images/icons/icons.svg#icon-ETH"></use>
                    </svg>
                  </span>

                  <span className="text-green text-sm font-medium tracking-tight">43 ETH</span>
                </div>
                <span className="dark:text-brand-300 text-brand-400 text-sm">Highest bid</span>
                <span className="dark:text-brand-300 text-brand-400 text-sm">1/1 available</span>
              </div>

              <p className="dark:text-brand-300 mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus vel
                doloremque, nisi ipsam quo porro nam qui alias esse labore, incidunt excepturi
                pariatur voluptatibus architecto eaque! Autem, assumenda repellendus?
              </p>

              <div className="mb-8 flex flex-wrap">
                <div className="mr-8 mb-4 flex">
                  <figure className="mr-4 shrink-0">
                    <a className="relative block">
                      <img
                        src="/images/avatar.png"
                        alt="creator"
                        className="rounded-2lg h-12 w-12"
                        loading="lazy"
                      />
                      <div className="dark:border-brand-600 bg-green absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                        <svg className="icon h-[.875rem] w-[.875rem] fill-white">
                          <use xlinkHref="/images/icons/icons.svg#icon-right-sign"></use>
                        </svg>
                      </div>
                    </a>
                  </figure>
                  <div className="flex flex-col justify-center">
                    <span className="text-brand-400 block text-sm dark:text-white">
                      Creator <strong>10% royalties</strong>
                    </span>

                    <a className="text-accent block">
                      <span className="text-sm font-bold">John Doe</span>
                    </a>
                  </div>
                </div>

                <div className="mb-4 flex">
                  <figure className="mr-4 shrink-0">
                    <a className="relative block">
                      <img
                        src="/images/artist/avatars/avatar_1.jpeg"
                        alt="owner"
                        className="rounded-2lg h-12 w-12"
                        loading="lazy"
                      />
                      <div
                        className="dark:border-brand-600 bg-green absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                        data-tippy-content="Verified Collection"
                      >
                        <svg className="icon h-[.875rem] w-[.875rem] fill-white">
                          <use xlinkHref="/images/icons/icons.svg#icon-right-sign"></use>
                        </svg>
                      </div>
                    </a>
                  </figure>
                  <div className="flex flex-col justify-center">
                    <span className="text-brand-400 block text-sm dark:text-white">Owned by</span>

                    <a className="text-accent block">
                      <span className="text-sm font-bold">Ralph Edwards</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Bid --> */}
              <div className="dark:bg-brand-700 dark:border-brand-600 border-brand-100 rounded-2lg border bg-white p-8">
                <div className="mb-8 sm:flex sm:flex-wrap">
                  {/* <!-- Highest bid --> */}
                  <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                    <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="dark:text-brand-300 text-brand-400 text-sm">
                        Highest bid by{' '}
                      </span>

                      <a className="text-accent text-sm font-bold">
                        0x695d2ef170ce69e794707eeef9497af2de25df82
                      </a>
                    </div>
                    <div className="mt-3 flex">
                      <figure className="mr-4 shrink-0">
                        <a className="relative block">
                          <img
                            src="/images/artist/avatars/avatar_2.jpeg"
                            alt="avatar"
                            className="rounded-2lg h-12 w-12"
                            loading="lazy"
                          />
                        </a>
                      </figure>
                      <div>
                        <div className="flex items-center whitespace-nowrap">
                          <span className="-ml-1">
                            <svg className="icon mr-1 h-4 w-4">
                              <use xlinkHref="/images/icons/icons.svg#icon-ETH"></use>
                            </svg>
                          </span>

                          <span className="text-green text-lg font-medium leading-tight tracking-tight">
                            43 ETH
                          </span>
                        </div>
                        <span className="dark:text-brand-300 text-brand-400 text-sm">
                          ~10,864.10
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="dark:border-brand-600 sm:border-brand-100 mt-4 sm:mt-0 sm:w-1/2 sm:border-l sm:pl-4 lg:pl-8">
                    <span className="js-countdown-ends-label text-brand-400 dark:text-brand-300 text-sm">
                      Auction ends in
                    </span>
                    {/* <Items_Countdown_timer time={+auction_timer} /> */}
                  </div>
                </div>

                <button className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                  Place Bid
                </button>
              </div>
            </div>
          </div>
          <NFTTabs />
        </div>
      </section>
    </>
  );
};

export default NFTDetails;
