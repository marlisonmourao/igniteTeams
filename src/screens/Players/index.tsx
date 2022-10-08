import { useState } from 'react'
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from '@components/PlayerCard';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Marlison', 'Fernando']);

  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome da pessoa" 
          autoCorrect={false} 
        />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}} 
          />
        )}
      />

    </Container>
  );
}
