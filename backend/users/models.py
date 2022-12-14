from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager


class MyUserManager(BaseUserManager):
    def create_user(self,id=None,name=None,phone=None,email=None,token=None,OTP=None):
        """
        Creates a new user
        """

        if not phone and not email:
            raise ValueError('Provide either phone or email')

        user=self.model(
            name=name,phone=phone,email=email
        )
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    name=models.CharField(max_length=100)
    phone=models.CharField(max_length=15,unique=True,blank=True,null=True)
    email=models.CharField(max_length=100,unique=True,blank=True,null=True)
    token=models.CharField(max_length=500,blank=True)
    created_at=models.DateTimeField(auto_now=True)
    OTP=models.CharField(max_length=6,blank=True)
    USERNAME_FIELD= 'email'

    objects=MyUserManager()

    def __str__(self):
        return self.name


