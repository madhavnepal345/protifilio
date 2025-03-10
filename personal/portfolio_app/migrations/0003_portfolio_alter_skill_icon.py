# Generated by Django 5.1.6 on 2025-02-23 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0002_skill'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.FileField(upload_to='logos/')),
                ('profile_image', models.ImageField(upload_to='profile_image/')),
                ('job_title', models.CharField(default='AI Engineer|Web Developer', max_length=200)),
            ],
        ),
        migrations.AlterField(
            model_name='skill',
            name='icon',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]
