O(2^N)

Problem: Given a array of values of size N, find and print the number of ways we can select the values from the array.

Input: [1, 2, 3]

Output:

Number of Ways: 8

0 values => () => 1 way
1 value => (1), (2), (3) => 3 ways
2 values => (1, 2), (1, 3), (2, 3) => 3 ways
3 values => (1, 2, 3) => 1 way

Input: [1, 2, 3, 4]

Output:

Number of Ways: 16

0 values => () => 1 way
1 value => (1), (2), (3), (4) => 4 ways
2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4) => 6 ways
3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4) => 4 ways
4 values => (1, 2, 3, 4) => 1 way

N = 3, number of executions = 8
N = 4, number of executions = 16
N = 5, number of executions = 32

For a given N, number of executions = 2^N

Time Complexity: O(2^N)

Problem: Given a string S, find and print all the possible permutations of the string S.

Input: abc

Output:

abc
acb
bac
bca
cab
cba

Input: abcd

Output:

abcd
abdc
acbd
acdb
adbc
adcb
bacd
badc
bcad
bcda
bdac
bdca
cabd
cadb
...
...

N = 2, number of executions = 2
N = 3, number of executions = 6
N = 4, number of executions = 24
N = 5, number of executions = 120

For a given N, number of executions = N!

Time Complexity: O(N!)

N! = N * (N - 1) * (N - 2) * ... * 1
5! = 5 * 4 * 3 * 2 * 1 = 120