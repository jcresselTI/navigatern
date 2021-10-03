import React from 'react';
import { View, Button  } from 'react-native';

const Page2 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button 
      title="Pagina 3"
      onPress={() => navigation.navigate('Pagina 3') }
    />
  </View>
);

Page2.navigationOptions = {
  title: 'Pagina2',
}

export default Page2;