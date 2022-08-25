from django.urls import path
from .views import UserList,Login,Authenticate,Home
urlpatterns = [
    path('login/',Login.as_view()),
    path('verify/',Authenticate.as_view()),
    path('home/',Home.as_view()),
    path('',UserList.as_view())
]
