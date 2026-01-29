---
layout: page
title: Portfolio
permalink: /projects/
description: 个人作品集 | Selected Works
nav: true
nav_order: 4
---

<div class="projects-container">
  <h2 class="section-title">🖼️ 图文作品 | Graphic & Design</h2>
  {% assign projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
    {% for project in projects %}
    <div class="col">
      <div class="card h-100 shadow-sm border-0">
        <img src="{{ project.img | relative_url }}" class="card-img-top" alt="{{ project.title }}">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <a href="{{ project.url | relative_url }}" class="btn-detail">查看详情</a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <hr class="my-5">

  <h2 class="section-title">🎬 微电影微视频作品 | Video Works</h2>
  <div class="video-section">
    
    <div class="video-item mb-5">
      <img src="/assets/img/作品列举1.png" class="img-fluid rounded mb-3" alt="作品列举1">
    </div>

    <div class="video-item mb-5">
      <img src="/assets/img/作品列举2.png" class="img-fluid rounded mb-3" alt="作品列举2">
      <div class="video-wrapper">
        <a href="/assets/video/《微光》.mp4" class="video-btn">▶️ 观看《微光》完整视频</a>
      </div>
    </div>

    <div class="video-item mb-5">
      <img src="/assets/img/作品列举3.png" class="img-fluid rounded mb-3" alt="作品列举3">
      <div class="video-wrapper">
        <a href="/assets/video/《大数据的力量——检察创新》.mp4" class="video-btn">▶️ 观看《大数据的力量》</a>
      </div>
    </div>

    <div class="video-item mb-5">
      <img src="/assets/img/作品列举4.png" class="img-fluid rounded mb-3" alt="作品列举4">
      <div class="video-wrapper">
        <a href="/assets/video/《守护明天 检爱少年》——2022历下未检纪实.mp4" class="video-btn">▶️ 观看《守护明天》纪实</a>
      </div>
    </div>

  </div>
</div>

<style>
  .section-title { color: #4D0099; font-weight: 800; margin-bottom: 2rem; border-left: 6px solid #4D0099; padding-left: 15px; }
  .video-btn {
    display: inline-block; padding: 12px 25px; background: #4D0099; color: white !important;
    border-radius: 8px; text-decoration: none; font-weight: bold; transition: 0.3s;
  }
  .video-btn:hover { background: #330066; transform: scale(1.02); }
  .video-wrapper { text-align: center; margin-top: 10px; }
  .card-img-top { height: 200px; object-fit: cover; }
  .btn-detail { color: #4D0099; font-weight: bold; text-decoration: none; }
  .my-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
</style>
