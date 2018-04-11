from djangoreactredux.settings.dev import *  # NOQA (ignore all errors on this line)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'djangoreactredux_dev',
        'USER': 'djangoreactredux',
        'PASSWORD': '123',
        'HOST': 'localhost',
        'PORT': 5432,
    }
}
