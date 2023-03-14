import { Text, FAB, Icon, Card } from '@rneui/themed';
import { Calendar } from 'react-native-calendars'
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { Agrergar } from './Agregar';
import { useNavigation } from '@react-navigation/native';


export function Agenda() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const navigation = useNavigation();

  return (
    <>
      <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '100%' }}>
          <Card containerStyle={{ borderRadius: 20, padding: 10, borderColor: "#614D9E", borderWidth: 2, width: '80%', height: '25%' }}>
            <Text style={{ color: '#614D9E', padding: 10 }} h4>Eliminar evento</Text>
            <Text style={{ color: 'gray', padding: 10, fontSize: 18 }} >Desea eliminar el evento "Cita de trabajo"?</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <Pressable style={{ ...styles.button, backgroundColor: 'white', borderColor: '#614D9E', borderWidth: 2 }} onPress={() => toggleModal()}>
                <Text style={{ ...styles.text, color: '#614D9E' }}>CANCELAR</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => toggleModal()}>
                <Text style={styles.text}>ACEPTAR</Text>
              </Pressable>
            </View>
          </Card>
        </View>
      </Modal>
      <React.Fragment>
        <Calendar />
      </React.Fragment>
      <View style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center", paddingBottom: 30 }}>
          <Text h3>Lista de Eventos</Text>
        </View>
        <AgendaCard title="Stand up" time="7:00" del={toggleModal} />
        <AgendaCard title="Parcial UX" time="10:00" del={toggleModal} />
        <AgendaCard title="Cita médica" time="15:00" del={toggleModal} />
      </View>
      <FAB
        icon={{ name: 'add' }}
        placement="right"
        onPress={() => navigation.navigate("Creación Agenda")}
      />
    </>
  );
}

export function AgendaCard({ title, time, del }: { title: string, time: string, del: CallableFunction }) {
  const navigation = useNavigation();

  return <View style={{ flexDirection: "row", justifyContent: "center" }}>
    <Pressable style={{ flexDirection: "row", justifyContent: "center" }} onPress={() => navigation.navigate("Creación Agenda")} >
      <View style={{ width: '80%', flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", borderColor: "gray", borderWidth: 1, borderRadius: 20, padding: 10, marginLeft: 5, marginBottom: 15 }}>
        <Text h4 style={{ width: '70%', paddingLeft: '5%', overflow: "hidden", color: "gray" }}>{title}</Text>
        <Text h4 style={{ width: '30%', color: "gray" }}>| {time}</Text>
      </View>
      <View style={{ width: '10%', justifyContent: "center" }}>
        <Icon
          name="delete"
          size={30}
          color="red"
          onPress={() => del()}
        />
      </View>
    </Pressable>
  </View>
}

export function AgendaCreation() {
  return (
    <View>
      <Agrergar />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    padding: 20,
    backgroundColor: "#BAA6ED",
    margin: 20,
    borderColor: "#614D9E",
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 50,
  },
  title: {
    textAlign: "left",
    color: "#443D3D",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#614D9E",
    borderRadius: 100,
    backgroundColor: "#fff",
    minHeight: 60,
    fontSize: 18,
    paddingLeft: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
    marginVertical: 12,
    borderRadius: 100,
    elevation: 3,
    width: '45%',
    backgroundColor: "#614D9E",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  hr: {
    borderBottomColor: "#614D9E",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
