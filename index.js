const Notification = (props) => {
  const { image, text, className, size } = props;
  return (
    <div className={className}>
      <img className={size} src={image} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-cont">
    <h1 className="header">Notifications</h1>
    <div>
      <Notification
        text="Information Message"
        className="info"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        size="image-size"
      />

      <Notification
        text="Success Message"
        className="success"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        size="image-size"
      />

      <Notification
        text="Warning Message"
        className="warning"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        size="image-size"
      />

      <Notification
        text="Error Message"
        className="danger"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        size="image-size"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
