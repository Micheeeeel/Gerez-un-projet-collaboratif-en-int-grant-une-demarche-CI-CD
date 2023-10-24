const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: process.env.SONAR_HOST_URL || "http://localhost:9000",
    token: "squ_a5177bdeab7985362d9985cd6354b2b75a81bd7d", // Ajoutez cette ligne
    options: {
      "sonar.sources": ".", // Indique que la racine du projet est le point de départ de l'analyse.
      "sonar.inclusions": "src/**", // Spécifie que seuls les fichiers sous le répertoire packages/core/src/ doivent être inclus dans l'analyse.
      "sonar.javascript.lcov.reportPaths":
        process.env.COVERAGE_REPORT_PATH ||
        "coverage/bobapp/report-lcovonly.txt",
    },
  },
  () => {}
);
