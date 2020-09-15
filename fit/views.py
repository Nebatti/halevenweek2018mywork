# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect

# Create your views here.
from django.shortcuts import get_object_or_404

# フォームのインポート
from .forms import Work2Form

# モデルのインポート
from .models import Work3
from .models import Heart4
from .models import Sleep

# 時を扱うライブラリをインポート
import datetime
from pytz import timezone

headers = {    'authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkNLTlYiLCJzdWIiOiI2NEI5N0MiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTk4NjEyMzQ2LCJpYXQiOjE1OTg1ODM1NDZ9.RpVj8txT789H_DvWE40XG4HRyEBHj5_zkUr3D92hHZg"    }

# ページネーター
from django.core.paginator import (
    Paginator,  # ページネーター本体のクラス
    EmptyPage,  # ページ番号が範囲外だった場合に発生する例外クラス
    PageNotAnInteger  # ページ番号が数字でなかった場合に発生する例外クラス
)

# HttpResponseクラスのインポート
from django.template.response import TemplateResponse

# ビュー

def _get_page(list_, page_no, count=7):
    """ページネーターを使い、表示するページ情報を取得する"""
    paginator = Paginator(list_, count)
    try:
        page = paginator.page(page_no)
    except (EmptyPage, PageNotAnInteger):
        # page_noが指定されていない場合、数値で無い場合、範囲外の場合は
        # 先頭のページを表示する
        page = paginator.page(1)
    return page


def heart(request):
    page = _get_page(
        Heart4.objects.order_by('-heart_date'),  # 新しい順に並び替えて取得する
        request.GET.get('page')  # GETクエリからページ番号を取得する
    )
    # 心拍記録を取得し、辞書に格納
    context = {
        'hearts': Heart4.objects.all().order_by('-heart_date'),  # この行は不要かも
        'page': page,
    }
    return TemplateResponse(request, 'fit/heart.html', context=context)


def sleep(request):
    page = _get_page(
        Sleep.objects.order_by('-dateOfSleep'),  # 新しい順に並び替えて取得する
        request.GET.get('page')  # GETクエリからページ番号を取得する
    )
    # 睡眠記録をDBから取得し、辞書に格納
    context = {
        'sleeps': Sleep.objects.all().order_by('-dateOfSleep'),
        'page': page,
    }
    return TemplateResponse(request, 'fit/sleep.html', context=context)


def dakoku(request):
    page = _get_page(
        Work3.objects.order_by('-work_date'),  # 新しい順に並び替えて取得する
        request.GET.get('page')  # GETクエリからページ番号を取得する
    )
    form = Work2Form(request.POST or None)
    d = {
        'works': Work3.objects.all().order_by('-work_date'),
        'form': form,
        'page': page,
    }
    return render(request, 'fit/dakoku.html', d)


def add(request):
    form = Work2Form(request.POST or None)
    if form.is_valid():
        Work3.objects.create(**form.cleaned_data)
        return redirect('fit:dakoku')

    d = {
        'works': Work3.objects.all(),
        'form': form,
    }
    return render(request, 'fit/dakoku.html', d)


# コメントの編集
def edit(request, editing_date):
    work = get_object_or_404(Work3, work_date=editing_date)
    nowtime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    if request.method == 'POST':
        form = Work2Form(request.POST)
        if form.is_valid():
            work.end_time = form.cleaned_data['end_time']
            work.workhr = form.cleaned_data['workhr']
            work.comment = form.cleaned_data['comment']
            work.save()
            return redirect('fit:dakoku')
    else:
        # GETリクエスト（初期表示）時はDBに保存されているデータをFormに結びつける
        form = Work2Form({
            'work_date': work.work_date,
            'start_time': work.start_time,
            'end_time': work.end_time,
            'workhr': work.workhr,
            'comment': work.comment,
            })
    d = {
        'form': form,
    }
    return render(request, 'fit/edit.html', d)


def now(request):
    # 現在の心拍データ
    context = {}
    return TemplateResponse(request, 'fit/now.html', context=context)


def dakoku_start(request):
    form = Work2Form(request.POST or None)
    nowday = datetime.date.today().strftime("%Y-%m-%d")
    nowtime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    work = Work3()
    work.work_date = nowday
    work.start_time = nowtime
    work.save()
    page = _get_page(
        Work3.objects.order_by('-work_date'),  # 新しい順に並び替えて取得する
        request.GET.get('page')  # GETクエリからページ番号を取得する
    )
    form = Work2Form(request.POST or None)
    d = {
        'works': Work3.objects.all().order_by('-work_date'),
        'form': form,
        'page': page,
    }
    return render(request, 'fit/dakoku.html', d)


def dakoku_end(request):
    nowday = datetime.date.today().strftime("%Y-%m-%d")
    work = get_object_or_404(Work3, work_date=nowday)
    nowtime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    work.end_time = nowtime
    starttime_time = work.start_time.astimezone(timezone('Asia/Tokyo'))
    starttime_str = starttime_time.strftime('%Y-%m-%d %H:%M:%S')
    starttime_time2 = datetime.datetime.strptime(starttime_str, '%Y-%m-%d %H:%M:%S')
    nowtime_time = datetime.datetime.strptime(nowtime, '%Y-%m-%d %H:%M:%S')
    worktime = nowtime_time - starttime_time2
    work.workhr = worktime 
    work.save()
    page = _get_page(
        Work3.objects.order_by('-work_date'),  # 新しい順に並び替えて取得する
        request.GET.get('page')  # GETクエリからページ番号を取得する
    )
    form = Work2Form(request.POST or None)
    d = {
        'works': Work3.objects.all().order_by('-work_date'),
        'form': form,
        'page': page,
    }
    return render(request, 'fit/dakoku.html', d)

    
if __name__ == "__main__":
    detaimport(request)



