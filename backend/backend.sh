#!/bin/bash
source py3/bin/activate
python3 manage.py runserver 0.0.0.0:3000 --settings=bvh_web.settings.dev
#gunicorn --bind 0.0.0.0:3000 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi
