export const generateId = () => {
  return Math.random().toString();
};

export const isNanValue = (value) => {
  return isNaN(value);
};

export const capitalize = (str) => {
  return str.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
