import React from 'react';
import { connect } from 'dva';
import {Placeholder, RandomButton} from '../../../../lib/index';
function IndexPage(props) {
  return (
    <div>
        <Placeholder/>
        <RandomButton
            variants={[1,2,3]}
        />
    </div>
  );
}
function mapStateToProps(state) {
    return {
        loading:state.loading,
        mCommon:state.CommonM,
        mDispatch:state.dispatchM
    };
}
export default connect(mapStateToProps)(IndexPage);
