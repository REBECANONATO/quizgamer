import styled from 'styled-components';

const Form = styled.form`
    label {
        &[data-selected="true"] {
            background-color: ${({ theme }) => theme.colors.primary};
        }
        &[data-status="SUCESSO"] {
            background-color: ${({ theme }) => theme.colors.success};
        }
        &[data-status="ERRO"] {
            background-color: ${({ theme }) => theme.colors.wrong};
        }
    }
`;

export default Form;