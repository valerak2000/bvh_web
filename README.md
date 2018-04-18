git submodule init

virtualenv -p /usr/bin/python3 virtualenv
source virtualenv/bin/activate`
pip install -r py-requirements/dev.txt

cd src
python manage.py migrate
python manage.py loaddata fixtures.json
python manage.py runserver

psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev
