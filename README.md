using python, react, material-ui
==================
git submodule init

cd backend 

linux: virtualenv -p /usr/bin/python3.12 py3
       source py3/bin/activate
windows: py -3.12 -m venv py3


pip3 install virtualenv
#pip3 install psycopg2-binary==2.8.3
#pip3 install psycopg2 --no-binary :all:
pip3 install -r py-requirements/dev.txt
pip3 install --upgrade -r py-requirements/dev.txt
pip install setuptools
python3 manage.py migrate --settings=bvh_web.settings.dev
python3 manage.py loaddata fixtures.json --settings=bvh_web.settings.dev
python3 manage.py runserver --settings=bvh_web.settings.dev

cd ..
npm i

test connection to database: psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev
run in dev mode: ./rundev.sh
