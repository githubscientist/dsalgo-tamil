Problem A: Two Sum

- Algorithm: Finding all the pairs O(n^2)
- Algorithm: Hashing O(nlogn)
- Algorithm: Two pointers O(n)

Either to compare one algorithm with another algorithm or to compare the same algorithm with different data structures, we need to know how to measure the time complexity of an algorithm.

time complexity: amount of time taken by an algorithm to run as a function of the length of the input

Mathematical Notations: Asymptotic Notations

1. Big O Notation: O(n) - upper bound
2. Big Omega Notation: Ω(n) - lower bound
3. Big Theta Notation: Θ(n) - both upper and lower bound (tight bound)

Big O Notation: O(n)

Situations/Cases: Input

- Best Case: O(1)
- Average Case: O(n)
- Worst Case: O(n)

Example: Linear Search

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Case 1: Best Case
Key = 1 (first element)
comparisons = 1
time complexity = O(1)

Case 2: Average Case
Key = 5 (middle element)
comparisons = 5
time complexity = O(n/2) = O(n)

Case 3: Worst Case
Key = 10 (last element) or 11 (not present)
comparisons = 10
time complexity = O(n)

Example 1:

```js
let a = 0,
  b = 0;
for (i = 0; i < N; i++) {
  a = a + rand();
}
for (j = 0; j < M; j++) {
  b = b + rand();
}
```

Time Complexity = ?

Options/Choices:

O(1)
O(logN)
O(N)
O(N logN)
O(N^2)
O(N^2 logN)
O(N^3)
O(2^N)
O(N!)

Solution: O(N + M)

let a = 0, b = 0;
=> Constant Time => O(1) => number of executions is constant = 1
=> declarations, assignments, comparisons, arithmetic operations, conditional statements, etc.

for (i = 0; i < N; i++) {
a = a + rand();
}

=> number of executions = the values the variable i takes
=> i = 0, 1, 2, 3, 4, ..., N-1 => N times
=> For example:
N = 5 => i = 0, 1, 2, 3, 4 => 5 times
N = 6 => i = 0, 1, 2, 3, 4, 5 => 6 times

number of executions = N
=> time complexity = O(N)

for (j = 0; j < M; j++) {
b = b + rand();
}

=> number of executions = the values the variable j takes
=> j = 0, 1, 2, 3, 4, ..., M-1 => M times
=> For example:
M = 5 => j = 0, 1, 2, 3, 4 => 5 times
M = 6 => j = 0, 1, 2, 3, 4, 5 => 6 times

number of executions = M
=> time complexity = O(M)

Total time complexity
=> T(N, M)
= 1 + N + M
= N + M (since 1 is a constant)
= O(N + M)

Example 2:

```js
let a = 0,
  b = 0;
for (i = 0; i < N; i++) {
  a = a + rand();
}
for (j = 0; j < N; j++) {
  b = b + rand();
}
```

Time Complexity = ?

let a = 0, b = 0;
number of executions = 1

for (i = 0; i < N; i++) {
a = a + rand();
}
number of executions = N

for (j = 0; j < N; j++) {
b = b + rand();
}
number of executions = N

Total time complexity T(N)
= 1 + N + N
= 1 + 2N
= 2N (since 1 is a constant)
= N (since 2 is a constant)
= O(N)

Example 3:

```js
let a = 0,
  b = 0;
for (i = 0; i < N; i++) {
  a = a + rand();
  for (j = 0; j < N; j++) {
    b = b + rand();
  }
}
```

Time Complexity = ?

Solution:

Method 1: Counting

let a = 0, b = 0;
number of executions = 1

outer for loop:
i = 0, 1, 2, 3, ..., N-1 => N times

inner for loop:
j = 0, 1, 2, 3, ..., N-1 => N times

Total time complexity T(N)
= 1 + N \* N
= 1 + N^2
= O(N^2)

Method 2: Substitution

1. Make some assumptions over the value of N

N = 4
N = 5
N = 6

2. Find the number of executions for each value of assumed N

N = 4
i = 0; j = 0, 1, 2, 3 => 4 times
i = 1; j = 0, 1, 2, 3 => 4 times
i = 2; j = 0, 1, 2, 3 => 4 times
i = 3; j = 0, 1, 2, 3 => 4 times

number of executions = 4 + 4 + 4 + 4 = 16

N = 5
i = 0; j = 0, 1, 2, 3, 4 => 5 times
i = 1; j = 0, 1, 2, 3, 4 => 5 times
i = 2; j = 0, 1, 2, 3, 4 => 5 times
i = 3; j = 0, 1, 2, 3, 4 => 5 times
i = 4; j = 0, 1, 2, 3, 4 => 5 times

number of executions = 5 + 5 + 5 + 5 + 5 = 25

N = 6
i = 0; j = 0, 1, 2, 3, 4, 5 => 6 times
i = 1; j = 0, 1, 2, 3, 4, 5 => 6 times
i = 2; j = 0, 1, 2, 3, 4, 5 => 6 times
i = 3; j = 0, 1, 2, 3, 4, 5 => 6 times
i = 4; j = 0, 1, 2, 3, 4, 5 => 6 times
i = 5; j = 0, 1, 2, 3, 4, 5 => 6 times

number of executions = 6 + 6 + 6 + 6 + 6 + 6 = 36

3. Summarize the number of executions for each value of assumed N and find the pattern

For N = 4, number of executions = 16
For N = 5, number of executions = 25
For N = 6, number of executions = 36

For a given N, number of executions = N^2

4. Find the time complexity

Total time complexity T(N)
= 1 + N^2
= O(N^2)

Example 4:

```js
int a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
```

Time Complexity = ?

Solution:

Method 2: Substitution

1. Make some assumptions over the value of N

N = 4
N = 5
N = 6

2. Find the number of executions for each value of assumed N

N = 4
i = 0; j = 4, 3, 2, 1 => 4 times
i = 1; j = 4, 3, 2 => 3 times
i = 2; j = 4, 3 => 2 times
i = 3; j = 4 => 1 time

number of executions = 4 + 3 + 2 + 1 = 10

N = 5
i = 0; j = 5, 4, 3, 2, 1 => 5 times
i = 1; j = 5, 4, 3, 2 => 4 times
i = 2; j = 5, 4, 3 => 3 times
i = 3; j = 5, 4 => 2 times
i = 4; j = 5 => 1 time

number of executions = 5 + 4 + 3 + 2 + 1 = 15

N = 6
i = 0; j = 6, 5, 4, 3, 2, 1 => 6 times
i = 1; j = 6, 5, 4, 3, 2 => 5 times
i = 2; j = 6, 5, 4, 3 => 4 times
i = 3; j = 6, 5, 4 => 3 times
i = 4; j = 6, 5 => 2 times
i = 5; j = 6 => 1 time

number of executions = 6 + 5 + 4 + 3 + 2 + 1 = 21

3. Summarize the number of executions for each value of assumed N and find the pattern

For N = 4, number of executions = 10
For N = 5, number of executions = 15
For N = 6, number of executions = 21

For a given N, number of executions = N + (N-1) + (N-2) + ... + 1
= Sum of first N natural numbers

S(N) = 1 + 2 + 3 + ... N-2 + N-1 + N -> equation 1
S(N) = N + N-1 + N-2 + ... + 3 + 2 + 1 -> equation 2

---

Addition of equation 1 and equation 2

2S(N) = (N+1) + (N+1) + (N+1) + ... + (N+1) + (N+1) + (N+1)
2S(N) = N _ (N+1)
S(N) = N _ (N+1) / 2

number of executions = N (N+1) / 2

4. Find the time complexity

Total time complexity T(N)
= 1 + [N * (N+1) / 2]
= 1 + N^2/2 + N/2
= 1/2(N^2 + N)
= N^2 + N (since 1/2 is a constant)
= N^2 (since N^2 is the highest power)
= O(N^2)

Example 5:

```js
let i;
let j;
let k = 0;
for (i = n / 2; i <= n; i++) {
  for (j = 2; j <= n; j = j * 2) {
    k = k + n / 2;
  }
}
```

Time Complexity = ?

Solution:

Outer loop: i = n/2, n/2 + 1, n/2 + 2, ..., n => n/2 times

inner loop:

N = 10; j = 2, 4, 8 => 3 times
N = 29; j = 2, 4, 8, 16 => 4 times
N = 30; j = 2, 4, 8, 16 => 4 times
N = 31; j = 2, 4, 8, 16 => 4 times
N = 40; j = 2, 4, 8, 16, 32 => 5 times

2^X = N, solve for X?

take the log2 on both the sides,

Total time complexity T(N)
= 1 + N/2 _ logN
= N/2 _ logN
= 1/2 _ N _ logN
= O(N logN)

Remaining:

O(2^N)
O(N!)
