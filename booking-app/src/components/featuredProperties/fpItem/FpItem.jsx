import "./fpItem.css"

const FpItem = (props) => {
  return (
    <div className="fpItem">
      <img
        src={props.fpImg}
        alt=""
        className="fpImg"
      />
      <span className="fpName">{props.fpName}</span>
      <span className="fpCity">{props.fpCity}</span>
      <span className="fpPrice">{props.fpPrice}</span>
      <div className="fpRating">
        <button>{props.fpRatingNum}</button>
        <span>{props.fpRating}</span>
      </div>
    </div>
  );
};

export default FpItem;
