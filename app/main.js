const {app,BrowserWindow} = require('electron');

app.on('ready', () => {
  console.log('Hello from Electron');
  let mainWindow = null;
  //mainWindow = new BrowserWindow();
  mainWindow = new BrowserWindow({
	webPreferences:{nodeIntegration:true}
  });
  mainWindow.webContents.loadFile('./app/index.html');
});



