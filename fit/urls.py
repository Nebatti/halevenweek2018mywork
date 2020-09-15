# -*- coding: utf-8 -*-
#url()関数のインポート
from django.conf.urls import url
from . import views

#ルーティングの設定
urlpatterns = [
    
    # 打刻
    url(r'^dakoku$', views.dakoku, name='dakoku'),
    url(r'^add/$', views.add, name='add'),
    url(r'^edit/(?P<editing_date>[-\w]+)/$', views.edit, name='edit'),
    
    # 心拍一覧
    url(r'^heart/$', views.heart, name='heart'),
    
    # 睡眠一覧
    url(r'^sleep/$', views.sleep, name='sleep'),

    # 現在の心拍状態
    url(r'^now/$', views.now, name='now'),

    # 打刻出勤
    url(r'^start/$', views.dakoku_start, name='dakoku_start'),
    
    # 打刻退勤
    url(r'^end/$', views.dakoku_end, name='dakoku_end'),
    
]