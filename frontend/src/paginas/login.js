import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import usuarioService from '../services/usuarioService';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
   
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };
  const handleSubmit = () => {
    console.log(email, senha);

    

    usuarioService
      .loginUsuario(email, senha)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          Alert.alert('Bem-vindo!');
          setEmail('');
          setSenha('');
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Email ou senha inválidos');
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentLogin}>
        <Text style={styles.heading}>Login</Text>

        <View style={styles.boxLogin}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            required
          />
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxLembrarSenha}>
          <Text style={styles.link} onPress={() => navigation.navigate('EsqueceuSenha')}>
            Esqueceu a senha?
          </Text>
        </View>

        <View style={styles.boxLembrarSenha}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
            <Text style={styles.cadastroButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    with: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor: '#1a1a1a',
  },
  contentLogin: {   
  width:300,
  
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0fff0',
    borderRadius: 7,
    padding: 40,
    shadowColor: '#f0fff0',
    shadowOffset: 
    {

  
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    gap: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000000',
  },
  boxLogin: {
    position: 'relative',
    width:200
  },
  errorMessage: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    fontSize: 14,
    color: '#4125f7',
    margin: 0,
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 4,
    outline: 'none',
    backgroundColor: '#ffffff',
    color: 'black',
  },
  button: {
    backgroundColor: 'linear-gradient(to right, #f72585, #ff0676)',
    borderRadius: 4,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
  boxLembrarSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    
  },
  link: {
    color: '#006400',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  cadastroButton: {
    backgroundColor: '#006400',
    borderRadius: 4,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroButtonText: {
    color: '#fff',
    fontSize: 18,
  },
};
export default Login;