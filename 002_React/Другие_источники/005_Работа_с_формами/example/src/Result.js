//Result.js
import React from 'react';
import {
  List,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { useData } from './Data.Context';
import { InsertDriveFile } from '@material-ui/icons';
import { PrimaryButton } from './components/PrimaryButton';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

export const Result = () => {
  const styles = useStyles();
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();

    if (data.files) {
      data.files.forEach((file) => {
        formData.append('files', file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch(
      'http://localhost:4000/',

      { method: 'POST', body: formData }
    );

    // if (res.status === 200) {
    //   Swal.fire('Grid job!', 'Отправлено', 'success');
    // }
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form values
      </Typography>
      <TableContainer className={styles.root} container={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to="/">Start over</Link>
    </MainContainer>
  );
};
