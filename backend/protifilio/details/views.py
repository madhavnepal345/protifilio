from django.shortcuts import render
from rest_framework import generics
from  .models import HomeContent,About,Project
from .serializer import *


class HomeContentView(generics.ListAPIView):
    queryset=HomeContent.objects.all()
    serializer_class=HomeContentSerializer

class AboutView(generics.ListAPIView):
    queryset=About.objects.all()
    serializer_class=AboutSerializer


class ProjectView(generics.ListAPIView):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer

    