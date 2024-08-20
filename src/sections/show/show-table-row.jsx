import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

export default function ShowTableRow({
  selected,
  title,
  photo,
  description,
  duration,
  rating,
  price,
  theaterName,
  showDate,
  handleClick,
  handleOpenMenu,
}) {
  return (
    <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox disableRipple checked={selected} onChange={handleClick} />
      </TableCell>

      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={title} src={photo} />
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Stack>
      </TableCell>

      <TableCell>{description}</TableCell>

      <TableCell>{duration}</TableCell>

      <TableCell align="center">{rating || 'N/A'}</TableCell>

      <TableCell align="right">{price ? `$${price}` : 'N/A'}</TableCell>

      <TableCell>{theaterName}</TableCell>

      <TableCell>{showDate}</TableCell>

      <TableCell align="right">
        <IconButton onClick={handleOpenMenu}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

ShowTableRow.propTypes = {
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number.isRequired,
  theaterName: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};
