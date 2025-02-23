from django.db import models


class Portfolio(models.Model):
    logo=models.FileField(upload_to='logos/')
    profile_image=models.ImageField(upload_to='profile_image/')
    job_title=models.CharField(max_length=200,default="AI Engineer|Web Developer")
    resume=models.FileField(upload_to='resumes/',blank=True,null=True)

    def __str__(self):
        return "portfolio Data"


class Project(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()
    techonologies=models.CharField(max_length=255)
    project_link=models.URLField(blank=True)
    image=models.ImageField(upload_to='project_images/',blank=True)


    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    message=models.CharField(max_length=1000)
    date=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"message from {self.name}"


class Skill(models.Model):
    name=models.CharField(max_length=200)
    percentage=models.IntegerField()
    icon=models.ImageField(blank=True)


    def __str__(self):
        return self.name

