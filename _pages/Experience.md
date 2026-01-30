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

  /* =========================================
     1. 顶级标题同步：【物理级对齐 Research 顶部标题】
     ========================================= */
  
  /* 强制修改页面最上方的 Experience 标题 */
  .post-title, h1 {
    font-family: 'Playfair Display', "PingFang SC", "Microsoft YaHei", sans-serif !important;
    font-weight: 800 !important; /* 同步 Research 的字重 */
    font-size: 1.8rem !important; /* 同步 Research 的字号 */
    color: var(--nju-purple) !important;
    /* 🔴 彻底删除紫线和缩进 */
    border-left: none !important;
    padding-left: 0 !important;
    margin-bottom: 1rem !important;
    letter-spacing: normal !important;
  }

  /* 描述文字同步 */
  .post-description, .page-description {
    font-family: 'Lora', "PingFang SC", sans-serif !important;
    font-size: 1.1rem !important;
    color: #666 !important;
    padding-left: 0 !important; /* 彻底删除缩进 */
    margin-bottom: 3rem !important;
  }

  /* 正文通用 */
  body, .experience-container {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
    line-height: 1.9;
    color: #2c3e50;
  }

  .experience-container { max-width: 1000px; margin: 0 auto; }

  /* =========================================
     2. 内部标题同步：参考“Undergraduate Thesis”
     ========================================= */
  
  .exp-title-group {
    display: flex;
    align-items: baseline; 
    flex-wrap: wrap;
    padding-bottom: 10px;
  }

  /* 数字：严格保留无衬线体 Helvetica */
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

  /* 单位名称：同步为 Research 的内部标题字体 (Playfair + 苹方) */
  .exp-text {
    font-family: 'Playfair Display', "PingFang SC", "Microsoft YaHei", sans-serif !important;
    font-weight: 800; 
    font-size: 1.6rem;
    color: var(--nju-purple);
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

  .section-divider { margin: 4rem 0; border-top: 1px dashed #ddd; }
  .mb-6 { margin-bottom: 5rem; }
</style>
