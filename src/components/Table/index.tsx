import React from 'react';

import { Container } from './styles';

const Table:React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>vinicius.santos</td>
            <td>Vinicius de Souza Santos</td>
          </tr>
          <tr>
            <td>james.hetfield</td>
            <td>James Hetfield</td>
          </tr>
          <tr>
            <td>kirk.hammett</td>
            <td>Kirk Hammet</td>
          </tr>
          <tr>
            <td>burton.cliff</td>
            <td>Cliff Burton</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Table;