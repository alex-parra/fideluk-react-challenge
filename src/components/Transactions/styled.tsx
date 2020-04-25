import styled from '@emotion/styled';

export const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 2px 2px 10px;
  background-color: #cbd5e0;
  border-radius: 3px;
`;

export const PerPage = styled.label`
  display: flex;
  align-items: center;
  user-select: none;

  span {
    padding-right: 0.4em;
    font-weight: bold;
    cursor: pointer;
  }

  input {
    width: 3ch;
    text-align: center;
  }
`;

export const Toggle = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  span {
    padding-left: 0.4em;
    font-weight: bold;
  }
`;

export const TransactionsStyled = styled.div`
  text-align: left;
  margin: 5px 0;

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const TransactionStyled = styled.li`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .primary {
    .transId {
      font-size: 0.8em;
    }

    .amount {
      display: flex;
      align-items: center;
      font-size: 1.1em;
      font-weight: bold;
    }

    .card {
      text-transform: uppercase;
      color: #777;
      font-size: 0.9em;
      small {
        font-size: 1em;
      }
    }

    .value {
      margin-left: 0.5em;
    }
  }

  .other {
    text-align: right;
    .date {
      display: block;
      font-size: 1.1em;
      font-weight: bold;
    }
    .location {
      display: block;
    }
  }

  & + li {
    margin-top: 5px;
  }
`;
