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

  /* 1. 容器内正文字体：与 Research 保持一致 (Lora + PingFang) */
  /* 注意：这里不使用全局 body 选择器，避免影响页面顶部大标题 */
  .experience-container {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
    line-height: 1.9;
    color: #2c3e50;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* 2. 标题组排版 (01 检察日报...) */
  .exp-title-group {
    display: flex;
    align-items: baseline; 
    flex-wrap: wrap;
    border-bottom: 3px solid var(--nju-purple);
    padding-bottom: 15px;
    margin-bottom: 10px;
  }

  /* 3. 数字字体：Playfair Display (与 Research 标题英文一致) */
  .exp-index {
    font-family: 'Playfair Display', serif !important; 
    font-weight: 800;
    font-size: 2.2rem; 
    color: #e0e0e0; /* 浅灰装饰色 */
    margin-right: 15px;
    line-height: 1;
    position: relative;
    top: 3px;
  }

  /* 4. 中文标题字体：PingFang SC (与 Research 中文一致，去除宋体) */
  .exp-text {
    /* 英文用 Playfair，中文回退到 PingFang (黑体) */
    font-family: 'Playfair Display', "PingFang SC", "Microsoft YaHei", sans-serif !important;
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

  /* 5. 图片容器 */
  .exp-image-box {
    border: 1px solid #eee;
    padding: 8px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
  }
  .exp-image-box:hover { transform: translateY(-5px); }

  /* 6. 分割线 */
  .section-divider { margin: 4rem 0; border-top: 1px dashed #ddd; }
  .mb-6 { margin-bottom: 5rem; }
</style>
