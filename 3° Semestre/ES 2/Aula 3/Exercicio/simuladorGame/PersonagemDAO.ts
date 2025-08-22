export interface PersonagemDAO {
  salvar<Personagem>(personagem: Personagem): Personagem;

  remover<T>(idPersonagem: number): Personagem;

  lisPersonagemar<Personagem>(): Personagem[];

  atualizar<T>(personagem: Personagem): Personagem;
}

export interface PersonagemDAOAdvanced extends PersonagemDAO {
  buscarPorID<T>(idPersonagem: number): Personagem;

  buscarPorNome<T>(nome: string): Personagem;
}

export interface OutraInterface {}
