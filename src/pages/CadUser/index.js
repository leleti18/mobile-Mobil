import React ,{ useRef, useEffect}from 'react';
import {View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Text, Platform, Button} from 'react-native'
import styles from './styles';
import Input from '../../components/Input';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import api from '../../services/api'; 


const CadUser = ()   =>{
    const formRef = useRef(null);
    async function handleSubmit(data) {
    try {

        formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });


      // await api.post('/users',data);
      // Alert.alert('Sucesso!!')

      // navigation.goBack();
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
        <KeyboardAvoidingView style={styles.background} behavior = {Platform.OS === 'ios' ? 'padding' : null}>
            
         
            <View style={styles.containerLogo}>
                <Image source ={require('../../assets/logo.png')}
                />

               

            </View>
        <Form onSubmit={handleSubmit} style= {styles.container} ref={formRef}>
            
                <Input
                name = "username"
                style={styles.input}
                placeholder= "username"
                returnKeyType ="next"
                autoCorrect={false}
                onChange={()=>{}}
                autoCapitalize ="words"
                />
               
               
                <Input
                name = "email"
                style={styles.input}
                keyboardType ="email-address"
                placeholder= "email"
                returnKeyType ="next"
                autoCorrect={false}
                onChange={()=>{}}
                autoCapitalize ="none"
                />

                <Input
                name= "password"
                style={styles.input}
                placeholder= "password"
                autoCorrect={false}
                onChange={()=>{}}
                secureTextEntry
                autoCapitalize ="none"
                textContentType= "newPassword"
                
                />
                 <Input
                name= "confirmation_password"
                style={styles.input}
                placeholder= "Confirmation password"
                autoCorrect={false}
                onChange={()=>{}}
                secureTextEntry
                autoCapitalize ="none"
                textContentType= "newPassword"
                
                />

            <TouchableOpacity style={styles.btnSubmit}onPress={()=> formRef.current.submitForm()} >
                <Text style={styles.submitText}>Create Account</Text>
            </TouchableOpacity>

            

           
        </Form>
     </KeyboardAvoidingView>
    )
}



export default CadUser;
