import { BarChart2, Search, Heart, MessageCircle, Zap } from 'lucide-react';

export const MOCK_HISTORY = [
  { id: 1, brand: '珀莱雅 PROYA', industry: '美妆个护 - 护肤', platform: '小红书 + B站', score: 85, level: 'S', date: '2023-10-25' },
  { id: 2, brand: '戴森 Dyson', industry: '3C数码 - 小家电', platform: '小红书', score: 72, level: 'A', date: '2023-10-22' },
  { id: 3, brand: '三顿半', industry: '食品饮料 - 咖啡', platform: 'B站', score: 65, level: 'B', date: '2023-10-20' },
  { id: 4, brand: '石头扫地机', industry: '3C数码 - 智能家居', platform: 'B站', score: 92, level: 'S', date: '2023-10-28' },
];

export const RADAR_DATA = [
  { subject: '内容填充度', A: 85, B: 65, C: 78, D: 82, fullMark: 100 },
  { subject: '内容能见度', A: 45, B: 55, C: 55, D: 60, fullMark: 100 },
  { subject: '内容好感度', A: 68, B: 70, C: 60, D: 75, fullMark: 100 },
  { subject: '内容讨论度', A: 88, B: 60, C: 80, D: 70, fullMark: 100 },
  { subject: '内容效率', A: 55, B: 68, C: 62, D: 58, fullMark: 100 },
];

export const SUMMARY_CARDS = [
  { 
    id: 'fill', 
    title: '内容填充度', 
    score: 85, 
    trend: 5, 
    isUp: true, 
    icon: BarChart2,
    competitors: [
      { name: '欧莱雅', score: 78 },
      { name: '雅诗兰黛', score: 82 }
    ]
  },
  { 
    id: 'vis', 
    title: '内容能见度', 
    score: 45, 
    trend: 12, 
    isUp: false, 
    icon: Search,
    competitors: [
      { name: '欧莱雅', score: 55 },
      { name: '雅诗兰黛', score: 60 }
    ]
  },
  { 
    id: 'fav', 
    title: '内容好感度', 
    score: 68, 
    trend: 2, 
    isUp: true, 
    icon: Heart,
    competitors: [
      { name: '欧莱雅', score: 60 },
      { name: '雅诗兰黛', score: 75 }
    ]
  },
  { 
    id: 'disc', 
    title: '内容讨论度', 
    score: 88, 
    trend: 15, 
    isUp: true, 
    icon: MessageCircle,
    competitors: [
      { name: '欧莱雅', score: 80 },
      { name: '雅诗兰黛', score: 70 }
    ]
  },
  { 
    id: 'eff', 
    title: '内容效率', 
    score: 55, 
    trend: 3, 
    isUp: false, 
    icon: Zap,
    competitors: [
      { name: '欧莱雅', score: 65 },
      { name: '雅诗兰黛', score: 60 }
    ]
  },
];

export const FILLING_DATA = {
  brandVolume: 45200,
  industryAvg: 3128000,
  sov: 0.87,
  totalMarket: 5223800,
  ugc: 64,
  bgc: 36,
  yoy: 15.2, // Year-over-Year growth
  mom: 5.8   // Month-over-Month growth
};

export const TREND_DATA = [
  { date: '1周', value: 3200 }, { date: '2周', value: 3800 }, { date: '3周', value: 3500 },
  { date: '4周', value: 4100 }, { date: '5周', value: 5500 }, { date: '6周', value: 7200 },
  { date: '7周', value: 6800 }, { date: '8周', value: 8100 }, { date: '9周', value: 8500 },
  { date: '10周', value: 9200 }, { date: '11周', value: 8800 }, { date: '12周', value: 9500 },
];

export const PROS_CONS = {
  pros: [
    { text: '皮肤', percent: 55.21 }, { text: '熬夜党', percent: 7.36 }, 
    { text: '必备', percent: 5.21 }, { text: '刚需', percent: 2.76 }, { text: '法令纹', percent: 2.45 }
  ],
  cons: [
    { text: '长痘', percent: 18.00 }, { text: '辣眼睛', percent: 16.00 }, 
    { text: '拔干', percent: 10.00 }, { text: '不舒服', percent: 8.00 }, { text: '皮肤', percent: 8.00 }
  ]
};

export const WORD_CLOUD = [
  { text: '珀莱雅', weight: 9, color: 'text-blue-700' },
  { text: '银管', weight: 9, color: 'text-blue-600' },
  { text: '防晒', weight: 9, color: 'text-blue-500' },
  { text: '皮肤', weight: 8, color: 'text-slate-500' },
  { text: '精华', weight: 8, color: 'text-blue-400' },
  { text: '面霜', weight: 7, color: 'text-blue-600' },
  { text: '很好用', weight: 7, color: 'text-blue-800' },
  { text: '敏感肌', weight: 6, color: 'text-slate-400' },
  { text: '早C晚A', weight: 6, color: 'text-blue-900' },
  { text: '红宝石', weight: 5, color: 'text-slate-500' },
  { text: '价格', weight: 5, color: 'text-blue-300' },
  { text: '划算', weight: 4, color: 'text-slate-400' },
  { text: '泛红', weight: 4, color: 'text-blue-700' },
  { text: '长痘', weight: 3, color: 'text-slate-300' },
];

export const CONTENT_DETAILS_DATA = [
  { id: 1, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人1', type: 'UGC', likes: 2340, bookmarks: 1205, comments: 456, shares: 890, image: 'https://picsum.photos/seed/note1/200/200' },
  { id: 2, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人2', type: 'BGC', likes: 1890, bookmarks: 980, comments: 320, shares: 560, image: 'https://picsum.photos/seed/note2/200/200' },
  { id: 3, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人3', type: 'UGC', likes: 3450, bookmarks: 1560, comments: 670, shares: 1200, image: 'https://picsum.photos/seed/note3/200/200' },
  { id: 4, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人4', type: 'UGC', likes: 980, bookmarks: 450, comments: 120, shares: 230, image: 'https://picsum.photos/seed/note4/200/200' },
  { id: 5, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人5', type: 'BGC', likes: 4560, bookmarks: 2300, comments: 890, shares: 1500, image: 'https://picsum.photos/seed/note5/200/200' },
  { id: 6, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人6', type: 'UGC', likes: 1200, bookmarks: 560, comments: 230, shares: 340, image: 'https://picsum.photos/seed/note6/200/200' },
  { id: 7, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人7', type: 'BGC', likes: 2890, bookmarks: 1100, comments: 450, shares: 780, image: 'https://picsum.photos/seed/note7/200/200' },
  { id: 8, title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评...', author: '护肤达人8', type: 'BGC', likes: 890, bookmarks: 340, comments: 90, shares: 120, image: 'https://picsum.photos/seed/note8/200/200' },
];

export const COMMENTS_DATA = [
  { id: 1, user: '用户0vv46ob', content: '这款面霜抗老确实可以，但是跟我的防晒搭配在一起搓泥现象非常严重！希望能改进肤感。', likes: 304, highlight: '搓泥' },
  { id: 2, user: '用户4ugrw8', content: '我是混油皮，晚上用这个还可以，白天用后续上妆会有点搓泥，建议晚上用。', likes: 400, highlight: '搓泥' },
  { id: 3, user: '用户dnde1i', content: '抗老效果是有的，法令纹淡了一些，但是味道真的有点冲，需要适应一下。', likes: 460, highlight: '味道' },
  { id: 4, user: '用户muqyh9', content: '性价比很高，学生党冲！送的小样特别多，感觉能用半年。', likes: 99, highlight: '性价比' },
  { id: 5, user: '用户b0fnx7', content: '跟风买的，结果过敏了，脸上泛红发痒，敏感肌慎入！', likes: 427, highlight: '泛红' },
  { id: 6, user: '用户x9zk2m', content: '回购第三瓶了，搭配双抗精华用，皮肤真的变细腻了，早C晚Ayyds！', likes: 521, highlight: '早C晚A' },
  { id: 7, user: '用户q1we3r', content: '包装很有质感，但是面霜质地有点厚重，不太好推开。', likes: 156, highlight: '质地' },
  { id: 8, user: '用户p0oi9u', content: '搓泥！搓泥！搓泥！重要的事情说三遍！', likes: 892, highlight: '搓泥' },
];

export const SEARCH_RANKING_DATA = [
  { rank: 1, brand: '欧莱雅', score: 98500 },
  { rank: 2, brand: '兰蔻', score: 92100 },
  { rank: 3, brand: '珀莱雅', score: 88400 },
  { rank: 4, brand: '雅诗兰黛', score: 76200 },
  { rank: 5, brand: '修丽可', score: 65000 },
  { rank: 6, brand: '赫莲娜', score: 58900 },
  { rank: 7, brand: '海蓝之谜', score: 54300 },
  { rank: 8, brand: '资生堂', score: 49800 },
  { rank: 9, brand: '科颜氏', score: 45600 },
  { rank: 10, brand: '薇诺娜', score: 42100 },
];

export const SEARCH_OCCUPANCY_DATA = {
  keyword: '抗老面霜',
  rank: 'Top 1',
  isOccupied: true,
  note: {
    title: '【早C晚A】熬夜脸必看，珀莱雅红宝石面霜测评，我的救星！',
    image: '', // Placeholder
    author: '护肤小天才',
    brand: '珀莱雅 PROYA',
    stats: {
      likes: 8450,
      bookmarks: 3210,
      comments: 456
    },
    tags: ['UGC 真实种草']
  },
  aiStrategy: '该内容自然流量表现优异，互动率高于行业均值 24%。建议通过聚光平台【搜索广告】进行长效追投，巩固该词 Top 3 排名，防止竞品截流。'
};

export const KEYWORD_DETAILS_DATA = [
  { keyword: '混油皮能用吗', searchIndex: 12500, bid: 1.5 },
  { keyword: '成分分析', searchIndex: 10800, bid: 2.1 },
  { keyword: '早C晚A搭配', searchIndex: 9800, bid: 1.8 },
  { keyword: '孕妇可用', searchIndex: 8500, bid: 1.2 },
  { keyword: '真假鉴别', searchIndex: 7200, bid: 0.9 },
  { keyword: '双十一优惠', searchIndex: 15600, bid: 3.5 },
  { keyword: '跟欧莱雅对比', searchIndex: 6400, bid: 1.6 },
  { keyword: '红宝石面霜', searchIndex: 45000, bid: 4.2 },
  { keyword: '抗老面霜推荐', searchIndex: 32000, bid: 3.8 },
  { keyword: '珀莱雅怎么样', searchIndex: 28000, bid: 2.5 },
];

export const ROBOROCK_RADAR_DATA = [
  { subject: '内容填充度', A: 95, B: 85, C: 70, D: 60, fullMark: 100 },
  { subject: '内容能见度', A: 88, B: 75, C: 80, D: 65, fullMark: 100 },
  { subject: '内容好感度', A: 92, B: 80, C: 85, D: 70, fullMark: 100 },
  { subject: '内容讨论度', A: 96, B: 88, C: 75, D: 80, fullMark: 100 },
  { subject: '内容效率', A: 89, B: 82, C: 78, D: 68, fullMark: 100 },
];

export const ROBOROCK_SUMMARY_CARDS = [
  { 
    id: 'fill', 
    title: '内容填充度', 
    score: 95, 
    trend: 12, 
    isUp: true, 
    icon: BarChart2,
    competitors: [
      { name: '科沃斯', score: 85 },
      { name: '追觅', score: 70 }
    ]
  },
  { 
    id: 'vis', 
    title: '内容能见度', 
    score: 88, 
    trend: 8, 
    isUp: true, 
    icon: Search,
    competitors: [
      { name: '科沃斯', score: 75 },
      { name: '追觅', score: 80 }
    ]
  },
  { 
    id: 'fav', 
    title: '内容好感度', 
    score: 92, 
    trend: 5, 
    isUp: true, 
    icon: Heart,
    competitors: [
      { name: '科沃斯', score: 80 },
      { name: '追觅', score: 85 }
    ]
  },
  { 
    id: 'disc', 
    title: '内容讨论度', 
    score: 96, 
    trend: 20, 
    isUp: true, 
    icon: MessageCircle,
    competitors: [
      { name: '科沃斯', score: 88 },
      { name: '追觅', score: 75 }
    ]
  },
  { 
    id: 'eff', 
    title: '内容效率', 
    score: 89, 
    trend: 4, 
    isUp: true, 
    icon: Zap,
    competitors: [
      { name: '科沃斯', score: 82 },
      { name: '追觅', score: 85 }
    ]
  },
];

export const ROBOROCK_FILLING_DATA = {
  brandVolume: 125000,
  industryAvg: 85000,
  sov: 35.5,
  totalMarket: 352000,
  ugc: 75,
  bgc: 25,
  yoy: 45.2,
  mom: 12.8
};

export const ROBOROCK_TREND_DATA = [
  { date: '1周', value: 12000 }, { date: '2周', value: 13500 }, { date: '3周', value: 15000 },
  { date: '4周', value: 14800 }, { date: '5周', value: 18000 }, { date: '6周', value: 22000 },
  { date: '7周', value: 25000 }, { date: '8周', value: 31000 }, { date: '9周', value: 28000 },
  { date: '10周', value: 35000 }, { date: '11周', value: 42000 }, { date: '12周', value: 45000 },
];

export const ROBOROCK_PROS_CONS = {
  pros: [
    { text: '避障牛', percent: 65.2 }, { text: '算法强', percent: 45.8 }, 
    { text: '解放双手', percent: 35.5 }, { text: '建图快', percent: 28.4 }, { text: '毛发防缠绕', percent: 25.1 }
  ],
  cons: [
    { text: '价格贵', percent: 22.5 }, { text: '基站大', percent: 15.2 }, 
    { text: '水箱小', percent: 12.8 }, { text: '耗材贵', percent: 10.5 }, { text: '噪音大', percent: 8.2 }
  ]
};

export const ROBOROCK_WORD_CLOUD = [
  { text: '石头', weight: 10, color: 'text-blue-700' },
  { text: '扫地机器人', weight: 9, color: 'text-blue-600' },
  { text: '避障', weight: 9, color: 'text-blue-500' },
  { text: '算法', weight: 8, color: 'text-slate-500' },
  { text: '智能', weight: 8, color: 'text-blue-400' },
  { text: '建图', weight: 7, color: 'text-blue-600' },
  { text: '解放双手', weight: 7, color: 'text-blue-800' },
  { text: '拖地', weight: 6, color: 'text-slate-400' },
  { text: '毛发', weight: 6, color: 'text-blue-900' },
  { text: '基站', weight: 5, color: 'text-slate-500' },
  { text: '真香', weight: 5, color: 'text-blue-300' },
  { text: '好用', weight: 4, color: 'text-slate-400' },
  { text: '贵', weight: 4, color: 'text-blue-700' },
  { text: '噪音', weight: 3, color: 'text-slate-300' },
];

export const ROBOROCK_CONTENT_DETAILS_DATA = [
  { id: 1, title: '【硬核评测】石头G20S到底值不值得买？', author: '科技评测局', type: 'PGC', likes: 45000, bookmarks: 12000, comments: 3400, shares: 8900, image: 'https://picsum.photos/seed/roborock1/200/200' },
  { id: 2, title: '扫地机横评：石头、科沃斯、追觅怎么选？', author: '数码老司机', type: 'PGC', likes: 38000, bookmarks: 15000, comments: 4200, shares: 11000, image: 'https://picsum.photos/seed/roborock2/200/200' },
  { id: 3, title: '养宠家庭福音！石头扫地机防缠绕实测', author: '萌宠日记', type: 'UGC', likes: 25000, bookmarks: 8500, comments: 1200, shares: 5600, image: 'https://picsum.photos/seed/roborock3/200/200' },
  { id: 4, title: '石头P10 Pro使用一个月真实感受', author: '生活家小李', type: 'UGC', likes: 18000, bookmarks: 6200, comments: 890, shares: 3400, image: 'https://picsum.photos/seed/roborock4/200/200' },
];

export const ROBOROCK_COMMENTS_DATA = [
  { id: 1, user: '科技宅男', content: '石头的算法确实是目前市面上最强的，避障从来没让我失望过。', likes: 5600, highlight: '算法' },
  { id: 2, user: '铲屎官大作战', content: '家里两只猫，以前的扫地机天天缠毛，换了石头终于解放双手了！', likes: 4200, highlight: '解放双手' },
  { id: 3, user: '理性消费', content: '好用是好用，就是价格有点小贵，等双十一再入手。', likes: 3800, highlight: '价格' },
  { id: 4, user: '家居达人', content: '建图速度太快了，而且APP操作很人性化，指哪扫哪。', likes: 2900, highlight: '建图' },
  { id: 5, user: '强迫症患者', content: '边角清理还是有点死角，希望能继续改进机械臂。', likes: 1500, highlight: '边角' },
];

export const ROBOROCK_SEARCH_RANKING_DATA = [
  { rank: 1, brand: '石头', score: 158000 },
  { rank: 2, brand: '科沃斯', score: 142000 },
  { rank: 3, brand: '追觅', score: 135000 },
  { rank: 4, brand: '云鲸', score: 112000 },
  { rank: 5, brand: '小米', score: 98000 },
];

export const ROBOROCK_SEARCH_OCCUPANCY_DATA = {
  keyword: '扫地机器人推荐',
  rank: 'Top 1',
  isOccupied: true,
  note: {
    title: '2024年扫地机器人怎么选？这篇硬核横评告诉你答案！',
    image: '', 
    author: '科技先锋',
    brand: '石头科技',
    stats: {
      likes: 125000,
      bookmarks: 85000,
      comments: 12000
    },
    tags: ['PGC 专业评测']
  },
  aiStrategy: '该视频在B站自然搜索排名稳居第一，长尾流量极佳。建议将其作为品牌核心背书资产，在其他平台进行切片分发。'
};

export const ROBOROCK_KEYWORD_DETAILS_DATA = [
  { keyword: '石头G20S评测', searchIndex: 85000, bid: 2.5 },
  { keyword: '扫地机器人哪个牌子好', searchIndex: 120000, bid: 3.8 },
  { keyword: '石头科沃斯对比', searchIndex: 65000, bid: 2.1 },
  { keyword: '养宠家庭扫地机', searchIndex: 45000, bid: 1.5 },
  { keyword: '石头P10 Pro', searchIndex: 72000, bid: 2.2 },
];

export const VISIBILITY_SCATTER_DATA = [
  { name: '西门子高端嵌入式测评', volume: 8500, efficiency: 82, interactions: 4500, type: '质爆' },
  { name: '500元挑战家庭大餐', volume: 55000, efficiency: 35, interactions: 12000, type: '量爆' },
  { name: '微蒸烤智商税排雷', volume: 12000, efficiency: 75, interactions: 6000, type: '质爆' },
  { name: '老板电器品牌宣传片', volume: 42000, efficiency: 15, interactions: 2000, type: '常规' },
  { name: '厨房改造Vlog', volume: 38000, efficiency: 55, interactions: 8000, type: '量爆' },
  { name: '双11家电避坑指南', volume: 25000, efficiency: 88, interactions: 9500, type: '质爆' },
  { name: '十分钟快手菜', volume: 6000, efficiency: 45, interactions: 1500, type: '常规' },
  { name: '方太蒸烤一体机拆机', volume: 15000, efficiency: 92, interactions: 7000, type: '质爆' }
];

export const VISIBILITY_TREND_DATA = [
  { date: '11.14', playIndex: 420, interactIndex: 120 },
  { date: '11.18', playIndex: 580, interactIndex: 150 },
  { date: '11.22', playIndex: 650, interactIndex: 280 },
  { date: '11.26', playIndex: 480, interactIndex: 210 },
  { date: '11.30', playIndex: 720, interactIndex: 350 },
  { date: '12.04', playIndex: 600, interactIndex: 300 },
  { date: '12.08', playIndex: 1050, interactIndex: 680 },
  { date: '12.12', playIndex: 850, interactIndex: 520 },
  { date: '12.16', playIndex: 500, interactIndex: 380 }
];

export const DISCUSSION_TREND_DATA = [
  { date: '3.28', searchIndex: 900, interactIndex: 1800 },
  { date: '4.04', searchIndex: 1050, interactIndex: 2100 },
  { date: '4.11', searchIndex: 1100, interactIndex: 2200 },
  { date: '4.18', searchIndex: 1400, interactIndex: 3000 },
  { date: '4.25', searchIndex: 1200, interactIndex: 2400 },
  { date: '5.02', searchIndex: 1350, interactIndex: 2600 },
  { date: '5.09', searchIndex: 1800, interactIndex: 4200 },
  { date: '5.16', searchIndex: 1600, interactIndex: 3800 },
  { date: '5.23', searchIndex: 2900, interactIndex: 8500 },
  { date: '5.30', searchIndex: 4500, interactIndex: 12000 },
  { date: '6.06', searchIndex: 6800, interactIndex: 9500 },
  { date: '6.13', searchIndex: 5200, interactIndex: 6000 },
  { date: '6.20', searchIndex: 3100, interactIndex: 4500 },
  { date: '6.27', searchIndex: 2800, interactIndex: 3900 }
];

export const DEFAULT_PARTITION_DATA = [
  { subject: '动画', A: 85, fullMark: 100 },
  { subject: '游戏', A: 92, fullMark: 100 },
  { subject: '知识', A: 78, fullMark: 100 },
  { subject: '鬼畜', A: 65, fullMark: 100 },
  { subject: '音乐', A: 45, fullMark: 100 },
  { subject: '舞蹈', A: 30, fullMark: 100 },
];

export const ROBOROCK_PARTITION_DATA = [
  { subject: '数码', A: 95, fullMark: 100 },
  { subject: '家居', A: 88, fullMark: 100 },
  { subject: '生活', A: 75, fullMark: 100 },
  { subject: '科技', A: 82, fullMark: 100 },
  { subject: '搞笑', A: 45, fullMark: 100 },
  { subject: '萌宠', A: 60, fullMark: 100 },
];

export const DISCUSSION_DERIVED_KEYWORDS = [
  { word: "扫地机器人避障", hotness: 98, type: "技术" },
  { word: "石头G20S测评", hotness: 92, type: "品类" },
  { word: "养宠家庭扫地机", hotness: 85, type: "场景" },
  { word: "扫地机建图速度", hotness: 72, type: "技术" },
  { word: "解放双手神器", hotness: 65, type: "生活" },
  { word: "石头科沃斯对比", hotness: 58, type: "竞品" }
];

export const SHADOW_CARD = "shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
export const CARD_BASE = `bg-white rounded-2xl ${SHADOW_CARD} p-6 sm:p-8`;
