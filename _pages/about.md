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

<div class="selected-portfolio-grid mt-4">
    <div class="row g-4">
        <div class="col-md-6">
            <a href="/projects/" class="portfolio-home-link">
                <div class="card h-100 portfolio-card shadow-sm border-0">
                    <div class="card-img-container">
                        <img class="card-img-top" src="/assets/img/about展示封面-微光.jpg" alt="Micro-film Glimmer">
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title">Micro-film: “Glimmer” 🔗</h5>
                        <p class="card-text">Award-winning film on juvenile protection and social justice.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6">
            <a href="/projects/" class="portfolio-home-link">
                <div class="card h-100 portfolio-card shadow-sm border-0">
                    <div class="card-img-container">
                        <img class="card-img-top" src="/assets/img/about展示封面-1.png" alt="Visual Identity">
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title">Visual Identity System 🔗</h5>
                        <p class="card-text">Professional brand design and communication strategy for public sectors.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>

<div class="more-link" style="margin-top: 40px;">
    <a href="/projects/" class="read-more-btn">👉 Explore Full Portfolio & Video Works</a>
</div>

<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局排版美化 */
  article.post, .post-content {
    font-family: 'Lora', 'Georgia', serif !important; /* 更高级的英文和标点渲染 */
    font-size: 1.12rem !important;
    line-height: 1.9 !important; /* 极宽行距，告别拥挤 */
    color: #2c3e50 !important;
    text-align: justify;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  /* 段落间距加宽 */
  .post-content p, .post-content ul { margin-bottom: 1.8rem !important; }

  /* 2. 标题高级感 */
  h3 {
    font-family: 'Playfair Display', serif !important;
    color: #1a1a1a !important;
    margin-top: 3.5rem !important;
    margin-bottom: 1.5rem !important;
    border-bottom: 2px solid var(--nju-purple);
    padding-bottom: 8px;
    display: inline-block;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  /* 3. Selected Portfolio 卡片重塑 */
  .portfolio-home-link { text-decoration: none !important; color: inherit !important; }
  
  .portfolio-card {
    border-radius: 20px !important;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    background: #fff;
  }

  .portfolio-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(77, 0, 153, 0.12) !important;
  }

  .card-img-container {
    height: 200px;
    overflow: hidden;
  }

  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .portfolio-card:hover .card-img-top {
    transform: scale(1.08);
  }

  .portfolio-card .card-title {
    color: var(--nju-purple) !important;
    font-weight: 700;
    font-size: 1.2rem !important;
    margin-bottom: 0.8rem;
  }

  .portfolio-card .card-text {
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    color: #666;
  }

  /* 4. 组件美化 */
  .profile { margin-left: 35px !important; width: 28% !important; max-width: 200px !important; }
  .profile-info p { margin-bottom: 4px !important; font-size: 0.85rem !important; }
  
  .lang-switcher { margin-bottom: 35px; }
  .btn-pill { 
    display: inline-block; padding: 6px 20px; border-radius: 50px; 
    font-weight: bold; border: 2px solid var(--nju-purple); 
    font-family: 'Playfair Display', serif;
  }
  .btn-pill.active { background-color: var(--nju-purple); color: #fff !important; }
  
  .read-more-btn { 
    display: inline-block; padding: 10px 28px; 
    border: 1.5px solid var(--nju-purple); border-radius: 50px; 
    color: var(--nju-purple) !important; font-weight: bold; 
    text-decoration: none !important; transition: 0.3s;
  }
  .read-more-btn:hover { background: var(--nju-purple); color: #fff !important; }

  /* 响应式 */
  @media (max-width: 768px) {
    .profile { float: none !important; width: 60% !important; margin: 0 auto 30px auto !important; }
    .card-img-container { height: 160px; }
  }
</style>
