# Scytale Pull Request Server

This is the Server side of the 'Scytale Pull Request Dashboard'!<br />
It holds the server, DB, and logic of the system.<br />
Please complete the following instructions before moving on to the 'Scytale-Client' repository.<br />
The server allows to make RESTful API calls to the 'pull request' DB.<br />

## Install & Run

1. Clone the project from [Git-Hub](https://github.com/sufka861/scytale-server.git)
2. cd into the project folder
    ```console
    <YourLocalFolder>:~$ cd scytale-server
    <YourLocalFolder>/scytale-server:~$
    ```
3. Use npm to install the dependencies specified in the package.json
    ```console
    npm install
    ```
4. NOTICE: make sure to copy the relevant .env file under the root directory<br />
   The .env is not posted on Git-Hub, it contains the DB connection information.
5. To Start the server run:
    ```console
    npm start
    ```

## How to use

The server is designed to be used alongside the client app.<br />
If you wish to try out the server without using the 'Scytale-Client' you may test it with POSTMAN.<br />
To test the server using POSTMAN use our [published API docs](https://documenter.getpostman.com/view/24139741/2s8ZDX43Ra) to guide you<br />
Otherwise the next steps are defined in the ['Scytale-Client'](https://github.com/sufka861/scytale-client.git) README.md<br />

## Architecture walk-through

1. index.js - Entry point: using app.js
2. router - Holds the routing to the different API calls
3. controller - Handles the request + response of the API calls
4. repositories - Holds classes specific to the DB collection. Holds any methods that are unique to that collection.<br />
   In this case, we have only one repository to handle pull requests.<br />
   This enables to scale the system to handle multiple repositories, without duplicating the same MongoDB methods over and over.<br />
   Each repository inherits the relevant db class.
5. db - Holds the DB class, in our case: MongoDB.<br />
   The mongoStorage class connects to MongoDB and to the relevant model (in our case only one model, but is able to scale to future models)<br />
   The mongoStorage class holds the basic methods that every repository will need: find(), create(), count() ...
6. models - Holds currently the pull request schema and model with validations.
7. utils - Holds the logging and error handling.<br />
   7.1 errors - Contains specific error classes that inherit from the generic error class<br />
   7.2 loggers - Directing errors to an error log file, and http requests logs to a http log file
8. logs - Added automatically, generally would not be uploaded to Git-Hub, but are kept for the sake of seeing the systems functions

## Enjoy

The system was designed with scale and generic use in mind. Of course on a small case further abstraction is not always needed,<br />
but we like our servers like we like our start-ups: SCALABLE :)

By: Suf Karmon
