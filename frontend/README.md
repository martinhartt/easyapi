# Setup

cd /Users/martinkubat/Work/easyapi/backend && babel src --watch --out-dir lib

===

open /Applications/Postgres.app

===

python3 /Users/martinkubat/Work/easyapi/backend/src/nlp/index.py

===

cd /Users/martinkubat/Work/easyapi/backend/lib/server && nodemon index

===

cd /Users/martinkubat/Work/easyapi/frontend && yarn start