# Generated by Django 5.1.4 on 2024-12-31 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=100)),
                ('years', models.CharField(max_length=50)),
                ('univercity', models.CharField(max_length=50)),
                ('degree', models.CharField(max_length=50)),
                ('descrption', models.TextField()),
                ('order', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('descrption', models.TextField()),
                ('years', models.CharField(max_length=50)),
                ('order', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('descrption', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploads/')),
                ('url', models.URLField()),
                ('order', models.IntegerField(default=1)),
            ],
        ),
    ]