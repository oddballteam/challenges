# Rails Application Overview
```
bundle install
rails db:create
rails server -p3001 # the react app will run on 3000
```

# React Application Overview

Navigate to the `/react` directory and run the following command to start the application
```
npm install
npm start
```

# Challenge
Using the API at https://developer.marvel.com/ (a public and private key will be provided during the challenge)

# Authentication 
```
Server-side applications must pass two parameters in addition to the apikey parameter:

ts - a timestamp (or other long string which can change on a request-by-request basis)
hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)
```


RAILS Side
1. Securly store the api credentials in the rails application
2. Using the ruby HTTP client of your choice, make a request to the GET /v1/public/characters endpoint. 
3. Implement the nameStartsWith, offset, and limit parameters of the marvel character endpoint
4. Return these as a JSON response.

REACT Side
5. Use the react application to call the rails application and retrieve the character search results.
6. Mark individual characters as favorites and append to a favorites list
7. Maintain the state across page reloads

