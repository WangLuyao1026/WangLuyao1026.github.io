---
layout: page
title: Experience
permalink: /experience/
description: 工作经历与专业实践 | Professional Experience
nav: true
nav_order: 3
---

<div class="experience-container mt-5">

  <div class="mb-6">
    <div class="custom-title-wrapper mb-4">
      <div class="purple-bar"></div>
      <span class="title-icon">💼</span> <h2 class="custom-header-text">
        01 检察日报·山东记者站 <span class="divider">|</span> 济南市历下区人民检察院
      </h2>
    </div>

    <div class="card border-0 shadow-lg image-only-card p-3 p-md-4">
      <div class="row g-3">
        <div class="col-12">
          <img src="/assets/img/工作经历1.png" class="exp-img-full shadow-sm" alt="工作经历1">
        </div>
        <div class="col-12">
          <img src="/assets/img/工作经历2.png" class="exp-img-full shadow-sm" alt="工作经历2">
        </div>
      </div>
    </div>
  </div>


  <div class="mb-6">
    <div class="custom-title-wrapper mb-4">
      <div class="purple-bar"></div>
      <span class="title-icon">💼</span>
      <h2 class="custom-header-text">
        02 山东省委政法委·济南市铁路局 <span class="divider">/</span> 03 大众报业集团·齐鲁融媒
      </h2>
    </div>

    <div class="card border-0 shadow-lg image-only-card p-3 p-md-4">
      <div class="col-12">
        <img src="/assets/img/工作经历3.png" class="exp-img-full shadow-sm" alt="工作经历3">
      </div>
    </div>
  </div>

</div>

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&display=swap" rel="stylesheet">

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体配置 */
  body, p, li, h1, h2, h3, h4, h5, .navbar {
    font-family: 'Lora', "Noto Serif SC", "PingFang SC", serif !important;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
    line-height: 1.9;
    color: #2c3e50;
  }
  .navbar { font-weight: 600 !important; }

  /* 2. 容器设置 */
  .experience-container { max-width: 1000px; margin: auto; }
  .mb-6 { margin-bottom: 5rem; }

  /* ========================================= */
  /* [核心] 自定义标题样式 (复刻参考图) */
  /* ========================================= */
  .custom-title-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 5px;
  }

  /* 紫色竖条 */
  .purple-bar {
    width: 8px; /* 竖条宽度 */
    height: 40px; /* 竖条高度，可根据文字高度微调 */
    background-color: var(--nju-purple);
    margin-right: 15px; /* 竖条与图标的间距 */
  }

  /* 图标 */
  .title-icon {
    font-size: 1.8rem;
    margin-right: 10px;
    margin-bottom: 4px; /* 微调垂直对齐 */
  }

  /* 文字样式 */
  .custom-header-text {
    font-family: 'Playfair Display', "Noto Serif SC", serif !important;
    font-weight: 800; /* 加粗 */
    font-size: 1.8rem;
    color: var(--nju-purple);
    margin: 0;
    line-height: 1.2;
    padding-top: 2px;
  }

  /* 分隔符样式 */
  .divider {
    color: #ccc;
    font-weight: 300;
    margin: 0 5px;
  }

  /* ========================================= */
  /* 图片容器样式 */
  /* ========================================= */
  .image-only-card {
    background: #fff;
    border-radius: 12px;
    /* 这里的 padding 由 class="p-3 p-md-4" 控制，给图片留白 */
  }

  .exp-img-full {
    width: 100%;
    height: auto;
    border-radius: 6px;
    display: block;
    object-fit: contain; /* 保证图片完整显示不被裁切 */
  }
  
  /* 移动端适配 */
  @media (max-width: 768px) {
    .purple-bar { height: 32px; width: 6px; }
    .title-icon { font-size: 1.5rem; }
    .custom-header-text { font-size: 1.3rem; }
  }
</style>
