import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { useState } from "react";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("player", { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HighLight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma" 
          onChangeText={setGroup}
        />

        <Button 
          title="Criar" 
          style={{ marginTop: 20 }} 
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
