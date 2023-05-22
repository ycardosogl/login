import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import usuarioService from '../services/usuarioService';


const Cadastro = () => {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    nrsec: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      await usuarioService.postUsuario(formData);
      alert('Inserido!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Faça o seu Cadastro</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={formData.nome}
          onChangeText={(text) => handleChange('nome', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={formData.senha}
          onChangeText={(text) => handleChange('senha', text)}
          secureTextEntry
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de segurança:</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de segurança"
          value={formData.nrsec}
          onChangeText={(text) => handleChange('nrsec', text)}
        />
      </View>
      <Button title="Cadastrar" onPress={handleSubmit} color="#006400" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  heading: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 23,
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#555',
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: '#444',
    color: '#fff',
    width: '100%',
    width: 200,
  },
};

export default Cadastro;
