import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

class SearchBookPage extends Component {
    render() {
        // const { state } = this.props.location || {};
        // console.log("State từ location:", state.dataGenre);
        
        return (
            <>
                <p>SearchBookPage</p>
            </>
        );
    }
}

// Wrapper function component để cung cấp location thông qua props
// function LocationWrapper(Component) {
//     return function WrappedComponent(props) {
//         const location = useLocation();
//         return <Component {...props} location={location} />;
//     };
// }

// export default LocationWrapper(SearchBookPage);
export default SearchBookPage;