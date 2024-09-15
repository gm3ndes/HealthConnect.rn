import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dadosServico, recuperarDados, salvarDados } from '../AsyncStorage/Salvardados';

const CadastroServicoMedico = () => {
  const [nomeServico, setNomeServico] = useState<string | undefined>('');
  const [descricao, setDescricao] = useState<string | undefined>('');
  const [preco, setPreco] = useState<string | undefined>('');
  const [servicos, setServicos] = useState<dadosServico[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleCadastro = async () => {
    let precoConvert: number = Number(preco);
    const novoServico: dadosServico = {
      nome: nomeServico,
      descricao,
      preco: precoConvert,
    };

    let novosServicos;

    if (editIndex !== null) {
      // Atualizar serviço existente
      novosServicos = servicos.map((servico, index) =>
        index === editIndex ? novoServico : servico
      );
      setEditIndex(null); // Resetar o índice de edição
      Alert.alert('Sucesso', 'Serviço atualizado com sucesso!');
    } else {
      // Cadastrar novo serviço
      novosServicos = [...servicos, novoServico];
      Alert.alert('Sucesso', 'Serviço cadastrado com sucesso!');
    }

    setServicos(novosServicos);
    await salvarDados('servicos', novosServicos);

    // Limpa os campos após o cadastro ou atualização
    setNomeServico('');
    setDescricao('');
    setPreco('');
  };

  const handleEdit = (index: number) => {
    const servico = servicos[index];
    setNomeServico(servico.nome);
    setDescricao(servico.descricao);
    setPreco(servico.preco ? servico.preco.toString() : "");
    setEditIndex(index); // Define o índice do serviço que está sendo editado
  };

  const handleDelete = async (index: number) => {
    const novosServicos = servicos.filter((_, i) => i !== index); // Filtra o serviço a ser excluído
    setServicos(novosServicos); // Atualiza o estado local

    // Salva a nova lista de serviços no AsyncStorage
    await salvarDados('servicos', novosServicos);
    Alert.alert('Sucesso', 'Serviço excluído com sucesso!');
  };

  useEffect(() => {
    const carregarServicos = async () => {
      const servicosCarregados = await recuperarDados('servicos');
      if (servicosCarregados) {
        setServicos(servicosCarregados);
      }
    };

    carregarServicos();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Serviço Médico</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Serviço"
        value={nomeServico}
        onChangeText={setNomeServico}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>{editIndex !== null ? 'Atualizar Serviço' : 'Cadastrar Serviço'}</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Serviços Cadastrados</Text>
      {servicos.map((servico, index) => (
        <View key={index} style={styles.servicoContainer}>
          <TouchableOpacity onPress={() => handleEdit(index)}>
            <Text style={styles.servico}>
              {`${servico.nome} - ${servico.descricao} - R$${servico.preco}`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(index)}>
            <Text style={styles.deleteButton}>Excluir</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  servico: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  servicoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CadastroServicoMedico;