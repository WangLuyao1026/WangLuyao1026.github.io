---
layout: page
title: Experience
permalink: /experience/
description: 工作经历与专业实践 | Professional Experience
nav: true
nav_order: 3
---

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">

<div class="research-container mt-5">

  <section class="mb-6">
    <h2 class="section-title mb-4">
      01 检察日报·山东记者站
      <br>
      <small style="font-size: 65%; color: #666; font-weight: 400; font-family: 'Lora', serif;">
        —— 济南市历下区人民检察院
      </small>
    </h2>
    
    <div class="card border-0 shadow-lg thesis-card mb-4">
      <div class="card-body p-2">
        <img src="/assets/img/工作经历1.png" class="img-fluid rounded" alt="工作经历1" style="width: 100%;">
      </div>
    </div>

    <div class="card border-0 shadow-lg thesis-card">
      <div class="card-body p-2">
        <img src="/assets/img/工作经历2.png" class="img-fluid rounded" alt="工作经历2" style="width: 100%;">
      </div>
    </div>
  </section>

  <hr class="divider my-6" style="border-top: 1px dashed #ddd;">

  <section class="mb-6">
    <h2 class="section-title mb-4">
      02 山东省委政法委·济南市铁路局
      <span style="color: #ddd; margin: 0 10px;">/</span>
      03 大众报业集团·齐鲁融媒
    </h2>

    <div class="card border-0 shadow-lg thesis-card">
      <div class="card-body p-2">
        <img src="/assets/img/工作经历3.png" class="img-fluid rounded" alt="工作经历3" style="width: 100%;">
      </div>
    </div>
  </section>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体优化 (与 Research 保持一致) */
  body, p, li, h1, h2, h3, h4, h5, .navbar {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important;
    color: #2c3e50;
  }
  .navbar { font-weight: 600 !important; }

  /* 2. 页面顶部大标题修正 (Experience) */
  /* 确保顶部标题是黑色、无边框，对齐 Research 顶部的 "Research" */
  .post-title, h1 {
    font-family: 'Playfair Display', serif !important;
    font-weight: 800 !important;
    color: #000 !important; /* 黑色 */
    font-size: 2.5rem !important;
    border-left: none !important; /* 无紫线 */
    padding-left: 0 !important;
    margin-bottom: 0.5rem !important;
  }
  
  .post-description, .page-description {
    font-size: 1.1rem !important;
    color: #666 !important;
    margin-bottom: 4rem !important;
  }

  /* 3. 内部章节标题 (.section-title) */
  /* 这里才有紫线，对齐 Research 的 "本科毕业论文" */
  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    font-size: 1.8rem;
    font-family: 'Playfair Display', "PingFang SC", serif !important;
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
    line-height: 1.3;
  }

  /* 4. 容器与卡片样式 (复用 Research) */
  .research-container { max-width: 1100px; margin: auto; }
  
  .thesis-card {
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
    transition: transform 0.3s ease;
  }
  .thesis-card:hover {
    transform: translateY(-5px); /* 增加一点悬浮动效 */
  }

  .my-6 { margin-top: 5rem; margin-bottom: 5rem; }
</style>
