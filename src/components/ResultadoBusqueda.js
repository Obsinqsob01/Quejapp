import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  ListView,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";
import App from "../index";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search_response } from "../Actions/Search";
import reducer from "../reducers/BusquedaReducer";

class ResultadoBusqueda extends Component {
  static navigationOptions = {
    title: "Busqueda"
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: ""
    };
  }

  GetItem(queja_queja) {
    Alert.alert("", queja_queja);
  }

  componentDidMount() {
    console.log(this.props);

    if (this.props.data != null && this.props.data != undefined) {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.setState(
        {
          isLoading: false,
          dataSource: ds.cloneWithRows(this.props.data)
        },
        function() {}
      );
    }
  }

  /*

componentDidMount() {
  return fetch('http://quejapp.warecrafty.com/data')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
*/

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "100%",
          backgroundColor: "#fff"
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={rowData => (
            <View style={{ flex: 1, flexDirection: "column" }}>
              <TouchableOpacity
                style={styles.contenedor_queja}
                onPress={this.GetItem.bind(this, rowData.queja_queja)}
              >
                <Text style={styles.textViewContainer}>
                  {"Estado: " + rowData.queja_estado}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Ciudad: " + rowData.queja_ciudad}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Dependencia: " + rowData.queja_dependencia}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Area de dependencia: " + rowData.queja_area}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Fecha: " + rowData.queja_fecha}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Nombre: " + rowData.queja_nombre}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Contacto: " + rowData.queja_contacto}
                </Text>

                <Text style={styles.textViewContainer_queja}>
                  {"Queja: " + rowData.queja_queja}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor_queja: {
    backgroundColor: "#FFF",
    borderRadius: 13,
    height: 210,
    borderWidth: 4,
    borderColor: "#425d8b"
  },

  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#fff",
    padding: 5
  },

  textViewContainer: {
    textAlign: "left",
    padding: 1,
    fontSize: 15,
    color: "#000",
    fontWeight: "bold"
  },

  textViewContainer_queja: {
    textAlign: "left",
    padding: 1,
    fontSize: 15,
    color: "#d60404",
    fontWeight: "bold"
  }
});

export default ResultadoBusqueda;
