from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from .models import Education, Projects, Experience
from .serializers import UserSerializer, ExperienceSerializer, ProjectsSerializer, EducationSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]



class ProjectsApiView(viewsets.ModelViewSet):
    queryset = Projects.objects.order_by('order').all()
    serializer_class = ProjectsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
class EducationApiView(viewsets.ModelViewSet):
    queryset = Education.objects.order_by('order').all()
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ExperienceApiView(viewsets.ModelViewSet):
    queryset = Experience.objects.order_by('order').all()
    serializer_class = ExperienceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
