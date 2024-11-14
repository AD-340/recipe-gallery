import React from "react";
import Gallery from "./components/Gallery";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <React.StrictMode>
      <View style={styles.container}>
        <Gallery />
        <StatusBar style="auto" />
      </View>
    </React.StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
