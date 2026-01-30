---
layout: page
title: 信息长图设计
description: 复杂政策与报告的视觉化转译 | Infographics
img: /assets/img/infographic_report.png
importance: 3
category: work
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700;900&display=swap" rel="stylesheet">

<div class="project-container">

  <section class="mb-5">
    <h3>📜 政策解读与长图设计</h3>
    <p>
      <strong>作品简介：</strong><br>
      在智媒传播语境下，复杂的文字信息需要更直观的视觉表达。我利用 Photoshop 将繁杂的政府工作报告、法律条文与安全条例转化为通俗易懂的“一图读懂”系列。通过重构信息层级与色彩引导，极大地提升了政务信息的触达率与传播效率。
    </p>
  </section>

  <hr style="border-top: 1px dashed #ddd; margin: 2rem 0;">

  <div class="row g-4">
    <div class="col-sm-6">
      <div class="img-box">
        <img class="img-fluid" src="/assets/img/infographic_report.png" alt="年度工作汇报">
      </div>
      <h5 class="img-caption">《向人民报告》年度工作汇报长图</h5>
    </div>
    
    <div class="col-md-6">
      <div class="img-box">
        <img class="img-fluid" src="/assets/img/infographic_safety.png" alt="安全出行指南">
      </div>
      <h5 class="img-caption">“五一”铁路安全出行指南</h5>
    </div>
  </div>

  <div class="back-btn-container mt-5 text-center">
    <a href="/projects/" class="btn-back">← 返回作品集</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体与排版优化 (杂志级呼吸感) */
  .post-content, article, .project-container {
    font-family: "Noto Serif SC", "Songti SC", serif !important;
    font-size: 1.15rem !important;
    line-height: 2.0 !important; /* 疏朗的行间距 */
    color: #333 !important;
    text-align: justify;
    max-width: 900px;
    margin: 0 auto;
  }

  /* 2. 标题美化 */
  h3 {
    font-family: "Noto Serif SC", serif !important;
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    margin-top: 2rem !important;
    margin-bottom: 1.5rem !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
  }

  /* 3. 图片展示效果 (与视觉设计页对齐) */
  .img-box {
    background: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    transition: transform 0.4s ease;
    margin-bottom: 15px;
  }
  .img-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(77,0,153,0.12);
  }
  .img-fluid {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }

  /* 4. 图注文字：使用黑体与正文区分 */
  .img-caption {
    text-align: center;
    color: #666 !important;
    font-size: 0.95rem !important;
    font-family: sans-serif !important; 
    margin-bottom: 2rem !important;
    font-weight: normal !important;
  }

  /* 5. 强调文字 */
  strong {
    color: var(--nju-purple);
    font-weight: 700;
  }

  /* 6. 返回按钮样式统一 */
  .btn-back {
    display: inline-block; padding: 10px 30px; border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important; border-radius: 50px; text-decoration: none !important;
    font-weight: 800; font-family: sans-serif; transition: 0.3s; font-size: 0.9rem;
  }
  .btn-back:hover { 
    background: var(--nju-purple); 
    color: white !important;
    box-shadow: 0 5px 15px rgba(77,0,153,0.3);
  }

  @media (max-width: 768px) {
    .project-container { padding: 0 15px; }
  }
</style>
