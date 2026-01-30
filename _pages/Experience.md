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
      <h2 class="experience-section-title">
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
      <h2 class="experience-section-title">
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

  /* 🔴 1. 导航栏像素级同步 (同步 Research 页面的美观 Navbar) */
  .navbar { 
    font-family: 'Lora', "PingFang SC", sans-serif !important;
    font-weight: 600 !important; 
    letter-spacing: 0.5px !important;
  }
  .nav-link { 
    font-size: 1rem !important; 
    transition: color 0.3s ease;
  }

  /* 🔴 2. 全局字体与顶级标题优化 (同步 Research) */
  body, p, li, h1, h2, h3, h4, h5 {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important;
    color: #2c3e50;
  }

  /* 顶级大标题 Experience：黑色，无边框，对齐 Research 顶部 */
  .post-title, h1 {
    color: #000 !important;
    font-weight: 800 !important;
    font-size: 2.5rem !important;
    font-family: 'Playfair Display', serif !important;
    border-left: none !important;
    padding-left: 0 !important;
    margin-bottom: 1.5rem !important;
  }

  .post-description {
    font-size: 1.1rem !important;
    color: #666 !important;
    margin-bottom: 3rem !important;
    padding-left: 0 !important;
  }

  /* 🔴 3. 内部小标题同步：克隆 Research 的 .section-title */
  .experience-section-title {
    color: var(--nju-purple) !important;
    font-weight: 800 !important;
    font-size: 1.8rem !important;
    font-family: 'Playfair Display', serif !important;
    border-left: 8px solid var(--nju-purple) !important; /* 紫色边框 */
    padding-left: 20px !important;
    display: flex;
    align-items: baseline;
    margin-bottom: 1.5rem;
  }

  /* 数字：Helvetica 无衬线体 */
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

  .experience-container { max-width: 1100px; margin: auto; }

  /* 图片容器美化 */
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
</style>
