// iRun Workbench — App root
const { useState: _aUseState, useEffect: _aUseEffect, useCallback: _aUseCallback } = React;
const useState = _aUseState, useEffect = _aUseEffect, useCallback = _aUseCallback;
const { TopBar, EventStream, EventStreamTab, DispatchPanel, DispatchTab, AgentDock, MiniMap, QuickFuncs, AgentModal, AgentsRail, ModeStrip, SkillModal, PlantTitle, DroneFlight, PlantRobot, PlantAgentField, DispatchedRobots, OverviewDispatchRobot, ScenarioDirectorRail, ManagerDecisionConsole, DigitalTeamOrgPanel, OperationsActDock, TalentMarketOverlay, PackagePicker, TalentDeployFlight, CameraDrillOverlay, MissionFeedbackLayer, OperationsBigScreenLayer, ManilaSiteOverlay, ManilaAgentDossier, LangCtx } = window.IRUN_UI;
const { PlantsMap, Map2Overlay } = window.IRUN_MAP;
const { PlantDetail, PlantInlineDock, useScenarioStepping } = window.IRUN_DETAIL;
const { Scene3D } = window.IRUN_SCENE3D;
const { PLANTS: APP_PLANTS, TENANTS: APP_TENANTS, AGENTS: APP_AGENTS, AGENT_BY_ID: APP_ABI, aggregateOf: APP_AGG_OF } = window.IRUN;
const isDispatchHiddenPlant = window.IRUN?.isDispatchHiddenPlant || (() => false);
const getDemoPlantProfile = (id) => window.IRUN?.getDemoPlantProfile?.(id) || null;
const isUavDemoPlant = (id) => window.IRUN?.isUavDemoPlant?.(id) || false;
const APP_SIMULATOR_SCENES = window.IRUN?.SIMULATOR_SCENES || [];
const APP_SIMULATOR_DECISIONS = window.IRUN?.SIMULATOR_DECISIONS || [];
const CEBU_PLANT_ID = '1861683646672760832';
const MANILA_PLANT_ID = '1879736315115044864';
const OVERVIEW_ACTIONS = [
  { id:'asean', zh:'东盟 ACT', en:'ASEAN ACT' },
  { id:'asean1', zh:'东盟 ACT ONE', en:'ASEAN ACT ONE' },
  { id:'talent', zh:'人才市场雇佣', en:'Talent Market Hire' },
  { id:'site', zh:'AI 运维现场', en:'AI Operations Site' },
  { id:'incident', zh:'事件触发', en:'Incident Trigger' },
  { id:'outcomes', zh:'成果流', en:'Outcomes Flow' },
  { id:'hire', zh:'雇佣团队', en:'Hire a Team' },
  { id:'manager', zh:'成为经理', en:'Bet he Manager' },
  { id:'handover', zh:'移交给 iRun', en:'Hand over to iRun' },
];
const MANILA_ACTIONS = [
  { id:'plantInfo', zh:'电站信息', en:'Plant Info' },
  { id:'alarm', zh:'模拟告警', en:'Simulate Alarm' },
  { id:'event', zh:'事件触发', en:'Event Trigger' },
  { id:'collab', zh:'多智能体协作', en:'Multi-Agent Collaboration' },
  { id:'arbitration', zh:'分歧仲裁', en:'Disagreement Arbitration' },
  { id:'closure', zh:'闭环报告', en:'Closure Report' },
  { id:'outcomes', zh:'成果流', en:'Outcomes Flow' },
  { id:'managed', zh:'托管电站', en:'Managed Plant' },
  { id:'managerDay', zh:'当一天经理', en:'Be the Manager' },
];
const TALENT_PACKAGES = [
  {
    id:'basic',
    title:'Basic O&M Squad',
    zhTitle:'基础运维团队',
    token:'2,000-4,000 tokens / day · site',
    zhToken:'低 · 约 2,000-4,000 tokens/日·电站',
    members:['alert','diag','order'],
    zhAbility:'多源事件汇聚研判、初步诊断、自动工单闭环。',
    enAbility:'Multi-source event triage, first diagnosis, and automated ticket closure.',
    zhFit:'运行稳定、以远程消缺为主的电站。',
    enFit:'Stable sites mainly resolved through remote defect handling.',
  },
  {
    id:'inspect',
    title:'Inspection-Plus Squad',
    zhTitle:'巡检增强团队',
    token:'6,000-10,000 tokens / day · site',
    zhToken:'中 · 约 6,000-10,000 tokens/日·电站',
    members:['alert','diag','order','insp','sched'],
    zhAbility:'主动无人机/红外巡检、缺陷识别、人员与路径排程。',
    enAbility:'Proactive UAV/infrared inspection, defect recognition, staff and route scheduling.',
    zhFit:'需主动发现隐性缺陷的电站。',
    enFit:'Sites that need proactive hidden-defect discovery.',
  },
  {
    id:'full',
    title:'Full-Managed Squad',
    zhTitle:'全托管团队',
    token:'12,000-18,000 tokens / day · site',
    zhToken:'高 · 约 12,000-18,000 tokens/日·电站',
    members:['ops','alert','diag','order','sched','safe','insp','pv','warn','query'],
    zhAbility:'全自主协同闭环、清洗调度、安全审批、自动报告、分歧仲裁、高风险升级。',
    enAbility:'Autonomous closure, cleaning dispatch, safety approval, reports, arbitration, and escalation.',
    zhFit:'完整托管。',
    enFit:'Fully managed plants.',
  },
];
const DEPLOY_FIELD_POSITIONS = [
  { x: 32, y: 54 }, { x: 49, y: 44 }, { x: 69, y: 54 }, { x: 78, y: 38 },
  { x: 58, y: 68 }, { x: 43, y: 66 }, { x: 72, y: 70 }, { x: 52, y: 34 },
];
const DEPLOY_PACKAGE_MEMBERS = {
  basic: ['alert','diag','order','warn','ops'],
  inspect: ['alert','diag','order','insp','sched','safe','ops'],
  full: ['ops','alert','diag','order','sched','safe','insp','pv'],
};

function clampSimScore(n) {
  return Math.max(0, Math.min(100, Math.round(Number(n) || 0)));
}

function makeDeployRobots(packageId) {
  const base = DEPLOY_PACKAGE_MEMBERS[packageId] || DEPLOY_PACKAGE_MEMBERS.inspect;
  const all = ['ops','alert','diag','order','sched','safe','insp','pv','warn','query'];
  const targetCount = 5 + Math.floor(Math.random() * 4);
  const ids = [...base];
  all.forEach(id => { if (ids.length < targetCount && !ids.includes(id)) ids.push(id); });
  return ids.slice(0, targetCount).map((agentId, idx) => ({
    id: `deploy-${Date.now()}-${idx}-${agentId}`,
    agentId,
    delay: idx * 0.13,
    orbit: idx,
  }));
}

function TypewriterCopy({text, duration=5000, className=''}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    const chars = Array.from(text || '');
    if (!chars.length) return undefined;
    const stepMs = Math.max(16, duration / chars.length);
    const id = window.setInterval(() => {
      setCount(c => {
        if (c >= chars.length) {
          window.clearInterval(id);
          return chars.length;
        }
        return c + 1;
      });
    }, stepMs);
    return () => window.clearInterval(id);
  }, [text, duration]);
  return <div className={`story-type ${className}`}>{Array.from(text || '').slice(0, count).join('')}</div>;
}

function TalentSquadDock({packages, onPick, zh}) {
  return (
    <div className="talent-squad-dock">
      {packages.map(pack => (
        <button key={pack.id} type="button" className={`squad-card squad-${pack.id}`} onClick={()=>onPick?.(pack.id)}>
          <span>{zh ? pack.zhTitle : pack.title}</span>
          <b>{pack.title}</b>
          <em>{zh ? pack.zhToken : pack.token}</em>
          <p>{zh ? pack.zhAbility : pack.enAbility}</p>
          <small>{zh ? `适用：${pack.zhFit}` : `Fit: ${pack.enFit}`}</small>
          <i>{pack.members.map(id => APP_ABI[id]?.code).filter(Boolean).join(' / ')}</i>
        </button>
      ))}
    </div>
  );
}

function OutcomesFlowPopup({ minimized, zh }) {
  return (
    <div className={`outcomes-flow-popup${minimized ? ' minimized' : ''}`}>
      <div className="outcomes-progress">
        {[
          zh?'单站成果':'Site outcomes',
          zh?'公司层聚合':'Company aggregation',
          zh?'经验回流':'Experience return',
          zh?'能力同步':'Capability sync',
        ].map((step, idx) => (
          <div key={step} className={idx < 3 ? 'done' : 'active'}>
            <i>{idx + 1}</i>
            <span>{step}</span>
          </div>
        ))}
      </div>
      <div className="outcomes-popup-main">
        <span>{zh?'成果汇入公司层':'OUTCOMES INTO COMPANY LAYER'}</span>
        <b>{zh?'自主闭环 + · Token 消耗 + · 新经验 + · 电量损失 ↓':'Autonomous closures + · Token spend + · New experience + · Energy loss ↓'}</b>
        <div className="outcomes-company-grid">
          <div><strong>12</strong><em>{zh?'托管电站':'Managed plants'}</em></div>
          <div><strong>3,180</strong><em>{zh?'今日全网自主闭环':'Network closures today'}</em></div>
          <div><strong>86</strong><em>{zh?'在线数字员工':'Digital staff online'}</em></div>
          <div><strong>58</strong><em>{zh?'新增回流案例':'New returned cases'}</em></div>
        </div>
        <p>{zh?'经验光点正在回流 AI 训练中心，并把能力同步给其他电站。':'Experience light points are returning to the AI training center and syncing capability to other plants.'}</p>
      </div>
      <div className="outcomes-lightpoint"/>
    </div>
  );
}

function IntroTransition() {
  const [phase, setPhase] = useState('video');
  const [done, setDone] = useState(() => {
    try {
      if (sessionStorage.getItem('irun:skip-intro-once') === '1') {
        sessionStorage.removeItem('irun:skip-intro-once');
        return true;
      }
    } catch (e) {}
    return false;
  });
  const [closing, setClosing] = useState(false);
  const videoRef = React.useRef(null);
  const settledRef = React.useRef(false);
  const closingRef = React.useRef(false);
  const fallbackTimerRef = React.useRef(null);
  const loadingTimerRef = React.useRef(null);
  const finishTimerRef = React.useRef(null);

  const finish = useCallback(() => {
    setDone(true);
  }, []);

  const clearIntroTimers = useCallback(() => {
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    if (loadingTimerRef.current) window.clearTimeout(loadingTimerRef.current);
    if (finishTimerRef.current) window.clearTimeout(finishTimerRef.current);
    fallbackTimerRef.current = null;
    loadingTimerRef.current = null;
    finishTimerRef.current = null;
  }, []);

  const closeSoftly = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    clearIntroTimers();
    setClosing(true);
    finishTimerRef.current = window.setTimeout(finish, 820);
  }, [clearIntroTimers, finish]);

  const showLogoFallback = useCallback(() => {
    if (settledRef.current) return;
    settledRef.current = true;
    setPhase('loading');
    loadingTimerRef.current = window.setTimeout(closeSoftly, 1000);
  }, [closeSoftly]);

  const handleVideoReady = useCallback(() => {
    if (settledRef.current) return;
    settledRef.current = true;
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = null;
    setPhase('video');
    const video = videoRef.current;
    const playResult = video?.play?.();
    if (playResult && typeof playResult.catch === 'function') {
      playResult.catch(() => {
        setPhase('loading');
        loadingTimerRef.current = window.setTimeout(closeSoftly, 1000);
      });
    }
  }, [closeSoftly]);

  const skipIntro = useCallback(() => {
    const video = videoRef.current;
    if (video) video.pause();
    closeSoftly();
  }, [closeSoftly]);

  const handleVideoProgress = useCallback(() => {
    const video = videoRef.current;
    if (!video?.duration || !Number.isFinite(video.duration)) return;
    if (video.duration - video.currentTime <= 0.42) closeSoftly();
  }, [closeSoftly]);

  useEffect(() => {
    if (done) return undefined;
    fallbackTimerRef.current = window.setTimeout(showLogoFallback, 2000);
    return clearIntroTimers;
  }, [clearIntroTimers, showLogoFallback, done]);

  if (done) return null;

  return (
    <div className={`intro-gate intro-${phase}${closing ? ' intro-closing' : ''}`}>
      {phase === 'video' ? (
        <video
          ref={videoRef}
          className="intro-video-el"
          src="assets/app/videos/video001.mp4"
          muted
          playsInline
          autoPlay
          preload="metadata"
          onCanPlay={handleVideoReady}
          onLoadedData={handleVideoReady}
          onTimeUpdate={handleVideoProgress}
          onEnded={closeSoftly}
          onError={showLogoFallback}
        />
      ) : (
        <div className="intro-logo-loading" role="status" aria-label="Loading iRun">
          <img src="assets/app/brand/irun-icon.png" alt="iRun"/>
          <span/>
        </div>
      )}
      {phase === 'video' && (
        <button type="button" className="intro-skip" onClick={skipIntro}>Skip</button>
      )}
    </div>
  );
}

function App(){
  const [plants, setPlants] = useState(() => window.IRUN?.PLANTS || APP_PLANTS || []);
  const [focusId, setFocusId] = useState(null);
  const [dispatchPlantCtx, setDispatchPlantCtx] = useState(null); // { id, name }
  const [openAgent, setOpenAgent] = useState(null);
  const [openSkillMarket, setOpenSkillMarket] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentsRailVisible, setAgentsRailVisible] = useState(false);
  const [dispatchCollapsed, setDispatchCollapsed] = useState(true);
  const toggleDispatch = (next) => {
    const v = typeof next === 'boolean' ? next : !dispatchCollapsed;
    setDispatchCollapsed(v);
    try { localStorage.setItem('irun:dispatch-collapsed', v?'1':'0'); } catch(e){}
  };
  const [streamCollapsed, setStreamCollapsed] = useState(()=>{
    try {
      const v = localStorage.getItem('irun:stream-collapsed');
      return v === null ? true : v === '1';   // default: collapsed
    } catch(e){ return true; }
  });
  const toggleStream = (next) => {
    const v = typeof next === 'boolean' ? next : !streamCollapsed;
    setStreamCollapsed(v);
    try { localStorage.setItem('irun:stream-collapsed', v?'1':'0'); } catch(e){}
  };
  const [tenantIdx, setTenantIdx] = useState(0);
  const tenant = APP_TENANTS[tenantIdx];
  const [viewMode, setViewMode] = useState('map2'); // map2 | img2
  // dark theme: show | roam      ·  light theme: pic1 | pic2
  const [map2SubMode, setMap2SubMode] = useState(() => {
    try { return (localStorage.getItem('irun:theme') || 'light') === 'light' ? 'pic1' : 'show'; } catch(e) { return 'pic1'; }
  });
  // ── Overview dispatch robots (map2) ──────────────────────────────────
  // 每条 = { key, plantId, agentId, recall }。同时最多 1 个 active(recall=false)；
  // 旧的被换站/召回时置 recall=true → 组件播放原路返回动画后 onDone 移除自己。
  const [overviewBots, setOverviewBots] = useState([]);
  const recallAllBots = useCallback(() => {
    setOverviewBots(prev => prev.map(b => b.recall ? b : { ...b, recall: true }));
  }, []);
  // 派出 / 换站：识别到 @机器人 + 当前租户内电站名后由 DispatchPanel 调用
  const onDispatchToPlant = useCallback(({ plantId, agentId }) => {
    const plant = (window.IRUN?.PLANTS || []).find(p => p.id === plantId);
    if (!plant) return;
    if (plant.tenant !== tenant.id) return;        // 非当前租户 → 不出现机器人
    if (!plant.mapX || !plant.mapY) return;        // 无 pin 坐标 → 无终点
    setOverviewBots(prev => {
      const active = prev.find(b => !b.recall);
      if (active && active.plantId === plantId) return prev;  // 同站，不动
      const recalled = prev.map(b => b.recall ? b : { ...b, recall: true });  // 旧的原路返回
      const key = `ob-${Date.now()}-${Math.random().toString(36).slice(2,6)}`;
      return [...recalled, { key, plantId, agentId, recall: false }];
    });
  }, [tenant]);
  const onOverviewBotDone = useCallback((key) => {
    setOverviewBots(prev => prev.filter(b => b.key !== key));
  }, []);

  // 地图 pin / TopBar 切换电站 → 写入对话调度输入框上下文
  const applyDispatchPlantCtx = useCallback((id, plant) => {
    const p = plant || plants.find(x => String(x.id) === String(id));
    const resetDispatchInput = dispatchCollapsed && !!selectedAgent;
    const bindPlantToQuestions = dispatchCollapsed && !isDispatchHiddenPlant(id);
    if (resetDispatchInput) setSelectedAgent(null);
    const clickKey = `${id}:${Date.now()}`;
    setDispatchPlantCtx(p
      ? { id: p.id, name: p.name, resetInput: resetDispatchInput, bindPlantToQuestions, clickKey }
      : { id, name: '', resetInput: resetDispatchInput, bindPlantToQuestions, clickKey });
  }, [plants, dispatchCollapsed, selectedAgent]);

  // Switching tenant → drop focus & return to OVERVIEW, recall any bot
  const onTenantChange = useCallback((idx) => {
    setTenantIdx(idx);
    setFocusId(null);
    setViewMode(prev => prev === 'img2' ? 'map2' : prev);
    recallAllBots();
  }, [recallAllBots]);
  // Plants visible under the current tenant
  const tenantPlants = plants.filter(p => p.tenant === tenant.id);
  const tenantAgg = APP_AGG_OF ? APP_AGG_OF(tenantPlants) : { plants: tenantPlants.length, capacity:0, power:0, gen:0, alerts:0, risk:0 };

  const handlePlantChange = useCallback((id) => {
    if (!dispatchCollapsed) {
      applyDispatchPlantCtx(id, tenantPlants.find(x => String(x.id) === String(id)));
    }
    setFocusId(id);
  }, [dispatchCollapsed, tenantPlants, applyDispatchPlantCtx]);

  const [lang, setLang] = useState(()=>{ try{ return localStorage.getItem('irun:lang')||'en'; }catch(e){ return 'en'; } });
  const [theme, setTheme] = useState(()=>{ try{ return localStorage.getItem('irun:theme')||'light'; }catch(e){ return 'light'; } });
  const toggleTheme = () => setTheme(t => {
    const n = t==='light' ? 'dark' : 'light';
    try{ localStorage.setItem('irun:theme', n); }catch(e){}
    // sync map2 subMode to the valid set for the new theme
    setMap2SubMode(prev => {
      if (n === 'light') return (prev === 'pic1' || prev === 'pic2') ? prev : 'pic1';
      return (prev === 'show' || prev === 'roam') ? prev : 'show';
    });
    return n;
  });
  useEffect(() => {
    if (theme === 'dark' && selectedAgent && !['ops', 'warn', 'safe'].includes(selectedAgent)) {
      setSelectedAgent(null);
    }
  }, [theme, selectedAgent]);
  const toggleLang = () => setLang(l => {
    const n = l==='zh'?'en':'zh';
    try{ localStorage.setItem('irun:lang', n); }catch(e){}
    return n;
  });

  // Scenario state when a plant is open
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [mode, setMode] = useState('auto');
  const [busyMap, setBusyMap] = useState({});
  const [droneFlying, setDroneFlying] = useState(false);
  const onDroneFlightDone = useCallback(() => setDroneFlying(false), []);
  // Command-mode dispatched robots: each = single walker spawned by Dispatch send
  const [dispatchedRobots, setDispatchedRobots] = useState([]);
  const onDispatchCommand = useCallback((agentId, text) => {
    const id = `dr-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
    setDispatchedRobots(prev => [...prev, { id, agentId, text }]);
  }, []);
  const onRobotDone = useCallback((id) => {
    setDispatchedRobots(prev => prev.filter(r => r.id !== id));
  }, []);
  const [simulatorEnabled, setSimulatorEnabled] = useState(false);
  const [simSceneId, setSimSceneId] = useState('S1');
  const [simDecisionId, setSimDecisionId] = useState(null);
  const [simBadges, setSimBadges] = useState([]);
  const [simAutonomyLevel, setSimAutonomyLevel] = useState(2);
  const [simScore, setSimScore] = useState({ safety: 82, efficiency: 76, autonomy: 68, business: 74 });
  const [actDockOpen, setActDockOpen] = useState(false);
  const [overviewStory, setOverviewStory] = useState(null); // null | asean1 | talent
  const [plantStory, setPlantStory] = useState(null); // null | manila-site
  const [manilaScene, setManilaScene] = useState(null);
  const [plantInfoOpen, setPlantInfoOpen] = useState(false);
  const [outcomesPopup, setOutcomesPopup] = useState(false);
  const [outcomesMinimized, setOutcomesMinimized] = useState(false);
  const [packagePickerOpen, setPackagePickerOpen] = useState(false);
  const [deployRun, setDeployRun] = useState(null);
  const [drillActive, setDrillActive] = useState(false);
  // Clear robots + busyMap on mode switch / plant leave
  useEffect(()=>{
    if (mode === 'command') { setBusyMap({}); }
    if (mode !== 'command') setDispatchedRobots([]);
  },[mode]);

  // Fit-to-viewport scaling
  useEffect(()=>{
    const DESIGN_W = 1920;
    const DESIGN_H = 1080;
    const apply = () => {
      const viewport = window.visualViewport || window;
      const vw = viewport.width || window.innerWidth;
      const vh = viewport.height || window.innerHeight;
      const sx = vw / DESIGN_W;
      const sy = vh / DESIGN_H;
      const s = Math.min(sx, sy);
      const tx = Math.max(0, (vw - DESIGN_W * s) / 2);
      const ty = Math.max(0, (vh - DESIGN_H * s) / 2);
      const wb = document.querySelector('.workbench');
      if (wb){
        wb.style.setProperty('--wb-scale', String(s));
        wb.style.setProperty('--wb-x', tx + 'px');
        wb.style.setProperty('--wb-y', ty + 'px');
      }
    };
    apply();
    window.addEventListener('resize', apply);
    window.visualViewport?.addEventListener('resize', apply);
    return ()=>{
      window.removeEventListener('resize', apply);
      window.visualViewport?.removeEventListener('resize', apply);
    };
  },[]);

  const focusPlant = focusId ? plants.find(p=>p.id===focusId) : null;
  const simSceneIndex = Math.max(0, APP_SIMULATOR_SCENES.findIndex(s => s.id === simSceneId));
  const currentSimScene = APP_SIMULATOR_SCENES[simSceneIndex] || APP_SIMULATOR_SCENES[0];

  const setSimulatorScene = useCallback((id, opts={}) => {
    const scene = APP_SIMULATOR_SCENES.find(s => s.id === id) || APP_SIMULATOR_SCENES[0];
    if (!scene) return;
    if (!opts.keepDecision && scene.id !== 'S8') setSimDecisionId(null);
    setSimSceneId(scene.id);
  }, []);

  const nextSimulatorScene = useCallback(() => {
    const next = APP_SIMULATOR_SCENES[Math.min(APP_SIMULATOR_SCENES.length - 1, simSceneIndex + 1)] || currentSimScene;
    setSimulatorScene(next.id, { keepDecision: next.id === 'S8' });
  }, [simSceneIndex, currentSimScene?.id, setSimulatorScene]);

  const prevSimulatorScene = useCallback(() => {
    const prev = APP_SIMULATOR_SCENES[Math.max(0, simSceneIndex - 1)] || currentSimScene;
    setSimulatorScene(prev.id);
  }, [simSceneIndex, currentSimScene?.id, setSimulatorScene]);

  const toggleSimulator = useCallback((next) => {
    const v = typeof next === 'boolean' ? next : !simulatorEnabled;
    setSimulatorEnabled(v);
    try { localStorage.setItem('irun:simulator-enabled', v ? '1' : '0'); } catch(e) {}
  }, [simulatorEnabled]);

  const handleSimulatorDecision = useCallback((decisionId) => {
    const decision = APP_SIMULATOR_DECISIONS.find(d => d.id === decisionId);
    if (!decision) return;
    setSimDecisionId(decision.id);
    setSimScore(prev => ({
      safety: clampSimScore(prev.safety + (decision.scoreDelta?.safety || 0)),
      efficiency: clampSimScore(prev.efficiency + (decision.scoreDelta?.efficiency || 0)),
      autonomy: clampSimScore(prev.autonomy + (decision.scoreDelta?.autonomy || 0)),
      business: clampSimScore(prev.business + (decision.scoreDelta?.business || 0)),
    }));
    setSimBadges(prev => prev.includes(decision.badge) ? prev : [...prev, decision.badge]);
    window.setTimeout(() => setSimulatorScene(decision.nextScene || 'S8', { keepDecision: true }), 520);
  }, [setSimulatorScene]);

  const handleAutonomyLevel = useCallback((level) => {
    const next = Math.max(1, Math.min(4, Number(level) || 1));
    setSimAutonomyLevel(next);
    setSimScore(prev => ({
      ...prev,
      autonomy: clampSimScore(58 + next * 10),
      safety: clampSimScore(next >= 4 ? Math.min(prev.safety, 86) : prev.safety + 2),
      business: clampSimScore(prev.business + (next - simAutonomyLevel) * 2),
    }));
    if (next >= 4) setSimBadges(prev => prev.includes('托管日完成') ? prev : [...prev, '托管日完成']);
  }, [simAutonomyLevel]);

  useEffect(() => {
    if (!simulatorEnabled || !currentSimScene) return;
    setStreamCollapsed(false);
    setDispatchCollapsed(false);
    const plantId = currentSimScene.focusPlantId;
    if (plantId) {
      const target = plants.find(p => String(p.id) === String(plantId));
      if (target && target.tenant !== tenant.id) {
        const idx = APP_TENANTS.findIndex(t => t.id === target.tenant);
        if (idx >= 0) setTenantIdx(idx);
      }
      setFocusId(plantId);
      setViewMode('img2');
      setMode('auto');
      setScenarioIdx(typeof currentSimScene.scenarioIdx === 'number' ? currentSimScene.scenarioIdx : 0);
    } else {
      setFocusId(null);
      setViewMode('map2');
      setMode('auto');
    }
  }, [simulatorEnabled, currentSimScene?.id, plants.length, tenant.id]);

  const simulatorState = {
    enabled: simulatorEnabled,
    currentScene: currentSimScene,
    sceneIndex: simSceneIndex,
    score: simScore,
    badges: simBadges,
    selectedDecision: simDecisionId,
    autonomyLevel: simAutonomyLevel,
    onToggle: () => toggleSimulator(!simulatorEnabled),
  };

  // Page load: fetch station list and override plant name/enName by id
  useEffect(()=>{
    let cancelled = false;
    (async ()=>{
      try{
        const {rows:list = []} = await window.IRUN_FETCH?.getPlantList?.();
        const nameById = new Map(
          list.map(x => [
            String(x.id),
            {
              ...x
            }
          ])
        );
        const norm = window.IRUN_FETCH?.normalizePlantApiFields;
        const next = (window.IRUN?.PLANTS || plants).map(p => {
          const item = nameById.get(String(p.id));
          if (!item) return p;
          const kpi = norm ? norm(item, p) : {
            installCapacity: Number(item.installCapacity ?? p.capacity ?? 0),
            power: Number(item.realTimePower ?? item.realTimePowerValue ?? p.power ?? 0),
            dayEnergy: Number(item.dayEnergy ?? item.dayEnergyValue ?? p.gen ?? 0),
          };
          return {
            ...p,
            ...item,
            name: item.name,
            enName: item.name,
            capacity: kpi.installCapacity || p.capacity,
            ...kpi,
          };
        });
        if (cancelled) return;
        setPlants(next);
        if (window.IRUN){
          window.IRUN.PLANTS = next;
          if (window.IRUN.aggregateOf) window.IRUN.AGGREGATE = window.IRUN.aggregateOf(next);
        }
      } catch(e){
        // keep demo data if request fails
        console.warn('getPlantList failed', e);
      }
    })();
    return ()=>{ cancelled = true; };
  }, []);

  // When scenario step fires, mark from/to as busy and emit an event into the global stream
  const onStep = useCallback((step, idx, scenario) => {
    if (!step) return;
    const m = {};
    if (step.from) m[step.from] = true;
    if (step.to)   m[step.to]   = true;
    setBusyMap(m);
  }, []);

  // Reset scenario state when leaving plant (also drop back to map2 if we were in img2)
  // When entering a new plant, honor its defaultScenarioIdx（演示站固定场景 A）
  useEffect(()=>{
    if (!focusPlant) {
      setBusyMap({});
      setMode('auto');
      setScenarioIdx(0);
      setPlantStory(null);
      setManilaScene(null);
      setPlantInfoOpen(false);
      setDispatchCollapsed(true);
      setDispatchPlantCtx(null);
      try { localStorage.setItem('irun:dispatch-collapsed', '1'); } catch (e) {}
      if (viewMode === 'img2') setViewMode('map2');
    } else {
      if (focusPlant.id !== MANILA_PLANT_ID) setPlantStory(null);
      const demo = getDemoPlantProfile(focusPlant.id);
      if (demo) {
        setMode('auto');
        setScenarioIdx(demo.scenarioIdx);
      } else if (focusPlant.irunManaged || focusPlant.enStatus === 'iRun Managed') {
        setMode('auto');
        setScenarioIdx(typeof focusPlant.defaultScenarioIdx === 'number' ? focusPlant.defaultScenarioIdx : 0);
      } else {
        setMode('command');
        const def = typeof focusPlant.defaultScenarioIdx === 'number' ? focusPlant.defaultScenarioIdx : 0;
        setScenarioIdx(def);
      }
    }
  }, [focusPlant?.id, focusPlant?.irunManaged, focusPlant?.enStatus]);

  // 焦点电站切换：隐藏调度列表内电站默认关闭调度，其余电站默认打开
  useEffect(() => {
    if (!focusId) return;
    if (isDispatchHiddenPlant(focusId)) {
      setDispatchCollapsed(true);
      try { localStorage.setItem('irun:dispatch-collapsed', '1'); } catch (e) {}
      setStreamCollapsed(false);
      try { localStorage.setItem('irun:stream-collapsed', '0'); } catch (e) {}
    } else {
      setDispatchCollapsed(false);
      try { localStorage.setItem('irun:dispatch-collapsed', '0'); } catch (e) {}
      setStreamCollapsed(true);
      try { localStorage.setItem('irun:stream-collapsed', '1'); } catch (e) {}
    }
  }, [focusId]);

  const hideDispatchRail = !simulatorEnabled && isDispatchHiddenPlant(focusPlant?.id);
  const hideStreamRail = !simulatorEnabled;

  const handleModeChange = useCallback((next) => {
    const demo = getDemoPlantProfile(focusPlant?.id);
    const managed = focusPlant?.irunManaged || focusPlant?.enStatus === 'iRun Managed';
    if (demo && next === 'command') return;
    if (focusPlant?.id && !demo && !managed && next === 'auto') return;
    setMode(next);
  }, [focusPlant?.id, focusPlant?.irunManaged, focusPlant?.enStatus]);

  const handleScenarioChange = useCallback((idx) => {
    if (getDemoPlantProfile(focusPlant?.id)) return;
    if (focusPlant?.id && !getDemoPlantProfile(focusPlant?.id)) return;
    setScenarioIdx(idx);
  }, [focusPlant?.id]);

  // Centralised scenario stepping — drives both PlantInlineDock and PlantDetail popup
  const { stepIdx, cur, scenario } = useScenarioStepping({
    scenarioIdx,
    plantId: focusPlant?.id,
    mode,
    onStep,
    onScenarioChange: handleScenarioChange,
  });

  // UAV 演示站：进入 img2 即启动循环巡飞（场景步不再控制起飞）
  const uavDemoLoop = viewMode === 'img2' && mode === 'auto' && isUavDemoPlant(focusPlant?.id);
  useEffect(() => {
    if (viewMode !== 'img2' || mode === 'command') {
      setDroneFlying(false);
      return;
    }
    if (isUavDemoPlant(focusPlant?.id)) setDroneFlying(true);
    else setDroneFlying(false);
  }, [viewMode, mode, focusPlant?.id]);

  const returnToOverview = useCallback(() => {
    setFocusId(null);
    setViewMode('map2');
    setMode('auto');
    setScenarioIdx(0);
    setPlantStory(null);
    setManilaScene(null);
    setPlantInfoOpen(false);
    setDispatchCollapsed(true);
    setDispatchPlantCtx(null);
    try { localStorage.setItem('irun:dispatch-collapsed', '1'); } catch (e) {}
  }, []);

  // ESC to close
  useEffect(()=>{
    const onKey = e => {
      if(e.key==='Escape'){
        if(openAgent) setOpenAgent(null);
        else if(focusId) returnToOverview();
      }
    };
    window.addEventListener('keydown', onKey);
    return ()=>window.removeEventListener('keydown', onKey);
  },[openAgent, focusId, returnToOverview]);

  const openHireDeploy = useCallback(() => {
    setPackagePickerOpen(true);
    setActDockOpen(false);
  }, []);

  const focusManilaSite = useCallback(() => {
    const target = plants.find(p => String(p.id) === MANILA_PLANT_ID) || (window.IRUN?.PLANTS || []).find(p => String(p.id) === MANILA_PLANT_ID);
    if (target) {
      const idx = APP_TENANTS.findIndex(t => t.id === target.tenant);
      if (idx >= 0) setTenantIdx(idx);
      applyDispatchPlantCtx(target.id, target);
    }
    setOverviewStory(null);
    setOutcomesPopup(false);
    setOutcomesMinimized(false);
    setActDockOpen(false);
    setFocusId(MANILA_PLANT_ID);
    setViewMode('img2');
    setMode('auto');
    setScenarioIdx(0);
    setPlantStory('manila-site');
    setManilaScene(null);
    setPlantInfoOpen(false);
    setDispatchCollapsed(true);
  }, [plants, applyDispatchPlantCtx]);

  const handleOverviewAction = useCallback((id) => {
    if (id === 'asean') {
      setOverviewStory(null);
      setActDockOpen(v => !v);
      return;
    }
    if (id === 'asean1') {
      setOverviewStory(prev => {
        const next = prev === 'asean1' ? null : 'asean1';
        setActDockOpen(next === 'asean1');
        return next;
      });
      return;
    }
    if (id === 'talent') {
      setOverviewStory(prev => {
        const next = prev === 'talent' ? null : 'talent';
        setActDockOpen(false);
        return next;
      });
      return;
    }
    if (id === 'site') {
      focusManilaSite();
      return;
    }
    if (id === 'hire') {
      openHireDeploy();
    }
  }, [focusManilaSite, openHireDeploy]);

  const handleManilaAction = useCallback((id) => {
    if (id === 'plantInfo') {
      setPlantInfoOpen(v => !v);
      return;
    }
    setPlantStory('manila-site');
    setDispatchCollapsed(true);
    try { localStorage.setItem('irun:dispatch-collapsed', '1'); } catch (e) {}
    if (id === 'outcomes') {
      setManilaScene('outcomes');
      setOutcomesPopup(false);
      setOutcomesMinimized(false);
      window.setTimeout(() => {
        setFocusId(null);
        setViewMode('map2');
        setMode('auto');
        setScenarioIdx(0);
        setPlantStory(null);
        setManilaScene(null);
        setDispatchCollapsed(true);
        setDispatchPlantCtx(null);
        setOutcomesPopup(true);
      }, 3000);
      window.setTimeout(() => setOutcomesMinimized(true), 7900);
      window.setTimeout(() => setOutcomesPopup(false), 11000);
      return;
    }
    setOutcomesPopup(false);
    setOutcomesMinimized(false);
    setManilaScene(prev => prev === id ? null : id);
  }, []);

  const markCebuManaged = useCallback((robots) => {
    const robotIds = robots.map(r => r.agentId);
    const field = robotIds.map((agentId, idx) => ({
      agent: agentId,
      x: DEPLOY_FIELD_POSITIONS[idx % DEPLOY_FIELD_POSITIONS.length].x,
      y: DEPLOY_FIELD_POSITIONS[idx % DEPLOY_FIELD_POSITIONS.length].y,
    }));
    setPlants(prev => {
      const next = prev.map(p => String(p.id) === CEBU_PLANT_ID ? ({
        ...p,
        status: 'iRun Managed',
        enStatus: 'iRun Managed',
        irunManaged: true,
        risk: 'low',
        alerts: 0,
        alarmStatus: 'normal',
        tags: [],
        agents: Array.from(new Set([...(p.agents || []), ...robotIds])),
        robotField: field,
        defaultScenarioIdx: 0,
      }) : p);
      if (window.IRUN) window.IRUN.PLANTS = next;
      return next;
    });
  }, []);

  const startHireDeploy = useCallback((packageId) => {
    const robots = makeDeployRobots(packageId);
    setPackagePickerOpen(false);
    setActDockOpen(false);
    markCebuManaged(robots);
    setDeployRun({ id: `run-${Date.now()}`, packageId, robots });
  }, [markCebuManaged]);

  const finishHireDeploy = useCallback(() => {
    setDrillActive(true);
    window.setTimeout(() => {
      setDeployRun(null);
      setDrillActive(false);
      setDispatchPlantCtx(null);
      setFocusId(CEBU_PLANT_ID);
      setViewMode('img2');
      setMode('auto');
      setScenarioIdx(0);
    }, 3000);
  }, []);

  const showPlantDock = viewMode === 'img2' && focusPlant && (focusPlant.id === MANILA_PLANT_ID ? plantInfoOpen : true);
  const showBottomDock = simulatorEnabled || showPlantDock || (!simulatorEnabled && viewMode === 'map2' && (actDockOpen || !!overviewStory));
  const zh = lang !== 'en';

  return (
    <LangCtx.Provider value={lang}>
    <div className={`workbench theme-${theme}${agentsRailVisible ? ' agents-visible' : ''}${actDockOpen ? ' act-dock-open' : ''}${deployRun ? ' deploying' : ''}${drillActive ? ' drilling' : ''}${showBottomDock ? '' : ' no-bottom-dock'}${(viewMode==='img2' && focusPlant) ? ' img2-focused' : ''}`}>
      {/* background scene */}
      <div className="scene">
        <div className="grid-bg"/>
        <div className="scan"/>
        <div className="vignette"/>
      </div>

      {/* full-bleed image background (image modes + map2 展示) */}
      {(viewMode === 'img2') && (() => {
        const idx = focusPlant ? plants.findIndex(p=>p.id===focusPlant.id) : -1;
        const suffix = theme === 'light' ? 'qian' : '';
        const bg = idx >= 0
          ? `assets/app/plants/plant${String(idx+1).padStart(3,'0')}${suffix}.png`
          : 'assets/app/backgrounds/img2.jpg';
        return <div className="scene-img-bg" style={{backgroundImage:`url('${bg}')`}}/>;
      })()}
      {(viewMode === 'map2' && map2SubMode === 'show') && (
        <div className="scene-img-bg" style={{backgroundImage:`url('assets/app/sites/rjgf001.png')`}}/>
      )}
      {(viewMode === 'map2' && map2SubMode === 'pic1') && (
        <div className="scene-img-bg" style={{backgroundImage:`url('assets/app/sites/rjgf005.png')`}}/>
      )}
      {(viewMode === 'map2' && map2SubMode === 'pic2') && (
        <div className="scene-img-bg" style={{backgroundImage:`url('assets/app/sites/rjgf004.png')`}}/>
      )}
      {(viewMode === 'map2' && map2SubMode === 'pic3') && (
        <div className="scene-img-bg" style={{backgroundImage:`url('assets/app/sites/rjgf001qian.png')`}}/>
      )}
      {/* map2 漫游 — video background */}
      {(viewMode === 'map2' && map2SubMode === 'roam') && (
        <video className="scene-video-bg" src="assets/app/videos/manyou001.mp4" autoPlay loop playsInline/>
      )}
      {(viewMode === 'map2' && map2SubMode === 'vid3') && (
        <video className="scene-video-bg" src="assets/app/videos/rjgf001qian.mp4" autoPlay loop playsInline/>
      )}

      {/* full-screen plants map / 3D scene */}
      {viewMode === 'map' && <PlantsMap plants={plants} focusId={focusId} onFocus={setFocusId}/>}
      {viewMode === 'map2' && (
        <Map2Overlay
          plants={plants}
          focusId={focusId}
          onRobotClick={()=>{
            setFocusId(null);
            setDispatchPlantCtx(null);
          }}
          onFocus={(id, plant)=>{
            const p = plant || plants.find(x => x.id === id);
            applyDispatchPlantCtx(id, p);
            setActDockOpen(false);
            setFocusId(id);
            setViewMode('img2');

            // 先把点击时的 plant 同步写入 plants，保证 focusPlant 立即拿到这份上下文
            if (p){
              setPlants(prev => {
                const next = prev.map(pp => String(pp.id) === String(id) ? ({ ...pp, ...p }) : pp);
                if (window.IRUN) window.IRUN.PLANTS = next;
                return next;
              });
            }

            // dispatch 折叠时：把点击的 plant 相关告警拉取回来，更新到 plants，
            // 这样 TopBar 的 focusPlant->k 会使用最新 alerts/alarmStatus 等字段
            (async ()=>{
              try{
                const alarmRes = await window.IRUN_FETCH?.getPlantAlarmList?.(p.id);
                const kpiRes = await window.IRUN_FETCH?.getPlantKpi?.(p.id);
                const norm = window.IRUN_FETCH?.normalizePlantApiFields;
                const kpiFields = norm && kpiRes ? norm(kpiRes, p) : null;
                setPlants(prev => {
                  const next = prev.map(pp => {
                    if (String(pp.id) !== String(id)) return pp;
                    return {
                      ...pp,
                      ...(kpiFields || {}),
                      alarmTotal: alarmRes.total,
                      alarmList: alarmRes?.rows,
                      pendingAlerts: alarmRes.total > 0 ? Math.floor(Math.random() * (alarmRes.total - 1)) + 1 : 0,
                      risk: kpiRes?.tags?.includes('KPI_SEVERE') || kpiRes?.tags?.includes('KPI_GENERAL') ? 1 : 0,
                      noiseReductionRate:Math.floor(Math.random() * 10) + 70
                    };
                  });
                  if (window.IRUN) window.IRUN.PLANTS = next;
                  return next;
                });
              }catch(e){
                console.warn('getPlantAlarmList failed', e);
              }
            })();
          }}
          subMode={map2SubMode}
          tenantId={tenant.id}
        />
      )}

      {/* overview dispatch robots — walk bottom-right → plant pin, park, then retrace */}
      {viewMode === 'map2' && overviewBots.map(b => {
        const plant = tenantPlants.find(p => p.id === b.plantId);
        if (!plant) return null;
        return <OverviewDispatchRobot key={b.key} botKey={b.key} plant={plant} recall={b.recall} onDone={onOverviewBotDone}/>;
      })}

      {/* map2 toggle — theme-aware:
            light → 图1 / 图2 (qian backgrounds)
            dark  → 展示 / 漫游 (rjgf001 + manyou001) */}
      {viewMode === 'map2' && (
        <div className="map2-toggle">
          {theme === 'light' ? null : (
            <>
              <button className={`map2-toggle-btn${map2SubMode==='show'?' active':''}`} onClick={()=>setMap2SubMode('show')}>{lang==='en'?'View':'展示'}</button>
              <button className={`map2-toggle-btn${map2SubMode==='roam'?' active':''}`} onClick={()=>setMap2SubMode('roam')}>{lang==='en'?'Roam':'漫游'}</button>
            </>
          )}
        </div>
      )}
      {(viewMode === 'model' || viewMode === 'day' || viewMode === 'night') && <Scene3D mode={viewMode}/>}

      {/* top KPIs */}
      <TopBar focusPlant={focusPlant} plants={tenantPlants} agg={tenantAgg} onPlantChange={handlePlantChange} tenant={tenant} tenantIdx={tenantIdx} onTenant={onTenantChange} onBack={returnToOverview} lang={lang} onLang={toggleLang} theme={theme} onTheme={toggleTheme} agentsRailVisible={agentsRailVisible} onAgentsRailToggle={()=>setAgentsRailVisible(v=>!v)}/>

      <IntroTransition/>

      {!simulatorEnabled && viewMode === 'map2' && (
        <TalentMarketOverlay onHireDeploy={openHireDeploy}/>
      )}
      {packagePickerOpen && (
        <PackagePicker onPick={startHireDeploy} onClose={()=>setPackagePickerOpen(false)}/>
      )}
      {deployRun && (
        <TalentDeployFlight key={deployRun.id} robots={deployRun.robots} onComplete={finishHireDeploy}/>
      )}
      {drillActive && <CameraDrillOverlay/>}

      {simulatorEnabled && (
        <MissionFeedbackLayer
          currentScene={currentSimScene}
          score={simScore}
          badges={simBadges}
          selectedDecision={simDecisionId}
          autonomyLevel={simAutonomyLevel}/>
      )}
      {simulatorEnabled && (
        <OperationsBigScreenLayer
          currentScene={currentSimScene}
          score={simScore}
          badges={simBadges}
          selectedDecision={simDecisionId}
          autonomyLevel={simAutonomyLevel}
          onSelectScene={setSimulatorScene}
          onDecision={handleSimulatorDecision}
          onAutonomyChange={handleAutonomyLevel}
          onOpenAgent={setOpenAgent}/>
      )}
      {!simulatorEnabled && viewMode === 'map2' && (
        <div className="act-switcher" aria-label="Act navigation">
          {OVERVIEW_ACTIONS.map(action => (
            <button
              key={action.id}
              type="button"
              className={
                (action.id === 'asean' && actDockOpen && !overviewStory)
                || (action.id === overviewStory)
                  ? 'active' : ''
              }
              onClick={()=>handleOverviewAction(action.id)}
            >
              {zh ? action.zh : action.en}
            </button>
          ))}
        </div>
      )}
      {!simulatorEnabled && viewMode === 'map2' && overviewStory === 'asean1' && (
        <TypewriterCopy
          className="overview-story"
          duration={5000}
          text={`AI is not a tool. It’s a colleague.\nToken, going overseas —a 24/7 digital O&M team for every ASEAN plant.`}
        />
      )}
      {!simulatorEnabled && viewMode === 'map2' && overviewStory === 'talent' && (
        <TypewriterCopy
          className="overview-story talent-story"
          duration={5000}
          text={`Hire your digital O&M team.\nYou’re not buying software — you’re hiring a team.\nAlgorithmic energy for 86 digital employees across ASEAN.`}
        />
      )}
      {!simulatorEnabled && viewMode === 'map2' && outcomesPopup && (
        <OutcomesFlowPopup minimized={outcomesMinimized} zh={zh}/>
      )}
      {!simulatorEnabled && viewMode === 'img2' && focusPlant?.id === MANILA_PLANT_ID && (
        <div className="plant-action-switcher" aria-label="Manila site actions">
          {MANILA_ACTIONS.map(action => (
            <button
              key={action.id}
              type="button"
              className={(action.id === 'plantInfo' ? plantInfoOpen : manilaScene === action.id) ? 'active' : ''}
              onClick={()=>handleManilaAction(action.id)}
            >
              {zh ? action.zh : action.en}
            </button>
          ))}
        </div>
      )}

      {/* left + right rails over map */}
      <div className="stage">
        {!hideStreamRail && (
          <div className={`left-rail ${(!simulatorEnabled && streamCollapsed)?'collapsed':''}`}>
            {simulatorEnabled
              ? <ScenarioDirectorRail
                  scenes={APP_SIMULATOR_SCENES}
                  currentScene={currentSimScene}
                  onSelect={setSimulatorScene}
                  onPrev={prevSimulatorScene}
                  onNext={nextSimulatorScene}
                  onTriggerIncident={()=>setSimulatorScene('S4')}
                  onManagerMode={()=>setSimulatorScene('S7')}
                  onAutonomyMode={()=>setSimulatorScene('S9')}
                  onToggleLegacy={()=>toggleSimulator(false)}
                  onCollapse={()=>toggleSimulator(false)}/>
              : (streamCollapsed
                  ? <EventStreamTab onExpand={()=>toggleStream(false)}/>
                  : <EventStream focusPlant={focusPlant} theme={theme} onCollapse={()=>toggleStream(true)}/>)
            }
          </div>
        )}
        <div className="center-stretch"/>
        {!hideDispatchRail && (
          <div className={`right-rail ${(!simulatorEnabled && dispatchCollapsed)?'collapsed':''}`}>
            {simulatorEnabled
              ? <ManagerDecisionConsole
                  currentScene={currentSimScene}
                  score={simScore}
                  decisions={APP_SIMULATOR_DECISIONS}
                  selectedDecision={simDecisionId}
                  autonomyLevel={simAutonomyLevel}
                  onDecision={handleSimulatorDecision}
                  onAutonomyChange={handleAutonomyLevel}
                  onNext={nextSimulatorScene}
                  onToggleLegacy={()=>toggleSimulator(false)}/>
              : (dispatchCollapsed
                  ? <DispatchTab onExpand={()=>toggleDispatch(false)}/>
                  : <DispatchPanel focusPlant={focusPlant} dispatchPlantCtx={dispatchPlantCtx} selectedAgent={selectedAgent} onSelectAgent={setSelectedAgent} onClearDispatchPlantCtx={()=>setDispatchPlantCtx(null)} onOpenAgent={setOpenAgent} onCollapse={()=>toggleDispatch(true)} mode={mode} theme={theme} onDispatchCommand={onDispatchCommand} onDispatchToPlant={onDispatchToPlant} onRecallDispatch={recallAllBots}/>)
            }
          </div>
        )}
      </div>

      {/* far-right vertical agents rail */}
      {agentsRailVisible && (
        <AgentsRail
          focusPlant={focusPlant}
          busyMap={busyMap}
          selected={selectedAgent}
          theme={theme}
          onSelect={(id)=>{ setSelectedAgent(id); if (id && dispatchCollapsed && !hideDispatchRail) toggleDispatch(false); }}
          onOpen={setOpenAgent}
          onSkillOpen={()=>setOpenSkillMarket(true)}
          onDroneFly={()=>setDroneFlying(v=>!v)}
          droneActive={droneFlying}
          tooltipEnabled={dispatchCollapsed}/>
      )}

      {/* drone fly overlay */}
      {droneFlying && (
        <DroneFlight
          plant={focusPlant}
          loop={uavDemoLoop}
          onDone={uavDemoLoop ? undefined : onDroneFlightDone}
        />
      )}

      {/* img2 plant view:
            - command mode → clear field, render any dispatched walking robots
            - auto mode + robotField → multi-agent robot field
            - else → single walking robot */}
      {viewMode === 'img2' && focusPlant && (
        mode === 'command'
          ? <DispatchedRobots robots={dispatchedRobots} onRobotDone={onRobotDone}/>
          : focusPlant.robotField
            ? <PlantAgentField plant={focusPlant} busyMap={busyMap} cur={cur} onOpenAgent={setOpenAgent}/>
            : <PlantRobot/>
      )}
      {viewMode === 'img2' && focusPlant?.id === MANILA_PLANT_ID && plantStory === 'manila-site' && (
        <>
          <TypewriterCopy
            className="overview-story plant-story"
            duration={3000}
            text="A digital workforce, on duty 24/7."
          />
          <ManilaSiteOverlay scene={manilaScene} onOpenAgent={setOpenAgent}/>
        </>
      )}


      {showBottomDock && (
        <div className="dock">
          {simulatorEnabled
            ? <DigitalTeamOrgPanel
                currentScene={currentSimScene}
                score={simScore}
                badges={simBadges}
                selectedDecision={simDecisionId}
                onOpen={setOpenAgent}/>
            : (viewMode === 'map2'
            ? (overviewStory === 'talent'
                ? <TalentSquadDock packages={TALENT_PACKAGES} onPick={startHireDeploy} zh={zh}/>
                : <OperationsActDock plants={plants} onHireDeploy={openHireDeploy} onOpenAgent={setOpenAgent}/>)
            : <PlantInlineDock
                plant={focusPlant}
                scenario={scenario}
                stepIdx={stepIdx}
                cur={cur}
                busyMap={busyMap}
                mode={mode}
                scenarioIdx={scenarioIdx}
                onModeChange={handleModeChange}
                onScenarioChange={handleScenarioChange}/>)}
        </div>
      )}

      {/* plant detail overlay — 非 img2/map2 视图；底部卡片点击不再弹出 */}
      {focusPlant && (viewMode !== 'img2') && (viewMode !== 'map2') && (
        <PlantDetail
          plant={focusPlant}
          scenario={scenario}
          stepIdx={stepIdx}
          cur={cur}
          mode={mode}
          scenarioIdx={scenarioIdx}
          onModeChange={handleModeChange}
          onScenarioChange={handleScenarioChange}
          onClose={()=>setFocusId(null)}/>
      )}

      {/* agent modal */}
      {openAgent && (
        focusPlant?.id === MANILA_PLANT_ID
          ? <ManilaAgentDossier agentId={openAgent} onClose={()=>setOpenAgent(null)}/>
          : <AgentModal
              agentId={openAgent}
              focusPlantId={focusPlant?.id}
              onClose={()=>setOpenAgent(null)}
              busyMap={busyMap}
              onChat={(id)=>{
                setSelectedAgent(id);
                if (id && dispatchCollapsed && !isDispatchHiddenPlant(focusPlant?.id)) toggleDispatch(false);
              }}
            />
      )}

      {/* skill market modal */}
      {openSkillMarket && <SkillModal onClose={()=>setOpenSkillMarket(false)}/>}
    </div>
    </LangCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
