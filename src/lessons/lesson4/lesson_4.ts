console.log("lesson 4");

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const pendingPromise = new Promise((res, rej) => {});
// console.log(pendingPromise);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// Promise.resolve(console.log("Promise Data"));

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// Promise.reject(console.log("Promise Error"));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

//==============================================

// const promiseWithDelay = new Promise((res, rej) => {
//   // имитация запроса на сервер
//   setTimeout(
//     (response) => {
//       return res ? res(response.data) : "Error";
//     },
//     3000,
//     {
//       data: "Promise Delay Data",
//     }
//   );
// }).then((response) => console.log(response));

// console.log(promiseWithDelay);

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// =====================================
//
// const myNamePromise = new Promise((resolve, reject) => {
//   setTimeout(
//     (response) => {
//       return resolve
//         ? resolve(console.log(`My name is ${response.name}`))
//         : console.log("Error");
//     },
//     5000,
//     {
//       name: "Max",
//     }
//   );
// });

// const onSuccess = (param: string): string => {
//   return `${param} Max`;
// };

// const print = (param: any) => {
//   return param;
// };

// myNamePromise
//   .then((response) => console.log(onSuccess("Hello")))
//   .then((response) => console.log(print("Hello")));

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1 = new Promise((res, rej) => {
  setTimeout(
    (response) => {
      res ? res(response.name) : rej();
    },
    2000,
    { name: "Anna" }
  );
});

const promise2 = new Promise((res, rej) => {
  setTimeout(
    (response) => {
      res ? res(response.age) : rej();
    },
    3000,
    { age: 16 }
  );
});

const promise3 = new Promise((res, rej) => {
  setTimeout(
    (response) => {
      res ? res(response.city) : rej();
    },
    4000,
    { city: "Minsk" }
  );
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values.join(" "));
});

// **********************************************************************
// Task 05
//+ Создайте литерал объекта handlePromise со следующими свойствами:
//+ promise, resolve, reject, onSuccess, onError
//+ Проинициализируйте первые три свойства null,
//+ а последние два функциями, которые принимают один параметр и выводят
//+ в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
//+ вторая - `Promise is rejected with error: ${paramName}`
//+ Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
//+ Первый обработчик, создает промис, заполняет первые три свойства,
//+ описаного выше объекта: свойство promise получает новый созданный промис,
//+ свойства resolve и reject получают ссылки на соответствующие функции
//+ resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// type HandlePromise = {
//   promise: null;
//   resolve: null;
//   reject: null;
//   onSuccsess: (paramName: string) => void;
//   onError: (paramName: string) => void;
// };

// const handlePromise: HandlePromise = {
//   promise: null,
//   resolve: null,
//   reject: null,
//   onSuccsess: (paramName: string) =>
//     console.log(`Promise is resolved with data: ${paramName}`),
//   onError: (paramName: string) =>
//     console.log(`Promise is rejected with error: ${paramName}`),
// };

// just a plug
export default () => {};
