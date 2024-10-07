# Technical Interview

Mobile position React Native intervew project for Oddball

## Requirements for running the project

1. An IDE or Editor to run react native in 
1. React Native installed and configured
1. iOS or Android Simulator to view application
1. An set of Marvel API keys. They require a user to have a public and private key, as well as creating a hash to send to their API.

## Requirements

This project is designed to test a candidates React Native knowledge. The project is designed around the [Marvel Api](https://developer.marvel.com) and requires the public and private keys generated for the candidate to access the API.

The Marvel API requires a hash based on a time stamp, the public key, and the private key. Here is a quick way to set the parameters for that call (This code exists in `app/util/index.ts`):

```
    export function setQueryParams(limit: number): QueryParams {
      let ts = new Date().getTime();
      let hash = Md5.hashStr(utf8.encode(ts + "your private key" + "your public key"));

      return {
        apikey: "your public key",
        ts: ts.toString(),
        hash: hash,
        limit: limit.toString()
      }
    }
```

## Model

Do to the complexity of the Marvel API Characters and Character models, we have included the models ahead of time for the candidate to use. Make use of them how you see fit. (Located at `app/models/*`

## Completion Criteria

1. Successfully make a call to the Marvel API and return a list of characters
1. Create a list view that displays the list of characters returned
1. Being able to tap on an item in the list and see detail new view
1. Making a second call to get the characters detail information
1. Utilizing a state managment solution
1. Writing of tests to validate logic
