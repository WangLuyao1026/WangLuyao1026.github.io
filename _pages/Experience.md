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
    <div class="exp-header d-flex justify-content-between align-items-center mb-3">
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

  /* 1. 核心字体移植 (同步 Research 页) */
  .experience-container {
    /* 正文使用书卷气极浓的 Lora，辅以系统默认黑体兜底 */
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
    line-height: 1.9 !important; /* 行距加宽，阅读感更佳 */
    color: #2c3e50; /* 深灰蓝色，比纯黑更高级 */
    max-width: 1000px;
    margin: 0 auto;
  }

  /* 2. 标题美化 (Playfair Display) */
  .exp-title {
    color: var(--nju-purple);
    font-family: 'Playfair Display', serif !important; /* 大标题专用衬线体 */
    font-weight: 800;
    font-size: 1.8rem;
    border-bottom: 3px solid var(--nju-purple); /* 线条加粗一点点 */
    padding-bottom: 10px;
    display: inline-block;
    letter-spacing: 1px; /* 增加一点字间距 */
  }

  .exp-header { margin-bottom: 1.5rem; }

  /* 3. 图片容器优化 */
  .exp-image-box {
    border: 1px solid #eee;
    padding: 8px; /* 像相框一样的内边距 */
    background: #fff;
    border-radius: 12px; /* 圆角加大 */
    box-shadow: 0 5px 15px rgba(0,0,0,0.05); /* 添加柔和阴影 */
    transition: transform 0.3s;
  }
  .exp-image-box:hover {
    transform: translateY(-5px); /* 悬停微动效果 */
  }

  /* 4. 分割线与间距 */
  .section-divider {
    margin: 4rem 0; /* 间距拉大，呼吸感更强 */
    border-top: 1px dashed #ddd; /* 改为虚线，更雅致 */
  }
  .mb-6 { margin-bottom: 5rem; }

  strong { color: var(--nju-purple); font-weight: 700; }
</style>
