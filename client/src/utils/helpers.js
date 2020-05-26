export const convertISODate = (postDate) => {
  const date = postDate.substring(0, 10);
  const month = date.split("-")[1];
  const day = date.split("-")[2];
  const year = date.split("-")[0];
  return `${month}-${day}-${year}`;
};
