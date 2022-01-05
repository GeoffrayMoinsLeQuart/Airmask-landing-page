import {
  IconButton,
} from '@mui/material';
import styled from 'styled-components';

const StyledButtonIcon = styled(IconButton)`
  margin-left: ${(props) => (props.marginleft ? props.marginleft : 'auto')};
  margin-right: ${(props) => (props.marginright ? props.marginright : 'auto')};
  background-color: rgba(255, 255, 255, 0.1);
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
