//Функция загрузки данных из localStorage в store
export const loadState = () => {
  try {
    const savedState = localStorage.getItem("state");
    //Если savedState не существует
    if (savedState === null) {
      return undefined;
    }
    //Преобразую стороку к объекту
    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

//Функция сохранения данных в localStorage
export const saveState = (state) => {
  try {
    const stateToBeSaved = JSON.stringify(state);
    localStorage.setItem("state", stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};
