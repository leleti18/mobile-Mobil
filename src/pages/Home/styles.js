import React from 'react'
import { StyleSheet} from 'react-native'

const style = StyleSheet.create ({

    background:{
        flex:1,
        alignContent : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#f0f0f5'
        

       
    },

    containerLogo : {
        flex :1,
        
        justifyContent: 'center', 
        
        alignItems: 'center',
        alignContent :'center'


    },

    container :{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width: '90%',
        
    },
    input:{

        
        height: 50,
        backgroundColor : '#ffffff',
        width: '90%',
        marginBottom :15,
        color: '#222',
        fontSize: 17,
        borderRadius: 10,
        padding:10
    },
    
    btnSubmit:{
        backgroundColor: '#000',
        width: '90%',
        height:45,
        marginBottom:15,
        borderRadius:10,
        alignItems: 'center',
        justifyContent:'center'

    },

    submitText :{
        color: '#FFF',
        fontSize: 18

    }

})

export default style;