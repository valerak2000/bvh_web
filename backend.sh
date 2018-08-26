#!/bin/bash
source py3/bin/activate
python ./src/manage.py runserver 0.0.0.0:8000 --settings=bvh_web.settings.dev
gunicorn --bind 0.0.0.0:8000 bvh_web.wsgi
