# Technical Interview

Mobile position Flutter interview project for Oddball

## Requirements for running the project

1. An IDE or Editor to run Flutter in (VSCode or Android Studio)
1. Flutter plugin installed and configured
1. iOS or Android Simulator to view application
1. An set of Marvel API keys. They require a user to have a public and private key, as well as creating a hash to send to their API.

Run `flutter doctor` after the install and configuration to make sure that everything is configured correctly and Flutter should run. If you install Flutter through VScode extensions is should include all the Dart supporting installations as well.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## Requirements

This project is designed to test a candidates Flutter/Dart knowledge. The project is designed around the [Marvel Api](https://developer.marvel.com) and requires the public and private keys generated for the candidate to access the API.

The Marvel API requires a hash based on a time stamp, the public key, and the private key. Here is a quick way to set the parameters for that call:

```
    Map<String, String> setQueryParams(int limit) {
        var ts = DateTime.now().toString();
        var hash = crypto.md5.convert(utf8.encode(ts + "Your Private Key" + "Your Public Key")).toString();

        final queryParams = {
        "apikey": "Your Public Key"
        "ts": ts,
        "hash": hash,
        "limit": "$limit",
        };

        return queryParams;
    }
```

## Model

Due to the complexity of the Marvel API Characters and Character models, we have included the models ahead of time for the candidate to use. Make use of them how you see fit.

## Completion Criteria

1. Successfully make a call to the Marvel API and return a list of characters
1. Make sure the first page navigates to the list page correctly
1. Create a list view that displays the list of characters returned
1. Being able to tap on an item in the list and see detail new view
1. Making a second call to get the characters detail information
1. Utilizing Provider or other state managment solution
1. Possible writing of widget tests to validate widgets and views
