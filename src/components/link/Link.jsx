import PropTypes from "prop-types"; // ES6

const Link = ({ route }) => {
  return (
    <li className="mr-16">
      <a href={route.id}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
