import { motion as m } from "framer-motion";
// import { useRouter } from "next/router";

export default function Contact() {
  // const router = useRouter();
  return (
    <m.div
      // key={router.pathname}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="flex justify-center items-center text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <p className="w-full h-10">Contact</p>
    </m.div>
  );
}
