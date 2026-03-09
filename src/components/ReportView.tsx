import React, { useState } from 'react';
import { 
  ArrowLeft, Download, PieChart, Info, TrendingUp, TrendingDown, 
  Zap, ArrowRight, Layers, BarChart2, Search, Smile, Cloud, 
  ThumbsDown, MessageCircle, Activity, DollarSign, X, Heart,
  Eye, Repeat, MousePointerClick, Compass, Users
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell,
  AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
  ScatterChart, Scatter, ReferenceLine, LineChart, Line
} from 'recharts';
import { 
  SUMMARY_CARDS, RADAR_DATA, FILLING_DATA, TREND_DATA, 
  PROS_CONS, WORD_CLOUD, CARD_BASE, CONTENT_DETAILS_DATA, COMMENTS_DATA, SEARCH_RANKING_DATA, SEARCH_OCCUPANCY_DATA, KEYWORD_DETAILS_DATA,
  ROBOROCK_RADAR_DATA, ROBOROCK_SUMMARY_CARDS, ROBOROCK_FILLING_DATA, ROBOROCK_TREND_DATA,
  ROBOROCK_PROS_CONS, ROBOROCK_WORD_CLOUD, ROBOROCK_CONTENT_DETAILS_DATA, ROBOROCK_COMMENTS_DATA,
  ROBOROCK_SEARCH_RANKING_DATA, ROBOROCK_SEARCH_OCCUPANCY_DATA, ROBOROCK_KEYWORD_DETAILS_DATA,
  VISIBILITY_SCATTER_DATA, VISIBILITY_TREND_DATA,
  DISCUSSION_TREND_DATA, DEFAULT_PARTITION_DATA, ROBOROCK_PARTITION_DATA, DISCUSSION_DERIVED_KEYWORDS
} from '../data/mockData';

// --- 提取独立的 Tooltip 防止 React 报错 ---
const CustomAreaTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-100 shadow-xl rounded-xl">
        <p className="font-bold text-slate-800 text-sm mb-3 pb-2 border-b border-slate-100">{label} 数据表现</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-6 mb-1.5 text-xs">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
              {entry.name}
            </span>
            <span className="font-bold text-slate-900">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface ReportViewProps {
  formData: any;
  onBack: () => void;
}

export default function ReportView({ formData, onBack }: ReportViewProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isOccupancyOpen, setIsOccupancyOpen] = useState(false);
  const [isKeywordsOpen, setIsKeywordsOpen] = useState(false);

  const isRoborock = formData.brand === '石头扫地机';

  const currentRadarData = isRoborock ? ROBOROCK_RADAR_DATA : RADAR_DATA;
  const currentPartitionData = isRoborock ? ROBOROCK_PARTITION_DATA : DEFAULT_PARTITION_DATA;
  const currentSummaryCards = isRoborock ? ROBOROCK_SUMMARY_CARDS : SUMMARY_CARDS;
  const currentFillingData = isRoborock ? ROBOROCK_FILLING_DATA : FILLING_DATA;
  const currentTrendData = isRoborock ? ROBOROCK_TREND_DATA : TREND_DATA;
  const currentProsCons = isRoborock ? ROBOROCK_PROS_CONS : PROS_CONS;
  const currentWordCloud = isRoborock ? ROBOROCK_WORD_CLOUD : WORD_CLOUD;
  const currentContentDetailsData = isRoborock ? ROBOROCK_CONTENT_DETAILS_DATA : CONTENT_DETAILS_DATA;
  const currentCommentsData = isRoborock ? ROBOROCK_COMMENTS_DATA : COMMENTS_DATA;
  const currentSearchRankingData = isRoborock ? ROBOROCK_SEARCH_RANKING_DATA : SEARCH_RANKING_DATA;
  const currentSearchOccupancyData = isRoborock ? ROBOROCK_SEARCH_OCCUPANCY_DATA : SEARCH_OCCUPANCY_DATA;
  const currentKeywordDetailsData = isRoborock ? ROBOROCK_KEYWORD_DETAILS_DATA : KEYWORD_DETAILS_DATA;

  const overallScore = isRoborock ? 92 : 85;
  const overallLevel = isRoborock ? 'S' : 'S';
  const overallDesc = isRoborock ? '行业标杆' : '领先资产';
  const comp1 = isRoborock ? '科沃斯' : '欧莱雅';
  const comp2 = isRoborock ? '追觅' : '雅诗兰黛';

  const isBilibili = formData.platform === 'bilibili';
  const contentType = isBilibili ? '视频' : '笔记';
  const contentUnit = isBilibili ? '个' : '篇';

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-24">
      {/* 报告头部 */}
      <div className="flex justify-between items-end">
        <div>
          <button onClick={onBack} className="text-xs font-bold text-slate-400 hover:text-blue-600 flex items-center gap-1.5 mb-5 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> 返回工作台
          </button>
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">{formData.brand || '珀莱雅 PROYA'}</h1>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg tracking-wide uppercase">商业诊断报告</span>
          </div>
          <div className="flex gap-6 mt-3 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>行业: {formData.industry || '家居家装'}</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>平台: {formData.platform === 'bilibili' ? 'B站' : '小红书'}</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>周期: 2025-03-03 ~ 2026-03-03</div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 font-bold rounded-xl hover:text-blue-600 shadow-sm border border-slate-100 transition-all">
          <Download className="w-4 h-4" /> 导出 PDF
        </button>
      </div>

      {/* 核心摘要 Dashboard */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <PieChart className="w-5 h-5 text-blue-600" /> Executive Summary <span className="text-slate-300 font-normal mx-2">|</span> 核心摘要
          </h2>
          <button className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5" /> 查看竞品详细数据 <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        
        {/* 五维指标概览卡片 - 纯净蓝白主题 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {currentSummaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="bg-white rounded-2xl p-5 flex flex-col justify-between group hover:shadow-md transition-all border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="text-sm font-bold text-slate-700 leading-tight w-14 break-words">{card.title}</span>
                    </div>
                  </div>
                  <div className={`flex items-center text-xs font-bold shrink-0 ml-1 ${card.isUp ? 'text-blue-600' : 'text-slate-400'}`}>
                    {card.isUp ? '+' : ''}{card.trend}%
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">{card.score}</span>
                  <span className="text-sm font-bold text-slate-400">/100</span>
                </div>
                
                {/* 竞品数据展示 */}
                <div className="space-y-2 pt-3 border-t border-slate-50">
                  {card.competitors && card.competitors.map((comp, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-orange-500' : 'bg-purple-500'}`}></div>
                        <span className="font-medium text-slate-500">{comp.name}</span>
                      </div>
                      <span className="font-bold text-slate-700">{comp.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* 左侧：总分与雷达图 */}
          <div className="col-span-12 lg:col-span-5 flex flex-col border-r border-slate-100 pr-10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">内容资产健康度总分</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">{overallScore}</span>
                  <span className="text-lg font-bold text-slate-400">/100</span>
                </div>
              </div>
              <div className="bg-blue-600 px-5 py-3 rounded-2xl text-center shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
                <p className="text-white font-black text-2xl leading-none mb-1">{overallLevel}<span className="text-sm ml-0.5 font-bold">级</span></p>
                <p className="text-blue-100 text-[10px] font-bold tracking-wider uppercase">{overallDesc}</p>
              </div>
            </div>
            
            <div className="w-full h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={currentRadarData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="本品" dataKey="A" stroke="#2563eb" strokeWidth={2} fill="#3b82f6" fillOpacity={0.15} />
                  <Radar name={comp1} dataKey="C" stroke="#f97316" strokeWidth={2} fill="none" />
                  <Radar name={comp2} dataKey="D" stroke="#a855f7" strokeWidth={2} fill="none" />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 500, paddingTop: '10px' }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 右侧：AI 诊断结论 */}
          <div className="col-span-12 lg:col-span-7 space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wide">
                <Zap className="w-4 h-4 text-blue-600 fill-current" /> AI 核心发现
              </h3>
              <ul className="space-y-6">
                {isRoborock ? (
                  <>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900">核心词占位稳固：</span>在“扫地机器人推荐”等核心词下，搜索占位表现优异，<span className="text-slate-900 underline decoration-blue-200 decoration-2 underline-offset-4">长尾流量转化率高</span>，有效拦截了竞品流量。
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900">技术口碑领先：</span>用户对“避障”、“算法”等技术维度的正向反馈极高，技术护城河心智已经建立。
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900">价格敏感度高：</span>负面反馈主要集中在“价格贵”和“耗材贵”，需要通过更多场景化种草来提升价值感。
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900">漏斗致命断层：</span>前端搜索量（激增35.85%）和中端曝光（Top 2）表现极佳，但末端阅读率死死卡在 2.49%（零增长）。<span className="text-slate-900 underline decoration-blue-200 decoration-2 underline-offset-4">海量曝光被白白浪费在“看而不点”上。</span>
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900">生态严重长尾化：</span>内容大盘暴跌近 50%，SOV 跌破 1%。高度依赖商业注水，一旦停投自然流量迅速枯竭。同时，在“高端护肤品”等能拉新客的品类词中几乎隐身。
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        <span className="font-bold text-slate-900">口碑刺客引发流失预警：</span>整体好感度高达 88 分（“熬夜党”卡位精准），但“长痘、辣眼睛”等生理不适不仅是核心吐槽点，更已发酵成“双抗水乳长痘”等高危搜索词，极易引发主动避雷。
                      </p>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 详细诊断 - 维度1：内容填充度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-blue-600" /> 1. 内容填充度诊断 <span className="text-slate-300 font-normal mx-2">|</span> Volume & SOV
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">85</span>
             <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">S级</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧卡片：总量与均值对比 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col justify-center relative group">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <BarChart2 className="w-4 h-4" /> 品牌词内容总量 vs 行业均值
              </h3>
              <button 
                onClick={() => setIsDetailsOpen(true)}
                className="text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <Search className="w-3 h-3" /> 查看明细
              </button>
            </div>
            
            <div className="flex items-end gap-6 mb-6">
               <div className="flex-1">
                 <div className="text-xs font-bold text-slate-500 mb-2">本品内容总量 ({contentUnit})</div>
                 <div className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                   {currentFillingData.brandVolume.toLocaleString()}
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                     <TrendingUp className="w-3 h-3" /> 同比 +{currentFillingData.yoy}%
                   </div>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                     <TrendingUp className="w-3 h-3" /> 环比 +{currentFillingData.mom}%
                   </div>
                 </div>
               </div>
               <div className="flex-1">
                 <div className="text-xs font-bold text-slate-400 mb-2">行业Top品牌均值</div>
                 <div className="text-2xl font-black text-slate-400 tracking-tight">
                   {currentFillingData.industryAvg.toLocaleString()}
                 </div>
               </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-blue-600">本品</span>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-100/50 px-2 py-1 rounded-md">
                    {(currentFillingData.brandVolume / currentFillingData.industryAvg).toFixed(2)}x 行业均值
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full" 
                    style={{ width: `${Math.min((currentFillingData.brandVolume / Math.max(currentFillingData.brandVolume, currentFillingData.industryAvg)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2 font-bold text-slate-400">
                  <span>行业均值</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-slate-400 h-full rounded-full" 
                    style={{ width: `${Math.min((currentFillingData.industryAvg / Math.max(currentFillingData.brandVolume, currentFillingData.industryAvg)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* 中间卡片：SOV 仪表盘 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <PieChart className="w-4 h-4" /> 品牌内容{contentType}占有率 (SOV)
            </h3>
            
            <div className="flex-1 flex flex-col items-center justify-end relative h-[180px]">
               <div className="absolute inset-0 top-4">
                 <ResponsiveContainer width="100%" height="100%">
                   <RechartsPieChart>
                      <Pie
                        data={[
                          { value: currentFillingData.sov }, 
                          { value: 100 - currentFillingData.sov }
                        ]}
                        cx="50%" cy="100%"
                        startAngle={180} endAngle={0}
                        innerRadius={75} outerRadius={110}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={6}
                      >
                        <Cell fill="#2563eb" /> {/* blue-600 */}
                        <Cell fill="#e2e8f0" /> {/* slate-200 */}
                      </Pie>
                   </RechartsPieChart>
                 </ResponsiveContainer>
               </div>
               
               <div className="text-center z-10 pb-2">
                 <div className="text-5xl font-black text-slate-900 tracking-tight">
                   {currentFillingData.sov}<span className="text-2xl text-slate-400 ml-1">%</span>
                 </div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-3">
                   大盘总容量: {currentFillingData.totalMarket.toLocaleString()} {contentUnit}
                 </div>
               </div>
            </div>
          </div>
          
          {/* 新增：UP主层级配比 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Users className="w-4 h-4" /> UP主层级配比
            </h3>
            <div className="flex-1 flex flex-col justify-center gap-4">
              {[
                { label: '头部 (百万粉+)', value: 15, color: 'bg-blue-600' },
                { label: '腰部 (10万-100万)', value: 45, color: 'bg-blue-400' },
                { label: '尾部 (10万以下)', value: 40, color: 'bg-blue-200' },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧卡片：UGC vs BGC 结构占比 */}
          <div className="lg:col-span-3 bg-[#F8FAFC] rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <PieChart className="w-4 h-4" /> 内容生态结构占比
            </h3>
            
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <div className="w-24 h-24 shrink-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={[
                        { value: 64, fill: '#2563eb' }, // blue-600
                        { value: 36, fill: '#94a3b8' }  // slate-400
                      ]}
                      cx="50%" cy="50%"
                      innerRadius="65%" outerRadius="100%"
                      dataKey="value"
                      stroke="none"
                      startAngle={90} endAngle={-270}
                      paddingAngle={2}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex-1 w-full space-y-4">
                <div className="flex justify-between items-start">
                  <div className="pr-2">
                    <div className="text-sm font-bold text-slate-900">非商业{contentType} <span className="text-xs font-medium text-slate-400 ml-1">真实种草</span></div>
                    <div className="text-[10px] font-medium text-slate-400 mt-1 leading-snug">生态健康，长尾达人发文意愿强</div>
                  </div>
                  <div className="text-xl font-black text-blue-600">64%</div>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <div>
                    <div className="text-sm font-bold text-slate-500">商业{contentType} <span className="text-xs font-medium text-slate-400 ml-1">官方干预</span></div>
                  </div>
                  <div className="text-lg font-black text-slate-400">36%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI 生态健康度评估 */}
        <div className="mt-6 bg-blue-50/30 border-l-4 border-blue-600 rounded-r-xl p-6 flex gap-4 items-start">
          <div className="mt-1">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-700">AI 生态健康度评估</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
              内容填充度方面，品牌近一年内容总量为 <span className="font-bold">12.5万</span> {contentUnit}，高于行业均值（<span className="font-bold">8.5万{contentUnit}</span>）。SOV 达到 <span className="font-bold">35.5%</span>，在 <span className="font-bold">智能家居</span> 行业中占据绝对领先地位。品牌依靠 <span className="font-bold">75%</span> 的 UGC 占比维持了极佳的内生增长动力，非商业{contentType}是品牌声量的主要来源。
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                <p className="text-sm text-slate-700 font-medium">
                  <span className="font-bold text-slate-900">技术心智壁垒：</span>用户对“避障”、“算法”等技术维度的正向反馈极高，已成功建立技术护城河，有效拦截竞品流量。
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                <p className="text-sm text-slate-700 font-medium">
                  <span className="font-bold text-slate-900">场景化渗透：</span>在“养宠”、“母婴”等细分场景下的内容渗透率持续提升，有效拓宽了目标用户群体。
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-blue-100">
              <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" /> AI 行动指引
              </h4>
              <div className="space-y-2">
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-blue-600 shrink-0">策略一</span>
                  <span className="text-slate-700"><span className="font-bold">强化场景种草：</span>针对养宠、母婴等细分场景，产出更多真实体验内容，弱化价格敏感度。</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-blue-600 shrink-0">策略二</span>
                  <span className="text-slate-700"><span className="font-bold">防御性占位：</span>在核心技术词（避障、算法）上保持高强度投放，防止竞品通过低价策略截流。</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-blue-600 shrink-0">策略三</span>
                  <span className="text-slate-700"><span className="font-bold">口碑资产沉淀：</span>引导优质UGC内容转化为官方背书资产，提升品牌整体价值感。</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 详细诊断 - 维度2：内容能见度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <Search className="w-5 h-5 text-blue-600" /> 2. 能见度异常剖析 <span className="text-slate-300 font-normal mx-2">|</span> Search Visibility Drop-off
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">45</span>
             <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md">C级</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: '综合回看率', value: '18.4%', trend: '+2.1%', desc: `重复观看${contentType}的用户占比`, icon: Repeat },
            { title: '主动回搜率', value: '5.2%', trend: '+0.8%', desc: '看完后搜索品牌词的概率', icon: Search },
            { title: '质爆稿件占比', value: '32%', trend: '+5%', desc: '落入高心智效率区间的稿件', icon: MousePointerClick },
            { title: '内容长尾指数', value: '86.5', trend: '+12', desc: '发布30天后仍有自然流量的分数', icon: Eye }
          ].map((metric, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
              <div className="flex justify-between items-start">
                <div className="text-slate-500 text-sm font-medium flex items-center gap-1">
                  {metric.title}
                  <Info className="w-3 h-3 cursor-help" />
                </div>
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                  <metric.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-800">{metric.value}</span>
                <span className="text-sm text-emerald-500 mb-1 font-medium">{metric.trend}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">{metric.desc}</p>
            </div>
          ))}
        </div>

        {/* 图表展示区 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 左侧：爆文矩阵散点图 */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">稿件爆文矩阵分布</h3>
                <p className="text-xs text-slate-500 mt-1">质爆区(高转化) vs 量爆区(高曝光)</p>
              </div>
            </div>
            <div className="h-80 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis type="number" dataKey="volume" name="稿件声量" unit=" 播放" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <YAxis type="number" dataKey="efficiency" name="心智效率" unit="%" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-lg">
                            <p className="font-bold text-slate-800 text-sm mb-2">{data.name}</p>
                            <p className="text-xs text-slate-600">声量: <span className="text-blue-600 font-medium">{data.volume}</span></p>
                            <p className="text-xs text-slate-600 mt-1">心智效率: <span className="text-blue-600 font-medium">{data.efficiency}%</span></p>
                            <p className="text-xs text-slate-600 mt-1">互动量: <span className="font-medium">{data.interactions}</span></p>
                            <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${data.type === '质爆' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                              {data.type}区
                            </span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  {/* 十字基准线划分四大象限 */}
                  <ReferenceLine x={20000} stroke="#9ca3af" strokeDasharray="3 3" />
                  <ReferenceLine y={50} stroke="#9ca3af" strokeDasharray="3 3" />
                  <Scatter name="稿件" data={VISIBILITY_SCATTER_DATA} fill="#2563eb" fillOpacity={0.7} shape="circle" />
                </ScatterChart>
              </ResponsiveContainer>
              {/* 象限背景辅助文字 */}
              <div className="absolute top-4 left-16 text-xs text-blue-400 font-bold opacity-50">质爆区 (垂类硬核)</div>
              <div className="absolute top-4 right-8 text-xs text-slate-400 font-bold opacity-50">全网爆款区</div>
              <div className="absolute bottom-10 right-8 text-xs text-slate-400 font-bold opacity-50">量爆区 (泛娱乐)</div>
            </div>
          </div>

          {/* 右侧：播放与互动走势 */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">核心指数长效走势</h3>
                <p className="text-xs text-slate-500 mt-1">对比播放量指数与互动指数的健康度</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={VISIBILITY_TREND_DATA} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 500 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Line yAxisId="left" type="monotone" dataKey="playIndex" name="播放量指数" stroke="#94a3b8" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line yAxisId="right" type="monotone" dataKey="interactIndex" name="互动量指数 (转评赞投)" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 左侧：圈层渗透分布图 */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-2">核心分区内容热度</h3>
            <p className="text-xs text-slate-500 mb-6">品牌在B站各分区的内容渗透情况</p>
            <div className="flex-1 min-h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={currentPartitionData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 10, fontWeight: 700 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="品牌势能" dataKey="A" stroke="#2563eb" strokeWidth={2} fill="#3b82f6" fillOpacity={0.25} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px', fontWeight: 'bold' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 右侧：AI 洞察结论框 */}
          <div className="lg:col-span-2 bg-[#F8FAFC] border-l-4 border-blue-600 rounded-r-xl p-6 flex flex-col justify-center gap-6">
            {/* AI 圈层渗透洞察 */}
            <div className="flex gap-3 items-start">
              <Activity className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-blue-800 mb-2">AI 圈层渗透洞察</h4>
                
                {isRoborock ? (
                  <>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">数码科技区势能强劲：</span>品牌在数码和科技分区的渗透率极高，分别达到 95 和 82，说明在核心硬核圈层已经建立了极强的品牌心智和技术壁垒。
                    </p>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">生活家居区稳步增长：</span>在家居和生活分区的渗透表现良好，表明产品正成功向大众消费场景延伸，但仍有进一步提升空间。
                    </p>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">泛娱乐区渗透不足：</span>在搞笑、萌宠等泛娱乐分区的热度相对较低，这意味着品牌在年轻化、趣味化内容上的触达还有待加强，存在破圈潜力。
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">核心圈层势能强劲：</span>品牌在游戏和动画分区的渗透率极高，说明在核心二次元圈层已经建立了极强的品牌心智。
                    </p>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">知识区稳步增长：</span>在知识分区的渗透表现良好，表明产品正成功向科普、评测等深度内容场景延伸。
                    </p>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">泛娱乐区渗透不足：</span>在音乐、舞蹈等泛娱乐分区的热度相对较低，这意味着品牌在年轻化、趣味化内容上的触达还有待加强，存在破圈潜力。
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="h-px w-full bg-blue-100/50"></div>

            {/* AI 行动指引 */}
            <div className="flex gap-3 items-start">
              <Zap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-blue-800 mb-2">AI 行动指引</h4>
                
                {isRoborock ? (
                  <>
                    <div className="flex gap-3 items-start">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略一</span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">巩固硬核科技护城河。</span>持续在数码科技区输出高质量的硬核评测和技术解析内容，保持品牌在核心用户群中的专业形象和技术领先地位。
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略二</span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">发力萌宠等泛生活场景破圈。</span>针对萌宠、搞笑等低渗透高潜力分区，策划如“扫地机与宠物的搞笑互动”等趣味性内容，降低理解门槛，吸引更广泛的大众圈层用户。
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-3 items-start">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略一</span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">巩固核心圈层护城河。</span>持续在游戏和动画区输出高质量的联动和二创内容，保持品牌在核心用户群中的专业形象和领先地位。
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略二</span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">发力音乐舞蹈等泛娱乐场景破圈。</span>针对音乐、舞蹈等低渗透高潜力分区，策划如“品牌专属BGM挑战”等趣味性内容，降低理解门槛，吸引更广泛的大众圈层用户。
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* 详细诊断 - 维度3：内容好感度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <Smile className="w-5 h-5 text-blue-600" /> 3. 内容好感度诊断 <span className="text-slate-300 font-normal mx-2">|</span> Sentiment & Word-of-Mouth
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">68</span>
             <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">B级</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI语义识别 正负面占比</h3>
                <span className="text-xs font-bold text-slate-500">舆情净推荐值: <span className="text-blue-600 text-sm ml-1">+45.0</span></span>
              </div>
              <div className="w-full h-10 flex rounded-xl overflow-hidden gap-0.5">
                <div className="bg-blue-600 h-full flex items-center justify-center text-xs text-white font-bold" style={{ width: '47%' }}>正面 47%</div>
                <div className="bg-slate-300 h-full flex items-center justify-center text-xs text-slate-700 font-bold" style={{ width: '51%' }}>中立 51%</div>
                <div className="bg-slate-800 h-full flex items-center justify-center text-xs text-white font-bold" style={{ width: '2%' }}>负面 2%</div>
              </div>
            </div>
            
            {/* 新增：AI 提炼评论词云 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 flex-1 flex flex-col justify-center relative group">
               <div className="flex justify-between items-start mb-5">
                 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                   <Cloud className="w-4 h-4 text-slate-400" /> AI 提炼评论词云
                 </h3>
                 <button 
                   onClick={() => setIsCommentsOpen(true)}
                   className="text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                 >
                   <MessageCircle className="w-3 h-3" /> 查看 Top 100 评论
                 </button>
               </div>
               <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 py-2">
                 {currentWordCloud.map((word, i) => (
                    <span
                       key={i}
                       className={`font-black tracking-tight ${word.color} hover:scale-110 transition-transform cursor-default`}
                       style={{ 
                         fontSize: `${12 + word.weight * 2.5}px`, 
                         opacity: 0.5 + (word.weight / 18) 
                       }}
                       title={`词频权重: ${word.weight}`}
                    >
                      {word.text}
                    </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-5">
              <h3 className="text-xs font-bold text-blue-600 mb-4 flex items-center gap-1.5 uppercase tracking-wider"><Smile className="w-4 h-4"/> 核心正面卖点 Top 5</h3>
              <div className="space-y-2.5">
                {currentProsCons.pros.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm bg-white px-4 py-2.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <span className="text-slate-700 font-bold">{i+1}. {item.text}</span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">提及率 {item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-5">
              <h3 className="text-xs font-bold text-slate-500 mb-4 flex items-center gap-1.5 uppercase tracking-wider"><ThumbsDown className="w-4 h-4"/> 核心负面槽点 Top 5</h3>
              <div className="space-y-2.5">
                {currentProsCons.cons.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm bg-white px-4 py-2.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <span className="text-slate-500 font-medium">{i+1}. {item.text}</span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">提及率 {item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI 公关舆情预警 */}
        <div className="mt-6 bg-blue-50/30 border-l-4 border-blue-600 rounded-r-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-blue-700">AI 公关舆情预警</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                <span className="font-bold text-slate-900">口碑极优，资产稳固：</span>综合得分高达 92 分 (S级)，正向及中立情绪占比达 98%。词云显示“避障”、“算法”、“解放双手”已形成强爆品心智。
              </p>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                <span className="font-bold text-slate-900">场景卡位精准：</span>正面卖点中，“避障牛”(65.2%) 和“算法强”(45.8%) 提及率极高，技术标签与细分人群高度解绑。
              </p>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                <span className="font-bold text-slate-900">“体感刺客”核心槽点：</span>负面评价高度集中在具体的体验不适上，前三名分别为<span className="font-bold text-red-600">“价格贵”(22.5%)</span>、<span className="font-bold text-red-600">“基站大”(15.2%)</span>、<span className="font-bold text-red-600">“水箱小”(12.8%)</span>。这类明确痛点极易在种草平台引发跟风避雷。
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-blue-100">
              <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" /> AI 行动指引
              </h4>
              <div className="space-y-2">
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-blue-600 shrink-0">策略一</span>
                  <span className="text-slate-700"><span className="font-bold">打透“解放双手”核心场景。</span> 针对“避障”与“算法”的高转化标签，批量输出沉浸式场景种草（如：养宠家庭的扫地机生存指南），深度锁死精准人群。</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-blue-600 shrink-0">策略二</span>
                  <span className="text-slate-700"><span className="font-bold">启动“体感痛点”干货对冲。</span> 针对明确槽点发布定向科普攻略。例如：针对“基站大”发布《小户型如何优雅摆放旗舰扫地机》。</span>
                </div>
              </div>
            </div>
          </div>
          <Zap className="absolute -right-6 -bottom-6 w-32 h-32 text-blue-100/40 z-0 rotate-12" />
        </div>
      </section>

      {/* 详细诊断 - 维度4：内容讨论度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <MessageCircle className="w-5 h-5 text-blue-600" /> 4. 内容讨论度诊断 <span className="text-slate-300 font-normal mx-2">|</span> Discussion & Trend
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">88</span>
             <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">S级</span>
          </div>
        </div>

        {/* 顶层：核心指标摘要卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-500" /> 品牌日均搜索量指数
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-4xl font-black text-slate-900">4,280</span>
              <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +15.2%
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-medium">在全站家电品牌中位列 Top 5</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-blue-500" /> 稿件深度讨论量级 (深水区)
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-4xl font-black text-slate-900">12.5<span className="text-2xl ml-1 text-slate-500">万</span></span>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-medium">近30天内，弹幕与评论互动的总数</p>
          </div>

          <div className="bg-blue-600 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
             <Compass className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/30 rotate-12" />
             <div className="relative z-10">
                <div className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">最高频衍生搜索意图</div>
                <div className="text-2xl font-black mt-3 mb-1">"扫地机器人避障"</div>
                <div className="text-sm font-medium text-blue-100 mt-3 flex items-center gap-1.5">
                  <ArrowRight className="w-4 h-4" /> 搜索焦点正向【场景】偏移
                </div>
             </div>
          </div>
        </div>

        {/* 主图表区 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* 左侧：搜索与互动双轨趋势面积图 */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900">内容势能演进趋势 (近90天)</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">观察大促节点期间，互动量爆发是否成功转化为品牌主动搜索量</p>
              </div>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DISCUSSION_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSearch" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInteract" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{fontSize: 11, fill: '#64748b', fontWeight: 600}} axisLine={false} tickLine={false} dy={10} />
                  <YAxis tick={{fontSize: 11, fill: '#64748b', fontWeight: 600}} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomAreaTooltip />} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '15px' }} />
                  
                  {/* 互动指数作为底层背景势能 */}
                  <Area type="monotone" name="互动量指数 (点赞/弹幕)" dataKey="interactIndex" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorInteract)" />
                  {/* 搜索指数作为核心结果指标，用主色调 */}
                  <Area type="monotone" name="品牌搜索量指数" dataKey="searchIndex" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorSearch)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 右侧：B站各分区势能雷达图 */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col">
            <h3 className="text-lg font-black text-slate-900 mb-1">核心分区内容热度</h3>
            <p className="text-xs text-slate-500 font-medium mb-4">品牌在B站各分区的内容渗透情况</p>
            
            <div className="flex-1 min-h-[220px] relative -mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={currentPartitionData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11, fontWeight: 700 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="品牌势能" dataKey="A" stroke="#2563eb" strokeWidth={2} fill="#3b82f6" fillOpacity={0.25} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px', fontWeight: 'bold' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 底层：衍生关联热点词 (看完视频后搜了啥) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
           <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900">品牌衍生关联词 (Intent Flow)</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">用户看完视频后的真实延展意图，指导下一阶段内容选题</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {DISCUSSION_DERIVED_KEYWORDS.map((item, index) => (
                <div key={index} className="group relative flex items-center bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 pr-5 hover:border-blue-200 hover:shadow-md transition-all cursor-default">
                  {/* 热度条 */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-100 rounded-l-xl overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500 group-hover:bg-blue-600" style={{ height: `${item.hotness}%` }}></div>
                  </div>
                  
                  <div className="ml-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        item.type === '场景' ? 'bg-orange-50 text-orange-600' :
                        item.type === '品类' ? 'bg-indigo-50 text-indigo-600' :
                        item.type === '扩圈' ? 'bg-emerald-50 text-emerald-600' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">热度: {item.hotness}</span>
                    </div>
                    <div className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.word}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* AI 洞察结论框 */}
            <div className="mt-6 bg-[#F8FAFC] border-l-4 border-blue-600 rounded-r-xl p-6 flex flex-col gap-6">
              {/* AI 搜索趋势洞察 */}
              <div className="flex gap-3 items-start">
                <Activity className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-blue-800 mb-2">AI 搜索趋势洞察</h4>
                  
                  {isRoborock ? (
                    <>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">流量大盘极具爆发力：</span>近 90 天主动搜索热度高居行业 Top 3，且出现两次巨大流量波峰，品牌近期主动关注度极高。
                      </p>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">搜索意图转化潜力大：</span>意图健康得分达 64.5%，这意味着超六成的流量在搜完品牌后，进一步精准下探到了具体的“场景/需求/痛点”（如“养宠家庭”、“避障效果”），流量质量极高。
                      </p>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">痛点词拉响高危警报：</span>由于“痛点”被直接计入得分分子端，<span className="font-bold text-red-500">“石头扫地机漏水”</span>赫然出现在高频意图词中。这表明此前的负面体感已经发酵成了用户的“主动避雷搜索”，极易引发流量在最后关头严重流失。
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">流量大盘极具爆发力：</span>近 90 天主动搜索热度高居行业 Top 3，且出现两次巨大流量波峰，品牌近期主动关注度极高。
                      </p>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">搜索意图转化潜力大：</span>意图健康得分达 64.5%，这意味着超六成的流量在搜完品牌后，进一步精准下探到了具体的“场景/需求/痛点”（如“面霜推荐”、“适合肤质”），流量质量极高。
                      </p>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900">痛点词拉响高危警报：</span>由于“痛点”被直接计入得分分子端，<span className="font-bold text-red-500">“双抗水乳长痘”</span>赫然出现在高频意图词中。这表明此前的负面体感已经发酵成了用户的“主动避雷搜索”，极易引发流量在最后关头严重流失。
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="h-px w-full bg-blue-100/50"></div>

              {/* AI 行动指引 */}
              <div className="flex gap-3 items-start">
                <Zap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-blue-800 mb-2">AI 行动指引</h4>
                  
                  {isRoborock ? (
                    <>
                      <div className="flex gap-3 items-start">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略一</span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          <span className="font-bold text-slate-900">紧急拦截“负面痛点”搜索。</span>针对“石头扫地机漏水”这一明确高频词，立刻定向铺设《扫地机水箱保养指南》或《正确使用避坑法》。用官方或专业视角的干货科普抢占搜索首屏，打消观望用户的恐慌。
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略二</span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          <span className="font-bold text-slate-900">一对一承接“购买需求”搜索。</span>针对“养宠家庭”、“避障”、“大户型推荐”等高意图词，反向定制高点击率（CTR）的测评或合集笔记。做到“用户搜什么，首屏就精准喂什么”，以此修补此前仅有2.49%的阅读转化断层。
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-3 items-start">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略一</span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          <span className="font-bold text-slate-900">紧急拦截“负面痛点”搜索。</span>针对“双抗水乳长痘”这一明确高频词，立刻定向铺设《双抗水乳新手耐受指南》或《正确搭配避坑法》。用官方或专业视角的干货科普抢占搜索首屏，打消观望用户的恐慌。
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shrink-0 mt-0.5">策略二</span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          <span className="font-bold text-slate-900">一对一承接“购买需求”搜索。</span>针对“急救解渴”、“定妆”、“面霜推荐”等高意图词，反向定制高点击率（CTR）的测评或合集笔记。做到“用户搜什么，首屏就精准喂什么”，以此修补此前仅有2.49%的阅读转化断层。
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 详细诊断 - 维度5：内容效率 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <DollarSign className="w-5 h-5 text-blue-600" /> 5. 内容效率诊断 <span className="text-slate-300 font-normal mx-2">|</span> Efficiency & ROI
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">55</span>
             <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md">C级</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">播放成本</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>15.5</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingUp className="w-3.5 h-3.5" /> 优于均值 (￥25.0)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">唤起成本（蓝链）</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>85.0</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingUp className="w-3.5 h-3.5" /> 优于均值 (￥110.0)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">CPM</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>0.68</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingUp className="w-3.5 h-3.5" /> 优于均值 (￥1.20)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">大盘基线对比</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>4.20</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-200/50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingDown className="w-3.5 h-3.5" /> 略逊均值 (￥3.80)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">爆款效率</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter">2.8<span className="text-lg font-bold text-slate-400 ml-1">%</span></span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-200/50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingDown className="w-3.5 h-3.5" /> 低于头部竞品
            </div>
          </div>
        </div>
      </section>

      {/* 底部保留更多维度的示意 */}
      <div className="text-center py-12">
        <button className="text-blue-600 bg-white shadow-sm border border-slate-100 px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.1)]">
          导出完整商业分析报告 (PDF)
        </button>
      </div>

      {/* 关键词明细弹窗 */}
      {isKeywordsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" /> 高频有效意图词明细
              </h3>
              <button 
                onClick={() => setIsKeywordsOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">关键词</th>
                    <th className="px-6 py-4 text-right">月搜索指数</th>
                    <th className="px-6 py-4 text-right">市场出价 (元)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentKeywordDetailsData.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-700">{item.keyword}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-600">{item.searchIndex.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-600">¥{item.bid.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setIsKeywordsOpen(false)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 明细弹窗 */}
      {isDetailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" /> 品牌内容明细 (Top 100)
              </h3>
              <button 
                onClick={() => setIsDetailsOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 w-16 text-center">ID</th>
                    <th className="px-6 py-4 w-20">封面</th>
                    <th className="px-6 py-4">TOP {contentType}标题</th>
                    <th className="px-6 py-4 w-32">博主/达人</th>
                    <th className="px-6 py-4 w-48">互动数据</th>
                    <th className="px-6 py-4 w-24 text-center">内容属性</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentContentDetailsData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 text-center text-slate-400 font-medium">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img src={item.image} alt="cover" className="w-10 h-10 rounded-lg object-cover bg-slate-100" referrerPolicy="no-referrer" />
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-700 max-w-xs truncate" title={item.title}>
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{item.author}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <div className="flex items-center gap-1" title="点赞">
                            <Heart className="w-3 h-3" /> {item.likes.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1" title="收藏">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg> {item.bookmarks.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1" title="评论">
                            <MessageCircle className="w-3 h-3" /> {item.comments.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1" title="分享">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                              <circle cx="18" cy="5" r="3"></circle>
                              <circle cx="6" cy="12" r="3"></circle>
                              <circle cx="18" cy="19" r="3"></circle>
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg> {item.shares.toLocaleString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                          item.type === 'UGC' 
                            ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}>
                          {item.type === 'UGC' ? `非商业${contentType}` : `商业${contentType}`}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400">显示 Top 8 / 共 100 条数据</span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-white hover:shadow-sm rounded-lg transition-all disabled:opacity-50" disabled>上一页</button>
                <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-white hover:shadow-sm rounded-lg transition-all">下一页</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 评论明细弹窗 */}
      {isCommentsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 shrink-0">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-600" /> 热门评论明细 (Top 100)
              </h3>
              <button 
                onClick={() => setIsCommentsOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4 bg-slate-50/30">
              {currentCommentsData.map((comment) => (
                <div key={comment.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-500">{comment.user}</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                      <Heart className="w-3.5 h-3.5 fill-slate-100" /> {comment.likes}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {comment.content.split(comment.highlight).map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded mx-0.5">{comment.highlight}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <button className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">加载更多评论...</button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* 搜索排名明细弹窗 */}
      {isRankingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-blue-600" /> 行业 Top 30 搜索榜单对标
              </h3>
              <button 
                onClick={() => setIsRankingOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4">
              {currentSearchRankingData.map((item) => (
                <div key={item.rank} className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    item.rank <= 3 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {item.rank}
                  </div>
                  <div className="w-24 font-bold text-slate-700 shrink-0">{item.brand}</div>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-blue-600" 
                      style={{ width: `${(item.score / 100000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-20 text-right font-black text-slate-900">{item.score.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 搜索占位分析弹窗 */}
      {isOccupancyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" /> 搜索占位分析
              </h3>
              <button 
                onClick={() => setIsOccupancyOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              {/* Top Info */}
              <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-400">搜索关键词</div>
                  <div className="text-xl font-black text-slate-900">{currentSearchOccupancyData.keyword}</div>
                </div>
                <div className="space-y-1 text-center">
                  <div className="text-xs font-bold text-slate-400">当前排名</div>
                  <div className="text-xl font-black text-blue-600">{currentSearchOccupancyData.rank}</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-xs font-bold text-slate-400">占位归属</div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-2 h-2 text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    品牌成功占位
                  </div>
                </div>
              </div>

              {/* Note Card */}
              <div className="border border-slate-200 rounded-2xl p-4 flex gap-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                {/* Image Placeholder */}
                <div className="w-32 h-32 bg-slate-100 rounded-xl shrink-0 flex items-center justify-center text-slate-300 group-hover:bg-slate-200 transition-colors">
                   <div className="w-10 h-10 border-2 border-current rounded-lg border-dashed"></div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                       <h4 className="font-bold text-slate-900 line-clamp-2 leading-snug text-lg group-hover:text-blue-600 transition-colors">
                         {currentSearchOccupancyData.note.title}
                       </h4>
                       <span className="shrink-0 px-2 py-0.5 border border-blue-200 text-blue-600 text-[10px] font-bold rounded">
                         {currentSearchOccupancyData.note.tags[0]}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                      <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                      <span className="font-medium">{currentSearchOccupancyData.note.author}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-400">归属品牌: {currentSearchOccupancyData.note.brand}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-slate-400 text-xs font-bold">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4" /> {currentSearchOccupancyData.note.stats.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                      {currentSearchOccupancyData.note.stats.bookmarks.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" /> {currentSearchOccupancyData.note.stats.comments}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Strategy */}
              <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-700 mb-1">AI 优化策略：</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {currentSearchOccupancyData.aiStrategy}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
