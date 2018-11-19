from bvh_web.settings.base import *  # NOQA (ignore all errors on this line)

DEBUG = False
TEMPLATE_DEBUG = DEBUG

PAGE_CACHE_SECONDS = 60

# TODO: n a real production server this should have a proper url
ALLOWED_HOSTS.extend([])
print(ALLOWED_HOSTS)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'djangoreactredux_dev',
        'USER': 'djangoreactredux',
        'PASSWORD': '123',
        'HOST': 'localhost',
        'PORT': 5433,
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = base_dir_join('../static')

MEDIA_URL = '/media/'
MEDIA_ROOT = base_dir_join('../media')

SERVER_EMAIL = 'admin@bruvodokanal.ru'

EMAIL_HOST = 'smtp.mail.ru'
EMAIL_HOST_USER = '' #config('SENDGRID_USERNAME')
EMAIL_HOST_PASSWORD = '' #config('SENDGRID_PASSWORD')
EMAIL_PORT = 465
EMAIL_USE_TLS = True

# Security
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = 3600
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = False

SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
X_FRAME_OPTIONS = 'DENY'
CSRF_COOKIE_HTTPONLY = True

# Webpack
WEBPACK_LOADER['DEFAULT']['CACHE'] = True

# Whitenoise
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
MIDDLEWARE.insert(  # insert WhiteNoiseMiddleware right after SecurityMiddleware
MIDDLEWARE.index('django.middleware.security.SecurityMiddleware') + 1,
    'whitenoise.middleware.WhiteNoiseMiddleware')

# django-log-request-id
MIDDLEWARE.insert(  # insert RequestIDMiddleware on the top
    0, 'log_request_id.middleware.RequestIDMiddleware')

LOG_REQUEST_ID_HEADER = 'HTTP_X_REQUEST_ID'
LOG_REQUESTS = True

REST_FRAMEWORK['EXCEPTION_HANDLER'] = 'django_rest_logger.handlers.rest_exception_handler'  # NOQA (ignore all errors on this line)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        },
        'request_id': {
            '()': 'log_request_id.filters.RequestIDFilter'
        },
    },
    'formatters': {
        'standard': {
            'format': '%(levelname)-8s [%(asctime)s] [%(request_id)s] %(name)s: %(message)s'
        },
    },
    'handlers': {
        'null': {
            'class': 'logging.NullHandler',
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'filters': ['require_debug_false'],
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'filters': ['request_id'],
            'formatter': 'standard',
        },
    },
    'loggers': {
        '': {
            'handlers': ['console'],
            'level': 'INFO'
        },
        'django.security.DisallowedHost': {
            'handlers': ['null'],
            'propagate': False,
        },
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
        'log_request_id.middleware': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': False,
        },
    }
}

JS_REVERSE_EXCLUDE_NAMESPACES = ['admin']

########### Sentry configuration
# Change this to proper sentry url.
RAVEN_CONFIG = {
    'dsn': '',
}

INSTALLED_APPS = INSTALLED_APPS + (  # NOQA (ignore all errors on this line)
    'raven.contrib.django.raven_compat',
)
'''
####### Logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,
    'root': {
        'handlers': ['sentry'],
        'level': 'WARNING',
    },
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s '
                      '%(process)d %(thread)d %(message)s'
        },
    },
    'handlers': {
        'sentry': {
            'level': 'ERROR',
            'class': 'raven.contrib.django.raven_compat.handlers.SentryHandler',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose'
        }
    },
    'loggers': {
        'django.db.backends': {
            'level': 'ERROR',
            'handlers': ['console'],
            'propagate': False,
        },
        'raven': {
            'level': 'DEBUG',
            'handlers': ['sentry'],
            'propagate': False,
        },
        'sentry.errors': {
            'level': 'DEBUG',
            'handlers': ['sentry'],
            'propagate': False,
        },
    },
}
'''

DEFAULT_LOGGER = 'raven'

LOGGER_EXCEPTION = DEFAULT_LOGGER
LOGGER_ERROR = DEFAULT_LOGGER
LOGGER_WARNING = DEFAULT_LOGGER
