# EFIN Calculator

The EFIN calculator allows a user to enter their age, and their income and see their EFIN appear below

## Requirements

Ruby, rails, and node installed

To get application running

* `npm install`
* `bundle exec rails s`

## The task(s)

Generally your submission should demonstrate developer best practices. DRY code, keeping things modular etc etc. Show us your understanding and imaginination within the time allotted

## Part 1

Configure Rails to accept web socket requests from the front end and return a response.

Requirements:

* a user can enter their income and household size and it is passed to the backend via websockets

## Part 2

Configure a background worker of your choice that can accept jobs from action cable, and can perform a request to an external service  available at `http://efin.oddball.io` ( you can check its health at `/health`)

The external service is a single url that accepts `JSON` `POST` requests with this structure

```json
{
  "household": 1,
  "income":  20000
}

```

If you pass incorrectly formatted data you will receive an error.
Unfortunately this service is quite slow and can often take 5-10 seconds for a response.
When you do receive a response, update the front end via websockets to show the user their EFIN

Requirements:

* background worker that proxies requests to an external service
* actioncable that takes results from worker and displays them on the screen

## Tips & Guidance

* Do read the docs for action cable carefully
* Do feel free to refactor my js or clean up the front end as much as you want, please no coffee script though.
* Use whichever background worker you want, just make sure to include instructions for how to get it set up
