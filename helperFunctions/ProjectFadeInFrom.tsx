export const fadeInFrom = (direction: 'RightContainer' | 'LeftContainer') => ({
  hidden: {
    opacity: 0,
    x: direction === 'RightContainer' ? -180 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
});
