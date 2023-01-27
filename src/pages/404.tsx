import type { NextPage } from 'next';
import Link from 'next/link';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Footer from '@/components/layout/Footer';

const NotFound: NextPage = () => {
  return (
    <main>
      <HeaderOne />
      <Breadcrumbs pageName="404 Not Found" />

      <div className="container py-20">
        <div className="flex flex-col max-w-3xl mx-auto items-center">
          <img src="/images/404.png" alt="404" />

          <h1 className="text-brand-700 font-display my-6 text-4xl dark:text-white md:text-6xl">
            Page Not Found!
          </h1>
          <p className="dark:text-brand-300 mb-12 text-lg leading-normal text-center">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link
            href="/"
            className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default NotFound;
