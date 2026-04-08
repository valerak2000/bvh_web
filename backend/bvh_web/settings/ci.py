from bvh_web.settings.staging import *  # NOQA (ignore all errors on this line)
from bvh_web.settings.base import DATABASES

db = SECRETS.get('database_test', {})
required_db_keys = ['name', 'user', 'password', 'host', 'port']
missing_keys = [k for k in required_db_keys if not db.get(k)]
if missing_keys:
    raise ImproperlyConfigured(
        f'Missing required database keys in secrets.json: {", ".join(missing_keys)}'
    )
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': db.get('name'),
        'USER': db.get('user'),
        'PASSWORD': db.get('password'),
        'HOST': db.get('host'),
        'PORT': db.get('port'),
    }
}
