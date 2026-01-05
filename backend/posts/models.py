from django.db import models

# Create your models here.

class Post(models.Model):
    username = models.CharField(max_length=100)
    created_datetime = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    content = models.TextField()

    class Meta:
        ordering = ['-created_datetime']

    def __str__(self):
        return f"{self.username} - {self.title}"
