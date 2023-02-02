import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CollectionInfo from '@/components/collections/CollectionInfo';
import Footer from '@/components/layout/Footer';

const CollectionDetails: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="Collection | NFT ARTCART - Making Digital Art Accessible to Everyone"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
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
