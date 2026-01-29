---
layout: page
title: 视觉识别与品牌设计
description: 品牌战略的视觉化演绎 | Visual Identity & Brand Design
img: /assets/img/vi_cover.png
importance: 2
category: work
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700&display=swap" rel="stylesheet">

<div class="project-container">

  <div class="intro-block mb-5">
    <h3>🎨 品牌战略的视觉转译</h3>
    <p>
      <strong>项目背景：</strong><br>
      一套优秀的视觉识别系统（VI）不仅是美的呈现，更是品牌战略的精准翻译。本项目旨在为[某公共部门/机构]打造一套兼具权威性与亲和力、适应全媒体时代传播需求的视觉基础设施。通过系统的符号构建，强化受众认知，传递核心价值。
    </p>
  </div>
  
  <hr class="divider-artistic">

  <div class="design-section mb-5">
    <img src="/assets/img/vi_main_hero.jpg" class="img-fluid rounded-xl shadow-lg brand-hero" alt="品牌核心视觉">
    <p class="caption-text mt-3 text-center">图 1：品牌核心标志与辅助图形组合规范</p>
  </div>


  <div class="row align-items-center g-5 mb-6 design-section">
    <div class="col-md-5">
      <h4 class="section-sub-title">基础规范系统</h4>
      <p>精确界定标志墨稿、反白比例及安全空间，确保跨媒介使用的严谨性。</p>
      <div class="img-card-wrapper">
        <img src="/assets/img/vi_guideline_1.jpg" class="img-fluid rounded shadow-sm" alt="标志规范">
      </div>
    </div>
    <div class="col-md-7">
      <div class="img-card-wrapper img-tilt-right">
        <img src="/assets/img/vi_mockup_office.jpg" class="img-fluid rounded-lg shadow-md" alt="办公应用延展">
      </div>
      <p class="caption-text mt-3">图 2：办公事务系统延展应用示例</p>
    </div>
  </div>


  <div class="row g-5 mb-6 design-section">
    <div class="col-md-6">
       <div class="img-card-wrapper">
        <img src="/assets/img/vi_digital_media.jpg" class="img-fluid rounded-lg shadow-md" alt="数字媒体应用">
       </div>
       <h5 class="mt-3 mb-1 font-weight-bold" style="color:#4D0099;">数字端呈现</h5>
       <p class="caption-text">适配移动端的界面语言与动态图标规范。</p>
    </div>
    <div class="col-md-6 mt-md-5">
       <div class="img-card-wrapper img-tilt-left">
        <img src="/assets/img/vi_enviroment.jpg" class="img-fluid rounded-lg shadow-md" alt="环境应用">
       </div>
       <h5 class="mt-3 mb-1 font-weight-bold" style="color:#4D0099;">空间与环境导视</h5>
       <p class="caption-text">将视觉符号融入物理空间，营造沉浸式品牌体验。</p>
    </div>
  </div>


  <div class="design-section mb-5">
    <h4 class="section-sub-title mb-4">全场景生态落地</h4>
    <div class="position-relative">
      <img src="/assets/img/vi_full_scene.jpg" class="img-fluid rounded-xl shadow-lg" alt="全场景落地">
      <div class="image-overlay-text">
        <span>构建连贯一致的品牌叙事空间</span>
      </div>
    </div>
  </div>

  <div class="back-btn-container mt-6 text-center">
    <a href="/projects/" class="btn-back">← 返回作品集长廊</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* =========== 1. 字体与排版 (与摄影页保持一致) =========== */
  .post-content, article, .project-container {
    font-family: "Noto Serif SC", "Songti SC", serif !important; /* 思源宋体 */
    font-size: 1.15rem !important;
    line-height: 2.0 !important;
    color: #333 !important;
    text-align: justify;
    max-width: 960px; /* 稍微放宽一点，适合展示设计图 */
    margin: 0 auto;
  }

  h3 {
    font-family: "Noto Serif SC", serif !important;
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    margin-top: 2rem !important;
    margin-bottom: 1.5rem !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
  }
  
  strong { color: var(--nju-purple); font-weight: 700; }

  /* =========== 2. 创意布局样式 =========== */
  .divider-artistic { border-top: 2px dashed var(--nju-purple); opacity: 0.3; margin: 3rem 0; }
  .mb-6 { margin-bottom: 5rem; }
  .mt-6 { margin-top: 5rem; }
  
  .section-sub-title {
      font-weight: 700; color: #222; margin-bottom: 1rem; position: relative; display: inline-block;
  }
  .section-sub-title::after {
      content: ''; position: absolute; bottom: -5px; left: 0; width: 30px; height: 3px; background: var(--nju-purple); opacity: 0.6;
  }

  /* 图片容器与效果 */
  .rounded-lg { border-radius: 12px !important; }
  .rounded-xl { border-radius: 18px !important; }
  .shadow-md { box-shadow: 0 8px 20px rgba(0,0,0,0.08) !important; }
  .shadow-lg { box-shadow: 0 15px 35px rgba(0,0,0,0.12) !important; }

  .img-card-wrapper {
      transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .img-card-wrapper:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(77,0,153,0.15) !important;
  }
  
  /* 微妙的倾斜效果，增加设计感 */
  .img-tilt-right { transform: rotate(1deg); }
  .img-tilt-left { transform: rotate(-1deg); }
  .brand-hero { transition: 0.5s; }
  .brand-hero:hover { transform: scale(1.01); }

  /* 图片说明 */
  .caption-text {
    font-family: sans-serif !important;
    font-size: 0.9rem !important;
    color: #777 !important;
    margin-top: 10px;
    font-weight: normal;
  }

  /* 图片覆盖文字 */
  .image-overlay-text {
      position: absolute; bottom: 20px; right: 20px; background: rgba(255,255,255,0.9);
      padding: 8px 20px; border-radius: 50px; font-family: sans-serif; font-weight: bold; color: var(--nju-purple);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  /* 返回按钮 */
  .btn-back {
    display: inline-block; padding: 12px 35px; border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important; border-radius: 50px; text-decoration: none !important;
    font-weight: 800; font-family: sans-serif; transition: 0.3s; letter-spacing: 1px;
  }
  .btn-back:hover { background: var(--nju-purple); color: white !important; box-shadow: 0 5px 15px rgba(77,0,153,0.3); }
  
  @media (max-width: 768px) {
      .mt-md-5 { margin-top: 2rem !important; } /* 移动端取消错位 */
      .img-tilt-right, .img-tilt-left { transform: none; } /* 移动端取消倾斜 */
  }
</style>
