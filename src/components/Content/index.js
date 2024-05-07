import { FaBeer } from 'react-icons/fa';

function Content(props) {
  console.log(props);

  return (
    <>
      <div className={props.active ? "active" : ""}>{props.text} <FaBeer /></div>
    </>
  );
}

export default Content;
