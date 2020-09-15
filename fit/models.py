# -*- coding: utf-8 -*-
from django.db import models

# Create your models here.
from django.contrib.auth.models import User


class Work3(models.Model):
    work_date = models.DateField('作業日', primary_key=True)
    start_time = models.DateTimeField('開始時刻', null=True)
    end_time = models.DateTimeField('終了時刻', null=True)
    workhr = models.CharField('勤務時間', max_length=10, blank=True)
    comment = models.CharField('コメント', max_length=255, blank=True)


class Sleep(models.Model):
    dateOfSleep = models.DateField('睡眠日', primary_key=True)
    deep = models.DecimalField('deep', default=0.00, max_digits=6, decimal_places=2)
    light = models.DecimalField('light', default=0.00, max_digits=6, decimal_places=2)
    rem = models.DecimalField('rem', default=0.00, max_digits=6, decimal_places=2)
    wake = models.DecimalField('wake', default=0.00, max_digits=6, decimal_places=2)
    sleep_time = models.DecimalField('sleep_time', default=0.00, max_digits=6, decimal_places=2)
    image_url = models.URLField('画像URL', blank=True)
    bedtime = models.CharField('就寝時刻', max_length=23, blank=True)


class Heart4(models.Model):
    heart_date = models.OneToOneField(Work3)
    heart_sleep = models.OneToOneField(Sleep)
    image_id = models.DateField('イメージid', blank=True)
    heart_image_url = models.URLField('心拍画像URL', blank=True)
