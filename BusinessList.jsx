import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Actions';

const mapStateToProps = (state) => {
    return {
        businessList: state.businessList,
    };
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return {
        businessList: propsFromState.businessList,
        selectBiz: propsFromDispatch.selectBiz,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectBiz(e) {
            dispatch(actions.requestBusinessInfo(parseInt(e.target.id)));
        }
    }
};


class BusinessList extends React.Component {

    render() {
        return (
            <div id="businessListBox">
                <h2 align="center">Businesses (Click on one for details)</h2>
                <h3 align="center">NOTE: Don't click on ---, this will crash the app</h3>
                <div>
                    <li id='0' onClick={this.props.selectBiz} style={{marginLeft:"10px",fontSize:18}}>{this.props.businessList[0].name}</li>
                    <li id='1' onClick={this.props.selectBiz} style={{marginLeft:"10px",fontSize:18}}>{this.props.businessList[1].name}</li>
                    <li id='2' onClick={this.props.selectBiz} style={{marginLeft:"10px",fontSize:18}}>{this.props.businessList[2].name}</li>
                    <li id='3' onClick={this.props.selectBiz} style={{marginLeft:"10px",fontSize:18}}>{this.props.businessList[3].name}</li>
                    <li id='4' onClick={this.props.selectBiz} style={{marginLeft:"10px",fontSize:18}}>{this.props.businessList[4].name}</li>
                </div>
            </div>

        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(BusinessList);
