from django.test import TestCase
from users.models import User
# Create your tests here.
class TestUser(TestCase):


    def setUp(self):
        self.new_user=User(email="francis.githae@quatrixglobal.com")

    def test_create_user(self):
        self.new_user.save()
        self.assertTrue(len(User.objects.all())>0)


