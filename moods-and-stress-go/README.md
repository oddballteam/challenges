# Oddball Coding Screen
Feel free to use tools like Google, StackOverflow, and reference manuals when completing this challenge.

## Overview
As health care providers, we're concerned with the moods and stress levels of our patients. We have historical data available in CSV / JSON files that we want to analyze.

We're going to define a bad day as a day when:
  - a user's mood is 1 or 2
  - a user's mood is a 3, but their stress for that same day is a 4 or 5
*If we don't have mood or stress data for a given day, we'll assume it's neutral (3)*

## Steps
1. Download Data files
    - users.csv/json, afile containing fake users.
    - moods.csv/json, a file containing their moods.
    - stress.csv/json, a file containing their stress levels.
2. Using GO, write a program that reads in the data from the CSV or JSON files and can determine the following:
    - All users who had two or more bad days in the week of 2017-05-07.
      - For output, show their usernames and the number of bad days they had that week, sorted in decreasing order of bad days.
    - Find the 5 longest streaks of consecutive bad days.
      - For each of these streaks, show the username, the number of bad days, and the starting date of that streak
