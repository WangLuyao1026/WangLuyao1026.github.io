---
layout: page
title: 新闻纪实摄影
description: 记录一线现场与人物风采 | News Documentary Photography
img: /assets/img/作品列举1.png
importance: 1
category: work
---

<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700&display=swap" rel="stylesheet">

<div class="project-container">

  <h3>📷 镜头下的现场</h3>

  <p>
    <strong>作品描述：</strong><br>
    本系列作品记录了“检爱童行”法治研学活动、国际劳动妇女节参观活动以及一线执法现场等真实工作场景。通过镜头捕捉稍纵即逝的瞬间，展现法律工作者的专业与温情。
  </p>

  <hr style="border-top: 1px dashed #ddd; margin: 2rem 0;">

  <div class="row">
      <div class="col-sm-6 mt-3 mt-md-0">
          <div class="img-box">
              <img class="img-fluid" src="/assets/img/photo_work.png" alt="一线执法与航拍">
          </div>
          <h5 class="img-caption">一线执法与航拍纪实</h5>
      </div>
      
      <div class="col-sm-6 mt-3 mt-md-0">
          <div class="img-box">
               <img class="img-fluid" src="/assets/img/photo_activity.png" alt="研学活动">
          </div>
          <h5 class="img-caption">“检爱童行”法治研学活动与检察干警人物风采</h5>
      </div>
  </div>

  <div class="back-btn-container mt-5">
    <a href="/projects/" class="btn-back">← 返回作品集</a>
  </div>

</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体与排版优化 */
  .post-content, article, .project-container {
    font-family: "Noto Serif SC", "Songti SC", serif !important; /* 使用雅致的宋体 */
    font-size: 1.15rem !important; /* 字号加大 */
    line-height: 2.0 !important;   /* 行距加宽，呼吸感强 */
    color: #333 !important;
    text-align: justify;
    max-width: 900px; /* 限制阅读宽度，防止太宽 */
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

  /* 3. 图片美化 */
  .img-box {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1); /* 柔和阴影 */
    transition: transform 0.3s;
    margin-bottom: 15px;
  }
  .img-box:hover {
    transform: translateY(-5px); /* 悬停上浮 */
  }
  .img-fluid {
    width: 100%;
    display: block;
  }

  /* 4. 图片说明文字 */
  .img-caption {
    text-align: center;
    color: #666 !important;
    font-size: 0.95rem !important;
    font-family: sans-serif !important; /* 说明文字用黑体，区分正文 */
    margin-bottom: 2rem !important;
    font-weight: normal !important;
  }

  /* 5. 强调文字 */
  strong {
    color: var(--nju-purple);
    font-weight: 700;
  }

  /* 6. 返回按钮 */
  .btn-back {
    display: inline-block; padding: 10px 25px; border: 1px solid var(--nju-purple);
    color: var(--nju-purple) !important; border-radius: 50px; text-decoration: none !important;
    font-weight: bold; font-family: sans-serif; transition: 0.3s; font-size: 0.9rem;
  }
  .btn-back:hover { background: var(--nju-purple); color: white !important; }
</style>
