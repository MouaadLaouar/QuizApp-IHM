
export const saveToLocalStorage = (key: string, obj: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
    console.log(`Saved object with key: ${key}`);
  } catch (error) {
    console.error("Error saving object to local storage:", error);
  }
};
