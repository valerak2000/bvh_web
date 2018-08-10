#!/bin/bash
source py3/bin/activate
python ./src/manage.py runserver 0.0.0.0:8000 --settings=djangoreactredux.settings.dev