#!/bin/bash
source py3/bin/activate
gunicorn --bind 0.0.0.0:3000 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi
