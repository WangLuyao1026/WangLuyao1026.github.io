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

  /* 🔴 核心修复：完全复制 Research 页面的字体配置 */
  
  /* 1. 全局字体：Lora (英) + PingFang SC (中) */
  /* 这里去掉了 Noto Serif，确保中文显示为干净的黑体，与 Research 页面一致 */
  body, p, li, h1, h2, h3, h4, h5, .post-title, .post-description, .navbar {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important;
    color: #2c3e50;
  }

  .experience-container { max-width: 1000px; margin: 0 auto; }

  /* 2. 顶部大标题样式同步 */
  .post-title {
    font-weight: 800 !important;
    letter-spacing: -0.5px;
    /* 如果 Research 页面的大标题是用 Playfair Display 的，这里也加上 */
    font-family: 'Playfair Display', "PingFang SC", serif !important; 
  }

  /* 3. 内部小标题 (01 检察日报...) */
  .exp-title-group {
    display: flex;
    align-items: baseline; 
    flex-wrap: wrap;
    border-bottom: 3px solid var(--nju-purple);
    padding-bottom: 15px;
    margin-bottom: 10px;
  }

  /* 数字：保持 Helvetica (无衬线) */
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

  /* 内部文字：Playfair (英) + PingFang (中) */
  .exp-text {
    font-family: 'Playfair Display', "PingFang SC", serif !important;
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

  /* 4. 图片容器 */
  .exp-image-box {
    border: 1px solid #eee;
    padding: 8px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
  }
  .exp-image-box:hover { transform: translateY(-5px); }

  /* 5. 分割线 */
  .section-divider { margin: 4rem 0; border-top: 1px dashed #ddd; }
  .mb-6 { margin-bottom: 5rem; }
</style>
