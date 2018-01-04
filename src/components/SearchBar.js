import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleTextChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    this.props.onTextChange(text);
    this.setState({ searchTerm: text });
  };

  render() {
    const { containerStyle, style } = this.props;
    return (
      <View style={containerStyle}>
        <TextInput
          {...this.props}
          style={style}
          value={this.state.searchTerm}
          onChange={this.handleTextChange}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-typos
  style: TextInput.propTypes.style,
  // eslint-disable-next-line react/no-typos
  containerStyle: View.propTypes.style,
};

SearchBar.defaultProps = {
  style: {},
  containerStyle: {},
};

export default SearchBar;
