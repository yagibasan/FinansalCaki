import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MenuItem from "../components/MenuItem";

export default function KrediScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <MenuItem MenuId={1} ColorLeft="#537895" ColorRight="#66a6ff" Title="Kredi Hesapla & Karşılaştır" />
      <MenuItem MenuId={1} ColorLeft="#09203f" ColorRight="#537895" Title="Mevduat Faizi" />
      <MenuItem MenuId={1} ColorLeft="#537895" ColorRight="#66a6ff" Title="Kar Payı Hesapla" />
      <MenuItem MenuId={1} ColorLeft="#09203f" ColorRight="#537895" Title="IBAN Doğrula" />
      <MenuItem MenuId={1} ColorLeft="#537895" ColorRight="#66a6ff" Title="Motorlu Taşıtlar Vergisi" />
      <MenuItem MenuId={1} ColorLeft="#09203f" ColorRight="#537895" Title="Mevduat Faizi" />
      <MenuItem MenuId={1} ColorLeft="#537895" ColorRight="#66a6ff" Title="Kredi Hesapla & Karşılaştır" />
      <MenuItem MenuId={1} ColorLeft="#09203f" ColorRight="#537895" Title="Mevduat Faizi" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    flexDirection: "row",
  },
});
