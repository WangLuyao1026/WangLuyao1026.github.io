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
      <div class="row g-0">
        
        <div class="col-lg-6 col-md-12 bg-soft-gray d-flex align-items-center justify-content-center position-relative" style="min-height: 500px;">
          
          <img src="/assets/img/本科毕业论文.png" class="thesis-img-final shadow" alt="本科毕业论文封面">
          
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card-body p-4 p-lg-5 d-flex flex-column justify-content-center h-100">
            <div>
                <span class="badge badge-purple mb-3">Outstanding Thesis Award</span>
                <h3 class="thesis-title">云录制的生产制播范式与效用研究<br><small class="text-muted" style="font-size: 80%;">——以《天天云时间》为例</small></h3>
                
                <p class="thesis-meta mt-4">
                  <strong>Publication Date:</strong> June 2021<br>
                  <strong>Keywords:</strong> Cloud Recording, Media Sociology, Production Paradigm
                </p>

                <div class="thesis-abstract mt-4 mb-5">
                  <p><strong>摘要 (Abstract):</strong> 本研究聚焦于疫情期间兴起的“云录制”模式，通过深度个案分析，探讨了电视综艺在物理空间受限下的生产范式重构、互动机制演变及其产生的社会效用。研究认为，云录制不仅是特殊时期的应急之举，更是媒体深度融合背景下的技术与文化预演。</p>
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
    <h2 class="section-title mb-4">🖥️ 进行中的研究 | Work in Progress</h2>
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

  /* 1. 全局字体优化 */
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
  .research-container { max-width: 1100px; margin: auto; }
  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    font-size: 1.8rem;
    font-family: 'Playfair Display', serif !important;
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
  }
  .my-6 { margin-top: 5rem; margin-bottom: 5rem; }

  /* 3. 卡片样式 */
  .thesis-card {
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }
  
  /* 🔴 新增：自定义通透浅灰色背景 */
  .bg-soft-gray {
    /* 使用 rgba 设置：红245, 绿247, 蓝250 (极浅冷灰), 透明度 0.6 */
    background-color: rgba(245, 247, 250, 0.6) !important;
  }

  /* 图片样式 */
  .thesis-img-final {
    width: 85%;
    height: auto;
    max-height: 90%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
  }

  /* 4. 文字区域 */
  .thesis-title { font-family: 'Playfair Display', serif !important; font-weight: 800; color: #1a1a1a; font-size: 1.2rem; line-height: 1.3; }
  .badge-purple { background-color: var(--nju-purple); color: white; padding: 6px 15px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; }
  .thesis-abstract { font-size: 1rem; color: #444; background: #f8f6fc; padding: 20px; border-radius: 12px; border-left: 4px solid var(--nju-purple); }

  /* 5. 按钮 */
  .btn-download { display: inline-block; background: var(--nju-purple); color: white !important; padding: 12px 30px; border-radius: 50px; text-decoration: none !important; font-weight: 800; transition: 0.3s; }
  .btn-download:hover { background: #330066; transform: translateY(-2px); }

  .wip-box { background: #fff; border: 2px dashed #e0d6f0; border-radius: 20px; text-align: center; }
</style>
