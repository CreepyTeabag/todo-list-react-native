import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {props.isCompleted ? (
          <View style={styles.squareCompleted}>
            <Text style={styles.tickCompleted}>&#10003;</Text>
          </View>
        ) : (
          <View style={styles.square}></View>
        )}

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      {props.isCompleted ? (
        <View style={styles.circularCompleted}></View>
      ) : (
        <View style={styles.circular}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    borderColor: "#4ac217",
    borderWidth: 2,
    borderRadius: 5,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  squareCompleted: {
    width: 24,
    height: 24,
    backgroundColor: "#4ac217",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tickCompleted: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#4ac217",
    borderWidth: 2,
    borderRadius: 5,
  },
  circularCompleted: {
    width: 12,
    height: 12,
    borderColor: "#4ac217",
    backgroundColor: "#4ac217",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
