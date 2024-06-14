from django.db import models

# Create your models here.


class AppServer(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, default='asas@gmail.ff')
    activity = models.CharField(max_length=100)
    space = models.CharField(max_length=100)
