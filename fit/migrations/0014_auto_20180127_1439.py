# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-01-27 05:39
from __future__ import unicode_literals

from django.db import migrations, models
import fit.models


class Migration(migrations.Migration):

    dependencies = [
        ('fit', '0013_auto_20180127_1435'),
    ]

    operations = [
        migrations.AlterField(
            model_name='heart3',
            name='heart_date',
            field=models.OneToOneField(on_delete=fit.models.Sleep, to='fit.Work2'),
        ),
    ]
