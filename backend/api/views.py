from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import User
from .serializer import UserSerializer
from rest_framework import status
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