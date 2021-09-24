# ShopFully Assignment

A fullstack project to assest development skills.

## Getting Started

Clone repository:

```
git clone git@github.com:fabiomangano/.git
```

### Prerequisites

To run the project you need [node](https://nodejs.org/it/) or [docker](https://www.docker.com/products/docker-desktop) already installed.

## Running project

### Production Mode (Nginx & Docker)

Run:

```
docker-compose up
```

Ports:
```
localhost:8080 (client)
localhost:3000 (api)
```
### Development Mode (Node)

Api:

```
cd ./backend
nvm use
npm i
npm run dev
```
Frontend:
```
cd ./frontend
npm i
npm start
```
## Notes
When the app is running:

- Switch to iPad or iPhone 6/7/8 view

- Select Slow 3G mode (to detect Image Lazy Loading) and then scroll down to load more content

- By clicking on the flyer's favourite button, your preference appears on the left drawer

## Built With

* [Node.js](https://nodejs.org/it/) - Open-source, cross-platform, JavaScript runtime environment.
* [Express.js](https://expressjs.com/it/) -  Web application framework for Node.js.
* [React.js](https://it.reactjs.org/) - Open-source, frontend, JavaScript library for building user interfaces or UI components.
* [Docker](https://www.docker.com/get-started) - Open application development framework that's designed to benefit DevOps and developers.
* [Nginx](https://www.nginx.com) - Popular lightweight web server.

## Author

* **Fabio Mangano** 