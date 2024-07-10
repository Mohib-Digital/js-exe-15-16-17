// Chapter No.15    (Arrays)
// We introduced the concept of arrays,
// so, array is like a huge container that can store multiple values at a time

// create array
// var fruits = [];
// console.log(fruits)


// using emojis
// var fruits = ["🍌","🍍","🍎","🍋","🍓","🍅"];
// var animals = ["🐯","🐘","🐐","🐈","🐀"];
// alert(fruits);
// document.write(animals);
// console.log(fruits);
// console.log(animals);

// putting strings element in an array
// var fruits = ["banana","Strawbarry","PineApple","Lemon","peach"]
// console.log (fruits)


// accessing specific array elements using indices number
// var hotelRooms = ["Mohib Afridi", "Saqib", "Shahzib", "Kamran"]
// console.log(hotelRooms[0])


// var animals = ["🐯","🐘","🐐","🐈","🐀"];
// console.log(animals[4])


// mix different types
// hetrogeneous data vs homogeneous data
// homogeneous: same type of data
// hetrogeneous: different types of data
// var mixItems = ["😎", 3, "hello", 1.5, true]
// console.log(mixItems)
// ================================================================================>
// ================================================================================>


// Chpatere No.16   (Arrays: Adding and removing elements)

// var books = ["Computer Science", "Mathematics"];
// console.log(books);

// add element to the array
// single element
// books.push("Biology");
// console.log(books)

// books.push("English", "Urdu");
// console.log(books)


// add element at a specific position/index, it will replace already existing element
// var books = ["Computer Science", "Mathematics"];
// books[0] = "Pak-Study";
// books[2] = "Pak-Study";
// console.log(books)

// adding element to empty array

// var books = [];
// console.log(books)
// books.push("English", "Islamiyat", "Urdu", "Pak-Study")
// console.log(books)

// or we also add in element by index number
// books[0] = "English";
// books[1] = "Islamiyat";
// books[2] = "Urdu";
// books[3] = "Pak-Study";
// books[4] = "Maths";
// console.log(books)


// var books = ["Computer Science", "Mathematics"];
// console.log(books);
// books.pop();
// var poppedBook = books.pop();

// console.log(books);
// console.log(poppedBook);
// ================================================================================>
// ================================================================================>



// Chapter No.17    (Arrays: Removing, inserting, and extracting elements)

// var animals = ["'🐶", "😸", "🐘", "🐄"];
// console.log(animals);

// animals.push("🐅");
// animals[4] = "🐍";
// console.log(animals);
// var poppodAnimal = animals.pop();
// animals.push("🐪");
// poppodAnimal = animals.pop();

// console.log(animals);
// console.log(poppodAnimal);



// shift >> it removes 1 element form the start of the array

// var animals = ["🐶", "😸", "🐘", "🐄"];
// console.log(animals); 
// animals.shift();
// var shiftedElement = animals.shift();
// console.log(animals);
// console.log(shiftedElement); 


// unshift, to add an element to the start of the array

// var animals = ["🐶", "😸", "🐘", "🐄"];
// animals.unshift("🐀");
// console.log(animals);


// shift, unshift, push, pop
// var animals = ["🐶", "😸", "🐘", "🐄"];
// console.log(animals);
// animals.push("🐎");
// console.log(animals)
// var shiftedAnimal = animals.shift();
// console.log(shiftedAnimal)
// animals.pop();
// console.log(animals)
// animals.unshift("🐐")
// console.log(animals);
// console.log(shiftedAnimal)


// splice, add-replace-remove
// add 2 animals at index 2, and remove 1 animal
// var animals = ["🐶", "😸", "🐘", "🐄",];
// animals.splice(2, 1, "🐫", "🐈")
// console.log(animals)


// add 2 animals at index 2, and remove 2 animals
// var animals = ["🐶", "😸", "🐘", "🐄",];
// console.log(animals);
// animals.splice(2, 2, "🐍", "🐜");
// console.log(animals); 


// var months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);
// months.splice(4, 1, "May");
// console.log(months);


// var pets = ["dog", "cat", "fly", "bug", "ox"]
// console.log(pets);

// first argument: 2, kaha elements rakhne hai,
// second argument: 2, kitne elements ko remove karne hn
// or phr kon kon sy elements add karne hn
// pets.splice(2, 2, "pig", "duck", "emu");
// console.log(pets);


// splice return an array
// pop return just an array item
// var pets = ["dog", "cat", "fly", "bug", "ox"]
// var spliced = pets.splice(2, 1);
// var popped = pets.pop();

// console.log(spliced);
// console.log(popped);

// Push "test" to the spliced array (which is valid because spliced is an array)
// spliced.push("test");
// console.log(spliced); // Outputs: ["fly", "test"]


// Since popped is a single item, create an array to use push
// var poppedArray = [popped];
// poppedArray.push("test");
// console.log(poppedArray); // Outputs: ["ox", "test"]



// slice 
// var pets = ["dog", "cat", "fly", "bug", "ox"];
// console.log(pets);
// var slicedArray = pets.slice(1, 3);

// console.log(pets);
// console.log(slicedArray)
// ====================================================================================
