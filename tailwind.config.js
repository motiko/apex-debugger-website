// Design tokens mirror Apex Debugger v0.9 (motiko/sfdc-debug-logs react/src/ui/tokens.ts).
// Colors resolve to CSS variables defined in styles.css (light on :root, dark via
// prefers-color-scheme), so no dark: variants are needed.
module.exports = {
  purge: ["public/*.html"],
  darkMode: false, // theme switching is done with CSS variables in styles.css
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        selected: "var(--selected)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        divider: "var(--divider)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "on-accent": "var(--on-accent)",
        focus: "var(--focus)",
        match: "var(--match)",
        log: {
          bg: "var(--log-bg)",
          debug: "var(--log-debug)",
          soql: "var(--log-soql)",
          method: "var(--log-method)",
          error: "var(--log-error)",
          callout: "var(--log-callout)",
        },
      },
    },
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
      mono: [
        "ui-monospace",
        '"SF Mono"',
        '"Cascadia Code"',
        '"JetBrains Mono"',
        "Menlo",
        "Consolas",
        "monospace",
      ],
    },
    borderRadius: {
      none: "0",
      sm: "4px",
      DEFAULT: "6px",
      md: "6px",
      lg: "8px",
      full: "9999px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
