import React, {useState} from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Pressable} from 'react-native'
import Modal from './components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck as check } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck as checkSolid, faTrash, faListCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import List from './components/List'

export default function App() {

  const [txtValue,setTxtValue] = useState('') 
  const [itemsList,setItemsList] = useState([]) 
  const [itemSelected,setItemSelected] = useState() 
  const [modalVisible, setModalVisible] = useState(false) 
  const [msjModal,setMsjModal] = useState('') 
  const [modalTitle,setModalTitle] = useState('') 
  const [isDelete, setIsDelete] = useState(false) 
  const [isDoneAll, setIsDoneAll] = useState(false) 

  const onHandleChangeItem = text => setTxtValue(text)

  const addItem = () => {
    if(txtValue!=''){
      setItemsList(prevState => [
        ...prevState,
        {id:Math.random(), value: txtValue, done:-1}
      ])
      setTxtValue('')
    }
  }

  const titleUpdate = () => (
    <View style={{flexDirection: 'row'}}>
      <FontAwesomeIcon style={{marginTop:5,color:"#925a8f"}} icon={faListCheck} size='22x' />
      <Text style={{fontSize:25,fontWeight:"bold"}}> Actualizar </Text>
    </View>
  )

  const titleDelete = () => (
    <View style={{flexDirection: 'row'}}>
      <FontAwesomeIcon style={{marginTop:5,color:"#925a8f"}} icon={faTrash} size='22x' />
      <Text style={{fontSize:25,fontWeight:"bold"}}> Eliminar </Text>
    </View>
  )

  const titleCheckAll = () => (
    <View style={{flexDirection: 'row'}}>
      <FontAwesomeIcon style={{marginTop:5,color:"#925a8f"}} icon={faCheckDouble} size='22x' />
      <Text style={{fontSize:25,fontWeight:"bold"}}> Completar Todo </Text>
    </View>
  )

  const onHandleChangeAllItems = () => {
    setModalTitle(titleCheckAll)
    setMsjModal('¿Deseas marcar como "Completadas" todas las tareas?')
    setModalVisible(true)
    setIsDoneAll(true)
  }

  const checkAllItems = () => {
    itemsList.map((v,index)=>{
      itemsList[index].done = 1 
    })
    setModalVisible(false)
  }
  
  const changeItemStatus = index => {
    let done = itemsList[index].done==-1?'':'NO '
    setModalTitle(titleUpdate)
    setMsjModal('¿"'+itemsList[index].value+'" '+done+'ha sido completado?')
    setModalVisible(true)
    setIsDelete(false)
    setIsDoneAll(false)
    setItemSelected(index)
  }

  const onHandleChangeItemStatus = () => {
    let newStatus = itemsList[itemSelected].done==-1?1:-1
    itemsList[itemSelected].done = newStatus
    setModalVisible(false)
  }

  const iconCheck = index => (
    <Pressable onPress={()=> changeItemStatus(index)}>
      <FontAwesomeIcon style={{marginTop:5,color:"#925a8f"}} icon={checkSolid} size='22x' /> 
    </Pressable>
  )

  const iconNoCheck = index => (
    <Pressable onPress={()=> changeItemStatus(index)}>
      <FontAwesomeIcon style={{marginTop:5}} icon={check} size="22x" />
    </Pressable>
  )

  const renderItems = ({ item, index }) => (
    <View style={styles.textContainer}>
      { item.done==-1 ? iconNoCheck(index) : iconCheck(index) }
      <Text style={styles.textList}> 
         {item.value}
      </Text>
      <TouchableOpacity onPress={() => onHandleModal(index)} >
        <Text><FontAwesomeIcon style={{color:"#925a8f"}} icon={faTrash} size="25x" /></Text>
      </TouchableOpacity>
    </View>
  )

  const onHandleModal = index => {
    setModalTitle(titleDelete)
    setMsjModal('¿Seguro que deseas eliminar "'+itemsList[index].value+'"?')
    setIsDelete(true)
    setIsDoneAll(false)
    setModalVisible(true)
    setItemSelected(index)
  }

  const onHandleDelete = () => {
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setModalVisible(false)
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header onHandleChangeItem={onHandleChangeItem} addItem={addItem} txtValue={txtValue} onHandleChangeAllItems={onHandleChangeAllItems} />
      <List renderItems={renderItems} itemsList={itemsList} />
      <Modal 
        hideModal={hideModal} 
        checkAllItems={checkAllItems}
        onHandleDelete={onHandleDelete} 
        onHandleChangeItemStatus={onHandleChangeItemStatus} 
        modalVisible={modalVisible} 
        msjModal={msjModal} 
        modalTitle={modalTitle} 
        isDelete={isDelete} 
        isDoneAll={isDoneAll} />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
    paddings: {
      alignItems:'center',
      paddingLeft:10
    },
    container: {
        backgroundColor: "#55426e",
        flex: 1
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#ffabd1",
      alignItems: 'center',
      marginVertical: 10,
      padding: 10,
      width: "100%",
      borderRadius:10,
    },
    textList: {
        fontSize: 24,
        color: "#fff",
        fontWeight: 'bold',
        width: "82%",
      }
})