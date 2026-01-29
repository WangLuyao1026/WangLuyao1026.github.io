---
layout: page
title: Research
permalink: /publications/
description: 学术研究与论文发表 | Academic Research
nav: true
nav_order: 5
---

<div class="research-container mt-5">

  <section class="thesis-section mb-6">
    <h2 class="section-title mb-4">🎓 本科毕业论文 | Undergraduate Thesis</h2>
    
    <div class="card border-0 shadow-lg thesis-card">
      <div class="row g-0 align-items-center">
        
        <div class="col-lg-6 col-md-12 p-0 bg-white">
          <img src="/assets/img/本科毕业论文.png" class="img-fluid thesis-img-large" alt="本科毕业论文封面">
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card-body p-4 p-lg-5">
            <span class="badge badge-purple mb-3">Outstanding Thesis Award</span>
            <h3 class="thesis-title">云录制的生产制播范式与效用研究<br><small class="text-muted" style="font-size: 65%;">——以《天天云时间》为例</small></h3>
            
            <p class="thesis-meta mt-4">
              <strong>Publication Date:</strong> June 2021<br>
              <strong>Keywords:</strong> Cloud Recording, Media Sociology, Production Paradigm
            </p>

            <div class="thesis-abstract mt-4 mb-4">
              <p><strong>摘要 (Abstract):</strong> 本研究聚焦于疫情期间兴起的“云录制”模式，通过深度个案分析，探讨了电视综艺在物理空间受限下的生产范式重构、互动机制演变及其产生的社会效用。研究认为，云录制不仅是特殊时期的应急之举，更是媒体深度融合背景下的技术与文化预演。</p>
            </div>

            <a href="/assets/pdf/本科毕业论文-云录制的生产制播范式与效用研究——以《天天云时间》为例.pdf" target="_blank" class="btn-download w-100 text-center">
              <i class="fas fa-file-pdf mr-2"></i> 阅读完整论文 (PDF)
            </a>
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
      <p class="mt-3" style="font-size: 1.1rem;">Currently focusing on the social dynamics of information diffusion and user behavioural psychology in digital platforms.</p>
      <span class="badge bg-light text-dark mt-3">Coming Soon</span>
    </div>
  </section>

</div>

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体优化 (与首页保持一致) */
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

  /* 2. 布局优化 */
  .research-container {
    max-width: 1100px;
    margin: auto;
  }
  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    font-size: 1.8rem;
    font-family: 'Playfair Display', serif !important;
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
  }
  .my-6 { margin-top: 5rem; margin-bottom: 5rem; }

  /* 3. 🔴 核心修改：图片样式 */
  .thesis-card {
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }
  
  .thesis-img-large {
    width: 100%;       /* 强制占满左侧宽度 */
    height: auto;      /* 高度自动，不再限制 */
    display: block;    /* 消除图片底部的微小空隙 */
    object-fit: cover; /* 确保填满 */
    /* 移除了 max-height，图片将根据宽度自然变大 */
  }

  /* 4. 文字区域 */
  .thesis-title {
    font-family: 'Playfair Display', serif !important;
    font-weight: 800;
    color: #1a1a1a;
    font-size: 1.6rem;
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
  .thesis-abstract {
    font-size: 1rem;
    color: #444;
    background: #f8f6fc;
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid var(--nju-purple);
  }

  /* 5. 按钮 */
  .btn-download {
    display: inline-block;
    background: var(--nju-purple);
    color: white !important;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none !important;
    font-weight: 800;
    transition: 0.3s;
  }
  .btn-download:hover {
    background: #330066;
    transform: translateY(-2px);
  }

  .wip-box { background: #fff; border: 2px dashed #e0d6f0; border-radius: 20px; text-align: center; }
</style>
