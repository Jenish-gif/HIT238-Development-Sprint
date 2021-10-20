import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from './home';
import Quiz from './quiz';
``

export default class Form extends Component {

    render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,
    };

    return (
      <Formik
        initialValues={{ 
          name: '',
          email: '', 
          password: '' 
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
            }            
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }

            <Button
              color="#1b4332"
              title='Start QuiZZing'
              disabled={!isValid}
              onPress={() => navigation.navigate('Quiz')}
            />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
    backgroundColor: "white",
  },

  inputStyle:{
    backgroundColor: "red",

  }
});

