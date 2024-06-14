from rest_framework import serializers
from .models import AppServer


class AppServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppServer
        fields = '__all__'
