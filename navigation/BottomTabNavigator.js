import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import KrediScreen from "../screens/KrediScreen";
import MTVScreen from "../screens/MTVScreen";
import IBANScreen from "../screens/IBANScreen";
import MevduatScreen from "../screens/MevduatScreen";
import KatilimScreen from "../screens/KatilimScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Kredi";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Kredi Hesapla"
        component={KrediScreen}
        options={{
          title: "Kredi",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="star" />,
        }}
      />
      <BottomTab.Screen
        name="Motorlu Taşıtlar Vergisi"
        component={MTVScreen}
        options={{
          title: "MTV",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="layer-group" />,
        }}
      />
      <BottomTab.Screen
        name="IBAN Doğrulama"
        component={IBANScreen}
        options={{
          title: "IBAN",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bell" />,
        }}
      />
      <BottomTab.Screen
        name="Mevduat Hesapla"
        component={MevduatScreen}
        options={{
          title: "Mevduat",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="award" />,
        }}
      />
      <BottomTab.Screen
        name="Katılım Bankaları Kar Payları"
        component={KatilimScreen}
        options={{
          title: "Kar Payı",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="award" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  return routeName;
}
