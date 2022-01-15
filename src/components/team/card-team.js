import {
  Typography,
  useTheme,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';import useMediaQuery from '@mui/material/useMediaQuery';

const CardTeam = ({ title, subTitle, image }) => {
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'transparent' }}>
      <CardMedia component="img" image={image} alt={image} />
      <CardContent>
        <Typography gutterBottom variant="h3" align="center">
          {title}
        </Typography>
        <Typography variant={matchesBelowMD ? 'body1' : 'h4'} align="center">
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTeam;
