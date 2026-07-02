# iRun Workbench 当前页面布局记录

更新时间：2026-07-02
对应版本：`bd47579`（Remove simulator and restore patrol layout）
本地预览：`http://127.0.0.1:8125/`

## 1. 页面基准

当前页面是单页全屏工作台，设计基准为 `1920 x 1080`。根容器 `.workbench` 会按浏览器视口等比缩放并居中显示，因此所有主要 UI 都按大屏固定坐标组织。

- 根容器：`.workbench`
- 默认视图：`viewMode = map2`
- 默认语言：读取 `localStorage.irun:lang`，无记录时为英文
- 默认主题：读取 `localStorage.irun:theme`，无记录时为浅色
- 默认地图子模式：浅色主题为 `pic1`，暗色主题为 `show`

页面层级从下到上大致为：

1. `.scene`：网格、扫描线、暗角等基础背景。
2. `.scene-img-bg` / `.scene-video-bg`：总览或电站的大图/视频背景。
3. `Map2Overlay`：总览点位、能量流线、巡检机器人。
4. `TopBar`：48px 顶部品牌、总览、电站选择、语言/主题/Token 控制。
5. `TalentMarketOverlay`、`act-switcher`：总览页左侧纵向行动入口与叙事触发器。
6. `.stage`：左侧事件/模拟器轨道、中部伸展区、右侧对话/经理控制台。
7. `AgentsRail`：可选右侧 AI 员工竖栏。
8. `.dock`：按状态显示总览 ACT dock、电站 inline dock 或模拟器数字团队面板。
9. 弹窗/特效层：启动过场、雇佣套餐、派发动画、无人机、智能体详情、技能市场等。

## 2. 启动过场

页面加载后先出现 `IntroTransition`：

- 优先播放 `assets/app/videos/video001.mp4`。
- 视频不可播放时进入 logo loading 兜底态。
- 视频阶段右下/画面上有 `Skip` 按钮，可跳过。
- 过场结束后淡出，进入工作台主界面。

## 3. 顶部栏

顶部栏组件为 `TopBar`，固定在画布顶部，高度为 `48px`。

- 左侧品牌区：
  - iRun 图标。
  - 文案 `iRUN·WORKBENCH`。
- 中部导航区：
  - 默认显示 `Overview` / `总览`。
  - 进入电站后显示当前电站选择器，可切换电站。
- 右侧控制区：
  - 当前时间。
  - 中/EN 语言切换。
  - 天气/状态信息。
  - 带过渡遮罩的刷新按钮，刷新后跳过启动视频。
  - 浅色/暗色主题切换。
  - `Token` 文案按钮，用于显示/隐藏 AI 员工栏。

总览状态下，顶部栏不承担大块 KPI 展示；它主要是导航和全局控制。

## 4. 总览页默认状态

默认总览页是大屏装置态，背景画面是主角。

- `viewMode = map2`
- `focusId = null`
- `dispatchCollapsed = true`
- 右侧 `DispatchTab` 默认收起但可见。
- `streamCollapsed` 默认读取本地缓存，但非模拟器时事件流整体隐藏
- `agentsRailVisible = false`
- `actDockOpen = false`

浅色主题默认背景为：

- `map2SubMode = pic1`
- 背景图：`assets/app/sites/rjgf005.png`

暗色主题可切换：

- `show`：`assets/app/sites/rjgf001.png`
- `roam`：`assets/app/videos/manyou001.mp4`

当前代码里浅色主题的 `map2-toggle` 按钮不显示，暗色主题显示 `View / Roam` 两个按钮。

## 5. 总览中心画面

总览中心由 `Map2Overlay` 管理，覆盖在背景图之上。

- 电站点位：`.map2-pin`
  - 显示电站名称、实时功率和状态。
  - 点击点位会进入该电站的 `img2` 焦点页。
- 能量/Token 流线：`.map2-token-lines`
  - 在部分子模式下展示从中心源点到电站点位的流动线。
- 巡检机器人：`.patrol-robot`
  - 分布在总览画面中。
  - 可点击，也支持键盘 Enter/空格。
  - 当前点击逻辑会清空电站焦点与调度上下文，用于回到总览对话场景。
- 对话派发机器人：`OverviewDispatchRobot`
  - 由右侧对话调度触发。
  - 从右下方向目标电站行走，召回时原路返回。

## 6. 左侧区域

左侧区域在 `.stage` 内，由 `.left-rail` 承载。

普通总览状态：

- `hideStreamRail = !simulatorEnabled`
- 因此非模拟器状态下，左侧事件流不渲染。

模拟器状态：

- 左侧显示 `ScenarioDirectorRail`。
- 包含场景列表、上一幕/下一幕、触发告警、经理模式、启动托管、切回旧版对话等操作。

## 7. 中部区域

`.stage` 中间是 `.center-stretch`，本身不放固定 UI，主要负责给背景画面和地图交互留出视觉空间。

总览时，中间视觉重心是：

- 背景图/视频。
- 电站点位。
- 巡检机器人。
- 雇佣团队提示卡片和 ACT 入口。
- `ASEAN ACT ONE` 和 `Talent Market Hire` 触发右侧大字打字机叙事。

## 8. 右侧区域

右侧区域在 `.stage` 内，由 `.right-rail` 承载。

普通状态：

- 默认折叠，只显示 `DispatchTab` 竖向入口。
- 点击入口后展开 `DispatchPanel`。
- 在对话里识别到目标电站和智能体后，可触发总览派发机器人动画。

模拟器状态当前默认关闭且没有入口展示，暂时不作为总览默认能力使用。

## 9. 底部区域

底部是否出现 `.dock` 由 `showBottomDock` 控制：

- 电站焦点页 `img2 + focusPlant`：显示。
- 总览页在 `actDockOpen = true`、`ASEAN ACT ONE` 或 `Talent Market Hire` 激活时显示。

总览默认没有大 dock，因此 `.workbench` 带有 `no-bottom-dock` 类，主画面延展到底部。

总览页行动入口为 `.act-switcher`，现在统一放在页面最左侧，并在大屏高度中线垂直居中，从上往下排列。按钮宽度按自身文字自适应：

- `ASEAN ACT`：打开/关闭底部 `OperationsActDock`。
- `ASEAN ACT ONE`：右侧打字机显示 “AI is not a tool...” 文案，同时打开底部 `OperationsActDock`；再次点击收起。
- `Talent Market Hire`：右侧打字机显示数字运维团队雇佣文案，同时底部显示三张 Squad 套餐卡；再次点击收起。
- `AI Operations Site`：直接进入 Manila-E 单电站演示页。
- `Incident Trigger`：当前是预留按钮。
- `Outcomes Flow`：当前是预留按钮。
- `Hire a Team`：打开雇佣团队套餐选择。
- `Bet he Manager`：当前是预留按钮。
- `Hand over to iRun`：当前是预留按钮。

暂时隐藏的总览入口：`Multi-Agent Relay`、`Disagreement Arbitration`、`Closure Report`、`Managed Plant`。这些能力在 Manila-E 单电站演示页中保留。

当 `ASEAN ACT` 或 `ASEAN ACT ONE` 打开后，底部 `.dock` 显示 `OperationsActDock`：

- 左侧：Token / 已托管电站 / 覆盖电站等指标。
- 中部：横向滚动/摆动的 AI 员工机器人队列。
- 右侧：Hire Team 行动卡。

`Talent Market Hire` 打开后，底部 `.dock` 显示三张套餐卡：

- `Basic O&M Squad`：告警 + 诊断 + 工单，低 Token 档位。
- `Inspection-Plus Squad`：告警 + 诊断 + 工单 + 巡检 + 排程，中 Token 档位。
- `Full-Managed Squad`：运营主管 + 全部 10 个数字员工，高 Token 档位。

## 10. 雇佣团队流程

总览页存在 `TalentMarketOverlay` 作为轻量覆盖入口。

`AI训练中心` 标签内显示 `Token Reactor`。该覆盖层已接入中英文切换：

- 中文：`AI训练中心`、`数字人才市场`
- 英文：`AI Training Center`、`Digital Talent Market`

点击 `Hire a Team`、`HIRE & DEPLOY` 或 Talent 套餐卡后：

1. 打开 `PackagePicker`。
2. 选择套餐后创建一组待部署机器人。
3. `TalentDeployFlight` 播放部署飞行动画。
4. 部署完成后短暂显示 `CameraDrillOverlay`。
5. 自动进入 Cebu 电站的 `img2` 焦点页，并把该站标记为 `iRun Managed`。

## 11. AI 员工栏

AI 员工栏组件为 `AgentsRail`，默认隐藏。

- 顶部右侧 `Token` 按钮控制显示/隐藏。
- 显示后 `.workbench` 添加 `agents-visible`。
- 右侧出现垂直 AI 员工列表、状态点、技能市场入口。
- 点击员工会选中该智能体；在对话栏可用时会自动展开右侧 `DispatchPanel`。
- 双击或详情入口可打开 `AgentModal`。

## 12. 电站焦点页

点击总览点位后进入电站焦点页。

状态变化：

- `focusId = 当前电站 id`
- `viewMode = img2`
- `actDockOpen = false`
- 背景切换为该电站图片：
  - 浅色主题追加 `qian` 后缀，例如 `plant001qian.png`
  - 暗色主题使用普通电站图，例如 `plant001.png`

返回总览页时会强制收起右侧对话调度入口，避免从电站页带回展开态。

## 13. Manila-E 单电站演示页

点击总览页 `AI Operations Site` 会进入 Manila-E，并显示左侧 `.plant-action-switcher`：

- `Plant Info` / 中文 `电站信息`：控制底部电站信息 dock 显示/隐藏，默认隐藏。
- `Simulate Alarm`
- `Event Trigger`
- `Multi-Agent Collaboration`
- `Disagreement Arbitration`
- `Closure Report`
- `Outcomes Flow`
- `Managed Plant`
- `Be the Manager` / 中文 `当一天经理`

Manila-E 页面右侧保持 3 秒打字机文案 `A digital workforce, on duty 24/7.`，同时叠加 `ManilaSiteOverlay`：

- 左侧电站状态条：`100MWp`、约 `18万组件`、`6,000组串`、数百台组串式逆变器、`PR 82.1%`、`可利用率 99.4%`、日发电约 `40万kWh`。
- 数字员工分布在监控台、设备区、机巢、调度台、安全岗、数据岗、运营席等岗位；点击员工打开员工档案表。
- 场景按钮会切换固定剧情层：告警点/任务卡/实时事件流、多智能体协作流转、分歧仲裁、闭环报告、托管仪式、经理审批工作台。
- Manila-E 的右侧对话调度默认收起。
- `Outcomes Flow` 会先在单站页播放 3 秒数据上行，然后转回总览页并打开成果回流弹窗；弹窗随后缩小成新经验光点回流 `AI Training Center / AI训练中心`。

电站页主体：

- 有 `robotField` 的电站显示 `PlantAgentField`，呈现多智能体现场分布。
- 无 `robotField` 的电站显示 `PlantRobot` 单机器人巡检。
- 指挥模式下显示 `DispatchedRobots`，用于表现从对话调度派出的机器人。
- UAV 演示站进入 `img2 + auto` 后会启动 `DroneFlight` 循环巡飞。

电站页底部 `.dock` 显示 `PlantInlineDock`：

- KPI 卡。
- 数字团队/智能体状态。
- 场景日志。
- 场景/任务流。
- Token 消耗。

不同电站会根据配置锁定托管模式或指挥模式：

- 演示站和已托管站通常进入 `auto`。
- 普通站默认进入 `command`。

### Manila-E 专用演示页

点击左侧 `AI Operations Site` 会直接进入 Manila-E。

- 右侧显示打字机大字：`A digital workforce, on duty 24/7.`
- 左侧显示单站动作按钮：
  - `Simulate Alarm`
  - `Event Trigger`
  - `Multi-Agent Collaboration`
  - `Disagreement Arbitration`
  - `Closure Report`
  - `Outcomes Flow`
  - `Managed Plant`
- 现场层显示数字员工岗位分布：
  - 监控台、设备区、机巢、调度台、安全岗、数据岗、运营席。
  - 员工有状态光圈、轻微走动/浮动、岗位标签和任务线。
- 左侧轻量状态条显示：
  - 装机 `100MWp`
  - 约 `18万` 组件
  - 约 `6,000` 组串
  - 数百台组串式逆变器
  - `PR 82.1%`
  - 可利用率 `99.4%`
  - 日发电约 `40万 kWh`
- 点击员工打开 `ManilaAgentDossier` 档案表，字段包括姓名/编号、岗位、数字工龄、覆盖电站数、当前状态、今日产出、擅长能力、协作对象、今日 Token。

## 13. 模拟器状态

模拟器由 `simulatorEnabled` 控制，默认关闭且当前界面不显示入口。

开启后布局切换为：

- 左侧：`ScenarioDirectorRail`
- 中央：`MissionFeedbackLayer` + `OperationsBigScreenLayer`
- 右侧：`ManagerDecisionConsole`
- 底部：`DigitalTeamOrgPanel`

模拟器会根据当前场景自动设置焦点电站、视图模式、场景编号和左右面板展开状态。

## 14. 当前布局原则

- 总览页以大屏背景和点位动效为主，不用大量面板压住画面。
- 顶部栏只保留品牌、导航和全局控制。
- 普通状态隐藏左侧事件流，右侧对话调度入口默认收起但可见。
- 底部 dock 不默认占位，只有 ACT、电站详情或 Talent 套餐需要时出现。
- 交互入口尽量轻：
  - 电站点位进入电站页。
  - 右侧竖向入口进入对话调度。
  - 顶部 `Token` 按钮打开 AI 员工栏。
  - 左侧 `ASEAN ACT` / `Hire a Team` 负责演示和部署流程。
