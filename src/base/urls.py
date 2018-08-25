from django.conf.urls import url
from base import views as base_views
from django.urls import re_path, path

app_name = 'base'
urlpatterns = [
    re_path(r'',
        base_views.ProtectedDataView.as_view(),
        name='protected_data'),
]
