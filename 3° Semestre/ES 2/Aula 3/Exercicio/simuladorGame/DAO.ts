export interface DAO {
  salvar<T>(objeTo: T): T;

  remover<T>(idObjeto: number): T;

  listar<T>(): T[];

  atualizar<T>(objeto: T): T;
}

export interface DAOAdvanced extends DAO {
  buscarPorID<T>(idItem: number): T;

  buscarPorNome<T>(nome: string): T;
}