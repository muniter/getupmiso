import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const Agrergar = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Trabajo", value: "1" },
    { label: "Familia", value: "2" },
    { label: "Amigos", value: "3" },
    { label: "Otros", value: "4" },
  ]);

  return (
    <View style={{ marginBottom: 130 }}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Lun, Nov 29</Text>
      </View>
      <ScrollView>
        <Image
          source={require("../assets/time-picker.png")}
          style={styles.imagen}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Titulo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el titulo del evento"
          />
          <Text style={styles.title}>Descripcion</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese la descripcion"
          />
          <Text style={styles.title}>Seleccione etiqueta</Text>
          <View style={styles.dropdown}>
            <DropDownPicker
              placeholder="Seleccione etiqueta"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{ borderRadius: 100 }}
            />
          </View>
          <Text style={styles.title}>Invitados</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrse email de invitados"
          />
          {/* 1 paso crear 2 botones uno al lado del otro */}
          <View style={{ flexDirection: "row" }}>
            <Pressable style={styles.buttonCancelar} onPress={() => navigation.goBack()}>
              <Text style={styles.textCancelar}>Cancelar</Text>
            </Pressable>
            <Pressable style={styles.buttonAceptar} onPress={() => navigation.goBack()}>
              <Text style={styles.textAceptar}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    textAlign: "left",
    color: "#443D3D",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    width: "100%",
    marginVertical: 10,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#614D9E",
    borderRadius: 100,
  },
  button: {
    backgroundColor: "#614D9E",
    width: "100%",
    padding: 10,
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  hr: {
    height: 1,
    backgroundColor: "#443D3D",
    marginVertical: 10,
  },
  dropdown: {
    height: 50,
    marginVertical: 10,
    marginBottom: 20,
    zIndex: 1000,
  },
  buttonCancelar: {
    backgroundColor: "white",
    width: "45%",
    padding: 10,
    borderRadius: 100,
    marginVertical: 10,
    marginRight: 10,
    borderColor: "#614D9E",
    borderWidth: 1,
  },
  buttonAceptar: {
    backgroundColor: "#614D9E",
    width: "45%",
    padding: 10,
    borderRadius: 100,
    marginVertical: 10,
    marginLeft: 10,
  },
  textCancelar: {
    color: "#614D9E",
    textAlign: "center",
  },
  textAceptar: {
    color: "white",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#614D9E",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  imagen: {
    width: "100%",
    height: 380,
  },
});
