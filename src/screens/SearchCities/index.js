import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './SearchCities.style.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchSearch from '../../redux/api/fetchSearch';

class SearchCities extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.searchUpdate('');
  }

  clear = () => {
    this.search.clear();
  };

  searchUpdate = text => {
    this.setState({
      search: text
    });
    if (!text == '') {
      this.props.fetchSearch(text);
    }
  };

  NoDataDisplay = () => {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 150
        }}
      >
        <Text style={{ fontSize: 20 }}>No result found</Text>
      </View>
    );
  };

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#080808'
        }}
      />
    );
  };

  render() {
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          platform="android"
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.searchUpdate(text)}
          placeholder="Search for city..."
          value={this.state.search}
          showLoading={this.props.searchCities.isLoading}
        />
        <FlatList
          data={this.props.searchCities.payload}
          ListEmptyComponent={this.NoDataDisplay}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => `${index}`}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <TouchableOpacity
              style={{ height: 50 }}
              onPress={() => {
                this.props.navigation.navigate('Weather', {
                  wid: item.woeid
                });
              }}
            >
              <Text style={styles.textStyle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button title="Cancel" onPress={() => this.NoDataDisplay()} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchCities: state.searchCities
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSearch
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCities);
