import os

from django.conf import settings
from django.http import HttpResponse
from django.views.generic import View
from knox.auth import TokenAuthentication
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.template import loader

class IndexView(View):
    """Render main page."""

    def get(self, request):
        """Return html for main application page."""

        template = loader.get_template('base/index.html')
        context = {
        }
        return HttpResponse(template.render(context, request))
#        abspath = open(os.path.join(settings.BASE_DIR, '../static/bundles/index.html'), 'r')
#        return HttpResponse(content=abspath.read())

class ProtectedDataView(GenericAPIView):
    """Return protected data main page."""

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        """Process GET request and return protected data."""

        data = {
            'data': 'THIS IS THE PROTECTED STRING FROM SERVER',
        }
        return Response(data, status = status.HTTP_200_OK)
