from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'education', views.EducationApiView)  
router.register(r'portfolio', views.ProjectsApiView)   
router.register(r'experience', views.ExperienceApiView)   



urlpatterns = [
    path('', include(router.urls)),
]