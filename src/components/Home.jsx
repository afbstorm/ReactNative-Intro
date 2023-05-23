import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react';

const Homepage = () => {
  
  const [inputVal, setInputVal] = useState('');
  const [text, setText] = useState('');

  const handleChange = (val) => {
    setInputVal(val);
  }

  const handleSubmit = () => {
    setText(inputVal);
    // On reset la valeur de l'input, dans react native sous android nous avons cette contrainte
    // qui fait que la valeur de l'input ne se reset pas automatiquement
    setTimeout(() => {
      setInputVal('')
    }, 0);
  }

  return (
    <>
      {/* View est un composant qui permet de créer un conteneur
        comme une div en HTML */}
      <View style={styles.container}>
        {/* // Text est un composant qui permet d'afficher du texte */}
        <Text style={styles.title}>Home</Text>
        <View>
          {/* TextInput est un composant qui permet de créer un champ de texte le inputMode est là pour spécifier le type d'input. 
          Le onChangeText permet de récupérer la valeur de l'input à chaque fois qu'elle change comme le onChange en react*/}
          <TextInput placeholder="Entrez votre texte" inputMode='text' onChangeText={handleChange} value={inputVal}/>
          <Button title="Valider" onPress={handleSubmit} />
          <Text>{text}</Text>
        </View>
      </View>
    </>
  );
};

// Pour appliquer du style à un composant, on utilise le composant StyleSheet avec sa méthode create
// On lui passe un objet avec les propriétés CSS
// On peut ensuite utiliser la propriété style sur le composant pour lui appliquer le style
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a9a9a9',
  },
});

export default Homepage;
