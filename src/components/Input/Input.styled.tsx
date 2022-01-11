import styled from 'styled-components';

interface inputAttrs {
  type: string;
  placeholder: string;
}

const Input = styled.input.attrs((props: inputAttrs) => {
  type: props.type;
  placeholder: props.placeholder;
})`
  border: none;
  border-bottom: 0.15em solid #f5cac3;
  height: 1.5em;
  outline: none;

  :focus {
    outline: none;
  }
`;

export default Input;
