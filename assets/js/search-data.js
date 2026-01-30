// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experience",
          title: "Experience",
          description: "工作经历与专业实践 | Professional Experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-portfolio",
          title: "Portfolio",
          description: "个人作品集 | Selected Works",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "学术研究与论文发表 | Academic Research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-年度省思",
          title: '年度省思',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/reflection/";
            },},{id: "projects-视觉识别与品牌设计",
          title: '视觉识别与品牌设计',
          description: "InDesign期刊排版、VI系统与Illustrator创意设计",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_visual_design/";
            },},{id: "projects-信息长图设计",
          title: '信息长图设计',
          description: "复杂政策与报告的视觉化转译 | Infographics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_infographic/";
            },},{id: "projects-数据可视化设计",
          title: '数据可视化设计',
          description: "检察数据的新闻化呈现 | Data Visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_data_viz/";
            },},{id: "projects-微信公众号运营",
          title: '微信公众号运营',
          description: "10w+ 爆款推文与 H5 交互设计",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_wechat/";
            },},{id: "projects-新闻纪实摄影",
          title: '新闻纪实摄影',
          description: "记录一线现场与人物风采 | News Documentary Photography",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_photography/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
