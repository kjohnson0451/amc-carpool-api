# amc-carpool-api

## Installation

### Prerequisites

- Node.js and npm installed. You should install them via [Node Version Manager](https://github.com/nvm-sh/nvm).
- [Docker](https://docs.docker.com/get-docker/) installed. Ideally with a CLI. Getting a docker CLI working with Windows is tough, so Mac/Linux are your best bets.

### Steps to Deploy a Developer Instance

1. Clone this Repository

```
git clone https://github.com/kjohnson0451/amc-carpool-api.git
cd amc-carpool-api
```

2. Install Dependencies

```
npm install
```

3. Start the Development Environment

```
# If you get a 'Cannot connect to the Docker daemon' error, you
# may have some troubleshooting to do. Go back and make sure
# you followed all the docker installation steps.

docker compose up
```

4. Access the Application

Once the containers are up and running, access the application at http://localhost:3000 in your web browser. You should get a message along the lines of "Welcome to the root endpoint. This app is running fine."

5. Shutdown the Development Environment

To stop the running containers, use:

```
docker compose down
```

This will stop and remove the containers created during the development instance.

## Technologies Used

- JavaScript
- Node.js
- Express
- Sequelize
