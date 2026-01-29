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
    
    <div class="card border-0 shadow-lg thesis-card overflow-hidden">
      <div class="row g-0">
        
        <div class="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
          <div class="img-wrapper">
             <img src="/assets/img/本科毕业论文.png" class="img-fluid rounded shadow-sm thesis-img" alt="本科毕业论文封面">
          </div>
        </div>

        <div class="col-md-7">
          <div class="card-body p-4 p-md-5">
            <span class="badge badge-purple mb-3">Outstanding Thesis Award</span>
            <h3 class="thesis-title">云录制的生产制播范式与效用研究<br><small class="text-muted">——以《天天云时间》为例</small></h3>
            
            <p class="thesis-meta mt-3">
              <strong>Publication Date:</strong> June 2022<br>
              <strong>Keywords:</strong> Cloud Recording, Media Sociology, Production Paradigm
            </p>

            <div class="thesis-abstract mt-4 mb-4">
              <p><strong>摘要 (Abstract):</strong> 本研究聚焦疫情期间兴起的“云录制”模式，通过深度个案分析，探讨了电视综艺在物理空间受限下的生产范式重构、互动机制演变及其产生的社会效用。研究认为，云录制不仅是应急之举，更是媒体深度融合背景下的技术与文化预演。</p>
            </div>

            <a href="/assets/pdf/本科毕业论文-云录制的生产制播范式与效用研究——以《天天云时间》为例.pdf" target="_blank" class="btn-download">
              <i class="fas fa-file-pdf mr-2"></i> 阅读完整论文 (PDF)
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <hr class="divider my-5">
  
  <section class="wip-section">
    <h2 class="section-title mb-4">🚀 进行中的研究 | Work in Progress</h2>
    <div class="wip-box p-4">
      <h4>Computational Narrative & User Behavior</h4>
      <p>Currently focusing on the social dynamics of information diffusion and user behavioural psychology in digital platforms.</p>
    </div>
  </section>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 整体排版 */
  .research-container {
    font-family: "Lora", "PingFang SC", serif;
    line-height: 1.8;
  }

  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    border-left: 6px solid var(--nju-purple);
    padding-left: 15px;
    letter-spacing: 0.5px;
  }

  /* 论文卡片样式 */
  .thesis-card {
    border-radius: 20px;
    transition: transform 0.3s ease;
  }
  .thesis-card:hover {
    transform: translateY(-5px);
  }

  /* 图片处理 */
  .img-wrapper {
    width: 100%;
    text-align: center;
  }
  .thesis-img {
    max-height: 400px; /* 限制图片最大高度，防止过长 */
    object-fit: contain;
    border: 1px solid #eee;
  }

  /* 文本区域 */
  .thesis-title {
    font-family: "Playfair Display", serif;
    font-weight: 700;
    color: #2c3e50;
    line-height: 1.4;
  }
  
  .badge-purple {
    background-color: rgba(77, 0, 153, 0.1);
    color: var(--nju-purple);
    padding: 5px 12px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 0.8rem;
  }

  .thesis-abstract {
    font-size: 0.95rem;
    color: #555;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    border-left: 3px solid #ddd;
  }

  /* 下载按钮 */
  .btn-download {
    display: inline-block;
    background: var(--nju-purple);
    color: white !important;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none !important;
    font-weight: bold;
    transition: 0.3s;
    box-shadow: 0 4px 15px rgba(77, 0, 153, 0.2);
  }
  .btn-download:hover {
    background: #330066;
    transform: scale(1.02);
  }

  .divider { border-top: 1px dashed #ccc; }
  .wip-box { background: #fff; border: 1px dashed var(--nju-purple); border-radius: 12px; }
</style>
