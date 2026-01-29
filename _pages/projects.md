---
layout: page
title: Portfolio
permalink: /projects/
description: 个人作品集 | Selected Works
nav: true
nav_order: 4
---

<div class="projects-container mt-4">
  {% assign projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2 g-5">
    {% for project in projects %}
    <div class="col">
      <a href="{{ project.url | relative_url }}" class="project-card-link">
        <div class="card h-100 shadow-sm border-0 project-card">
          {% if project.img %}
          <div class="card-img-container">
            <img src="{{ project.img | relative_url }}" class="card-img-top" alt="{{ project.title }}">
          </div>
          {% endif %}
          <div class="card-body p-4">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-text">{{ project.description }}</p>
            <div class="project-tag">
              <span class="badge">查看详情</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>

<style>
  /* 整体背景与字体 */
  .projects-container {
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }

  /* 卡片基础样式 */
  .project-card {
    border-radius: 12px !important;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background: #ffffff;
  }

  /* 悬浮效果：位移 + 阴影加深 */
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(77, 0, 153, 0.15) !important;
  }

  /* 图片容器：固定高度，裁切填充 */
  .card-img-container {
    height: 220px;
    overflow: hidden;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-card:hover .card-img-top {
    transform: scale(1.05);
  }

  /* 标题：NJU紫色调 */
  .card-title {
    font-size: 1.4rem !important;
    font-weight: 700 !important;
    color: #4D0099; /* 南大紫 */
    margin-bottom: 12px;
  }

  /* 描述文字：增加行距，颜色变淡 */
  .card-text {
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    color: #555 !important;
    height: 3em; /* 限制高度保持整齐 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /* 标签/按钮样式 */
  .badge {
    background-color: transparent;
    color: #4D0099;
    border: 1px solid #4D0099;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 500;
  }

  .project-card:hover .badge {
    background-color: #4D0099;
    color: white;
  }

  /* 去掉链接默认下划线 */
  .project-card-link {
    text-decoration: none !important;
  }
  .project-card-link:hover {
    text-decoration: none !important;
  }

  /* 响应式间距优化 */
  @media (max-width: 768px) {
    .g-5 { gap: 2rem !important; }
    .card-img-container { height: 180px; }
  }
</style>
