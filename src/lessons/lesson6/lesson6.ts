console.log("Lesson 6");

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Test {
//   // В TS типизировать входные данные нужно дважды
//   // Обязательно до конструктора => типо типизация возвращаемых значений
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   someFunc() {
//     console.log("Hello");
//   }
// }

// let obj = new Test("Max", 32);
// let obj2 = new Test("Olga", 40);

// console.log(obj);
// console.log(obj2);

// // super в классе наследнике является ссылка на constructor родительского класса
// // super никогда не теряет связь с родительским constructor и его нельзя переопределить

// class TestExtends extends Test {
//   city: string;
//   constructor(name: string, age: number, city: string) {
//     super(name, age);
//     this.city = city;
//   }
// }

// let obj3 = new TestExtends("Pavel", 6, "Minsk");
// console.log(obj3);

// Также можно создавать класс и без конструктора
// Такие классы называются миксины ==> нужны для расширения
// Классы помошники

// class Helper {
//   help1() {}
//   help2() {}
// }

// class SuperHelp extends Helper {
//   help3() {}
// }

// let obj4 = new SuperHelp();
// console.log(obj4);

// // public, private, protected, static, readonly
// // при указании упрощается типизация

class publicTest {
  constructor(public name: string, public age: number) {}
}

let publicObj = new publicTest("Max", 32);
console.log(publicObj);

class privateTest {
  constructor(private name: string, private age: number) {}
  get privateName() {
    return console.log(this.name);
  }
}

let privateObj = new privateTest("Max", 32);
console.log(privateObj.privateName);
// Обратиться напрямую не смогу ==> использование геттеров и сеттеров
// Если свойство объявлено как приватное то оно перестает наследоваться
// Для того чтобы была возможность наследовать есть метод protected
//
//
class A {
  say() {
    console.log("Hi, im class A!");
  }
}

class B extends A {
  say() {
    console.log("Hi, im from class B!!!"); // переопределение метода
    // или достучимся до прототипа родительского класса
    super.say();
  }
}

let objA = new A();
let objB = new B();

objA.say();
objB.say();

//

interface IPerson {
  name: string;
  age: number;
  city: string;
}

class Person implements IPerson {
  constructor(public name: string, public age: number, public city: string) {}
}

// Interface показывает на какой на выходе должен получится объект
// Interface можно расширять в отличие от Type
// также extends как и классы

const person = new Person("Max", 32, "Minsk");
console.log(person);

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы,
// успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию
// среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки,
// равные только 4 или 5.

interface IStudent {
  name: string;
  soname: string;
  group: number;
  score: Array<number>;
}

class Student {
  constructor(
    public name: string,
    public soname: string,
    public group: number,
    public score: Array<number>
  ) {}

  average() {
    return this.score.reduce((prev, next) => prev + next) / this.score.length;
  }

  sortUP() {}

  studentsWithForOrFive() {
    let temp: number = 0;

    this.score.forEach((el) => (el === 4 || el === 5 ? temp++ : temp));

    return temp === this.score.length
      ? `${this.name}, ${this.group}`
      : "Studens not found";
  }
}

const studentsScore = [
  new Student("Max", "Predko", 32, [10, 9, 8, 7, 5]),
  new Student("Olga", "Predko", 40, [10, 9, 9, 7, 5]),
  new Student("Pavel", "Predko", 6, [10, 9, 9, 9, 9]),
  new Student("Karina", "Predko", 20, [10, 10, 10, 10, 10]),
  new Student("Oleg", "Shabanov", 33, [10, 2, 8, 3, 5]),
  new Student("Yura", "Bashlakov", 41, [1, 2, 2, 3, 5]),
  new Student("Tadik", "Siniy", 38, [10, 4, 4, 9, 5]),
  new Student("Kazik", "Violet", 42, [0, 1, 5, 4, 5]),
  new Student("Volodya", "Alik", 22, [5, 5, 4, 5, 5]),
  new Student("Yanak", "Shambetskiy", 39, [4, 4, 4, 5, 5]),
];

// Сортируем вверх
const sortUP = studentsScore
  .map((el) => el)
  .sort((a, b) => a.average() - b.average());

const findStudentsFourOrFive = studentsScore.filter((st) =>
  st.studentsWithForOrFive() !== "Studens not found"
    ? st.studentsWithForOrFive()
    : null
);

console.log(studentsScore);
console.log(sortUP);
console.log(findStudentsFourOrFive);

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {};
