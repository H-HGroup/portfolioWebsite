# Generated by Django 5.1.3 on 2025-01-03 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_remove_projects_descrption_projects_fieldofwork_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
