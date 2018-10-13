import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Actions';

const mapStateToProps = (state) => {
    return {
        categories: state.autoSuggests.categories,
        businesses: state.autoSuggests.businesses,
        terms: state.autoSuggests.terms,
    };
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return {
        categories: propsFromState.categories,
        businesses: propsFromState.businesses,
        terms: propsFromState.terms,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};


class SearchSuggestions extends React.Component {

    render() {
        return (
            <div>
                <div id="termSuggestBox">
                    <h2 align="center">Suggestions (sorry you can't click 'em)</h2>
                    <div id="suggestTable">
                    <table style={{align:"center",width:"100%"}}>
                        <tbody>
                        <tr style={{fontSize:18}}>
                            <th>Terms</th>
                            <th>Categories</th>
                            <th>Businesses</th>
                        </tr>
                        <tr style={{fontSize:14,align:"center"}}>
                            <td>{this.props.terms[0].name}</td>
                            <td>{this.props.categories[0].name}</td>
                            <td>{this.props.businesses[0].name}</td>
                        </tr>
                        <tr>
                            <td>{this.props.terms[1].name}</td>
                            <td>{this.props.categories[1].name}</td>
                            <td>{this.props.businesses[1].name}</td>
                        </tr>
                        <tr>
                            <td>{this.props.terms[2].name}</td>
                            <td>{this.props.categories[2].name}</td>
                            <td>{this.props.businesses[2].name}</td>
                        </tr>
                        <tr>
                            <td>{this.props.terms[3].name}</td>
                            <td>{this.props.categories[3].name}</td>
                            <td>{this.props.businesses[3].name}</td>
                        </tr>
                        <tr>
                            <td>{this.props.terms[4].name}</td>
                            <td>{this.props.categories[4].name}</td>
                            <td>{this.props.businesses[4].name}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SearchSuggestions);
