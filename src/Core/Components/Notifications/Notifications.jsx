import { useEffect, useState } from "react";

import useNotifications from "@/Core/Providers/Notifications.Provider";

export default function Notification(props) {
  const { notifications } = useNotifications();

  return (
    notifications &&
    notifications.length > 0 && (
      <div className="container text-center my-5">
        {notifications.map(notification => {
          return <NotificationAlert key={notification.id} notification={notification} />;
        })}
      </div>
    )
  );
}

const NotificationAlert = ({ notification: { title, message, type, id } }) => {
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const { setNotifications } = useNotifications();
  const [exit, setExit] = useState(false);

  const handleCloseClick = () => {
    clearInterval(intervalID);
    setExit(true);

    setTimeout(() => {
      setNotifications({ action: "REMOVE", payload: { id: id } });
    }, 400);
  };

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);
  useEffect(() => {
    if (width === 100) {
      handleCloseClick(id);
    }
  }, [width]);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={"alert alert-dismissible fade show alert-" + type + " " + (exit ? " exit" : "")}
      role="alert"
    >
      {title && <strong>{title}</strong>} {message}
      <button onClick={handleCloseClick} type="button" className="btn-close"></button>
      <div className="progress mb-0 mt-1" style={{ height: "8px" }}>
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: width + "%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};
