from django.contrib import admin
from .models import Project,ContactMessage,Skill,Portfolio

admin.site.register(Project)
admin.site.register(ContactMessage)
admin.site.register(Portfolio)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'percentage','icon')