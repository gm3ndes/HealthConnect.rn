import AsyncStorage from '@react-native-async-storage/async-storage';
export class dadosServico {
    nome?:string;
    descricao?:string
    preco?:Number
  };
export const salvarDados = async (chave:string, valor:dadosServico[]) => {
    try {
      await AsyncStorage.setItem(chave, JSON.stringify(valor));
      console.log('Dados salvos com sucesso');
    } catch (erro) {
      console.error('Erro ao salvar dados:', erro);
    }
  };
 export const recuperarDados = async (chave:string) => {
    try {
      const valor = await AsyncStorage.getItem(chave);
      return valor != null ? JSON.parse(valor) : null;
    } catch (erro) {
      console.error('Erro ao recuperar dados:', erro);
      return null;
    }
  };
  