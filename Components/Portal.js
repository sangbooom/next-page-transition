import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const container = typeof window !== "undefined" && document.body;

  return container ? createPortal(children, container) : null;
};

export default Portal;
