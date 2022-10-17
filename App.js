import React, {useState} from 'react';
import { Button, View, StyleSheet, Text, Image, TouchableOpacity, TextInput, onChangeText,text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/logok.png';
import kk from './test.js'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={logo} style={{ width: 400, height: 325 }} />
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.button}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>


    </View>
  );
}

const Stack = createStackNavigator();

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>Cpf</Text>
      <TextInput style={styles.input} placeholder = 'Digite seu Nome'></TextInput>
      <Text>Senha</Text>
      <TextInput style={styles.input} placeholder = 'Digite sua Senha' secureTextEntry={true}></TextInput>
      <Text>CPF:</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Homepage')} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );

}


function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} placeholder = 'Digite seu Nome'></TextInput>
      <Text>Rg:</Text>
      <TextInput style={styles.input} placeholder = 'Digite seu Rg'></TextInput>
      <Text>CPF:</Text>
      <TextInput style={styles.input} placeholder = 'Digite seu Cpf'></TextInput>
      <Text>Senha:</Text>
      <TextInput style={styles.input} placeholder = 'Digite sua senha' secureTextEntry={true}></TextInput>
      <TextInput passwordRules={true}></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Homepage')} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );

}
function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.button}>
        <Text style={styles.buttonText}>Médico </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.button}>
        <Text style={styles.buttonText}>Paciente</Text>
      </TouchableOpacity>
    </View>
  );

}
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <TouchableOpacity onPress={() => alert('Você caiu na pegadinha do mario games kkk')} style={styles.button}>
        <Text style={styles.buttonText}>Entrou</Text>
      </TouchableOpacity>

    </View>
  );

}




function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main"  component={Main} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Homepage" component={Home} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 20,
    margin: 2,
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
  input: {
    backgroundColor: '#ffff00',
    padding: 10,
    fontSize: 18,
    color: 'black',
    borderRadius: 5
  }
  
});
