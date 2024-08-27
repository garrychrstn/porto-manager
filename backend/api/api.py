from api.models import *
from rest_framework import viewsets, permissions
from . serializer import *

# VIEWSET -> CRUD API
class ExpViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExpSerializer

class ArtViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArtSerializer

class QuoViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuoSerializer

class ToDViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ToDSerializer

class AboViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AboSerializer