/* eslint-disable @typescript-eslint/no-var-requires */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
// const isDev = require('electron-is-dev');
const envDev = process.env.NODE_ENV !== 'production';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: envDev ? 1536 : 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    envDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  if (envDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
