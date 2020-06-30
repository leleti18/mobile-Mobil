import React ,{ useRef, useEffect}from 'react';
import {View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Text, Platform, Button, Alert} from 'react-native'
import styles from './styles';
import Input from '../../components/Input';
import { Form } from '@unform/mobile';
import {useNavigation} from '@react-navigation/native'
import * as Yup from 'yup';

import api from '../../services/api'; 


const Home  = ()   =>{

    const navigation = useNavigation();

    
    
    const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed

     
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
    



    return(
        <KeyboardAvoidingView   style={styles.background} behavior = {Platform.OS === 'ios' ? 'padding' : null}>
            
         
            <View style={styles.containerLogo}>
                <Image source ={require('../../assets/logo.png')}
                />

               

            </View>
        <Form onSubmit={handleSubmit} style= {styles.container} ref={formRef}>
            
                <Input
                name = "email"
                style={styles.input}
                keyboardType ="email-address"
                placeholder= "email"
                returnKeyType ="next"
                autoCorrect={false}
                //onChange={()=>{}}
                autoCapitalize ="none"
                
                />

                <Input
                
                name= "password"
                style={styles.input}
                placeholder= "password"
                autoCorrect={false}
                onChange={()=>{}}
                returnKeyType ="send"
                secureTextEntry
                autoCapitalize ="none"
                
               
                
                />

            <TouchableOpacity style={styles.btnSubmit}onPress={()=> formRef.current.submitForm()} >
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={()=> navigation.navigate('CadUser')}>
                <Text style={styles.submitText}>Criar conta </Text>
            </TouchableOpacity>


           
        </Form>
     </KeyboardAvoidingView>
    )
}



export default Home;
