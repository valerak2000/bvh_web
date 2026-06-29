"""Django settings for bvh_web project."""
import json
import os

from django.core.exceptions import ImproperlyConfigured

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PROJECT_NAME = 'bvh_web'

def base_dir_join(*args):
    return os.path.join(BASE_DIR, *args)

# Load secrets from secrets.json file
SECRETS_FILE = base_dir_join('secrets.json')
SECRETS = {}
if os.path.exists(SECRETS_FILE):
    try:
        with open(SECRETS_FILE, 'r', encoding='utf-8') as f:
            SECRETS = json.load(f)
    except (json.JSONDecodeError, OSError) as e:
        raise ImproperlyConfigured(f'Failed to parse secrets.json: {e}')

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = SECRETS.get('secret_key', os.environ.get('DJANGO_SECRET_KEY', ''))
if not SECRET_KEY:
    raise ImproperlyConfigured(
        'Set SECRET_KEY in secrets.json or DJANGO_SECRET_KEY environment variable'
    )

DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Application definition
INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'django.contrib.messages',
    'django.contrib.sessions',
    'django.contrib.admin',
    'rest_framework',
    'knox',
    'django_extensions',
    'django_js_reverse',
    'webpack_loader',
    'accounts',
    'base'
)

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.cache.UpdateCacheMiddleware',
    'django.middleware.cache.FetchFromCacheMiddleware',
]
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [base_dir_join("templates"),],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

ROOT_URLCONF = PROJECT_NAME + '.urls'
WSGI_APPLICATION = PROJECT_NAME + '.wsgi.application'

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTH_USER_MODEL = 'accounts.User'

ACCOUNT_ACTIVATION_DAYS = 7  # days

STATICFILES_DIRS = (
    # ...
    ('bundles', base_dir_join('../static/bundles')),
    ('images', base_dir_join('../static/images')),
    ('files', base_dir_join('../static/files')),
    ('fonts', base_dir_join('../static/fonts')),
    ('public', base_dir_join('../static/public')),
)

# ############# REST FRAMEWORK ###################
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
    ),
}

# ############ REST KNOX ########################
REST_KNOX = {
    'SECURE_HASH_ALGORITHM': 'hashlib.sha512',
    'AUTH_TOKEN_CHARACTER_LENGTH': 64,
    'USER_SERIALIZER': 'knox.serializers.UserSerializer'
}
#print(BASE_DIR)
WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'bundles/', # must end with slash
        'STATS_FILE': base_dir_join('../frontend/webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': ['.+\.hot-update.js', '.+\.map']
    }
}

JS_REVERSE_EXCLUDE_NAMESPACES = []
