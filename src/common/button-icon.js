import {
  IconButton,
} from '@mui/material';
import styled from 'styled-components';
import theme from './theme';

const StyledButtonIcon = styled(IconButton)`
  margin-left: ${(props) => (props.marginleft ? props.marginleft : 'auto')};
  margin-right: ${(props) => (props.marginright ? props.marginright : 'auto')};
  background-color: ${theme.palette.ternary.opacity10};
  height: 46px;
  width: 46px;
`;

const ButtonIcon = ({
  onClick,
  icon,
  disableRipple = true,
  marginleft = 'auto',
  marginright = 'auto',
}) => {

  return (
    <StyledButtonIcon
      onClick={onClick}
      disableRipple={disableRipple}
      marginright={marginright}
      marginleft={marginleft}
    >
      <img alt={icon} src={icon} />
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
