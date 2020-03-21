import React from 'react';
import PropTypes from 'prop-types';

interface MyProps {
  name: string
}
interface MyState {

}
class Welcome extends React.Component<MyProps, MyState> {
  static propTypes: { name: PropTypes.Requireable<string>; };
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Welcome.propTypes = {
  name: PropTypes.string
}

export default Welcome;
