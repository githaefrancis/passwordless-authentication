# Generated by Django 4.0.6 on 2022-08-26 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='OTP',
            field=models.CharField(blank=True, max_length=6),
        ),
        migrations.AlterField(
            model_name='user',
            name='token',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
