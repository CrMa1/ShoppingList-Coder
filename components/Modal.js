import { View, StyleSheet, Text, Modal as NewModal, TouchableOpacity} from 'react-native'

const Modal = ({modalVisible,onHandleDelete,modalTitle,msjModal,hideModal,onHandleChangeItemStatus,isDelete,isDoneAll,checkAllItems}) => {

    let buttonConfirm = '';
    
    if(isDoneAll){
        buttonConfirm = checkAllItems
    }else if(isDelete){
        buttonConfirm = onHandleDelete
    }else{
        buttonConfirm = onHandleChangeItemStatus
    }

    return(<NewModal 
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.modalBody}>
                <View style={{alignItems: 'center', margin: 10}}>
                    <Text style={{fontSize: 25, marginTop: 5,}}>{modalTitle}</Text>
                    <Text style={{fontSize: 18, marginTop: 15, color:'grey'}}>
                        {msjModal}
                    </Text>
                </View>
                <View style={styles.modalButtonsRow}>
                    <TouchableOpacity 
                        style={styles.modalButtons} 
                        onPress={hideModal}>
                        <Text style={{fontWeight:"bold",color:"white"}}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.modalButtons} 
                        onPress={buttonConfirm}>
                        <Text style={{fontWeight:"bold",color:"white"}}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </NewModal>)
}

export default Modal;

const styles = StyleSheet.create({
    modalTitle: {
      backgroundColor: "#ccc",
      color: "#fff",
      fontSize: 18,
    },
    modalMessage: {
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalBody: {
      alignItems: 'center',
      backgroundColor: 'white',
      marginVertical: 60,
      width: '90%',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 7,
      elevation: 10,
    },
    modalButtons:{
      justifyContent: 'center',
      backgroundColor: '#ffabd1',
      borderColor: '#b38de2',
      borderRadius: 5,
      marginBottom: 10,
      marginTop: 5,
      padding:10,
    },
    modalButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "70%",
        marginTop:10,
    }
})

