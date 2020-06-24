import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "./components/Logo";
import Photo from "./components/Photo";

const Main = () => {

  const [like, setLike] = useState(0)

  const increment = () => {
    setLike(like +1);
  }

  return (
    <>
      <Logo />
      <Photo count={10} file={require("./assets/images/cat.png")} />
      <Photo count={13} file={require("./assets/images/cat2.png")} />
    </>
  )
}

const styles = StyleSheet.create({
});

export default Main;