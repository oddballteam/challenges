# Address Book Node API - Interview Assessment

## Overview

Build a RESTful API for managing an address book of "oddballs" using Node.js, Express, Knex, and SQLite.

## Getting Started

### Installation

```bash
npm install
```

> **Note:** You may need to run `npm install sqlite3@latest` if you encounter errors starting the API.

### Setup Database

Run the seed script to create and populate the database with 5000 sample records:

```bash
npm run seed
```

This will create `oddballs.db` with the following schema:

- `id` - Integer (Primary Key)
- `firstName` - Text
- `lastName` - Text
- `street` - Text
- `city` - Text
- `state` - Text
- `zip` - Text
- `phone` - Text
- `email` - Text

### Start Server

```bash
npm run dev
```

The server will run on `http://localhost:3001`

## Your Task

A basic GET endpoint has been provided as an example. Your task is to implement the following:

### Required

1. **Add Pagination** to the existing `GET /api/oddballs` endpoint
   - Support `offset` and `limit` query parameters
   - Default behavior should remain as returning 100 records

2. **Add search/filter functionality** (e.g., search by name, filter by state, etc.)

3. **Implement CRUD Operations**
   - `POST /api/oddballs` - Create a new oddball
   - `PUT /api/oddballs/:id` - Update an existing oddball by ID
   - `DELETE /api/oddballs/:id` - Delete an oddball by ID

### Bonus (Optional)

- Add input validation
- Add error handling for edge cases
- Implement additional features as you see fit

## Testing

You can test your API using tools like:
- cURL
- Postman
- Thunder Client (VS Code extension)
- Or any HTTP client of your choice

## Resources

- [Knex Query Builder Documentation](https://knexjs.org/guide/query-builder.html)

## Notes

- Feel free to modify the code structure as needed
- You can add additional dependencies if required
- Focus on clean, maintainable code
- Consider edge cases and error handling
