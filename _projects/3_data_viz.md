---
layout: page
title: 数据可视化设计
description: 检察数据的新闻化呈现 | Data Visualization
img: /assets/img/data_viz.png
importance: 5
category: work
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700;900&display=swap" rel="stylesheet">

<div class="project-container">

  <section class="mb-5">
    <h3>📊 数据新闻与图表设计</h3>
    <p>
      <strong>作品简介：</strong><br>
      在数据驱动新闻的趋势下，如何让冰冷的统计数字产生温度是设计的核心。本项目针对两微一端总发稿量、传统媒体占比及原创数据统计进行了深度可视化设计。通过重构数据图表，使枯燥的政务统计变得直观、生动，并具备极强的叙事性。
    </p>
  </section>

  <hr style="border-top: 1px dashed #ddd; margin: 2rem 0;">

  <div class="row justify-content-center mt-4">
    <div class="col-12">
      <div class="img-box">
        <img class="img-fluid" src="/assets/img/data_viz.png" alt="数据可视化作品">
      </div>
      <p class="img-caption">检察业务数据新闻化呈现与年度统计图表设计</p>
    </div>
  </div>

  <div class="back-btn-container mt-5 text-center">
    <a href="/projects/" class="btn-back">← 返回作品集</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体与排版优化 */
  .post-content, article, .project-container {
    font-family: "Noto Serif SC", "Songti SC", serif !important;
    font-size: 1.15rem !important;
    line-height: 2.0 !important;
    color: #333 !important;
    text-align: justify;
    max-width: 900px;
    margin: 0 auto;
  }

  /* 2. 标题美化：南大紫侧边线 */
  h3 {
    font-family: "Noto Serif SC", serif !important;
    font-weight: 700 !important;
    color: var(--nju-purple) !important;
    margin-top: 2rem !important;
    margin-bottom: 1.5rem !important;
    border-left: 5px solid var(--nju-purple);
    padding-left: 15px !important;
  }

  /* 3. 图片容器美化 */
  .img-box {
    background: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: 15px;
  }
  .img-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(77,0,153,0.12);
  }
  .img-fluid {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }

  /* 4. 图片说明文字 */
  .img-caption {
    text-align: center;
    color: #888 !important;
    font-size: 0.95rem !important;
    font-family: sans-serif !important; 
    margin-bottom: 2rem !important;
    font-weight: 400 !important;
  }

  /* 5. 强调文字 */
  strong {
    color: var(--nju-purple);
    font-weight: 700;
  }

  /* 6. 返回按钮 */
  .btn-back {
    display: inline-block; 
    padding: 10px 30px; 
    border: 2px solid var(--nju-purple);
    color: var(--nju-purple) !important; 
    border-radius: 50px; 
    text-decoration: none !important;
    font-weight: 800; 
    font-family: sans-serif; 
    transition: 0.3s; 
    font-size: 0.9rem;
    letter-spacing: 1px;
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
