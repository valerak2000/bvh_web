"""
WSGI config for bvh_web project.

"""
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bvh_web.settings.dev")

application = get_wsgi_application()
