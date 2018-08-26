using python, react, material-ui
==================
git submodule init

linux:
	virtualenv -p /usr/bin/python3 py3
	source py3/bin/activate
windows:
	py -3 -m venv py3

pip install django-disposable-email-checker
pip install -r py-requirements/dev.txt

cd src
python manage.py migrate
python manage.py loaddata fixtures.json
python manage.py runserver

cd ..
npm i

psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev

python manage.py runserver 0.0.0.0:8000 --settings=djangoreactredux.settings.dev_docker


### Running DOCKER
We use Docker as a development environment. For production, we leave you to set it up the way you feel better,
although it is trivial to extrapolate a production environment from the current docker-compose.yml.

* `$ docker-compose build`
* `$ docker-compose up`

To stop the development server:

* `$ docker-compose stop`

Stop Docker development server and remove containers, networks, volumes, and images created by up.

* `$ docker-compose down`

You can access shell in a container

* `$ docker ps  # get the name from the list of running containers`
* `$ docker exec -i -t djangoreactreduxbase_frontend_1 /bin/bash`

The database can be accessed @localhost:5433

* `$ psql -h localhost -p 5434 -U djangoreactredux djangoreactredux_dev`

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
YOUR_API_KEY=AIzaSyCROA6zZ20mgdxFsFf_4s47Nvwe5xRnOSE

python manage.py makemigrations
python manage.py migrate
