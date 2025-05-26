const { getDefaultConfig } = require('@expo/metro-config');
const DefaultConfig = getDefaultConfig(__dirname);

DefaultConfig.resolver.sourceExts.push('cjs');
DefaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = DefaultConfig;