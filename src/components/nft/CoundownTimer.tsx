import Countdown, { CountdownRendererFn } from 'react-countdown';

const Completion = () => {
  return (
    <div className="text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium">
      <span className=" text-brand-700 shrink-0 whitespace-nowrap">This auction has ended</span>
    </div>
  );
};

const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completion />;
  } else {
    return (
      <div className="mt-3 flex space-x-5">
        <span className="text-brand-700 dark:text-white">
          <span className="text-lg font-medium lg:text-[1.5rem]">{days}</span>
          <span className="block text-xs font-medium">Days</span>
        </span>
        <span className="text-brand-700 dark:text-white">
          <span className="text-lg font-medium lg:text-[1.5rem]">{hours}</span>
          <span className="block text-xs font-medium">Hrs</span>
        </span>
        <span className="text-brand-700 dark:text-white">
          <span className="text-lg font-medium lg:text-[1.5rem]">{minutes}</span>
          <span className="block text-xs font-medium">Min</span>
        </span>
        <span className="countdown-seconds text-brand-700 dark:text-white">
          <span className="text-lg font-medium lg:text-[1.5rem]">{seconds}</span>
          <span className="block text-xs font-medium">Sec</span>
        </span>
      </div>
    );
  }
};

const CountdownTimer = () => {
  return <Countdown date={Date.now() + 30 * 1000 * 3600} renderer={renderer} />;
};

export default CountdownTimer;
