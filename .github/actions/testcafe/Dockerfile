FROM node:10.16.3

LABEL "com.github.actions.name"="Testcafe"
LABEL "com.github.actions.description"="A GitHub Action to run Testcafe e2e tests"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/jamaljsr/cra-electron-ts"
LABEL "homepage"="https://github.com/jamaljsr/cra-electron-ts"
LABEL "maintainer"="Electron App"

RUN  apt-get update \
  # See https://crbug.com/795759
  && apt-get install -yq libgconf-2-4 --no-install-recommends \
  # Install latest chrome dev package, which installs the necessary libs to
  # make the bundled version of Chromium that Puppeteer installs work.
  && apt-get install -y wget xvfb --no-install-recommends \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-stable --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

RUN npm install -g yarn

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]