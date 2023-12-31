import PropTypes from "prop-types";

const PreviousButton = ({ onClick }) => {
  return (
    <button className="p-1" onClick={onClick}>
      <svg
        width="1.5em"
        fill="gray"
        height="1.5em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-left-circle"
        color="gray"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
        />
        <path
          fillRule="evenodd"
          d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
        />
      </svg>
    </button>
  );
};

const NextButton = ({ onClick }) => {
  return (
    <button className="p-1" onClick={onClick}>
      <svg
        width="1.5em"
        fill="gray"
        height="1.5em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-right-circle"
        color="gray"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
        />
        <path
          fillRule="evenodd"
          d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};

const DisabledRight = () => {
  return (
    <button className="p-1" disabled>
      <svg
        width="1.5em"
        fill="pink"
        height="1.5em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-right-circle"
        color="gray"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
        />
        <path
          fillRule="evenodd"
          d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};
const DisabledLeft = () => {
  return (
    <button className="p-1" disabled>
      <svg
        width="1.5em"
        fill="pink"
        height="1.5em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-left-circle"
        color="gray"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
        />
        <path
          fillRule="evenodd"
          d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};

export default function CalendarButtons({
  onPreviousClick,
  onNextClick,
  showNextButton,
  showPreviousButton
}) {
  return (
    <div className="buttons">
      {showPreviousButton ? <PreviousButton onClick={onPreviousClick} /> : <DisabledLeft />}
      {showNextButton ? <NextButton onClick={onNextClick} /> : <DisabledRight />}
    </div>
  );
}
PreviousButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CalendarButtons.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  showNextButton: PropTypes.bool.isRequired,
};
