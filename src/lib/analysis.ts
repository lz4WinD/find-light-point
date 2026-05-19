import { questions } from './questions'

export interface Trait {
  id: string
  name: string
  description: string
  strength: 'high' | 'medium' | 'moderate'
}

export interface SparklePoint {
  trait: string
  title: string
  description: string
  dimension: string
  dimensionName: string
  evidence: string[]
}

export interface AnalysisResult {
  topTraits: Trait[]
  sparklePoints: SparklePoint[]
  summary: string
  dimensionScores: { dimension: string; name: string; score: number; icon: string }[]
}

const traitDatabase: Record<string, {
  title: string
  descriptions: {
    high: string
    medium: string
    moderate: string
  }
}> = {
  'introvert': {
    title: '深度思考者',
    descriptions: {
      high: '你拥有非凡的独处能力，能够在安静中汲取力量。这种特质让你善于深度思考，不随波逐流，拥有丰富的内心世界。',
      medium: '你懂得享受独处，在社交和独处之间有良好的平衡。既能融入群体，也能保持自我。',
      moderate: '你需要一定的独处时间来恢复能量，这说明你懂得照顾自己的内心需求。'
    }
  },
  'self-care': {
    title: '自我滋养者',
    descriptions: {
      high: '你重视自我呵护，知道如何在忙碌生活中找到平衡。这种自我关怀的能力让你更有精力面对挑战。',
      medium: '你会适时给自己放松的时间，这种平衡感让你能够持续保持良好的状态。',
      moderate: '你开始意识到自我照顾的重要性，这是一个很好的开始。'
    }
  },
  'reflective': {
    title: '内省智者',
    descriptions: {
      high: '你习惯反思，这种能力让你不断成长。你能从经历中提取智慧，避免重复犯错。',
      medium: '你会定期回顾自己的经历，这种习惯帮助你更好地理解自己。',
      moderate: '你有反思的意识，这在生活中是很有价值的。'
    }
  },
  'social': {
    title: '人际连接者',
    descriptions: {
      high: '你天生具有连接人的能力，朋友遍布各处。你能让周围的人感到温暖和被重视。',
      medium: '你善于维护人际关系，能够主动维系重要的情感纽带。',
      moderate: '你会在需要时主动联系他人，这种主动性值得肯定。'
    }
  },
  'proactive': {
    title: '行动先行者',
    descriptions: {
      high: '你不会等待机会，而是主动创造机会。这种积极主动的态度让你的人生更加丰富。',
      medium: '你会主动采取行动，而不是被动等待。这种态度让你更容易达成目标。',
      moderate: '你正在学习更主动地行动，这是一个重要的成长。'
    }
  },
  'connected': {
    title: '情感联结者',
    descriptions: {
      high: '你拥有强大的情感联结能力，能够与他人建立深厚的连接。人们自然会被你吸引。',
      medium: '你能够与他人建立真诚的联系，这种能力让你拥有宝贵的人际网络。',
      moderate: '你重视与他人的连接，这让你的人生更加丰富。'
    }
  },
  'organized': {
    title: '秩序构建者',
    descriptions: {
      high: '你有出色的组织能力，能够让混乱变得有序。你的效率和条理感染着周围的人。',
      medium: '你善于规划和整理，这种能力帮助你更好地管理生活和工作。',
      moderate: '你正在培养更好的组织能力，这会让你的生活更加有序。'
    }
  },
  'responsible': {
    title: '责任担当者',
    descriptions: {
      high: '你有着强烈的责任感，是值得信赖的人。你的可靠让他人感到安心。',
      medium: '你认真对待自己的责任，这种可靠让你赢得了他人的信任。',
      moderate: '你愿意承担责任，这说明你是一个可以依靠的人。'
    }
  },
  'structured': {
    title: '结构化思考者',
    descriptions: {
      high: '你善于用结构化的方式处理问题，这种思维让你在复杂情况下也能保持清晰。',
      medium: '你倾向于建立清晰的结构，这种习惯帮助你更高效地达成目标。',
      moderate: '你喜欢有一定的计划性，这让你更有掌控感。'
    }
  },
  'flexible': {
    title: '灵活应变者',
    descriptions: {
      high: '你能够轻松适应变化，不被计划束缚。这种灵活性让你在变化中依然从容。',
      medium: '你能够在计划与变化之间灵活切换，这种适应力是你的优势。',
      moderate: '你正在学习更好地适应变化，这会让你更加从容。'
    }
  },
  'relaxed': {
    title: '从容生活者',
    descriptions: {
      high: '你拥有令人羡慕的从容态度，能够在压力下保持平和。这种心态感染着周围的人。',
      medium: '你能够保持相对放松的状态，这种心态让你更容易享受生活。',
      moderate: '你正在学习更加从容，这是一个很有价值的方向。'
    }
  },
  'spontaneous': {
    title: '自由探索者',
    descriptions: {
      high: '你拥有 spontaneity 的特质，敢于随性而为。这种自由精神让你的人生充满惊喜。',
      medium: '你能够在计划之外享受当下，这种能力让你更容易获得快乐。',
      moderate: '你偶尔能够放下计划，享受当下，这是一个好的开始。'
    }
  },
  'humble': {
    title: '谦逊有礼者',
    descriptions: {
      high: '你极度谦逊，从不炫耀成就。这种品质让你赢得他人的尊重和信任。',
      medium: '你能够认可他人的贡献，不独占功劳。这种谦逊是你人际关系良好的原因之一。',
      moderate: '你懂得谦逊，这是一种难得的品质。'
    }
  },
  'team-player': {
    title: '团队协作者',
    descriptions: {
      high: '你是天生的团队成员，懂得如何让整体大于部分之和。你能让团队更加团结。',
      medium: '你善于在团队中发挥自己的作用，懂得配合与支持。',
      moderate: '你愿意为团队贡献自己的力量，这是一种宝贵的品质。'
    }
  },
  'fair': {
    title: '公正公平者',
    descriptions: {
      high: '你追求公正，尊重事实。你不会因私心而偏离公平，这种原则让你值得信赖。',
      medium: '你倾向于公平对待他人，这种公正态度让你赢得尊重。',
      moderate: '你重视公平，这是一个重要的价值观。'
    }
  },
  'authentic': {
    title: '真实自我者',
    descriptions: {
      high: '你勇于做真实的自己，不刻意迎合。你的一致性让你散发出独特的魅力。',
      medium: '你能够表达真实的感受和想法，这种真实性是你人际关系的基础。',
      moderate: '你正在学习更加真实地表达自己，这是一个重要的成长方向。'
    }
  },
  'boundary-setting': {
    title: '边界守护者',
    descriptions: {
      high: '你清楚自己的边界，并勇于守护它。这种能力让你能够保护自己的能量和价值。',
      medium: '你开始学会说"不"，这说明你在建立健康的边界。',
      moderate: '你意识到边界的重要性，这是建立健康人际关系的第一步。'
    }
  },
  'sincere': {
    title: '真诚待人者',
    descriptions: {
      high: '你以真诚著称，与你交往让人感到安心。你的真诚是建立深度关系的基石。',
      medium: '你待人真诚，这种品质让你拥有少数但深厚的朋友。',
      moderate: '你重视真诚，这是一个很有价值的品质。'
    }
  },
  'self-aware': {
    title: '自我觉察者',
    descriptions: {
      high: '你拥有深刻的自我认知，清楚自己的情绪和动机。这种自知让你能够做出更明智的选择。',
      medium: '你对自己有较好的理解，这种自我觉察帮助你更好地成长。',
      moderate: '你开始关注自己的内心世界，这是一个好的开始。'
    }
  },
  'reserved': {
    title: '沉稳内敛者',
    descriptions: {
      high: '你沉稳内敛，不轻易外露情绪。这种沉稳让你在关键时刻能够保持冷静。',
      medium: '你不张扬，这种内敛让你显得更有深度。',
      moderate: '你倾向于内敛，这种特质让你更加稳重。'
    }
  },
  'confident': {
    title: '自信坚定者',
    descriptions: {
      high: '你内心自信，不依赖他人的认可。这种自信让你能够勇敢追求自己想要的生活。',
      medium: '你对自己的能力有信心，这种自信帮助你更好地面对挑战。',
      moderate: '你正在建立更稳固的自信，这是一个积极的方向。'
    }
  },
  'focused': {
    title: '专注聚焦者',
    descriptions: {
      high: '你能够排除干扰，专注于重要的事情。这种专注力让你在工作和学习中效率惊人。',
      medium: '你能够保持专注，这种能力帮助你达成目标。',
      moderate: '你正在培养更好的专注力，这将帮助你取得更多成就。'
    }
  },
  'practical': {
    title: '务实行动者',
    descriptions: {
      high: '你注重实际效果，不空谈。你脚踏实地的态度让你能够解决真实的问题。',
      medium: '你倾向于务实，这种态度帮助你更好地完成事情。',
      moderate: '你开始更加务实，这是一个很好的方向。'
    }
  },
  'thick-skinned': {
    title: '心理强韧者',
    descriptions: {
      high: '你内心坚韧，不容易被他人评价影响。这种心理强度让你能够专注于真正重要的事。',
      medium: '你能够承受一定的压力，这种韧性帮助你克服挑战。',
      moderate: '你正在建立更强的心理韧性，这将帮助你面对更多挑战。'
    }
  },
  'analytical': {
    title: '理性分析者',
    descriptions: {
      high: '你擅长分析问题，能够看到表面之下的本质。这种理性让你能够做出明智的决策。',
      medium: '你能够理性地分析问题，这种能力帮助你找到有效的解决方案。',
      moderate: '你正在培养更强的分析能力，这将帮助你更好地理解世界。'
    }
  },
  'problem-solver': {
    title: '问题终结者',
    descriptions: {
      high: '你面对问题不退缩，总能找到解决方案。人们会向你寻求帮助，因为你知道如何解决问题。',
      medium: '你能够积极面对问题，这种态度让你更容易找到出路。',
      moderate: '你正在成为更好的问题解决者，这是一个重要的能力。'
    }
  },
  'helpful': {
    title: '热心助人者',
    descriptions: {
      high: '你总是愿意帮助他人，你的热心让他人感到温暖。这种助人精神是你最闪耀的品质之一。',
      medium: '你会在需要时帮助他人，这种热心让你成为受欢迎的人。',
      moderate: '你愿意帮助他人，这是一种美好的品质。'
    }
  },
  'empathetic': {
    title: '深度共情者',
    descriptions: {
      high: '你拥有非凡的共情能力，能够真正理解他人的感受。这种共情让你成为最好的倾听者。',
      medium: '你能够理解他人的情绪，这种共情能力帮助你建立深厚的人际关系。',
      moderate: '你正在培养更强的共情能力，这将帮助你更好地理解他人。'
    }
  },
  'patient': {
    title: '耐心陪伴者',
    descriptions: {
      high: '你有惊人的耐心，愿意给他人足够的时间。这种耐心让你成为最可靠的支持者。',
      medium: '你能够耐心等待，这种品质帮助你达成更大的目标。',
      moderate: '你正在培养更多的耐心，这是一个很有价值的品质。'
    }
  },
  'warm': {
    title: '温暖治愈者',
    descriptions: {
      high: '你的温暖能够治愈他人。你的存在就像一束光，照亮周围人的心灵。',
      medium: '你能够给他人带来温暖，这种温暖让你成为朋友心中的太阳。',
      moderate: '你的温暖正在照亮更多人，这是一个美好的开始。'
    }
  },
  'relatable': {
    title: '同感共鸣者',
    descriptions: {
      high: '你能够与他人产生深度共鸣，让他感到被理解。这种能力让你成为最好的倾诉对象。',
      medium: '你能够理解他人的处境，这种共鸣能力帮助你建立连接。',
      moderate: '你正在成为更好的共鸣者，这将帮助你深化人际关系。'
    }
  },
  'supportive': {
    title: '坚定支持者',
    descriptions: {
      high: '你是最坚定的支持者，无论何时都站在朋友身边。你的支持给人无限力量。',
      medium: '你会支持身边的人，这种支持让你成为他们生活中重要的一部分。',
      moderate: '你正在成为更坚定的支持者，你的支持对他人意义重大。'
    }
  },
  'loyal': {
    title: '忠诚守护者',
    descriptions: {
      high: '你对朋友绝对忠诚，是可以托付后背的人。你的忠诚让人愿意向你敞开心扉。',
      medium: '你对待朋友忠诚可靠，这种品质让你拥有深厚的友谊。',
      moderate: '你重视忠诚，这是一个建立深厚关系的重要品质。'
    }
  },
  'steady': {
    title: '稳定依靠者',
    descriptions: {
      high: '你是最稳定的存在，无论发生什么，你都站在那里。你的稳定让人感到安心。',
      medium: '你是可以依靠的人，你的稳定让朋友感到安心。',
      moderate: '你正在成为更稳定的存在，这种稳定对他人很重要。'
    }
  },
  'reliable': {
    title: '可靠诚信者',
    descriptions: {
      high: '说到做到，你是那种让人完全放心的人。你的可靠性是你最大的资产。',
      medium: '你是可以信赖的人，他人可以放心地依赖你。',
      moderate: '你正在建立更强的可靠性，这是人生宝贵的财富。'
    }
  },
  'courageous': {
    title: '勇敢行动者',
    descriptions: {
      high: '你有勇气去做正确的事，即使困难重重。你的勇气能够感染周围的人。',
      medium: '你能够在关键时刻勇敢行动，这种勇气让你与众不同。',
      moderate: '你正在培养更多的勇气，这将帮助你实现更大的可能。'
    }
  },
  'compassionate': {
    title: '慈悲关怀者',
    descriptions: {
      high: '你拥有深刻的慈悲心，能够对他人困境感同身受。你的慈悲让他人感到被拯救。',
      medium: '你能够关怀他人的困境，这种慈悲让你的存在充满意义。',
      moderate: '你正在培养更深的慈悲，这会让你成为更有影响力的人。'
    }
  },
  'outgoing': {
    title: '外向开拓者',
    descriptions: {
      high: '你天生外向，能够轻松与陌生人建立联系。你的热情能够打破任何僵局。',
      medium: '你能够主动与他人交流，这种外向让你更容易建立新的人际网络。',
      moderate: '你正在变得更加外向，这是一个好的方向。'
    }
  },
  'kind': {
    title: '善良温暖者',
    descriptions: {
      high: '你的善良像阳光一样温暖。你在不经意间的善举，可能改变他人一整天的心情。',
      medium: '你待人善良，这种善良让你成为周围人的温暖来源。',
      moderate: '你正在散发更多善良，这是一个美好的方向。'
    }
  },
  'considerate': {
    title: '体贴周到者',
    descriptions: {
      high: '你能够想到别人想不到的细节，你的体贴让人感动。你的周到是一种罕见的才华。',
      medium: '你能够体贴他人，这种考虑让你的人际关系更加和谐。',
      moderate: '你正在变得更加体贴，你的周到会温暖更多人。'
    }
  },
  'subtle': {
    title: '细腻温柔者',
    descriptions: {
      high: '你用行动而非言语来表达爱，你的细腻让人感动。你知道如何用最温柔的方式帮助他人。',
      medium: '你能够用细腻的方式关心他人，这种温柔是一种力量。',
      moderate: '你正在用更细腻的方式表达关心，你的温柔正在温暖世界。'
    }
  },
  'cautious': {
    title: '谨慎稳健者',
    descriptions: {
      high: '你行事谨慎，三思而后行。这种谨慎让你避免了许多错误。',
      medium: '你能够谨慎行事，这种谨慎帮助你做出更明智的决定。',
      moderate: '你正在培养更谨慎的行事风格，这将帮助你走得更稳。'
    }
  },
  'caring': {
    title: '关怀守护者',
    descriptions: {
      high: '你心里总是装着别人，即使没有说出口。你的关怀是最温暖的守护。',
      medium: '你关心身边的人，这种关怀让你成为他们生活中的重要支持。',
      moderate: '你正在散发更多关怀，你的关心对他人很重要。'
    }
  },
  'protective': {
    title: '保护担当者',
    descriptions: {
      high: '你本能地想要保护你在乎的人，这种保护欲是你最帅气的特质之一。',
      medium: '你会保护你爱的人，这种保护让你成为他们的依靠。',
      moderate: '你正在成为更强的保护者，你的保护对他人意义重大。'
    }
  },
  'direct': {
    title: '直接坦诚者',
    descriptions: {
      high: '你说话直接，不拐弯抹角。你的坦诚节省了双方的时间，也让沟通更加有效。',
      medium: '你能够直接表达想法，这种直接让你的沟通更加高效。',
      moderate: '你正在学习更直接地表达，这会让你的沟通更加清晰。'
    }
  },
  'honest': {
    title: '诚实可靠者',
    descriptions: {
      high: '你坚持诚实，即使真相让人不舒服。你的诚实让你赢得长久的信任。',
      medium: '你待人诚实，这种诚实让你建立深厚的关系。',
      moderate: '你重视诚实，这是一个难得的品质。'
    }
  },
  'optimistic': {
    title: '积极乐观者',
    descriptions: {
      high: '你总是看到积极的一面，你的乐观像灯塔一样指引方向。在黑暗中，你的乐观是光。',
      medium: '你倾向于积极看待事物，这种乐观帮助你克服困难。',
      moderate: '你正在培养更积极的视角，这会让你更容易看到美好。'
    }
  },
  'constructive': {
    title: '建设引导者',
    descriptions: {
      high: '你能够把消极转化为积极，把问题转化为机会。你的建设性思维帮助身边人成长。',
      medium: '你能够引导对话向积极方向发展，这种建设性让你成为好的影响者。',
      moderate: '你正在成为更有建设性的人，你的引导正在帮助更多人。'
    }
  },
  'sacrificing': {
    title: '牺牲奉献者',
    descriptions: {
      high: '你愿意为在乎的人牺牲自己的时间和精力。这种奉献精神是你的闪光点。',
      medium: '你会为重要的人做出牺牲，这种奉献说明了你的在乎。',
      moderate: '你正在学习更多的奉献，这会让你的爱更有力量。'
    }
  },
  'devoted': {
    title: '专注投入者',
    descriptions: {
      high: '你对在乎的人全心全意投入，这种专注让你成为最深情的朋友。',
      medium: '你能够专注地陪伴重要的人，这种投入让你的关系更加深厚。',
      moderate: '你正在学习更专注地投入，这将让你的关系更加牢固。'
    }
  },
  'observant': {
    title: '敏锐观察者',
    descriptions: {
      high: '你能够注意到别人忽略的细节，你的观察力让你更容易理解他人。',
      medium: '你善于观察，这种敏锐帮助你更好地理解周围的世界。',
      moderate: '你正在培养更强的观察力，这将帮助你看到更多。'
    }
  },
  'gentle': {
    title: '温柔力量者',
    descriptions: {
      high: '你的温柔不是软弱，而是一种强大的力量。你的温柔能够化解冲突，温暖人心。',
      medium: '你能够用温柔的方式处理事情，这种温柔是你的力量。',
      moderate: '你正在用更温柔的方式影响世界，你的温柔正在改变一切。'
    }
  },
  'sociable': {
    title: '社交达人',
    descriptions: {
      high: '你是天生的社交达人，能够让聚会的气氛变得轻松愉快。你的存在让大家都开心。',
      medium: '你善于社交，这种能力让你能够轻松融入各种场合。',
      moderate: '你正在变得更加善于社交，这将帮助你建立更多连接。'
    }
  },
  'inclusive': {
    title: '包容博爱者',
    descriptions: {
      high: '你总是让边缘的人感到被包括在内，你的包容让每个人都觉得重要。',
      medium: '你善于让他人融入，这种包容让你成为聚会的核心。',
      moderate: '你正在成为更包容的人，你的包容正在温暖更多人。'
    }
  },
  'playful': {
    title: '活泼有趣者',
    descriptions: {
      high: '你浑身散发着快乐的能量，你的活泼有趣让周围的人都感到轻松愉快。',
      medium: '你能够带来欢乐，这种活泼让你成为聚会的灵魂。',
      moderate: '你正在散发更多的快乐，你的活泼正在点亮周围人的生活。'
    }
  },
  'respectful': {
    title: '尊重理解者',
    descriptions: {
      high: '你尊重每个人的节奏和边界，不强迫任何人。这种尊重让你赢得广泛的喜爱。',
      medium: '你能够尊重他人，这种尊重帮助你建立健康的关系。',
      moderate: '你正在成为更尊重他人的人，你的尊重正在建立更好的连接。'
    }
  },
  'laid-back': {
    title: '轻松自在者',
    descriptions: {
      high: '你让周围的人感到轻松，不需要紧绷。你的自在感染着身边的每一个人。',
      medium: '你能够轻松自在地相处，这种放松让你成为好的陪伴者。',
      moderate: '你正在学习更加轻松，这将帮助你享受更多生活的美好。'
    }
  },
  'thoughtful': {
    title: '体贴入微者',
    descriptions: {
      high: '你的体贴体现在每一个细节中，你的关心让人们感到被深深爱着。',
      medium: '你能够体贴入微地关心他人，这种体贴说明你在乎。',
      moderate: '你正在更加体贴，你的关心正在温暖更多人。'
    }
  },
  'intimate': {
    title: '深度交流者',
    descriptions: {
      high: '你能够与人进行深度对话，建立真正的情感连接。你的深度让人们愿意向你敞开心扉。',
      medium: '你能够与重要的人进行深度交流，这种亲密是你的天赋。',
      moderate: '你正在培养更深的交流能力，这将帮助你建立更深的关系。'
    }
  },
  'proactive-care': {
    title: '主动关怀者',
    descriptions: {
      high: '你会主动关心他人，不需要等到别人开口。你的主动关怀让朋友们感到被惦记。',
      medium: '你能够主动关心他人，这种主动让你成为贴心的人。',
      moderate: '你正在更加主动地关心，你的关怀正在温暖更多人。'
    }
  },
  'decisive': {
    title: '果断决策者',
    descriptions: {
      high: '你能够在关键时刻迅速做出决定，你的果断让你抓住一个又一个机会。',
      medium: '你能够及时做决定，这种果断帮助你把握机会。',
      moderate: '你正在培养更果断的决策能力，这将帮助你抓住更多机会。'
    }
  },
  'committed': {
    title: '承诺坚守者',
    descriptions: {
      high: '你一旦承诺，就会全力以赴。你的坚守让人对你充满信心。',
      medium: '你能够坚守承诺，这种承诺让你赢得信任。',
      moderate: '你正在成为更坚定的承诺者，你的坚守正在建立信任。'
    }
  },
  'hardworking': {
    title: '勤奋努力者',
    descriptions: {
      high: '你勤奋努力，不轻易放弃。你的努力是你成功最大的保障。',
      medium: '你愿意努力，这种勤奋帮助你达成目标。',
      moderate: '你正在更加努力，你的勤奋正在创造更好的未来。'
    }
  },
  'professional': {
    title: '专业职业者',
    descriptions: {
      high: '你以专业的态度对待每一件事，这种专业让你在领域中脱颖而出。',
      medium: '你能够保持专业，这种职业态度帮助你建立声誉。',
      moderate: '你正在更加专业，你的专业正在为你打开更多的门。'
    }
  },
  'composed': {
    title: '冷静自持者',
    descriptions: {
      high: '你在压力下依然保持冷静，这种冷静是你最大的魅力之一。',
      medium: '你能够保持冷静，这种镇定帮助你应对挑战。',
      moderate: '你正在培养更强的冷静，这将帮助你面对更大的压力。'
    }
  },
  'resilient': {
    title: '抗逆强者',
    descriptions: {
      high: '你是打不死的小强，无论多难都能站起来。你的韧性是你最强大的武器。',
      medium: '你能够从挫折中恢复，这种韧性帮助你克服挑战。',
      moderate: '你正在培养更强的韧性，你的韧性正在帮助你战胜一切。'
    }
  },
  'determined': {
    title: '坚定前行者',
    descriptions: {
      high: '你一旦决定，就不会放弃。你的坚定让你达成看似不可能的目标。',
      medium: '你能够坚持不懈，这种决心帮助你实现目标。',
      moderate: '你正在更加坚定地前行，你的决心正在创造奇迹。'
    }
  },
  'stoic': {
    title: '坚强隐忍者',
    descriptions: {
      high: '你能够在困境中隐忍，这种坚强让你度过最艰难的时刻。',
      medium: '你能够承受压力，这种坚韧帮助你度过难关。',
      moderate: '你正在培养更强的承受能力，你的坚强正在帮助你前行。'
    }
  },
  'persistent': {
    title: '坚持不懈者',
    descriptions: {
      high: '你不会因为困难而放弃，你的坚持让你最终成功。',
      medium: '你能够坚持，这种坚持帮助你达成目标。',
      moderate: '你正在更加坚持，你的持久正在创造成功。'
    }
  },
  'humorous': {
    title: '幽默风趣者',
    descriptions: {
      high: '你的幽默能够化解尴尬，你的风趣让周围的人都感到快乐。',
      medium: '你能够适时幽默，这种风趣让你更容易与人建立连接。',
      moderate: '你正在发挥更多的幽默，你的风趣正在点亮周围的生活。'
    }
  },
  'adaptable': {
    title: '灵活适应者',
    descriptions: {
      high: '你能够快速适应新环境，这种灵活让你在变化中依然游刃有余。',
      medium: '你能够适应变化，这种灵活帮助你应对挑战。',
      moderate: '你正在培养更强的适应能力，这将帮助你应对任何变化。'
    }
  },
  'self-compassionate': {
    title: '自我慈悲者',
    descriptions: {
      high: '你能够善待自己，不苛责。你的自我慈悲让你能够与自己和平相处。',
      medium: '你能够对自己温柔，这种自爱帮助你更好地成长。',
      moderate: '你正在学习更多自我慈悲，你的善待自己正在让你更加完整。'
    }
  },
  'ambitious': {
    title: '雄心勃勃者',
    descriptions: {
      high: '你有着远大的目标和不竭的动力，你的雄心让你不断向前。',
      medium: '你有追求上进的雄心，这种渴望帮助你不断进步。',
      moderate: '你正在培养更强的雄心，你的野心正在创造更大的成就。'
    }
  },
  'strategic': {
    title: '战略思考者',
    descriptions: {
      high: '你能够从全局思考，制定长远计划。你的战略眼光让你总是领先一步。',
      medium: '你能够思考策略，这种战略性帮助你达成目标。',
      moderate: '你正在培养更强的战略思维，这将帮助你实现更大的目标。'
    }
  },
  'growth-minded': {
    title: '成长型思维者',
    descriptions: {
      high: '你相信能力可以培养，相信努力会带来进步。这种成长型思维让你不断突破自己。',
      medium: '你能够看到成长的可能，这种思维帮助你不断进步。',
      moderate: '你正在培养成长型思维，你的信念正在创造无限可能。'
    }
  },
  'emotionally-intelligent': {
    title: '情商高手',
    descriptions: {
      high: '你拥有高超的情商，能够管理自己的情绪，也能理解他人的感受。',
      medium: '你能够感知和管理情绪，这种情商帮助你建立更好的关系。',
      moderate: '你正在培养更高的情商，你的情绪智慧正在帮助你成长。'
    }
  },
  'balanced': {
    title: '平衡和谐者',
    descriptions: {
      high: '你能够在各种需求之间找到平衡，这种平衡让你生活更加和谐。',
      medium: '你能够平衡不同方面，这种平衡帮助你更好地生活。',
      moderate: '你正在学习更好的平衡，你的和谐正在让你更加幸福。'
    }
  },
  'open': {
    title: '开放接纳者',
    descriptions: {
      high: '你愿意接受不同的观点和可能性，你的开放让你不断成长。',
      medium: '你能够开放地接受新事物，这种开放帮助你不断进步。',
      moderate: '你正在变得更加开放，你的接纳正在让你更加成长。'
    }
  },
  'realistic': {
    title: '务实理性者',
    descriptions: {
      high: '你能够客观评估情况，不抱幻想。这种务实让你做出更明智的决定。',
      medium: '你能够务实面对现实，这种理性帮助你做出好的选择。',
      moderate: '你正在培养更务实的态度，你的理性正在帮助你成功。'
    }
  },
  'wise': {
    title: '智慧洞见者',
    descriptions: {
      high: '你拥有超越年龄的智慧，能够看透问题的本质。你的洞察让人惊叹。',
      medium: '你能够展现智慧，这种洞见帮助你做出好的决定。',
      moderate: '你正在积累更多的智慧，你的洞见正在帮助你成长。'
    }
  },
  'generous': {
    title: '慷慨给予者',
    descriptions: {
      high: '你愿意给予，这种慷慨是你最闪光的品质之一。',
      medium: '你能够慷慨地给予，这种大方让你成为受欢迎的人。',
      moderate: '你正在变得更加慷慨，你的给予正在温暖更多人。'
    }
  },
  'trusting': {
    title: '信任给予者',
    descriptions: {
      high: '你愿意相信他人，这种信任建立深厚的关系。',
      medium: '你能够信任他人，这种信任帮助你建立连接。',
      moderate: '你正在学习更好的信任，你的信任正在建立深厚的关系。'
    }
  },
  'giving': {
    title: '乐于奉献者',
    descriptions: {
      high: '你从给予中获得满足，你的奉献让周围的人充满能量。',
      medium: '你愿意奉献，这种给予让你的人生更加有意义。',
      moderate: '你正在学习更多的奉献，你的给予正在创造更大的价值。'
    }
  },
  'protective-personal': {
    title: '自我保护者',
    descriptions: {
      high: '你知道如何保护自己，这种边界感让你能够维护自己的能量。',
      medium: '你能够保护自己，这种边界感帮助你保持平衡。',
      moderate: '你正在学习更好的自我保护，这种守护正在让你更加完整。'
    }
  },
  'measured': {
    title: '适度而行者',
    descriptions: {
      high: '你懂得适度，不过度也不缺乏。这种分寸感让你在各种场合都表现得体。',
      medium: '你能够把握度，这种分寸感帮助你更好地处理事情。',
      moderate: '你正在学习更好的适度，你的分寸正在让你更加成熟。'
    }
  },
  'gracious': {
    title: '优雅大度者',
    descriptions: {
      high: '你能够在竞争中保持风度，你的优雅让你赢得尊重。',
      medium: '你能够保持 gracious 的态度，这种风度帮助你建立好的名声。',
      moderate: '你正在培养更优雅的态度，你的风度正在为你赢得尊重。'
    }
  },
  'relationship-valued': {
    title: '关系至上者',
    descriptions: {
      high: '你珍视关系，不会为了利益牺牲友情。这种价值观让你拥有珍贵的人际网络。',
      medium: '你重视关系，这种珍视帮助你建立深厚持久的友谊。',
      moderate: '你正在更加珍视关系，你的在乎正在创造更深的连接。'
    }
  },
  'collaborative': {
    title: '协作共赢者',
    descriptions: {
      high: '你相信共赢，这种信念让你能够创造合作而非竞争。',
      medium: '你能够协作，这种合作能力帮助你达成更大的目标。',
      moderate: '你正在培养更强的协作能力，你的合作正在创造更好的结果。'
    }
  },
  'peace-seeking': {
    title: '和平维护者',
    descriptions: {
      high: '你总是寻求和平解决，你的存在让周围更加和谐。',
      medium: '你能够寻求和平，这种追求帮助你建立更好的关系。',
      moderate: '你正在成为更强的和平维护者，你的存在正在让世界更加和平。'
    }
  },
  'neutral': {
    title: '客观中立者',
    descriptions: {
      high: '你能够客观看待事物，不偏不倚。这种中立让你能够做出公正的判断。',
      medium: '你能够保持客观，这种中立帮助你做出好的决定。',
      moderate: '你正在培养更强的客观性，你的公正正在帮助你做出更好的选择。'
    }
  },
  'principled': {
    title: '原则坚守者',
    descriptions: {
      high: '你有坚定的原则，不会轻易妥协。这种原则性让你值得信赖。',
      medium: '你能够坚守原则，这种原则性帮助你赢得信任。',
      moderate: '你正在更加坚守原则，你的信念正在让你更加完整。'
    }
  },
  'conflict-honest': {
    title: '坦诚面对者',
    descriptions: {
      high: '你能够坦诚面对内心的冲突，这种诚实帮助你做出更好的决定。',
      medium: '你能够面对冲突，这种诚实帮助你成长。',
      moderate: '你正在学习更坦诚地面对冲突，你的勇气正在帮助你成长。'
    }
  },
  'intellectual': {
    title: '理性思考者',
    descriptions: {
      high: '你热爱思考，追求真理。你的理性让你能够看到更深的真相。',
      medium: '你能够理性思考，这种智力帮助你理解世界。',
      moderate: '你正在培养更强的理性思维，你的思考正在让你更加明智。'
    }
  },
  'selective': {
    title: '精选专注者',
    descriptions: {
      high: '你知道注意力是最宝贵的资源，你的选择性让你能够专注在重要的事情上。',
      medium: '你能够选择性地投入注意力，这种选择性帮助你达成目标。',
      moderate: '你正在学习更好的选择，你的专注正在让你更加有效率。'
    }
  },
  'energy-preserving': {
    title: '能量守护者',
    descriptions: {
      high: '你知道如何保护自己的能量，这种守护让你能够持续做重要的事。',
      medium: '你能够保护自己的能量，这种意识帮助你保持状态。',
      moderate: '你正在学习更好的能量管理，你的守护正在让你更加高效。'
    }
  },
  'assertive': {
    title: '坚定表达者',
    descriptions: {
      high: '你能够坚定地表达自己的观点，这种坚定让你赢得尊重。',
      medium: '你能够表达自己的看法，这种坚定帮助你被听见。',
      moderate: '你正在学习更坚定地表达，你的勇气正在让你被尊重。'
    }
  },
  'engaged': {
    title: '积极参与者',
    descriptions: {
      high: '你愿意参与讨论，你的积极让话题更加丰富。',
      medium: '你能够积极参与，这种投入让你成为好的参与者。',
      moderate: '你正在更加积极参与，你的投入正在让讨论更加深入。'
    }
  },
  'visionary': {
    title: '远见梦想家',
    descriptions: {
      high: '你有远见，能够看到未来的可能。你的愿景激励着周围的人。',
      medium: '你能够看到愿景，这种远见帮助你指引方向。',
      moderate: '你正在培养更强的愿景，你的梦想正在照亮前行的路。'
    }
  },
  'creative': {
    title: '创意无限者',
    descriptions: {
      high: '你拥有无限的创造力，你的创意让平凡变得非凡。',
      medium: '你能够产生创意，这种创造力让你的工作更加出色。',
      moderate: '你正在释放更多的创意，你的想象正在创造无限可能。'
    }
  },
  'aesthetic': {
    title: '美学鉴赏者',
    descriptions: {
      high: '你有敏锐的美感，能够发现和创造美。你的审美让你的生活更加精致。',
      medium: '你能够欣赏美，这种美感让你的生活更加丰富。',
      moderate: '你正在培养更强的美感，你的欣赏正在让你的生活更加美好。'
    }
  },
  'mindful': {
    title: '正念生活者',
    descriptions: {
      high: '你能够感受当下的美好，这种正念让你的生活更加充实。',
      medium: '你能够保持正念，这种专注帮助你享受生活。',
      moderate: '你正在培养更强的正念，你的专注正在让你的生活更加充实。'
    }
  },
  'appreciative': {
    title: '感恩珍惜者',
    descriptions: {
      high: '你感恩生活中的每一个美好，这种感恩让你的心态更加积极。',
      medium: '你能够感恩，这种感激让你的生活更加幸福。',
      moderate: '你正在学习更多的感恩，你的珍惜正在让你的生活更加美好。'
    }
  },
  'memory-keeper': {
    title: '记忆珍藏者',
    descriptions: {
      high: '你珍视回忆，善于记录生活中的美好。这种记录让你的过去永远鲜活。',
      medium: '你能够珍藏记忆，这种珍视帮助你保持与重要的人和事的连接。',
      moderate: '你正在学习更好的记录，你的珍藏正在让你的回忆更加珍贵。'
    }
  },
  'career-focused': {
    title: '事业专注者',
    descriptions: {
      high: '你对事业专注，这种专注让你的职业发展更加顺利。',
      medium: '你能够专注事业，这种投入帮助你取得成就。',
      moderate: '你正在更加专注事业，你的投入正在为你创造更好的未来。'
    }
  },
  'diligent': {
    title: '勤勉认真者',
    descriptions: {
      high: '你勤勉认真，对工作负责。这种勤勉让你在职场中脱颖而出。',
      medium: '你能够勤勉工作，这种认真帮助你建立声誉。',
      moderate: '你正在更加勤勉，你的认真正在为你创造机会。'
    }
  },
  'systematic': {
    title: '系统化思考者',
    descriptions: {
      high: '你善于建立系统，让复杂的事情变得简单。这种系统性让你的效率倍增。',
      medium: '你能够系统化地处理事情，这种方法帮助你更高效地达成目标。',
      moderate: '你正在培养更强的系统化能力，你的方法正在让你的工作更加高效。'
    }
  },
  'patient-learn': {
    title: '耐心学习者',
    descriptions: {
      high: '你有耐心，愿意循序渐进地学习。这种耐心让你的知识更加扎实。',
      medium: '你能够耐心学习，这种耐心帮助你掌握真正的技能。',
      moderate: '你正在培养更多的耐心，你的坚持正在让你更加专业。'
    }
  },
  'thorough': {
    title: '细致周到者',
    descriptions: {
      high: '你追求完善，不放过任何细节。这种细致让你的工作无可挑剔。',
      medium: '你能够细致入微，这种认真让你的成果更加完美。',
      moderate: '你正在追求更细致，你的用心正在让你的工作更加出色。'
    }
  },
  'hands-on': {
    title: '实践探索者',
    descriptions: {
      high: '你相信实践出真知，愿意亲自动手尝试。你的实践精神让你学到真正有用的东西。',
      medium: '你能够动手实践，这种实践帮助你更好地学习。',
      moderate: '你正在培养更强的实践精神，你的动手正在让你更加能干。'
    }
  },
  'fearless': {
    title: '无畏探索者',
    descriptions: {
      high: '你不怕失败，敢于尝试。你的无畏让你能够突破舒适区。',
      medium: '你能够勇敢尝试，这种无畏帮助你探索新的可能。',
      moderate: '你正在学习更加无畏，你的勇气正在让你突破限制。'
    }
  },
  'pragmatic': {
    title: '实用主义 者',
    descriptions: {
      high: '你注重实效，追求用最快的方式达成目标。你的务实让你总是找到最好的解决方案。',
      medium: '你能够务实，这种实用主义帮助你达成目标。',
      moderate: '你正在更加务实，你的实用正在让你更加高效。'
    }
  },
  'efficient': {
    title: '效率专家',
    descriptions: {
      high: '你善于优化流程，用最少的时间达成最大的效果。你的效率让你的时间价值最大化。',
      medium: '你能够高效工作，这种效率帮助你达成更多。',
      moderate: '你正在培养更高的效率，你的优化正在让你更加出色。'
    }
  },
  'humble-learn': {
    title: '谦逊学习者',
    descriptions: {
      high: '你愿意放下身段向人请教，这种谦逊让你的学习速度倍增。',
      medium: '你能够谦逊学习，这种态度帮助你快速成长。',
      moderate: '你正在学习更加谦逊，你的态度正在让你更快进步。'
    }
  },
  'methodical': {
    title: '严谨有序者',
    descriptions: {
      high: '你有条理，每一步都经过深思熟虑。这种严谨让你的成果稳定可靠。',
      medium: '你能够按部就班，这种有序帮助你达成目标。',
      moderate: '你正在培养更强的条理性，你的严谨正在让你的工作更加出色。'
    }
  },
  'independent': {
    title: '独立自主者',
    descriptions: {
      high: '你不依赖他人，有独立解决问题的能力。这种独立让你在任何环境中都能生存。',
      medium: '你能够独立完成事情，这种自主让你更加自信。',
      moderate: '你正在培养更强的独立性，你的自主正在让你更加强大。'
    }
  },
  'emotionally-expressive': {
    title: '情感表达者',
    descriptions: {
      high: '你能够坦诚表达自己的情感，这种坦诚让你的关系更加真实。',
      medium: '你能够表达情感，这种表达帮助你与他人建立连接。',
      moderate: '你正在学习更坦诚地表达，你的勇气正在让你的关系更加真实。'
    }
  },
  'mature': {
    title: '成熟稳重者',
    descriptions: {
      high: '你能够成熟地处理情感问题，这种成熟让你的关系更加健康。',
      medium: '你能够以成熟的态度面对情感，这种成熟帮助你建立好的关系。',
      moderate: '你正在更加成熟，你的稳重正在让你的关系更加健康。'
    }
  },
  'indirect': {
    title: '委婉沟通者',
    descriptions: {
      high: '你知道何时该直接，何时该委婉。这种智慧让你的沟通更加有效。',
      medium: '你能够委婉地表达，这种方式帮助你避免冲突。',
      moderate: '你正在学习更灵活地沟通，你的智慧正在让你的关系更加和谐。'
    }
  },
  'diplomatic': {
    title: '外交手腕者',
    descriptions: {
      high: '你能够用最温和的方式达成目标，你的外交手腕让你在复杂关系中游刃有余。',
      medium: '你能够圆滑地处理问题，这种手腕帮助你化解矛盾。',
      moderate: '你正在培养更强的外交能力，你的智慧正在让你更加圆融。'
    }
  },
  'forgiving': {
    title: '宽容大度者',
    descriptions: {
      high: '你能够原谅他人的错误，这种宽容让你的人际关系更加和谐。',
      medium: '你能够宽容待人，这种原谅帮助你放下包袱。',
      moderate: '你正在学习更多的宽容，你的善解正在让你更加自由。'
    }
  },
  'self-protective': {
    title: '自我保护者',
    descriptions: {
      high: '你知道如何保护自己不受伤害，这种边界感让你的内心更加安全。',
      medium: '你能够保护自己，这种边界感帮助你保持情感安全。',
      moderate: '你正在学习更好的自我保护，你的守护正在让你更加完整。'
    }
  },
  'self-conscious': {
    title: '自我审视者',
    descriptions: {
      high: '你能够审视自己，这种自省让你不断进步。',
      medium: '你能够反思自己，这种审视帮助你成长。',
      moderate: '你正在培养更强的自省能力，你的审视正在让你更加成熟。'
    }
  },
  'receptive': {
    title: '开放接纳者',
    descriptions: {
      high: '你愿意接受批评和建议，这种开放让你不断进步。',
      medium: '你能够接受反馈，这种接纳帮助你成长。',
      moderate: '你正在学习更加开放，你的接纳正在让你更加进步。'
    }
  },
  'persuasive': {
    title: '说服影响者',
    descriptions: {
      high: '你能够用逻辑和情感说服他人，你的影响力让你能够推动积极的改变。',
      medium: '你能够说服他人，这种能力帮助你达成目标。',
      moderate: '你正在培养更强的说服力，你的影响正在改变更多人。'
    }
  },
  'sensitive': {
    title: '敏感细腻者',
    descriptions: {
      high: '你有敏锐的感受力，能够捕捉到微妙的情感。这种敏感让你更有同理心。',
      medium: '你能够感知细腻的情感，这种敏感帮助你理解他人。',
      moderate: '你正在释放更多的敏感，你的感知正在让你更加理解这个世界。'
    }
  },
  'self-critical': {
    title: '自我反思者',
    descriptions: {
      high: '你能够批判性地思考自己，这种反思让你不断进步。',
      medium: '你能够反思自己，这种自省帮助你成长。',
      moderate: '你正在培养更强的反思能力，你的审视正在让你更加优秀。'
    }
  },
  'stubborn': {
    title: '坚定立场者',
    descriptions: {
      high: '你坚持自己的信念，不轻易被动摇。这种坚定让你能够走自己的路。',
      medium: '你能够坚持立场，这种坚定帮助你实现目标。',
      moderate: '你正在学习更灵活地坚持，你的坚定正在让你走得更远。'
    }
  },
  'grounded': {
    title: '脚踏实地者',
    descriptions: {
      high: '你脚踏实地，不被虚幻的东西迷惑。这种踏实让你的生活更加稳定。',
      medium: '你能够接地气，这种踏实帮助你更好地生活。',
      moderate: '你正在更加脚踏实地，你的沉稳正在让你的生活更加稳定。'
    }
  },
  'grateful': {
    title: '感恩知足者',
    descriptions: {
      high: '你对拥有的一切心怀感激，这种感恩让你的心态永远积极。',
      medium: '你能够感恩，这种知足让你更加幸福。',
      moderate: '你正在培养更多的感恩，你的珍惜正在让你的生活更加美好。'
    }
  },
  'simple': {
    title: '简单纯粹者',
    descriptions: {
      high: '你追求简单的生活方式，这种纯粹让你的心灵更加自由。',
      medium: '你能够简单生活，这种简洁帮你避免不必要的烦恼。',
      moderate: '你正在学习更加简单，你的纯粹正在让你的心灵更加自由。'
    }
  },
  'restless': {
    title: '不安现状者',
    descriptions: {
      high: '你不甘于平庸，总想突破现状。这种不安分让你不断追求更好的自己。',
      medium: '你想要改变，这种不安分帮助你不断进步。',
      moderate: '你正在将不安分转化为动力，你的追求正在让你更加出色。'
    }
  },
  'hopeful': {
    title: '心怀希望者',
    descriptions: {
      high: '无论环境如何，你始终心怀希望。你的希望像灯塔一样照亮黑暗。',
      medium: '你能够保持希望，这种乐观帮助你度过难关。',
      moderate: '你正在培养更多的希望，你的信念正在照亮前行的路。'
    }
  }
}

function getTraitInfo(traitId: string): { title: string; description: string; strength: 'high' | 'medium' | 'moderate' } {
  const trait = traitDatabase[traitId]
  if (!trait) {
    return {
      title: traitId,
      description: '这是一种宝贵的品质。',
      strength: 'medium'
    }
  }
  return {
    title: trait.title,
    description: trait.descriptions.medium,
    strength: 'medium'
  }
}

export function analyzeAnswers(answers: Record<number, string>): AnalysisResult {
  const traitScores: Record<string, number> = {}
  const dimensionScores: Record<string, number[]> = {}

  const dimensionMap: Record<string, string> = {
    'self-awareness': 'self-awareness',
    'empathy': 'empathy',
    'resilience': 'resilience',
    'values': 'values',
    'creativity': 'creativity',
    'growth': 'growth'
  }

  for (const [questionIdStr, optionId] of Object.entries(answers)) {
    const questionId = parseInt(questionIdStr)
    const question = questions.find(q => q.id === questionId)
    if (!question) continue

    const option = question.options.find(o => o.id === optionId)
    if (!option) continue

    if (!dimensionScores[question.dimension]) {
      dimensionScores[question.dimension] = []
    }

    for (const trait of option.traits) {
      traitScores[trait] = (traitScores[trait] || 0) + 1

      const dimId = dimensionMap[question.dimension]
      if (!dimensionScores[dimId]) {
        dimensionScores[dimId] = []
      }
      dimensionScores[dimId].push(traitScores[trait])
    }
  }

  const sortedTraits = Object.entries(traitScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const topTraits: Trait[] = sortedTraits.map(([traitId, score]) => {
    const strength: 'high' | 'medium' | 'moderate' =
      score >= 4 ? 'high' : score >= 2 ? 'medium' : 'moderate'
    const info = getTraitInfo(traitId)
    return {
      id: traitId,
      name: info.title,
      description: info.description,
      strength
    }
  })

  const sparklePoints: SparklePoint[] = sortedTraits.slice(0, 5).map(([traitId, score]) => {
    const info = getTraitInfo(traitId)
    const question = questions.find(q =>
      q.options.some(o => o.traits.includes(traitId))
    )

    const relatedQuestions = questions.filter(q =>
      q.options.some(o => o.traits.includes(traitId))
    )

    const evidence = relatedQuestions.slice(0, 2).map(q => {
      const answerOptionId = answers[q.id]
      const selectedOption = q.options.find(o => o.id === answerOptionId)
      return `题目"${q.question.substring(0, 15)}..."的选项"${selectedOption?.text.substring(0, 15)}..."`
    }).filter(Boolean)

    return {
      trait: info.title,
      title: info.title,
      description: info.description,
      dimension: question?.dimension || 'growth',
      dimensionName: question?.dimensionName || '成长型思维',
      evidence
    }
  })

  const dimensionResult = Object.entries(dimensionScores).map(([dimId, scores]) => {
    const dim = questions.find(q => q.dimension === dimId)
    return {
      dimension: dimId,
      name: dim?.dimensionName || dimId,
      score: scores.length > 0 ? Math.min(100, Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 25)) : 0,
      icon: dim?.dimensionName ? '✨' : '✨'
    }
  })

  const primaryTrait = topTraits[0]
  const summary = primaryTrait
    ? `你是一个${primaryTrait.name}。${primaryTrait.description} 在你身上，还有很多值得被发现的闪光点，等待你去认识和欣赏。`
    : '你身上有很多值得被发现的闪光点。'

  return {
    topTraits,
    sparklePoints,
    summary,
    dimensionScores: dimensionResult
  }
}