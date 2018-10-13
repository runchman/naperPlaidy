import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Actions';

const mapStateToProps = (state) => {
    if (state.infoLoading) {
        return {loading:true};
    }
    else {
        return {
            name: state.businessInfo.name,
            phone: state.businessInfo.display_phone,
            price: state.businessInfo.price,
            rating: state.businessInfo.rating,
            address: state.businessInfo.location.address1,
            reviewCount: state.businessInfo.review_count,
        }
    }
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    if (propsFromState.loading) {
        return {loading:true};
    }
    else {
        return {
            name: propsFromState.name,
            phone: propsFromState.phone,
            price: propsFromState.price,
            rating: propsFromState.rating,
            reviewCount: propsFromState.reviewCount,
            address: propsFromState.address,
            returnToSearch: propsFromDispatch.returnToSearch,
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        returnToSearch: () => {
            dispatch(actions.returnToSearch());
        },
    }
};


class BizInfo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.loading) {
            return null;
        }
        else {
            return (
                <div>
                    <div id="bizInfoBox">
                        <h1 align="center">{this.props.name}</h1>
                        <h2>location: {this.props.address}</h2>
                        <h2>phone: {this.props.phone}</h2>
                        <h2>price: {this.props.price}</h2>
                        <h2>rating: {this.props.rating}</h2>
                        <h2>reviews: {this.props.reviewCount}</h2>
                    </div>
                    <div>
                        <button type="button" style={{fontSize: 18}}
                                onClick={this.props.returnToSearch}>RETURN TO SEARCH
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(BizInfo);
