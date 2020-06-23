import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function MenuItem(props) {
  return (
    <TouchableOpacity>
      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={[props.ColorLeft, props.ColorRight]} style={styles.container}>
        <Text style={styles.title}>{props.Title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0",
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#fff",
    width: 100,
  },

  title: {
    color: "#fff",
    fontSize: 20,
  },
});
