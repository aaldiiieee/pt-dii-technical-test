const SectionTemplate = ({
  headline,
  children,
  description
}: {
  headline: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-wrap w-full mb-8 mt-20">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <h3 className="sm:text-2xl text-lg font-medium title-font mb-2 text-gray-900">
            {headline}
          </h3>
          <div className="h-1 w-20 bg-blue-400 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-sm text-gray-500">
          {description}
        </p>
      </div>
      <div className="flex gap-4 shadow-buttonShadow flex-wrap p-4 border-2 border-black rounded">
        {children}
      </div>
    </>
  );
};

export default SectionTemplate;
