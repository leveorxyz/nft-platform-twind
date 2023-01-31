import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CollectionInfo from '@/components/collections/CollectionInfo';
import Footer from '@/components/layout/Footer';

const CollectionDetails: NextPage = () => {
  return (
    <main>
      <NextSeo title="Collection" />
      <HeaderOne />
      <div className="relative">
        <Breadcrumbs pageName="Collection" />
      </div>

      <div className="container pb-14">
        <CollectionInfo />
      </div>
      <Footer />
    </main>
  );
};

export default CollectionDetails;
