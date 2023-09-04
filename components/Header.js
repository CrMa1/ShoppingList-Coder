import { View, TextInput, StyleSheet, Text, TouchableOpacity, Pressable} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const Header = ({onHandleChangeItem,addItem,txtValue,onHandleChangeAllItems}) => {
    return(
      <><View style={styles.paddings}>
        <View style={styles.header}>
          <Text style={{ fontSize: 28, color: "white" }}>Lista de compras</Text>
          <Pressable onPress={()=> onHandleChangeAllItems()}>
            <FontAwesomeIcon style={{marginTop:5,color:"#925a8f"}} icon={faClipboardCheck} size='25x' />
          </Pressable>
        </View>
      </View><View style={styles.paddings}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Escribe Aqui'
              placeholderTextColor={"#000"}
              value={txtValue}
              onChangeText={onHandleChangeItem}
              onSubmitEditing={addItem}
              style={{width:"90%"}} />
            <TouchableOpacity
              onPress={addItem}
              style={styles.addButton}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View></>)
}

export default Header;

const styles = StyleSheet.create({
    paddings: {
        alignItems:'center',
        paddingLeft:10
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: "90%", 
      marginTop: 20
    },
    inputContainer: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: "#fff",
      height: 50,
      fontSize: 20,
      paddingLeft: 12,
      width: "90%",
      paddingRight: 10,
  },
  addButton: {
    backgroundColor: "#ffabd1",
    padding: 5,
    borderRadius: 50,
    width: 35,
    height: 35,
    alignContent: "center",
    alignItems: "center",
  },
})
