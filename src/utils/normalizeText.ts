export const normalizeText = (text: string) => {
  const normalizeText = text.split(" ");
  const result = normalizeText
    .map((text) => text[0].toUpperCase() + text.slice(1))
    .join(" ");
  return result;
};
