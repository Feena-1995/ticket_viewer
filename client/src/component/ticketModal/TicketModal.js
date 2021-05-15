import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const TicketModal = (props) => {
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);
  return createPortal(props.children, element);
};

export default TicketModal;
