#!/bin/bash
source py3/bin/activate
python3 manage.py runserver 0.0.0.0:3000 --settings=bvh_web.settings.dev
