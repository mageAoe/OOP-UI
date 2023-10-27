module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: '🚀', name: '特性:   🚀  新增功能', emoji: '🚀' },
    { value: '🧩', name: '修复:   🧩  修复缺陷', emoji: '🧩' },
    { value: '📚', name: '文档:   📚  文档变更', emoji: '📚' },
    { value: '🎨', name: '格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）', emoji: '🎨' },
    { value: '♻️', name: '重构:   ♻️  代码重构（不包括 bug 修复、功能新增）', emoji: '♻️' },
    { value: '⚡️', name: '性能:   ⚡️  性能优化', emoji: '⚡️' },
    { value: '✅', name: '测试:   ✅  添加疏漏测试或已有测试改动', emoji: '✅' },
    { value: '📦️', name: '构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）', emoji: '📦️' },
    { value: '🎡', name: '集成:   🎡  修改 CI 配置、脚本', emoji: '🎡' },
    { value: '⏪️', name: '回退:   ⏪️  回滚 commit', emoji: '⏪️' },
    { value: '🔨', name: '其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）', emoji: '🔨' }
    // { value: 'feat', name: 'feat: 新增功能' },
    // { value: 'fix', name: 'fix: 修复 bug' },
    // { value: 'docs', name: 'docs: 文档变更' },
    // { value: 'style', name: 'style: 代码格式（不影响功能，例如空格、分号等格式修正）' },
    // { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    // { value: 'perf', name: 'perf: 性能优化' },
    // { value: 'test', name: 'test: 添加、修改测试用例' },
    // { value: 'build', name: 'build: 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）' },
    // { value: 'ci', name: 'ci: 修改 CI 配置、脚本' },
    // { value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    // { value: 'revert', name: 'revert: 回滚 commit' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 交互提示信息
  messages: {
    type: '请选择提交类型(必填)',
    scope: '选择一个 scope (可选)',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(破坏性修改)(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确认提交？'
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤
  skipQuestions: ['body', 'footer'],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|', // 支持 body 和 footer
  footerPrefix: 'ISSUES CLOSED:',
  askForBreakingChangeFirst: true
}
