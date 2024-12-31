from django.db import models

# Create your models here.
class Education(models.Model):
    school = models.CharField(max_length=100)
    years = models.CharField(max_length=50)
    univercity = models.CharField(max_length=50)
    degree = models.CharField(max_length=50)
    descrption = models.TextField()
    order = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.school} added"


class Experience(models.Model):
    title = models.CharField(max_length=50)
    descrption = models.TextField()
    years = models.CharField(max_length=50)
    order = models.IntegerField(default=1)

    
    def __str__(self):
        return f"{self.title} added"


class Projects(models.Model):
    title = models.CharField(max_length=50)
    descrption = models.TextField()
    image = models.ImageField(upload_to='uploads/', null=True, blank=True)
    url = models.URLField(max_length=200)
    order = models.IntegerField(default=1)
    
    def __str__(self):
        return f"{self.title} added"