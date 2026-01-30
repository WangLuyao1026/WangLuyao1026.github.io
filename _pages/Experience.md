---
layout: page
title: Experience
permalink: /experience/
description: 工作经历与专业实践 | Professional Experience
nav: true
nav_order: 3
---

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">

<div class="experience-container mt-5">

  <section class="exp-item mb-6">
    <div class="exp-header mb-3">
      <h2 class="exp-title-group">
        <span class="exp-index">01</span>
        <span class="exp-text">检察日报·山东记者站</span>
      </h2>
    </div>
    
    <div class="exp-image-box mt-4">
      <img src="/assets/img/工作经历1.png" class="img-fluid rounded shadow-sm w-100" alt="工作经历1">
    </div>
  </section>

  <hr class="section-divider">

  <section class="exp-item mb-6">
    <div class="exp-image-box mt-4">
      <img src="/assets/img/工作经历2.png" class="img-fluid rounded shadow-sm w-100" alt="工作经历2">
    </div>
  </section>

  <hr class="section-divider">

  <section class="exp-item mb-6">
    <div class="exp-header mb-4">
      <h2 class="exp-title-group">
        <span class="exp-index">02</span>
        <span class="exp-text">山东省委政法委·济南市铁路局</span>
        <span class="exp-divider">/</span>
        <span class="exp-index">03</span>
        <span class="exp-text">大众报业集团·齐鲁融媒</span>
      </h2>
    </div>

    <div class="exp-image-box mt-4">
      <img src="/assets/img/工作经历3.png" class="img-fluid rounded shadow-sm w-100" alt="工作经历3">
    </div>
  </section>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体优化 (严格参考 Research) */
  body, p, li, h1, h2, h3, h4, h5, .navbar {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important;
    color: #2c3e50;
  }

  .experience-container { max-width: 1100px; margin: auto; }

  /* =========================================
     1. 顶级标题同步：严格对齐 Research 页面 .section-title
     ========================================= */
  .post-title, h1 {
    color: var(--nju-purple) !important;
    font-weight: 800 !important;
    font-size: 1.8rem !important;
    font-family: 'Playfair Display', serif !important;
    border-left: 8px solid var(--nju-purple) !important;
    padding-left: 20px !important;
    margin-bottom: 1.5rem !important;
    letter-spacing: normal !important; /* 恢复常规字间距 */
  }

  /* 描述文字同步 (对齐 Research 描述间距) */
  .post-description, .page-description {
    font-size: 1.1rem !important;
    color: #666 !important;
    margin-bottom: 3rem !important;
    padding-left: 28px !important; /* 对齐标题侧边线后的文字位置 */
  }

  /* =========================================
     2. 内部标题同步：严格对齐 Research 内部 .thesis-title
     ========================================= */
  .exp-title-group {
    display: flex;
    align-items: baseline; 
    flex-wrap: wrap;
    padding-bottom: 10px;
  }

  /* 数字：保持原有的 Helvetica 无衬线体 */
  .exp-index {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; 
    font-weight: 900;
    font-size: 2.2rem; 
    color: #e0e0e0; 
    margin-right: 15px;
    line-height: 1;
    position: relative;
    top: 2px;
  }

  /* 单位名称：严格参考 Research 的 thesis-title 属性 */
  .exp-text {
    font-family: 'Playfair Display', serif !important; 
    font-weight: 800 !important; 
    color: #1a1a1a !important; /* 同步 Research 标题颜色 */
    font-size: 1.6rem !important;
    line-height: 1.3 !important;
  }

  .exp-divider {
    margin: 0 12px;
    color: #ddd;
    font-weight: 300;
    font-size: 1.5rem;
  }

  /* =========================================
     3. 视觉组件
     ========================================= */
  .exp-image-box {
    border: 1px solid #eee;
    padding: 8px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
  }
  .exp-image-box:hover { transform: translateY(-5px); }

  .section-divider { margin: 5rem 0; border-top: 1px dashed #ddd; }
  .mb-6 { margin-bottom: 5rem; }
</style>
