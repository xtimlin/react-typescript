import React from 'react';
import styled from 'styled-components';

const TaskText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Todo: React.FunctionComponent = () => {
  return <TaskText>Todo</TaskText>;
};

export default Todo;
