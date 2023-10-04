type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-semibold capitalize">{children}</h2>;
};

export default SectionHeading;
