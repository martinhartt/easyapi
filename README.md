# EasyAPI

Currently the process of developing APIs requires extensive programming and technical experience. This project consists of a web application which simplifies the process through the use of several methods accessible to anyone. The first method is by building a database from a user’s domain description. The second method is by extracting the database schema and data from a spreadsheet and building an API for it. The application will also support setting up an API from a device’s JSON response.

## Demo

![Demo of EasyAPI](https://thumbs.gfycat.com/TestyFlakyChevrotain-max-14mb.gif)

## Setup

The following dependencies are required:

- Postgres database (configurable in `backend/src/config/connections.js`)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Pipenv](https://github.com/pypa/pipenv)


Setup NLP dependencies:

```bash
cd backend/src/nlp
pipenv install
pipenv shell
python -m spacy download en
```

Setup backend server dependencies:

```bash
cd backend
yarn install
```

Setup frontend dependencies:

```bash
cd frontend
yarn install
```

## Run

Start the following processes separately:

Run NLP server:
```bash
python3 backend/src/nlp/index.py
```

Run backend server:
```bash
cd backend && yarn start
```

Run frontend application:
```bash
cd frontend && yarn start
```

Open <http://localhost:3000>
