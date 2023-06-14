from django.db import models

# Create your models here.

class Detection(models.Model):
        image= models.ImageField(null=True,blank=True,upload_to='')
        predicted_class= models.CharField(max_length=50)
        created_at= models.DateTimeField(auto_now_add=True)