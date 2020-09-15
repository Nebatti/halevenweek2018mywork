# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-01-27 03:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fit', '0011_heart2'),
    ]

    operations = [
        migrations.CreateModel(
            name='Heart3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_id', models.DateField(blank=True, verbose_name='イメージid')),
                ('heart_image_url', models.URLField(blank=True, verbose_name='心拍画像URL')),
            ],
        ),
        migrations.CreateModel(
            name='Sleep',
            fields=[
                ('dateOfSleep', models.DateField(primary_key=True, serialize=False, verbose_name='睡眠日')),
                ('deep', models.DecimalField(decimal_places=2, default=0.0, max_digits=6, verbose_name='deep')),
                ('light', models.DecimalField(decimal_places=2, default=0.0, max_digits=6, verbose_name='light')),
                ('rem', models.DecimalField(decimal_places=2, default=0.0, max_digits=6, verbose_name='rem')),
                ('wake', models.DecimalField(decimal_places=2, default=0.0, max_digits=6, verbose_name='wake')),
                ('sleep_time', models.DecimalField(decimal_places=2, default=0.0, max_digits=6, verbose_name='sleep_time')),
                ('image_url', models.URLField(blank=True, verbose_name='画像URL')),
                ('bedtime', models.CharField(blank=True, max_length=23, verbose_name='就寝時刻')),
            ],
        ),
        migrations.CreateModel(
            name='Work3',
            fields=[
                ('work_date', models.DateField(primary_key=True, serialize=False, verbose_name='作業日')),
                ('start_time', models.DateTimeField(null=True, verbose_name='開始時刻')),
                ('end_time', models.DateTimeField(null=True, verbose_name='終了時刻')),
                ('workhr', models.CharField(blank=True, max_length=10, verbose_name='勤務時間')),
                ('comment', models.CharField(blank=True, max_length=255, verbose_name='コメント')),
            ],
        ),
        migrations.AddField(
            model_name='heart3',
            name='heart_date',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='fit.Sleep'),
        ),
    ]