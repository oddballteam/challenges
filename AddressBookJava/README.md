## Setup
Clone project repositiory and import the `OddJava` file directory as a new Gradle Project in your IDE
```
git clone https://github.com/oddballteam/challenges.git
```



## Command Line 
Compile and run using command line instructions

Navigate to OddJava directory through terminal
```cd /path/to/cloned/repository/challenges/OddJava```

Build
```
// Windows
gradlew.bat build

// Mac/Linux
./gradlew build
```

Boot Application
```
// Windows
gradlew.bat bootRun

// Mac/Linux
./gradlew bootRun

```

# OddJava Overview

The core of this challenge is to build a simple REST API using Spring Boot and parse the payload data. \
For convenience, we've included common libraries as part of the build, but their use is not required. \
Feel free to import any libraries you're comfortable with and resources like Google, StackOverflow, or \
documentation when completing this challenge.

---
## Challenges 
As health care providers, we're concerned with the moods and stress levels of our patients. \
We have a simple H2 database as our data source to generate "Bad Day Reports". 

---
### Spring Boot
Build an application using the Spring Boot framework to fetch and save data. \
The model and database repositories are already created. You provide the API. \
Make improvements as you see fit, but prioritize getting everything up and running first!

---
### Data Parsing
After fetching data, parse the contents to produce "Bad Day Reports"

A **Bad Day** is defined as when:

- A user's mood is 1 or 2
- A user's mood is a 3, but their stress for that same day is a 4 or 5
- If we don't have mood or stress data for a given day, we'll assume it's neutral (3)

#### Bad Day Reports
1. Find which users that had two or more bad days in the week of 2017-05-07 and return
   - Username
   - Number of bad days each patient had for the week

2. Find the five longest consecutive Bad Day streaks and return for each
   - Username
   - Number of bad days
   - Starting date of that streak

#### Output Format
- Nothing fancy, print reports to console
- Sort all output in decreasing order of bad days

---
## Resource Files
View your H2 database at [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
 - username: oddball
 - password: oddball

For reference, resource data files can be found in `main/resources/data`

[users.csv](./src/main/resources/data/users.csv), a CSV file containing fake users  
[moods.csv](./src/main/resources/data/moods.csv), a CSV file containing their moods  
[stress.csv](./src/main/resources/data/stress.csv), a CSV file containing their stress levels
