from django.db import models

# Create your models here.
class Experience(models.Model):
    position = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField(null=True)
    desc = models.CharField(max_length=200)
    
class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=1000)

class Quote(models.Model):
    text = models.CharField(max_length=100)
    by = models.CharField(max_length=30)

class ToDo(models.Model):
    do = models.CharField(max_length=50)
    due = models.DateField()

class About(models.Model):
    name = models.CharField(max_length=30)
    dob = models.DateField()
    address = models.CharField(max_length=100)
    job_status = models.BooleanField(default=True)
    marr_status = models.BooleanField(default=False)
    hobbies = models.CharField(max_length=100)
    desc = models.CharField(max_length=100)
    