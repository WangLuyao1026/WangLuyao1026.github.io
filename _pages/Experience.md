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
      <h2 class="exp-title">01 检察日报 山东记者站</h2>
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
      <h2 class="exp-title">02 山东省委政法委·济南市铁路局 / 03 大众报业集团·齐鲁融媒</h2>
    </div>

    <div class="exp-image-box mt-4">
      <img src="/assets/img/工作经历3.png" class="img-fluid rounded shadow-sm w-100" alt="工作经历3">
    </div>
  </section>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 🔴 核心修复：将字体应用范围扩大到全局，覆盖页面顶部大标题 */
  body, p, li, h1, h2, h3, h4, h5, .post-title, .post-description {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important;
    color: #2c3e50; /* 深灰蓝，高级感 */
  }

  /* 2. 页面布局限制 */
  .experience-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  /* 3. 内部小标题美化 */
  .exp-title {
    color: var(--nju-purple);
    font-family: 'Playfair Display', serif !important; /* 强调性标题字体 */
    font-weight: 800;
    font-size: 1.8rem;
    border-bottom: 3px solid var(--nju-purple);
    padding-bottom: 10px;
    display: inline-block;
    letter-spacing: 1px;
  }

  /* 4. 图片容器质感 */
  .exp-image-box {
    border: 1px solid #eee;
    padding: 8px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
  }
  .exp-image-box:hover {
    transform: translateY(-5px);
  }

  /* 5. 分割线与间距 */
  .section-divider {
    margin: 4rem 0;
    border-top: 1px dashed #ddd;
  }
  .mb-6 { margin-bottom: 5rem; }

  strong { color: var(--nju-purple); font-weight: 700; }
</style>
