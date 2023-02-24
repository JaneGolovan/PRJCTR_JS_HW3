// 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math). Використайте оператор розширення:

console.log(addThemAll(2, 4)); // 6*
console.log(addThemAll(1, 2, 3, 4)); // 10*
console.log(addThemAll(5, 5, 10)); // 20*

function addThemAll(...virabs) {
  let sum = 0;
  for (let vir of virabs) {
    sum += vir;
  }
  return sum;
}

// 2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
console.log(multiply(5)(5)); // 25*
console.log(multiply(2)(-2)); // -4*
console.log(multiply(4)(3)); // 12*

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:

// 1. властивість за якою треба посортувати
// 2. опцію напрямку сортування, зростання чи спадання

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

console.log(movies.sort(byProperty("releaseYear", ">"))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
// console.log(movies.sort(byProperty("runningTimeInMinutes", "<"))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty("movieName", ">"))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  return function (c, d) {
    if (direction === `>`) {
      return c[property] > d[property] ? 1 : -1;
    } else if (direction === `<`) {
      return c[property] < d[property] ? 1 : -1;
    }
  };
}

// 4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:

// Використовуючи setInterval

detonatorTimer1(3);
detonatorTimer2(3);
//3
//2
//1
//BOOM!
function detonatorTimer1(delay) {
  let count = delay;
  const counter = setInterval(function () {
    console.log(count + `!`);
    count--;
    if (count <= 0) {
      clearInterval(counter);
      console.log("BOOM!");
    }
  }, 1000);
}

//Використовуючи вкладений setTimeout
function detonatorTimer2(delay) {
  if (delay == 0) {
    return console.log("Boom");
  }
  console.log(delay);
  setTimeout(detonatorTimer2, 1000, --delay);
}

// 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.
// 6. Зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
let user = {
  name: "Jane",
  surname: "Holovan",
  adress: {
    city: "Kharkiv",
    street: "Molochna",
    bornCity: "Energodar",
  },
  gender: "female",
  age: 32,
  hobby: "cycling",
  "favorite movies": {
    movie1: "Shindler's list",
    movie2: "The wizarrd of Oz",
    movie3: "Star War",
  },
  hobbies() {
    console.log(
      `I'm a ${this.hobby} woman who got from ${this.adress.city} to ${this.adress.bornCity} by bike`
    );
  },
  movies() {
    console.log(
      `At my ${this.age} I have three favorite movies ${this["favorite movies"].movie1}, ${this["favorite movies"].movie2} and ${this["favorite movies"].movie3}`
    );
  },
};

let securedSelfHobbies = user.hobbies.bind(user);
let securedSelfMovies = user.movies.bind(user);

setTimeout(securedSelfHobbies, 4000); // виведе коректний результат*
setTimeout(securedSelfMovies, 5000); // виведе коректний результат*

//7. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

// тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль
function someFunction(numOne, numTwo) {
  if (numTwo === 1) {
    console.log(numOne);
  } else {
    console.log(numOne * numTwo);
  }
}

function slower(func, seconds) {
  return function (...args) {
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => {
      const result = func(...args);
      console.log(result);
    }, seconds * 1000);
  };
}
// тут ваш код для декоратора*
let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction(2, 3); // викликаєте декоратор*

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'
