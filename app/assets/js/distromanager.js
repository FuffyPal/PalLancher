const { DistributionAPI } = require("helios-core/common");

const ConfigManager = require("./configmanager");

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
exports.REMOTE_DISTRO_URL = "https://gist.githubusercontent.com/FuffyPal/9e1dc4dca4d2f780acd2efa8659b9c96/raw/b9668a71da253dde0fa4505d5b0239520a388f2a/gistfile1.txt"

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false,
);

exports.DistroAPI = api;
