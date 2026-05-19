export interface Option {
  id: string
  text: string
  traits: string[]
}

export interface Question {
  id: number
  dimension: string
  dimensionName: string
  question: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    dimension: 'self-awareness',
    dimensionName: '自我认知与内在力量',
    question: '当你连续加班一周后，终于迎来一个休息日，你会？',
    options: [
      { id: '1a', text: '一个人安静地看书、喝茶，享受独处时光', traits: ['introvert', 'self-care', 'reflective'] },
      { id: '1b', text: '联系许久没联系的朋友，出来聚聚聊聊近况', traits: ['social', 'proactive', 'connected'] },
      { id: '1c', text: '整理房间、计划下周工作，把生活拉回正轨', traits: ['organized', 'responsible', 'structured'] },
      { id: '1d', text: '睡到自然醒，然后随意逛逛，想做什么看心情', traits: ['flexible', 'relaxed', 'spontaneous'] },
    ]
  },
  {
    id: 2,
    dimension: 'self-awareness',
    dimensionName: '自我认知与内在力量',
    question: '同事在会议上公开称赞了你的方案，但这个方案其实是团队合作的成果，你会？',
    options: [
      { id: '2a', text: '微笑感谢，然后补充说明这是大家一起努力的功劳', traits: ['humble', 'team-player', 'fair'] },
      { id: '2b', text: '私下找那位同事说"下次提前说一下，我有点尴尬"', traits: ['authentic', 'boundary-setting', 'sincere'] },
      { id: '2c', text: '虽然表面平静，但心里很开心，觉得自己的能力被认可了', traits: ['self-aware', 'reserved', 'confident'] },
      { id: '2d', text: '觉得对方不是有意的，不用太在意，继续专注工作', traits: ['focused', 'practical', 'thick-skinned'] },
    ]
  },
  {
    id: 3,
    dimension: 'empathy',
    dimensionName: '人际互动与共情力',
    question: '朋友向你倾诉烦恼时，你通常更倾向于？',
    options: [
      { id: '3a', text: '认真倾听，然后帮他分析问题、给出具体建议', traits: ['analytical', 'problem-solver', 'helpful'] },
      { id: '3b', text: '先共情安慰，等他情绪好了再聊细节', traits: ['empathetic', 'patient', 'warm'] },
      { id: '3c', text: '分享自己类似的经历，让他知道他不是一个人', traits: ['connected', 'relatable', 'supportive'] },
      { id: '3d', text: '静静陪着，让他知道随时可以找你', traits: ['loyal', 'steady', 'reliable'] },
    ]
  },
  {
    id: 4,
    dimension: 'empathy',
    dimensionName: '人际互动与共情力',
    question: '走在路上，你发现一个陌生人看起来很沮丧，独自坐在长椅上，你可能会？',
    options: [
      { id: '4a', text: '走过去问他"你还好吗？需不需要陪陪你"', traits: ['courageous', 'compassionate', 'outgoing'] },
      { id: '4b', text: '买一杯热饮放在他旁边，然后默默离开', traits: ['kind', 'considerate', 'subtle'] },
      { id: '4c', text: '犹豫了一下，还是继续走，但心里有点担心', traits: ['cautious', 'introverted', 'caring'] },
      { id: '4d', text: '假装没看见，因为不知道该说什么，怕打扰人家', traits: ['reserved', 'protective', 'practical'] },
    ]
  },
  {
    id: 5,
    dimension: 'empathy',
    dimensionName: '人际互动与共情力',
    question: '你的好朋友最近总是约你出来，但每次都吐槽工作/生活，让你有些疲惫，这次他又约你，你会？',
    options: [
      { id: '5a', text: '找个借口推掉，并建议他"也许可以找专业人士聊聊"', traits: ['direct', 'honest', 'protective'] },
      { id: '5b', text: '直接告诉他"我最近也有点累，这次可能没法陪你"', traits: ['authentic', 'boundary-aware', 'self-aware'] },
      { id: '5c', text: '继续赴约，但尝试引导对话转向更积极的方向', traits: ['optimistic', 'constructive', 'supportive'] },
      { id: '5d', text: '每次都认真听并安慰，但心里有点委屈', traits: ['patient', 'sacrificing', 'devoted'] },
    ]
  },
  {
    id: 6,
    dimension: 'empathy',
    dimensionName: '人际互动与共情力',
    question: '家庭聚会上，你注意到平时话很多的表弟这次一直沉默玩手机，你会？',
    options: [
      { id: '6a', text: '找个机会坐到他旁边，轻声问"最近怎么样？"', traits: ['observant', 'caring', 'gentle'] },
      { id: '6b', text: '找个有趣的话题，当着大家的面让他参与进来', traits: ['sociable', 'inclusive', 'playful'] },
      { id: '6c', text: '不刻意关注，等他愿意说的时候自然会说', traits: ['patient', 'respectful', 'laid-back'] },
      { id: '6d', text: '私下发微信给他"看你今天不太开心，发生什么了？"', traits: ['thoughtful', 'intimate', 'proactive-care'] },
    ]
  },
  {
    id: 7,
    dimension: 'resilience',
    dimensionName: '应对挑战与韧性',
    question: '你负责的项目因为突发情况可能无法按时交付，上司脸色很难看，你会？',
    options: [
      { id: '7a', text: '立刻整理现状，提出几个备选方案，请上司决策', traits: ['problem-solver', 'proactive', 'decisive'] },
      { id: '7b', text: '先承认问题，承诺在Deadline前尽最大努力解决', traits: ['honest', 'committed', 'responsible'] },
      { id: '7c', text: '主动加班加点，争取一个人扛下来不给团队添麻烦', traits: ['dedicated', 'selfless', 'hardworking'] },
      { id: '7d', text: '冷静分析问题根源，整理成文档后立即汇报', traits: ['analytical', 'structured', 'professional'] },
    ]
  },
  {
    id: 8,
    dimension: 'resilience',
    dimensionName: '应对挑战与韧性',
    question: '你第一次做公开演讲，紧张到忘词了，台下有些人在窃窃私语，你会？',
    options: [
      { id: '8a', text: '停下来深呼吸，然后微笑说"抱歉让我理一下"，继续讲', traits: ['composed', 'self-aware', 'resilient'] },
      { id: '8b', text: '假装什么都没发生，凭着记忆硬着头皮讲完', traits: ['determined', 'stoic', 'persistent'] },
      { id: '8c', text: '幽默地自嘲"看来我需要多练习"，台下响起掌声', traits: ['humorous', 'confident', 'adaptable'] },
      { id: '8d', text: '告诉自己"忘词很正常"，迅速跳过那段继续讲', traits: ['flexible', 'self-compassionate', 'practical'] },
    ]
  },
  {
    id: 9,
    dimension: 'resilience',
    dimensionName: '应对挑战与韧性',
    question: '你在一个重要考试中失利了，而你的朋友们都考得比你好，你会？',
    options: [
      { id: '9a', text: '认真分析自己的不足，制定学习计划，下次一定要赶上来', traits: ['ambitious', 'strategic', 'growth-minded'] },
      { id: '9b', text: '给自己一天时间难过，然后调整心态重新出发', traits: ['emotionally-intelligent', 'balanced', 'resilient'] },
      { id: '9c', text: '主动找考得好的朋友请教学习方法，不在乎面子', traits: ['humble', 'learning-focused', 'open'] },
      { id: '9d', text: '先整理心情，理性评估自己是否适合这条路', traits: ['analytical', 'realistic', 'reflective'] },
    ]
  },
  {
    id: 10,
    dimension: 'values',
    dimensionName: '价值观与优先级',
    question: '你每月工资除去必要开销后，有一笔存款。有朋友找你借钱周转，说下个月还，你会？',
    options: [
      { id: '10a', text: '问清楚原因，如果真的需要就借，但会说明自己的边界', traits: ['wise', 'boundary-aware', 'generous'] },
      { id: '10b', text: '直接借，相信朋友的为人，不会催债', traits: ['trusting', 'loyal', 'giving'] },
      { id: '10c', text: '婉拒，说自己最近也有用钱计划，但会提供其他帮助', traits: ['honest', 'protective', 'practical'] },
      { id: '10d', text: '借一半，告诉对方这是自己能承受的范围', traits: ['balanced', 'realistic', 'measured'] },
    ]
  },
  {
    id: 11,
    dimension: 'values',
    dimensionName: '价值观与优先级',
    question: '你的公司有一个晋升机会，但竞争激烈，需要你和一位关系不错的同事同台竞争，你会？',
    options: [
      { id: '11a', text: '全力以赴展现自己，但会真诚希望"无论谁上都能保持好关系"', traits: ['competitive', 'gracious', 'relationship-valued'] },
      { id: '11b', text: '主动找对方聊聊，看能不能找到双赢的可能性', traits: ['collaborative', 'creative', 'peace-seeking'] },
      { id: '11c', text: '把这当作正常竞争，专心做好自己的事', traits: ['focused', 'professional', 'neutral'] },
      { id: '11d', text: '有些纠结，但还是决定公平竞争，尊重结果', traits: ['principled', 'conflicted', 'fair'] },
    ]
  },
  {
    id: 12,
    dimension: 'values',
    dimensionName: '价值观与优先级',
    question: '你在网上看到一篇帖子，内容是你坚定反对的观点，你会？',
    options: [
      { id: '12a', text: '冷静分析对方的逻辑，如果有一定道理，会重新思考', traits: ['open-minded', 'rational', 'intellectual'] },
      { id: '12b', text: '看情况，如果太离谱会划走，不浪费精力', traits: ['selective', 'energy-preserving', 'practical'] },
      { id: '12c', text: '写一条认真的评论，表达自己的看法', traits: ['assertive', 'engaged', 'principled'] },
      { id: '12d', text: '点赞并转发给同温层的朋友，让他们评评理', traits: ['social', 'validation-seeking', 'conformist'] },
    ]
  },
  {
    id: 13,
    dimension: 'creativity',
    dimensionName: '创造力与执行力',
    question: '公司让你策划一个团建活动，要求"有创意"，你会？',
    options: [
      { id: '13a', text: '先调研大家偏好，再设计一个主题式体验活动', traits: ['research-minded', 'detail-oriented', 'inclusive'] },
      { id: '13b', text: '设计一个冒险挑战主题，让大家突破舒适圈', traits: ['adventurous', 'bold', 'challenging'] },
      { id: '13c', text: '选择一个轻松简单的方案，确保不出错', traits: ['cautious', 'safe', 'reliable'] },
      { id: '13d', text: '提出一个很有创意的想法，但需要团队配合实现', traits: ['visionary', 'creative', 'collaborative'] },
    ]
  },
  {
    id: 14,
    dimension: 'creativity',
    dimensionName: '创造力与执行力',
    question: '你的手机相册里拍最多的内容是什么？',
    options: [
      { id: '14a', text: '生活中的小确幸——咖啡拉花、天空、路边的花', traits: ['aesthetic', 'mindful', 'appreciative'] },
      { id: '14b', text: '计划清单、灵感截图、知识收藏类的截图', traits: ['organized', 'learning-oriented', 'productive'] },
      { id: '14c', text: '和朋友、家人的合照，记录相聚的时光', traits: ['relationship-focused', 'memory-keeper', 'warm'] },
      { id: '14d', text: '工作相关的内容——PPT、笔记、会议白板', traits: ['career-focused', 'professional', 'diligent'] },
    ]
  },
  {
    id: 15,
    dimension: 'creativity',
    dimensionName: '创造力与执行力',
    question: '你习惯用什么方式学习新东西？',
    options: [
      { id: '15a', text: '先看整体框架，再研究细节，循序渐进', traits: ['systematic', 'patient', 'thorough'] },
      { id: '15b', text: '直接动手实践，遇到问题再查资料', traits: ['hands-on', 'fearless', 'pragmatic'] },
      { id: '15c', text: '先找专家或高手请教，少走弯路', traits: ['efficient', 'humble', 'strategic'] },
      { id: '15d', text: '边学边做笔记，整理成自己的体系', traits: ['methodical', 'organized', 'independent'] },
    ]
  },
  {
    id: 16,
    dimension: 'growth',
    dimensionName: '情感表达与成长型思维',
    question: '你的伴侣/好朋友忘记了你们的某个重要纪念日，你会？',
    options: [
      { id: '16a', text: '坦诚表达自己的失落，但不会过度指责', traits: ['emotionally-expressive', 'balanced', 'mature'] },
      { id: '16b', text: '当时不说，事后找个机会轻松地提起', traits: ['indirect', 'diplomatic', 'patient'] },
      { id: '16c', text: '理解对方可能最近太忙了，主动做点什么庆祝', traits: ['understanding', 'forgiving', 'proactive'] },
      { id: '16d', text: '有点受伤，但选择压抑情绪，不想显得"作"', traits: ['self-protective', 'reserved', 'self-conscious'] },
    ]
  },
  {
    id: 17,
    dimension: 'growth',
    dimensionName: '情感表达与成长型思维',
    question: '你在一个社群中提出一个想法，有人公开批评说"这个不切实际"，你会？',
    options: [
      { id: '17a', text: '感谢对方的反馈，如果批评有道理就改进想法', traits: ['receptive', 'growth-minded', 'humble'] },
      { id: '17b', text: '解释自己的思路，争取理解', traits: ['assertive', 'persuasive', 'confident'] },
      { id: '17c', text: '有点受伤，但会思考是不是真的有问题', traits: ['sensitive', 'reflective', 'self-critical'] },
      { id: '17d', text: '不在乎别人怎么说，继续按自己的想法做', traits: ['independent', 'resilient', 'stubborn'] },
    ]
  },
  {
    id: 18,
    dimension: 'growth',
    dimensionName: '情感表达与成长型思维',
    question: '回顾过去一年，你最大的感受是什么？',
    options: [
      { id: '18a', text: '虽然有很多挑战，但自己成长了很多', traits: ['optimistic', 'growth-minded', 'resilient'] },
      { id: '18b', text: '平淡无奇，但庆幸平安健康', traits: ['grounded', 'grateful', 'simple'] },
      { id: '18c', text: '有遗憾，但也在努力寻找突破口', traits: ['ambitious', 'restless', 'hopeful'] },
      { id: '18d', text: '充满感恩，身边有在乎的人真好', traits: [' appreciative', 'relationship-focused', 'warm'] },
    ]
  }
]

export const dimensions = [
  { id: 'self-awareness', name: '自我认知与内在力量', icon: '💫', color: '#f59e0b' },
  { id: 'empathy', name: '人际互动与共情力', icon: '🤝', color: '#10b981' },
  { id: 'resilience', name: '应对挑战与韧性', icon: '⚡', color: '#6366f1' },
  { id: 'values', name: '价值观与优先级', icon: '⚖️', color: '#ec4899' },
  { id: 'creativity', name: '创造力与执行力', icon: '🎨', color: '#8b5cf6' },
  { id: 'growth', name: '情感表达与成长型思维', icon: '🌱', color: '#14b8a6' },
] as const