export const convertISODate = (postDate) => {
  const date = postDate.substring(0, 10);
  const month = date.split("-")[1];
  const day = date.split("-")[2];
  const year = date.split("-")[0];
  return `${month}-${day}-${year}`;
};

export const convertTime = (time) => {
  time = time.slice(0, -3);
  const hour = +time.split(":")[0];
  const minutes = time.split(":")[1];
  if (hour > 12) {
    return `${hour - 12}:${minutes} PM`;
  } else if (hour === 0) {
    return `12:${minutes} AM`;
  } else if (hour === 12) {
    return `${time} PM`;
  } else {
    return `${time.slice(1, 5)} AM`;
  }
};
