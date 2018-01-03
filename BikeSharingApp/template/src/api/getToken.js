import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        let token = await AsyncStorage.getItem('@token');
        return token;
    } catch (e) {
        return e;
    }
};

export default getToken;