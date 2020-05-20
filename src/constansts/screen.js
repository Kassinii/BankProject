import { Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const onScreen = (screen, navigation, obj) => () => {
    navigation.navigate(screen, obj)
}

export default { WIDTH, HEIGHT, onScreen};

