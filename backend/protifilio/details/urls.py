from django.urls import path
from .views import AboutView,HomeContentView,ProjectView

urlpatterns=[
    path('home/',HomeContentView.as_view()),
    path('about/',AboutView.as_view()),
    path('projects/',ProjectView.as_view()),
]