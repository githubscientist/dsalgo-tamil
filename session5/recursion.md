Recursion: a function that calls itself.

```js
function sayHello() {
  console.log("hello");
  sayHello();
}

sayHello();
```

Recursion Tree:

sayHello()

    - console.log("hello")
    - sayHello()
        - console.log("hello")
        - sayHello()
            - console.log("hello")
            - sayHello()
                - console.log("hello")
                - sayHello()
                    ...
                    ...

Exercise:

Write a function in iterative way and recursive way to print the first N natural numbers.

Input:

printNumbers(5)

Output:

5
4
3
2
1

Input2:

printNumbers(10)

Output2:

10
9
8
7
6
5
4
3
2
1

Exercise:

Write a function in recursive way to print the first N natural numbers from 1 to N.

Input:

printNumbers(5)

Output:

1
2
3
4
5

Exercise:

Write a recursive function to print the sum of first N natural numbers.

Input:

sum(5)

Output:

15

Input2:

sum(10)

Output2:

55

Recurrence Relation: A recurrence relation is an equation that recursively defines a sequence or multidimensional array of values, once one or more initial terms are given: each further term of the sequence or array is defined as a function of the preceding terms.

Exercise:

Write a recursive function to print the factorial of a given number or product of first N natural numbers.
