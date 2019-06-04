export const asyncGetRandomText = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');
};
