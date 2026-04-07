# API Skill

Навык для работы с REST API.

## Capabilities

- Django REST Framework
- Сериализаторы и валидация
- ViewSets и Routers
- Аутентификация (Token, JWT, Knox)
- Пагинация, фильтрация, поиск
- Throttling и permissions

## Usage

```bash
skill: "api"
```

## Project API Structure

```
backend/
├── accounts/
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
└── base/
    ├── serializers.py
    ├── views.py
    └── urls.py
```

## Serializers

```python
from rest_framework import serializers
from accounts.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'gender']
        read_only_fields = ['id', 'date_joined']

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    
    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name']
    
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password']
        )
        return user
```

## ViewSets

```python
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from accounts.models import User
from accounts.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return User.objects.filter(is_active=True)
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def activate(self, request, pk=None):
        user = self.get_object()
        user.is_active = True
        user.save()
        return Response({'status': 'activated'})
```

## URLs

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from accounts.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]
```

## Authentication (Knox)

```python
from rest_framework.authtoken.views import ObtainAuthToken
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken

class LoginApi(KnoxLoginView):
    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        _, token = self.create_token(user)
        return Response({
            'token': token,
            'user': UserSerializer(user).data
        })
```

## API Endpoints проекта

```
GET  /api/v1/accounts/login/
POST /api/v1/accounts/login/
POST /api/v1/accounts/logout/
GET  /api/v1/accounts/me/

GET  /api/v1/getdata/...
```

## Testing API

```python
import pytest
from rest_framework.test import APIClient

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def authenticated_client(api_client, user):
    from knox.models import AuthToken
    token, _ = AuthToken.objects.create(user)
    api_client.credentials(HTTP_AUTHORIZATION=f'Token {token}')
    return api_client

def test_get_users(authenticated_client):
    response = authenticated_client.get('/api/v1/accounts/users/')
    assert response.status_code == 200
```
