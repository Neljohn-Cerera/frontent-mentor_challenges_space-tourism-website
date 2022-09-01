interface Props {
  text: string;
  classname?: string;
}

const Heading = () => {
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

Heading.One = One;
Heading.Two = Two;
Heading.Three = Three;
Heading.Four = Four;
Heading.Five = Five;

export default Heading;
