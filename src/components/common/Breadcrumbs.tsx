import Link from 'next/link';

interface Props {
  pageName: string;
}

const Breadcrumbs = ({ pageName }: Props) => {
  return (
    <section className="bg-hero bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center gap-5 h-[266px] lg:h-[366px]">
        <h4 className="font-display text-4xl pt-20 md:text-6xl">{pageName}</h4>
        <p className="text-md capitalize text-brand-200">
          <Link href="/">Home</Link> <span className="px-2">/</span>
          <span className="text-white">{pageName}</span>
        </p>
      </div>
    </section>
  );
};

export default Breadcrumbs;
