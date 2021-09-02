const variantsTask = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      //   when: "beforeChildren",
      type: "spring",
      stiffness: 1000,
      //   mass: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};

const variantsTitle = {
  hidden: {
    x: "10px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    // transition: {
    //   delay: 0.5,
    // },
  },
};

const variantsDescription = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const variantsFooter = {
  hidden: {
    y: "10px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export { variantsTask, variantsTitle, variantsFooter, variantsDescription };
