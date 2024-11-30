import { Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MainLayout from "../layouts/MainLayout";
import TodoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
    const[tasks,setTasks]= useState(['Do laundry','Go to gym','Walk dog']);
    const addTask=(taskText)=>{
        // Implement the logic to add a new task
       let flag=false;
       tasks.map((task)=>{
         if(task==taskText){
           flag=true;
         }
       });
       if(flag==true){
         Alert.alert('The task exists in the list!');
       }
       else{
         setTasks([...tasks, taskText]);
       }
       
     }
    return (
        <MainLayout>
             <TodoList tasks={tasks}/>
             <ToDoForm addTask={addTask}/>
             <Button
              title="Go to About"
              onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
        
    );
}