import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Tree from './routes/Tree';
import DataGrid from './routes/DataGrid';
import VMap from './routes/Map';
import OMap from './routes/optMap';
import SMap from './routes/searchMap';
import MapPlayer from './routes/mapPlayer';
import DatePk from './routes/date';
import TreeSelect from './routes/TreeSelect';
import VtxGrid from './routes/grid';
import ComboGrid from './routes/comboGrid';
import VtxModal from './routes/modal';
import Upload from './routes/upload';
import ZTree from './routes/ztree';
import ImportFile from './routes/importFile';
import ExportFile from './routes/exportFile';
import ModalList from './routes/modalList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="/tree" component={Tree} />
        <Route path="/ztree" component={ZTree} />
        <Route path="/datagrid" component={DataGrid} />
        <Route path="/map" component={VMap} />   
        <Route path="/mapplayer" component={MapPlayer} /> 
        <Route path="/optmap" component={OMap} />   
        <Route path="/searchmap" component={SMap} />  
        <Route path="/date" component={DatePk} />  
        <Route path="/treeselect" component={TreeSelect} />  
        <Route path="/grid" component={VtxGrid} />  
        <Route path="/combogrid" component={ComboGrid} />  
        <Route path="/modal" component={VtxModal} />  
        <Route path="/upload" component={Upload} />  
        <Route path="/import" component={ImportFile} />  
        <Route path="/export" component={ExportFile} />  
        <Route path="/modallist" component={ModalList} />  
    </Router>
  );
}

export default RouterConfig;
