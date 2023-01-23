import Link from 'next/link';

const HeroOne = () => {
  return (
    <section className="relative pb-10 pt-20 md:pt-32">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full">
        <img src="/images/gradient.jpg" alt="gradient" className="h-full w-full" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img src="/images/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
      </picture>

      <div className="container h-full mx-auto">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-5">
            <h1 className="text-brand-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
              Explore, collect, and sell NFTs
            </h1>
            <p className="dark:text-brand-200 mb-8 text-center text-lg md:text-left">
              The World&apos;s Largest Digital Marketplace For Crypto Collectibles And Non-Fungible
              Tokens (NFTs)
            </p>
            <div className="flex space-x-4">
              <Link
                href="/create"
                className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-md py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Create
              </Link>

              <Link
                href="/explore"
                className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-md bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="col-span-6 xl:col-span-7">
            <div className="relative text-center md:pl-8 md:text-right animate-fly">
              <img
                src="/images/hero/hero.jpg"
                alt=""
                className="rounded-[20%] mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
