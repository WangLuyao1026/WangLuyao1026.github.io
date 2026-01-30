---
layout: page
title: Experience
permalink: /experience/
description: 工作经历与专业实践 | Professional Experience
nav: true
nav_order: 3
---

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Noto+Serif+SC:wght@400;700;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">

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
     1. 全局标题统一 (解决“Research”与“Experience”标题不一致问题)
     ========================================= */
  
  /* 强制页面顶部大标题 (Experience) 使用 Playfair + 宋体 */
  .post-title, h1 {
    font-family: 'Playfair Display', 'Noto Serif SC', serif !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px;
  }

  /* 强制页面描述 (Professional Experience...) 使用 Lora + 宋体 */
  .post-description, .page-description {
    font-family: 'Lora', 'Noto Serif SC', serif !important;
    font-weight: 400 !important;
    color: #666;
  }

  /* 全局正文基础字体 */
  body {
    font-family: 'Lora', 'Noto Serif SC', serif !important;
    -webkit-font-smoothing: antialiased;
    line-height: 1.9;
    color: #2c3e50;
  }

  .experience-container { max-width: 1000px; margin: 0 auto; }

  /* =========================================
     2. 内部标题 (01 检察日报...) 字体修正
     ========================================= */
  
  .exp-title-group {
    display: flex;
    align-items: baseline; 
    flex-wrap: wrap;
    border-bottom: 3px solid var(--nju-purple);
    padding-bottom: 15px;
    margin-bottom: 10px;
  }

  /* 数字：改为 Playfair Display (衬线体)，与 Research 风格一致 */
  .exp-index {
    font-family: 'Playfair Display', serif !important; 
    font-weight: 900;
    font-size: 2.2rem; 
    color: #e0e0e0; /* 浅灰装饰 */
    margin-right: 15px;
    line-height: 1;
    position: relative;
    top: 3px;
  }

  /* 文字：改为 Noto Serif SC (宋体)，与“本科毕业论文”字体一致 */
  .exp-text {
    font-family: 'Noto Serif SC', serif !important;
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--nju-purple);
  }

  .exp-divider {
    margin: 0 15px;
    color: #ddd;
    font-weight: 300;
    font-size: 1.5rem;
  }

  /* =========================================
     3. 其他样式
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
