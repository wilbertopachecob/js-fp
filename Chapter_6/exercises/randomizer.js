const randomizer = (arr) => {
  let lastCalledIndex;
  const getRamdomIndex = Math.floor(Math.random() * arr.length);
  return () => {
    let currentIndex = getRamdomIndex();
    while (currentIndex === lastCalledIndex) {
      currentIndex = getRamdomIndex();
    }
    lastCalledIndex = currentIndex;
    arr[currentIndex]();
  };
};
