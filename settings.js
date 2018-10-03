var Settings = (function () {

    const VERSION = 1;

    var settings = { // defaults
        version: VERSION,
        randomAuf: true,
        upColors: { yellow: true, red: true, blue: false },
        algs: ["roux_cmll_s_left_bar"]
    };
    if (localStorage.settings) {
        var stored = JSON.parse(localStorage.settings);
        if (stored && stored.version && stored.version == VERSION) {
            switch (stored.version) {
                case 1: // accept version 1
                    settings = stored;
                    break;
                default: return; // discard unknown version
            }
        }
    }

    function saveSettings() {
        localStorage.settings = JSON.stringify(settings);
    }

    function deleteSettings() {
        localStorage.removeItem("settings");
    }

    return {
        values: settings,
        save: saveSettings,
        delete: deleteSettings };
}());