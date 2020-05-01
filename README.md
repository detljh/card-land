# Online Minigames Project
This is a web application created using React and Redux for the client view with an Express backend, SocketIO for socket communication, JSON Web Tokens to confirm authorization and MongoDB for storing the data. It is deployed on Heroku [here](https://minigames-online.herokuapp.com/).  

## Features
- Register and login with a username and password which is encrypted using BCrypt and stored in a database. 
- Join a game room to be matched against another user.
- Once matched, the game will start in 5 seconds.
- A random player is chosen to be the first player.
- Request to play again with your opponent after a game ends.
- Accept the request and the game will start in 5 seconds.
- If your opponent leaves the room, the game will stop and you will need to leave.

## Currently Available Games
- Tic Tac Toe
- Battleships
