# EasyAPI

This repository contains the implementation of my final year project conducted as part of my Computer Science BSc degree at King's College London.

The process of developing APIs requires extensive programming and technical experience. EasyAPI uses more accessible methods to enable anyone to create an API with an underlying database. Firstly, you can build a database from a description of a domain written in natural language. The database schema is extracted by utilising dependency parsing with [SpaCy](https://spacy.io/) and tree traversing to extract entities and relationships. Alternatively, the database schema can be extracted from a spreadsheet.

[![Demo](screenshots/thumb.png?raw=true)](https://gfycat.com/TestyFlakyChevrotain)

## Setup

The following dependencies are required:

- Postgres database (configurable in `backend/src/config/connections.js`)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Pipenv](https://github.com/pypa/pipenv)


Clone this repository:

```bash
git clone https://github.com/martinhartt/easyapi
cd easyapi
```

Install NLP dependencies:

```bash
cd backend/src/nlp
pipenv install
pipenv shell
python -m spacy download en
```

Install backend server dependencies:

```bash
cd backend
yarn install
```

Install frontend dependencies:

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
