---
layout: page
title: 中文版
permalink: /cn/
description: 关于我 | About Me
nav: true
nav_order: 2
---

<div class="academic-masthead">
  <div class="corner-logo">
    <img src="/assets/img/南京大学-logo-2048px.png" alt="南京大学" class="nju-brand-logo">
  </div>

  <div class="masthead-content text-center">
    <h1 class="hero-name-large">王 璐 瑶</h1>
    <p class="hero-name-en-sub">LUYAO WANG</p>
    
    <div class="academic-identity mt-4">
      <span class="uni-pill">NANJING UNIVERSITY</span>
      <span class="dept-info">新闻传播学院 · 2025 级硕士研究生</span>
    </div>
  </div>

  <div class="academic-manifesto mt-5">
    <div class="manifesto-inner">
      <p class="manifesto-main-quote">
        “致力于探索<strong>数据理性</strong>、<strong>用户行为</strong>与<strong>社会理论</strong>的连接点。”
      </p>
      <div class="manifesto-line"></div>
      <p class="manifesto-details">
        重点关注数字平台上的用户行为心理、信息扩散的社会动力学，<br class="d-none d-md-block">
        以及计算叙事对公众认知与情感的影响。
      </p>
    </div>
  </div>
</div>

<hr class="section-divider">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<style>
  :root { --nju-purple: #4D0099; --nju-light-bg: #fdfcff; }

  /* 1. 整体布局：增加呼吸感 */
  body, p, li, h1, h2, h3, h4, h5, div { font-family: "Noto Serif SC", serif !important; }
  body { -webkit-font-smoothing: antialiased; background-color: #fff; }

  .academic-masthead {
    position: relative;
    padding: 80px 0 60px 0;
    margin-bottom: 2rem;
  }

  /* 2. 左上角校徽排版 */
  .corner-logo {
    position: absolute;
    top: 20px;
    left: 0;
  }
  .nju-brand-logo {
    height: 80px; /* 适当调大，彰显大气 */
    width: auto;
    opacity: 0.95;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.05));
  }

  /* 3. 姓名排版：加大字号与间距 */
  .hero-name-large {
    font-size: 3.5rem; /* 显著加大 */
    font-weight: 900;
    color: var(--nju-purple);
    letter-spacing: 15px; /* 极宽间距，提升高级感 */
    margin-bottom: 5px;
    line-height: 1;
  }
  .hero-name-en-sub {
    font-family: sans-serif !important;
    font-size: 1rem;
    color: #bbb;
    letter-spacing: 6px;
    text-indent: 6px;
    font-weight: 500;
  }

  /* 4. 身份标签排版 */
  .uni-pill {
    font-family: sans-serif !important;
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--nju-purple);
    border: 2px solid var(--nju-purple);
    padding: 3px 15px;
    border-radius: 4px;
    letter-spacing: 1px;
  }
  .dept-info {
    margin-left: 15px;
    color: #666;
    font-weight: 500;
    font-size: 1.1rem;
  }

  /* 5. 核心宣言排版：解决单薄感 */
  .academic-manifesto {
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 30px;
    background: var(--nju-light-bg);
    border-radius: 20px;
    position: relative;
    border: 1px solid #f2f0f5;
  }
  .manifesto-main-quote {
    font-size: 1.6rem; /* 核心句子加大 */
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 25px;
    line-height: 1.5;
  }
  .manifesto-line {
    width: 40px;
    height: 3px;
    background: var(--nju-purple);
    margin: 0 auto 25px auto;
    border-radius: 2px;
    opacity: 0.6;
  }
  .manifesto-details {
    font-size: 1.15rem;
    color: #555;
    line-height: 2;
    font-weight: 400;
  }

  .section-divider {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0));
    margin: 4rem 0;
  }

  /* 移动端适配 */
  @media (max-width: 992px) {
    .corner-logo { position: static; text-align: center; margin-bottom: 30px; }
    .hero-name-large { font-size: 2.5rem; letter-spacing: 8px; }
    .dept-info { display: block; margin-left: 0; margin-top: 15px; }
    .academic-manifesto { padding: 30px 20px; }
    .manifesto-main-quote { font-size: 1.3rem; }
  }
</style>

<hr class="divider-fade">

<div class="section-container mt-6">
  <div class="section-header text-center">
    <h3 class="section-cn-title">核心竞争力</h3>
    <p class="section-en-title">CORE COMPETENCIES</p>
  </div>

  <div class="row g-4 mt-2">
    <div class="col-md-4">
      <div class="skill-card-clean">
        <div class="skill-icon">🎬</div>
        <h4>专业实践</h4>
        <p>广播电视编导学士，拥有丰富的新闻媒体及全媒体平台实务经验，具备敏锐的选题策划与视听表达能力。</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="skill-card-clean highlight-border">
        <div class="skill-icon">📊</div>
        <h4>数据能力</h4>
        <p>擅长使用 Python/R 进行社会网络分析 (SNA)、网络数据分析和高级统计等，专注于用户行为的量化研究。</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="skill-card-clean">
        <div class="skill-icon">💡</div>
        <h4>理论视野</h4>
        <p>聚焦智媒时代下数据、用户、媒体与社会结构之间的深度互动，在跨学科视野中保持批判性思考。</p>
      </div>
    </div>
  </div>
</div>

<div class="section-container mt-6">
  <div class="featured-thesis-card">
    <div class="row align-items-center">
      <div class="col-md-3 text-center border-right-md">
        <div class="academic-honor">
          <span class="h-year">2022</span>
          <span class="h-text">校级优秀<br>毕业论文</span>
        </div>
      </div>
      <div class="col-md-9 pl-md-5">
        <span class="academic-tag">UNDERGRADUATE RESEARCH</span>
        <h4 class="thesis-main-title">《云录制的生产制播范式与效用研究》</h4>
        <p class="thesis-main-desc">
          通过个案分析探讨疫情期间“云录制”节目的生产流程重构与互动机制演变。研究认为，云录制不仅是应急之举，更是媒体深度融合背景下的技术与文化预演。
        </p>
        <a href="/publications/" class="link-more">阅读研究详情 &rarr;</a>
      </div>
    </div>
  </div>
</div>

<div class="section-container mt-6">
  <div class="section-header text-center mb-5">
    <h3 class="section-cn-title">职业轨迹</h3>
    <p class="section-en-title">PROFESSIONAL EXPERIENCE</p>
  </div>

  <div class="custom-timeline">
    <div class="timeline-entry">
      <div class="t-time">2024 - 2025</div>
      <div class="t-dot"></div>
      <div class="t-content">
        <h5 class="t-job">新媒体编辑运营</h5>
        <div class="t-org">山东省委政法委·济南铁路局</div>
        <p class="t-desc">负责官方公众号视觉设计与运营。策划跨越 16 个城市的系列宣传，通过数据驱动优化选题，总阅读量突破 <strong>130万+</strong>。</p>
      </div>
    </div>
    <div class="timeline-entry">
      <div class="t-time">2022 - 2024</div>
      <div class="t-dot"></div>
      <div class="t-content">
        <h5 class="t-job">记者 / 编辑</h5>
        <div class="t-org">检察日报 & 历下区检察院</div>
        <p class="t-desc">参与“大数据赋能法律监督”创新项目。统筹管理微博、微信等新媒体矩阵，负责政法系统的对内对外宣传工作。</p>
      </div>
    </div>
    <div class="timeline-entry">
      <div class="t-time">2021</div>
      <div class="t-dot"></div>
      <div class="t-content">
        <h5 class="t-job">新媒体编辑与策划</h5>
        <div class="t-org">大众报业集团</div>
        <p class="t-desc">负责三甲医院健康传播运营。独立完成脚本策划与后期剪辑，打造了点赞量破 <strong>10万+</strong> 的科普爆款视频。</p>
      </div>
    </div>
  </div>
  
  <div class="text-center mt-5">
    <a href="/experience/" class="btn-archive-link">查看完整履历档案</a>
  </div>
</div>

<div class="section-container mt-6 mb-6">
  <div class="section-header text-center">
    <h3 class="section-cn-title">精选作品</h3>
    <p class="section-en-title">SELECTED PORTFOLIO</p>
  </div>

  <div class="row g-4">
    <div class="col-md-6">
      <a href="/projects/" class="work-card-link">
        <div class="work-card">
          <div class="work-img-wrapper">
             <img src="/assets/img/about展示封面-微光.jpg" alt="微电影">
             <div class="work-mask"><span>观看详情</span></div>
          </div>
          <div class="work-body">
            <span class="work-label">News & Documentary</span>
            <h5>微电影：《微光》</h5>
            <p>政法系统获奖作品，以影像叙事探讨社会正义。</p>
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-6">
      <a href="/projects/" class="work-card-link">
        <div class="work-card">
          <div class="work-img-wrapper">
             <img src="/assets/img/about展示封面-1.png" alt="VI设计">
             <div class="work-mask"><span>查看设计</span></div>
          </div>
          <div class="work-body">
            <span class="work-label">Visual Identity</span>
            <h5>视觉识别系统 (VI)</h5>
            <p>为相关单位提供政治传播战略视觉化设计方案。</p>
          </div>
        </div>
      </a>
    </div>
  </div>
  
  <div class="text-center mt-5">
    <a href="/projects/" class="btn-gallery">进入作品集长廊</a>
  </div>
</div>

<hr class="divider-fade">

<div class="clean-footer text-center mb-5">
  <div class="f-name">LUYAO WANG</div>
  <div class="f-contact mt-3">
    <span><i class="fas fa-envelope"></i> <a href="mailto:522025110043@smail.nju.edu.cn">522025110043@smail.nju.edu.cn</a></span>
    <span class="mx-3">|</span>
    <span><i class="fab fa-weixin"></i> W_10269Y</span>
  </div>
  <div class="f-addr mt-2 text-muted">
    南京大学新闻传播学院 · 中国南京仙林校区
  </div>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<style>
  :root { --nju-purple: #4D0099; --nju-light: #f9f7fd; }

  /* 全局重置 */
  body, p, li, h1, h2, h3, h4, h5, div { font-family: "Noto Serif SC", serif !important; }
  body { line-height: 1.8; color: #333; -webkit-font-smoothing: antialiased; }
  
  .lang-switcher-float { position: absolute; top: 0; right: 0; font-family: sans-serif !important; font-size: 0.9rem; }
  .lang-link { color: #aaa; text-decoration: none; }
  .lang-active { color: var(--nju-purple); font-weight: bold; }
  .lang-sep { color: #eee; margin: 0 8px; }

  /* 1. Hero 样式修复 */
  .hero-header { padding: 40px 0; }
  .nju-logo { height: 90px; width: auto; }
  .hero-name { font-size: 2.8rem; font-weight: 900; color: var(--nju-purple); letter-spacing: 10px; margin-bottom: 5px; }
  .hero-name-en { font-family: sans-serif !important; font-size: 0.9rem; color: #bbb; letter-spacing: 4px; margin-bottom: 30px; }
  .uni-badge { font-family: sans-serif !important; font-weight: 700; font-size: 0.85rem; color: var(--nju-purple); border: 1.5px solid var(--nju-purple); padding: 2px 10px; border-radius: 4px; }
  .dept-text { margin-left: 12px; color: #888; font-weight: 500; }

  .statement-block { max-width: 800px; margin: 0 auto; }
  .main-quote { font-size: 1.4rem; font-weight: 500; color: #111; margin-bottom: 15px; }
  .quote-line { width: 30px; height: 3px; background: var(--nju-purple); margin: 0 auto 20px auto; border-radius: 2px; }
  .sub-quote { font-size: 1.05rem; color: #666; }

  /* 2. 核心竞争力：去杂质排版 */
  .section-container { max-width: 1000px; margin-left: auto; margin-right: auto; }
  .section-cn-title { font-size: 1.6rem; font-weight: 800; color: #222; letter-spacing: 3px; margin-bottom: 2px; }
  .section-en-title { font-family: sans-serif !important; font-size: 0.75rem; color: #ccc; letter-spacing: 2px; }
  
  .skill-card-clean { padding: 30px 20px; text-align: center; border: 1px solid #f0f0f0; border-radius: 12px; height: 100%; transition: 0.3s; }
  .skill-card-clean:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
  .highlight-border { border-top: 4px solid var(--nju-purple); }
  .skill-icon { font-size: 2rem; margin-bottom: 15px; }
  .skill-card-clean h4 { font-size: 1.2rem; font-weight: 700; color: var(--nju-purple); margin-bottom: 12px; }
  .skill-card-clean p { font-size: 0.95rem; color: #666; line-height: 1.6; margin: 0; }

  /* 3. 毕业论文：最美版式回归 */
  .featured-thesis-card { background: #fafafa; border-radius: 15px; padding: 40px; border: 1px solid #eee; margin-top: 2rem; }
  .academic-honor { width: 110px; height: 110px; border-radius: 50%; border: 2.5px solid var(--nju-purple); color: var(--nju-purple); display: inline-flex; flex-direction: column; justify-content: center; align-items: center; }
  .h-year { font-family: sans-serif !important; font-weight: 800; font-size: 1.2rem; }
  .h-text { font-size: 0.85rem; font-weight: 700; line-height: 1.3; }
  .academic-tag { font-family: sans-serif !important; font-size: 0.7rem; color: #999; letter-spacing: 1px; }
  .thesis-main-title { font-size: 1.45rem; font-weight: 800; margin: 12px 0; color: #000; }
  .thesis-main-desc { font-size: 1rem; color: #555; text-align: justify; }
  .link-more { color: var(--nju-purple) !important; font-weight: 700; text-decoration: none; font-size: 0.95rem; }

  /* 4. 时间轴：连贯设计 */
  .custom-timeline { max-width: 850px; margin: 0 auto; position: relative; padding-left: 20px; }
  .custom-timeline::before { content: ""; position: absolute; left: 160px; top: 10px; bottom: 40px; width: 2px; background: #eee; }
  .timeline-entry { display: flex; margin-bottom: 50px; position: relative; }
  .t-time { width: 140px; flex-shrink: 0; text-align: right; padding-right: 40px; font-family: sans-serif !important; font-weight: 700; color: var(--nju-purple); font-size: 1rem; padding-top: 4px; }
  .t-dot { width: 12px; height: 12px; background: #fff; border: 3px solid var(--nju-purple); border-radius: 50%; position: absolute; left: 160px; top: 11px; transform: translateX(-50%); z-index: 2; box-shadow: 0 0 0 5px #fff; }
  .t-content { flex-grow: 1; padding-left: 50px; }
  .t-job { font-weight: 800; font-size: 1.2rem; margin-bottom: 4px; color: #111; }
  .t-org { font-family: sans-serif !important; font-size: 0.9rem; font-weight: 600; color: #888; margin-bottom: 10px; }
  .t-desc { font-size: 0.95rem; color: #666; margin: 0; }
  .btn-archive-link { display: inline-block; padding: 10px 35px; border: 1.5px solid #ddd; color: #999 !important; border-radius: 50px; font-weight: 600; text-decoration: none; font-size: 0.9rem; }
  .btn-archive-link:hover { border-color: var(--nju-purple); color: var(--nju-purple) !important; }

  /* 5. 作品展示 */
  .work-card { background: #fff; transition: 0.4s; }
  .work-img-wrapper { height: 260px; border-radius: 12px; overflow: hidden; position: relative; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
  .work-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
  .work-mask { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(77,0,153,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; }
  .work-mask span { color: #fff; font-weight: 700; border: 1px solid #fff; padding: 8px 20px; border-radius: 50px; font-family: sans-serif !important; }
  .work-card:hover .work-mask { opacity: 1; }
  .work-card:hover img { transform: scale(1.1); }
  .work-body { padding: 20px 0; }
  .work-label { font-family: sans-serif !important; font-size: 0.75rem; color: var(--nju-purple); font-weight: 800; letter-spacing: 1px; }
  .work-body h5 { font-weight: 800; font-size: 1.2rem; margin: 6px 0; }
  .btn-gallery { display: inline-block; padding: 12px 40px; border: 2px solid var(--nju-purple); color: var(--nju-purple) !important; font-weight: 800; border-radius: 4px; text-decoration: none !important; }
  .btn-gallery:hover { background: var(--nju-purple); color: #fff !important; }

  /* 板块控制 */
  .mt-6 { margin-top: 5.5rem; }
  .divider-fade { border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0)); margin: 3rem 0; }
  .divider-full { border-top: 1px solid #eee; margin: 6rem 0 4rem 0; }
  
  .f-name { font-family: sans-serif !important; font-weight: 900; letter-spacing: 3px; color: #ddd; font-size: 1.2rem; }
  .f-contact { font-family: sans-serif !important; font-size: 0.9rem; color: #666; }
  .f-contact a { color: #666; text-decoration: none; border-bottom: 1px solid #ddd; }

  @media (max-width: 768px) {
    .custom-timeline::before, .t-dot { display: none; }
    .timeline-entry { flex-direction: column; }
    .t-time { text-align: left; width: auto; padding-right: 0; margin-bottom: 5px; }
    .t-content { padding-left: 0; }
    .border-right-md { border-right: none; border-bottom: 1px dashed #ddd; padding-bottom: 30px; margin-bottom: 30px; }
  }
</style>
