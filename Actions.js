export const requestAutoSuggests = (textSnip) => {
    return {
        type: 'REQUEST_AUTO_SUGGEST',
        data: textSnip,
    }
};

export const responseAutoSuggests = (suggestions) => {
    return {
        type: 'RESPONSE_AUTO_SUGGEST',
        data: suggestions,
    }
};

export const requestBusinessInfo = (businessArrayIndex) => {
    return {
        type: 'REQUEST_BUSINESS_INFO',
        data: businessArrayIndex,
    }
};

export const requestBusinessList = (searchTerm) => {
    return {
        type: 'REQUEST_BUSINESS_LIST',
        data: searchTerm,
    }
};

export const responseBusinessList = (bizList) => {
    return {
        type: 'RESPONSE_BUSINESS_LIST',
        data: bizList,
    }
};

export const responseBusinessInfo = (businessInfo) => {
    return {
        type: 'RESPONSE_BUSINESS_INFO',
        data: businessInfo,
    }
};

export const returnToSearch = () => {
    return {
        type: 'RETURN_TO_SEARCH',
    }
};

