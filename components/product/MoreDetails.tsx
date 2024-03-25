type MoreDetailsProps = {
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
};

const MoreDetails = ({ features, includes }: MoreDetailsProps) => {
  return (
    <div className="flex max-lg:flex-col max-sm:gap-[5.5rem] max-lg:gap-[7.5rem] lg:justify-between">
      <div className="lg:w-[57%]">
        <h2 className="detail-header mb-6 sm:mb-8">Features</h2>
        <p>{`${features}`}</p>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col sm:justify-stretch lg:w-[30%]">
        <h2 className="detail-header mb-6 sm:mb-8 sm:flex-1 lg:flex-none max-w-[21.1875rem]">
          In the Box
        </h2>
        <ul className="flex flex-col gap-2 sm:flex-1 lg:flex-none">
          {includes.map(({ item, quantity }, index) => {
            return (
              <li key={index} className="grid grid-cols-[2rem_1fr]">
                <span className="text-accent-900 font-bold">{`${quantity}x`}</span>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MoreDetails;
