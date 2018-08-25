from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _
from django.urls import re_path, path

import accounts.views

app_name = 'accounts'
urlpatterns = [
    re_path(_(r'^register/$'),
        accounts.views.UserRegisterView.as_view(),
        name='register'),
    re_path(_(r'^login/$'),
        accounts.views.UserLoginView.as_view(),
        name='login'),
    re_path(_(r'^confirm/email/(?P<activation_key>.*)/$'),
        accounts.views.UserConfirmEmailView.as_view(),
        name='confirm_email'),
    re_path(_(r'^status/email/$'),
        accounts.views.UserEmailConfirmationStatusView.as_view(),
        name='status'),

]
