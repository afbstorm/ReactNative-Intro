import {View, Text, StyleSheet, FlatList, SectionList, ScrollView} from 'react-native';

const Homepage = () => {
  
  const datas = [
    {
      id: '1',
      title: 'Pomme',
    },
    {
      id: '2',
      title: 'Poire',
    },
    {
      id: '3',
      title: 'Abricot',
    },
    {
      id: '4',
      title: 'Pêche',
    },
  ];

  const datasSection = [
    {
      id: '1',
      title: 'Fruits',
      data: ['Pomme', 'Poire', 'Abricot', 'Pêche'],
    },
    {
      id: '2',
      title: 'Outils',
      data: ['Marteau', 'Tournevis', 'Scie', 'Clé à molette'],
    },
    {
      id: '3',
      title: 'Jeux de société',
      data: ['Dilemne du Roi', '7th Continent', 'Vilainous', 'Uno'],
    },
    {
      id: '4',
      title: 'Voitures',
      data: ['Vw', 'Sköda', 'Mercedes', 'Hyundai'],
    },
  ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const KeyExtractor = (item) => item.id + item;

  return (
    <>
      {/* View est un composant qui permet de créer un conteneur
        comme une div en HTML */}
      <View style={styles.container}>
        {/* // Text est un composant qui permet d'afficher du texte */}
        <Text style={styles.title}>Home</Text>
        <View>
          {/* FlatList est un composant qui permet d'afficher 
          une liste de données
          elle va prendre plusieurs arguments */}
        <FlatList
          // data est un tableau de données que l'on veut afficher dans la liste
          data={datas}
          // renderItem est une fonction qui va permettre de 
          // définir le rendu de chaque item de la liste
          renderItem={({item}) => <Item title={item.title} />}
          // keyExtractor est une fonction qui va permettre de 
          // définir une clé unique pour chaque item de la liste
          keyExtractor={KeyExtractor}
          // numColumns est un nombre qui va permettre de définir le nombre de colonnes de la liste
          // numColumns={2}
      />
        </View> 
        <View style={styles.sectionListContainer}>
        <SectionList
            // contentContainerStyle permet de définir 
            // le style du conteneur de la SectionList 
            // (ici, on lui donne une hauteur fixe) 
            // la hauteur fixe est nécessaire pour que la 
            // SectionList soit scrollable 
            contentContainerStyle={styles.sectionListContent}
            // sections est un tableau d'objets qui va permettre 
            // de définir les sections de la SectionList avec 
            // leurs données
            sections={datasSection}
            keyExtractor={KeyExtractor}
            renderItem={({ item }) => <Item title={item} />}
            // renderSectionHeader est une fonction qui 
            // va permettre de définir le rendu de chaque 
            // section de la SectionList
            // ici, on lui passe un objet qui contient le 
            // titre de la section
            // on peut ensuite utiliser la propriété 
            // title de l'objet dans la fonction pour afficher 
            // le titre de la section
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
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
    flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#a9a9a9',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    color: '#a9a9a9',
    textAlign: 'center',
  },
  sectionListContainer: {
    // ce style est nécessaire pour que la SectionList soit scrollable
    // flex: 1 permet de dire que la SectionList va prendre toute la hauteur disponible
    // height: 300 permet de définir une hauteur fixe pour la SectionList
    flex: 1,
    height: 300,
  },
  sectionListContent: {
    // paddingBottom permet de définir un padding en bas de la SectionList pour s'assurer que les derniers items sont visibles
    paddingBottom: 20,
  },
});

export default Homepage;
