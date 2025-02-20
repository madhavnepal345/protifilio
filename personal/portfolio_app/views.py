from django.shortcuts import render,redirect
from .models import Project,ContactMessage


def home(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def projects(request):
    all_projects=Project.objects.all()
    return render(request,'projects.html',{'projects':all_projects})

def contact(request):
    if request.method=='POST':
        name=request.POST['name']
        email=request.POST['email']
        message=request.POST['message']
        ContactMessage.objects.create(name=name,email=email,message=message)
        return redirect('contact')
    return render(request,'contact.html')