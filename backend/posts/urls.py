from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register(r'carrers', PostViewSet, basename='post')

urlpatterns = [
    path('', include(router.urls)),
]

# Url correta pamonha https://dev.codeleap.co.uk/careers/