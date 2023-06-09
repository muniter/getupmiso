import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AlarmCreation, Alarms } from "./screens/Alarms";
import { Icon } from "@rneui/themed";
import { Agenda, AgendaCreation } from "./screens/Agenda";
import { Perfil } from "./screens/Perfil";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AlarmStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        options={{ headerShown: false }}
        component={Alarms}
      />
      <Stack.Screen
        name="Creación Alarma"
        options={{ headerShown: false }}
        component={AlarmCreation}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={Register}
      />
    </Stack.Navigator>
  );
}

export function AgendaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        options={{ headerShown: false }}
        component={Agenda}
      />
      <Stack.Screen
        name="Creación Agenda"
        options={{ headerShown: false }}
        component={AgendaCreation}
      />
    </Stack.Navigator>
  );
}

export function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfilin"
        options={{ headerShown: false }}
        component={Perfil}
      />
    </Stack.Navigator>
  );
}

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Alarmas"
        component={AlarmStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="alarm" type="alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="calendar"
              type="font-awesome"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
