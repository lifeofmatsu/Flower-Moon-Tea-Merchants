find . -maxdepth 1 -type f ! -name 'index.js' ! -name 'homeCtrl.js' -exec mv {} api/ \;
