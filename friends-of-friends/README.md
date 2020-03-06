## Friends of Friends:

For this challenge, we are using the user list json provided to show a collection of common friends of friends given two user guids.

## Instructions
Write a script, that reads the friends-of-friends.json file, and given the below known sets, returns the total number and first and last name of common friends.

```
const users = ["3986024a-b38c-41d4-966f-8bc56d23eb33", "abbd689e-2a45-4faf-bc5e-61ee3e0a0b4e"] // 41 Friends in common
//const users = ["ba2be3ec-71a7-4593-bc5c-89a3cb7e2ad0", "abbd689e-2a45-4faf-bc5e-61ee3e0a0b4e"] // 47 Friends in common
```
- Note: There may be duplicates in the friend's lists, make sure to account for them.
- These do not need to be run together, you can run it two times, commenting out each unused sets.
- Bonus, use a CLI tool to pass these in as arguments
