import React from 'react';
import { View, Button} from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button 
      title="Pagina 2"
      onPress={() => navigation.navigate('Pagina 2') }
    />
  </View>
);

Page1.navigationOptions = {
  title: 'Pagina1',
}

export default Page1;