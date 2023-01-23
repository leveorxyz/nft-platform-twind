interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return (
    <div>
      <h2 className="font-display text-brand-700 mb-8 text-center text-3xl dark:text-white">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
