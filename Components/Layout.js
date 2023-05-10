import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  return <div>{children}</div>;
};

export default Layout;
