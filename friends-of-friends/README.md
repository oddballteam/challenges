# Friends of Friends

## Introduction

For this challenge, we are providing `friend-list.json`. This file describes a list of users which each have a unique `id`, some descriptive properties like `email`, and a list of `friends`.

## The Challenge
- Write a program that, given 2 user `id`s, parses the `friend-list.json` file and returns a sorted array of common friends for the specified users.
- Sort the results by the `id` property.

Sample Output:
```json
[
  {
    "first_name": "Zaneta",
    "last_name": "D'Cruze",
    "id": "07d71f0d-1323-4fe8-98b3-2f417b1c6f3b"
  },
  {
    "first_name": "Callie",
    "last_name": "Mackett",
    "id": "08a73856-f623-4a82-beb4-567902fa6228"
  },
  {
    "first_name": "Tiphani",
    "last_name": "Andreu",
    "id": "14a70022-0b75-4754-b9ac-6aca319e3fa5"
  }
]
```

## Testing your output

```bash
cd friends-of-friends # Enter friends-of-friends
npm install # Install dependencies
npm run test # Run the tests
```

## **Implementation Notes**

- There may be duplicates in the `friends` property of each user. The result set should only include unique users.