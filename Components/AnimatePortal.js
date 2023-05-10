import { AnimatePresence } from "framer-motion";

import Portal from "./Portal";

const AnimatePortal = ({ children, isVisible, mode = "sync" }) => {
  return (
    <Portal>
      <AnimatePresence mode={mode}>{isVisible && children}</AnimatePresence>
    </Portal>
  );
};

export default AnimatePortal;
