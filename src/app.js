const { createApp } = Vue

createApp({
  data() {
    return {
      navItems: [
        { label: '首页', href: '#home' },
        { label: '关于我们', href: '#about' },
        { label: '能力方向', href: '#capabilities' },
        { label: '项目流程', href: '#workflow' },
        { label: '联系', href: '#contact' }
      ],
      capabilities: [
        {
          title: '品牌与叙事',
          text: '从世界观、角色气质到对外表达，建立统一、可持续延展的品牌语境。'
        },
        {
          title: '视觉设计',
          text: '覆盖官网、KV、海报、社群视觉与活动物料，让识别系统在不同场景都稳定成立。'
        },
        {
          title: '前端实现',
          text: '以静态官网、专题页和展示页面为主，兼顾美观、性能与部署便利性。'
        },
        {
          title: '社区运营',
          text: '把成员、观众与合作伙伴连接起来，让内容输出与组织成长形成正循环。'
        }
      ],
      workflow: [
        {
          step: '01',
          title: '定义目标',
          text: '确认你们要向谁表达、希望被如何记住，以及站点需要承担的实际用途。'
        },
        {
          step: '02',
          title: '整理素材',
          text: '汇总 Logo、文案、案例、角色设定与外链信息，建立统一内容底稿。'
        },
        {
          step: '03',
          title: '设计与开发',
          text: '在明确品牌语言后完成页面设计、动效编排和 Vue 静态化实现。'
        },
        {
          step: '04',
          title: '上线与维护',
          text: '部署到静态托管平台，后续只需维护文案与资源即可持续更新。'
        }
      ],
      highlights: [
        '打击极端反福瑞势力，反对网络暴力',
        '整治圈内不良风气，从根源断绝流言产生',
        '坚决维护公平正义，用事实说话'
      ]
    }
  }
}).mount('#app')
