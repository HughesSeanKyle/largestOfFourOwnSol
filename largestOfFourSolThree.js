// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Own Solution - (Declarative approach)

//ES5 way of writing function

// function largestOfFour(parentArr) {
//   return parentArr.map(function(childArr) {
//     return Math.max(...childArr);
//   });
// };

//ES6 way of writing function

function largestOfFour(parentArr) {                               //1
  return parentArr.map(childArr => Math.max(...childArr));        //2
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


/*/



    //1 Initializes function that takes in an Array as an argument
    //2
        map() - The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        Source - [https://devdocs.io/javascript/global_objects/array/map]

          In this case the map mehtod (Which is a higher order function) will take in the outer array as and argument. This is called the parent array.
          As mentioned above, the map function will allow a function to be performed on each of the items within the array (The child arrays).

          Now because the the Child arrays are still objects in this case Math.max() will not work on them directly as Math.max() will only take in a number. 

          In order for Math.max() to work on the child arrays the content/items inside the child arrays must be seen as arguments. 

          The spread operator (...) makes this possible and Math.max() can now take in each number/item in each child array and evaluate which number is the highest in each array. 

          Lastly, after all the arrays has been evaluated the highest number of each child array is then collected an stored inside the array that the map method has made. 


    What is a higher order function?
    In many programming languages, map is the name of a higher-order function that applies a given function to each element of a functor, e.g. a list, returning a list of results in the same order. It is often called apply-to-all when considered in functional form.
    Source - [https://en.wikipedia.org/wiki/Map_(higher-order_function)#:~:text=In%20many%20programming%20languages%2C%20map,when%20considered%20in%20functional%20form.]



    What is Declarative Programming?

    Declarative programming is when you write your code in such a way that it describes what you want to do, and not how you want to do it. It is left up to the compiler to figure out the how.

    Source - [https://stackoverflow.com/questions/129628/what-is-declarative-programming]


                                */