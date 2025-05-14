from rest_framework import serializers
from .models import HomeContent,About,Project


class HomeContentSerializer(serializers.ModelSerializer):
    class Meta:
        model=HomeContent
        fields="__all__"

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model=About
        fields="__all__"

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields="__all__"
        