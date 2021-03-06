import {$} from "atom-space-pen-views";
import url = require('url');
import {AnimEditorView} from './Modules/AnimEditor/AnimEditorView';
import {UIEditorView} from './Modules/UIEditor/UIEditorView';
import ReportView from './Modules/Status/ReportView';
import RealtimeStatusView from './Modules/Status/RealtimeStatusView';
import dir2json = require('./utils/dir2json');
import atomUtils = require("./atom/atomUtils");
export interface PackageState {
}

export function activate(state: PackageState) {
    AnimEditorView.load();
    UIEditorView.load();
    dir2json.load();
    
    ReportView.load();
    RealtimeStatusView.load();
    //
}

export function deactivate(){
  console.log('deactivate');
}

export function serialize(){
  console.log('serialize')
}

export function toggle(){
  console.log('toggle')
}
