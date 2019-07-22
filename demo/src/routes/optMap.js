import React from 'react';
import {connect} from 'dva';
import {VtxMap} from 'vtx-ui';
import style from './zoomMap.less';

const {VtxOptMap,VtxZoomMap} = VtxMap;
const Map = (props)=>{
    const {dispatch, optMap} = props;
    console.log('初始化点数：'+optMap.mapPoints.length);
    const mapProps = {
        ...optMap,
        zoomEnd(obj){
            console.log('zoom:',obj.zoom);
        },
        clickGraphic(obj) {
            console.log('id:',obj.attributes.id);
        }
    }
    return (
        <div style={{height:'100%'}}>
            <div className={style.btCT}>
                <button onClick={()=>{dispatch({type:'optMap/fetch',payload:{mapType:'bmap'}})}}>百度</button>
                <button onClick={()=>{dispatch({type:'optMap/fetch',payload:{mapType:'amap'}})}}>高德</button>
                <button onClick={()=>{dispatch({type:'optMap/fetch',payload:{mapType:'tmap'}})}}>tmap</button>
                <button onClick={()=>{dispatch({type:'optMap/fetch',payload:{mapType:'gmap'}})}}>acgis</button>
            </div>
            <VtxOptMap {...mapProps}/>
        </div>
    )
}

export default connect(({optMap})=>({optMap}))(Map);