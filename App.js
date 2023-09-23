import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.image}
      >
        <View>
          <Image
            source={require("./assets/circle.png")}
            style={{
              width: 150,
              height: 150,
              marginTop: 120,
            }}
          />{" "}
        </View>{" "}
        <Text
          style={{
            marginTop: 30,
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {" "}
          GROW YOUR BUSINESS{" "}
        </Text>{" "}
        <Text
          style={{
            textAlign: "center",
            marginTop: 55,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {" "}
          We will help you to grow your business using online server{" "}
        </Text>{" "}
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            // alignContent: "flex-end",
            width: "60%",
          }}
        >
          <Button style={{ width: "50%" }} title="LOGIN" color="#E3C000" />
          <Button title="SIGN UP" color="#E3C000" />{" "}
        </View>{" "}
      </ImageBackground>{" "}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    alignItems: "center",
    //   justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
