// iRun Workbench — data layer
// All shared constants live here so components stay declarative.


const AGENT_CATEGORIES = {
  tool:       { label: '工具型', enLabel: 'Tool',       cn: '工具', hue: 188, color: '#22d3ee', soft: 'rgba(34,211,238,0.16)' },
  expert:     { label: '专家型', enLabel: 'Expert',     cn: '专家', hue:  38, color: '#fbbf24', soft: 'rgba(251,191,36,0.16)' },
  process:    { label: '流程型', enLabel: 'Process',    cn: '流程', hue: 268, color: '#a78bfa', soft: 'rgba(167,139,250,0.16)' },
  management: { label: '管理型', enLabel: 'Management', cn: '管理', hue: 158, color: '#34d399', soft: 'rgba(52,211,153,0.16)' },
};

const AGENTS = [
  { id: 'alert',   name: '告警智能体',   enName: 'Alarm Agent',     short: '告警', en: 'Alarm',    code: 'ALT', cat: 'process', notif: 2,
    role: '数字监控员', enRole: 'Digital Monitor',
    intro: '7×24 实时跟踪告警/离线/算法预警，智能去噪研判并输出处置建议。',
    enIntro: '24/7 real-time tracking of alarms, offline events and algorithmic warnings; auto-denoises, reviews, and recommends actions.',
    skills: ['事件去噪', '智能研判', '处置建议', '事件升级'],
    enSkills: ['Denoise', 'Auto-Review', 'Action Hints', 'Escalation'],
    metrics: { todayCalls: 612, tokens: '88.9K', success: 96.4 } },
  { id: 'order',   name: '工单智能体',   enName: 'Ticket Agent',    short: '工单', en: 'Ticket',   code: 'ORD', cat: 'process', notif: 0,
    role: '工单全流程引擎', enRole: 'Ticket Workflow Engine',
    intro: '覆盖工单全生命周期：自动创建、智能派单、智能辅助填报、自动验收。',
    enIntro: 'Covers the full ticket lifecycle: auto-create, smart dispatch, assisted filing, and auto-acceptance.',
    skills: ['自动创建', '智能派单', '辅助填报', '自动验收'],
    enSkills: ['Auto-Create', 'Smart Dispatch', 'Assisted Filing', 'Auto-Accept'],
    metrics: { todayCalls: 244, tokens: '41.2K', success: 98.1 } },
  { id: 'sched',   name: '排程智能体',   enName: 'Schedule Agent',  short: '排程', en: 'Schedule', code: 'SCH', cat: 'process', notif: 0,
    role: '资源调度指挥官', enRole: 'Resource Dispatch Commander',
    intro: '基于工单优先级、人员技能、天气路况动态生成最优人力/物资/行程方案。',
    enIntro: 'Dynamically generates optimal staffing / material / routing plans based on ticket priority, crew skills, weather and traffic.',
    skills: ['人力调配', '物资调度', '行程规划', '路径最优'],
    enSkills: ['Staffing', 'Material Dispatch', 'Trip Planning', 'Route Optim.'],
    metrics: { todayCalls: 173, tokens: '28.5K', success: 97.3 } },
  { id: 'warn',    name: '预警智能体',   enName: 'Predict Agent',   short: '预警', en: 'Predict',  code: 'WRN', cat: 'expert', notif: 1,
    role: '电站性能哨兵', enRole: 'Plant Performance Sentinel',
    intro: '识别尚未达到故障阈值但已出现趋势性劣化的运行状态，输出预警信号与初步归因。',
    enIntro: 'Detects trending degradation before fault thresholds are hit; emits early warnings with preliminary root-cause hints.',
    skills: ['低效预警', '趋势识别', '初步归因', '损失量化'],
    enSkills: ['Low-Yield Alert', 'Trend Detect', 'Cause Hint', 'Loss Quant.'],
    metrics: { todayCalls: 318, tokens: '54.1K', success: 97.6 } },
  { id: 'insp',    name: '巡检智能体',   enName: 'Inspect Agent',   short: '巡检', en: 'Inspect',  code: 'INS', cat: 'expert', notif: 0,
    role: '无人机巡检专家', enRole: 'UAV Inspection Specialist',
    intro: '自动分析无人机/摄像头/人工巡检图像，识别二极管故障、异物遮挡、热斑等缺陷。',
    enIntro: 'Auto-analyzes UAV / camera / manual inspection images to detect diode faults, obstructions, hot-spots and other defects.',
    skills: ['图像识别', '缺陷分类', '智能验收', '报告生成'],
    enSkills: ['Vision', 'Defect Class.', 'Auto-Accept', 'Reporting'],
    metrics: { todayCalls: 64, tokens: '94.2K', success: 96.9 } },
  { id: 'diag',    name: '诊断智能体',   enName: 'Diagnose Agent',  short: '诊断', en: 'Diagnose', code: 'DGN', cat: 'expert', notif: 0,
    role: '电站技术专家', enRole: 'Plant Technical Expert',
    intro: '基于运行数据与故障码图谱进行深度诊断，输出结论（如热斑/弃光/遮挡）及处理建议。',
    enIntro: 'Runs deep diagnostics over operating data and fault-code graphs; outputs conclusions (hot-spot / curtailment / shading) with action advice.',
    skills: ['故障诊断', '损失电量量化', '专家经验沉淀', '处置建议'],
    enSkills: ['Diagnostics', 'Loss kWh', 'Expert KB', 'Action Hints'],
    metrics: { todayCalls: 207, tokens: '76.3K', success: 95.8 } },
  { id: 'safe',    name: '安全智能体',   enName: 'Safety Agent',    short: '安全', en: 'Safety',   code: 'SAF', cat: 'expert', notif: 1,
    role: '作业与运行安全风险官', enRole: 'Safety & Risk Officer',
    intro: '融合环境与设备多源数据识别火灾、登高、恶劣天气等安全风险，作业前主动推送提示。',
    enIntro: 'Fuses environmental and equipment data to flag fire, height-work and severe-weather risks; proactively pushes pre-work advisories.',
    skills: ['火情识别', '作业风险研判', '气象联动', '应急升级'],
    enSkills: ['Fire Detect', 'Risk Review', 'Weather Link', 'Escalation'],
    metrics: { todayCalls: 86, tokens: '12.0K', success: 99.7 } },
  { id: 'pv',      name: '光伏助手智能体', enName: 'PV Assist Agent', short: '光伏', en: 'PV Assist', code: 'PVA', cat: 'tool', notif: 0,
    role: '光伏运维知识引擎', enRole: 'PV O&M Knowledge Engine',
    intro: '融合故障案例库、设备手册、运维规程、行业标准，针对运维全流程提供专业解答。',
    enIntro: 'Blends fault case libraries, equipment manuals, SOPs and industry standards to answer questions across the full O&M lifecycle.',
    skills: ['知识检索', '案例匹配', '规程问答', '隐性知识沉淀'],
    enSkills: ['KB Search', 'Case Match', 'SOP Q&A', 'Tacit Capture'],
    metrics: { todayCalls: 287, tokens: '39.6K', success: 99.0 } },
  { id: 'query',   name: '问数智能体',   enName: 'Data Q&A Agent',  short: '问数', en: 'Data Q&A', code: 'QRY', cat: 'tool', notif: 0,
    role: '自然语言数据助手', enRole: 'NL Data Assistant',
    intro: '自然语言即问即答式数据查询与可视化，由"人寻数"转向"数寻人"。',
    enIntro: 'Natural-language ask-and-answer data queries with visualization — shifts the workflow from "humans seek data" to "data finds humans".',
    skills: ['NL2SQL', '页面感知', '可视化生成', '指标解释'],
    enSkills: ['NL2SQL', 'Page Aware', 'Auto-Charts', 'Metric Explain'],
    metrics: { todayCalls: 401, tokens: '32.7K', success: 98.9 } },
  { id: 'ops',     name: '运营智能体',   enName: 'Operate Agent',   short: '运营', en: 'Operate',  code: 'iRun', cat: 'management', notif: 0,
    role: '电站经营指挥官', enRole: 'Plant Operations Commander',
    intro: '聚焦电站长期运行效率与经营指标，对关键KPI持续监测预警，为管理决策提供量化依据。',
    enIntro: 'Focuses on long-term plant efficiency and business KPIs; continuously monitors critical metrics and quantifies inputs for management decisions.',
    skills: ['KPI 监测', '资产健康度', '收益洞察', '预防性维护建议'],
    enSkills: ['KPI Watch', 'Asset Health', 'Yield Insight', 'Preventive Maint.'],
    metrics: { todayCalls: 142, tokens: '23.4K', success: 99.2 } },
];

const AGENT_BY_ID = Object.fromEntries(AGENTS.map(a => [a.id, a]));

// Tenants
const TENANTS = [
  { id: 'ilp', name: 'International Landing Plants', region: 'SE-Asia', enRegion: 'SE-Asia' },
  { id: 'fux', name: '河源·福曦能源',                 region: '广东·河源', enRegion: 'Guangdong · Heyuan' },
  { id: 'rj',  name: '润建能源数字化研究院',           region: '广西·南宁', enRegion: 'Guangxi · Nanning' },
];

// Plants — positioned in the abstract map (vw% / vh% of map area)
// mapX / mapY → % position on map2 city background (per-tenant; tenants don't share pins)
const PLANTS = [
  // ── Tenant: ILP (International Landing Plants) · 7 plants ───────────────
  { id: '1879736396404850688', name: '', enName: '',    short: 'Banten-A',  tenant: 'ilp', region: 'Indonesia·万丹',  enRegion: 'Indonesia · Banten',   city: '万丹',     enCity: 'Banten',
    capacity: 50.0, power: 0, gen: 218.4, alerts: 3, risk: 'mid',  status: '托管中',   enStatus: 'Managed',
    x: 78, y: 68, mapX: '86%', mapY: '56%',
    agents: ['ops','warn','alert','diag','order','sched','insp','query'],
    defaultScenarioIdx: 1,
    robotField: [
      // ── 红线边界内·漂浮光伏阵列均匀铺开·场景B 无人机巡检布局 ──
      { agent:'order', x:47, y:40 },  // 工单 — 上排左·建单
      { agent:'ops',   x:67, y:38 },  // 运营 — 上排右·运营总览
      { agent:'query', x:31, y:50 },  // 问数 — 中排最左·调取历史巡检数据
      { agent:'insp',  x:45, y:50 },  // 巡检 — 中排·阵列核心巡检主角（B 主角）
      { agent:'sched', x:65, y:50 },  // 排程 — 中排右·资源排程
      { agent:'safe',  x:81, y:50 },  // 安全 — 中排最右·水上作业安全
      { agent:'pv',    x:55, y:61 },  // 光伏助手 — 下排中央·现场支持
      { agent:'drone', x:58, y:34, anchorOnly: true },  // 阵列上方 UAV 锚点（勿与 insp 重叠）；场域大图由 DroneFlight 独立展示
    ],
  },

  { id: '1861683646672760832', name: '', enName: '', short: 'Cebu-N',   tenant: 'ilp', region: 'Philippines·宿务', enRegion: 'Philippines · Cebu',   city: '宿务',     enCity: 'Cebu',
    capacity: 42.0, power:0, gen: 184.5, alerts: 5, risk: 'mid', status: 'Untended', enStatus: 'Untended',
    x: 84, y: 54, mapX: '33%', mapY: '46%', agents: ['ops','warn','alert','diag','order','sched'] },

  { id: '1881233694553112576', name: '', enName: '',    short: 'Selangor',  tenant: 'ilp', region: 'Malaysia·吉隆坡', enRegion: 'Malaysia · Kuala Lumpur', city: '吉隆坡', enCity: 'Kuala Lumpur',
    capacity: 36.5, power: 0, gen: 162.4, alertsPLANTS: 1, risk: 'low',  status: '托管中',   enStatus: 'Managed',
    x: 64, y: 74, mapX: '42%', mapY: '68%',
    agents: ['ops','warn','safe','alert','diag','order','sched','pv','insp','query'],
    // 演示站：固定场景 A（告警驱动 · 自主闭环）
    defaultScenarioIdx: 0,
    // Multi-robot field — same logical layout as Hanoi-N (PV array + ops on top, field below)
    robotField: [
      { agent:'alert', x:25, y:50 },
      { agent:'warn',  x:24, y:40 },
      { agent:'diag',  x:35, y:38 },
      { agent:'insp',  x:48, y:35 },
      { agent:'sched', x:57, y:32 },
      { agent:'drone', x:64, y:29, anchorOnly: true },
      { agent:'ops',   x:69, y:37 },
      { agent:'query', x:65, y:41 },
      { agent:'order', x:56, y:42 },
      { agent:'pv',    x:46, y:45 },
      { agent:'safe',  x:33, y:47 },
    ],
  },

  { id: '1879736315115044864', name: '', enName: '', short: 'Manila-E',  tenant: 'ilp', region: 'Philippines·马尼拉', enRegion: 'Philippines · Manila', city: '马尼拉', enCity: 'Manila',
    capacity: 38.0, power: 0, gen: 158.0, alerts: 1, risk: 'low',  status: '托管中',   enStatus: 'Managed',
    x: 70, y: 78, mapX: '11%', mapY: '57%', agents: ['ops','warn','alert','diag','order','sched','query'] },

  { id: '1879736307422691328', name: '', enName: '',  short: 'Penang-W',  tenant: 'ilp', region: 'Malaysia·槟城',  enRegion: 'Malaysia · Penang',    city: '槟城',     enCity: 'Penang',
    capacity: 32.0, power: 0, gen: 138.0, alerts: 3, risk: 'mid',  status: '托管中',   enStatus: 'Managed',
    x: 55, y: 32, mapX: '33%', mapY: '74%', agents: ['ops','warn','alert','diag','order','sched','query'] },
];

// Compute aggregate KPIs for a subset of plants (used by TopBar per-tenant)
function aggregateOf(plants){
  return {
    plants: plants.length,
    capacity: plants.reduce((s,p)=>s+p.capacity,0),
    power:    plants.reduce((s,p)=>s+p.power,0),
    gen:      plants.reduce((s,p)=>s+p.gen,0),
    alerts:   plants.reduce((s,p)=>s+p.alerts,0),
    risk:     plants.filter(p=>p.risk==='high').length + Math.min(1, plants.filter(p=>p.risk==='mid').length>=2?1:0),
  };
}

// Default top-bar aggregate (kept for back-compat — full set across all tenants)
const AGGREGATE = aggregateOf(PLANTS);

const SCENARIO_A = {
  id: 'A', title: '场景 A · 告警驱动 · 自主闭环', enTitle: 'Scenario A · Alarm-Driven · Self-Closure',
  steps: [
    { t: 0,    date: '2026-05-30 09:12:00', from: 'plant', to: 'alert',  type: 'event',   text: '组串 #C03-12 电流异常 / 低效预警 ×3',          en: 'String #C03-12 current anomaly / low-yield warning ×3',     tag: '原始事件', entag: 'Raw Event' },
    { t: 1500, date: '2026-05-30 09:12:45', from: 'alert', to: 'alert',  type: 'think',   text: '聚类去噪：3 条事件归为同一组串问题',           en: 'Denoise: 3 events merged into one string issue',             tag: '事件研判', entag: 'Review' },
    { t: 3000, date: '2026-05-30 09:13:30', from: 'alert', to: 'diag',   type: 'handoff', text: '移交诊断 → 请确认根因',                          en: 'Handoff to Diagnose → confirm root cause',                   tag: '协同',     entag: 'Handoff' },
    { t: 4200, date: '2026-05-30 09:15:20', from: 'diag',  to: 'diag',   type: 'think',   text: '比对故障码图谱 → 疑似 热斑 + 局部遮挡',         en: 'Match fault-code graph → likely hot-spot + partial shading', tag: '深度诊断', entag: 'Deep Dx' },
    { t: 5800, date: '2026-05-30 09:17:10', from: 'diag',  to: 'order',  type: 'handoff', text: '诊断结论：热斑 / 损失 ≈ 142 kWh·d',              en: 'Diagnosis: hot-spot / loss ≈ 142 kWh·d',                     tag: '协同',     entag: 'Handoff' },
    { t: 7000, date: '2026-05-30 09:18:40', from: 'order', to: 'order',  type: 'action',  text: '创建工单 WO-26052-019 · 优先级 P2',              en: 'Create ticket WO-26052-019 · priority P2',                   tag: '工单',     entag: 'Ticket' },
    { t: 8200, date: '2026-05-30 09:20:05', from: 'order', to: 'sched',  type: 'handoff', text: '请求资源排程 · 技能：组串清理',                 en: 'Request scheduling · skill: string cleaning',                tag: '协同',     entag: 'Handoff' },
    { t: 9400, date: '2026-05-30 09:21:50', from: 'sched', to: 'sched',  type: 'think',   text: '匹配运维员 张磊（距站 18min）+ 备件 J-204',      en: 'Match technician Zhang Lei (18min away) + spare J-204',      tag: '排程',     entag: 'Schedule' },
    { t:10800, date: '2026-05-30 09:23:30', from: 'sched', to: 'safe',   type: 'handoff', text: '行程已生成 → 安全前置校核',                       en: 'Route ready → safety pre-check',                             tag: '协同',     entag: 'Handoff' },
    { t:12000, date: '2026-05-30 14:06:00', from: 'safe',  to: 'field',  type: 'action',  text: '风险提示：午后高温 35°C · 提供防暑作业卡',       en: 'Risk note: afternoon 35°C heat · heat-stress card issued',   tag: '安全',     entag: 'Safety' },
    { t:13400, date: '2026-05-30 14:18:20', from: 'field', to: 'pv',     type: 'query',   text: '现场咨询：热斑组件标准更换流程？',                en: 'Field query: standard procedure to replace hot-spot module?', tag: '@光伏',   entag: '@PV' },
    { t:14600, date: '2026-05-30 14:22:40', from: 'pv',    to: 'field',  type: 'answer',  text: '返回 SOP-PV-037 · 3 步标准化作业指引',           en: 'Reply: SOP-PV-037 · 3-step standardized procedure',          tag: '知识',     entag: 'Knowledge' },
    { t:16000, date: '2026-05-30 14:35:10', from: 'field', to: 'query',  type: 'query',   text: '@问数 当前组串 30 天损失功率曲线？',             en: '@Data Q&A 30-day power-loss curve of this string?',          tag: '@问数',   entag: '@Data Q&A' },
    { t:17200, date: '2026-05-30 14:38:55', from: 'query', to: 'field',  type: 'answer',  text: '返回曲线 + 同比 -8.2% · 已嵌入工单',             en: 'Curve returned + YoY -8.2% · embedded into ticket',          tag: '数据',     entag: 'Data' },
    { t:18800, date: '2026-05-30 16:22:00', from: 'order', to: 'order',  type: 'action',  text: '辅助填报：自动带入诊断/排程/巡检证据链',         en: 'Assisted filing: auto-attach diagnose/sched/inspect evidence', tag: '工单',   entag: 'Ticket' },
    { t:20200, date: '2026-05-30 16:48:30', from: 'order', to: 'order',  type: 'action',  text: '自动验收：影像与数据指标合格 ✓',                  en: 'Auto-accept: imagery & metrics pass ✓',                      tag: '验收',     entag: 'Accept' },
    { t:21400, date: '2026-05-30 17:05:00', from: 'order', to: 'ops',    type: 'handoff', text: '工单归档 → 运营 KPI 已回升',                     en: 'Ticket archived → ops KPI recovered',                        tag: '归档',     entag: 'Archive' },
  ],
};

// Scenario B: Penang 季度巡检 · 无人机 · 消缺闭环（t 均匀间隔 ~1.4s/步，便于场域虚线动画）
const SCENARIO_B = {
  id: 'B', title: '场景 B · 无人机巡检 · 图像驱动', enTitle: 'Scenario B · UAV Inspection · Vision-Driven',
  steps: [
    { t: 0, date: '2026-05-28 02:00:00', from: 'ops',   to: 'ops',   type: 'action',  text: '合同周期巡检到期提醒 + 设备健康度评估 — 距上次巡检满 3 个月，健康度 87.0 分（良好），建议如期巡检。', en: 'Quarterly inspection due + health assessment — 3 months since last round, health 87.0 (good), proceed as scheduled.', tag: '运营', entag: 'Ops' },
    { t: 1400, date: '2026-05-28 02:01:06', from: 'ops',   to: 'query', type: 'handoff', text: '调取历史巡检档案 — 上季度 11 处缺陷已闭环，遗留 2 处 PID 观察项需本次复核。', en: 'Pull inspection history — 11 defects closed last quarter, 2 legacy PID items to recheck.', tag: '问数', entag: 'Data' },
    { t: 2800, date: '2026-05-28 02:05:00', from: 'query', to: 'order', type: 'handoff', text: '生成季度巡检计划（草案） — 全站热成像 + 遗留项复核，待天气/风浪窗口确认。', en: 'Draft quarterly inspection plan — full-site thermography + legacy recheck, pending weather/water window.', tag: '工单', entag: 'Ticket' },
    { t: 4200, date: '2026-05-28 02:08:00', from: 'order', to: 'sched', type: 'handoff', text: '天气与水域窗口查询 — 05-30 晴、辐照达标、低风低浪，为最佳作业窗口。', en: 'Weather & water-window query — 05-30 sunny, irradiance OK, low wind/waves, best window.', tag: '排程', entag: 'Schedule' },
    { t: 5600, date: '2026-05-29 08:00:00', from: 'order', to: 'drone', type: 'handoff', text: '创建无人机巡检任务 INSP-2026-0530-PNG-F01 — 锁定时间、范围、飞手，推送至无人机调度。', en: 'Create drone task INSP-2026-0530-PNG-F01 — time, scope, pilot locked, pushed to UAV dispatch.', tag: '工单', entag: 'Ticket' },
    { t: 7000, date: '2026-05-30 10:25:00', from: 'drone', to: 'drone', type: 'action',  text: '接收任务，完成起飞前自检 — RTK 固定、电量满格、航线加载完成。', en: 'Task received, pre-flight check OK — RTK fixed, full battery, route loaded.', tag: '终端', entag: 'Edge' },
    { t: 8400, date: '2026-05-30 10:30:00', from: 'drone', to: 'drone', type: 'event',   text: '巡检工作中 — 自动航线飞行，红外/可见光双光实时回传。', en: 'Inspecting — auto route, IR + visible live feed.', tag: '采集', entag: 'Capture' },
    { t: 9800, date: '2026-05-30 13:50:00', from: 'drone', to: 'insp',  type: 'handoff', text: '巡检完成，图像回传 — 飞行 3h20min，回传 1,940 张，进入 AI 分析。', en: 'Inspection done, images uploaded — 3h20m flight, 1,940 images, entering AI analysis.', tag: '协同', entag: 'Handoff' },
    { t: 11200, date: '2026-05-30 13:55:00', from: 'insp',  to: 'insp',  type: 'think',   text: '图像回传分析中 — 红外测温 + AI 缺陷识别 + 资产定位匹配。', en: 'Analyzing images — IR thermography + AI defect ID + asset geolocation.', tag: '识别', entag: 'Detect' },
    { t: 12600, date: '2026-05-30 14:25:00', from: 'insp',  to: 'insp',  type: 'think',   text: '给出缺陷清单：共 18 处（Class3 5 / Class2 7 / Class1 6），缺陷率 0.37%。', en: 'Defect list: 18 total (Class3×5 / Class2×7 / Class1×6), defect rate 0.37%.', tag: '识别', entag: 'Detect' },
    { t: 14000, date: '2026-05-30 14:55:00', from: 'insp',  to: 'order', type: 'handoff', text: '巡检报告生成完成 — RPT-A-PNG-2026-0530-001，已归档并推送运营/工单。', en: 'Inspection report RPT-A-PNG-2026-0530-001 generated, archived, sent to Ops/Ticket.', tag: '巡检', entag: 'Inspect' },
    { t: 15400, date: '2026-05-30 15:00:00', from: 'order', to: 'sched', type: 'handoff', text: '将本电站 18 处缺陷归集，创建 1 张电站级消缺工单 — 并行调用排程、安全智能体。', en: '18 defects rolled into 1 site fix ticket — calling Schedule & Safety in parallel.', tag: '协同', entag: 'Handoff' },
    { t: 16800, date: '2026-05-30 15:06:00', from: 'sched', to: 'sched', type: 'action',  text: '人员/技能/天气匹配完成 — 按缺陷紧急度安排上站，含工作艇路径规划。', en: 'Staff/skill/weather matched — site visits by urgency, incl. work-boat routing.', tag: '排程', entag: 'Schedule' },
    { t: 18200, date: '2026-05-30 15:14:00', from: 'sched', to: 'safe',  type: 'handoff', text: '逐任务项作业风险与工具校验 — 整单风险：高（直流高压 + 水上作业/溺水）。', en: 'Per-task risk & tool check — ticket risk: high (DC HV + water work/drowning).', tag: '安全', entag: 'Safety' },
    { t: 19600, date: '2026-05-30 15:25:00', from: 'safe',  to: 'order', type: 'handoff', text: '工单 WO-2026-0530-PNG-001 创建完成 — 5 个任务项，关联巡检报告，已推送张工、李工、船操员、清洗班组，并同步排程看板与巡检智能体。', en: 'Ticket WO-2026-0530-PNG-001 created — 5 tasks, report linked, pushed to crews & Inspect agent.', tag: '工单', entag: 'Ticket' },
    { t: 21000, date: '2026-05-31 09:20:00', from: 'order', to: 'pv',    type: 'handoff', text: '张工@光伏：热斑组件更换、旁路二极管判定、接头腐蚀/组串离线、PID 治理。', en: 'Zhang @PV-Assist: hot-spot swap, bypass diode check, connector corrosion/offline string, PID treatment.', tag: '知识', entag: 'Knowledge' },
    { t: 22400, date: '2026-05-31 15:40:00', from: 'pv',    to: 'order', type: 'handoff', text: '回单提交 — Class3 全部消缺，接头防腐处理，PID 进入修复期。', en: 'Field report filed — all Class3 cleared, connector anti-corrosion, PID in recovery.', tag: '工单', entag: 'Ticket' },
    { t: 23800, date: '2026-06-01 11:00:00', from: 'order', to: 'insp',  type: 'handoff', text: '同步工单作业结果至巡检智能体 — 缺陷台账状态更新，闭环 / 挂起标记更新。', en: 'Sync ticket results to Inspect agent — defect ledger & closure flags updated.', tag: '协同', entag: 'Handoff' },
    { t: 25200, date: '2026-06-02 01:00:00', from: 'insp',  to: 'ops',   type: 'handoff', text: '消缺后电站 KPI / 健康度复盘 — PR 回升、健康度提升至 90.2 分。', en: 'Post-fix KPI / health review — PR recovered, health up to 90.2.', tag: '运营', entag: 'Ops' },
    { t: 26600, date: '2026-06-02 02:00:00', from: 'ops',   to: 'order', type: 'handoff', text: '更新下一次巡检计划 — 维持季度节奏（下次 2026-08-30 前），按缺陷趋势动态加强。', en: 'Update next inspection plan — quarterly cadence (by 2026-08-30), strengthen per defect trend.', tag: '归档', entag: 'Archive' },
  ],
};

const SCENARIOS = [SCENARIO_A, SCENARIO_B];

// Global event templates — 左侧「实时事件流」唯一数据源（按数组顺序；date 为参考时间轴，展示时按当前日期整体平移使末条对齐今天）
const GLOBAL_EVENT_TEMPLATES = [
  // ── 05-31 ──
  { date: '2026-05-31 02:00:00', agent: 'ops', text: '⚠ KPI 考核预警 · 风险严重', en: '⚠ KPI assessment alert · risk: severe', sev: 'high' },
  { date: '2026-05-31 02:00:00', agent: 'ops', text: '季度巡检到期 · 健康度 87.0 分', en: 'Quarterly inspection due · health 87.0', sev: 'low' },
  { date: '2026-05-31 02:01:06', agent: 'query', text: '调取历史巡检 · 遗留 2 处 PID 待复核', en: 'Inspection history pulled · 2 legacy PID to recheck', sev: 'low' },
  { date: '2026-05-31 02:05:00', agent: 'order', text: '生成季度巡检计划（草案）', en: 'Quarterly inspection plan drafted', sev: 'low' },
  { date: '2026-05-31 02:08:00', agent: 'sched', text: '天气/水域窗口 · 05-30 晴低浪最佳', en: 'Weather/water window · May 30 sunny & calm = best', sev: 'low' },
  { date: '2026-05-31 03:00:04', agent: 'warn', text: '5 台逆变器组串低效', en: '5 inverters with string under-performance', sev: 'mid' },
  { date: '2026-05-31 03:30:09', agent: 'query', text: '拉取告警台账 · 6 未处理 + 1 处理中', en: 'Alert ledger pulled · 6 open + 1 in-progress', sev: 'low' },
  { date: '2026-05-31 03:31:00', agent: 'diag', text: '低效根因完成 · 热斑/遮挡为主', en: 'Root-cause done · hot-spot / shading dominant', sev: 'mid' },
  { date: '2026-05-31 03:31:30', agent: 'diag', text: '5 台设备告警原因分析完成', en: 'Causes analyzed for 5 device alerts', sev: 'mid' },
  { date: '2026-05-31 03:33:00', agent: 'alert', text: '72h 研判（7 台）· 1 观察 6 消缺', en: '72h review (7 units) · 1 to watch / 6 to fix', sev: 'mid' },
  { date: '2026-05-31 03:33:40', agent: 'alert', text: '研判总结 · 同站 1 工单 · 合并 WO-2026-0520-008', en: 'Review summary · 1 site ticket · merged WO-2026-0520-008', sev: 'mid' },
  { date: '2026-05-31 08:00:00', agent: 'order', text: '发起建单 · 并行调用排程/安全', en: 'Ticket init · calling Schedule & Safety agents', sev: 'low' },
  { date: '2026-05-31 08:00:00', agent: 'order', text: '创建无人机任务 INSP-2026-0530-PNG-F01', en: 'Drone task INSP-2026-0530-PNG-F01 created', sev: 'low' },
  { date: '2026-05-31 08:00:08', agent: 'sched', text: '人员/技能/天气匹配 · 含路径规划', en: 'Staff/skill/weather matched · route planned', sev: 'low' },
  { date: '2026-05-31 08:05:22', agent: 'safe', text: '作业风险校验 · 整单中高（登高/直流高压）', en: 'Risk check · ticket med-high (climbing / DC HV)', sev: 'mid' },
  { date: '2026-05-31 08:05:40', agent: 'order', text: '工单 WO-2026-0528-001 创建 · 6 任务项', en: 'Ticket WO-2026-0528-001 created · 6 tasks', sev: 'low' },
  { date: '2026-05-31 09:50:00', agent: 'pv', text: '张工 @光伏 "绝缘测试 + 接头/组件判别"', en: 'Zhang @PV-Assist "insulation test + connector vs module"', sev: 'low' },
  { date: '2026-05-31 13:35:00', agent: 'pv', text: '李工 @光伏 "散热确认 + 登高遮挡排查"', en: 'Li @PV-Assist "cooling check + climbing/shading survey"', sev: 'low' },
  { date: '2026-05-31 14:35:00', agent: 'pv', text: '王工 @光伏 "离线排查 + 换卡恢复"', en: 'Wang @PV-Assist "offline triage + SIM swap recovery"', sev: 'low' },
  { date: '2026-05-31 15:10:00', agent: 'order', text: '任务项① COM1-2 回单 · 离线已恢复', en: 'Task① COM1-2 reported · back online', sev: 'low' },
  { date: '2026-05-31 15:12:00', agent: 'order', text: '任务项②③④ COM1-3/4/5 回单 · 接入异常消除', en: 'Task②③④ COM1-3/4/5 · access fault cleared', sev: 'low' },
  { date: '2026-05-31 15:15:00', agent: 'order', text: '任务项⑤⑥ COM1-6/7 回单 · 散热/遮挡消除', en: 'Task⑤⑥ COM1-6/7 · cooling/shading cleared', sev: 'low' },
  { date: '2026-05-31 15:30:00', agent: 'order', text: '整单验收归档 · 回补 ≈ 9000~12000 kWh', en: 'Ticket accepted & archived · ≈ 9,000–12,000 kWh recovered', sev: 'low' },
  { date: '2026-05-31 18:00:00', agent: 'ops', text: '观察 · 告警/低效清零 · 发电 ↑19%', en: 'Watch · alerts/under-perf cleared · yield ↑19%', sev: 'low' },
  { date: '2026-05-31 19:00:00', agent: 'ops', text: '观察 · 风险降级 · 偏差回补至 -16000 kWh', en: 'Watch · risk downgraded · gap → -16,000 kWh', sev: 'low' },
  // ── 06-01 ──
  { date: '2026-06-01 10:25:00', agent: 'insp', text: 'UAV 接收任务 · 起飞前自检通过', en: 'UAV task received · pre-flight check passed', sev: 'low' },
  { date: '2026-06-01 10:30:00', agent: 'insp', text: 'UAV 巡检中 · 双光实时回传', en: 'UAV inspecting · dual-cam live feed', sev: 'low' },
  { date: '2026-06-01 13:50:00', agent: 'insp', text: 'UAV 巡检完成 · 回传 1,940 张', en: 'UAV finished · 1,940 images uploaded', sev: 'low' },
  { date: '2026-06-01 13:55:00', agent: 'insp', text: '图像分析中 · 红外测温 + AI 识别', en: 'Analyzing images · IR thermography + AI recognition', sev: 'low' },
  { date: '2026-06-01 14:25:00', agent: 'insp', text: '缺陷清单 18 处 · 缺陷率 0.37%', en: '18 defects found · defect rate 0.37%', sev: 'mid' },
  { date: '2026-06-01 14:55:00', agent: 'insp', text: '巡检报告生成 RPT-A-PNG-2026-0530-001', en: 'Report RPT-A-PNG-2026-0530-001 generated', sev: 'low' },
  { date: '2026-06-01 15:00:00', agent: 'order', text: '18 缺陷归集 · 创建电站级消缺工单', en: '18 defects grouped · 1 site fix ticket created', sev: 'mid' },
  { date: '2026-06-01 15:06:00', agent: 'sched', text: '人员/天气匹配 · 含工作艇路径', en: 'Staff/weather matched · boat route included', sev: 'low' },
  { date: '2026-06-01 15:14:00', agent: 'safe', text: '风险校验 · 整单高（直流高压 + 水上溺水）', en: 'Risk check · ticket high (DC HV + water/drowning)', sev: 'high' },
  { date: '2026-06-01 15:25:00', agent: 'order', text: '工单 WO-2026-0530-PNG-001 创建 · 5 任务项', en: 'Ticket WO-2026-0530-PNG-001 created · 5 tasks', sev: 'low' },
  { date: '2026-06-01 16:25:00', agent: 'pv', text: '张工 @光伏 "热斑更换/二极管/PID 治理"', en: 'Zhang @PV-Assist "hot-spot swap / bypass diode / PID"', sev: 'low' },
  { date: '2026-06-01 17:00:00', agent: 'order', text: '回单 · Class3 全消缺 · PID 进入修复期', en: 'Reported · all Class3 cleared · PID in recovery', sev: 'low' },
  { date: '2026-06-01 17:25:00', agent: 'order', text: '同步作业结果 → 巡检智能体 · 台账更新', en: 'Results synced → Inspect Agent · defect ledger updated', sev: 'low' },
  // ── 06-02 ──
  { date: '2026-06-02 01:00:00', agent: 'ops', text: '消缺后 KPI 复盘 · 健康度 90.2 分', en: 'Post-fix KPI review · health 90.2', sev: 'low' },
  { date: '2026-06-02 02:00:00', agent: 'order', text: '更新下次巡检计划 · 下次 ≤ 2026-08-30', en: 'Next inspection plan · due ≤ 2026-08-30', sev: 'low' },
 ];

// Johor 消缺子集（与 GLOBAL_EVENT_TEMPLATES 同源；展示 date/_time 以全量为准）
const GLOBAL_EVENT_TEMPLATES_DEFECTS = [
  { date: '2026-05-31 02:00:00', agent: 'ops',   text: '⚠ KPI 考核预警 · 风险严重', en: '⚠ KPI assessment alert · risk: severe', sev: 'high' },
  { date: '2026-05-31 03:00:04', agent: 'warn',  text: '5 台逆变器组串低效', en: '5 inverters with string under-performance', sev: 'mid' },
  { date: '2026-05-31 03:30:09', agent: 'query', text: '拉取告警台账 · 6 未处理 + 1 处理中', en: 'Alert ledger pulled · 6 open + 1 in-progress', sev: 'low' },
  { date: '2026-05-31 03:31:00', agent: 'diag',  text: '低效根因完成 · 热斑/遮挡为主', en: 'Root-cause done · hot-spot / shading dominant', sev: 'mid' },
  { date: '2026-05-31 03:31:30', agent: 'diag',  text: '5 台设备告警原因分析完成', en: 'Causes analyzed for 5 device alerts', sev: 'mid' },
  { date: '2026-05-31 03:33:00', agent: 'alert', text: '72h 研判（7 台）· 1 观察 6 消缺', en: '72h review (7 units) · 1 to watch / 6 to fix', sev: 'mid' },
  { date: '2026-05-31 03:33:40', agent: 'alert', text: '研判总结 · 同站 1 工单 · 合并 WO-2026-0520-008', en: 'Review summary · 1 site ticket · merged WO-2026-0520-008', sev: 'mid' },
  { date: '2026-05-31 08:00:00', agent: 'order', text: '发起建单 · 并行调用排程/安全', en: 'Ticket init · calling Schedule & Safety agents', sev: 'low' },
  { date: '2026-05-31 08:00:08', agent: 'sched', text: '人员/技能/天气匹配 · 含路径规划', en: 'Staff/skill/weather matched · route planned', sev: 'low' },
  { date: '2026-05-31 08:05:22', agent: 'safe',  text: '作业风险校验 · 整单中高（登高/直流高压）', en: 'Risk check · ticket med-high (climbing / DC HV)', sev: 'mid' },
  { date: '2026-05-31 08:05:40', agent: 'order', text: '工单 WO-2026-0528-001 创建 · 6 任务项', en: 'Ticket WO-2026-0528-001 created · 6 tasks', sev: 'low' },
  { date: '2026-05-31 09:50:00', agent: 'pv',    text: '张工 @光伏 "绝缘测试 + 接头/组件判别"', en: 'Zhang @PV-Assist "insulation test + connector vs module"', sev: 'low' },
  { date: '2026-05-31 13:35:00', agent: 'pv',    text: '李工 @光伏 "散热确认 + 登高遮挡排查"', en: 'Li @PV-Assist "cooling check + climbing/shading survey"', sev: 'low' },
  { date: '2026-05-31 14:35:00', agent: 'pv',    text: '王工 @光伏 "离线排查 + 换卡恢复"', en: 'Wang @PV-Assist "offline triage + SIM swap recovery"', sev: 'low' },
  { date: '2026-05-31 15:10:00', agent: 'order', text: '任务项① COM1-2 回单 · 离线已恢复', en: 'Task① COM1-2 reported · back online', sev: 'low' },
  { date: '2026-05-31 15:12:00', agent: 'order', text: '任务项②③④ COM1-3/4/5 回单 · 接入异常消除', en: 'Task②③④ COM1-3/4/5 · access fault cleared', sev: 'low' },
  { date: '2026-05-31 15:15:00', agent: 'order', text: '任务项⑤⑥ COM1-6/7 回单 · 散热/遮挡消除', en: 'Task⑤⑥ COM1-6/7 · cooling/shading cleared', sev: 'low' },
  { date: '2026-05-31 15:30:00', agent: 'order', text: '整单验收归档 · 回补 ≈ 9000~12000 kWh', en: 'Ticket accepted & archived · ≈ 9,000–12,000 kWh recovered', sev: 'low' },
  { date: '2026-05-31 18:00:00', agent: 'ops',   text: '观察 · 告警/低效清零 · 发电 ↑19%', en: 'Watch · alerts/under-perf cleared · yield ↑19%', sev: 'low' },
  { date: '2026-05-31 19:00:00', agent: 'ops',   text: '观察 · 风险降级 · 偏差回补至 -16000 kWh', en: 'Watch · risk downgraded · gap → -16,000 kWh', sev: 'low' },
];

const GLOBAL_EVENT_TEMPLATES_INSPECTION = [

  { date: '2026-05-31 02:00:00', agent: 'ops', text: '季度巡检到期 · 健康度 87.0 分', en: 'Quarterly inspection due · health 87.0', sev: 'low' },
  { date: '2026-05-31 02:01:06', agent: 'query', text: '调取历史巡检 · 遗留 2 处 PID 待复核', en: 'Inspection history pulled · 2 legacy PID to recheck', sev: 'low' },
  { date: '2026-05-31 02:05:00', agent: 'order', text: '生成季度巡检计划（草案）', en: 'Quarterly inspection plan drafted', sev: 'low' },
  { date: '2026-05-31 02:08:00', agent: 'sched', text: '天气/水域窗口 · 05-30 晴低浪最佳', en: 'Weather/water window · May 30 sunny & calm = best', sev: 'low' },
  { date: '2026-05-31 08:00:00', agent: 'order', text: '创建无人机任务 INSP-2026-0530-PNG-F01', en: 'Drone task INSP-2026-0530-PNG-F01 created', sev: 'low' },
  { date: '2026-06-01 10:25:00', agent: 'insp', text: 'UAV 接收任务 · 起飞前自检通过', en: 'UAV task received · pre-flight check passed', sev: 'low' },
  { date: '2026-06-01 10:30:00', agent: 'insp', text: 'UAV 巡检中 · 双光实时回传', en: 'UAV inspecting · dual-cam live feed', sev: 'low' },
  { date: '2026-06-01 13:50:00', agent: 'insp', text: 'UAV 巡检完成 · 回传 1,940 张', en: 'UAV finished · 1,940 images uploaded', sev: 'low' },
  { date: '2026-06-01 13:55:00', agent: 'insp', text: '图像分析中 · 红外测温 + AI 识别', en: 'Analyzing images · IR thermography + AI recognition', sev: 'low' },
  { date: '2026-06-01 14:25:00', agent: 'insp', text: '缺陷清单 18 处 · 缺陷率 0.37%', en: '18 defects found · defect rate 0.37%', sev: 'mid' },
  { date: '2026-06-01 14:55:00', agent: 'insp', text: '巡检报告生成 RPT-A-PNG-2026-0530-001', en: 'Report RPT-A-PNG-2026-0530-001 generated', sev: 'low' },
  { date: '2026-06-01 15:00:00', agent: 'order', text: '18 缺陷归集 · 创建电站级消缺工单 · 并行调用排程/安全', en: '18 defects grouped · 1 site fix ticket · calling Schedule/Safety', sev: 'mid' },
  { date: '2026-06-01 15:06:00', agent: 'sched', text: '人员/技能/天气匹配 · 含工作艇路径', en: 'Staff/skill/weather matched · boat route included', sev: 'low' },
  { date: '2026-06-01 15:14:00', agent: 'safe', text: '风险校验 · 整单高（直流高压 + 水上作业/溺水）', en: 'Risk check · ticket high (DC HV + water work / drowning)', sev: 'high' },
  { date: '2026-06-01 15:25:00', agent: 'order', text: '工单 WO-2026-0530-PNG-001 创建 · 5 任务项', en: 'Ticket WO-2026-0530-PNG-001 created · 5 tasks', sev: 'low' },
  { date: '2026-06-01 16:25:00', agent: 'pv', text: '张工 @光伏 "热斑更换/二极管/PID 治理"', en: 'Zhang @PV-Assist "hot-spot swap / bypass diode / PID"', sev: 'low' },
  { date: '2026-06-01 17:00:00', agent: 'order', text: '回单提交 · Class3 全消缺 · PID 进入修复期', en: 'Reported · all Class3 cleared · PID in recovery', sev: 'low' },
  { date: '2026-06-01 17:25:00', agent: 'order', text: '同步作业结果 → 巡检智能体 · 台账更新', en: 'Results synced → Inspect Agent · defect ledger updated', sev: 'low' },
  { date: '2026-06-02 01:00:00', agent: 'ops', text: '消缺后 KPI 复盘 · 健康度 90.2 分', en: 'Post-fix KPI review · health 90.2', sev: 'low' },
  { date: '2026-06-02 02:00:00', agent: 'order', text: '更新下次巡检计划 · 下次 ≤ 2026-08-30', en: 'Next inspection plan · due ≤ 2026-08-30', sev: 'low' },
 ];

const _DATA_DEFECT_STREAM_PLANT_ID = '1881233694553112576';
const _DATA_INSPECTION_STREAM_PLANT_ID = '1879736396404850688';
function getGlobalEventTemplatesForPlant(plantId) {
  if (plantId == null) return GLOBAL_EVENT_TEMPLATES;
  const pid = String(plantId);
  if (pid === _DATA_DEFECT_STREAM_PLANT_ID) return GLOBAL_EVENT_TEMPLATES_DEFECTS;
  if (pid === _DATA_INSPECTION_STREAM_PLANT_ID) return GLOBAL_EVENT_TEMPLATES_INSPECTION;
  return GLOBAL_EVENT_TEMPLATES;
}

// Recommended quick prompts for the right-side dispatch console
// PV Expo (2026) · recommended Q&A (CN+EN)
const PV_EXPO_QA = [
  {
    agent: 'pv',
    qZh: '光伏组件热斑',
    qEn: 'PV module hot spots?',
    aZh: `# 光伏组件热斑详解

## 基本概念
热斑效应是指在一定条件下，串联支路中被遮蔽的光伏组件作为负载消耗其他有光照组件产生的能量，导致被遮蔽组件发热升温，出现烧坏暗斑的现象。这种效应会严重破坏太阳能电池。

## 典型表现
1. **随机分布热斑点**：组件出现多个随机分布的热斑，通常由电池片虚焊、隐裂或断栅等问题引起，局部高温可达100℃以上。

![image](assets/pv-expo/751cbbb9-8683-4d77-89e3-6a5be24bf9e3.png)

2. **焊接不良热斑**：焊带焊接问题导致的热斑灼伤，可能烧穿背板。

![image](assets/pv-expo/c1c364a0-0855-40ee-a641-872803121b89.png)

3. **电池低效混挡**：组件中混入低效电池片导致的条状热斑，同时接线盒温度升高。

4. **裂片或虚焊**：电池片破裂或虚焊导致的热斑。

![image](assets/pv-expo/6b38aa19-a49a-4237-9ada-62b95c5e553a.png)

5. **接线盒高温**：表面无热斑但接线盒内部二极管发热。

![image](assets/pv-expo/643480fd-b4f2-4c5e-868f-7d45b0592b3f.png)

6. **块状热斑**：电池片整片高温，清除遮挡后逐渐降温。

![image](assets/pv-expo/d46d1947-9d02-49b9-b9d5-9f579092965b.png)

## 故障原因
### 外部原因
- 组件表面积灰厚薄不均
- 鸟粪、污物、落叶等异物遮挡
- 周边草木、建筑物或电线杆阴影
- 场地不平整或方阵间距不足导致的自阴影

### 内部原因
- 生产制造工艺缺陷（焊接和层压问题）
- 电池片质量问题（反向特性差、边缘漏电流大）
- 电池片内在缺陷

## 检测方法
1. **红外热成像检测**：异常电池片温度显著高于其他电池片。

![image](assets/pv-expo/071a3c0e-26fc-4f3b-9124-4ed00a09aa15.png)

2. **目视检查**：如发现组件背板灼伤发黄、玻璃碎裂等明显损伤。

## 危害影响
- 被遮挡组件消耗有光照组件产生的能量
- 降低系统输出功率
- 可能导致组件永久性损坏甚至烧毁
- 高温可能引发玻璃爆裂、背板老化

## 预防措施
1. 及时清除组件附近杂草、灰尘、鸟粪等异物
2. 合理设定组件清洗时间，避免低温结冰
3. 搬运时避免碰撞，禁止在组件上站立或坐卧
4. 组件接线盒加装旁路二极管
5. 加强巡检和组件清洁维护

## 处理方法
1. 断开相关电气连接并采取安全措施
2. 更换受损组件
3. 更换后检查电压是否正常
4. 确认无接地情况后恢复系统运行

---

>**来源**: 润建新能源运维知识库`,
    aEn: `Here are the manifestations and causes of PV module hot spots, categorized into 6 types with internal/external causes and case analysis:

**1. Hot Spot Manifestations**  
(1) **Randomly Distributed Hot Spots**  
- Caused by cell defects: poor soldering, microcracks, broken grids  
- Local temperatures exceed 100°C, risking glass rupture, backsheet degradation, or fire  
![image](assets/pv-expo/5a6df795-6b19-45d3-bff8-73e875785e76.png)  

(2) **Soldering Defects**  
- Manual soldering errors (V-shaped microcracks from improper start points or excessive pressure)  
- Leads to backsheet burn-through  

(3) **Mixed Low-Efficiency Cells**  
- One/two low-performance cells mixed in a module  
- Causes junction box temperature rise  

(4) **Cracked Cells/Poor Soldering**  
- Visible cell fractures or weak solder joints  

(5) **Junction Box Overheating**  
- No visible cell hot spots but high junction box temperature  
- Causes: Faulty diodes or loose connections increasing contact resistance  

(6) **Block-Shaped Hot Spots**  
- Entire cell overheating; dust removal reveals localized defects  

**2. Internal Causes**  
- Manufacturing flaws (soldering/lamination defects)  
- Cell quality issues (poor reverse characteristics, excessive edge leakage current)  
- Long-term reliability hazard, limiting string output  

**3. External Causes**  
- Uneven dust accumulation, bird droppings, leaves, vegetation shadows  
- Structural shading (buildings, poles), terrain shadows  
- Reverse bias in shaded cells converts power to heat  

**4. Detection & Prevention**  
- **Detection**: Infrared thermography (best performed at dawn)  
  - Abnormal cell temperature indicates hot spots  
- **Prevention**:  
  - Regular cleaning/weed removal  
  - Proper spacing during installation  
  - Avoid mechanical stress during handling  

**Case Example**  
- **Issue**: 20MWp plant showed 5A current drop in a string  
- **Findings**: Bird droppings caused 45°C hot spot, glass shattered  
- **Solution**: Replaced damaged module; restored current balance  
![image](assets/pv-expo/e0e465ad-67e3-4b16-8087-83376fc73eb4.png)  

**Key Impact**: Hot spots permanently damage cells, reduce output, and may cause fires. Bypass diodes mitigate but cannot eliminate risks.

---

>**Source**: RunDo Renewable O&M Knowledge Base`,
  },
  {
    agent: 'pv',
    qZh: '如何更换损坏组件?',
    qEn: 'How to replace damaged PV modules?',
    aZh: `### 更换损坏光伏组件的标准流程及注意事项

---

#### 一、安全准备
1. 断电操作  
   - 断开对应汇流箱断路器及支路熔断器  
   - 拔除待更换组件所在组串的正负极连接器（MC4接头）  
   - 使用绝缘手套和工具，避免电弧风险  
   ![image](assets/pv-expo/5b3ce999-8984-405b-870e-23cec26522e5.png)\n   ![image](assets/pv-expo/5575ae87-37dd-4113-8535-08b69e797e72.png)

2. 设备检查  
   - 确认新组件型号、规格与原组件一致  
   - 检查支架结构稳定性，如发现锈蚀或变形需先处理（参考支架缺陷修复措施）

---

#### 二、组件拆卸
1. 机械固定解除  
   - 螺栓安装型：松开边框4个安装孔不锈钢螺栓  
   ![image](assets/pv-expo/2171d1f0-65c3-4814-8fc1-24d3c17c3156.png)  
   - 压块安装型：拆除压块时需确保相邻组件固定（重合部分至少宽度5mm、长度30mm）  
   ![image](assets/pv-expo/1018270c-c0a9-42a7-8792-62ad8ba2089d.png)

2. 电气分离  
   - 记录原组件接线顺序（正负极连接方向）  
   - 使用专用工具断开接线盒电缆连接  

---

#### 三、新组件安装
1. 机械固定  
   - 按原安装方式恢复（螺栓扭矩需符合厂家要求）  
   - 跟踪支架需同步检查横梁平整度，必要时加装钢制夹板或垫高组件  
   ![image](assets/pv-expo/7adae9f2-6b60-44be-87ee-9cb51a40ca50.png)  \n+   ![image](assets/pv-expo/50755a77-9658-4e07-bbbd-13e8315aaf80.png)

2. 电气连接  
   - 按原组串顺序恢复正负极连接（交叉跨越接线需特别注意）  
   ![image](assets/pv-expo/1811499d-dd33-4a7e-bd5d-eb01267d12a8.png)  
   - 接线盒密封性测试，避免进水  

---

#### 四、调试与验证
1. 功能测试  
   - 红外热成像仪检测新组件无热斑（温差＜20℃）  
   - 钳形表测量组串电流偏差≤5%  

2. 记录归档  
   - 更新组件更换日志，包括序列号、位置、测试数据  

---

#### 关键注意事项  
- 禁止操作：带电插拔连接器、徒手接触破损组件（可能存在玻璃碎片及直流漏电风险）  
- 环境要求：大风/雷雨天气禁止作业，建议清晨或阴天更换  
- 特殊支架：平单轴跟踪系统需先解除推拉杆联动，调整轴承立柱垂直度  
   ![image](assets/pv-expo/f4ea7975-cf6b-453c-901b-6e6850351e9f.png)

---

>来源: 润建新能源运维知识库`,
    aEn: `1. **Safety Precautions**:  
   - Disconnect the corresponding circuit breaker in the combiner box, branch fuse, and the PV module connector linked to the damaged module.

2. **Inspection & Preparation**:  
   - Ensure the replacement module is of the same model and specifications as the damaged one.  
   - Verify the new module’s integrity (no cracks, cable damage, junction box deformation, or backsheet burns).  

3. **Component Removal**:  
   - Carefully detach the damaged module from the mounting structure, avoiding stress on adjacent modules.  
   - Disconnect all electrical connections (cables, junction box links).  

4. **Structural & Electrical Checks**:  
   - Inspect the mounting structure for deformation or corrosion. Reinforce or replace if necessary.  
   - Confirm proper grounding of the metal frame (contact resistance ≤4Ω).  

5. **Installation**:  
   - Secure the new module to the structure, ensuring bolts are tightened (use double nuts if required).  
   - Reconnect electrical wiring, ensuring firm connections and intact insulation.  

6. **Post-Replacement Testing**:  
   - Measure the string’s DC voltage (e.g., ~780V for a typical string) and check grounding.  
   - Use an infrared thermal imager to detect abnormal heating in the junction box or connections.  

7. **Documentation & Follow-Up**:  
   - Record the replacement details (module serial number, location).  
   - Schedule periodic inspections to monitor performance and connection stability.  

**Critical Notes**:  
- Replace modules with identical electrical characteristics to avoid mismatches in strings/arrays.  
- Address root causes of damage (e.g., loose bolts, environmental stress) to prevent recurrence.  

**Example Case**:  
A wind-damaged site required bolt reinforcement and structure realignment after module replacement to enhance wind resistance. ![image](assets/pv-expo/a9d92a2f-fdd3-4241-a7ac-136b97ac16e6.png)  

**Avoid**: Mixing module types in a single string, as this reduces efficiency and risks hotspots.  

(Images show key steps: damaged modules, junction box faults, and grounding issues for visual reference.)

---

>**Source**: RunDo Renewable O&M Knowledge Base`,
  },
  {
    agent: 'pv',
    qZh: '运维人员需要参与哪些培训？',
    qEn: 'What training should Operation and Maintenance personnel undergo?',
    aZh: `1. **安全教育培训**  
   - 包括电力生产安全知识、7S管理规范、应急预案演练等  

2. **技术类培训**  
   - **基础理论**：光伏系统原理、电气一次/二次设备知识、继电保护  
   - **设备操作**：高低压设备操作规范、逆变器维护保养、通信自动化系统  
   - **故障处理**：常见故障分析判断、新技术应用（如无人机巡检、红外检测）  
   - **专项技能**：调度联系管理、电力交易规则  

3. **管理类培训**  
   - 经营管理和财务基础知识（针对站长/区域管理人员）  
   - 绩效考核标准、法律合规要求  

4. **分级培训形式**  
   - **总部级**：线上直播/线下课程，定期下发学习材料并组织考试  
   - **场站级**：以老带新实践培训（安全规程、设备操作、故障案例解析）  
   - **外部集训**：技能比武（理论+实操结合，覆盖技术标准、运行规程等）  

5. **证书资质培训**  
   - 必须持有：特种作业高压电工证、调度员证  
   - 可选持有：安全员证、登高证（分布式电站适用）  

6. **培训管理标准**（站长职责）  
   ![image](assets/pv-expo/77bdcdd1-6509-41ce-9911-59017c4fe06e.png)

---

>**来源**: 润建新能源运维知识库`,
    aEn: `### 1. **Safety Training**  
- **General Safety**: Electrical safety, fire safety, hazard identification, and emergency response.  
- **Workplace Safety**: Compliance with national and industry safety regulations (e.g., lockout/tagout procedures, PPE usage).  
- **Specialized Safety**:  
  - High-voltage equipment handling.  
  - Chemical safety for hazardous materials (e.g., battery storage systems).  

### 2. **Technical Training**  
- **Electrical Systems**:  
  - PV system components (inverters, transformers, combiner boxes).  
  - Troubleshooting electrical faults (e.g., short circuits, grounding issues).  
- **Equipment Maintenance**:  
  - Preventive and corrective maintenance for solar panels, trackers, and SCADA systems.  
  - Infrared thermography and drone inspections for fault detection.  
- **Software Tools**:  
  - SCADA systems, data analytics platforms, and remote monitoring tools.  

### 3. **Operational Procedures**  
- **Standard Protocols**:  
  - "Two-Ticket Three-System" (work permits, operation tickets, shift handover, patrol inspections, equipment testing).  
  - Step-by-step guides for startup/shutdown, grid synchronization.  
- **Emergency Drills**:  
  - Simulated responses to grid failures, fires, or natural disasters.  

### 4. **Regulatory Compliance**  
- **Grid Codes**: Local utility interconnection standards and power quality requirements.  
- **Environmental Regulations**: Waste disposal (e.g., damaged panels, batteries) and spill management.  

### 5. **Soft Skills & Leadership**  
- **Team Coordination**: Effective communication during shift changes or multi-team projects.  
- **Problem-Solving**: Root-cause analysis for recurring issues (e.g., underperformance, inverter failures).  

### 6. **Certifications & Continuous Learning**  
- **Mandatory Certifications**:  
  - Certified PV O&M Engineer (e.g., CSO/CPV), electrical safety certifications.  
- **Ongoing Education**:  
  - Annual refreshers on new technologies (e.g., bifacial panels, energy storage).  
  - Workshops on AI-driven predictive maintenance.  

### 7. **On-the-Job Training**  
- **Mentorship**: Senior technicians guide new hires through hands-on tasks (e.g., replacing fuses, calibrating sensors).  
- **Skill Assessments**: Periodic evaluations via mock scenarios (e.g., rapid shutdown during faults).  

### 8. **Specialized Scenarios**  
- **Extreme Conditions**: Training for dust storms (desert plants) or snow load management (alpine sites).  
- **Cybersecurity**: Protecting OT systems from cyber threats.  

---  
*(Note: Training programs should align with the plant’s specific equipment and risks, with records maintained for audits.)*

---

>**Source**: RunDo Renewable O&M Knowledge Base`,
  },
  {
    agent: 'pv',
    qZh: '如何处理逆变器离线？',
    qEn: 'How to handle inverter loss of communication?',
    aZh: `### 逆变器离线故障处理步骤

#### 1. 初步检查
- **通信状态灯检查**：确认通信灯是否为绿灯闪烁（正常状态应为绿色闪烁，红灯常亮表示故障）
- **电源与运行灯**：检查电源灯和运行灯是否常亮（常亮表示逆变器本体正常运行）

#### 2. 通信线路排查
- **RS485通信线检测**：
  - 检查数据采集器至逆变器的通信线是否松动或断路
  - 测量逆变器侧通信输出端电压（正常应为直流12V），若为0V则排查线路或通信模块
- **干扰排查**：确认通信线与电力线未混绑走线

#### 3. 通信模块处理
- **重启测试**：断开逆变器交直流侧电源，5分钟后重启，观察故障是否消除
- **模块更换**：若重启无效，更换通信模块并重新设置通信地址参数

#### 4. 备件管理
- **备机更换**：若确认模块损坏且无维修条件，直接更换备机（组串式逆变器推荐整体更换）

#### 5. 临时控制措施（如需）
- **手动调节**：通过监控平台手动解列部分逆变器或微调有功负荷，确保电网调度合规

---

### 故障原因分析
- **主要原因**：
  - 通信模块故障（占比较高）
  - 通信线松动/断路（12V电压异常时需重点排查）
  - 灰尘积聚导致接触不良或散热异常
- **次要原因**：逆变器内部连接线破损导致接地（需测量对地绝缘阻值）

---

### 预防措施
1. **日常巡检**：
   - 每日检查逆变器通信状态灯及运行数据
   - 对比相邻逆变器参数，发现异常及时处理
2. **定期维护**：
   - 每季度清理防尘网和散热通道
   - 紧固通信线缆端子，避免振动脱落
3. **备件储备**：常备通信模块等关键部件

---

---

>**来源**: 润建新能源运维知识库`,
    aEn: `**Inverter Communication Loss Troubleshooting Steps:**  

### 1. **Check Backend Monitoring & Combiner Box Communication**  
   - Verify if the combiner box communication is functioning normally.  
   - If communication is normal at the combiner box, exclude issues related to:  
     - Fiber optic channel failure.  
     - Transformer control unit malfunctions.  

### 2. **Inspect RS-485 Terminal Wiring**  
   - Locally check the inverter’s **RS-485 terminal connections**.  
   - Ensure no wiring errors (e.g., loose, reversed polarity, or disconnected wires).  

### 3. **Test RS-485 Communication Line Voltage**  
   - Measure the voltage of the **RS-485 communication line**.  
   - Normal voltage confirms no issues with:  
     - Line damage (e.g., cuts, abrasions).  
     - Grounding faults.  

### 4. **Verify RS-485 Wiring Sequence (Common Error)**  
   - **Example Case**:  
     - A project with **11 inverters** showed 7 working but 4 failing due to reversed polarity (white = positive, blue = negative).  
     - Correcting the wiring restored communication.  
   - **Diagnostic Methods**:  
     - Measure port voltage.  
     - Check continuity of communication lines.  
     - Use protocol analysis software for packet inspection.  

### 5. **Review Configuration Errors**  
   - **Scenario**: Inverter data shows abnormal values (e.g., current inflated by 1000x).  
   - **Solution**:  
     - Check backend monitoring settings (e.g., correct scaling factors in the configuration).  

### 6. **Additional Checks**  
   - Ensure communication cables are **not tangled** or touching other lines/casing to avoid interference.  
   - Confirm communication protocols and address parameters match the system design.  

**Common Causes of Communication Loss**:  
- Incorrect wiring (e.g., reversed RS-485 polarity).  
- Damaged/loose communication cables.  
- Faulty inverter communication board.  
- Configuration errors in monitoring systems.  

**Preventive Measures**:  
- Strictly follow wiring diagrams during installation.  
- Secure connections and avoid cable interference.  
- Regularly inspect communication hardware and software settings.  

*(Note: If communication issues persist after these steps, consult manufacturer support for advanced diagnostics.)*

---

>**Source**: RunDo Renewable O&M Knowledge Base`,
  },
];

// PV Expo (2026) · Data Q&A Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/2026光伏展问数推荐对话.md
const PV_EXPO_QUERY_QA = [
  {
    agent: 'query',
    qZh: '查询Melaka-Commercial5月的发电量',
    qEn: 'Query the generation of Melaka-Commercial in May',
    matchKeys: ['Melaka-Commercial', 'Melaka', '5月', 'May', '发电量', 'generation'],
    aZh: `📝 即将为您查询：电站发电历史

🔍 当前条件： • 电站名称: Melaka-Commercial-409kWp • 查询时间范围的开始时间: 2026-05-01 00:00:00 • 查询时间范围的结束时间: 2026-05-31 23:59:59

pause:2s

![chart](assets/query-expo/4d4ddf89-3837-40bd-913b-e49d7e100cda.png)

Melaka-Commercial 5月份整体发电表现不错，全月累计发电量达36,352.71 kWh，日均发电量约1,346 kWh，符合该规模光伏电站的预期水平。

从日发电曲线来看，5月1-2日发电量较高（1,609-1,695 kWh），但3日骤降至368.33 kWh，随后4-8日连续5天数据缺失（显示为"--"），这是本月最值得关注的异常时段。9日起恢复正常发电（1,658 kWh），说明这5天大概率是通信中断或采集器离线，而非电站本身停运——因为恢复后发电量立刻回到正常水平，没有出现设备故障后常见的渐进式恢复特征。

月中（12-19日）发电量整体偏低，集中在1,083-1,433 kWh区间，低于全月均值。这与5月东南亚地区季风季前期的多云、阵雨天气吻合，辐照不稳定属于季节性正常波动。20日和22日有所回升（1,766、1,968 kWh），25日更是达到全月峰值2,139.08 kWh，接近系统额定容量的满发水平，说明当天天气晴好，系统性能良好。月末最后几天（28-30日）保持在1,488-1,843 kWh的较高区间，整体收尾比较理想。

**建议**：重点排查5月4-8日的数据缺失原因，确认是通信模块故障还是采集器离线，避免类似情况在下个季度重演。同时，鉴于5月中旬的辐照波动明显，可以结合当地气象记录，评估该电站是否需要对多云天气下的发电预测模型做校准。`,
    aEn: `📝 Ready to query: Plant Power Generation

🔍 Current Conditions: • Start Time: 2026-05-01 00:00:00 • End Time: 2026-05-31 23:59:59 • Plant: ['Melaka-Commercial']

pause:2s

![chart](assets/query-expo/957e88cf-6499-4c39-8fd4-ff4951dd0b05.png)

Melaka-Commercial's May generation totaled **36,352.71 kWh** across 26 active days, with a clear 4-day data gap from May 4th to 7th (\`--\`), indicating a likely communication or data acquisition outage at the site during that period.

**Core Performance Summary:**
- **Average daily generation (active days):** ~1,398 kWh/day
- **Peak day:** May 25th at **2,139.08 kWh** – the strongest output of the month, suggesting excellent solar irradiance that day.
- **Lowest active day:** May 3rd at only **368.33 kWh** – an extreme outlier compared to the rest of the month, dropping to just ~26% of the monthly average. This strongly points to a weather event (heavy overcast/rain) or a partial plant curtailment/shutdown on that specific day, not a normal fluctuation.
- **Typical range:** Most healthy days fell between **1,100 – 1,700 kWh**, with a cluster of strong days (20th, 22nd, 25th, 29th) exceeding 1,800 kWh.

**Key Business Diagnosis:**
1. **The May 3rd anomaly is a red flag.** A single-day generation of 368 kWh against a baseline of ~1,400 kWh is not normal meteorological variation. It warrants a check of the site's operational logs for that date – was there a grid outage, inverter fault, or planned maintenance?
2. **The 4-day data gap (May 4-7) is a data acquisition failure.** This is not a generation issue, but a monitoring/SCADA communication problem. The plant may have been generating normally during those days, but the data was never captured. This needs to be investigated to ensure future data integrity.
3. **Overall performance is healthy but not exceptional.** The total of ~36.3 MWh is reasonable for a commercial-scale system. The plant showed good consistency in the second half of the month, particularly from the 20th onward, with several days pushing above 1,700 kWh.

**Recommendation:**
- **Investigate May 3rd** to confirm whether it was a weather anomaly or an operational issue.
- **Restore the communication link** that caused the May 4-7 data gap to avoid blind spots in future monitoring.
- **Compare against historical May data** (if available) to see if 36.35 MWh is on par with seasonal expectations, or if the plant is underperforming relative to its design capacity.`,
  },
  {
    agent: 'query',
    qZh: '查询Melaka-Commercial电站6月1号的发电功率',
    qEn: 'Check the power of the Melaka-Commercial power plant on June 1st.',
    matchKeys: ['Melaka-Commercial', 'Melaka', '6月1', 'June 1', '发电功率', 'power'],
    aZh: `📝 即将为您查询：电站日发电功率

🔍 当前条件： • 电站名称: Melaka-Commercial • 查询时间: 2026-06-01 00:00:00

pause:2s

![chart](assets/query-expo/78b70e03-c840-4c81-99c7-90d189e93c69.png)

6月1日Melaka-Commercial电站的发电功率数据呈现出典型的“零功率日”特征——全天96个15分钟时段的功率值全部为0，没有任何发电产出。

这个现象需要结合具体情况来判断：如果6月1日当地天气为持续阴雨或台风天，全天无日照辐照，那么零功率是正常的。但更值得关注的是，**全天没有任何一个时段出现哪怕微弱的功率爬坡或下降曲线**，这不太符合阴雨天偶尔透光时仍会有少量发电的规律。因此，更大概率是**电站当天处于停机状态**——可能是计划性检修、电网限电、逆变器故障或通信中断导致数据采集异常。

建议核实以下几点：①当天该电站是否安排了停电检修或并网线路维护；②查看5月31日及6月2日的发电数据，判断是孤立事件还是连续异常；③检查逆变器及数据采集器的运行日志，确认设备状态。如果6月2日恢复正常发电，则基本可判定为单日停机；若连续多日零功率，需优先排查设备故障或通信链路问题。`,
    aEn: `📝 Ready to query: Plant Daily Power

🔍 Current Conditions: • Plant: Melaka-Commercial • Query Time: 2026-06-01 00:00:00

pause:2s

![chart](assets/query-expo/ab755e99-7c87-4d93-aadd-2e8250f4d268.png)

On June 1st, the Melaka-Commercial power plant recorded zero power output across all 96 fifteen-minute intervals — from midnight to midnight, every single reading is either 0 or 0E-8 (effectively zero).

This is not a normal overnight pattern. While it's expected that a solar plant produces zero power between roughly 18:00 and 06:00, the complete absence of any generation during the entire daytime window (06:00–18:00) is a clear red flag. There is no ramp-up in the morning, no peak around midday, and no decline in the afternoon — just a flat line at zero all day.

**Key business insight:** The plant was effectively offline or fully curtailed on June 1st. Possible causes include:
- A full-grid curtailment or scheduled maintenance shutdown
- A major inverter or communication failure affecting the entire plant
- Severe weather (e.g., a tropical storm or heavy overcast) could theoretically suppress output, but even then, some residual generation (a few kW) would normally appear — a solid zero all day suggests a technical or operational outage rather than just bad weather.

**Recommendation:** Check the plant's inverter status logs, grid connection records, and any maintenance tickets for June 1st. If this was an unplanned outage, it requires immediate investigation to prevent revenue loss. If it was planned, verify that the downtime was logged and that the plant is back online today (June 2nd).`,
  },
  {
    agent: 'query',
    qZh: '查一下6月1号的消缺工单',
    qEn: 'Check work order ticket from June 1st.',
    matchKeys: ['6月1', 'June 1', '消缺', 'work order', '工单'],
    aZh: `📝 即将为您查询：消缺工单

🔍 当前条件： • 工单状态: ['Unstarted', 'Processing', 'PendingAcceptance', 'PendingRepeatAcceptance', 'AcceptancePassed', 'AcceptanceNotPassed', 'RepeatAcceptanceNotPassed', 'Cancel', 'Hangup'] • 创建开始时间: 2026-06-01 00:00:00 • 创建结束时间: 2026-06-01 23:59:59

pause:2s

![chart](assets/query-expo/5557eebb-6b5c-4cf4-af40-5bc4d6edf7a7.png)

好的，这是对6月1日消缺工单的业务分析：

**核心判断：当天仅生成2张消缺工单，均未逾期，但最紧急的逆变器硬件告警工单仍处于“待处理”状态，存在处理滞后风险，与另一张高等级结构缺陷工单的快速响应形成反差。**

具体来看，两张工单呈现出截然不同的处理优先级矛盾：

1. **紧急设备告警“待处理”，存在安全隐患**：来自 **Penang-Commercial** 电站的工单，因“漏电流自检异常”触发，等级为 **紧急**，但状态仍是 **待处理**。漏电流异常通常与组件或线缆绝缘破损有关，若不及时消缺，轻则影响发电效率，重则引发设备停机或电气火灾。该工单计划开始时间（5月31日）早于创建时间（6月1日），说明告警发生后工单流转已有延迟，当前仍未派发执行，风险正在累积。

2. **高等级结构缺陷“处理中”，响应及时**：来自 **Johor-Commercial** 电站的“屋顶渗漏”工单，等级为 **高**，已由执行人“hunter”接手处理。这说明运维团队对非电气类的结构性缺陷响应较为迅速。

**业务归因与建议**：两张工单均未逾期，整体工单处理压力不大，但核心矛盾在于 **最紧急的“漏电流”告警反而没有被优先处理**，这不符合常规运维逻辑。建议立即跟进Penang电站那张“待处理”的紧急工单，确认是尚未派单、缺乏备件还是其他原因导致停滞，避免小隐患演变成大故障。`,
    aEn: `📝 Ready to query: Work Order Ticket

🔍 Current Conditions: • Work Order Status: ['Unstarted', 'Processing', 'PendingAcceptance', 'PendingRepeatAcceptance', 'AcceptancePassed', 'AcceptanceNotPassed', 'RepeatAcceptanceNotPassed', 'Cancel', 'Hangup'] • Creation Start Time: 2026-06-01 00:00:00 • Creation End Time: 2026-06-01 23:59:59

pause:2s

![chart](assets/query-expo/7524ee2b-221d-4c68-82f4-0f8ce8c418f1.png)

On June 1st, two work order tickets were created across two different plants, and neither is overdue yet.

**Core conclusion:** Both tickets are active and awaiting or in progress — no immediate escalation is required. However, the urgent inverter alarm at Penang-Commercial warrants close attention.

**Breakdown of the two tickets:**

1. **Penang-Commercial – Urgent Inverter Alarm**
   - **Work Order:** Leakage current self-check anomaly (Inverter - String Inverter)
   - **Status:** Pending (not yet started)
   - **Alarm Status:** InAlarm (the fault condition persists)
   - **Planned start:** May 31st, response deadline is June 4th
   - **Executor:** hunter
   - **Observation:** This is a hardware-level alarm on a 2757.0 kWp inverter string, classified as urgent. The fact that it was created on June 1st but planned to start on May 31st suggests it was a backfill or rescheduled order. With a deadline of June 4th, there is still time, but "Pending" status combined with "InAlarm" means the anomaly has not been addressed. Given the urgency level, this should be prioritized — any delay could risk inverter damage or generation loss.

2. **Johor-Commercial – Roof Leakage (Temporary Work Order)**
   - **Work Order:** Temporary work order for roof leakage
   - **Status:** Processing (work has begun)
   - **Alarm Status:** None (no active alarm linked)
   - **Planned start:** June 1st, response deadline is June 9th
   - **Executor:** hunter
   - **Observation:** This is a non-alarm, high-level temporary ticket for a 1160.0 kWp site. It is already in progress, which is good. Roof leakage at a solar plant can pose electrical safety risks and structural concerns, so timely completion is important, but the deadline is comfortable.

**Key business insights:**
- **Single executor bottleneck:** Both tickets are assigned to "hunter". If this is a single technician, the urgent inverter alarm at Penang-Commercial should take precedence over the roof leakage job, especially given the 3-day response window.
- **No overdue risk currently:** Both tickets have deadlines well into the future (June 4 and June 9), so no immediate penalty or SLA breach.
- **Missing processing details:** Both tickets show "None" for processing content and reason. This is a data quality concern — without root cause notes, it's hard to diagnose recurring patterns (e.g., frequent leakage current alarms on specific inverters).

**Recommendation:**
- Prioritize the **Penang-Commercial urgent inverter alarm** — assign additional resources if possible, or ensure hunter starts it before June 4.
- After resolution, require the executor to fill in the root cause and processing content to enable future trend analysis (e.g., is this a recurring inverter model issue?).`,
  },
  {
    agent: 'query',
    qZh: '查一下5月份的巡检工单统计',
    qEn: 'Check the inspection work order statistics for May.',
    matchKeys: ['5月', 'May', '巡检', 'inspection', 'Penang-Commercial'],
    aZh: `📝 即将为您查询：巡检工单统计

🔍 当前条件： • 派单开始日期: 2026-05-01 00:00:00 • 派单结束日期: 2026-05-31 23:59:59

pause:2s

![chart](assets/query-expo/31751691-fc04-4739-91b9-ae9241ca7a54.png)

5月份Penang-Commercial电站的巡检工单统计非常清晰：全月仅生成1张巡检工单，且已完成，未处理、处理中、已取消均为0，完成率100%。  从业务角度看，这反映出该电站5月份的巡检任务量极低，属于典型的“单次巡检”或“月度例行巡检”安排。对于商业电站而言，月均1张工单通常意味着该电站规模较小、设备台数少，或者巡检周期较长（例如每月仅安排一次全面巡检）。当前状态健康，没有积压或异常工单滞留。  建议关注下月（6月）的工单生成情况，若连续多月仅1张工单且电站规模较大，可能需要评估巡检频次是否满足设备维护需求。`,
    aEn: `📝 Ready to query: Inspection Order Statistics

🔍 Current Conditions: • Dispatch Start Date: 2026-05-01 00:00:00 • Dispatch End Date: 2026-05-31 23:59:59

pause:2s

![chart](assets/query-expo/a9397e30-5be2-4d3a-9ce2-389c923c8bd0.png)

For May, only **Penang-Commercial** had any inspection work order activity, and the numbers are minimal.

**Core conclusion:** Inspection work order execution in May is essentially idle across all plants — only 1 order was dispatched, and it was completed. This is not a normal operational pattern for a fleet of solar plants.

**Key observations:**

- **Only 1 order across the entire month:** Out of what should be a regular inspection cycle (e.g., weekly or bi-weekly for key equipment), only a single inspection order was created for Penang-Commercial. All other plants — including Johor-Commercial — show zero orders in every status category.
- **100% completion rate:** The one order that was dispatched was completed, with no unprocessed, processing, or cancelled items. That's a good sign for the one order that existed.
- **Zero orders for other plants:** This is the more concerning signal. Either:
  - The inspection scheduling system is not generating orders (possible configuration issue or rule change)
  - Inspections are being done informally without work orders (process compliance issue)
  - Or May was an unusual month with no scheduled inspections (unlikely for a standard O&M operation)

**Business implications:**
- **Compliance risk:** If inspection orders are mandated by contract or regulatory requirements, a month with only 1 order across the entire fleet is a serious gap. Missing inspections could lead to undetected equipment degradation, safety hazards, or contractual penalties.
- **Data reliability concern:** The fact that Penang-Commercial has exactly 1 completed order and everything else is zero suggests the system may not be capturing all inspection activities. It's worth verifying whether the inspection order module is correctly integrated with the scheduling engine.
- **No visibility on inspection quality:** With only 1 order, there is no data to analyze inspection frequency, completion time, or findings — making it impossible to assess preventive maintenance effectiveness.

**Recommendation:**
- Immediately verify the inspection scheduling rules and job triggers for all plants — is the system supposed to auto-generate orders?
- Cross-check with any manual inspection logs or site reports to confirm whether inspections actually occurred but were not recorded in the system.
- If the system is indeed not generating orders, re-enable the inspection schedule and backfill any missed inspections for May to avoid accumulating risk.`,
  },
];

// 电站健康度截图：assets/healthiness/{电站}/{cn|en}/image-{1..3}.png
const HEALTHINESS_PLANT_KEYS = [
  'Johor-Commercial',
  'Kedah-Commercial',
  'Melaka-Commercial',
  'Penang-Commercial',
  'Perak-Commercial',
];
const HEALTHINESS_STREAM_TAG_MAP = {
  Johor: 'Johor-Commercial',
  Penang: 'Penang-Commercial',
  Kedah: 'Kedah-Commercial',
  Melaka: 'Melaka-Commercial',
  Perak: 'Perak-Commercial',
};

function resolveHealthinessPlantKey(text, plant) {
  const raw = String(text || '');
  const lower = raw.toLowerCase();
  for (const key of [...HEALTHINESS_PLANT_KEYS].sort((a, b) => b.length - a.length)) {
    if (raw.includes(key) || lower.includes(key.toLowerCase())) return key;
    const short = key.replace(/-Commercial$/i, '');
    if (short && lower.includes(short.toLowerCase())) return key;
  }
  const plantId = plant?.id != null ? String(plant.id) : '';
  const tokenName = plantId && typeof window !== 'undefined'
    ? window.IRUN_TOKEN?.byPlantId?.[plantId]?.name
    : null;
  if (tokenName && HEALTHINESS_PLANT_KEYS.includes(tokenName)) return tokenName;
  const streamTag = plantId ? getDemoPlantProfile(plantId)?.streamTag : null;
  if (streamTag && HEALTHINESS_STREAM_TAG_MAP[streamTag]) {
    return HEALTHINESS_STREAM_TAG_MAP[streamTag];
  }
  for (const key of HEALTHINESS_PLANT_KEYS) {
    const short = key.replace(/-Commercial$/i, '');
    const labels = [plant?.name, plant?.enName, plant?.short].filter(Boolean).map(String);
    if (labels.some(l => l.includes(key) || l.toLowerCase().includes(short.toLowerCase()))) {
      return key;
    }
  }
  return HEALTHINESS_PLANT_KEYS[0];
}

function buildHealthinessAnswer(plantKey, zh) {
  const key = HEALTHINESS_PLANT_KEYS.includes(plantKey)
    ? plantKey
    : HEALTHINESS_PLANT_KEYS[0];
  const lang = zh ? 'cn' : 'en';
  const label = zh ? '健康度' : 'Health';
  const base = `assets/healthiness/${key}/${lang}`;
  return [1, 2, 3]
    .map(i => `![${label}](${base}/image-${i}.png)`)
    .join('\n\n');
}

// 电站健康度趋势 · 运维建议（按电站区分中英文）
const HEALTH_ADVICE_BY_PLANT = {
  'Johor-Commercial': {
    aZh: `针对性能指标 80.47这一核心短板，建议立即调取5月15日至5月20日期间所有逆变器的直流侧电流、电压及MPPT（最大功率点跟踪）效率曲线。重点排查是否存在因局部阴影、组件热斑或PID效应导致的组串电流失配，以及逆变器是否因散热不良或内部IGBT老化而进入降额运行模式。同时，对比同期辐照度与气象数据，计算各逆变器单元的实际PR（性能比），定位出效率低于电站平均值的异常单元，并现场使用红外热成像仪扫描对应组串，确认是否存在异常发热点。

结合分数序列中5月16-18日的深跌谷底，必须调取该时间段的故障告警日志与运维工单。重点核查是否存在「逆变器通讯中断」、「电网电压越限」、「组串电流为零」等高频告警。确认当时的处置措施是自动恢复还是人工复位，以及是否对故障设备进行了彻底的固件升级或硬件更换。鉴于分数反弹后未能回到90分，需评估是否存在「带病运行」的设备，例如部分组串因二极管击穿导致功率损失但未触发告警，或是逆变器内部电容老化导致转换效率永久性下降。建议对经历深跌后恢复的逆变器进行为期一周的逐日发电量对比分析。`,
    aEn: `Targeting the core underperformance indicator of 80.47, it is recommended to immediately retrieve the DC current, DC voltage and MPPT (Maximum Power Point Tracking) efficiency curves of all inverters from May 15 to May 20. Focus on investigating string current mismatch caused by partial shading, module hotspots or PID (Potential Induced Degradation) effect, as well as whether the inverters have entered derating operation mode due to poor heat dissipation or aging internal IGBTs. Meanwhile, compare the irradiance and meteorological data of the same period, calculate the actual PR (Performance Ratio) of each inverter unit, and identify abnormal units with efficiency below the average level of the power station. Conduct on-site infrared thermal imaging scanning on the corresponding strings to check for abnormal heat sources.

In view of the sharp performance drop hitting the lowest point between May 16 and 18 in the scoring trend, pull up the fault alarm logs and operation & maintenance work orders for this timeframe as a priority. Thoroughly verify frequent alarms such as inverter communication interruption, grid voltage out-of-limit and zero string current. Confirm whether the faults were resolved by automatic recovery or manual reset, and check if complete firmware upgrades or hardware replacements were performed on the faulty devices. Given that the score failed to rebound back to 90 points after recovery, assess whether any equipment is operating with latent faults. Typical issues include power loss from broken diodes on partial strings without triggering alarms, or permanently reduced conversion efficiency caused by aging internal capacitors inside inverters. It is advised to carry out a daily power generation comparison analysis on all inverters that recovered after the sharp drop for one consecutive week.`,
  },
  'Penang-Commercial': {
    aZh: `针对性能指标 68.44的严重偏低，建议立即调取所有逆变器在近30天内的MPPT电压与电流曲线，重点对比分数骤降日（第5-7天）前后的数据。排查是否存在多路MPPT输入功率差异过大（>15%），这通常由组串内组件热斑、遮挡或接线盒旁路二极管击穿导致。同时，检查逆变器内部散热风扇运行日志，确认是否因高温触发了功率降额。建议对分数最低时段（61-63分）对应的逆变器进行红外热成像扫描，定位异常发热的组串或连接器。

针对故障指标 70.21，需从SCADA系统中导出近30天的全部告警记录，重点分析「绝缘阻抗低」、「直流电弧」、「通讯中断」及「电网电压越限」四类告警的频次与时间分布。特别关注分数从79分跌至66分（第8天）前后是否集中爆发了某类告警。建议对告警频发的逆变器进行固件版本核查，并检查其直流侧绝缘电阻值是否已接近报警阈值。同时，排查通讯线缆屏蔽层接地情况，排除因电磁干扰导致的误报或数据丢失。`,
    aEn: `In response to the severely low performance indicator of 68.44, it is recommended to immediately retrieve the MPPT voltage and current curves of all inverters over the past 30 days, with a focus on comparing data before and after the sharp drop in scores (Days 5 to 7). Investigate excessive power deviation (over 15%) among multiple MPPT inputs, which is generally caused by module hotspots, shading or breakdown of bypass diodes in string junction boxes. Meanwhile, check the operation logs of the inverters' internal cooling fans to confirm whether power derating was triggered by high temperatures. Perform infrared thermal imaging scanning on inverters corresponding to the lowest score range (61–63 points) to locate overheated strings or connectors.

Regarding the fault indicator of 70.21, export all alarm records from the SCADA system for the past 30 days, and analyze the frequency and time distribution of four major alarms: low insulation resistance, DC arc fault, communication interruption and grid voltage out-of-limit. Pay special attention to whether a certain type of alarm occurred intensively around Day 8, when the score plummeted from 79 to 66 points. Verify the firmware version of frequently alarmed inverters, and check if the DC-side insulation resistance is close to the alarm threshold. In addition, inspect the grounding of the shielding layer on communication cables to eliminate false alarms and data loss resulting from electromagnetic interference.`,
  },
  'Kedah-Commercial': {
    aZh: `针对性能指标80.5分与发电指标100分的巨大落差，建议立即开展以下排查：首先，调取所有逆变器在5月19日（分数最低点）前后的直流/交流功率曲线，对比组串电流数据，识别是否存在多路MPPT（最大功率点跟踪）失配或单台逆变器输出功率异常偏低的情况。其次，利用红外热成像仪对光伏组件进行全站巡检，重点检查是否存在热斑、隐裂或旁路二极管击穿导致的功率损失。最后，核查组串的电压与电流一致性，排除因遮挡、灰尘不均匀或组件衰减差异造成的串联失配问题。此类效率损失通常不会触发硬故障告警，但会持续侵蚀电站收益。

针对5月19日分数跌至69分后快速恢复的现象，需完善运维流程。建议在每次故障修复（如逆变器更换、组串重接）后，强制执行24小时连续性能复验，对比修复前后同辐照度下的PR（性能比）变化，确保修复效果达标。同时，在监控系统中设置「分数梯度下降预警」，例如当24小时内综合健康得分下降超过15分时，自动触发高级别告警并推送至运维负责人，避免类似「V」型深跌事件再次发生。此外，应分析此次事件的根本原因（RCA），判断是设备本身可靠性问题还是外部因素（如雷击、小动物破坏），并据此调整备件策略或加装防护设施。请具体核查相关数据与电站实际情况进行运维处理。`,
    aEn: `Given the notable gap between the performance score of 80.5 and the power generation score of 100, the following troubleshooting actions are recommended immediately. First, retrieve the DC and AC power curves of all inverters around May 19, the date with the lowest score, and compare string current data to identify MPPT (Maximum Power Point Tracking) mismatch across multiple channels or abnormally low output power of individual inverters. Second, conduct a full-station inspection of photovoltaic modules via infrared thermal imaging, focusing on power losses caused by hotspots, microcracks or failed bypass diodes. Finally, verify the consistency of string voltage and current to rule out series mismatch resulting from uneven shading, inconsistent dust accumulation or disparate module degradation. This type of efficiency loss generally does not trigger hardware fault alarms, yet it continuously erodes the revenue of the power station.

Regarding the sharp drop to 69 points on May 19 followed by a quick recovery, the operation and maintenance procedures need to be optimized. It is required to mandate a 24-hour continuous performance re-verification after each fault remediation, including inverter replacement and string reconnection. Compare the PR (Performance Ratio) before and after repair under the same irradiance to guarantee effective remediation. Meanwhile, configure a gradual score decline early warning in the monitoring system. A high-level alarm shall be automatically activated and pushed to O&M supervisors if the overall health score drops by more than 15 points within 24 hours, to prevent recurrence of similar V-shaped sharp dips. In addition, perform Root Cause Analysis (RCA) for this incident to determine whether the issue stems from inherent equipment reliability or external factors such as lightning strikes and animal damage. Adjust spare parts management strategies or install protective devices accordingly. Please check relevant data and on-site conditions of the power station for targeted operation and maintenance.`,
  },
  'Perak-Commercial': {
    aZh: `针对性能指标 79.68 与发电指标 98.87 严重背离的情况，说明电站虽然总发电量高，但单位装机容量的实际出力远低于理论值。建议立即调取所有逆变器的MPPT（最大功率点跟踪）效率曲线，对比辐照度数据，识别是否存在长期偏离理论效率的逆变器。同时，利用红外热成像仪对低效组串进行巡检，重点排查热斑、遮挡或组件衰减导致的电流失配。运维步骤：导出近7天每台逆变器的直流侧电压、电流及功率数据，计算实际MPPT效率；对效率低于95%的逆变器，现场检查其散热风扇及内部功率模块；对关联组串进行IV曲线测试，定位异常组件。

故障指标 85.54 虽未极低，但结合分数序列中两次剧烈跌落，表明故障类型多为「软故障」或「瞬态故障」，而非永久性停机。重点应核查直流侧绝缘监测装置、交流侧断路器及汇流箱熔断器的动作记录。运维步骤：登录SCADA系统，筛选出分数跌至64（第25天）前后24小时内的所有告警日志，按设备ID分类统计；检查对应时间段内是否有大量「绝缘阻抗低」、「直流电弧」、「通讯超时」等非致命告警；对告警频发的汇流箱进行开箱检查，确认防反二极管状态及通讯模块接线端子是否氧化松动。此类间歇性故障若不根治，将导致性能指标持续承压。`,
    aEn: `The significant deviation between the performance indicator of 79.68 and the power generation indicator of 98.87 indicates that despite high total power generation of the power station, the actual output per unit installed capacity is far below the theoretical value. It is recommended to immediately retrieve the MPPT (Maximum Power Point Tracking) efficiency curves of all inverters and compare them with irradiance data to identify inverters with long-term deviation from the theoretical efficiency. Meanwhile, inspect underperforming strings with an infrared thermal imager, focusing on current mismatch caused by hotspots, shading or module degradation.

O&M Procedures: Export the DC voltage, current and power data of each inverter over the past 7 days, and calculate the actual MPPT efficiency. For inverters with efficiency lower than 95%, conduct on-site inspections on their cooling fans and internal power modules. Perform IV curve tests on the associated strings to locate faulty modules.

Although the fault indicator of 85.54 is not critically low, combined with two sharp drops in the score trend, it reveals that most faults are soft faults or transient faults rather than permanent shutdowns. Priority shall be given to checking the operation records of DC insulation monitoring devices, AC circuit breakers and combiner box fuses.

O&M Procedures: Log in to the SCADA system and filter all alarm logs within 24 hours before and after the score dropped to 64 (Day 25), then classify and tally the data by device ID. Check for a large number of non-critical alarms such as low insulation resistance, DC arc fault and communication timeout during this period. Carry out on-site cabinet inspections on combiner boxes with frequent alarms, and verify the condition of anti-reverse diodes as well as oxidation and looseness of wiring terminals on communication modules. If such intermittent faults are not thoroughly resolved, the performance indicators will remain under sustained pressure.`,
  },
  'Melaka-Commercial': {
    aZh: `性能指标低于80，通常指向组件功率衰减、热斑效应或组串电流失配。建议立即开展全站IV曲线扫描（或使用智能组串监控系统），重点对比近30天低分时段（第16-24天）的组串电流数据。同时，检查逆变器MPPT跟踪效率，若发现多路MPPT输入功率差异超过5%，需排查阴影遮挡、组件玻璃脏污或旁路二极管击穿。针对衰减超过10%的组件，应安排EL检测并制定更换计划。

故障指标偏低，结合分数序列中的「低位平台期」，推测存在重复性故障或告警未及时闭环。建议导出近30天故障日志，按「逆变器停机次数」、「通信中断时长」、「组串开路报警」分类统计。重点处理频次最高的前3类故障，例如若逆变器频繁报「绝缘阻抗低」，需排查直流电缆接头进水或组件边缘漏电。同时，建立关键备件（如IGBT模块、熔断器）的现场库存，确保同类故障修复时间不超过4小时，避免再次出现连续多日低分。`,
    aEn: `A performance indicator below 80 generally points to module power degradation, hotspot effect or string current mismatch. It is recommended to conduct full-station IV curve scanning (or deploy the intelligent string monitoring system) immediately, and focus on comparing string current data during the low-score period from Day 16 to Day 24 in the past 30 days. Meanwhile, inspect the MPPT tracking efficiency of inverters. If the power difference among multiple MPPT inputs exceeds 5%, troubleshoot issues including shading, dirt accumulation on module glass and breakdown of bypass diodes. For modules with a degradation rate over 10%, arrange EL testing and formulate a replacement plan.

The low fault indicator, together with the prolonged low plateau in the score trend, suggests recurring faults or unresolved alarms. Export fault logs of the past 30 days and make classified statistics based on inverter shutdown times, communication interruption duration and string open-circuit alarms. Prioritize rectification of the top three most frequent faults. For instance, if inverters constantly report low insulation resistance, check for water ingress at DC cable joints or leakage at module edges. In addition, stock key spare parts such as IGBT modules and fuses on site, to ensure similar faults can be fixed within 4 hours and prevent sustained low scores for consecutive days.`,
  },
};

function buildHealthAdviceAnswer(plantKey, zh) {
  const key = HEALTHINESS_PLANT_KEYS.includes(plantKey)
    ? plantKey
    : HEALTHINESS_PLANT_KEYS[0];
  const rec = HEALTH_ADVICE_BY_PLANT[key] || HEALTH_ADVICE_BY_PLANT[HEALTHINESS_PLANT_KEYS[0]];
  return zh ? rec.aZh : rec.aEn;
}

// PV Expo (2026) · Operate Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/运营智能体对话.md
const PV_EXPO_OPS_QA = [
  {
    agent: 'ops',
    qZh: '分析电站"Kedah-Commercial-307.44kWp"当月KPI达成风险',
    qEn: 'Analyze the risk of achieving the monthly KPI for the power station "Kedah-Commercial-307.44kWp".',
    matchKeys: ['Kedah-Commercial', 'Kedah', 'KPI', '307.44'],
    aZh: `当月已发电量 **3630.6 kWh**，月度 KPI 指标为发电量 **31584 kWh**。基于电站历史同期辐照和历史发电量数据，预测当月理论发电量为 **30794.4 kWh**，偏差量为 **-2.5%**。

目前存在**轻微风险**，预计月度 KPI 缺口为 **2570.1 kWh**。建议检查设备告警，并及时进行运维处理。`,
    aEn: `The electricity generated this month is **3,630.6 kWh**. The monthly KPI target is **31,584 kWh**. Based on the power station's historical irradiance and historical electricity generation data for the same period, the predicted theoretical generation for this month is **30,794.4 kWh**, with a deviation of **-2.5%**.

There is a **slight risk**, and the expected monthly KPI shortfall is **2,570.1 kWh**. It is recommended to check equipment alarms and perform timely maintenance.`,
  },
  {
    agent: 'ops',
    qZh: '请展示当前电站的健康度详情',
    qEn: "Show the station's health details.",
    matchKeys: ['健康度', '建康度', 'health', '详情'],
    dynamic: 'healthiness',
  },
  {
    agent: 'ops',
    qZh: '针对当前电站的建康度分数趋势，给出运维建议',
    qEn: 'Give maintenance advice according to the trend of the station health score.',
    matchKeys: ['健康度', '建康度', '运维建议', 'health', 'maintenance', '趋势'],
    dynamic: 'health_advice',
  },
];

// PV Expo (2026) · Inspect Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/2026光伏展巡检智能体推荐对话.md
const PV_EXPO_INSP_QA = [
  {
    agent: 'insp',
    qZh: '分析巡检图片中的多个缺陷',
    qEn: 'Analyze multiple defects in inspection images',
    matchKeys: ['缺陷', '分析', '巡检', 'inspection', 'defect', 'deficiencies'],
    aZh: `本次共上传 2 张巡检图片，完成识别 2 张；发现 5 处疑似缺陷，涉及 2 张缺陷图片。你可以继续查看下方巡检图片诊断结果。

pause:2s

picture1：![DJI_2025070616549.jpeg](assets/insp-expo/fb0ed493-02b3-404c-8d15-f4b173de9285.jpeg)

picture2：![DJI_20250905129875632.jpeg](assets/insp-expo/d5b5f114-1f41-46e5-b844-a566c41d039c.jpeg)

| **图片id** | **缺陷索引** | **缺陷名称** | **描述** | **建议** |
| --- | --- | --- | --- | --- |
| picture1 | 1 | 二极管损坏 | 在图片中可见光伏板区域存在一个明显暗斑，该区域与周围光伏板颜色不一致，呈现局部发黑现象，符合二极管损坏的典型特征。 | 建议现场运维人员对该光伏板进行断电检查，确认二极管损坏的具体位置，并更换损坏的二极管以恢复光伏板正常工作。 |
| picture1 | 2 | 热斑 | 在图片中可见光伏板表面存在一个局部温度异常的区域，该区域与周围板面温度差异明显，呈现局部发暗的热斑现象。 | 建议现场运维人员对该热斑区域进行标记，后续安排专业人员进行详细检测，以确定热斑成因并采取相应措施。 |
| picture1 | 3 | 二极管损坏 | 在图片中可见光伏板区域存在一个明显暗斑，该区域与周围光伏板颜色不一致，呈现局部发黑现象，符合二极管损坏的典型特征。 | 建议现场运维人员对光伏板进行断电检查，确认二极管损坏的具体位置，并更换损坏的二极管以恢复光伏板正常工作。 |
| picture2 | 1 | 二极管损坏 | 在图片中可见光伏板区域存在一个明显暗斑，该区域与周围光伏板颜色不一致，呈现局部发黑现象，符合二极管损坏的典型特征。 | 建议现场运维人员对光伏板进行断电检查，确认二极管损坏的具体位置，并更换损坏的二极管以恢复光伏板正常工作。 |
| picture2 | 2 | 二极管损坏 | 在图片中可见光伏板区域存在一个明显暗斑，该区域与周围光伏板颜色不一致，呈现局部发黑现象，符合二极管损坏的典型特征。 | 建议现场运维人员对光伏板进行断电检查，确认二极管损坏的具体位置，并更换损坏的二极管以恢复光伏板正常工作。 |`,
    aEn: `A total of 2 inspection images were uploaded, and 2 images were recognized; 5 suspected defects were found across 2 defective images. You can continue reviewing the inspection image diagnosis results below.

pause:2s

picture1：![DJI_2025070616549.jpeg](assets/insp-expo/fb0ed493-02b3-404c-8d15-f4b173de9285.jpeg)

picture2：![DJI_20250905129875632.jpeg](assets/insp-expo/d5b5f114-1f41-46e5-b844-a566c41d039c.jpeg)

| **imageId** | **defectIndex** | **defectName** | **basis** | **recommendation** |
| --- | --- | --- | --- | --- |
| picture1 | 1 | Damaged Diode | The image shows a distinct dark spot on the solar panel. This area differs in color from the surrounding panel and appears locally discolored, which is consistent with the typical characteristics of a damaged diode. | It is recommended that on-site maintenance personnel disconnect the power to the solar panel, identify the exact location of the damaged diode, and replace it to restore normal operation of the panel. |
| picture1 | 2 | Hot Spot | The image shows an area of abnormal temperature on the surface of the PV panel. This area exhibits a significant temperature difference from the surrounding panel surface, presenting as a darkened hot spot. | It is recommended that on-site O&M personnel mark the area of the hot spot and subsequently arrange for professionals to conduct a detailed inspection to determine the cause of the hot spot and take appropriate measures. |
| picture1 | 3 | Diode Failure | The image shows a distinct dark spot on the PV panel. This area differs in color from the surrounding panel and exhibits localized darkening, consistent with the typical characteristics of diode failure. | It is recommended that on-site O&M personnel disconnect the power to the PV panel to inspect it, identify the exact location of the diode failure, and replace the damaged diode to restore normal operation of the PV panel. |
| picture2 | 1 | Diode Failure | The image shows a distinct dark spot on the PV panel. This area differs in color from the surrounding panel and exhibits localized darkening, consistent with the typical characteristics of diode failure. | It is recommended that on-site maintenance personnel perform a power-off inspection of the PV panel to identify the exact location of the diode failure and replace the damaged diode to restore normal operation of the PV panel. |
| picture2 | 2 | Damaged Diodes | The image shows a distinct dark spot on the PV panel. This area differs in color from the surrounding panels and exhibits localized darkening, which is a typical characteristic of damaged diodes. | It is recommended that on-site maintenance personnel disconnect the power supply to the PV panel, identify the exact location of the damaged diodes, and replace them to restore normal operation of the PV panel. |`,
  },
  {
    agent: 'insp',
    qZh: '分析热成像巡检图片',
    qEn: 'Analyze thermal imaging inspection images',
    matchKeys: ['缺陷', '分析', '巡检', 'inspection', 'defect', 'deficiencies', '热斑', 'hot'],
    aZh: `本次共上传 1 张巡检图片，完成识别 1 张；发现 1 处疑似缺陷，涉及 1 张缺陷图片。你可以继续查看下方巡检图片诊断结果。

pause:2s

picture1：![DJI_20250809566843513.jpeg](assets/insp-expo/cb60cdfc-a7c3-4d16-8e2a-833d88e6ad1a.jpeg)

| **图片id** | **缺陷索引** | **缺陷名称** | **描述** | **建议** |
| --- | --- | --- | --- | --- |
| picture1 | 1 | 热斑 | 在光伏板区域观察到局部发黑现象，<br>该区域与周围光伏板颜色存在明显差异，呈现热斑特征。 | 现场检查该热斑区域光伏板，<br>确认是否存在局部遮挡或电池片损坏，必要时进行更换处理。 |`,
    aEn: `A total of 1 inspection images were uploaded, and 1 images were recognized; 1 suspected defects were found across 1 defective images. You can continue reviewing the inspection image diagnosis results below.

pause:2s

picture1：![DJI_20250809566843513.jpeg](assets/insp-expo/cb60cdfc-a7c3-4d16-8e2a-833d88e6ad1a.jpeg)

| **imageId** | **defectIndex** | **defectName** | **basis** | **recommendation** |
| --- | --- | --- | --- | --- |
| picture1 | 1 | Hot Spots | Localized darkening has been observed in certain areas of the solar panels.<br>These areas exhibit a noticeable color difference from the surrounding panels, indicating the presence of hot spots. | Inspect the solar panels in the affected areas on-site<br>to determine whether there is any partial shading or cell damage, and replace the panels as necessary. |`,
  },
  {
    agent: 'insp',
    qZh: '分析线路巡检图片',
    qEn: 'Analyze line inspection images',
    matchKeys: ['缺陷', '分析', '巡检', 'inspection', 'defect', 'deficiencies'],
    aZh: `本次共上传 1 张巡检图片，完成识别 1 张；发现 0 处疑似缺陷，涉及 0 张缺陷图片。

picture1：![jdxl4.jpeg](assets/insp-expo/3a56a18f-98b1-45be-ac69-8906c6f830c3.jpeg)`,
    aEn: `A total of 1 inspection images were uploaded, and 1 images were recognized; 0 suspected defects were found across 0 defective images.

picture1：![jdxl4.jpeg](assets/insp-expo/3a56a18f-98b1-45be-ac69-8906c6f830c3.jpeg)`,
  },
];

// PV Expo (2026) · Warning Agent preset Q&A (CN+EN)
// Synced from docs/conversations/2026光伏展会预警智能体预设问答.md
const PV_EXPO_WARN_QA = [
  {
    agent: 'warn',
    qZh: '帮我查一下当前哪些组串触发了低效预警',
    qEn: 'Show me which strings are on low-efficiency warnings',
    matchKeys: ['低效', '预警', '组串', 'string', 'low-efficiency', 'warning'],
    aZh: `当前电站共计有4个组串触发了低效预警，pv7的发电效率最低，为71.9%，pv5的发电效率最高，为73.7%，其他组串的发电信息如下表所示：

| 组串编号 | 预警等级 | 实际发电量 | 理论发电量 | 发电效率 |
| --- | --- | --- | --- | --- |
| pv1 | 轻微 | 335.30kWh | 458.10kWh | 73.2% |
| pv3 | 轻微 | 338.50kWh | 470.80kWh | 71.9% |
| pv5 | 轻微 | 326.00kWh | 442.40kWh | 73.7% |
| pv7 | 轻微 | 338.70kWh | 471.10kWh | 71.9% |`,
    aEn: `Four strings here have low-efficiency alerts. PV7 has the minimum efficiency of 71.9% and PV5 the maximum of 73.7%. See the table below for details of other strings.

| String No. | Alert Level | Actual Power Generation | Theoretical Power Generation | Generation Efficiency |
| --- | --- | --- | --- | --- |
| pv1 | Mild | 335.30kWh | 458.10kWh | 73.2% |
| pv3 | Mild | 338.50kWh | 470.80kWh | 71.9% |
| pv5 | Mild | 326.00kWh | 442.40kWh | 73.7% |
| pv7 | Mild | 338.70kWh | 471.10kWh | 71.9% |`,
  },
  {
    agent: 'warn',
    qZh: '当前电站有哪些设备出现了低效预警',
    qEn: 'Which devices of this station are showing low-efficiency warnings?',
    matchKeys: ['低效', '预警', '设备', 'device', 'low-efficiency', 'warning'],
    aZh: `当前电站共计1个设备出现了低效预警，该设备的实际发电量为1338.5KWh，理论发电量为1842.50kWh，损失发电量为504.00kWh，损失百分比为27.35%。`,
    aEn: `A total of one device at the current PV station has triggered a low-efficiency alert. Its actual power generation is 1338.5 kWh, and the theoretical power generation is 1842.50 kWh. The power loss is 504.00 kWh, with a loss rate of 27.35%. `,
  },
  {
    agent: 'warn',
    qZh: '不同预警等级的发电效率是多少？',
    qEn: 'What is the generation efficiency for each alert level?',
    matchKeys: ['预警等级', '发电效率', 'mild', 'severe', 'efficiency', 'alert level'],
    aZh: `预警等级分为轻微和严重两种，发电效率在50%和80%之间是轻微低效，发电效率低于50%是严重低效。`,
    aEn: `Alert levels are divided into Mild and Severe. A generation efficiency between 50% and 80% indicates mild low efficiency, while efficiency below 50% indicates severe low efficiency.`,
  },
  {
    agent: 'warn',
    qZh: '当前电站低效最严重组串是哪一个？',
    qEn: 'Which string is the most severely affected by low efficiency here?',
    matchKeys: ['最严重', '低效', '组串', 'string', 'poorest', 'low efficiency'],
    aZh: `当前电站低效最严重的组串是逆变器A1912240659下属的pv3，这个组串的发电效率为71.9%，建议尽快安排人员检修。`,
    aEn: `PV3 connected to Inverter A1912240659 is the poorest-performing string at 71.9%. Please arrange maintenance promptly.`,
  },
];

// PV Expo (2026) · Schedule Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/2026光伏展排程智能体推荐对话.md
const PV_EXPO_SCHED_QA = [
  {
    agent: 'sched',
    qZh: '当前天气对工单处理的影响',
    qEn: 'Impact of current weather on work order processing',
    matchKeys: ['天气', 'weather', '工单', 'work order', '影响', 'impact'],
    aZh: `**【天气概况】**

* **今天：** 多云
* **明天：** 强雷阵雨
* **后天：** 局部雷阵雨

**【⏰ 最佳工作时段推荐】**

根据天气预测，为您筛选出以下最适合工作的黄金时段：

* 14:00 - 15:00
* 09:00 - 11:00

**【⚠️ 高风险预警】**

请密切注意防范恶劣天气，以下时段发生**强雷阵雨**的概率极高，建议避免户外活动或高风险作业：

* 11:00 - 13:00 以及 16:00 - 18:00`,
    aEn: `**【Weather Overview】**

* **Today:** Cloudy
* **Tomorrow:** Heavy Thunderstorm
* **After Tomorrow:** Scattered Thunderstorms

**【⏰ Recommended Work Windows】**

Based on the weather optimization matrix, the most favorable windows for operations are:

* 14:00 - 15:00
* 09:00 - 11:00

**【⚠️ High-Risk Weather Alerts】**

Severe convective weather is expected. Please suspend high-risk operations and avoid outdoor activities during these periods:

* 11:00 - 13:00 and 16:00 - 18:00`,
  },
  {
    agent: 'sched',
    qZh: '对消缺工单进行优先级排序',
    qEn: 'Prioritize defect work orders',
    matchKeys: ['优先级', 'priority', '排序', 'rank', '消缺', 'work order'],
    aZh: `| **工单编号** | **工单名称** | **工单类型** | **工单等级** | **计划开始时间** | **计划截止时间** | **电站名称** | **优先级分数** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260528090908597 | Kedah-Commercial : Off-Grid | 远程工单 | 紧急 | 2026-05-28 10:00:15 | 2026-05-31 10:00:15 | Kedah-Commercial | 150 |
| 20260526170334565 | Perak-Commercial : Hardware Error Code 308 | 设备更换 | 高 | 2026-05-31 14:02:13 | 2026-06-7 14:02:13 | Perak-Commercial | 94 |
| 20260526170333678 | Johor-Commercial : Temporary Work Order | 电流互感器 | 低 | 2026-06-1 15:22:51 | 2026-07-1 15:22:51 | Johor-Commercial | 23 |`,
    aEn: `| **Work Order No** | **Work Order Name** | **Work Order category** | **Work Order Level** | **Planned Start Time** | **Planned End Time** | **Plant Name** | **priority score** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260528090908597 | Kedah-Commercial : Off-Grid | remote_work_order | Urgent | 2026-05-28 10:00:15 | 2026-05-31 10:00:15 | Kedah-Commercial | 150 |
| 20260526170334565 | Perak-Commercial : Hardware Error Code 308 | device_replacement | High | 2026-05-31 14:02:13 | 2026-06-7 14:02:13 | Perak-Commercial | 94 |
| 20260526170333678 | Johor-Commercial : Temporary Work Order | AC - Current Transformer | Low | 2026-06-1 15:22:51 | 2026-07-1 15:22:51 | Johor-Commercial | 23 |`,
  },
  {
    agent: 'sched',
    qZh: '分析当前消缺任务是否有可顺检的巡检工单',
    qEn: 'Analyze if there are any inspection work orders that can be conveniently checked for current defect correction tasks',
    matchKeys: ['顺检', '巡检', 'inspection', '查询', 'query'],
    aZh: `| **工单编号** | **工单类型** | **开始日期** | **结束日期** | **电站名称** | **最近工单编号** | **顺检增加距离** |
| --- | --- | --- | --- | --- | --- | --- |
| XJ202604031611178379 | 周期性巡检 | 2026-04-03 | 2026-12-03 | Perak-Commercial | 20260526170334565 | 0 km |`,
    aEn: `| **Work Order No** | **Work Order category** | **Start Date** | **End Date** | **Plant Name** | **Nearst Order NO** | Increased distance |
| --- | --- | --- | --- | --- | --- | --- |
| XJ202604031611178379 | Regular Inspection | 2026-04-03 | 2026-12-03 | Perak-Commercial | 20260526170334565 | 0 km |`,
  },
  {
    agent: 'sched',
    qZh: '对当前任务进行路径规划',
    qEn: 'Path planning for the current task',
    matchKeys: ['路径', 'route', '规划', 'planning', '路线'],
    aZh: `**🗺️ 今日排班路线**

* 📊 **总计**: 12.8 km | 预计车程 23 分钟
* **[起点] 公司**

  ↓ _2.5 km · 9 分钟_

* **[第 1 站] Perak-Commercial 电站**

  工单: \`20260526170334565\` / \`XJ202604031611178379\`

  ↓ _6.5 km · 8 分钟_

* **[第 2 站] Kedah-Commercial 电站**

  工单: \`20260528090908597\`

  ↓ _3.8 km · 6 分钟_

* **[第 3 站] Johor-Commercial 电站**

  工单: \`20260526170333678\``,
    aEn: `**🗺️ Today's Route**

* 📊 **Total**: 12.8 km | Est. Drive: 23 mins
* **[Start] Company**

  ↓ _2.5 km · 9 mins_

* **[Stop 1] Perak-Commercial Station**

  WO: \`20260526170334565\` / \`XJ202604031611178379\`

  ↓ _6.5 km · 8 mins_

* **[Stop 2] Kedah-Commercial Station**

  WO: \`20260528090908597\`

  ↓ _3.8 km · 6 mins_

* **[Stop 3] Johor-Commercial Station**

  WO: \`20260526170333678\``,
  },
];

function formatLocalDateTime(d = new Date()) {
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

function buildOrderDispatchFirstAlarmAnswer(zh) {
  const start = new Date();
  const end = new Date(start);
  end.setDate(end.getDate() + 3);
  const startStr = formatLocalDateTime(start);
  const endStr = formatLocalDateTime(end);
  if (zh) {
    return `<style>
  table.pv-wo th, table.pv-wo td { vertical-align: middle; }
</style>
<table class="pv-wo">
  <tr>
    <th>工单名称</th>
    <td colspan="3">Melaka-Commercial: 绝缘阻抗低</td>
  </tr>
  <tr>
    <th>工单等级</th>
    <td>紧急</td>
    <th>工单类型</th>
    <td>* Inverter - String Inverter (Hardware)<br><br>* Device Replacement</td>
  </tr>
  <tr>
    <th>计划开始时间</th>
    <td>${startStr}</td>
    <th>计划结束时间</th>
    <td>${endStr}</td>
  </tr>
  <tr>
    <th>工单执行人</th>
    <td>iRun</td>
    <th>班组成员</th>
    <td>* rundoai<br><br>* iRun</td>
  </tr>
  <tr>
    <th colspan="4">工单描述</th>
  </tr>
  <tr>
    <td colspan="4">逆变器设备（SN：GR2479020667）长时间出现绝缘阻抗低的故障，故障代码为60014。该设备归属Melaka-Commercial。故障特征具有周期性，初步判断电缆外皮可能破损或进水，需立即检修处理；绝缘阻抗过低可能导致安全问题，建议尽快排查检修。</td>
  </tr>
</table>`;
  }
  return `<style>
  table.pv-wo th, table.pv-wo td { vertical-align: middle; }
</style>
<table class="pv-wo">
  <tr>
    <th>Work Order Name</th>
    <td colspan="3">Melaka-Commercial: Low Insulation Impedance</td>
  </tr>
  <tr>
    <th>Work Order Level</th>
    <td>URGENT</td>
    <th>Work Order Type</th>
    <td>* Inverter - String Inverter (Hardware)<br><br>* Device Replacement</td>
  </tr>
  <tr>
    <th>Planned Start Date</th>
    <td>${startStr}</td>
    <th>Planned End Date</th>
    <td>${endStr}</td>
  </tr>
  <tr>
    <th>Work Order Executor</th>
    <td>iRun</td>
    <th>Team Members</th>
    <td>* rundoai<br><br>* iRun</td>
  </tr>
  <tr>
    <th colspan="4">Work Order Description</th>
  </tr>
  <tr>
    <td colspan="4">Inverter device with serial number GR2479020667 at site Melaka-Commercial triggered a Low Insulation Impedance alarm (Fault code: 60014). There is a persistent problem, and dispatch for further investigation is recommended.</td>
  </tr>
</table>`;
}

// PV Expo (2026) · Work Order Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/2026光伏展工单智能体推荐对话.md
const PV_EXPO_ORDER_QA = [
  {
    agent: 'order',
    qZh: '查询近期未处理告警',
    qEn: 'Query recent unprocessed alarms',
    matchKeys: ['未处理', '告警', 'unprocessed', 'alarm', 'Melaka-Commercial', '60014', '60006'],
    aZh: `| **序号** | **电站名称** | **电站地址** | **设备名称** | **设备SN** | **告警大类** | **告警小类** | **故障码** | **告警时间** | **告警持续时长** | **工单创建截止时间** | **告警状态** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Melaka-Commercial | Melaka | Inverter(COM1-1) | GR2479020667 | 逆变器故障 | 绝缘阻抗低 | 60014 | 2026-6-1 16:05:13 | 1天1小时29分钟 | 2026-6-3 16:05:13 | 告警中 |
| 2 | Melaka-Commercial | Melaka | Inverter(COM1-1) | GR2479020689 | 逆变器故障 | 漏电流保护 | 60006 | 2026-06-2 9:00:20 | 34分钟 | 2026-06-4 9:00:20 | 告警中 |`,
    aEn: `| **No.** | **Plant Name** | **Plant Address** | **Device Name** | **Device SN** | **Alarm Categories** | **Alarm Subcategories** | **Fault Code** | **Alarm Time** | **Alarm Duration** | **Ticket Create Deadline** | **Alarm Status** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Melaka-Commercial | Melaka | Inverter(COM1-1) | GR2479020667 | Inverter Fault | Low Insulation Impedance | 60014 | 2026-6-1 16:05:13 | 1d 1h 59min | 2026-6-3 16:05:13 | Active |
| 2 | Melaka-Commercial | Melaka | Inverter(COM1-2) | GR2479020689 | Inverter Fault | Leakage Current Protection | 60006 | 2026-06-2 9:00:20 | 34min | 2026-06-4 9:00:20 | Active |`,
  },
  {
    agent: 'order',
    qZh: '针对第一条告警信息进行派单',
    qEn: 'Dispatch orders for the first alarm message',
    matchKeys: ['派单', 'dispatch', '60014', '绝缘阻抗低', 'Low Insulation Impedance'],
    dynamic: 'order_dispatch_first_alarm',
  },
  {
    agent: 'order',
    qZh: '查询近期待处理工单',
    qEn: 'Query recent pending work orders',
    matchKeys: ['待处理', 'pending', '工单', 'work order', 'Melaka-Commercial'],
    aZh: `| **序号** | **电站名称** | **告警状态** | **是否逾期** | **工单编号** | **工单名称** | **工单来源** | **工单等级** | **工单状态** | **计划开始时间** | **反馈截止时间** | **当前执行人** | **创建时间** | **创建人** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Melaka-Commercial | 告警中 | 未逾期 | 20260528090908597 | Melaka-Commercial : 硬件错误代码308 | 设备告警 | 高 | 待处理 | 2026-05-28 10:00:15 | 2026-06-05 09:09:09 | iRun | 2026-05-28 09:09:09 | rundoai |
| 2 | Melaka-Commercial | 告警中 | 未逾期 | 20260526170334565 | Melaka-Commercial : 临时工单 | 临时工单 | 中 | 待处理 | 2026-06-01 14:00:15 | 2026-06-15 13:06:23 | iRun | 2026-05-30 09:09:09 | rundoai |`,
    aEn: `| **No.** | **Plant Name** | **Alarm Status** | **Overdue Status** | **Work Order No** | **Work Order Name** | **Work Order Source** | **Work Order Level** | **Work Order Status** | **Planned Start Time** | **Response Deadline** | **Executor** | **Created Date** | **Creator** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Melaka-Commercial | Active | Not Overdue | 20260528090908597 | Melaka-Commercial : Hardware Error Code 308 | Device Alarm | High | Pending | 2026-05-28 10:00:15 | 2026-06-05 09:09:09 | iRun | 2026-05-28 09:09:09 | rundoai |
| 2 | Melaka-Commercial | Active | Not Overdue | 20260526170334565 | Melaka-Commercial : Temporary Work Order | Temporary Work Order | Medium | Pending | 2026-06-01 14:00:15 | 2026-06-15 13:06:23 | iRun | 2026-05-30 09:09:09 | rundoai |`,
  },
  {
    agent: 'order',
    qZh: '转派第一条工单',
    qEn: 'Reassign the first work order',
    matchKeys: ['转派', 'transfer', 'rundoai', '20260528090908597'],
    aZh: `<table class="pv-wo">
  <tr>
    <th>工单名称</th>
    <td>Melaka-Commercial : 硬件错误代码308</td>
    <th>工单编号</th>
    <td>20260528090908597</td>
  </tr>
  <tr>
    <th>原计划处理时间</th>
    <td>2026-05-28 10:00:15</td>
    <th>工单处理时间</th>
    <td>2026-06-07 16:11:12</td>
  </tr>
  <tr>
    <th>工单执行人</th>
    <td>iRun -> rundoai</td>
    <th>现场负责人</th>
    <td>iRun -> rundoai</td>
  </tr>
  <tr>
    <th>验收人员</th>
    <td>yanshou -> yanshou</td>
    <th>班组成员</th>
    <td>iRun<br>rundoai</td>
  </tr>
  <tr>
    <th colspan="4">工作要求</th>
  </tr>
  <tr>
    <td colspan="4">了解现场实际情况，检查故障具体原因并维修，保证设备正常运作</td>
  </tr>
</table>`,
    aEn: `<table class="pv-wo">
  <tr>
    <th>Work Order Name</th>
    <td>Melaka-Commercial : Hardware Error Code 308</td>
    <th>Work Order No</th>
    <td>20260528090908597</td>
  </tr>
  <tr>
    <th>Planned Processing Time</th>
    <td>2026-05-28 10:00:15</td>
    <th>Processing Time</th>
    <td>2026-06-07 16:11:12</td>
  </tr>
  <tr>
    <th>Work Order Executor</th>
    <td>iRun -> rundoai</td>
    <th>Technical Team Lead</th>
    <td>iRun -> rundoai</td>
  </tr>
  <tr>
    <th>Inspection Officer</th>
    <td>yanshou -> yanshou</td>
    <th>Team Members</th>
    <td>iRun<br>rundoai</td>
  </tr>
  <tr>
    <th colspan="4">Work Requirements</th>
  </tr>
  <tr>
    <td colspan="4">Understand the actual situation of the site, check the specific causes of failure and repair to ensure the normal operation of the equipment</td>
  </tr>
</table>`,
  },
];

// PV Expo (2026) · Safety Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/安全智能体问答.md
const PV_EXPO_SAFE_QA = [
  {
    agent: 'safe',
    qZh: '回溯历史火灾告警事件',
    qEn: 'Reviewing historical fire alarm incidents',
    matchKeys: ['Johor-Commercial', 'Johor', '10月28', 'October 28', '2025-10-28', '安全风险'],
    aZh: `

**告警对象：** Johor-Commercial

**告警日期：** 2025年10月28日 11:40:00

---

## 一、 核心评估结论与风险评级

| 评估项目 | 状态/数据 | 规则匹配与评估结果 |
| --- | --- | --- |
| **最终判定级别** | 🚨 **火灾预警 (fire\\_alert)** | 满足“类别数≥3”、“电流降至零”、“电压突增≥10%”的所有火灾核心判据。 |
| **整体置信度评分** | **100%** | 规则证据 (100%)、可视化证据 (100%)、告警模式 (100%) 完全吻合。 |
| **风险综合评估** | **极高风险** | 系统正经历严重的电气故障（漏电、绝缘失效、反接并存），导致全系统电流瞬时崩溃与电压飙升，存在**极高的火灾隐患**。 |

---

## 二、 诊断步骤与详细数据分析

### 步骤 1：告警数据调取 (Alarm Data Retrieval)

在 \`2025-10-28 01:40:00\` 至 \`16:40:00\` 窗口内，共记录到 **19次** 告警事件，涵盖 **3个** 关键危险类别：

1.  **漏电流 (Leakage):** 发生 1 次（11:26:50），表明存在异常对地通路。
    
2.  **绝缘故障 (Insulation):** 发生 2 次（11:32:15 - 11:47:36），表明绝缘性能发生退化。
    
3.  **直流反接 (DC Reverse):** 发生 16 次（11:49:31 - 13:22:36），频率极高且持续时间长。
    

> 💡 **时序分析特征：** 绝缘告警与直流反接告警在时间上存在严重重叠，表明设备内部可能已经发生物理损坏或性能严重退化。

### 步骤 2：故障类别协同判定 (Category Judgment)

多重故障呈现明显的恶性协同效应：

*   **水分侵入/接线损坏** $\\rightarrow$ 导致**漏电流**。
    
*   **紫外线照射/机械损伤** $\\rightarrow$ 导致**绝缘故障**。
    
*   **安装错误/组件击穿** $\\rightarrow$ 导致**直流反接**。
    
*   **恶性循环：** 绝缘退化加剧漏电流，最终引发组串整体的电气崩溃。
    

### 步骤 3 & 4：电气数据异常检测 (Electrical Data)

通过对比正常基线窗口与故障对比窗口，系统呈现出全系统性（非单通道）的剧烈异常：

*   **电流突降检测 (Current Drop):** \\* **基线状态：** 各通道电流分布均匀，稳定在 **~10.6A**。
    
*   **故障状态：** 电流瞬间急剧下降，大多数通道接近零（其中通道 \`**I3**\` **突变为 0.00A**，触发完全开路/保护跳闸状态），其余通道均 \`< 1A\`。
    
*   **电压突增检测 (Voltage Surge):**
    
*   **基线状态：** 稳定在 **~445V**。
    
*   **故障状态：** 出现全系统性电压飙升，范围达 \`488.6V\` 至 \`518.4V\`。
    
*   **突增幅度：** 多个通道突增比例**均超过 10% 阈值**。其中最高突增通道为 \`**U9**\` **(+16.3%)**。其他通道：\`U1\` (+13.9%)、\`U3\` (+13.2%)、\`U5\` (+10.6%)、\`U7\` (+15.4%)。
    

---

## 三、 时序图表与可视化特征分析 (Time-Series Analysis)

1.  **前置趋势：** 在 \`11:40:00\` 故障发生前，所有组串电气表现稳定，无持续下降或突变。
    
2.  **瞬时崩溃：** 在 \`11:40:00\` 告警瞬间，所有组串电流**对称且同步地瞬间降至零**，不存在任何阶梯式或部分衰减过程。
    
3.  **同步突增：** 电压突增（≥10%）与电流归零、告警信号同步发生，过程陡峭且持续，体现出因负载电流彻底消失导致的**完全开路情景**。
    
4.  **无恢复迹象：** 时序数据中未观察到任何振荡或阶段性自愈特征，属于不可逆的系统性物理故障跳闸。
    

---

## 四、 运维行动建议与预防监控

### 1. 紧急维护行动建议 🛠️

*   🔴 **\\[优先级：极高\\]** 立即对所有直流组串进行彻底停电检查，排查并定位绝缘损坏点和极性反接点。
    
*   🔴 **\\[优先级：极高\\]** 立即更换在检查中发现的所有发生熔融、击穿或损坏的故障组件及接插件。
    
*   🟡 **\\[优先级：中等\\]** 全面检查并升级现场接地系统，确保漏电保护机制能够有效响应。
    

### 2. 预防性实时监控策略 👁️

*   **电压突增实时告警：** 在监控系统中针对电压突增 $\\ge 10\\%$ 部署秒级实时监控与拦截。
    
*   **绝缘电阻持续跟踪：** 引入绝缘电阻（Riso）趋势分析，在绝缘性能发生恶化早期进行预警，做到防患于未“燃”。
    
*   **多组串联动跳闸监控：** 将“多组串同时出现电流塌陷”设为系统最高等级的早期火灾预警触发器。`,
    aEn: `
## 📋 Metadata & System Context

*   **Alarm Target:** Johor-Commercial
    
*   **Trigger Alarm Time:** 2025-10-28 11:40:00
    

---

## 🚨 Executive Verdict

| Evaluation Metric | Status / Value | Rule-Engine Backtrack Verification |
| --- | --- | --- |
| **Requested Alert Type** | \`risk_warning\` | User / Initial configuration status |
| **Final Evaluated Verdict** | 🔥 \`**fire_alert**\` | **CRITICAL OVERRIDE:** Final risk state satisfies all severe parameters. |
| **Total Confidence Score** | **100%** | Full alignment on Rule Evidence (100%), Visual Evidence (100%), and Alarm Patterns (100%). |

---

## 🔍 Diagnostic Step-by-Step Breakdown

### Step 1: Alarm Data Retrieval

A total of **19 electrical events** spanning **3 distinct critical categories** were flagged during the query period:

1.  **Leakage Current (**\`**leakage**\`**):** Occurred briefly once at \`11:26:50\`.
    
2.  **Insulation Fault (**\`**insulation**\`**):** Persisted continuously between \`11:32:15\` and \`11:47:36\`.
    
3.  **DC Reversal (**\`**dc_reverse**\`**):** Highly frequent and prolonged across 16 separate events from \`11:49:31\` to \`13:22:36\`.
    

> **Temporal Overlap Note:** The insulation degradation and DC polarity reversal alarms overlap heavily in time, proving systemic structural damage rather than isolated transient errors.

---

### Step 2: Fault Cascade & Category Judgment

*   **Leakage Current:** Indicates an abnormal path traveling directly to the ground layer—typically caused by moisture ingress or exposed/damaged wiring insulation.
    
*   **Insulation Fault:** Signifies physical breakdown of dielectric protection due to aggressive environmental stressors (e.g., severe UV exposure or mechanical friction/strains).
    
*   **DC Reversal:** Points directly to a structural inverted polarity connection originating from field-level installation errors or component puncture failures.
    
*   **Co-escalation Risk:** These components act as a domino effect. Insulation breakdown leads directly to escalating ground leakages, lowering resistance until cross-string shorts trigger wide-area DC reversals.
    

---

### Step 3: Electrical Core Data Extraction

Comparative matrix evaluating pre-fault baseline performance metrics against current fault-state samples:

#### 📊 Current Analytics ($I$ in Amperes)

| Channel | Baseline Window (\`11:26:50\`) | Fault Sample Window (\`11:32:15\`) | Delta / Evaluation |
| --- | --- | --- | --- |
| \`**I1**\` |  |  | Complete collapse (<br>) |
| \`**I3**\` |  | \`**0.000 A**\` | 🛑 **Drop-to-Zero Triggered** |
| \`**I5**\` |  |  | Complete collapse (<br>) |
| \`**I7**\` |  |  | Complete collapse (<br>) |
| \`**I9**\` |  |  | Complete collapse (<br>) |

#### ⚡ Voltage Analytics ($U$ in Volts)

| Channel | Baseline Window (\`11:26:50\`) | Fault Sample Window (\`11:32:15\`) | Surge Percentage (<br>) |
| --- | --- | --- | --- |
| \`**U1**\` |  |  | 📈 <br>_(Exceeds Threshold)_ |
| \`**U3**\` |  |  | 📈 <br>_(Exceeds Threshold)_ |
| \`**U5**\` |  |  | 📈 <br>_(Exceeds Threshold)_ |
| \`**U7**\` |  |  | 📈 <br>_(Exceeds Threshold)_ |
| \`**U9**\` |  |  | 🔥 <br>**(Peak Surge)** |

---

### Step 4 & 5: Electrical Anomaly Rules Validation

*   **Current Drop Rule:** **\\[TRUE\\]** Channel \`I3\` dropped instantly to $0.0\\text{ A}$, proving a total break in loop continuity. This points to structural isolation, line fuses blowing, or high-side protection tripping.
    
*   **Voltage Surge Rule:** **\\[TRUE\\]** Multi-channel voltage surges synchronously blew past the critical $+10.0\\%$ threshold limit. This uniform voltage behavior confirms a sudden open-circuit event across the system. The missing load caused the strings to jump up to their Open Circuit Voltage ($V\\_{oc}$) values.
    

---

### Step 6: Time-Series Trend & Visual Analytics

1.  **Pre-Alarm Profile:** Prior to \`11:40:00\`, all DC strings were highly stable with normal daily solar irradiance profiles; no creeping performance decline was present.
    
2.  **Transient Behavior:** Exactly at \`11:40:00\`, the current profiles collapsed instantly down to base values without any gradual step-wise degradation phases.
    
3.  **Voltage Synchronization:** The voltage spikes ($\\ge 10\\%$) occurred perfectly in step with the current collapse across all arrays.
    
4.  **Recovery Analysis:** There are zero signs of oscillation, transient hunting, or automated insulation self-recovery. The fault signature points to permanent physical damage.
    

---

## 📈 Final Comprehensive Assessment & Plan of Action

### 1. Risk Evaluation

The combination of simultaneous leakage, insulation failure, and DC reversal metrics indicates a major high-temperature electrical arc or terminal short-circuit risk inside the combiner box or string inverters. **High fire risk is currently active.**

### 2. Immediate Field Maintenance Protocol

*   🛠️ **\\[PRIORITY: HIGH\\]** Initiate an immediate forced shutdown of the affected DC arrays. Perform physical isolation and trace insulation boundaries across all strings to pinpoint line-to-ground faults.
    
*   🛠️ **\\[PRIORITY: HIGH\\]** Inspect all string connectors and combiner ports for physical heat deformation, melting, or reversed polarities. Replace all compromised sub-components.
    
*   🛠️ **\\[PRIORITY: MEDIUM\\]** Megger-test and audit the central grounding network grid to guarantee leakage safety trips clear effectively in the future.
    

### 3. Preventative System Adjustments

*   Set up automated SCADA warning thresholds to capture any system-wide DC voltage spikes $\\ge 10\\%$.
    
*   Incorporate automated daily pre-start insulation resistance ($R\\_{iso}$) profiling to flag failing lines before daylight generation windows begin.
    
*   Configure logic rules to monitor and alert on simultaneous multi-string current drops to optimize early fire avoidance.`,
  },
  {
    agent: 'safe',
    qZh: '查看历史火灾隐患预警',
    qEn: 'View historical fire hazard warnings',
    matchKeys: ['Johor-Commercial', 'Johor', '6月6', 'June 6', '2025-06-06', '安全风险'],
    aZh: `# 
**基础信息：**

*   **站点名称:** Johor-Commercial
    
*   **预警触发时间:** 2025-06-06 13:40:00
    

---

## 🚨 诊断结论与核心评级

| 诊断项目 | 分析结果 | 规则匹配说明 |
| --- | --- | --- |
| **最终判定结果** | ⚠️ **风险预警 (risk\\_warning)** | 判定结果与原始触发的告警类型**完全相符**。 |
| **综合置信度评分** | **95%** | 规则证据 (100%)、可视化证据 (95%)、告警模式权重 (90%)。 |
| **核心触发条件** | **已满足**：检测到 <br>个告警类别、电流降至零、电压突增 <br>。 |  |

---

## 🔍 逐项步骤诊断分析

### 步骤 1 & 2：告警数据获取与故障判定

在 \`2025-06-06 03:40:00\` 至 \`18:40:00\` 期间，系统共记录到 **11 次** 告警事件，涉及 **2 个** 不同的危险类别：

1.  **漏电流 (Leakage Current):** 发生 **3次**（首次：12:08:46，末次：15:29:42）。
    
2.  **绝缘故障 (Insulation Fault):** 发生 **8次**（首次：13:35:16，末次：18:27:31）。
    

**协同恶化特征：** 告警具有明显的先后顺序，绝缘故障在漏电流之后触发。这表明导致漏电的水分可能在直流电路中持续加剧了绝缘性能的劣化，引发了双重故障的协同升级。

---

### 步骤 3：电气数据特征对比

对比故障前后的电气特性，系统呈现出全系统性（非单通道选择性）的剧烈异常：

*   **基线窗口（正常状态参考 - 12:08:46）：**
    
*   电流：数值范围为 \`5.90A\` 至 \`12.67A\`，各通道间存在正常波动。
    
*   电压：数值范围为 \`555.2V\` 至 \`599.0V\`，总体保持稳定。
    
*   **对比窗口（故障状态采样 - 13:35:16）：**
    
*   电流：**全系统范围内瞬间崩塌降至 0.00A**。
    
*   电压：**全系统范围内明显飙升**，范围上移至 \`637.1V\` 至 \`680.4V\`。
    

---

### 步骤 4 & 5：电流下降与电压突增检测

*   **电流突降：** 监测通道 \`I1, I3, I5, I7, I10, I11, I14, I15, I17\` 的电流**同时降至 0.00A**。表明系统存在完全开路情况，可能是保护断路器跳闸或组串发生物理断开。
    
*   **电压突增：** 所有监测通道的电压突增幅度均超过 **10.0%** 的安全阈值（突增范围在 \`+13.5%\` 至 \`+15.4%\` 之间），其中 \`**U5**\` **通道突增幅度最高（达 +15.4%）**。这符合无负载电流时，组串电压飙升至开路电压的典型特征。
    

---

### 步骤 6：时序图表与可视化特征分析

1.  **告警前趋势：** 稳定，所有组串均维持正常的轻微波动。
    
2.  **告警后行为：** 所有组串电流呈现**突发性、同步性**断崖式跌落至零，无阶梯式衰减。
    
3.  **电压随动：** 告警线过后，电压立即同步出现 $\\ge 10\\%$ 的剧烈突增，通道间无延迟响应或部分响应，与规则引擎信号高度吻合。
    
4.  **恢复特征：** 故障发生后**无任何震荡或阶段性自愈恢复**迹象，属于不可逆的硬故障跳闸。
    

---

## 🛠️ 运维与预防性操作建议

### 1. 紧急维护行动 🔴

*   **\\[优先级：高\\]** 立即组织现场对所有直流组串进行全面排查，重点查找水分侵入点、绝缘老化劣化或漏电路径的物理迹象。
    
*   **\\[优先级：高\\]** 开展详细的电气连续性测试与耐压测试，精准识别并定位潜在的接地故障点。
    
*   **\\[优先级：中\\]** 检查并优化系统的保护继电器与断路器设定参数，确保系统在发生快速故障时能安全隔离。
    

### 2. 预防性监测策略 👁️

*   **秒级电压突增监控：** 在管理系统中上线针对电压突增 $\\ge 10\\%$ 的实时告警机制。
    
*   **绝缘电阻趋势跟踪：** 引入在线绝缘电阻（Riso）持续跟踪，在阻值低于预设安全阈值时提前发出预警，将风险消灭在萌芽状态。
    
*   **多通道联动跌落告警：** 将“多通道同步电流降至零”设为系统重大电气故障的早期核心预警指标。`,
    aEn: `# Plant Risk Analysis & Backtrack Diagnostic Report

## 
*   **Siten ame:** Johor-Commercial
    
*   Triggered Warning Time: 2025-06-06 13:40:00
    

---

## 🚨 Executive Verdict & Rules Matrix

| Evaluation Parameter | Analysis Output | Status & Criteria |
| --- | --- | --- |
| **Requested Alert Type** | \`risk_warning\` | Initial user request classification |
| **Final Evaluated Verdict** | ⚠️ \`**risk_warning**\` | **MATCHED:** Conforms precisely to rule engine triggers. |
| **Total Confidence Score** | **95%** | Rule Evidence: 100% |
| **Rule Fulfillment Status** | **Fulfills:** <br>alarm types + current collapse + voltage surge | ❌ **Does Not Fulfill:** <br>alarm categories (retains **Risk Warning** status instead of elevating to **Fire Alert**). |

---

## 🔍 Detailed Diagnostic Step Analysis

### Step 1 & 2: Alarm Data Retrieval & Category Fault Cascade

During the evaluation window (\`03:40:00\` to \`18:40:00\`), **11 distinct electrical events** occurred, falling into **2 active hazard categories**:

1.  **Leakage Current:** 3 events logged between \`12:08:46\` and \`15:29:42\`.
    

*   _Root Cause Analysis:_ Points to an abnormal path established to ground. Typically triggered by moisture ingress or physical breakdown in external cable jackets.
    

1.  **Insulation Fault:** 8 events logged between \`13:35:16\` and \`18:27:31\`.
    

*   _Root Cause Analysis:_ Signifies a drop in dielectric strength, typically brought on by aging components or severe environmental stress.
    

> 💡 **Fault Progression Note:** The alarms were sequential—insulation breakdown followed the initial leakage warnings. This confirms that systemic moisture ingress progressively degraded the system's insulation layer over time, escalating into dual-circuit distress.

---

### Step 3: Electrical Core Data Extraction

A comparative evaluation of the array's behavior from pre-fault baseline states to the immediate system shutdown moment:

#### 📊 Current Metrics ($I$ in Amperes)

| Channel | Baseline Window (\`12:08:46\`) | Fault Window (\`13:35:16\`) | Status / Delta Evaluation |
| --- | --- | --- | --- |
| \`**I1**\` |  |  | 🚫 Synchronized System Drop |
| \`**I3**\` |  |  | 🚫 Synchronized System Drop |
| \`**I5**\` |  |  | 🚫 Synchronized System Drop |
| \`**I7**\` |  |  | 🚫 Synchronized System Drop |
| \`**I10**\` |  |  | 🚫 Synchronized System Drop |
| \`**I11**\` |  |  | 🚫 Synchronized System Drop |
| \`**I14**\` |  |  | 🚫 Synchronized System Drop |
| \`**I15**\` |  |  | 🚫 Synchronized System Drop |
| \`**I17**\` |  |  | 🚫 Synchronized System Drop |

#### ⚡ Voltage Metrics ($U$ in Volts)

| Channel | Baseline Window (\`12:08:46\`) | Fault Window (\`13:35:16\`) | Surge Percentage (<br>) |
| --- | --- | --- | --- |
| \`**U1**\` |  |  | 📈 |
| \`**U3**\` |  |  | 📈 |
| \`**U5**\` |  |  | 🔥 <br>**(Peak Surge)** |
| \`**U7**\` |  |  | 📈 |
| \`**U10**\` |  |  | 📈 |
| \`**U11**\` |  |  | 📈 |
| \`**U14**\` |  |  | 📈 |
| \`**U15**\` |  |  | 📈 |
| \`**U17**\` |  |  | 📈 |

---

### Step 4 & 5: Rule Engine Anomaly Validation

*   **Current Drop Rule:** **\\[TRUE\\]** Every active channel (\`I1\` through \`I17\`) simultaneously collapsed to $0.00\\text{ A}$. This uniform drop diagnoses an open-circuit state across the plant, confirming a full protection trip rather than individual string degradation.
    
*   **Voltage Surge Rule:** **\\[TRUE\\]** All monitoring channels experienced a synchronous voltage surge, ranging between $+13.5\\%$ and $+15.4\\%$ (with \`U5\` peaking at $+15.4\\%$). This confirms a complete loss of load; with zero current flowing, string voltages immediately rose to Open Circuit Voltage ($V\\_{oc}$).
    

---

### Step 6: Time-Series Trend & Visual Analytics

1.  **Pre-Alarm Phase:** All DC arrays exhibited stable, normal current generation profiles with standard atmospheric variations.
    
2.  **Transient Moment:** At the point of the trip, current profiles plunged to absolute zero instantaneously. No progressive step-wise decay or partial string attenuation was found.
    
3.  **Voltage Response:** The $\\ge 10\\%$ voltage surge occurred precisely alongside the drop to zero, affecting all lines simultaneously with zero latency.
    
4.  **Post-Event State:** No tracking oscillations or recovery attempts were visible, establishing that the safety system successfully disconnected the hard fault.
    

---

## 🛠️ Field Action Plan & Maintenance Protocols

### 1. Corrective Maintenance Actions

*   🔴 **\\[PRIORITY: HIGH\\]** Conduct a physical, line-by-line inspection of all DC strings to trace moisture ingress points, insulation skin tears, or paths leaking directly to the grounding structure.
    
*   🔴 **\\[PRIORITY: HIGH\\]** Execute a comprehensive insulation resistance (Megger) and continuity test across the entire array to isolate the physical grounding fault.
    
*   🟡 **\\[PRIORITY: MEDIUM\\]** Audit all DC protective breaker and relay configurations to verify that their parameters match optimal safety margins for rapid fault isolation.
    

### 2. Preventive SCADA Optimization Strategy

*   Integrate real-time, high-priority automated alerts when system-wide DC voltage spikes exceed $+10\\%$.
    
*   Enforce automated daily pre-startup insulation resistance monitoring routines to intercept deteriorating array safety parameters prior to grid connection.
    
*   Configure cross-channel logic rules to treat concurrent, multi-string current drops as an early warning signature for major electrical plant faults.`,
  },
];

// PV Expo (2026) · Diagnosis Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/2026光伏展诊断智能体推荐对话.md
const PV_EXPO_DIAG_QA = [
  {
    agent: 'diag',
    qZh: '逆变器报2034故障',
    qEn: 'Inverter reports fault code 2034',
    matchKeys: ['2034', '电网过压', '过压', 'fault code 2034', 'overvoltage', 'Grid Overvoltage'],
    aZh: `节点名称: 电网过压 相关代码: 2034

### 告警原因

电网电压高于允许范围，或者高压持续时间超过高电压穿越设定值。

### 修复建议

1.  如果偶然出现
    
    *   可能是电网短时间异常，设备在检测到电网正常后会恢复正常工作，不需要人工干预。
        
2.  如果频繁出现
    
    *   检查电网电压是否在允许范围内。如果超出允许范围，请联系当地电力运营商处理。
        
    *   即使电网电压在允许范围内，也需要在征得当地电力运营商同意后，调整电网过压保护点。
        
3.  检查电网电压峰值
    
    *   如果频繁出现且长时间无法恢复，请联系电网运营商处理。`,
    aEn: `Node Name: Grid Overvoltage Related Code: 2034

### Alarm Cause

Grid voltage is higher than the allowable range, or the high voltage duration exceeds the high voltage ride-through setting.

### Repair Suggestions

1.  If it occurs occasionally
    
    *   It may be a short-term grid anomaly. The device will resume normal operation after detecting that the grid is normal, without manual intervention.
        
2.  If it occurs frequently:
    
    *   Check if the grid voltage is within the allowable range. If it exceeds the allowable range, please contact your local power operator.
        
    *   Even if the grid voltage is within the allowable range, you need to adjust the grid overvoltage protection point with the consent of your local power operator.
        
3.  Check the grid voltage peak value
    
    *   If it occurs frequently and cannot be restored for a long time, please contact your grid operator.`,
  },
  {
    agent: 'diag',
    qZh: '数采装置异常',
    qEn: 'Data Acquisition Device Abnormality',
    matchKeys: ['数采', '数据采集', 'data acquisition', 'Data Acquisition'],
    aZh: `节点名称: 数采装置不正常

### 处理步骤

1.  穿戴绝缘手套，关闭逆变器直流与交流电源
    
    *   找到数据采集器（通常为独立模块或集成在逆变器侧面）。
        
    *   断开其独立供电插头或后备电源（若有）。
        
2.  等待30秒后重新通电
    
    *   观察数采指示灯（如网络信号灯、电源灯）是否恢复正常闪烁。
        
3.  检查数采通讯线连接
    
    *   若数采仍未恢复正常，检查数采通讯线（网线/RS485/4G天线）连接是否松动或氧化。
        
    *   重新插拔接头并清理触点。
        
4.  重启逆变器及监控平台
    
    *   若数据仍未恢复，联系厂家提供数采配置参数或远程复位。
        
    *   同时，同步记录数采型号及故障时间，避免自行拆机。
        

### 注意事项

*   **安全第一**：操作前务必穿戴绝缘手套，确保人身安全。
    
*   **记录细节**：在处理过程中，记录数采型号及故障时间，以便后续排查或联系厂家技术支持。
    
*   **避免自行拆机**：除非专业人员指导，否则请勿擅自拆卸设备内部组件。`,
    aEn: `Node Name: Data Acquisition Device Malfunction

### Troubleshooting Steps

1.  Wear insulated gloves and turn off the inverter's DC and AC power supplies.
    
    *   Locate the data acquisition device (usually a standalone module or integrated on the side of the inverter).
        
    *   Disconnect its independent power supply plug or backup power supply (if available).
        
2.  Wait 30 seconds and then power on again.
    
    *   Observe whether the data acquisition indicator lights (such as network signal light, power light) resume normal flashing.
        
3.  Check the data acquisition communication cable connection.
    
    *   If the data acquisition still does not return to normal, check whether the data acquisition communication cable (network cable/RS485/4G antenna) connection is loose or oxidized.
        
    *   Re-plug the connector and clean the contacts.
        
4.  Restart the inverter and monitoring platform.
    
    *   If the data still does not return to normal, contact the manufacturer for data acquisition configuration parameters or remote reset.
        
    *   Simultaneously, record the data acquisition model and the time of failure to avoid self-disassembly.
        

### Precautions

*   **Safety First**: Always wear insulated gloves before operation to ensure personal safety.
    
*   **Record Details**: During the process, record the data acquisition model and the time of failure for subsequent troubleshooting or contacting the manufacturer's technical support.
    
*   **Avoid Self-Disassembly**: Unless guided by a professional, do not disassemble the internal components of the equipment.`,
  },
  {
    agent: 'diag',
    qZh: '逆变器绝缘电阻低怎么处理',
    qEn: 'How to handle low inverter insulation resistance?',
    matchKeys: ['绝缘电阻', '绝缘', 'insulation resistance', 'insulation'],
    aZh: `根据您描述的问题"逆变器绝缘电阻低怎么处理"，我们从历史案例库中找到了一个高度相似的已解决案例。以下是该案例的摘要和详细解决方案：

### 逆变器绝缘电阻低故障的原因

1.  外部因素：
    
    *   光伏组串直流线路接地或对地绝缘阻抗偏低。
        
    *   电缆绝缘层破损、接头浸水或与支架短接。
        
    *   施工不当导致线缆裸露部分接触金属支架。
        
    *   小动物啃咬或环境潮湿（如积水、冻雨）导致绝缘性能下降。
        
2.  逆变器内部因素：
    
    *   逆变器内部连接线破损与外壳接触。
        
    *   绝缘阻抗检测板或采样回路异常。
        
    *   转接板、主控板电路故障导致误报警。
        
3.  设备老化：
    
    *   长期运行后电缆绝缘层老化、龟裂。
        
    *   直流接头密封失效导致进水。
        

### 处理措施

1.  故障排查方法：
    
    *   分段检测法：断开逆变器所有组串输入，逐一接入并观察绝缘电阻值变化，定位故障支路。
        
    *   绝缘测试法：使用绝缘电阻表逐串测量正负极对地绝缘电阻，需大于逆变器阈值（通常≥1MΩ）。
        
2.  针对性维修：
    
    *   更换破损电缆或重新包扎绝缘层。
        
    *   修复浸水接头，检查MC4插头密封性。
        
    *   若逆变器内部线路接地，需更换连接线或联系厂家检修。
        
3.  日常预防：
    
    *   定期巡检线缆及接头，确保无裸露、破损。
        
    *   保持设备周边干燥清洁，避免积水。
        
    *   防护小动物入侵（如封堵电缆孔洞）。
        

### 运维建议

*   **周期性检查**：雨季前加强绝缘测试。
    
*   **设备防护**：高温高湿环境选用更高防护等级（如IP65）的逆变器。
    
*   **记录分析**：建立故障档案，统计高频故障点以优化维护策略。
    

希望以上内容能帮助您有效解决逆变器绝缘电阻低的问题！如有进一步疑问，请随时联系我们。祝工作顺利！`,
    aEn: `Based on your question "How to handle low inverter insulation resistance?", we found a highly similar resolved case in our historical case database. Below is a summary of the case and a detailed solution:

### Causes of Low Inverter Insulation Resistance Faults

1.  External Factors:
    
    *   Low DC line grounding or low insulation resistance to ground in the photovoltaic string.
        
    *   Damaged cable insulation, water-damaged joints, or short circuits with the support.
        
    *   Improper construction causing exposed cable sections to contact the metal support.
        
    *   Animal bites or humid environments (such as standing water or freezing rain) leading to decreased insulation performance.
        
2.  Internal Inverter Factors:
    
    *   Damaged internal inverter wiring contacting the casing.
        
    *   Abnormal insulation resistance detection board or sampling circuit.
        
    *   False alarms caused by faulty adapter board or main control board circuits.
        
3.  Equipment Aging:
    
    *   Aging and cracking of cable insulation after long-term operation.
        
    *   Water ingress due to failed DC connector seals.
        

### Troubleshooting Measures

1.  Troubleshooting Methods:
    
    *   Segmented Testing Method: Disconnect all inverter string inputs, connect them one by one, and observe the change in insulation resistance value to locate the faulty branch.
        
    *   Insulation Testing Method: Use an insulation resistance meter to measure the insulation resistance to ground of each string, both positive and negative. It must be greater than the inverter's threshold (usually ≥1MΩ).
        
2.  Targeted Repairs:
    
    *   Replace damaged cables or re-insulate them.
        
    *   Repair water-damaged connectors and check the sealing of the MC4 plug.
        
    *   If the inverter's internal wiring is grounded, replace the connecting wire or contact the manufacturer for repair.
        
3.  Daily Prevention:
    
    *   Regularly inspect cables and connectors to ensure there are no exposed or damaged cables.
        
    *   Keep the area around the equipment dry and clean, avoiding water accumulation.
        
    *   Protect against small animals (e.g., sealing cable holes).
        

### Maintenance Recommendations

*   **Periodic Inspection**: Strengthen insulation testing before the rainy season.
    
*   **Equipment Protection**: Select inverters with a higher protection rating (e.g., IP65) for high-temperature and high-humidity environments.
    
*   **Record Analysis**: Establish a fault file and statistically analyze high-frequency fault points to optimize maintenance strategies.
    

We hope the above information helps you effectively solve the problem of low inverter insulation resistance! If you have any further questions, please feel free to contact us. Best wishes for your work!`,
  },
  {
    agent: 'diag',
    qZh: '逆变器温度高',
    qEn: 'High Inverter Temperature',
    matchKeys: ['温度高', '温度', 'high temperature', 'High Temperature', 'High Inverter Temperature'],
    aZh: `节点名称: 温度高

### 排查步骤

为了准确诊断逆变器温度高的原因，请按照以下步骤逐一检查：

1.  检查逆变器风道是否堵塞
    
    *   打开机柜门，检查逆变器内部的风道是否存在灰尘、异物或其他堵塞情况。
        
    *   确保风道畅通无阻，避免因风道堵塞导致散热不良。
        
2.  检查散热风机的工作状态
    
    *   观察风机是否转动：
        
        *   在逆变器运行状态下，确认散热风机是否正常运转。
            
        *   听取风机运行声音，检查是否存在异响或卡顿现象。
            
    *   测量供电电压：
        
        *   使用万用表测量风机的供电电压，确保其符合额定值。
            
        *   若电压异常，需进一步排查电源线路或风机本身的问题。
            
3.  检查温控信号及风机响应
    
    *   在高温环境下，确认温控信号是否触发风机加速运行。
        
    *   检查风机是否有灰尘堆积或异物附着，影响散热效果。`,
    aEn: `Node Name: High Temperature

### Troubleshooting Steps

To accurately diagnose the cause of high inverter temperature, please check the following steps one by one:

1.  Check if the inverter air duct is blocked
    
    *   Open the cabinet door and check if there is dust, foreign objects, or other blockages in the air ducts inside the inverter.
        
    *   Ensure the air ducts are unobstructed to avoid poor heat dissipation due to blockage.
        
2.  Check the working status of the cooling fan
    
    *   Observe if the fan is rotating:
        
        *   With the inverter running, confirm if the cooling fan is operating normally.
            
        *   Listen to the fan's operating sound and check for any abnormal noises or jamming.
            
    *   Measure the supply voltage:
        
        *   Use a multimeter to measure the fan's supply voltage and ensure it meets the rated value.
            
        *   If the voltage is abnormal, further investigation is needed to determine if there is a problem with the power supply line or the fan itself.
            
3.  Check the temperature control signal and fan response
    
    *   In high-temperature environments, confirm whether the temperature control signal triggers the fan to accelerate.
        
    *   Check the fan for dust accumulation or foreign objects that may affect heat dissipation.`,
  },
];

// PV Expo (2026) · Alarm Agent · 告警工单明细（计划截止用于动态逾期）
const PV_EXPO_ALERT_WORK_ORDERS = [
  { id: '20260527111705210', typeZh: '消缺', typeEn: 'Defect', levelZh: '紧急', levelEn: 'Critical', statusZh: '未开始', statusEn: 'Unstarted', assigneeZh: '待分派', assigneeEn: 'Pending', device: '2032216328108609537', deadline: '2026-06-05' },
  { id: '20260527112216362', typeZh: '消缺', typeEn: 'Defect', levelZh: '重要', levelEn: 'Major', statusZh: '未开始', statusEn: 'Unstarted', assigneeZh: '待分派', assigneeEn: 'Pending', device: '1897906080647995394', deadline: '2026-06-05' },
  { id: '20260527112153264', typeZh: '消缺', typeEn: 'Defect', levelZh: '紧急', levelEn: 'Critical', statusZh: '未开始', statusEn: 'Unstarted', assigneeZh: '待分派', assigneeEn: 'Pending', device: '2032216328108609537', deadline: '2026-06-05' },
  { id: '20260527111823961', typeZh: '消缺', typeEn: 'Defect', levelZh: '紧急', levelEn: 'Critical', statusZh: '未开始', statusEn: 'Unstarted', assigneeZh: '待分派', assigneeEn: 'Pending', device: '1897906080647995394', deadline: '2026-06-05' },
  { id: '20260528112008942', typeZh: '消缺', typeEn: 'Defect', levelZh: '重要', levelEn: 'Major', statusZh: '待验收', statusEn: 'Pending Acceptance', assigneeZh: '待分派', assigneeEn: 'Pending', device: '1880193569045696514', deadline: '2026-06-02' },
  { id: '20260527144933242', typeZh: '消缺', typeEn: 'Defect', levelZh: '重要', levelEn: 'Major', statusZh: '未开始', statusEn: 'Unstarted', assigneeZh: '待分派', assigneeEn: 'Pending', device: '1880193558962589698', deadline: '2026-05-31' },
  { id: '20260514092749878', typeZh: '消缺', typeEn: 'Defect', levelZh: '重要', levelEn: 'Major', statusZh: '待验收', statusEn: 'Pending Acceptance', assigneeZh: '待分派', assigneeEn: 'Pending', device: '1880193549777063937', deadline: '2026-04-10' },
];

const PV_EXPO_ALERT_LATEST_FAN_FIRST_AT = '2026-05-26 14:57:11';

function formatAlertDurationSince(startAt, zh) {
  const start = new Date(String(startAt).replace(' ', 'T'));
  const now = new Date();
  let ms = Math.max(0, now - start);
  const days = Math.floor(ms / 86400000);
  ms %= 86400000;
  const hours = Math.floor(ms / 3600000);
  ms %= 3600000;
  const minutes = Math.floor(ms / 60000);
  if (zh) {
    const parts = [];
    if (days) parts.push(`${days}天`);
    if (hours) parts.push(`${hours}小时`);
    if (minutes || !parts.length) parts.push(`${minutes}分钟`);
    return parts.join('');
  }
  const parts = [];
  if (days) parts.push(`${days} day${days === 1 ? '' : 's'}`);
  if (hours) parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
  if (minutes || !parts.length) parts.push(`${minutes} minute${minutes === 1 ? '' : 's'}`);
  return parts.join(' ');
}

function formatAlertWorkOrderOverdue(deadline, zh) {
  const parts = String(deadline).split('-').map(Number);
  const deadlineDay = new Date(parts[0], parts[1] - 1, parts[2]);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffDays = Math.floor((today - deadlineDay) / 86400000);
  if (diffDays <= 0) return zh ? '正常' : 'Normal';
  return zh ? `⚠️ 逾期${diffDays}天` : `⚠️ ${diffDays} days overdue`;
}

function buildAlertWorkOrderStatusAnswer(zh) {
  const rows = PV_EXPO_ALERT_WORK_ORDERS.map(wo => {
    const overdue = formatAlertWorkOrderOverdue(wo.deadline, zh);
    if (zh) {
      return `| ${wo.id} | ${wo.typeZh} | ${wo.levelZh} | ${wo.statusZh} | ${wo.assigneeZh} | ${wo.device} | ${wo.deadline} | ${overdue} |`;
    }
    return `| ${wo.id} | ${wo.typeEn} | ${wo.levelEn} | ${wo.statusEn} | ${wo.assigneeEn} | ${wo.device} | ${wo.deadline} | ${overdue} |`;
  }).join('\n');
  if (zh) {
    return `当前电站存在 7 条未闭环告警工单，其中 5 条处于未开始状态，2 条处于待验收状态。建议优先跟进待验收工单，并针对火灾及风扇告警等设备故障进行聚合处理，以提高运维效率。

### 工单明细

| 工单编号 | 类型 | 等级 | 状态 | 负责人 | 关联设备/SN | 计划截止 | 逾期情况 |
| --- | --- | --- | --- | --- | --- | --- | --- |
${rows}`;
  }
  return `The current site has 7 unclosed alarm work orders, with 5 in Unstarted status and 2 in Pending Acceptance status. It is recommended to prioritize unaccepted orders and consolidate fire alarms and device anomalies for aggregated O&M dispatch to maximize efficiency.

### Work Order Details

| Order ID | Type | Priority | Status | Assignee | Associated Device SN | Deadline | Overdue Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
${rows}`;
}

function buildAlertLatestDecisionAnswer(zh) {
  const firstAt = PV_EXPO_ALERT_LATEST_FAN_FIRST_AT;
  const duration = formatAlertDurationSince(firstAt, zh);
  if (zh) {
    return `识别到最新告警来自电站 Penang Commercial 的逆变器设备，告警类型为风扇告警（Fan Alarm），故障码 2086，告警等级判定为重要（Important）。故障表明散热风扇反馈活跃告警且未自愈，鉴于风扇异常极易导致温度积聚从而间接触发功率限制或降载停机，且该设备近期伴随密集的并网异常，建议立即派单现场响应处理。

### 研判结论

| 项目 | 详情 |
| --- | --- |
| 电站 | Penang Commercial |
| 设备 | (Phase 2) Inverter 6 - SG125CX-P2 (SN: A2331300878) |
| 告警编号 | PFP2059166952877854720 |
| 告警类型 | 风扇告警 |
| 故障分类 | 逆变器故障 |
| 故障码 | 2086 |
| 当前状态 | InAlarm（告警中） |
| 首次发生 | ${firstAt} |
| 持续时长 | ${duration} |
| 告警等级 | 重要（Important） |
| 置信度 | 95% |
| 处理建议 | 派单 |

### 处置建议

1. 立即指派现场运维人员断开逆变器各侧开关，排查散热风扇叶片是否卡涩、是否有树叶或积尘堵塞，并手动确认转动状况。
2. 使用万用表排查风扇电源线缆连接牢固度，重点检查风扇控制电路板有无过流熔毁、烧蚀及驱动元器件物理损坏。
3. 调取 5-26 14:57 时段的电网电压及频率历史波形，评估站点浪涌保护器（SPD）的状态以及电网的瞬态波动参数，必要时调整并网适配参数。
4. 结合同电站处于 Active 状态的其他 9 条未处理告警（如绝缘故障、电流反灌），进行一次性现场拉网式合并排查消缺。`;
  }
  return `The latest alarm has been identified from the Penang Commercial site, originating from an inverter device. The alarm type is Fan Alarm, fault code 2086, with a severity level of Important. This fault indicates active cooling fan feedback without self-healing. Because cooling anomalies easily cause temperature buildup (leading to derating or shutdown), and given dense concurrent grid-related faults, immediate on-site response and dispatch are recommended.

### Decision Summary

| Item | Details |
| --- | --- |
| Site | Penang Commercial |
| Device | (Phase 2) Inverter 6 - SG125CX-P2 (SN: A2331300878) |
| Alarm ID | PFP2059166952877854720 |
| Alarm Type | Fan Alarm |
| Fault Code | 2086 |
| Current Status | InAlarm (Active) |
| First Occurrence | ${firstAt} |
| Duration | ${duration} |
| Severity Level | Important |
| Confidence | 95% |
| Recommended Action | Dispatch |

### Recommended Actions

1. Dispatch on-site O&M to isolate the inverter and inspect whether the fan blades are stuck, blocked by leaves/dust, and manually verify rotation.
2. Check fan power wiring and connectors; inspect the fan control/driver board for overcurrent damage, burn marks, and failed components.
3. Pull grid voltage/frequency waveforms around 5-26 14:57; assess surge protector (SPD) status and transient parameters; adjust grid-adaptation settings if needed.
4. Consolidate on-site troubleshooting with other 9 active untreated alarms at the same site (e.g., insulation faults, current backfeed) to close out issues in one visit.`;
}

// PV Expo (2026) · Alarm Agent recommended dialogues (CN+EN)
// Synced from docs/conversations/2026光伏展告警智能体推荐对话.md
const PV_EXPO_ALERT_QA = [
  {
    agent: 'alert',
    qZh: '针对最新告警进行关联分析',
    qEn: 'Correlational analysis on the latest alerts',
    matchKeys: ['关联分析', 'correlation', '风扇', 'fan', '2032', '2036', '2038', 'A2331300878', 'Penang'],
    aZh: `针对最新告警，分析电站近72小时的故障数据，结果如下：

**一、核心结论**

当前风扇告警为首次触发，已持续近3天且无自愈迹象，结合同一时刻全站多设备爆发电网与直流侧异常，判断本次问题**并非单一风扇故障**，而更可能源于**电网侧严重瞬态电气冲击**，并已引发部分硬件损坏。

**二、关键发现**

1. **本机告警状态**
   - 风扇告警首次触发，持续 **2天21小时4分钟**，未恢复。
   - 本机并发3项电网异常（故障码2038/2032/2036），均未处理。

2. **全站并发异常（同一秒爆发）**
   - 逆变器1：PV绝缘故障(53)、组串报警(163)
   - 逆变器5：组串功率异常(2013)、电流反灌(2012)、直流分量过大(2040)
   - 逆变器7：系统故障(60064)，持续5小时3分钟

3. **派单提示**
   - 已派单故障：漏电流自检异常(36)、设备异常(60063)（工单号见原报告）
   - 本站无其他风扇告警，无重复派单风险。

**三、初步推断**

1. **电网侧瞬态冲击**：多设备在同一秒内报出电网频率抖动、无电网、过频及电流反灌等故障，强烈表明站点曾遭遇**雷击、浪涌或并网闪断**等电网侧暂态事件，可能导致风扇驱动回路过流受损。
2. **直流侧绝缘/拉弧可能**：多台逆变器同时报出绝缘故障、直流分量过大，不排除冲击导致直流侧接线拉弧或绝缘下降。
3. **硬件损坏与自愈失效**：风扇告警持续近70小时未恢复，提示相关驱动板或继电器可能已**物理损坏**，无法自愈。

**四、排除性指征**

- 非共模风扇故障（全站仅本机报出风扇告警）
- 非系统性通讯中断（通讯报警仅单次记录，数据上传正常）

**五、后续建议**

1. 优先排查电网侧暂态事件记录（如雷击、电网操作）。
2. 对报障设备进行风扇驱动回路及直流侧绝缘检查。
3. 关注未处理的电网相关告警，评估电网波动是否持续。`,
    aEn: `Based on the latest alarm, an analysis of the power plant's fault data over the past 72 hours yielded the following results:

**1 Core Conclusion**

The current fan alert is a first-time trigger, has persisted for nearly 3 days with no signs of self-recovery. Considering the simultaneous, plant-wide surge in grid and DC-side abnormalities across multiple devices, the issue is **likely not an isolated fan failure**. The root cause is more probably a **severe transient electrical surge from the grid side**, which may have caused hardware damage.

**2 Key Findings**

**2.1 Status of the Device in Question**

- The fan alert is a first-time trigger, persisting for **2 days, 21 hours, 4 minutes** without recovery.
- The same device shows 3 concurrent untreated grid anomalies (Fault Codes: 2038/2032/2036).

**2.2 Plant-wide Concurrent Anomalies (Erupted at the same second)**

- Inverter 1 (SN: A2353101426): PV Insulation Fault (53) and String Alarm (163).
- Inverter 5 (SN: A2001075753): String Power Anomaly (2013), String Current Backfeed (2012), and Excessive DC Component (2040).
- Inverter 7 (SN: A2001075817): System Fault (60064), persisting for 5 hours, 3 minutes.

**2.3 Dispatch Notice**

- Already dispatched faults: Leakage Current Self-check Anomaly (36) and Device Anomaly (60063) (Work Order Numbers as per original report).
- No other fan alarms reported in this plant, no risk of duplicate dispatch.

**3 Preliminary Inferences**

**3.1 Transient Grid-side Surge**

The simultaneous, "cliff-like" eruption of grid frequency jitter, grid loss, over-frequency, and current backfeed faults across multiple devices strongly indicates a site-wide transient event on the grid side, such as **lightning, grid surge, or grid disconnection**. This likely caused overcurrent damage to the fan drive circuit or its power supply.

**3.2 Potential DC-side Insulation/Arcing**

Multiple inverters reporting insulation faults, excessive DC component, and current backfeed simultaneously suggest possible DC-side cable/connection box arcing or insulation degradation following the surge. The fan alarm may be a secondary effect due to overload in high-temperature conditions.

**3.3 Hardware Damage & Self-recovery Failure**

The fan alarm's persistence for nearly 70 hours without recovery indicates that associated hardware, such as the fan drive board or relays, is likely **physically damaged or burnt out**, preventing self-healing.

**4 Ruled-out Indicators**

- Not a common-mode fan failure (This is the only device in the plant with a fan alarm).
- Not a systematic communication interruption (Communication alarm code 999999999 was recorded only once; data upload paths for all inverters are normal).

**5 Recommended Next Steps**

1. Prioritize investigation into grid-side transient event records (e.g., lightning strikes, grid operations).
2. Inspect the fan drive circuit and DC-side insulation on the affected device.
3. Monitor untreated grid-related alarms to assess if grid fluctuations are ongoing.`,
  },
  {
    agent: 'alert',
    qZh: '当前的告警工单情况如何',
    qEn: 'How is the current alert handling situation?',
    matchKeys: ['工单', 'work order', '未闭环', 'unclosed', '逾期', 'overdue', '火灾', 'fire'],
    dynamic: 'alert_work_orders',
  },
  {
    agent: 'alert',
    qZh: '查看最新告警并给出处理建议',
    qEn: 'Check the latest alerts and provide handling suggestions',
    matchKeys: ['最新告警', 'decision', '2086', '风扇', 'Fan Alarm', 'Penang'],
    dynamic: 'alert_latest_decision',
  },
  {
    agent: 'alert',
    qZh: '查看跟踪观察中的告警情况',
    qEn: 'View alert status during tracking observation',
    matchKeys: ['跟踪', 'tracked', 'Penang', '60064', '53', '2012', '2032', '2036', '163'],
    aZh: `当前智能体共有 6 项告警处于活跃跟踪状态，全部属于 Penang Commercial 电站的逆变器设备。以下为各跟踪项的详细状态：

| # | 电站 | 设备SN | 故障码 | 告警类型 | 跟踪状态 | 进入观察时间 | 最近检查 | 累计检查 | 研判理由 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Penang Commercial | A2001075817 | 60064 | 系统故障 | 观察中 | 05-29 06:58 | 05-29 11:58 | 3次 | 系统故障突发，已持续5小时3分钟。<br>目前处于自愈观察周期，趋势平稳，若继续无恢复信号将升级。 |
| 2 | Penang Commercial | A2353101426 | 53 | PV绝缘故障 | 建议派单(待复核) | 05-26 14:57 | 05-29 12:01 | 12次 | 直流侧PV绝缘阻抗过低，已持续2天21小时。<br>严重超超出正常自愈观察窗口，无改善迹象，需现场测量组串对地绝缘电阻。 |
| 3 | Penang Commercial | A2001075753 | 2012 | 组串电流反灌 | 建议派单(待复核) | 05-26 14:57 | 05-29 12:01 | 12次 | 直流侧电流反灌可能导致组串烧蚀与设备损坏，已持续2天21小时，<br>存在重大物理损坏风险，升级为建议派单待复核。 |
| 4 | Penang Commercial | A2331300878 | 2032 | 无电网 | 建议派单(待复核) | 05-26 14:57 | 05-29 12:01 | 12次 | 交流侧无电网告警与风扇主告警高度并发爆发，已持续2天21小时，<br>设备处于失电离网状态，建议现场确认断路器状态。 |
| 5 | Penang Commercial | A2331300878 | 2036 | 电网过频 | 建议派单(待复核) | 05-26 14:57 | 05-29 12:01 | 12次 | 交流侧过频告警已持续2天21小时，<br>与电网波动高度相关，建议在排查风扇时一并核实并网适配频率参数。 |
| 6 | Penang Commercial | A2353101426 | 163 | 组串报警 | 建议派单(待复核) | 05-26 14:57 | 05-29 12:01 | 12次 | 直流组串异常，与PV绝缘故障并发且持续接近3天，<br>需排查该设备所辖光伏支路有无物理破损或接线端子受潮。 |

### 整体分析

- 6项跟踪的活跃告警全部集中在 Penang Commercial 电站，由于 5-26 14:57 全站大范围交直流电气冲击事件，除 1 项突发的系统故障处于观察期外，其余 5 项均已超过 70 小时未见恢复，触发升级机制。
- 告警类型深度自洽：交流侧无电网与过频反映了当时的瞬态冲击，直流侧的绝缘故障、电流反灌以及组串异常则反映了直流线缆及内部开关器件可能存在物理拉弧破损。
- 建议针对逆变器 1 和逆变器 5 存在的直流异常高度关注，将其作为与风扇消缺并行的重点派发清单。`,
    aEn: `The agent currently has 6 alarms in active tracking status, all belonging to inverter devices at the Penang Commercial site. Detailed status is as follows:

| # | Site | Device SN | Fault Code | Alarm Type | Tracking Status | Observation Start | Last Check | Total Checks | Decision Rationale |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Penang Commercial | A2001075817 | 60064 | System Failure | Observing | 05-29 06:58 | 05-29 11:58 | 3 | Sudden system fault, persisting for 5h03m.<br>In self-healing observation cycle; stable trend; will escalate if no recovery signal. |
| 2 | Penang Commercial | A2353101426 | 53 | PV Insulation Anomaly | Dispatch Recommended (Pending Review) | 05-26 14:57 | 05-29 12:01 | 12 | DC-side insulation resistance is critically low for 2d21h;<br>exceeds self-healing window; on-site string-to-ground insulation measurement required. |
| 3 | Penang Commercial | A2001075753 | 2012 | String Current Backfeed | Dispatch Recommended (Pending Review) | 05-26 14:57 | 05-29 12:01 | 12 | Backfeed may cause string burn/damage; persisting for 2d21h;<br>physical damage risk; escalated for review. |
| 4 | Penang Commercial | A2331300878 | 2032 | Grid Loss | Dispatch Recommended (Pending Review) | 05-26 14:57 | 05-29 12:01 | 12 | Grid loss co-occurred with fan alarm; persisting for 2d21h;<br>device is off-grid; verify breaker status on-site. |
| 5 | Penang Commercial | A2331300878 | 2036 | Overfrequency | Dispatch Recommended (Pending Review) | 05-26 14:57 | 05-29 12:01 | 12 | Overfrequency persists for 2d21h;<br>highly related to grid fluctuation; verify grid-adaptation parameters alongside fan inspection. |
| 6 | Penang Commercial | A2353101426 | 163 | PVS Alarm | Dispatch Recommended (Pending Review) | 05-26 14:57 | 05-29 12:01 | 12 | DC string anomaly co-occurs with insulation fault; persisting ~3 days;<br>check PV branches and moisture at terminals. |

### Overall Analysis

- All tracked alarms concentrate at Penang Commercial. After the site-wide AC/DC electrical impact at 05-26 14:57, 5 of 6 items have shown no recovery for >70 hours and have triggered escalation.
- Alarm types are internally consistent: AC-side grid loss/overfrequency reflect the transient impact, while DC-side insulation/backfeed/string alarms suggest potential arcing or physical damage in DC cabling/switchgear.
- Prioritize DC anomalies on inverter 1 and inverter 5 in parallel with the fan-alarm remediation.`,
  },
];

const QUICK_PROMPTS = [
  ...PV_EXPO_QA.map(x => ({ a: 'pv', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_QUERY_QA.map(x => ({ a: 'query', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_OPS_QA.map(x => ({ a: 'ops', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_INSP_QA.map(x => ({ a: 'insp', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_WARN_QA.map(x => ({ a: 'warn', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_SCHED_QA.map(x => ({ a: 'sched', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_ORDER_QA.map(x => ({ a: 'order', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_SAFE_QA.map(x => ({ a: 'safe', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_DIAG_QA.map(x => ({ a: 'diag', t: x.qZh, en: x.qEn })),
  ...PV_EXPO_ALERT_QA.map(x => ({ a: 'alert', t: x.qZh, en: x.qEn })),
];

/** 聚焦时隐藏右侧对话调度的电站 */
const DISPATCH_HIDDEN_PLANT_IDS = new Set([
  '1881233694553112576',
  '1879736396404850688',
]);
function isDispatchHiddenPlant(id) {
  return id != null && DISPATCH_HIDDEN_PLANT_IDS.has(String(id));
}

/** 演示电站：托管锁定、固定场景、时间轴文案（不展示 A/B 切换） */
const DEMO_PLANT_PROFILES = {
  '1881233694553112576': {
    scenarioIdx: 0,
    streamTag: 'Johor',
    timelineZh: '告警驱动 · 自主闭环',
    timelineEn: 'Alarm-Driven · Self-Closure',
    grayInspInTeam: true,
  },
  '1879736396404850688': {
    scenarioIdx: 1,
    streamTag: 'Penang',
    uavAutoFly: true,
    timelineZh: '无人机巡检 · 图像驱动',
    timelineEn: 'UAV Inspection · Vision-Driven',
    teamUnavailableAgentIds: ['alert', 'diag', 'warn'],
  },
};
function getDemoPlantProfile(id) {
  if (id == null) return null;
  return DEMO_PLANT_PROFILES[String(id)] || null;
}
function isUavDemoPlant(id) {
  return !!getDemoPlantProfile(id)?.uavAutoFly;
}
function getDemoPlantTeamUnavailableIds(id) {
  return getDemoPlantProfile(id)?.teamUnavailableAgentIds || [];
}

// Demo 动态编号：{{DATE}} → 页面加载时刻的 YYYY-MMDD（与事件流锚点一致）
let _demoBaseTime;
function getDemoBaseTime() {
  if (!_demoBaseTime) {
    _demoBaseTime = new Date();
    _demoBaseTime.setSeconds(0, 0);
  }
  return _demoBaseTime;
}
function demoDateTag(base) {
  const d = base || getDemoBaseTime();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}${p(d.getDate())}`;
}
function resolveDemoIds(text, base) {
  return String(text ?? '').replace(/\{\{DATE\}\}/g, demoDateTag(base));
}

const SIMULATOR_SCENES = [
  {
    id: 'S1',
    title: '东盟世界待机态',
    enTitle: 'ASEAN Standby',
    oneLine: '中国算力出海东盟，多电站数字团队同时在岗',
    enOneLine: 'China AI capacity operates across ASEAN plants with digital teams on duty.',
    mode: 'installation',
    interaction: 'auto-loop',
    goal: '观察多电站在线、巡航机器人和后台任务脉冲',
    enGoal: 'Watch multi-site online status, patrol robots, and background task pulses.',
    progress: 10,
    durationMs: 90000,
    agents: ['ops', 'warn', 'alert'],
  },
  {
    id: 'S2',
    title: '人才市场 + 雇佣',
    enTitle: 'Talent Market + Hire',
    oneLine: '你不是买软件，是雇一支数字团队',
    enOneLine: 'You are not buying software. You are hiring a digital team.',
    mode: 'installation',
    interaction: 'presenter-trigger',
    goal: '选择数字员工并让团队入驻当前电站',
    enGoal: 'Select digital employees and deploy the team to a plant.',
    progress: 20,
    durationMs: 30000,
    agents: ['ops', 'query', 'pv'],
  },
  {
    id: 'S3',
    title: '现场态',
    enTitle: 'AI Operations Site',
    oneLine: '这是一个 AI 运维现场，不是看板',
    enOneLine: 'This is an AI operations site, not a static dashboard.',
    mode: 'workbench',
    interaction: 'inspect-agent',
    goal: '查看数字员工在现场的分布和职责',
    enGoal: 'Inspect where digital employees work and what each role owns.',
    progress: 32,
    durationMs: 25000,
    focusPlantId: '1881233694553112576',
    scenarioIdx: 0,
    agents: ['alert', 'warn', 'diag', 'order', 'sched', 'safe', 'ops'],
  },
  {
    id: 'S4',
    title: '事件触发',
    enTitle: 'Incident Trigger',
    oneLine: 'AI 团队开始响应事件',
    enOneLine: 'The AI team starts responding to an incident.',
    mode: 'workbench',
    interaction: 'presenter-trigger',
    goal: '触发告警，观察事件波纹和响应倒计时',
    enGoal: 'Trigger an alarm and watch the response countdown.',
    progress: 44,
    durationMs: 20000,
    focusPlantId: '1881233694553112576',
    scenarioIdx: 0,
    agents: ['alert', 'diag'],
  },
  {
    id: 'S5',
    title: '多 Agent 协同',
    enTitle: 'Multi-Agent Relay',
    oneLine: 'AI 不是单点功能，是团队协同',
    enOneLine: 'AI is not a single feature. It is a team relay.',
    mode: 'workbench',
    interaction: 'auto-play',
    goal: '看告警、诊断、工单、排程、安全和运营接力闭环',
    enGoal: 'Watch Alarm, Diagnose, Ticket, Schedule, Safety, and Ops close the loop.',
    progress: 56,
    durationMs: 30000,
    focusPlantId: '1881233694553112576',
    scenarioIdx: 0,
    agents: ['alert', 'diag', 'order', 'sched', 'safe', 'ops'],
  },
  {
    id: 'S6',
    title: '分歧仲裁',
    enTitle: 'Disagreement Arbitration',
    oneLine: '有组织、有协作、有判断',
    enOneLine: 'Organized collaboration with judgment.',
    mode: 'workbench',
    interaction: 'auto-play',
    goal: '比较两个智能体建议，并收敛到仲裁结论',
    enGoal: 'Compare agent recommendations and converge on an arbitration result.',
    progress: 68,
    durationMs: 25000,
    focusPlantId: '1881233694553112576',
    scenarioIdx: 0,
    agents: ['diag', 'safe', 'sched'],
  },
  {
    id: 'S7',
    title: '当一天经理',
    enTitle: 'Be the Manager',
    oneLine: 'AI 备好上下文，你只做关键判断',
    enOneLine: 'AI prepares the context. You make the key call.',
    mode: 'workbench',
    interaction: 'hands-on',
    goal: '选择批准、复核或转人工，观察安全/效率/自治评分变化',
    enGoal: 'Approve, review, or hand off, then watch safety/efficiency/autonomy scores change.',
    progress: 78,
    durationMs: 45000,
    focusPlantId: '1881233694553112576',
    scenarioIdx: 0,
    agents: ['ops', 'diag', 'safe', 'order', 'sched'],
  },
  {
    id: 'S8',
    title: '闭环汇报',
    enTitle: 'Closure Report',
    oneLine: '一天的运维效率跃升，可量化',
    enOneLine: 'The day closes with measurable operations uplift.',
    mode: 'workbench',
    interaction: 'auto-report',
    goal: '查看本轮评级、节省工时、风险下降和经验沉淀',
    enGoal: 'Review rating, saved hours, risk reduction, and experience captured.',
    progress: 86,
    durationMs: 25000,
    focusPlantId: '1881233694553112576',
    scenarioIdx: 0,
    agents: ['ops', 'order', 'query'],
  },
  {
    id: 'S9',
    title: '托管电站',
    enTitle: 'Managed Plant',
    oneLine: '时间加速，AI 自主跑完周期',
    enOneLine: 'Accelerate time and let AI run a full operations cycle.',
    mode: 'ritual',
    interaction: 'hands-on',
    goal: '调节托管等级，观察时间加速和托管得分',
    enGoal: 'Adjust autonomy level and watch accelerated time plus managed score.',
    progress: 94,
    durationMs: 50000,
    focusPlantId: '1879736396404850688',
    scenarioIdx: 1,
    agents: ['ops', 'query', 'order', 'sched', 'safe', 'insp'],
  },
  {
    id: 'S10',
    title: '拉回东盟总部',
    enTitle: 'Back to ASEAN HQ',
    oneLine: '成果汇入公司层，经验回流',
    enOneLine: 'Outcomes flow back to company level and experience compounds.',
    mode: 'installation',
    interaction: 'auto-close',
    goal: '回到总览大屏，查看经验回流和跨站策略复制',
    enGoal: 'Return to overview and review experience return plus cross-site reuse.',
    progress: 100,
    durationMs: 30000,
    agents: ['ops', 'query', 'pv'],
  },
];

const SIMULATOR_DECISIONS = [
  {
    id: 'approve',
    title: '批准 AI 推荐方案',
    enTitle: 'Approve AI Plan',
    risk: '中',
    enRisk: 'Medium',
    impact: '预计 2 小时内恢复，风险下降 67%',
    enImpact: 'Recovery within 2 hours, risk down 67%',
    reason: '多 Agent 共识，证据链完整',
    enReason: 'Multi-agent consensus with complete evidence chain',
    nextScene: 'S8',
    badge: '首次授权',
    enBadge: 'First Authorization',
    scoreDelta: { safety: 5, efficiency: 10, autonomy: 8, business: 7 },
  },
  {
    id: 'review',
    title: '要求安全智能体复核',
    enTitle: 'Request Safety Review',
    risk: '低',
    enRisk: 'Low',
    impact: '风险再降 8%，预计多耗时 18 分钟',
    enImpact: 'Risk down another 8%, adds 18 minutes',
    reason: '高温 + 直流侧作业，复核后更稳',
    enReason: 'Heat and DC-side work benefit from review',
    nextScene: 'S8',
    badge: '安全复核通过',
    enBadge: 'Safety Review Passed',
    scoreDelta: { safety: 12, efficiency: -3, autonomy: 5, business: 4 },
  },
  {
    id: 'manual',
    title: '转人工处理',
    enTitle: 'Hand Off to Human',
    risk: '低',
    enRisk: 'Low',
    impact: '人工介入 +1，闭环时间增加 42 分钟',
    enImpact: 'Human intervention +1, closure adds 42 minutes',
    reason: '适合高不确定场景，但降低自治收益',
    enReason: 'Good for uncertainty, but reduces autonomy gain',
    nextScene: 'S8',
    badge: '人工接管',
    enBadge: 'Human Escalation',
    scoreDelta: { safety: 8, efficiency: -8, autonomy: -10, business: -2 },
  },
];

const SIMULATOR_BADGES = [
  { id: 'loop', title: '零人工闭环', enTitle: 'Zero-Touch Closure' },
  { id: 'reuse', title: '经验已回流', enTitle: 'Experience Returned' },
  { id: 'managed', title: '托管日完成', enTitle: 'Managed Day Complete' },
];

window.IRUN = {
  AGENT_CATEGORIES, AGENTS, AGENT_BY_ID,
  TENANTS, PLANTS, AGGREGATE, aggregateOf,
  SCENARIOS, SCENARIO_A, SCENARIO_B,
  SIMULATOR_SCENES, SIMULATOR_DECISIONS, SIMULATOR_BADGES,
  DISPATCH_HIDDEN_PLANT_IDS, isDispatchHiddenPlant,
  DEMO_PLANT_PROFILES, getDemoPlantProfile, getDemoPlantTeamUnavailableIds, isUavDemoPlant,
  getDemoBaseTime, demoDateTag, resolveDemoIds,
  HEALTHINESS_PLANT_KEYS, resolveHealthinessPlantKey, buildHealthinessAnswer,
  buildHealthAdviceAnswer, buildAlertWorkOrderStatusAnswer, buildAlertLatestDecisionAnswer,
  buildOrderDispatchFirstAlarmAnswer,
  GLOBAL_EVENT_TEMPLATES, GLOBAL_EVENT_TEMPLATES_DEFECTS, GLOBAL_EVENT_TEMPLATES_INSPECTION,
  DEFECT_STREAM_PLANT_ID: _DATA_DEFECT_STREAM_PLANT_ID,
  INSPECTION_STREAM_PLANT_ID: _DATA_INSPECTION_STREAM_PLANT_ID,
  getGlobalEventTemplatesForPlant,
  QUICK_PROMPTS,
  PV_EXPO_QA,
  PV_EXPO_QUERY_QA,
  PV_EXPO_OPS_QA,
  PV_EXPO_INSP_QA,
  PV_EXPO_WARN_QA,
  PV_EXPO_SCHED_QA,
  PV_EXPO_ORDER_QA,
  PV_EXPO_SAFE_QA,
  PV_EXPO_DIAG_QA,
  PV_EXPO_ALERT_QA,
};
