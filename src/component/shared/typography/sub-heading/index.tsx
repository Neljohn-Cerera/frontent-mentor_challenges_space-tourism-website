interface Props {
  text: string;
  classname?: string;
}

const SubHeading = () => {
  return <div>Main</div>;
};

const One = ({ text, classname }: Props) => {
  return <h1 className={classname}>{text}</h1>;
};
const Two = ({ text, classname }: Props) => {
  return <h2 className={classname}>{text}</h2>;
};
const Three = ({ text, classname }: Props) => {
  return <h3 className={classname}>{text}</h3>;
};
const Four = ({ text, classname }: Props) => {
  return <h4 className={classname}>{text}</h4>;
};
const Five = ({ text, classname }: Props) => {
  return <h5 className={classname}>{text}</h5>;
};

SubHeading.One = One;
SubHeading.Two = Two;
SubHeading.Three = Three;
SubHeading.Four = Four;
SubHeading.Five = Five;

export default SubHeading;
