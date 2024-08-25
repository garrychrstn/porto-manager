from rest_framework import serializers
from api.models import *

class ExpSerializer(serializers.ModelSerializer):

    class Meta:
        model = Experience
        fields = '__all__'

class ArtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = '__all__'

class QuoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quote
        fields = '__all__'

class ToDSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'
