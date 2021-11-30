import styled, { css } from 'styled-components';

export const TodoListItem = styled.div`
    padding:1rem;
    display:flex;
    align-items: center;
    &:nth-child(even){
    background:#f8f9fa;
    }
    &+&{
        border-top:1px solid #dee2e6;
    }
`
export const CheckBox = styled.div`
    cursor:pointer;
    flex:1;
    display:flex;
    align-items: center;

    svg{
        font-size:1.5rem;
    }
        ${props => props.checked2 &&
        css`
        svg{
            color:#22b8cf;
        }
        
          `
    } 
`
export const Text = styled.div`
    margin-left:0.5rem;
    flex:1;
  
    ${props => props.checked2 &&
        css`
        svg{
            color:#22b8cf;
        }
        
            color:#abd5bd;
            text-decoration: line-through;
        `
    } 
`;
export const Remove = styled.div`
  display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
`
