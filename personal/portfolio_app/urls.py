from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns=[
    path('',views.home,name='home'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('projects/',views.projects,name='projects'),
    path('skills/',views.skills_view,name='skills'),
    path('resume/',views.resume,name='resume')
]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)