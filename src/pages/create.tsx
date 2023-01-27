import type { NextPage } from 'next';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CreateCollection from '@/components/collections/CreateCollection';
import Footer from '@/components/layout/Footer';

const Create: NextPage = () => {
  return (
    <main>
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
