// console.log("lesson 3");

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let prom = new Promise((res, rej) => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// });

// let prom2 = new Promise((resolve, reject) => {
//   // имитация запроса на сервер
//   setTimeout(
//     (response) => {
//       response.httpStatus >= 200 && response.httpStatus < 400
//         ? resolve(response.data) // принимает не более одного аргумента
//         : reject(response.console.error);
//     },
//     3000,
//     {
//       httpStatus: 200,
//       data: { userID: "asde2df3", userName: "Max", age: 32 },
//       error: { error: "ERROR" },
//     }
//   );
// });

// prom2.then(
//   (res) => {
//     console.log(res);
//   },
//   () => {}
// );

// console.log("1", prom2);

// let prom3 = new Promise((resolve, reject) => {
//   // имитация запроса на сервер
//   setTimeout(
//     (response) => {
//       response.httpStatus >= 200 && response.httpStatus < 400
//         ? resolve(response.data) // принимает не более одного аргумента
//         : reject(response.error);
//     },
//     3000,
//     {
//       httpStatus: 404,
//       data: { userID: "asde2df3", userName: "Max", age: 32 },
//       error: "NOT FOUND",
//     }
//   );
// });

// prom3
//   .then(
//     (res) => {
//       return new Promise((resolve, reject) => {
//         // имитация запроса на сервер
//         setTimeout(
//           (response) => {
//             response.httpStatus >= 200 && response.httpStatus < 400
//               ? resolve(response.data) // принимает не более одного аргумента
//               : reject(response.error);
//           },
//           3000,
//           {
//             httpStatus: 200,
//             data: { userID: "asde2df3", cash: 5000 },
//             error: "NOT FOUND",
//           }
//         );
//       });
//     },
//     (err) => {
//       console.log("err", err);
//     }
//   )
//   .then(
//     (res) => {
//       console.log("res3", res); // вернет undefined тк мы словили ошибку, иначе бы легло все
//     },
//     (err2) => err2
//   )
//   //   .then(null, (err3) => err3)
//   .catch((err) => err); //вместо последней заглушки (сининим)

// console.log("prom3", prom3);

// just a plug
export default () => {};
