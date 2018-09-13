#!/bin/bash
cd /var/www/bvh_web/backend
source py3/bin/activate
screen -dmS webbg gunicorn --bind 0.0.0.0:8080 bvh_web.wsgi 
#--settings=djangoreactredux.settings.prod
cd ../frontend
screen -dmS webfg npm run prod

