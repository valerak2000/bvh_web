using python, react, material-ui
==================
git submodule init

cd backend
linux:
	virtualenv -p /usr/bin/python3 py3
	source py3/bin/activate
windows:
	py -3 -m venv py3

pip install psycopg2-binary
pip install --no-binary :all: psycopg2
pip install psycopg2

pip install -r py-requirements/dev.txt

python manage.py migrate
python manage.py loaddata fixtures.json
python manage.py runserver

cd ..

npm i

test connection to database:
psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev

run in dev mode:
./rundev.sh

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
YOUR_API_KEY=AIzaSyCROA6zZ20mgdxFsFf_4s47Nvwe5xRnOSE
