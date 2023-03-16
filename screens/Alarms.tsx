import { useNavigation } from "@react-navigation/native";
import { Text, Card, FAB, Avatar, Switch, Icon } from "@rneui/themed";
import React, { useState } from "react";
import { Modal, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Agrergar } from "./Agregar";

export const Alarms: React.FC = ({ navigation }: { navigation: any }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Card
            containerStyle={{
              borderRadius: 20,
              padding: 10,
              borderColor: "#614D9E",
              borderWidth: 2,
              width: "80%",
              height: "25%",
            }}
          >
            <Text style={{ color: "#614D9E", padding: 10 }} h4>
              Eliminar alarma
            </Text>
            <Text style={{ color: "gray", padding: 10, fontSize: 18 }}>
              Desea eliminar la alarma "Despertar"?
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable
                style={{
                  ...styles.button,
                  backgroundColor: "white",
                  borderColor: "#614D9E",
                  borderWidth: 2,
                }}
                onPress={() => toggleModal()}
              >
                <Text style={{ ...styles.text, color: "#614D9E" }}>
                  CANCELAR
                </Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => toggleModal()}>
                <Text style={styles.text}>ACEPTAR</Text>
              </Pressable>
            </View>
          </Card>
        </View>
      </Modal>
      <AlarmCard
        title="Despertar"
        time="7:00"
        when="Lunes a Viernes"
        del={toggleModal}
      />
      <AlarmCard
        title="Screen Off"
        time="16:00"
        when="Jueves"
        icon="devices"
        del={toggleModal}
      />
      <FAB
        icon={{ name: "add" }}
        style={{ backgroundColor: "#614D9E" }}
        placement="right"
        onPress={() => navigation.navigate("Creación Alarma")}
      />
    </>
  );
};

function AlarmCard({
  title,
  time,
  when,
  icon,
  del,
}: {
  title: string;
  time: string;
  when: string;
  icon?: string;
  del: CallableFunction;
}) {
  const [status, setStatus] = useState(true);
  const navigation = useNavigation();

  return (
    <Card
      containerStyle={{
        borderRadius: 20,
        padding: 10,
        borderColor: "#614D9E",
        borderWidth: 2,
      }}
    >
      <Pressable onPress={() => navigation.navigate("Creación Alarma")}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon color="#614D9E" size={50} name={icon || "alarm"} />
          </View>
          {/* Make the title aligned to the bottom */}
          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <Card.Title style={{ color: "#614D9E" }} h4>
              {title}
            </Card.Title>
          </View>
          <View style={{ width: "20%", alignItems: "flex-end" }}>
            <Text style={{ color: "#614D9E" }} h4>
              {time}
            </Text>
            <Switch
              color="#614D9E"
              style={{ width: "20%" }}
              value={status}
              onValueChange={() => setStatus(!status)}
            />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "10%" }}></View>
          <View style={{ width: "80%", alignItems: "center" }}>
            <Text style={{ color: "#614D9E" }}>{when}</Text>
          </View>
          <View style={{ alignItems: "center", width: "10%" }}>
            <Icon name="delete" size={30} color="red" onPress={() => del()} />
          </View>
        </View>
      </Pressable>
    </Card>
  );
}

export function AlarmCreation() {
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
    width: "45%",
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
