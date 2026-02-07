---
layout: page
title: 视觉识别与品牌设计
description: InDesign期刊排版、VI系统与Illustrator创意设计
img: /assets/img/design_periodical.png
importance: 2
category: visual-design
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700;900&display=swap" rel="stylesheet">

<div class="visual-design-container">

  <section class="mb-5">
    <h3 class="section-main-title">🎨 InDesign 排版与品牌设计</h3>
    <p class="intro-text">
      <strong>作品简介：</strong><br>
      本板块涵盖政府期刊排版、大型活动视觉物料及品牌 VI 系统设计。在设计实践中，注重版式的<strong>呼吸感</strong>与<strong>信息层级</strong>的清晰传达，力求在严谨的政务传播中融入现代审美张力。
    </p>
  </section>

  <hr class="art-divider">

  <section class="mb-6">
    <h4 class="sub-heading">01 / 期刊版式设计：《爱·在路上》</h4>
    <p>
      利用 InDesign 进行多页排版，针对政府期刊的特性，平衡了大量文字信息与视觉留白。通过网格系统的建立，确保了跨期出版物在视觉形象上的高度统一与专业感。
    </p>
    <div class="img-frame-hero mt-4">
      <img src="/assets/img/design_periodical.png" class="img-fluid-auto shadow-lg" alt="期刊排版设计">
    </div>
    <p class="caption-text">图 1：期刊《爱·在路上》内页及封面排版</p>
  </section>

  <section class="mb-6">
    <div class="row align-items-center g-5">
      <div class="col-md-5">
        <h4 class="sub-heading">02 / Logo 与徽章设计</h4>
        <p>基于 Illustrator 的矢量图形设计，强调符号的符号化与自适应性，确保品牌标志在不同媒介尺度下均具备极高的辨识度。</p>
        <div class="img-frame-standard mt-3">
          <img src="/assets/img/design_logo.png" class="img-fluid-auto shadow-md" alt="Logo设计">
        </div>
      </div>
      <div class="col-md-7">
        <div class="img-frame-standard mt-md-5">
          <img src="/assets/img/design_fold.png" class="img-fluid-auto shadow-md" alt="宣传折页">
        </div>
        <p class="caption-text-left mt-3">图 2 & 3：品牌 Logo 规范与宣传折页系列</p>
      </div>
    </div>
  </section>

  <section class="mb-6">
    <h4 class="sub-heading">03 / 整合传播：活动视觉系统</h4>
    <p>针对“进农村”等大型宣传活动，构建了从线上视觉海报到线下活动现场物料的闭环视觉体系。通过视觉语言的一致性，强化了活动的品牌感知度。</p>
    
    <div class="row g-4 mt-2">
      <div class="col-md-12">
        <div class="img-frame-hero">
          <img src="/assets/img/design_country.png" class="img-fluid-auto shadow-md" alt="进农村活动">
        </div>
      </div>
      <div class="col-md-12">
        <div class="img-frame-standard mt-3">
          <img src="/assets/img/design_activity.png" class="img-fluid-auto shadow-md" alt="物料展示">
        </div>
        <p class="caption-text-left mt-3">图 4 & 5：“进农村”系列活动视觉集锦与现场物料呈现</p>
      </div>
    </div>
  </section>

  <div class="text-center mt-5 mb-6">
    <a href="/projects/" class="btn-return-link">← 返回作品集</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 字体与行间距 */
  .visual-design-container {
    font-family: "Noto Serif SC", serif !important;
    font-size: 1.15rem !important;
    line-height: 2.0 !important;
    color: #333;
    max-width: 900px;
    margin: 0 auto;
    text-align: justify;
  }

  /* 2. 标题排版：统一 margin-bottom 为 1.5rem */
  .section-main-title {
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
    margin-top: 2.2rem !important;
    margin-bottom: 1.5rem !important;
  }
  .sub-heading {
    font-weight: 700;
    color: #111;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
  }
  
  /* 强制加粗，颜色统一 */
  strong { 
    color: var(--nju-purple); 
    font-weight: 900 !important; 
  }

  /* 3. 图片展示效果 */
  .img-fluid-auto {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    object-fit: contain;
  }

  .img-frame-hero {
    background: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 12px;
  }

  .img-frame-standard {
    background: #fff;
    padding: 8px;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    transition: transform 0.4s ease;
  }
  .img-frame-standard:hover {
    transform: translateY(-8px);
  }

  /* 4. 文字与图注 */
  .caption-text { text-align: center; font-family: sans-serif !important; font-size: 0.9rem; color: #888; margin-top: 15px; }
  .caption-text-left { text-align: left; font-family: sans-serif !important; font-size: 0.9rem; color: #888; }
  
  .art-divider { border-top: 2px dashed #eee; margin: 3.5rem 0; }
  .mb-6 { margin-bottom: 5rem; }

  /* 5. 返回按钮 (修正后) */
  .btn-return-link {
    display: inline-block;
    padding: 10px 30px; /* 修正：30px */
    border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important;
    border-radius: 50px;
    font-weight: 800;
    text-decoration: none !important;
    transition: 0.3s;
    font-family: sans-serif !important;
    font-size: 0.9rem; /* 修正：添加字体大小限制 */
  }
  .btn-return-link:hover {
    background: var(--nju-purple);
    color: #fff !important;
  }

  @media (max-width: 768px) {
    .mt-md-5 { margin-top: 1.5rem !important; }
    .visual-design-container { padding: 0 10px; }
  }
</style>
