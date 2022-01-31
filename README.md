# Social Network API

## Description

Social Media is a powerful tool used by just about most everyone now a days in some form. With this application I will create an API server for a social network application where users can share thoughts, react to friend's thoughts and create a friends list. In this application we will use Express.js and Mongoose packages.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Demonstration

Screencastify was used for the demonstration and due to only being able to record for 5 minutes without paying the subscription, we made 2 videos. Part 1 Demo video is demonstrating viewing all users, finding users by ID, creating a new user, updating a user, deleting a user, adding a friend and removing a friend. Part 2 Demo video is demonstrating viewing all thoughts, finding the thoughts by ID, creating a new thought, updating a thought, deleting a thought, creating a reaction to a thought and deleting a reaction from a thought.

Part 1 Demo:
<br />
https://watch.screencastify.com/v/HRnwxHQ7dihaX6M975Ny
<br />

Part 2 Demo:
<br />
https://watch.screencastify.com/v/doTIbfmujefpwaodOZQZ
<br />

## Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Install with 
```
npm i
```
,
run
```
node index
```
to start the server

## Technologies

Express.js
<br />
Mongoose

