import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Picker,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import { StackNavigator } from "react-navigation";
import axios from "axios";
import App from "../index";

class DenunciarQueja extends React.Component {
  static navigationOptions = {
    title: "Haz una denuncia"
  };

  constructor(props) {
    super(props);
    this.state = {
      Estado: "",
      Dependencia: "",
      Ciudad: "",
      Area_dependencia: "",
      Nombre: "",
      Contacto: "",
      Queja: "",
      key: ""
    };
  }

  SelectState = estado => {
    this.setState({ Estado: estado });
  };

  SelectDependence = dependencia => {
    this.setState({ Dependencia: dependencia });
  };

  VerifyData = () => {
    const details = {
      queja_estado: this.state.Estado,
      queja_ciudad: this.state.Ciudad,
      queja_dependencia: this.state.Dependencia,
      queja_area: this.state.Area_dependencia,
      queja_nombre: this.state.Nombre,
      queja_contacto: this.state.Contacto,
      queja_queja: this.state.Queja
    };

    this.Send(details);
    /*
    if (
      details.queja_estado == "" ||
      details.queja_ciudad == "" ||
      details.queja_dependencia == "" ||
      details.queja == ""
    ) {
      Alert.alert("", details);
    } else {
      this.Send(details);
    }
    */
  };

  Send = details => {
    fetch(
      "http://coderscave.tech/api/v1/complaints?queja_estado=" +
        parseInt(details.queja_estado) +
        "&" +
        "queja_ciudad=" +
        details.queja_ciudad +
        "&" +
        "queja_dependencia=" +
        parseInt(details.queja_dependencia) +
        "&" +
        "queja_queja=" +
        details.queja_queja +
        "&" +
        "queja_area=" +
        details.queja_area +
        "&" +
        "queja_nombre=" +
        details.queja_nombre +
        "&" +
        "queja_contacto=" +
        details.queja_contacto,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => {
      if (response.status == 200) {
        navigate("Home");
      } else {
        Alert.alert(
          "",
          JSON.stringify(response)
          // "Algo salió mal, verifica tu conexión a internet o los campos ingresados"
        );
      }
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.picker}>
          <Picker
            selectedValue={this.state.Estado}
            onValueChange={this.SelectState}
          >
            <Picker.Item label="Seleccionar Estado" value="" />
            <Picker.Item label="Aguascalientes" value="1" />
            <Picker.Item label="Baja California" value="2" />
            <Picker.Item label="Baja California Sur" value="3" />
            <Picker.Item label="Campeche" value="4" />
            <Picker.Item label="CDMX" value="5" />
            <Picker.Item label="Chiapas" value="6" />
            <Picker.Item label="Chihuahua" value="7" />
            <Picker.Item label="Coahuila" value="8" />
            <Picker.Item label="Colima" value="9" />
            <Picker.Item label="Ciudad de México" value="10" />
            <Picker.Item label="Durango" value="11" />
            <Picker.Item label="Guanajuato" value="12" />
            <Picker.Item label="Guerrero" value="13" />
            <Picker.Item label="Hidalgo" value="14" />
            <Picker.Item label="Jalisco" value="15" />
            <Picker.Item label="Michoacán" value="16" />
            <Picker.Item label="Morelos" value="17" />
            <Picker.Item label="Nayarit" value="18" />
            <Picker.Item label="Nuevo León" value="19" />
            <Picker.Item label="Oaxaca" value="20" />
            <Picker.Item label="Puebla" value="21" />
            <Picker.Item label="Querétaro" value="22" />
            <Picker.Item label="Quintana Roo" value="23" />
            <Picker.Item label="San Luis Potosí" value="24" />
            <Picker.Item label="Sinaloa" value="25" />
            <Picker.Item label="Sonora" value="26" />
            <Picker.Item label="Tabasco" value="27" />
            <Picker.Item label="Tamaulipas" value="28" />
            <Picker.Item label="Tlaxcala" value="29" />
            <Picker.Item label="Veracruz" value="30" />
            <Picker.Item label="Yucatán" value="31" />
            <Picker.Item label="Zacatecas" value="32" />
          </Picker>
        </View>

        <TextInput
          style={styles.inputs}
          placeholder="Ciudad"
          onChangeText={text => this.setState({ Ciudad: text })}
        />
        <View style={styles.picker}>
          <Picker
            selectedValue={this.state.Dependencia}
            onValueChange={this.SelectDependence}
          >
            <Picker.Item label="Seleccionar dependencia" value="" />
            <Picker.Item label="Seguridad Pública" value="1" />
            <Picker.Item label="Secretaría de Gobierno" value="2" />
            <Picker.Item
              label="Secretaría de Relaciones Exteriores"
              value="3"
            />
            <Picker.Item
              label="Secretaría de Hacienda y Crédito Público"
              value="4"
            />
            <Picker.Item
              label="Secretaría de Medio Ambiente y Recursos Naturales"
              value="5"
            />
            <Picker.Item label="Secretaría de Educación Pública" value="6" />
            <Picker.Item label="Secretaría de Salud" value="7" />
            <Picker.Item label="Secretaría de Cultura" value="8" />
            <Picker.Item
              label="Procuraduría General de la República"
              value="9"
            />
            <Picker.Item
              label="Consejería Jurídica del Ejecutivo Federal"
              value="10"
            />
            <Picker.Item label="Secretaría de Turismo" value="11" />
            <Picker.Item
              label="Secretaría del Trabajo y Previsión Social"
              value="12"
            />
          </Picker>
        </View>

        <TextInput
          style={styles.inputs}
          placeholder="Ej. Seguridad Pública - Tránsito"
          onChangeText={text => this.setState({ Area_dependencia: text })}
        />

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ Nombre: text })}
          placeholder="Tu nombre (Opcional)"
        />

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState({ Contacto: text })}
          placeholder="Correo o número de contacto (Opcional)"
        />

        <TextInput
          style={styles.large_input}
          onChangeText={text => this.setState({ Queja: text })}
          multiline={true}
          placeholder="Redacta tu denuncia indicando(en caso de conocer) el nombre del servidor público, el lugar de los hechos y detalles importantes que ayuden a dar seguimiento a tu denuncia."
        />

        <TouchableOpacity
          style={styles.botonQueja}
          onPress={() => this.VerifyData()}
        >
          <Text style={styles.texto}> Publicar queja</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  picker: {
    borderColor: "black",
    borderWidth: 1,
    width: window.width * 0.7,
    alignSelf: "center"
  },
  inputs: {
    borderColor: "black",
    borderWidth: 0,
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7
  },

  large_input: {
    borderColor: "black",
    borderWidth: 0,
    height: window.height * 0.2,
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7
  },

  botonQueja: {
    width: window.width * 0.7,
    height: window.height * 0.1,
    borderRadius: 25,
    marginTop: 15,

    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#425d8b"
  },

  texto: {
    alignSelf: "center",
    color: "#FFF"
  }
});

export default DenunciarQueja;
