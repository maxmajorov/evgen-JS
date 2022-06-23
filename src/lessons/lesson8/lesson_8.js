// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4


Number.prototype.plus = function (value) {
	return this.valueOf() + value
}

Number.prototype.minus = function (value) {
	return this.valueOf() - value
}

// console.log(Number.prototype)
console.log((2).plus(3).minus(1))

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

// function fun ( ...args) {

// 	return Array.prototype.slice.call(args, 1).join(args[0])
	
// }

// console.log(fun('*', '1', 'b', '1c'))


// function fun2 (devider, ...args) {

// 	return args.join(devider)
	
// }

// console.log(fun2('/', '1', 'b', '1c'))


// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

// const tree = {
// 	valueNode: 3,
// 	next: [
// 		{
// 		valueNode: 1,
// 		next: null
// 		},
// 		{
// 			valueNode: 3,
// 			next: null
// 		},
// 		{
// 			valueNode: 2,
// 			next: null
// 		},
// 		{
// 			valueNode: 2,
// 			next: [
// 				{
// 					valueNode: 1,
// 					next: null
// 				},
// 				{
// 					valueNode: 5,
// 					next: null
// 				}
// 			]
// 		}]
// };


// const getTreeSum = (tree) => {

// 	let sum = tree.valueNode

// 	if (tree.next) {
// 		tree.next.forEach(subtree => {
// 			sum += getTreeSum(subtree)
// 		});
// 	}

// 	return sum
// }

// console.log(getTreeSum(tree))


// Task 5
// исправить код, что бы работал правильно

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 1000); 
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

// function Book(name, author) {
// 	this.name = name;
// 	this.author = author;
	
// 	return this;
// }

// 	function Foo(bookConstructor, name, author) {
// 		return new bookConstructor(name, author)
// 	}

// 	const book = Foo(Book, 'js', 'harvey')

// console.log(book.name)

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

	// const func = (a, b) => {
	// 	if (!b) {
	// 		return c => a + c			
	// 	} else return a + b
	// }

	// console.log(func(2, 3))
	// console.log(func(2)(3))



// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// const f = (value = 0) => {
// 	let outer = value

// 	return (value) => {
// 		if (value) {
// 			return outer
// 		} else {
// 			return f(outer + value)
// 		}
// 	}
// }



// Task 9
// Реализовать функции seven, plus, one,  five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3


// const seven = (value) => {
// 	return value ? value + 7 : 7
// }

// const one = (value) => {
// 	return value ? value + 1 : 1
// }

// const plus = (value) => {
// 	return value
// }

// console.log(
// 	seven(plus(one()))
// )

// Task 10
// Реализовать функцию сортировки массива пузырьком




// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

const uniq = (arr) => {
	const res = {}

	arr.forEach(n => res[n] = 1)

	return Object.keys(res).map(k => +k)
}


// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

const getTreeValues = (tree) => {

	let values = [tree2.value]

	if (tree2.children) {
		values = values.concat(getTreeValues(tree2.children))
	}

	return values

}

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

function Bomb(duration, sound) {
	this.duration = duration
	this.sound = sound

	setTimeout(() => {
		this.boom()	
	}, 1000 * duration)
}

	Bomb.prototype.boom = function() {
		console.log(this.sound)
	}

	new Bomb(2, 'booooom')



// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'




// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.


const isSorted = (arr) => {
	let min = arr[0]

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			return false
		} else {
			min = arr[i]
		}
	}

	return true
}


// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

Promise
	.resolve()
	.then(() => console.log(1))
	.then(() => console.log(2))
	.then(() => console.log(3));

Promise
	.resolve()
	.then(() => console.log(4))
	.then(() => console.log(5))
	.then(() => console.log(6));


	// 1 - 4 - 2 - 5 - 3 - 6