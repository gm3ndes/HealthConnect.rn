import Header from '@/components/Header';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { dadosServico, recuperarDados } from '../AsyncStorage/Salvardados';


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<dadosServico[]>([]);

  const handleSearch = async (text: string) => {
    setSearchQuery(text);

    // Recupera os serviços do AsyncStorage
    const servicos = await recuperarDados('servicos');
    
    if (servicos) {
      // Filtra os serviços com base na pesquisa
      const filteredResults = servicos.filter((servico: dadosServico) =>
        servico.nome?.toLowerCase().includes(text.toLowerCase()) ||
        servico.descricao?.toLowerCase().includes(text.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]); // Se não houver serviços, limpa os resultados
    }
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      { searchQuery ?    <FlatList
        data={results}
        renderItem={({ item }) => (
          <Text style={styles.resultItem}>{`${item.nome} - ${item.descricao} - R$${item.preco}`}</Text>
        )}
        keyExtractor={(item) => item.nome || Math.random().toString()} // Gera uma chave única
      />: <Text>Insira na pesquisa uma mensagem</Text>}
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchPage;