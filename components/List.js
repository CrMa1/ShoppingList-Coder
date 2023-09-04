import { View, StyleSheet, FlatList} from 'react-native'

const List = ({renderItems,itemsList}) => {
    return(
      <>
        <View style={styles.paddings}>
          <View style={styles.listContainer}>
            <FlatList
              style={{height:"92%"}}
              data={itemsList}
              renderItem={renderItems}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>)
}

export default List;

const styles = StyleSheet.create({
    paddings: {
        alignItems:'center',
        paddingLeft:10
    },
    listContainer: {
      width:"90%",
      borderColor: "#55426e",
      borderWidth: 2,
      marginTop: 20,
    },
})


