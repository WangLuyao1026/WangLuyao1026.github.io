---
layout: page
title: Research
permalink: /publications/
description: 学术研究与项目 | Academic Research
nav: true
nav_order: 5
---

<div class="research-container mt-5">

  <section class="thesis-section mb-6">
    <h2 class="section-title mb-4">🎓 本科毕业论文 | Undergraduate Thesis</h2>
    
    <div class="card border-0 shadow-lg thesis-card">
      <div class="row g-0">
        
        <div class="col-lg-6 col-md-12 bg-soft-gray d-flex align-items-center justify-content-center position-relative" style="min-height: 500px;">
          
          <img src="/assets/img/本科毕业论文.png" class="thesis-img-final shadow" alt="本科毕业论文封面">
          
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card-body p-4 p-lg-5 d-flex flex-column justify-content-center h-100">
            <div>
                <span class="badge badge-purple mb-3">Outstanding Thesis Award</span>
                <h3 class="thesis-title">云录制的生产制播范式与效用研究<br><small class="text-muted" style="font-size: 80%;">——以《天天云时间》为例</small></h3>
                
                <p class="thesis-meta mt-4">
                  <strong>Publication Date:</strong> June 2021<br>
                  <strong>Keywords:</strong> Cloud Recording, Media Sociology, Production Paradigm
                </p>

                <div class="thesis-abstract mt-4 mb-5">
                  <p><strong>Lay Summary</strong></p> <!-- （<strong>） -->
                  <p>本研究聚焦于疫情期间兴起的“云录制”模式，借助深度个案分析，剖析了电视综艺节目在物理空间受限下的生产范式重构、互动机制演变及社会效用。本研究发现，云录制绝非特殊时期的权宜之计——它既是媒体应对危机的创新尝试，更是媒体深度融合背景下的技术与文化预演。</p>
                </div>
            </div>

            <div class="mt-auto">
                <a href="/assets/pdf/本科毕业论文-云录制的生产制播范式与效用研究——以《天天云时间》为例.pdf" target="_blank" class="btn-download w-100 text-center w-md-auto">
                  <i class="fas fa-file-pdf mr-2"></i> 阅读完整论文 (PDF)
                </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <hr class="divider my-6">
  
  <section class="wip-section mb-6">
    <h2 class="section-title mb-4">🖥️ 进行中的研究 | Work in Progress</h2>
    <div class="wip-box p-5">
      <h4 style="color: var(--nju-purple); font-weight: 700;">Computational Narrative & User Behavior</h4>
      <p class="mt-3" style="font-size: 1.1rem;">Currently focusing on the social dynamics of information diffusion and user behavioural psychology in digital platforms.</p>
      <span class="badge bg-light text-dark mt-3">Coming Soon</span>
    </div>
  </section>

  <hr class="divider my-6">

  <section class="project-section mb-6">
    <h2 class="section-title mb-4">🔬 研究项目 | Research Projects</h2>

    <div class="card border-0 shadow-lg project-card">
      <div class="card-body p-4 p-lg-5">

        <!-- 项目头部 -->
        <div class="project-header mb-4 pb-3" style="border-bottom: 2px solid #f0e6ff;">
          <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
            <span class="badge badge-purple">传播数据大赛 · 选题三</span>
            <span class="badge bg-light text-dark" style="border: 1px solid #e0d6f0;">团队核心成员 · 数据分析与模型构建</span>
          </div>
          <h3 class="project-title mt-2">AIGC内容传播特征识别与社会影响评估研究</h3>
          <h4 class="project-subtitle">——基于AI就业（数智员工）话题的网络舆情分析</h4>
          <div class="project-meta mt-3">
            <span class="meta-item"><i class="far fa-calendar-alt mr-2"></i>2025.09 – 2026.03</span>
          </div>
        </div>

        <!-- 项目背景 -->
        <div class="project-block mb-4">
          <h5 class="block-title"><i class="fas fa-bullseye mr-2"></i>项目背景</h5>
          <p class="project-text">随着生成式人工智能进入公共传播空间，AIGC 内容可能通过低成本批量生产与自动化分发放大社会焦虑。本项目以微博「AI就业（数智员工）」话题为案例，探索如何在单一话题的极端稀疏网络中，识别 AIGC 内容的传播规律并量化其社会影响风险。</p>
        </div>

        <!-- 核心工作：三栏卡片 -->
        <div class="project-block mb-4">
          <h5 class="block-title"><i class="fas fa-cogs mr-2"></i>核心工作</h5>
          <div class="row g-4 mt-2">
            <div class="col-lg-4 col-md-12">
              <div class="work-item-card h-100">
                <div class="work-icon mb-3"><i class="fas fa-brain"></i></div>
                <h6 class="work-title">AIGC 内容识别模型</h6>
                <p class="small-text mb-0">基于 Chinese-RoBERTa-wwm-ext 基座模型，采用 LoRA 轻量微调策略（训练数据仅 600 条），在垂直领域实现小样本高精度检测（Accuracy <strong>98.33%</strong>，Precision <strong>100%</strong>，AUC <strong>0.9989</strong>），解决通用模型在领域文本上的系统性偏差。</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="work-item-card h-100">
                <div class="work-icon mb-3"><i class="fas fa-project-diagram"></i></div>
                <h6 class="work-title">传播网络结构分析</h6>
                <p class="small-text mb-0">构建包含 <strong>2,334,728</strong> 个节点、<strong>2,279,217</strong> 条边的有向加权传播网络，发现该话题呈现「大规模、低连接、高碎片化」的星型辐射结构（网络密度 4.18×10⁻⁷，模块化系数 0.9595），信息扩散高度依赖少数关键节点。</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="work-item-card h-100">
                <div class="work-icon mb-3"><i class="fas fa-exclamation-triangle"></i></div>
                <h6 class="work-title">NARI-S 风险指数模型</h6>
                <p class="small-text mb-0">基于引爆点理论，提出「网络结构放大风险指数模型（Network-Amplified Risk Index for Single-topic）」，将内容风险与网络位置放大能力耦合，采用乘法机制实现非线性风险分层。创新设计「源头系数」指标，精准捕捉「只发不收」的单向广播节点，有效区分 AIGC 内容工厂与正常资讯账号。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 关键发现 -->
        <div class="project-block mb-4">
          <h5 class="block-title"><i class="fas fa-lightbulb mr-2"></i>关键发现</h5>
          <div class="findings-box">
            <ul class="findings-list mb-0">
              <li><span class="finding-highlight">极端两极分化：</span>1 个核心风险节点（综合风险值 1.75，加权出度达 2717 亿，入度仅 48）疑似为高度自动化的 AIGC 内容工厂；</li>
              <li><span class="finding-highlight">单向广播矩阵：</span>7 个高风险节点构成入度为 0 的「单向广播矩阵」，呈现身份隐匿、定向操纵、批量分发的典型水军画像；</li>
              <li><span class="finding-highlight">内容敏感性阈值：</span>模型验证非敏感内容即使具备高传播势能，综合风险仍趋近于 0，说明精准识别内容属性是风险治理的关键。</li>
            </ul>
          </div>
        </div>

        <!-- 技术栈 -->
        <div class="project-block mb-4">
          <h5 class="block-title"><i class="fas fa-code mr-2"></i>技术实现</h5>
          <div class="tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Transformers</span>
            <span class="tech-tag">PEFT (LoRA)</span>
            <span class="tech-tag">NetworkX</span>
            <span class="tech-tag">scikit-learn</span>
            <span class="tech-tag">pandas</span>
            <span class="tech-tag">matplotlib</span>
          </div>
        </div>

        <!-- 项目价值 -->
        <div class="project-block">
          <h5 class="block-title"><i class="fas fa-trophy mr-2"></i>项目价值</h5>
          <p class="project-text mb-0">为平台 AIGC 治理提供了从「内容识别」到「结构预警」的可复用技术路径，验证了在碎片化传播网络中，微观拓扑位置比宏观社群结构更具风险预测力。</p>
        </div>

      </div>
    </div>
  </section>

</div>

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
<style>
  :root { --nju-purple: #4D0099; }

  /* 1. 全局字体优化 */
  body, p, li, h1, h2, h3, h4, h5, .navbar {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-weight: 500 !important;
    line-height: 1.9 !important;
    color: #2c3e50;
  }
  .navbar { font-weight: 600 !important; }

  /* 2. 布局优化 */
  .research-container { max-width: 1100px; margin: auto; }
  .section-title {
    color: var(--nju-purple);
    font-weight: 800;
    font-size: 1.8rem;
    font-family: 'Playfair Display', serif !important;
    border-left: 8px solid var(--nju-purple);
    padding-left: 20px;
  }
  .my-6 { margin-top: 5rem; margin-bottom: 5rem; }

  /* 3. 卡片样式 */
  .thesis-card {
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }
  
  /* 🔴 自定义通透浅灰色背景 */
  .bg-soft-gray {
    background-color: rgba(245, 247, 250, 0.6) !important;
  }

  /* 图片样式 */
  .thesis-img-final {
    width: 85%;
    height: auto;
    max-height: 90%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
  }

  /* 4. 文字区域 */
  .thesis-title { font-family: 'Playfair Display', serif !important; font-weight: 800; color: #1a1a1a; font-size: 1.6rem; line-height: 1.3; }
  .badge-purple { background-color: var(--nju-purple); color: white; padding: 6px 15px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; }
  .thesis-abstract { font-size: 1rem; color: #444; background: #f8f6fc; padding: 20px; border-radius: 12px; border-left: 4px solid var(--nju-purple); }
  
  /* ✨ 关键修改1：Lay Summary 颜色（紫色）+ 粗体（已用<strong>，此处确保颜色） */
  .thesis-abstract p:first-child strong {
    color: var(--nju-purple); /* 紫色 */
    font-weight: bold; /* 显式确保粗体（原<strong>已含，双重保险） */
  }
  
  /* ✨ 关键修改2：缩小与下方正文的间距（仅调整第一个<p>的下边距） */
  .thesis-abstract p:first-child {
    margin-bottom: 0.5rem; /* 原默认约1rem，缩小为0.5rem（可微调数值） */
  }

  /* 5. 按钮 */
  .btn-download { display: inline-block; background: var(--nju-purple); color: white !important; padding: 12px 30px; border-radius: 50px; text-decoration: none !important; font-weight: 800; transition: 0.3s; }
  .btn-download:hover { background: #330066; transform: translateY(-2px); }

  .wip-box { background: #fff; border: 2px dashed #e0d6f0; border-radius: 20px; text-align: center; }

  /* ========== AIGC 项目展示专用样式 ========== */

  .project-card {
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }

  .project-title {
    font-family: 'Playfair Display', serif !important;
    font-weight: 800;
    color: #1a1a1a;
    font-size: 1.7rem;
    line-height: 1.3;
    margin-bottom: 0.3rem;
  }

  .project-subtitle {
    font-family: 'Lora', "PingFang SC", "Microsoft YaHei", sans-serif !important;
