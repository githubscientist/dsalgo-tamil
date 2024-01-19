// // example of recursion function
// function sayHello() {
//     console.log('hello');
// }

// sayHello();

// // example of recursion function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

// iterative way
// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }


// sayHello(6);

// // recursive way
// function sayHello(N) {
//     if (N == 0) return;

//     console.log('hello');
//     sayHello(N-1);
// }

// sayHello(3);

/*
    sayHello(3)
        - N = 3; 3 == 0; false
        - console.log('hello')
        - sayHello(2)
            - N = 2; 2 == 0; false
            - console.log('hello')
            - sayHello(1)
                - N = 1; 1 == 0; false
                - console.log('hello')
                - sayHello(0)
                    - N = 0; 0 == 0; true

    sayHello(3)

*/

// // recursive way
// function sayHello(N) {
//     if (N == 0) return;
    
//     console.log(N);
//     sayHello(N-1);
// }

// sayHello(10);

// recursive way
// function sayHello(N) {
//     if (N == 0) return;
    
//     sayHello(N - 1);
//     console.log(N);
// }

// sayHello(5);

/*
    sayHello(5)
        - N = 5; 5 == 0; false
        - sayHello(4)
            - N = 4; 4 ==0; false
            - sayHello(3)
                - N = 3; 3 == 0; false
                - sayHello(2)
                    - N = 2; 2 == 0; false
                    - sayHello(1)
                        - N = 1; 1 == 0; false
                        - sayHello(0)
                            - N = 0; 0 == 0; true; return;
                        - console.log(1) x (waiting for sayHello(0) to finish)
                    - console.log(2) x (waiting for sayHello(1) to finish)
                - console.log(3) x (waiting for sayHello(2) to finish)
            - console.log(4) x (waiting for sayHello(3) to finish)
        - console.log(5) x (waiting for sayHello(4) to finish)

    
    sayHello(5)

*/

// function printArray(numbers) {
//     for (let index = 0; index < numbers.length; index++){
//         console.log(numbers[index]);
//     }
// }

// let numbers = [3, 6, 1, 5, 4, 2];

// printArray(numbers);

// function printArray(numbers) {
//     for (let index = numbers.length-1; index >= 0; index--){
//         console.log(numbers[index]);
//     }
// }

// let numbers = [3, 6, 1, 5, 4, 2];

// printArray(numbers);

// function printArray(numbers, n) {
//     if (n == -1) return;

//     printArray(numbers, n - 1);
//     console.log(numbers[n]);
// }

// let numbers = [3, 6, 1, 5, 4, 2];

// printArray(numbers, numbers.length-1);

// // Approach : 1
// function sum(N, total) {
//     if (N == 0) return total;
//     return sum(N-1, total + N);
// }

// console.log(sum(5, 0));

// // Approach : 2
// let total = 0;

// function sum(N) {
//     if (N == 0) return total;
//     total += N;
//     return sum(N-1);
// }

// console.log(sum(5));

// Approach: 3 Recurrence Relation

/*
    S(N) = ?

    For N = 1, S(N) = 1 
    For N = 2, S(N) = 1 + 2 = 3
    For N = 3, S(N) = 1 + 2 + 3 = 6
    For N = 4, S(N) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(N) = 1 + 2 + 3 + 4 + 5 = 15

    --------------------------------------------

    Backward Substitution

    For N = 1, S(1) = 1  [Base Case]

    For N>1, 
        For N = 2, S(2) = S(1) + 2 = 3
        For N = 3, S(3) = S(2) + 3 = 6
        For N = 4, S(4) = S(3) + 4 = 10
        For N = 5, S(5) = S(4) + 5 = 15

    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) + N
*/

// function S(N) {
//     // For N = 1, S(N) = 1
//     if (N == 1) return 1;

//     // For N > 1, S(N) = S(N-1) + N
//     return S(N - 1) + N;
// }

// console.log(S(5));

/*
    S(5)
        - N = 5; 5 == 1; false
        - return S(4) + 5
                  |__ N = 4; 4 == 1; false
                  |__ return S(3) + 4
                              |__ N = 3; 3 == 1; false
                              |__ return S(2) + 3
                                          |__ N = 2; 2 == 1; false
                                          |__ return S(1) + 2
                                                      |__ N = 1; 1 == 1; true; return 1

    S(5)
*/

// Approach: 3 Recurrence Relation

/*
    S(N) = ?

    For N = 1, S(N) = 1 
    For N = 2, S(N) = 1 x 2 = 3
    For N = 3, S(N) = 1 x 2 x 3 = 6
    For N = 4, S(N) = 1 x 2 x 3 x 4 = 10
    For N = 5, S(N) = 1 x 2 x 3 x 4 x 5 = 15

    --------------------------------------------

    Backward Substitution

    For N = 1, S(1) = 1  [Base Case]

    For N>1, 
        For N = 2, S(2) = S(1) x 2 = 3
        For N = 3, S(3) = S(2) x 3 = 6
        For N = 4, S(4) = S(3) x 4 = 10
        For N = 5, S(5) = S(4) x 5 = 15

    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) x N
*/

function F(N) {
    // For N = 1, S(N) = 1
    if (N == 1) return 1;

    // For N > 1, S(N) = S(N-1) x N
    return F(N - 1) * N;
}

console.log(F(4));

/*
    S(5)
        - N = 5; 5 == 1; false
        - return S(4) + 5
                  |__ N = 4; 4 == 1; false
                  |__ return S(3) + 4
                              |__ N = 3; 3 == 1; false
                              |__ return S(2) + 3
                                          |__ N = 2; 2 == 1; false
                                          |__ return S(1) + 2
                                                      |__ N = 1; 1 == 1; true; return 1

    S(5)
*/