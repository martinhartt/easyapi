# EasyAPI
API generator for humans


## Setup

The following dependencies need to be installed first:

- Postgres database (configurable in `backend/src/config/connections.js`)
- Yarn
- Pipenv



### Setup NLP dependencies

```bash
cd backend/src/nlp
pipenv install
pipenv shell
python -m spacy download en
```

### Setup backend server dependencies

```bash
cd backend
yarn install
```

### Setup frontend dependencies

```bash
cd frontend
yarn install
```

## Run

The the following processes separately:

### Run NLP server
```bash
python3 backend/src/nlp/index.py
```

### Run backend server
```bash
cd backend && yarn start
```

### Run frontend application
```bash
cd frontend && yarn start
```

Open <http://localhost:3000/>
