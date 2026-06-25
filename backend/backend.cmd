py -3.12 manage.py runserver 0.0.0.0:3000 --settings=bvh_web.settings.dev
rem python manage.py runserver 0.0.0.0:3000 --settings=bvh_web.settings.prod
rem gunicorn --bind 0.0.0.0:3000 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi
