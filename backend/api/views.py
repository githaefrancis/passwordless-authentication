from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import User
from .serializer import UserSerializer
from rest_framework import status
from .util import generate_magic_token,generate_otp, send_email
# Create your views here.

class UserList(APIView):
    def get(self,request,format=None):
        all_users=User.objects.all()
        serializers=UserSerializer(all_users,many=True)
        return Response(serializers.data)

    def post(self,request,format=None):
        serializers=UserSerializer(data=request.data)
        print(request.data)
        if serializers.is_valid():
            serializers.save()
            print('here')
            return Response(serializers.data, status=status.HTTP_201_CREATED)

        return HttpResponse(serializers)


class Login(APIView):
    def post(self,request,*args,**kwargs):
        if not request.data:
            return Response({'Error','please provide a valid email or phone'},status="400")

        email=request.data['email']

        try:
            user=User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'Error':"Invalid username/password"},status="400")

        token=generate_magic_token()
        otp=generate_otp()
        

        user.token=token
        user.OTP=otp
        user.save()

        send_email('francis.githae@quatrixglobal.com')
        return Response('user found')
        

        