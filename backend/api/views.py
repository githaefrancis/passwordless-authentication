from http.client import HTTPResponse
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import User
from .serializer import UserSerializer
from rest_framework import status
from .util import generate_magic_token,generate_otp, send_email, send_sms
from rest_framework.permissions import IsAuthenticated
# Create your views here.
import jwt
import os
class JwtToken():
    def generate_token(payload):
   
        secret=os.environ.get('secret')
        jwt_token={'token':jwt.encode(payload,secret)}
        print(jwt_token)
        return jwt_token
    def verify_token():
        pass


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

        # send_email('francis.githae@quatrixglobal.com')
        # send_sms('+254711405235',otp)
        print(token,otp)
        return Response('user found')
        
class Authenticate(APIView):
    def post(self,request,*args,**kwargs):
        if not request.data and not request.data.token and not request.data.otp :
            return Response({'Error','please provide a token'},status="400")
        token=""
        otp=""
        secret=os.environ.get('secret')

        if 'token' in request.data:
            token=request.data['token']
            print(token)

        if 'otp' in request.data:
            otp=request.data['otp']

        if token:
            try:
                user=User.objects.get(token=token)
                print(user.id)
                print('done checking')
            except User.DoesNotExist:
                return Response({'Error':"Invalid code"},status="400")


        elif otp:
            try:
                user=User.objects.get(OTP=otp)

            except User.DoesNotExist:
                return Response({'Error':"Invalid code"},status="400")

     
        jwt_token=JwtToken.generate_token({'id':user.id})
        decoded_jwt=jwt.decode('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.xJsYv31okFRtiYTYsm8sCUOYVDwXjlBVw2kCciJ7J0M',secret,algorithms=["HS256"])
        print(decoded_jwt)
        return Response(jwt_token,status='200')


class Home(APIView):
    permission_classes=(IsAuthenticated,)
    def get(self,request,*args,**kwargs):
        return Response('Response')