#!/bin/bash
source py3/bin/activate
python manage.py runserver 0.0.0.0:8080 --settings=bvh_web.settings.dev
#gunicorn --bind 0.0.0.0:8080 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi
