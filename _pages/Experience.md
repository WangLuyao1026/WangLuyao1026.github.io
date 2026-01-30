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
    <div class="exp-header mb-4">
      <h2 class="section-title">
        <span class="exp-index-num">01</span>
        <span class="exp-unit-name">检察日报·山东记者站</span>
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
      <h2 class="section-title">
        <span class="exp-index-num">02</span>
        <span class="exp-unit-name">山东省委政法委·济南市铁路局</span>
        <span class="exp-divider">/</span>
        <span class="exp-index-num">03</span>
        <span class="exp-unit-name">大众报业集团·齐鲁融媒</span>
      </h2>
    </div>

    <div class="exp-image-box mt-4">
      <img src="/assets/img/工作经历3.png" class="img-fluid rounded shadow-sm w-100" alt="工作经历3">
    </div>
  </section>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* =======================================================
     1. 全局字体与导航栏 (完全复制 Research 代码)
     ======================================================= */
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

  /* =======================================================
     2. 顶部大标题修正 (关键！!)
     Research代码里没动h1，所以这里要确保它是干净的黑色无边框
     ======================================================= */
  .post-title, h1 {
    font-family: 'Playfair Display', serif !important;
    font-weight: 800 !important;
    /* 确保是黑色，而不是紫色 */
    color: #000 !important; 
    /* 🔴 严禁出现左边框，Research顶部没有线 */
    border-left: none !important; 
    padding-left: 0 !important;
    margin-bottom: 1rem !important;
  }

  /* 描述文字同步 */
  .post-description, .page-description {
    font-family: 'Lora', "PingFang SC", sans-serif !important;
    font-size: 1.1rem !important;
    color: #666 !important;
    padding-left: 0 !important;
  }

  /* =======================================================
     3. 内部小标题 (完全复制 Research 的 .section-title)
     ======================================================= */
  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    font-size: 1.8rem;
    font-family: 'Playfair Display', serif !important;
    /* 🔴 这里才有紫线，对齐“本科毕业论文” */
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
    
    /* 适配数字和文字的对齐 */
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }

  /* 数字：保留 Helvetica 以示区分，但融合在标题里 */
  .exp-index-num {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    font-weight: 900;
    font-size: 2.0rem; 
    color: #e0e0e0; /* 浅灰数字 */
    margin-right: 15px;
  }
  
  /* 单位名称：继承 section-title 的 Playfair 字体 */
  .exp-unit-name {
    font-weight: 800;
  }

  .exp-divider {
    margin: 0 15px;
    color: #ddd;
    font-weight: 300;
    font-size: 1.5rem;
  }

  /* =======================================================
     4. 布局与卡片
     ======================================================= */
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
  .mb-6 { margin-bottom: 5rem; }
</style>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
<style>
  /* 1. 引入高级英文字体 + 强制中文黑体加粗 */
  body, p, li, h1, h2, h3, h4, h5, .navbar {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  
  /* 2. 解决字体太细、发虚的问题 */
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important; /* 核心：稍微加粗，质感立刻提升 */
    color: #2c3e50;
  }

  /* 3. 导航栏加粗 */
  .navbar {
    font-weight: 600 !important;
  }

  /* 4. 标题使用衬线体 */
  h1, h2, h3, .section-title, .thesis-title, .project-item-title {
    font-family: 'Playfair Display', "PingFang SC", serif !important;
  }
</style>
