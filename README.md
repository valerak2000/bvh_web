using python, react, material-ui
==================
git submodule init

cd backend 

linux: virtualenv -p /usr/bin/python3.7 py37
       source py37/bin/activate 
windows: py -3.7 -m venv py37

pip install virtualenv
pip install psycopg2-binary==2.8.3
pip install psycopg2==2.8.3 --no-binary :all:
pip install -r py-requirements/dev.txt

python manage.py migrate 
python manage.py loaddata fixtures.json 
python manage.py runserver

cd ..
npm i

test connection to database: psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev
run in dev mode: ./rundev.sh
