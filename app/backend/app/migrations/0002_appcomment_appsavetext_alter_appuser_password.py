# Generated by Django 4.2.9 on 2024-02-28 00:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppComment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Comment', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='AppSaveText',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('savecontent', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='appuser',
            name='password',
            field=models.CharField(max_length=50),
        ),
    ]
