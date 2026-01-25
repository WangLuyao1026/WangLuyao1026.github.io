---
layout: about
title: 个人主页 (About) # 导航栏显示的名称
permalink: /
# 👇 顶部的胶囊式语言切换按钮
subtitle: >
  <div class="lang-container">
    <span class="lang-btn active">English</span>
    <a href="/cn/" class="lang-btn inactive">中文</a>
  </div>

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

selected_papers: false # 首页不自动列出论文，改用下方的精选摘要
social: true
nav: true        # 开启导航栏显示
nav_order: 1     # 排序第1
announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
---

I am **Luyao Wang**, currently reading for an M.A. in **Journalism & Communication** (2025 Cohort) at [Nanjing University](https://www.nju.edu.cn/en/), specialising in **Computational Communication**. My research bridges data science and communication theory, with a particular focus on **user behavioural psychology** in digital platforms, the **social dynamics of information diffusion**, and the impact of **computational narrative** on public cognition and emotion.

### 🧩 Core Competencies

* **Professional Practice**: Extensive experience in news media and omni-media platforms, with a B.A. in Broadcasting and Television.
* **Data Capabilities**: Proficient in SNA, Text Mining, and Statistical Modeling for large-scale user behavioral analysis.
* **Theoretical Vision**: Focusing on the interplay between data, users, media, and society in the intelligent media era.

---

### 🎓 Undergraduate Thesis (Summary)

* **Title**: *"Research on Production Paradigm and Utility of Cloud Recording"*
* **Honor**: Outstanding Graduation Thesis
* **Abstract**: This study explores the production process, interaction mechanisms, and social utility of "Cloud Recording" programs during the pandemic, offering insights into the digital transformation of the broadcasting industry.

<div class="more-link">
    <a href="/publications/" class="read-more-btn">👉 View Thesis Details</a>
</div>

---

### 💼 Professional Experience (Highlights)

* **New Media Editor** | *Jinan Railway Bureau (2024 - Present)*
    * Managed official accounts; Single post reached **200k+ views**.
* **Journalist & Editor** | *Lixia District Procuratorate (2022 - 2023)*
    * Leveraged **Big Data** for legal supervision and content optimization.
* **Video Planner (Intern)** | *Dazhong Newspaper Group (2021)*
    * Produced viral health communication videos (**100k+ likes**).

<div class="more-link">
    <a href="/cv/" class="read-more-btn">👉 View Full Curriculum Vitae (CV)</a>
</div>

---

### 🎨 Selected Portfolio

Highlights of my work in Data Journalism, Visual Design, and Video Production.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <a href="/projects/4_glimmer/">
                <img class="card-img-top" src="/assets/img/work_glimmer.jpg" alt="Glimmer" onerror="this.src='https://placehold.co/600x400?text=Work';">
                <div class="card-body">
                    <h5 class="card-title">Micro-film: "Glimmer" 🔗</h5>
                    <p class="card-text">Award-winning film on juvenile protection.</p>
                </div>
            </a>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100">
            <a href="/projects/2_railway_ip/">
                <img class="card-img-top" src="/assets/img/work_design.jpg" alt="Design" onerror="this.src='https://placehold.co/600x400?text=Work';">
                <div class="card-body">
                    <h5 class="card-title">Visual Identity System 🔗</h5>
                    <p class="card-text">Brand design for Railway Safety.</p>
                </div>
            </a>
        </div>
    </div>
</div>

<div class="more-link" style="margin-top: 20px;">
    <a href="/projects/" class="read-more-btn">👉 Explore Full Portfolio (7 Projects)</a>
</div>

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

<style>
  /* --- 全局字体与颜色 --- */
  :root { --nju-purple: #4D0099; }
  body { font-family: 'Lora', serif !important; font-size: 18px !important; line-height: 1.9 !important; color: #2c2c2c !important; }
  h1, h2, h3, h4 { font-family: 'Playfair Display', serif !important; color: #000000 !important; letter-spacing: -0.01em !important; }
  
  /* 标题下划线 */
  h3 { margin-top: 2.5rem !important; margin-bottom: 1.2rem !important; font-size: 1.6rem !important; border-bottom: 2px solid var(--nju-purple) !important; padding-bottom: 10px; display: inline-block; }
  
  /* 链接颜色 */
  a { color: var(--nju-purple) !important; text-decoration: none; transition: all 0.2s ease; }
  a:hover { color: #330066 !important; }

  /* --- 胶囊切换按钮 (Pill Button) --- */
  .lang-container { margin-top: 15px; margin-bottom: 5px; }
  .lang-btn { display: inline-block; padding: 6px 18px; border: 2px solid var(--nju-purple); border-radius: 50px; font-family: 'Playfair Display', serif; font-size: 1.05rem; text-decoration: none !important; margin-right: 12px; transition: all 0.3s ease; }
  .lang-btn.active { background-color: var(--nju-purple); color: #fff !important; box-shadow: 0 4px 12px rgba(77, 0, 153, 0.3); border-bottom: 2px solid var(--nju-purple) !important; cursor: default; }
  .lang-btn.inactive { color: var(--nju-purple) !important; background-color: transparent; opacity: 0.6; border-bottom: 2px solid var(--nju-purple) !important; }
  .lang-btn.inactive:hover { opacity: 1; background-color: #f3e5f5; transform: translateY(-2px); }

  /* --- Read More 跳转按钮 --- */
  .more-link { text-align: center; margin-top: 10px; margin-bottom: 30px; }
  .read-more-btn {
    display: inline-block;
    padding: 10px 25px;
    border: 1px solid var(--nju-purple);
    border-radius: 5px;
    color: var(--nju-purple) !important;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    background-color: transparent;
    border-bottom: 1px solid var(--nju-purple) !important;
    transition: all 0.3s ease;
  }
  .read-more-btn:hover {
    background-color: var(--nju-purple);
    color: #fff !important;
    text-decoration: none;
    box-shadow: 0 4px 10px rgba(77, 0, 153, 0.2);
    transform: translateY(-2px);
  }

  /* --- 侧边栏 --- */
  .profile { width: 32% !important; margin-left: 40px !important; }
  .profile img { border-radius: 2px !important; box-shadow: 8px 8px 0px rgba(77, 0, 153, 0.1) !important; border: 1px solid #f0f0f0 !important; padding: 6px !important; background: #fff; max-width: 220px !important; }
  .profile-info p { margin: 4px 0 !important; font-family: 'Playfair Display', serif !important; font-size: 0.95rem !important; color: #444 !important; text-align: center; line-height: 1.3 !important; }
  .dept { font-weight: 600; color: #000; margin-top: 15px !important; }

  /* --- 卡片样式 --- */
  .card { border: none !important; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: transform 0.2s; cursor: pointer; }
  .card:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(77, 0, 153, 0.15); }
  .card-img-top { height: 180px; object-fit: cover; }
  .card-title { font-size: 1.1rem !important; font-weight: bold; margin-bottom: 0.5rem; color: var(--nju-purple) !important; }
  .card-text { font-size: 0.9rem !important; line-height: 1.5 !important; color: #666; }
  
  /* 列表与细节 */
  li { margin-bottom: 10px !important; }
  b, strong { color: #000; font-weight: 600; }

  /* 移动端适配 */
  @media (max-width: 768px) { 
    .profile { width: 70% !important; float: none !important; margin: 0 auto 30px auto !important; text-align: center; } 
  }
</style>
