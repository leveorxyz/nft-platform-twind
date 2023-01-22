interface Props {
  title: string;
  description: string;
  icon: string;
}

const Step = ({ title, description, icon }: Props) => {
  return (
    <div className="inset-y-0 bg-brand-100 dark:bg-brand-600 gap-2.5 px-5 py-10 rounded-[20px] shadow-md hover:drop-shadow">
      <div className="gap-5 flex flex-col items-center">
        <img src={icon} alt="icon" />
        <p className="text-xl text-center font-bold md:text-xl dark:text-brand-100">{title}</p>

        <p className="text-sm text-center font-medium text-brand-700 dark:text-brand-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Step;
