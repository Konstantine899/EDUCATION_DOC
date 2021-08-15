function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });
        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }
        xhr.send(JSON.stringify(body));
      } catch (error) {
        console.log(error);
      }
    },
  };
}

const myHttp = http();

// myHttp.get(
//   `https://jsonplaceholder.typicode.com/posts/1`,
//   (err, res) => {
//     console.log("error", err);
//     return;
//   },
//   myHttp.get(
//     `https://jsonplaceholder.typicode.com/comments?postId=1`,
//     (err, res) => {
//       console.log("error", err);
//       return;
//     },
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/users/1`,
//       (err, res) => {
//         console.log("error", err);
//         return;
//       },
//       console.log("наконец")
//     )
//   )
// );

function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostCommemts(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comments: res });
      }
    );
  });
}
function getUserCreatedPost(data) {
  const {
    post: { userId },
  } = data;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: res });
      }
    );
  });
}

// getPost(50)
//   .then((post) => getPostCommemts(post))
//   .then((data) => getUserCreatedPost(data))
//   .then((FullData) => console.log(FullData))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally"));

function getPost2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostCommemts2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}
function getUserCreatedPost2(userId) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

Promise.all([getPost2(1), getPostCommemts2(1), getUserCreatedPost2(1)])
  .then(([post, comments, user]) => console.log(post, comments, user))
  .catch((err) => console.log(err));
