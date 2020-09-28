Welcome to our LOFINO Coding Challenge!

Your task is to extend a small client/server web application that lets you upload profiles of your pet so others can rate them.

# Prerequisites

- an installation of Node.js and npm
- your favorite IDE
- a possibility to share the result, e.g Dropbox or Github

# Tasks

This repository comes with two software projects: A Node.js based backend and a React based frontend. You find them in the respective directories.

## Backend

- [x] provide a server application based on Node.js that serves an **API** over HTTP
- [x] extend the API to allow users to rate existing pets (e.g. give a rating of 1-5 per pet)
  - the ratings should be stored on the backend as well. You can call `addRating()` in the `petsRepository` for that.
- [x] implement the `getTrendingPet()` function in `service/petsService` that finds the _trending_ Pet for an arbitrary point in time. A pet is considered trending if it has the most number of ratings within a time frame of the previous 7 days from the point in time we want to consider. See the documentation of the `getTrendingPet()` stub for more information.
- [x] provide an endpoint which returns the trending pet for the current day. Note that the trending pet may change as you add ratings.

## Frontend

- [x] provide a frontend application based on React.js that consumes the backend API
- [x] create a start page that lists all the pets with their infos
  - [x] display the name and image
  - [x] display the current age of the pet
  - [x] display the average rating and the number of ratings
  - [x] on the details page of the pet, add an input element that lets the user rate the pet (which sends the rating to the backend).
    - Make this rating element look like the interactive 5-star rating UI known from e.g. amazon.
    - encode the existing rating in this ui element. I.e. if the pet has an average rating of 3.2, display the first 3 stars differently than the remaining 2 stars. You can use `frontend/public/star-empty.png` and `frontend/public/star-filled.png` for that.
  - [X] BONUS: if today is the birthday of a pet then show [this picture of a birthday hat](frontend/public/birthday-hat.png) rotated and halfway overlapping with the pet image (see [mockup](mockups/birthday-hat.png))

## Code Review

There's a branch `feature/findDate` in this repository. Check it out with `git checkout feature/findDate`.

You'll find a file `backend/service/findDate.ts`. It exports a function that searches for formatted dates in an array of string. It has nothing to do with pets :D Suppose someone from your team wants to merge this to `master`.

- [X] perform a code review of `findDate.ts`. Comment on lines that you find problematic or could be improved, or if you have any other comments. Take into consideration requirements like readability, maintainablilty, performance, security etc.

You may do this by creating a pull request on Github and comment the changes there, or just write comments into the code, or any other way that you find appropriate.

# Getting started

- install dependencies on the backend

  ```bash
  cd backend
  npm install
  ```

- start the backend app with `npm start`
  ```bash
  npm start
  ```
- use an HTTP client like `curl` or `Postman` to see if the server is responding to requests.

  - `curl http://localhost:8080/hello` -> `Hello World!`

- install dependencies on the frontend
  ```bash
  cd frontend
  npm install
  ```
- start the frontend with `npm start`
  ```bash
  npm start
  ```
- open `http://localhost:3000/` with your web browser. You should see a simple web page with pictures of animals.

# Some Notes

- Feel free to use third party modules where appropriate. You may also change the structure of the files the way you think is appropriate.
- Some of the software structure is not great. Feel free to refactor existing modules as you please.
- There are tests for both projects. Make sure they pass. Feel free to extend the tests where appropriate.
- Focus on code quality and working software, try to follow best practices.
- Keep an eye on security, usability etc.
- If you feel you're stuck on something, work on something else instead. You can add some comments in the code about any problems you encountered or the progress that you made
- Feel free to add comments on the code if you want to explain something or on a place that could be improved
  - you can also add comments on the bottom of this document

# Your Notes

Here you can add your own notes and comments about the project.
For example, what trade offs did you have to decide for? What would you have done differently if you had more time?
What did you think of the tasks? Was it too much / too easy / too ambiguous?
