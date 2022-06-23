import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container, 
  Header, 
  UserInfo, 
  Photo ,
  User ,
  UserGreeting ,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
} from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/15694609?v=4'}} />
            <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Prisco Cleyton</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>

      </Header> 

      <HighlightCards>
        <HighlightCard 
          title="Entradas" 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          title="Entradas" 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          title="Entradas" 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>
    </Container>
    )
}