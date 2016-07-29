
const {remote} = require('electron');
const {Menu, MenuItem} = remote;

const {ipcRenderer} = require('electron');

/*
const menu = new Menu();
menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked'); }}));
menu.append(new MenuItem({type: 'separator'}));
menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}));

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);

*/

const template = []
 

template.push({
    label: 'Settings',
    submenu: [
      {
        label: 'Configure',
        accelerator: 'CmdOrCtrl+F',
        click(item, focusedWindow) {
          ipcRenderer.send('show-perfs', 'home')
      }
       } 
     ]
    });

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


