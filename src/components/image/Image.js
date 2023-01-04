import "./Image.scss";

const Image = ({ ...props }) => {
  const { id, urls, alt_description } = props;
  return (
    <img className="Image" id={id} src={urls.regular} alt={alt_description} />
  );
};

export default Image;
