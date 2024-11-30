import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView
} from 'react-native';
const TodoList=({tasks})=>{
  const[task1,task2,task3]=tasks;
    return(
        <ScrollView>
       {

          tasks.map((task,index)=>(
            <Pressable key={index}>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>{task} (Incomplete)</Text>
            </View>
          </Pressable>
          ))
        }
      </ScrollView>
    )
}
export default TodoList;
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
      marginHorizontal: 20,
      marginTop: 20,
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