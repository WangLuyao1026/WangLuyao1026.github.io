---
layout: page
title: Research
permalink: /publications/
description: 学术研究与论文发表 | Academic Research
nav: true
nav_order: 6
---

<div class="research-container mt-5">

  <section class="thesis-section mb-6">
    <h2 class="section-title mb-4">🎓 本科毕业论文 | Undergraduate Thesis</h2>
    
    <div class="card border-0 shadow-lg thesis-card">
      <div class="row g-0 h-100">
        
        <div class="col-lg-6 col-md-12 d-flex align-items-center justify-content-center bg-white p-0">
          <div class="img-wrapper h-100">
             <img src="/assets/img/本科毕业论文.png" class="img-fluid thesis-img" alt="本科毕业论文封面">
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card-body p-4 p-lg-5 d-flex flex-column justify-content-center h-100">
            <div>
                <span class="badge badge-purple mb-3">Outstanding Thesis Award</span>
                <h3 class="thesis-title">云录制的生产制播范式与效用研究<br><small class="text-muted" style="font-size: 65%;">——以《天天云时间》为例</small></h3>
                
                <p class="thesis-meta mt-4">
                <strong>Publication Date:</strong> June 2021<br>
                <strong>Keywords:</strong> Cloud Recording, Media Sociology, Production Paradigm
                </p>

                <div class="thesis-abstract mt-4 mb-5">
                <p><strong>摘要 (Abstract):</strong> 本研究聚焦疫情期间兴起的“云录制”模式，通过深度个案分析，探讨了电视综艺在物理空间受限下的生产范式重构、互动机制演变及其产生的社会效用。研究认为，云录制不仅是特殊时期的应急之举，更是媒体深度融合背景下的技术与文化预演。</p>
                </div>
            </div>

            <div class="mt-auto">
                <a href="/assets/pdf/本科毕业论文-云录制的生产制播范式与效用研究——以《天天云时间》为例.pdf" target="_blank" class="btn-download w-100 text-center w-md-auto">
                <i class="fas fa-file-pdf mr-2"></i> 阅读完整论文 (PDF)
                </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <hr class="divider my-6">
  
  <section class="wip-section mb-6">
    <h2 class="section-title mb-4">🚀 进行中的研究 | Work in Progress</h2>
    <div class="wip-box p-5">
      <h4 style="color: var(--nju-purple); font-weight: 700;">Computational Narrative & User Behavior</h4>
      <p class="mt-3" style="font-size: 1.1rem;">Currently focusing on the social dynamics of information diffusion and user behavioural psychology in digital platforms. Utilizing advanced SNA methods to map opinion climates.</p>
      <span class="badge bg-light text-dark mt-3">Coming Soon</span>
    </div>
  </section>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 整体排版 */
  .research-container {
    font-family: "Lora", "PingFang SC", serif;
    line-height: 1.9;
    max-width: 1100px; /* 限制最大宽度，防止在大屏上太散 */
    margin: auto;
  }

  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    font-size: 1.8rem;
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
    letter-spacing: -0.5px;
  }
  .my-6 { margin-top: 5rem; margin-bottom: 5rem; }

  /* 论文卡片样式 */
  .thesis-card {
    border-radius: 25px; /* 更大的圆角 */
    overflow: hidden; /* 确保图片圆角跟随卡片 */
    box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important; /* 更柔和的阴影 */
  }

  /* 图片处理 - 🔴 核心修改区 */
  .img-wrapper {
    width: 100%;
    /* text-align: center; <-- 移除居中，让图片自然铺开 */
    background: #fff;
  }
  .thesis-img {
    max-height: 550px; /* 🔴 提高高度限制，从400px变到550px */
    width: auto;         /* 允许宽度自适应 */
    max-width: 100%;     /* 但不超过容器 */
    object-fit: contain; /* 保持比例完整显示 */
    /* border: 1px solid #eee; <-- 移除边框，更干净 */
  }

  /* 文本区域 */
  .thesis-title {
    font-family: "Playfair Display", serif;
    font-weight: 800;
    color: #1a1a1a;
    font-size: 1.8rem;
    line-height: 1.3;
  }
  
  .badge-purple {
    background-color: var(--nju-purple);
    color: white;
    padding: 6px 15px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }

  .thesis-meta { font-size: 1.05rem; color: #555; }

  .thesis-abstract {
    font-size: 1rem;
    color: #444;
    background: #f8f6fc; /* 极淡的紫色背景 */
    padding: 25px;
    border-radius: 12px;
    border-left: 4px solid var(--nju-purple);
  }

  /* 下载按钮 */
  .btn-download {
    display: inline-block;
    background: var(--nju-purple);
    color: white !important;
    padding: 14px 35px;
    border-radius: 50px;
    text-decoration: none !important;
    font-weight: 800;
    font-size: 1rem;
    transition: 0.3s;
    box-shadow: 0 8px 20px rgba(77, 0, 153, 0.2);
  }
  .btn-download:hover {
    background: #330066;
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(77, 0, 153, 0.3);
  }

  .divider { border-top: 1px solid #eee; }
  .wip-box { background: #fff; border: 2px dashed #e0d6f0; border-radius: 20px; text-align: center; }

  /* 移动端适配 */
  @media (max-width: 991px) {
      .thesis-img { 
          max-height: 400px; /* 移动端稍微限制高度，防止太长 */
          width: 100%;
          object-fit: cover; /* 移动端可以稍微裁切以充满 */
      }
      .card-body { padding: 2rem !important; }
  }
</style>
