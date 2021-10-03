import React from 'react';
import { View, Button} from 'react-native';

const Page3 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button 
      title="Voltar para Pagina 1"
      onPress={() => navigation.navigate('Pagina 1') }
    />
  </View>
);

Page3.navigationOptions = {
  title: 'Pagina3',
}

export default Page3;