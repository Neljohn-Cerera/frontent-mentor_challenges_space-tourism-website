interface Props {
  text: string;
  classname: string;
}
export const H1 = ({ text, classname }: Props) => {
  return <h1 className={classname}>{text}</h1>;
};
export const H2 = ({ text, classname }: Props) => {
  return <h2 className={classname}>{text}</h2>;
};
export const H3 = ({ text, classname }: Props) => {
  return <h3 className={classname}>{text}</h3>;
};
export const H4 = ({ text, classname }: Props) => {
  return <h4 className={classname}>{text}</h4>;
};
export const H5 = ({ text, classname }: Props) => {
  return <h5 className={classname}>{text}</h5>;
};
