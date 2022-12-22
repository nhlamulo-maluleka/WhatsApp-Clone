const trimNumber = (num) => {
  let removedSpaces = num.replace(/(\s)/g, "");
  return removedSpaces.substring(
    removedSpaces.length - 9,
    removedSpaces.length
  );
};

export { trimNumber };
