import {NavigationProp, useNavigation} from '@react-navigation/native';
import ButtonComponent from './ButtonComponent';
import {AuthenticatedScreens, RootStackParamList} from '../types/navigation';
import {StyleSheet} from 'react-native';

export function CreateNewGameButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ButtonComponent
      title="Create New"
      style={styles.createNewButton}
      onPress={() => navigation.navigate(AuthenticatedScreens.CreateGameScreen)}
    />
  );
}

const styles = StyleSheet.create({
  createNewButton: {
    marginRight: 20,
  },
});
