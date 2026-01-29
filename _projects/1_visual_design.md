---
layout: page
title: 视觉识别与品牌设计
description: 品牌战略的视觉化转译 | Visual Identity Design
img: /assets/img/about展示封面-1.png
importance: 2
category: work
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700;900&display=swap" rel="stylesheet">

<div class="vi-project-content">

  <section class="mb-5">
    <h3 class="section-title">🎨 品牌视觉基础设施构建</h3>
    <p class="intro-text">
      <strong>设计初衷：</strong>视觉识别系统（VI）是品牌灵魂的具象化。本项目旨在为单位建立一套系统、规范、且具前瞻性的视觉识别体系。通过对核心标志的科学规范与色彩系统的精准定义，解决品牌在多媒介传播中形象碎片化的问题，构建连贯一致的品牌叙事空间。
    </p>
  </section>

  <hr class="divider">

  <section class="mb-6">
    <h4 class="sub-heading">01. 标志设计逻辑与规范</h4>
    <p>
      标志作为品牌的核心资产，其规范性决定了传播的严谨度。我们对标志的网格制图、反白规范以及安全空间进行了精确界定，确保其在从名片到大型户外广告的各种尺度下，均能保持完美的视觉清晰度。
    </p>
    <div class="image-box-full mt-4">
      <img src="/assets/img/about展示封面-1.png" alt="品牌视觉设计稿" class="img-clean shadow-sm">
      <p class="img-caption">图 1：品牌核心视觉识别规范 (Visual Identity Guideline)</p>
    </div>
  </section>

  <section class="mb-6">
    <h4 class="sub-heading">02. 媒介适配与视觉延展</h4>
    <p>
      在全媒体传播环境下，VI 系统不仅要在平面印刷中表现卓越，更要适配数字端的动态呈现。我们定义了一套具有节奏感的辅助图形系统，使其在社交媒体、政务平台及线下办公环境中展现出极强的品牌自适应性。
    </p>
    
    <div class="row g-4 mt-2">
      <div class="col-md-6">
        <div class="image-box-half">
           <img src="/assets/img/about展示封面-1.png" alt="VI应用展示" class="img-clean shadow-sm">
        </div>
        <p class="img-caption">图 2：办公事务系统展示</p>
      </div>
      <div class="col-md-6">
        <div class="image-box-half">
           <img src="/assets/img/about展示封面-1.png" alt="VI应用展示" class="img-clean shadow-sm">
        </div>
        <p class="img-caption">图 3：数字媒介适配展示</p>
      </div>
    </div>
  </section>

  <section class="conclusion-box p-4 mb-5">
    <p>
      <strong>设计愿景：</strong>这套视觉系统不仅是对外展示的窗口，更是对内凝聚力的符号。它通过理性的设计语言，传递出品牌专业、稳重且不失现代感的价值观。
    </p>
  </section>

  <div class="text-center mt-5 mb-5">
    <a href="/projects/" class="btn-back-link">← 返回作品集列表</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 字体与间距：严格同步摄影页 */
  .vi-project-content {
    font-family: "Noto Serif SC", serif !important;
    font-size: 1.15rem !important;
    line-height: 2.0 !important; /* 疏朗的行距 */
    color: #333;
    max-width: 900px;
    margin: 0 auto;
    text-align: justify;
  }

  /* 2. 标题样式 */
  .section-title {
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
    margin-bottom: 1.5rem !important;
  }
  .sub-heading {
    font-weight: 700;
    color: #111;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  /* 3. 图片防畸形核心代码 */
  .img-clean {
    width: 100%;
    height: auto;        /* 强制保持原始宽高比 */
    max-width: 100%;
    display: block;
    border-radius: 8px;
    object-fit: contain; /* 确保内容完整显示不被裁剪或拉伸 */
  }
  
  .image-box-full, .image-box-half {
    background: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
  }

  .img-caption {
    font-family: sans-serif !important;
    font-size: 0.9rem;
    color: #888;
    text-align: center;
    margin-top: 12px;
  }

  /* 4. 装饰元素 */
  .divider { border-top: 1px solid #eee; margin: 3rem 0; }
  .conclusion-box { background: #f9f7fd; border-radius: 12px; }
  .mb-6 { margin-bottom: 4.5rem; }

  /* 5. 按钮 */
  .btn-back-link {
    display: inline-block;
    padding: 10px 30px;
    border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important;
    border-radius: 50px;
    font-weight: 800;
    text-decoration: none !important;
    transition: 0.3s;
    font-family: sans-serif !important;
  }
  .btn-back-link:hover {
    background: var(--nju-purple);
    color: #fff !important;
  }

  /* 移动端间距 */
  @media (max-width: 768px) {
    .vi-project-content { font-size: 1.05rem !important; padding: 0 15px; }
  }
</style>
