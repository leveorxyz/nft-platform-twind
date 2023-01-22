import Image from 'next/image';
import { motion } from 'framer-motion';
import Step from './Step';
import startSteps from '@/data/startSteps.json';

const GetStarted = () => {
  return (
    <section className="dark:bg-brand-800 relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image src="/images/gradient_light.jpg" alt="gradient" className="h-full" fill />
      </div>

      <div className="container">
        <p className="font-display text-brand-700 mb-16 text-center text-3xl dark:text-white">
          Get Started In 3 Steps
        </p>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {startSteps.map((step) => (
            <Step key={step.id} {...step} />
          ))}
        </motion.div>

        <p className="text-brand-700 text-lg text-center mx-auto mt-20 max-w-2xl dark:text-white">
          Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
          tips and tricks for navigating NFT.Cart.
        </p>

        <div className="mx-auto mt-7 max-w-md">
          <form className="relative">
            <input
              type="email"
              placeholder="Email address"
              className=" focus:ring-accent border-brand-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white dark:bg-brand-700 dark:border-brand-600"
            />
            <button className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
