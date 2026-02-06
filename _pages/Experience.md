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
      <span class="title-icon">💼</span>
      <h2 class="custom-header-text">
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
      <span class="title-icon">🎥</span>
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

  <div class="resume-section text-center mt-5 mb-6">
    <div class="resume-divider mb-4">
      <span class="star-icon small">✦</span> 
      <span class="star-icon large">✦</span> 
      <span class="star-icon small">✦</span>
    </div>
    
    <h3 class="resume-title mb-3">获取完整履历与核心竞争力</h3>
    <p class="resume-subtitle mb-4">
      Education Background & Professional Skills
    </p>
    
    <a href="/assets/pdf/resume.pdf" target="_blank" class="btn-resume shadow-md">
      <i class="fas fa-file-alt me-2"></i> 查看个人简历 / Curriculum Vitae
    </a>
  </div>

</div>

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<style>
  :root { --nju-purple: #4D0099; }

  /* ========================================= */
  /* 1. 全局字体还原 */
  /* ========================================= */
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

  /* 2. 容器布局 */
  .experience-container { max-width: 1000px; margin: auto; }
  .mb-6 { margin-bottom: 5rem; }

  /* ========================================= */
  /* 3. 自定义标题样式 */
  /* ========================================= */
  .custom-title-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 5px;
  }

  .purple-bar {
    width: 8px; 
    height: 40px; 
    background-color: var(--nju-purple);
    margin-right: 15px; 
  }

  .title-icon {
    font-size: 1.8rem;
    margin-right: 10px;
    margin-bottom: 4px; 
  }

  .custom-header-text {
    font-family: 'Playfair Display', "Noto Serif SC", serif !important;
    font-weight: 900 !important;
    font-size: 1.8rem;
    color: var(--nju-purple);
    margin: 0;
    line-height: 1.2;
    padding-top: 2px;
  }

  .divider {
    color: #ccc;
    font-weight: 300;
    margin: 0 5px;
  }

  /* ========================================= */
  /* 4. 图片容器 */
  /* ========================================= */
  .image-only-card {
    background: #fff;
    border-radius: 12px;
  }

  .exp-img-full {
    width: 100%;
    height: auto;
    border-radius: 6px;
    display: block;
    object-fit: contain;
  }

  /* ========================================= */
  /* 5. [修改] 简历部分样式 (含星光特效) */
  /* ========================================= */
  .resume-section {
    padding: 2rem 0;
  }
  
  /* 星光装饰样式 */
  .resume-divider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px; /* 星星之间的距离 */
    opacity: 0.8;
  }

  .star-icon {
    color: var(--nju-purple);
    line-height: 1;
  }

  /* 大星星 */
  .star-icon.large {
    font-size: 2rem; 
  }

  /* 小星星 */
  .star-icon.small {
    font-size: 1.2rem;
    opacity: 0.6; 
  }

  /* 标题样式 */
  .resume-title {
    font-family: "Noto Serif SC", serif !important;
    font-weight: 700 !important;
    color: #333;
    font-size: 1.4rem;
  }

  .resume-subtitle {
    font-family: 'Lora', "PingFang SC", sans-serif !important;
    color: #666;
    font-size: 1rem;
  }

  /* 简历按钮 */
  .btn-resume {
    display: inline-block;
    background-color: var(--nju-purple);
    color: #fff !important;
    padding: 12px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 2px solid var(--nju-purple);
    letter-spacing: 0.5px;
  }

  .btn-resume:hover {
    background-color: #fff;
    color: var(--nju-purple) !important;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(77, 0, 153, 0.2);
  }

  .shadow-md { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  
  /* 移动端适配 */
  @media (max-width: 768px) {
    .purple-bar { height: 32px; width: 6px; }
    .title-icon { font-size: 1.5rem; }
    .custom-header-text { font-size: 1.3rem; }
    .btn-resume { width: 90%; padding: 12px 0; }
  }
</style>
