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
    <h3>📑 政策解读与长图设计</h3>
    <p>
      <strong>作品简介：</strong><br>
      在智媒传播语境下，复杂的文字信息需要更直观的视觉表达。我利用 Photoshop 将繁杂的政府工作报告、法律条文与安全条例转化为通俗易懂的“一图读懂”系列。通过重构信息层级与色彩引导，极大地提升了政务信息的触达率与传播效率。
    </p>
  </section>

  <hr style="border-top: 1px dashed #ddd; margin: 2rem 0;">

  <div class="row g-5">
    <div class="col-md-6">
      <div class="scroll-window shadow-md">
        <img src="/assets/img/向人民代表报告H5长图.png" class="img-full-width" alt="年度报告长图">
      </div>
      <div class="scroll-hint mt-2">
        <i class="fas fa-arrows-alt-v"></i> 在框内上下滑动查看完整长图
      </div>
      <h5 class="img-caption mt-3">《向人民报告》年度工作汇报 H5</h5>
    </div>
    
    <div class="col-md-6">
      <div class="scroll-window shadow-md">
        <img src="/assets/img/五一劳动节，致敬铁路工作者.png" class="img-full-width" alt="五一安全指南">
      </div>
      <div class="scroll-hint mt-2">
        <i class="fas fa-arrows-alt-v"></i> 在框内上下滑动查看完整长图
      </div>
      <h5 class="img-caption mt-3">“五一”铁路安全出行指南</h5>
    </div>
  </div>

  <div class="back-btn-container mt-5 text-center">
    <a href="/projects/" class="btn-back">← 返回作品集</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 字体与排版 */
  .post-content, article, .project-container {
    font-family: "Noto Serif SC", serif !important;
    font-size: 1.15rem !important;
    line-height: 2.0 !important;
    color: #333 !important;
    text-align: justify;
    max-width: 960px;
    margin: 0 auto;
  }

  h3 {
    font-family: "Noto Serif SC", serif !important;
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    margin-top: 2rem !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
  }

  /* 🔴 核心修复：添加对粗体字的颜色定义 */
  strong {
    color: var(--nju-purple);
    font-weight: 700;
  }

  /* 2. 核心：长图滚动窗口 */
  .scroll-window {
    height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 12px;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: var(--nju-purple) #f0f0f0;
  }
  
  .scroll-window::-webkit-scrollbar { width: 6px; }
  .scroll-window::-webkit-scrollbar-track { background: #f0f0f0; }
  .scroll-window::-webkit-scrollbar-thumb { background-color: var(--nju-purple); border-radius: 10px; }

  .img-full-width {
    width: 100%;
    height: auto;
    display: block;
  }

  /* 3. 交互提示 */
  .scroll-hint {
    text-align: center;
    font-size: 0.8rem;
    color: #aaa;
    font-family: sans-serif;
  }
  .scroll-hint i { margin-right: 5px; }

  .shadow-md { box-shadow: 0 10px 30px rgba(0,0,0,0.08); }

  /* 4. 图注 */
  .img-caption {
    text-align: center; color: #666 !important; font-size: 0.95rem !important;
    font-family: sans-serif !important; font-weight: normal !important;
  }

  /* 5. 按钮 */
  .btn-back {
    display: inline-block; padding: 10px 30px; border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important; border-radius: 50px; text-decoration: none !important;
    font-weight: 800; font-family: sans-serif; transition: 0.3s; font-size: 0.9rem;
  }
  .btn-back:hover { background: var(--nju-purple); color: white !important; }

  @media (max-width: 768px) {
    .scroll-window { height: 450px; }
  }
</style>
