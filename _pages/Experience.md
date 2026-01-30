---
layout: page
title: Experience
permalink: /experience/
description: 工作经历与专业实践 | Professional Experience
nav: true
nav_order: 3
---

<div class="experience-container mt-5">

  <section class="mb-6">
    <div class="card border-0 shadow-lg experience-card">
      <div class="row g-0">
        
        <div class="col-lg-6 col-md-12 bg-soft-gray d-flex flex-column align-items-center justify-content-center p-4 position-relative">
          <img src="/assets/img/工作经历1.png" class="exp-img shadow mb-3" alt="工作经历1">
          <img src="/assets/img/工作经历2.png" class="exp-img shadow" alt="工作经历2">
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card-body p-4 p-lg-5 d-flex flex-column justify-content-center h-100">
            <div>
              <span class="badge badge-purple mb-3">Legal & Media Practice</span>
              
              <h3 class="exp-title">
                01 检察日报·山东记者站<br>
                济南市历下区人民检察院
              </h3>
              
              <p class="exp-meta mt-4 mb-0">
                <strong>Role:</strong> 实习记者 / 检察宣传<br>
                <strong>Location:</strong> Jinan, Shandong
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="mb-6">
    <div class="card border-0 shadow-lg experience-card">
      <div class="row g-0">
        
        <div class="col-lg-6 col-md-12 bg-soft-gray d-flex align-items-center justify-content-center p-4 position-relative">
          <img src="/assets/img/工作经历3.png" class="exp-img-single shadow" alt="工作经历3">
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card-body p-4 p-lg-5 d-flex flex-column justify-content-center h-100">
            <div>
              <span class="badge badge-purple mb-3">Government & Media Convergence</span>
              
              <h3 class="exp-title">
                02 山东省委政法委·济南市铁路局 <br>
                <span style="color: #6c757d; font-size: 0.8em;">/</span> <br>
                03 大众报业集团·齐鲁融媒
              </h3>
              
              <p class="exp-meta mt-4 mb-0">
                <strong>Keywords:</strong> Political Communication, New Media
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</div>

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体 (完全一致) */
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

  /* 2. 布局 (完全一致) */
  .experience-container { max-width: 1100px; margin: auto; }
  .my-6 { margin-top: 5rem; margin-bottom: 5rem; }

  /* 3. 卡片样式 (完全一致) */
  .experience-card {
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
    transition: transform 0.3s ease; 
  }
  .experience-card:hover {
    transform: translateY(-5px); 
  }
  
  /* 背景色 (完全一致) */
  .bg-soft-gray {
    background-color: rgba(245, 247, 250, 0.6) !important;
  }

  /* 图片样式 */
  .exp-img {
    width: 85%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    max-height: 240px; 
  }

  .exp-img-single {
    width: 85%;
    height: auto;
    max-height: 400px; /* 大图高度限制 */
    object-fit: contain;
    border-radius: 4px;
  }

  /* 4. 文字区域 (严格对齐 Research) */
  .exp-title { 
    font-family: 'Playfair Display', serif !important; 
    font-weight: 800; 
    color: #1a1a1a; 
    font-size: 1.6rem; /* 保持与 .thesis-title 一致 */
    line-height: 1.3; 
  }
  
  .badge-purple { 
    background-color: var(--nju-purple); 
    color: white; 
    padding: 6px 15px; 
    border-radius: 50px; 
    font-weight: 700; 
    font-size: 0.85rem; 
  }
  
  .exp-meta {
    margin-top: 1.5rem !important;
    font-size: 1rem; /* 与正文一致 */
    color: #2c3e50;
  }

  /* 已移除 .exp-desc 相关样式 */
</style>
