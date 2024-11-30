import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';
const ToDoForm=({addTask })=>{
    const [taskText, setTaskText] = React.useState('');
    return(
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={()=>{
            addTask(taskText);
            setTaskText('');
          }
          } />
      </View>
    )
}
export default ToDoForm;
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin:20
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });
