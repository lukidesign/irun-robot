# Release v0.3.0

发布日期：2026-07-02

## 更新内容

- 总览页训练中心中心点增强外发光，加入一圈圈向外扩散的能量波纹。
- 总览页左侧行动按钮精简，隐藏暂时不用的 `Multi-Agent Relay`、`Disagreement Arbitration`、`Closure Report`、`Managed Plant`。
- 总览页左侧按钮和 Manila-E 左侧按钮改为按文字长度自适应宽度。
- `HIRE & DEPLOY` 部署动画保留机器人飞行动作，并加强目标电站的大圈层扩散效果；圈层停留约 3 秒后再进入单电站页。
- Manila-E 新增 `Plant Info` 按钮，控制底部电站信息 dock 显示/隐藏，默认隐藏。
- Manila-E 进入后右侧对话调度默认收起。
- Manila-E 剧情场景优化了机器人头像、经理审批弹窗尺寸与审批卡可视化。
- 顶部电站切换下拉加强文字回显与高对比显示。
- `SKILL MARKETPLACE` 滚动条改为深色系，与弹窗整体风格一致。

## 验证

- Babel 静态转译检查。
- `git diff --check`。
- 本地静态预览 HTTP 可达检查。
