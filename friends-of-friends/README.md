# Friends of Friends

## Introduction

For this challenge, you will be provided `friend-list.json`, which describes a list of users, which each have a unique `id`, some descriptive properties like `email`, and a list of `friends`.

## The Challenge
Write a program that, given 2 user `id`s, uses the `friend-list.json` file and returns the common friends between the specified users.

The program should print:

- The first and last name of those common friends, alphabetized by first name.
- The total number of common friends between the specified users.

## Notes

- You're free to hard-code the 2 user `id`s that you wish to compare

```javascript
const users = ["3986024a-b38c-41d4-966f-8bc56d23eb33", "abbd689e-2a45-4faf-bc5e-61ee3e0a0b4e"]; // 41 Friends in common
// const users = ["ba2be3ec-71a7-4593-bc5c-89a3cb7e2ad0", "abbd689e-2a45-4faf-bc5e-61ee3e0a0b4e"]; // 47 Friends in common
```

- The program only needs to compare 2 users at a time. Feel free to comment and uncomment the 2 provided test cases and run the program twice.
- There may be duplicates in the friends lists, make sure to account for them.

## Bonus
- Have the program accept command line arguments for the 2 user `id`s
  - e.g. `node friends-of-friends.js 3986024a-b38c-41d4-966f-8bc56d23eb33 abbd689e-2a45-4faf-bc5e-61ee3e0a0b4e`
