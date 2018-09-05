#!/bin/bash
cd /var/www/bvh_web
source py3/bin/activate
cd src
screen -dmS webbg gunicorn --bind 0.0.0.0:8080 bvh_web.wsgi 
#--settings=djangoreactredux.settings.prod
screen -dmS webfg npm run prod

