import { Text, View } from "react-native";
import MainLayout from '../layouts/MainLayout';
export default function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <Text>The application name: TodoList</Text>
            <Text>My name: Ngoc  Tam Nguyen</Text>
            <Text>Current date: Nov 25, 2024</Text>
        </MainLayout>
        
       
    );
}