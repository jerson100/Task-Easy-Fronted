const modalContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      //   when: "beforeChildren",
      staggerChildren: 0,
    },
  },
  exit: {
    opacity: 0,
  },
};

const modalContentVariants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
  },
  exit: {
    y: "-100%",
  },
};

export { modalContainerVariants, modalContentVariants };
