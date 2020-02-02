import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;

  table {
    border: 1px solid ${props => props.theme.colors.text};
    width: 100%;
    height: 100%;
    text-align: center;
    border-collapse: collapse;
    margin-top: 20px;
  }

  table td, table th {
    border: 1px solid ${props => props.theme.colors.text};
    padding: 3px 2px;
  }

  table tbody td {
    font-size: 13px;
    color: ${props => props.theme.colors.text};
  }

  table tr:nth-child(even) {
    background: ${props => props.theme.colors.backgroundTable};;
  }

  table thead {
    background: #dddddd;
    background: -moz-linear-gradient(top, #8c8c8c 0%, #757575 66%, #666666 100%);
    background: -webkit-linear-gradient(top, #8c8c8c 0%, #757575 66%, #666666 100%);
    background: linear-gradient(to bottom, #8c8c8c 0%, #757575 66%, #666666 100%);
  }

  table thead th {
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.colors.textTable};
    text-align: center;
  }

  table thead th:first-child {
    border-left: none;
  }

}
`;