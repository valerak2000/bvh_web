#!/bin/bash
cd /var/www/bvh_web
source py3/bin/activate
screen -dmS webbg python ./src/manage.py runserver 0.0.0.0:8000 --settings=djangoreactredux.settings.dev
screen -dmS webfg npm run dev
#forever npm run dev >> logfile.log
