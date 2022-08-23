from django.urls import path
from .views import UserList,Login,Authenticate
urlpatterns = [
    path('login/',Login.as_view()),
    path('verify/',Authenticate.as_view()),
    path('',UserList.as_view())
]
