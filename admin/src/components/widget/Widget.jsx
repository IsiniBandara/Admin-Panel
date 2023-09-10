import "./widget.scss";
const Widget = ({ type, value }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: " Total Nest",
        isMoney: false,
        link: "See all nest",
      };
      break;
    case "order":
      data = {
        title: "Hatchling",
        isMoney: false,
        link: "View all hatchling",
      };
      break;
    case "earning":
      data = {
        title: "Nest Success",
        isMoney: false,
        link: "View Nest Success",
      };
      break;
    case "balance":
      data = {
        title: "Predation",
        isMoney: false,
        link: "See details",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
