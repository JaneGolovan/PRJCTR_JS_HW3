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
