import { View, Text } from 'react-native';

// le props route est passé en paramètre de la fonction Details il est obligatoire pour récupérer les paramètres de la route
const Details = ({route}) => {

    // on récupère le paramètre id de la route
    const { id } = route.params;

    return (
        <View>
            <Text>Product id : {id} </Text>
        </View>
    );
}

export default Details;