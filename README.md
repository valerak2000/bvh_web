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

python manage.py runserver 0.0.0.0:8080 --settings=bvh_web.settings.dev

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
YOUR_API_KEY=AIzaSyCROA6zZ20mgdxFsFf_4s47Nvwe5xRnOSE