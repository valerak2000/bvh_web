python manage.py runserver 0.0.0.0:8080 --settings=bvh_web.settings.dev
rem python manage.py runserver 0.0.0.0:8080 --settings=bvh_web.settings.prod
rem gunicorn --bind 0.0.0.0:8080 --env DJANGO_SETTINGS_MODULE=bvh_web.settings.prod bvh_web.wsgi
