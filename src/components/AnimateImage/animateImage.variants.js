const imageContainerVariants = {
  hidden: {},
  visible: {},
};

const leftImageVariants = {
  hidden: {
    // y: 0,
  },
  visible: {
    y: [0, -50, 0],
    transition: {
      repeat: 1,
      repeatType: "reverse",
    },
  },
};

const rightImageVariants = {
  hidden: {
    // y: "100%",
  },
  visible: {
    y: [0, 50, 0],
    transition: {
      repeat: 1,
      repeatType: "reverse",
    },
  },
};

export { imageContainerVariants, leftImageVariants, rightImageVariants };
