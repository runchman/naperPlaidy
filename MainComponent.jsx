import React from 'react';
import {connect} from 'react-redux';
import SearchBox from './SearchBox'
import SuggestionBox from './SearchSuggestions'
import BusinessList from './BusinessList'
import BizInfoBox from './BizInfo'


const mapStateToProps = (state) => {

    return {
        uiState: state.uiState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};


export class MainComponent extends React.Component {

    componentWillReceiveProps(nextProps) {
    }

    render() {
        console.log("VERSION: " + React.version);
        if (this.props.uiState === 'bizSearch') {
            return (
                <div>
                    <div id="searchBox">
                        <SearchBox/>
                    </div>
                    <div id="suggestionBox">
                        <SuggestionBox/>
                    </div>
                    <div id="bizList">
                        <BusinessList/>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                        <BizInfoBox/>
                </div>
            )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

