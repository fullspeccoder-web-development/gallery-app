const Image = ({ ...props }) => {
  const { id, urls, alt_description } = props;
  return <img id={id} src={urls.regular} alt={alt_description} />;
};

export default Image;
