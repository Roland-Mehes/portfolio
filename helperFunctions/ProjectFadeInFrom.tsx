export const fadeInFrom = (direction: 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -180 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
});
