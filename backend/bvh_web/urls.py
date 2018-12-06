from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.views.decorators.cache import cache_page
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import re_path, path
from django.views.generic import TemplateView
#from django2_url_robots import views as robots_views

from base import views as base_views

urlpatterns = static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
#urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += staticfiles_urlpatterns()
urlpatterns += [
    re_path(r'^api/v1/accounts/', include('accounts.urls')),
    re_path(r'^api/v1/getdata/', include('base.urls')),

    #re_path(r'^profile', include('django2_url_robots.tests.urls_profile')),
    re_path(r'^robots\.txt$', TemplateView.as_view(template_name = 'base/robots.txt', content_type = 'text/plain')),
    re_path(r'^sitemap\.xml$', TemplateView.as_view(template_name = 'base/sitemap.xml', content_type = 'text/plain')),
    # catch all others because of how history is handled by react router - cache this page because it will never change
    re_path(r'', cache_page(settings.PAGE_CACHE_SECONDS)(base_views.IndexView.as_view()), name = 'index'),
]
