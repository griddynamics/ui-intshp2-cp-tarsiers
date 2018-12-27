import React, {Component} from 'react';

class My404Component extends Component {
  constructor(props){
    super(props)
  }

    componentWillMount() {
        this.props.toggleHeaderAndFooterVisibility();
    }
    componentWillUnmount() {
        this.props.toggleHeaderAndFooterVisibility();
    }
    render() {
        return <div>Page is not found</div>;
    }
}
export default My404Component;
