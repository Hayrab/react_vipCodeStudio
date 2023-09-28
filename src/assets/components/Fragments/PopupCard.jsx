import Button from "../Elements/Button";

const PopupCard = (props) => {
  const { children, trigger, setTrigger } = props;

  return (
    trigger && (
      <div id="popup" className="flex justify-center items-center">
        <div className="" id="popup-inner">
          <button onClick={() => setTrigger(!trigger)} className="close-button">
            close
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default PopupCard;
