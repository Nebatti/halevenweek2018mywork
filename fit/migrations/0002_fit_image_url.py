# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-28 04:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fit', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fit',
            name='image_url',
            field=models.URLField(blank=True, verbose_name='画像URL'),
        ),
    ]
