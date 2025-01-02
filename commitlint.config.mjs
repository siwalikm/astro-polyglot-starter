export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "references-empty": [2, "never"],
    "scope-enum": [2, "always", ["ci", "content", "design", "setup", "tech"]],
    "scope-case": [2, "always", "lower-case"],
    "type-enum": [2, "always", ["docs", "chore", "feat", "fix", "ref", "test"]],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["#"],
    },
  },
};
