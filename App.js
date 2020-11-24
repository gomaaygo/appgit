import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styled from 'styled-components';

const Pagina = styled.View`
  flex: 1;
`;

const Cabecalho = styled.View`
  height: 65px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.View`
  height: 50px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: #24292e;
  border-width: 1px;
  border-radius: 5px
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 15px;
`;

const Busca = styled.TextInput`
  color: #24292e;
  font-size: 25px;
  margin-left: 20px;
`;

const Botao = styled.TouchableOpacity``;
const Iconebuscar = styled.Image`
  width: 35px;
  height: 35px;
  margin-right: 30px;
`;

const Imagem = styled.Image`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 200px;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Avatar = styled.SafeAreaView`
  width: 200px;
  height: 300px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

const Details = styled.SafeAreaView`
`;

const Item = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

const ItemB = styled.Text`
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 2px;
  text-align: center;
`;

const App = () => {
  const [nome, alteraNome] = useState('');
  const [filme, alteraFilme] = useState({});

  return (
    <Pagina>
      <Cabecalho>
        <Logo source={require('./src/imagens/logo.png')}/>
      </Cabecalho>
      <Menu>
        <Busca placeholder="Busca" placeholderTextColor="#24292e" onChangeText={(username) => alteraNome(username)}/>
        <Botao activeOpacity={0.3}>
            <Iconebuscar source={require('./src/imagens/icon-search.png')}/>
        </Botao>
      </Menu>
      <Avatar>
        <Imagem/>
      </Avatar>
      <Details>
        <Item>Nome</Item>
        <ItemB>Exemplo</ItemB>
        <Item>Username</Item>
        <ItemB></ItemB>
        <Item>Seguidores</Item>
        <ItemB></ItemB>
      </Details>
    </Pagina>
  )
}

export default App;