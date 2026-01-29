---
layout: page
title: 视觉识别与品牌设计
description: 品牌战略的视觉化演绎 | Visual Identity Design
img: /assets/img/about展示封面-1.png
importance: 2
category: work
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700;900&display=swap" rel="stylesheet">

<div class="project-article-container">

  <div class="article-intro mb-5">
    <h3>🎨 品牌战略的视觉转译</h3>
    <p class="intro-lead">
      <strong>项目背景：</strong>一套优秀的视觉识别系统（VI）不仅是美的呈现，更是品牌战略的精准翻译。本项目旨在为相关单位打造一套兼具权威性与亲和力、适应全媒体时代传播需求的视觉基础设施。
    </p>
  </div>

  <hr class="divider-thin">

  <div class="design-section text-center mb-6">
    <div class="img-frame-hero">
      <img src="/assets/img/about展示封面-1.png" class="img-fluid shadow-lg" alt="核心VI展示">
    </div>
    <p class="caption-text">图 1：品牌核心标志与标准色应用规范</p>
  </div>

  <div class="row align-items-center mb-6">
    <div class="col-md-5 order-2 order-md-1">
      <div class="text-side-box">
        <h4 class="sub-title">视觉规范系统</h4>
        <p>精确界定标志墨稿、反白比例及安全空间，确保跨媒介使用的严谨性与一致性。我们强调符号在多场景下的自适应能力。</p>
      </div>
    </div>
    <div class="col-md-7 order-1 order-md-2 mb-4 mb-md-0">
      <div class="img-frame-tilt-right">
        <img src="/assets/img/photo_work.png" class="img-fluid shadow-md" alt="规范细节">
      </div>
    </div>
  </div>

  <div class="row mb-6">
    <div class="col-md-6 mb-5">
      <div class="img-frame-offset">
        <img src="/assets/img/photo_activity.png" class="img-fluid shadow-md" alt="应用延展">
      </div>
      <h5 class="mt-4 font-weight-bold" style="color: #4D0099;">数字媒体应用</h5>
      <p class="caption-text">适配移动端界面的动态语言与视觉节奏。</p>
    </div>
    <div class="col-md-6 mt-md-5"> <div class="img-frame-offset">
        <img src="/assets/img/about展示封面-微光.jpg" class="img-fluid shadow-md" alt="环境应用">
      </div>
      <h5 class="mt-4 font-weight-bold" style="color: #4D0099;">环境与空间导视</h5>
      <p class="caption-text">将视觉符号融入物理空间，营造沉浸式品牌体验。</p>
    </div>
  </div>

  <div class="text-center mt-5 mb-5">
    <a href="/projects/" class="btn-return">← 返回作品集列表</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 字体与行间距：严格同步摄影页 */
  .project-article-container, .post-content {
    font-family: "Noto Serif SC", serif !important;
    font-size: 1.15rem !important;
    line-height: 2.0 !important; /* 2.0倍行间距，告别拥挤 */
    color: #333;
    text-align: justify;
    max-width: 900px;
    margin: 0 auto;
  }

  /* 2. 标题美化 */
  h3 {
    font-family: "Noto Serif SC", serif !important;
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
    margin-bottom: 1.5rem !important;
  }
  
  .sub-title {
    font-weight: 700;
    color: #111;
    margin-bottom: 1rem;
    position: relative;
  }
  .sub-title::after {
    content: ''; display: block; width: 30px; height: 3px; background: var(--nju-purple); margin-top: 8px;
  }

  /* 3. 创意布局样式 */
  .img-frame-hero img { border-radius: 15px; width: 100%; }
  
  .img-frame-tilt-right {
    transform: rotate(1.5deg); /* 微妙的倾斜，增加设计感 */
    transition: 0.4s;
  }
  .img-frame-tilt-right:hover { transform: rotate(0deg) scale(1.02); }
  .img-frame-tilt-right img { border-radius: 12px; }

  .img-frame-offset img {
    border-radius: 10px;
    transition: 0.4s;
  }
  .img-frame-offset:hover img { transform: translateY(-10px); }

  .mb-6 { margin-bottom: 5rem; }
  .divider-thin { border-top: 1px solid #eee; margin: 3rem 0; }

  /* 4. 图注样式 */
  .caption-text {
    font-family: sans-serif !important;
    font-size: 0.9rem;
    color: #888;
    margin-top: 12px;
  }

  /* 5. 返回按钮 */
  .btn-return {
    display: inline-block;
    padding: 10px 30px;
    border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important;
    border-radius: 50px;
    font-weight: 800;
    text-decoration: none !important;
    transition: 0.3s;
  }
  .btn-return:hover {
    background: var(--nju-purple);
    color: #fff !important;
  }

  @media (max-width: 768px) {
    .img-frame-tilt-right { transform: none; }
    .mt-md-5 { margin-top: 0 !important; }
  }
</style>
