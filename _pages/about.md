---
layout: about
title: About
permalink: /
subtitle: 
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <div class="profile-info">
      <p class="dept">School of Journalism and Communication</p>
      <p class="univ">Nanjing University</p>
      <p class="loc">Nanjing, China</p>
    </div>
selected_papers: false
social: true
nav: false
nav_order: 1
announcements:
  enabled: true
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
---

<div class="lang-switcher">
  <span class="btn-pill active">English</span>
  <a href="/cn/" class="btn-pill inactive">中文版</a>
</div>

<div class="main-intro">
I am **Luyao Wang**, currently reading for an M.A. in **Journalism & Communication** (2025 Cohort) at [Nanjing University](https://www.nju.edu.cn/en/), specialising in **Computational Communication**. My research bridges data science and communication theory, with a particular focus on **user behavioural psychology** in digital platforms, the **social dynamics of information diffusion**, and the impact of **computational narrative** on public cognition and emotion.
</div>

### 🧩 Core Competencies

* **Professional Practice**: Extensive experience in news media and omni-media platforms, with a B.A. in Broadcasting and Television.
* **Data Capabilities**: Proficient in Social Network Analysis (SNA), Text Mining, and Statistical Modelling for large-scale user behavioural analysis.
* **Theoretical Vision**: Focusing on the interplay between data, users, media, and society in the intelligent media era.

---

### 🎓 Undergraduate Thesis (Summary)

* **Title**: *“Research on Production Paradigm and Utility of Cloud Recording”*
* **Honor**: Outstanding Graduation Thesis
* **Abstract**: This study explores the production process, interaction mechanisms, and social utility of “Cloud Recording” programmes during the pandemic, offering insights into the digital transformation of the broadcasting industry.

<div class="more-link">
    <a href="/publications/" class="read-more-btn">👉 View Research Details</a>
</div>

---

### 💼 Professional Experience (Highlights)

* **New Media Editor-in-Chief** | *Jinan Railway Bureau (2024–2025)*
    * Responsible for the operation and visual design of the official WeChat account.
    * Completed the publicity campaign series across sixteen cities; achieved **200k+** views for a single post.

* **Journalist & Editor** | *Procuratorial Daily (Shandong Station) & Lixia District Procuratorate (2022–2024)*
    * Participated in the “Big Data Empowering Legal Supervision” project, utilising data analysis to enhance communication efficiency.
    * Managed external new media channels (Weibo, WeChat, Toutiao) and promoted internal publicity for the political and legal system.

<div class="more-link">
    <a href="/experience/" class="read-more-btn">👉 View Full Experience</a>
</div>

---

### 🎨 Selected Portfolio

<div id="portfolioCarousel" class="carousel slide carousel-fade shadow-lg" data-ride="carousel" data-interval="4000">
  <ol class="carousel-indicators">
    <li data-target="#portfolioCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#portfolioCarousel" data-slide-to="1"></li>
  </ol>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-img-overlay"></div>
      <img src="/assets/img/about展示封面-微光.jpg" class="d-block w-100 carousel-img" alt="Micro-film Glimmer">
      <div class="carousel-caption d-none d-md-block text-left">
        <span class="badge badge-nju mb-2">Selected Video</span>
        <h2 class="slider-title">Micro-film: “Glimmer”</h2>
        <p class="slider-desc">Award-winning cinematic work on juvenile protection. Bridging visual storytelling with social justice.</p>
        <a href="/projects/" class="btn btn-view">Explore More <i class="fas fa-arrow-right ml-2"></i></a>
      </div>
    </div>

    <div class="carousel-item">
      <div class="carousel-img-overlay"></div>
      <img src="/assets/img/about展示封面-1.png" class="d-block w-100 carousel-img" alt="Visual Identity">
      <div class="carousel-caption d-none d-md-block text-left">
        <span class="badge badge-nju mb-2">Graphic Design</span>
        <h2 class="slider-title">Visual Identity System</h2>
        <p class="slider-desc">Comprehensive brand strategy and infrastructure design for professional sectors.</p>
        <a href="/projects/" class="btn btn-view">Explore More <i class="fas fa-arrow-right ml-2"></i></a>
      </div>
    </div>
  </div>

  <a class="carousel-control-prev" href="#portfolioCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#portfolioCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>

<div class="more-link-container text-center mt-5">
    <a href="/projects/" class="full-portfolio-btn">👉 View All Graphic & Video Works</a>
</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局排版美化 (Lora字体) */
  article.post, .post-content {
    font-family: 'Lora', 'Georgia', serif !important;
    font-size: 1.12rem !important;
    line-height: 1.9 !important;
    color: #2c3e50 !important;
    text-align: justify;
  }

  /* 2. 动态展播核心样式 */
  #portfolioCarousel {
    border-radius: 20px;
    overflow: hidden;
    margin-top: 2rem;
    height: 450px; /* 固定高度，看起来更稳重 */
  }

  .carousel-img {
    height: 450px;
    object-fit: cover; /* 确保图片充满且不变形 */
  }

  /* 图片上的暗色渐变层，确保文字清晰 */
  .carousel-img-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
    z-index: 1;
  }

  /* 文字说明区 */
  .carousel-caption {
    z-index: 2;
    left: 8%;
    bottom: 15%;
    max-width: 50%;
  }

  .slider-title {
    font-family: 'Playfair Display', serif !important;
    font-size: 2.2rem !important;
    font-weight: 700 !important;
    color: #fff !important;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .slider-desc {
    font-size: 1rem !important;
    line-height: 1.6 !important;
    color: rgba(255,255,255,0.9) !important;
    margin-bottom: 1.5rem;
  }

  /* 南大紫标签 */
  .badge-nju {
    background-color: var(--nju-purple);
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* 展播内的按钮 */
  .btn-view {
    border: 1px solid white;
    color: white !important;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s;
  }
  .btn-view:hover {
    background: white;
    color: var(--nju-purple) !important;
    transform: scale(1.05);
  }

  /* 3. 底部大按钮 */
  .full-portfolio-btn {
    display: inline-block;
    padding: 12px 35px;
    border: 2px solid var(--nju-purple);
    border-radius: 50px;
    color: var(--nju-purple) !important;
    font-weight: 800;
    font-size: 1rem;
    text-decoration: none !important;
    transition: 0.4s;
  }
  .full-portfolio-btn:hover {
    background: var(--nju-purple);
    color: white !important;
    box-shadow: 0 8px 20px rgba(77, 0, 153, 0.2);
  }

  /* 4. 移动端适配 */
  @media (max-width: 768px) {
    #portfolioCarousel { height: 300px; }
    .carousel-img { height: 300px; }
    .carousel-caption { 
        max-width: 80%; 
        bottom: 10%; 
        display: block !important; /* 手机端也显示，但缩小 */
    }
    .slider-title { font-size: 1.4rem !important; }
    .slider-desc { font-size: 0.8rem !important; }
    .btn-view { padding: 5px 15px; font-size: 0.75rem; }
  }
</style>
