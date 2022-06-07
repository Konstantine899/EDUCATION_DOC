//src/myHooks/useRequest.js
import { useEffect, useState, useMemo } from "react";

const useRequest = (request) => {
  //Инициализация состояния
  const initialState = useMemo(
    () => ({
      data: null,
      loading: true,
      error: null,
    }),
    []
  );
  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    //Начало загрузки, первоначальное состояние
    setDataState(initialState);

    //Получаю данные
    let cancelled = false;
    request()
      .then(
        (data) =>
          !cancelled && setDataState({ data, loading: false, error: null })
      )
      .catch(
        (error) =>
          !cancelled && setDataState({ data: null, loading: false, error })
      );
    // функция очистки
    // Если request изменился а данные еще не загружены, то срабатывает функция очистки
    //надеюсь не ошибаюсь
    return () => (cancelled = true);
  }, [request, initialState]);
  return dataState;
};

export default useRequest;
