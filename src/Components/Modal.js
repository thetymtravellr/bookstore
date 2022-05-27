import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import React from "react";

const Modal = ({ close, children }) => {
    console.log(children);
  return (
    <div className="h-screen w-full grid place-content-center fixed inset-0 bg-black/20 backdrop-blur">
      <motion.div
        animate={{ scale: 2 }}
        transition={{ 
            duration: 0.15
        }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <div className="h-40 w-40 rounded-xl shadow-xl relative bg-white">
            <button onClick={() => close(false)} className="absolute right-2 top-2">
              <XIcon className="text-primary w-3 "/>
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
