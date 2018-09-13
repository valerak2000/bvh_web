#!/bin/bash
cd /var/www/bvh_web/backend
source py3/bin/activate
screen -dmS webbg python manage.py runserver 0.0.0.0:8080 --settings=bvh_web.settings.dev
cd ../frontend
screen -dmS webfg npm run dev
#forever npm run dev >> logfile.log
