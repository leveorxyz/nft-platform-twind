import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CreateCollection from '@/components/collections/CreateCollection';
import Footer from '@/components/layout/Footer';

const Create: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="Create NFT | Explore | NFT ARTCART - Making Digital Art Accessible to Everyone"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
      <HeaderOne />
      <Breadcrumbs pageName="Create Collection" />
      <div className="container pt-10">
        <CreateCollection />
      </div>
      <Footer />
    </main>
  );
};

export default Create;
