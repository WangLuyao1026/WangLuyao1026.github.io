---
layout: page
title: Portfolio
permalink: /projects/
description: 个人作品集 | Selected Works
nav: true
nav_order: 4
---

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">

<div class="projects-container mt-5">
  
  <section class="graphic-section mb-6">
    <h2 class="section-title mb-5">📷 图文作品 | Graphic · Design</h2>
    
    {% assign projects = site.projects | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-2 g-5">
      {% for project in projects %}
      <div class="col mb-4">
        <a href="{{ project.url | relative_url }}" class="card-wrapper">
          <div class="card h-100 border-0 shadow-soft project-card">
            <div class="card-img-container">
              <img src="{{ project.img | relative_url }}" class="card-img-top" alt="{{ project.title }}">
            </div>
            <div class="card-body p-4 px-md-5 pb-5">
              <h3 class="project-item-title">{{ project.title }}</h3>
              <p class="project-item-desc">{{ project.description }}</p>
              <span class="view-link">View Details <i class="fas fa-arrow-right ml-1"></i></span>
            </div>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </section>

  <div class="spacer my-6"></div>

  <section class="video-section">
    <h2 class="section-title mb-5">🎬 微电影微视频作品 | Video Works</h2>
    
    <div class="notice-box mb-5">
      <p class="mb-0">🛡️ <strong>隐私说明</strong>：部分视频涉及检察实务，存储于加密网盘。请复制下方口令打开「夸克APP」获取视频合集。</p>
      <div class="quark-code-pill mt-3">
        <code>口令：/~ac563LzGnJ~:/</code>
      </div>
    </div>

    <div class="video-list">
      {% assign video_titles = "微电影《微光》|《从短视频到数字基础设施：抖音的平台商业模式分析》|预览图（部分）|《大数据的力量》|《守护明天 检爱少年》" | split: "|" %}
      {% assign video_descs = "官方媒体矩阵内容策划、新闻实务作品。|《数字媒介经济》课程实践作品。以系统论视角切入，从四大维度全景剖析抖音从单一APP跃升为数字基础设施的底层商业逻辑。|聚焦于未成年人法律保护，获得全国政法系统“三微”比赛十佳。|检察创新纪实片，展示数据建模对提升法律监督效能的意义。|2022年度历下未检工作纪实专题片。" | split: "|" %}
      {% assign video_imgs = "作品列举1.png|作品列举2.png|作品列举3.png|作品列举4.png|作品列举5.png" | split: "|" %}

      {% for i in (0..4) %}
      <div class="video-row row align-items-center mb-6 py-4">
        <div class="col-md-7 mb-4 mb-md-0">
          <div class="video-img-wrapper">
            <img src="/assets/img/{{ video_imgs[i] }}" class="img-fluid rounded shadow-sm" alt="{{ video_titles[i] }}">
          </div>
        </div>
        <div class="col-md-5 pl-md-5">
          <h4 class="video-card-title">{{ video_titles[i] }}</h4>
          <p class="video-card-desc">{{ video_descs[i] }}</p>
          <a href="https://pan.quark.cn/s/5f707320b672" target="_blank" class="nju-btn">📂 观看作品</a>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
</div>

<style>
  :root { --nju-purple: #4D0099; --text-light: #666; }

  /* 🔴 核心修复：全局应用高级衬线体 (覆盖页面大标题) */
  body, p, li, h1, h2, h3, h4, h5, .post-title, .post-description {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important; /* 增加行距，提升呼吸感 */
    color: #2c3e50;
  }

  /* 布局容器 */
  .projects-container { max-width: 1100px; margin: 0 auto; }

  /* 标题美化 */
  .section-title {
    color: var(--nju-purple);
    font-family: 'Playfair Display', serif !important; /* 强调性大标题字体 */
    font-weight: 800;
    font-size: 2rem;
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
    letter-spacing: -0.5px;
  }
  .my-6 { margin-top: 6rem !important; margin-bottom: 6rem !important; }

  /* 图文卡片样式 */
  .card-wrapper { text-decoration: none !important; color: inherit !important; }
  .project-card { border-radius: 20px !important; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); background: #fff; }
  .shadow-soft { box-shadow: 0 10px 40px rgba(0,0,0,0.04) !important; }
  .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 50px rgba(77, 0, 153, 0.12) !important; }

  /* 增加图片容器高度 */
  .card-img-container {
    height: 380px;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }
  .card-img-top { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
  .project-card:hover .card-img-top { transform: scale(1.05); }

  .project-item-title { font-size: 1.5rem; font-weight: 700; color: #1a1a1a; margin-bottom: 1.2rem; }
  .project-item-desc { font-size: 1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 1.5rem; }
  .view-link { color: var(--nju-purple); font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }

  /* 视频列表样式 */
  .video-row { border-bottom: 1px solid #f0f0f0; }
  .video-row:last-child { border-bottom: none; }
  .video-card-title { font-size: 1.4rem; font-weight: 700; color: var(--nju-purple); }
  .video-card-desc { font-size: 1rem; line-height: 1.8; color: var(--text-light); margin: 1.2rem 0; }
  .video-img-wrapper { transition: transform 0.4s ease; }
  .video-row:hover .video-img-wrapper { transform: scale(1.02); }

  /* 按钮与组件 */
  .nju-btn { display: inline-block; padding: 12px 30px; background: var(--nju-purple); color: white !important; border-radius: 50px; font-weight: 600; text-decoration: none !important; transition: 0.3s; }
  .nju-btn:hover { background: #330066; box-shadow: 0 8px 20px rgba(77, 0, 153, 0.3); }
  .notice-box { background: #f9f7ff; padding: 25px; border-radius: 12px; border: 1px solid #ede7f6; }
  .quark-code-pill { display: inline-block; background: #fff; padding: 6px 20px; border-radius: 50px; border: 1px solid var(--nju-purple); color: var(--nju-purple); font-weight: bold; }

  /* 移动端适配 */
  @media (max-width: 768px) {
    .section-title { font-size: 1.6rem; }
    .card-img-container { height: 300px; }
  }
</style>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
<style>
  /* 1. 引入高级英文字体 + 强制中文黑体加粗 */
  body, p, li, h1, h2, h3, h4, h5, .navbar {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  
  /* 2. 解决字体太细、发虚的问题 */
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important; /* 核心：稍微加粗，质感立刻提升 */
    color: #2c3e50;
  }

  /* 3. 导航栏加粗 */
  .navbar {
    font-weight: 600 !important;
  }

  /* 4. 标题使用衬线体 */
  h1, h2, h3, .section-title, .thesis-title, .project-item-title {
    font-family: 'Playfair Display', "PingFang SC", serif !important;
  }
</style>
