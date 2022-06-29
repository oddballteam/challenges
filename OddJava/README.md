# Oddball Coding Challenge

Feel free to use tools like Google, StackOverflow, and reference manuals when completing this challenge. \
A primary part of this challenge is parsing csv files. For convenience, we've included common CSV packages as part of the build, but their use is not required.

- [Apache Commons CSV](https://commons.apache.org/proper/commons-csv/user-guide.html#Example:_Parsing_an_Excel_CSV_File)
- [OpenCSV](http://opencsv.sourceforge.net/#reading)

## Overview

As health care providers, we're concerned with the moods and stress levels of our patients. We have historical data available in CSV files that we want to analyze.

We're going to define a bad day as a day when:

- A user's mood is 1 or 2
- A user's mood is a 3, but their stress for that same day is a 4 or 5
- If we don't have mood or stress data for a given day, we'll assume it's neutral (3)

## Challenge

Using your programming language of choice, write a program that reads in the data from the CSV files and can determine the following:

- All users who had two or more bad days in the week of 2017-05-07.
- Find the users with the 5 longest streaks of consecutive bad days. 
    - For each of these streaks, return the username, the number of bad days, and the starting date of that streak.

## Output

Print the patient's username and the number of bad days each patient had for the week, sorted in decreasing order of bad days.

## Resource files

Use the files found in ./src/main/resources as data for this OddChallenge

[users.csv](https://oddball.io/users.csv), a CSV file containing fake users.  
[moods.csv](https://oddball.io/moods.csv), a CSV file containing their moods.  
[stress.csv](https://oddball.io/stress.csv), a CSV file containing their stress levels.
