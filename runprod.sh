#!/bin/bash
cd /var/www/bvh_web
source py3/bin/activate
screen -dmS webbg python ./src/manage.py runserver 0.0.0.0:8000 --settings=djangoreactredux.settings.prod
screen -dmS webfg npm run prod

