from django.shortcuts import render,redirect
from .models import Project,ContactMessage,Skill,Portfolio


def home(request):
    portfolio = Portfolio.objects.first() 
    return render(request,'index.html',{'portfolio':portfolio})


def resume(request):
    portfolio=Portfolio.objects.first()
    return render(request,'resume.html',{'portfolio':portfolio})

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



def skills_view(request):
    skills=Skill.objects.all()
    return render(request,'skills.html',{'skills':skills})