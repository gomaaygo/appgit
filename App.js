import React, {useState, Fragment} from 'react';
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
  margin-left: 80px;
  margin-right: 100px;
  margin-bottom: 200px;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Avatar = styled.SafeAreaView`
  width: 250px;
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
  font-size: 18px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 2px;
  text-align: center;
`;

const Message = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-top: 200px;
`;

const App = () => {
  const [nome, alteraNome] = useState('');
  const [user, alteraUsername] = useState({message: false});

  const buscarUser = async () => {
    const req = await fetch(`https://api.github.com/users/${nome}`,);
    const resultado = await req.json(); 
    alteraUsername(resultado);
  };


  return (
    <Pagina>
      <Cabecalho>
        <Logo source={require('./src/imagens/logo.png')}/>
      </Cabecalho>
      <Menu>
        <Busca placeholder="Busca" value={nome} placeholderTextColor="#24292e" onChangeText={(name) => alteraNome(name)} />
        <Botao activeOpacity={0.3} onPress={buscarUser}>
            <Iconebuscar source={require('./src/imagens/icon-search.png')}/>
        </Botao>
      </Menu>
      {user.message == false &&
        <Message>Seja bem vindo!</Message>
      }
      { user.message == "Not Found" &&
        <Message>Usuário não econtrado!</Message>
      }
      { user.login && 
        <React.Fragment>
          <Avatar>
            <Imagem source={{uri: user.avatar_url}}/>
          </Avatar>
          <Details>
            <Item>Nome</Item>
            <ItemB>{user.name}</ItemB>
            <Item>Username</Item>
            <ItemB>{user.login}</ItemB>
            <Item>Seguidores</Item>
            <ItemB>{user.followers}</ItemB>
          </Details>
        </React.Fragment>
      }
    </Pagina>
  )
}

export default App;