import {View, Text, Button} from 'react-native';

const Products = ({navigation}) => {
  const id = Math.floor(Math.random() * 100);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Product details"
        onPress={() => navigation.navigate('Details', {id: id})}
      />
    </View>
  );
};

export default Products;
