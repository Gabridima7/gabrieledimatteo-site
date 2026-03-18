

## Problem

The "Update" button keeps reappearing after publishing because the app bundle contains duplicate React instances. This causes React hydration/rendering conflicts that prevent the deployed version from working correctly.

## Solution

Add a `dedupe` configuration to `vite.config.ts` to force a single React instance across the entire bundle:

### File: `vite.config.ts`
Add `dedupe: ["react", "react-dom", "react/jsx-runtime"]` inside the `resolve` block.

This is a one-line addition that forces Vite to resolve all React imports to the same module, eliminating conflicts. After applying the change, rebuild and click **Update** once more — it should stick.

