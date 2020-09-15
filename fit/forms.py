# -*- coding: utf-8 -*-
# ModelFormのインポート
from django.forms import ModelForm

from .models import Work3
from django import forms


#フォームの宣言
class WorkForm(ModelForm):
    class Meta:
        model = Work3
        fields = [
            'work_date', 'start_time', 'end_time', 'comment'
        ]


class Work2Form(forms.Form):
    work_date = forms.DateField(
        label='作業日',
        required=True,
        input_formats=[
            '%Y-%m-%d',  # 2010-01-01
        ]
    )
    
    start_time = forms.DateTimeField(
        label='開始時間',
        required=False,
        input_formats=[
            '%Y-%m-%d %H:%M:%S',  # 2006-10-25 14:30:59
        ]
    )

    end_time = forms.DateTimeField(
        label='終了時間',
        required=False,
        input_formats=[
            '%Y-%m-%d %H:%M:%S',  # 2006-10-25 14:30:59
        ]
    )

    workhr = forms.CharField(
        label='作業時間',
        max_length=10,
        required=False,
        widget=forms.TextInput()
    )

    comment = forms.CharField(
        label='コメント',
        max_length=255,
        required=False,
        widget=forms.TextInput()
    )

