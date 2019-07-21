import path from 'path';
import { app, BrowserWindow } from 'electron';
import debug from 'electron-debug';
import isNotPackaged from 'electron-is-dev';

const isDev = isNotPackaged && process.env.NODE_ENV !== 'production';

if (isDev) {
  debug();
}

// use dev server for hot reload or file in production
const url = isDev
  ? 'http://localhost:3000'
  : `file://${path.join(__dirname, '../build/index.html')}`;

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1536 : 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(url);

  if (isDev) {
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
