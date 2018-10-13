import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Actions';

const mapStateToProps = (state) => {
    return {};
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return {
        testBizApi: propsFromDispatch.testBizListApi,
        testSuggestApi: propsFromDispatch.testSuggestApi,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        testBizListApi: (searchTerm) => {
            console.log("Calling biz list API");
            dispatch(actions.requestBusinessList(searchTerm));
        },
        testSuggestApi: (searchTerm) => {
            console.log("Calling autocomplete API");
            dispatch(actions.requestAutoSuggests(searchTerm));
        },
    }
};


class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.getSearchVal = this.getSearchVal.bind(this);
    }

    componentDidMount() {
        document.getElementById('searchTerm').focus();
    }

    getSearchVal() {
        let searchVal = document.getElementById("searchTerm").value;
        // read autocomplete suggestions for the entered term
        this.props.testSuggestApi(searchVal);
    }

    render() {
        return (
            <div id="searchInnerBox">
                <h1 align="center">NaperYelper Plaidypus demo.</h1>
                <h3>Start typing to search Yelp</h3>
                <div>
                    <form>
                        Search For: <input onChange={this.getSearchVal} type="text" id="searchTerm" name="searchTerm"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SearchBox);
