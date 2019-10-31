#!/bin/bash
screen -X quit
#cd /var/www/bvh_web/frontend
#screen -dmS webfg npm run start-prod
cd ./backend
source py37/bin/activate
screen -dmS webbg gunicorn --bind 0.0.0.0:8080 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi

