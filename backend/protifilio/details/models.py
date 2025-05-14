from django.db import models

class HomeContent(models.Model):
    name=models.CharField(max_length=50)
    subtitle=models.CharField(max_length=100)


    def __str__(self):
        return self.title


class About(models.Model):
    title=models.CharField(max_length=30)
    content=models.TextField()

    def __str__(self):
        return self.title



class Project(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()
    techonologies=models.CharField(max_length=200)
    image=models.ImageField(upload_to='projects/',blank=True,null=True)
    github_url=models.URLField(blank=True,null=True,verbose_name="Github Url")
    Live_url=models.URLField(blank=True,null=True,verbose_name='Live Url')
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    
    class Meta:
        ordering=['created_at']
