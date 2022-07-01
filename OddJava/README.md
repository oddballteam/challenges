# Oddball Coding Challenge

The core of this challenge is to build a REST API using Spring Boot Web and parse the payload data. \
For convenience, we've included common libraries as part of the build, but their use is not required. \
Feel free to import any libraries you're comfortable with and resources like Google, StackOverflow, or \
documentation when completing this challenge.

## Overview

As health care providers, we're concerned with the moods and stress levels of our patients. \
We have historical data available in CSV files that we want to analyze.

We're going to define a bad day as a day when:

- A user's mood is 1 or 2
- A user's mood is a 3, but their stress for that same day is a 4 or 5
- If we don't have mood or stress data for a given day, we'll assume it's neutral (3)

## Challenge

Build a Java application using the Spring Boot framework to fetch mocked data resources from a REST endpoint. \
After fetching the data, determine the following:

- Find which users that had two or more bad days in the week of 2017-05-07 and return
  - Username
  - Number of bad days each patient had for the week
- Find the users with the 5 longest streaks of consecutive bad days and return for each bad day streak
    - Username
    - Number of bad days
    - Starting date of that streak

**Output Format**
- Print all data to console
- Sort all output in decreasing order of bad days

## Resource files

Use the files found in ./src/main/resources/data for this OddChallenge

[users.csv](./src/main/resources/data/users.csv), a CSV file containing fake users.  
[moods.csv](./src/main/resources/data/moods.csv), a CSV file containing their moods.  
[stress.csv](./src/main/resources/data/stress.csv), a CSV file containing their stress levels.
