export const validateChapterId = (id: string | number): number => {
  const chapterId = typeof id === "string" ? parseInt(id) : id;

  if (isNaN(chapterId) || chapterId < 1 || chapterId > 114) {
    console.error("Invalid chapter ID. Must be between 1 and 114");
  }

  return chapterId;
};
