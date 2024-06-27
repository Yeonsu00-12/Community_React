import styled from "styled-components";
import Colors from "../../Styles/color";
import { fontSize } from "../../Styles/fonts";

export const Error = styled.p`
    color: ${Colors.errorMsg};
    font-size: ${fontSize.error};
    margin-top : 0.5rem;
    margin-bottom : 0.5rem;
`;