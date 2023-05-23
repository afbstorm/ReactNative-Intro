import { View, Text, Button } from 'react-native';

// Le props navigation est passé en paramètre de la fonction Homepage il est obligatoire pour naviguer entre les pages
const Homepage = ({navigation}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
                <Button
                // title est le texte du bouton
                    title="Go to Products"
                // onPress est l'action qui se déclenche au clic et navige vers la page Products
                    onPress={() => navigation.navigate('Products')}
                />
    </View>
    );
}

export default Homepage;