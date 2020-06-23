import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function KatilimScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>Home</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingTop: 30,
  },
});
