# Generated by Django 5.1.3 on 2025-01-03 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projects',
            name='descrption',
        ),
        migrations.AddField(
            model_name='projects',
            name='fieldOfWork',
            field=models.CharField(default='nothing', max_length=50),
        ),
        migrations.AddField(
            model_name='projects',
            name='tip1',
            field=models.CharField(default='nothing', max_length=50),
        ),
        migrations.AddField(
            model_name='projects',
            name='tip2',
            field=models.CharField(default='nothing', max_length=50),
        ),
        migrations.AddField(
            model_name='projects',
            name='tip3',
            field=models.CharField(default='nothing', max_length=50),
        ),
        migrations.AddField(
            model_name='projects',
            name='year',
            field=models.CharField(default='nothing', max_length=50),
        ),
    ]