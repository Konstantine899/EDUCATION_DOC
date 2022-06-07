//src/api.index.js
export const client = async (endPoint, { body, ...customConfig }) => {
  //Объект заголовков
  const headers = {
    "Content-Type": "application/json",
  };

  //Конфигурация для fetch
  const config = {
    method: body ? "POST" : "GET",
    //Если мы передали method в customConfig то перезаписываем method
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  //Подготавливаю body к отправке на сервер
  if (body) {
    //преобразую данные в строку
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endPoint, config);
    //Если запрос не был успешным
    if (!response.ok) {
      throw new Error(`failed to fetch`);
    }

    //Если загрузка прошла успешно
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

client.get = function (endPoint, customConfig = {}) {
  return client(endPoint, customConfig);
};

client.post = function (endPoint, body, customConfig = {}) {
  return client(endPoint, { ...customConfig, body });
};

client.delete = function (endPoint, customConfig = {}) {
  return client(endPoint, { ...customConfig, method: "DELETE" });
};

client.patch = function (endPoint, body, customConfig = {}) {
  return client(endPoint, { ...customConfig, body, method: "PATCH" });
};
