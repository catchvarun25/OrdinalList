import AsyncStorage from '@react-native-async-storage/async-storage';
import { todoProps } from './../pages/Dashboard';

class Storage {
    constructor() { }
    public async storeTodo(list: Array<todoProps>) {
        await AsyncStorage.setItem("todos", JSON.stringify(list))
    }
    public async getTodo() {
        let list = await AsyncStorage.getItem("todos")
        if (list)
            return JSON.parse(list) as Array<todoProps>
        else return [];
    }
}

export default new Storage()