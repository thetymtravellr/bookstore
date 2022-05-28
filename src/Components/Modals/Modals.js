import { XIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modals = ({ showModal, setShowModal, children }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    visible: { scale: 1, transition: { delay: 0.15 } },
    hidden: { scale: 0 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="fixed inset-0 w-screen h-screen z-50 bg-black/30 backdrop-blur-[2px] grid place-content-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            variants={modal}
            className="h-80 w-80 rounded-xl shadow-xl relative bg-white p-4 "
          >
            <button onClick={() => setShowModal(false)} className="absolute right-4">
              <XIcon className="text-primary w-8" />
            </button>
            <div className="h-full w-full grid place-content-center">
              {children}
         </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    // <motion.div
    // animate={isOpen ? "open" : "closed"}
    //   variants={variants}
    //   className="h-screen w-full grid place-content-center fixed inset-0 bg-black/50 backdrop-blur-[2px]"
    // >
    //   <motion.div
    //     animate={isOpen ? "open" : "closed"}
    //     variants={variants2}
    //     className="h-80 w-80 rounded-xl shadow-xl relative bg-white p-4"
    //   >
    //     <button onClick={() => close(false)} className="absolute right-2 top-2">
    //       <XIcon className="text-primary w-8 " />
    //     </button>
    //     <div className="h-full w-full grid place-content-center">
    //       <div className="text-red-500">
    //         <p>
    //           <ExclamationIcon className="w-16 mx-auto" />
    //         </p>
    //         <p className="text-md text-center">
    //           Are You Sure You Want To Delete This Product?
    //         </p>
    //         <div className="w-full flex justify-center space-x-2 mt-6">
    //           <button onClick={() => close(false)} className="btn px-8 bg-purple-500 hover:bg-purple-600 border-0 text-white">No</button>
    //           <button onClick={() => confirm(true)} className="btn px-8 bg-red-500 hover:bg-red-600 border-0 text-white">Yes</button>
    //         </div>
    //       </div>
    //     </div>
    //   </motion.div>
    // </motion.div>
  );
};

export default Modals;
