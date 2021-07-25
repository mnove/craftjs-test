// pages/index.js

import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { SettingsPanel } from '../components/SettingsPanel';
import SlateEditor from '../components/slatejs/SlateEditor';
import { Toolbox } from '../components/Toolbox';
import { Topbar } from '../components/Topbar';
import { Button } from '../components/user/Button';
import { Card} from '../components/user/Card';
import { Container } from '../components/user/Container';
import { Text } from '../components/user/Text';
import { RichTextEditor } from '../components/user/RichTextEditor';
import '../styles/main.css';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));

const richTextValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]
export default function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
        Basic Page Editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          RichTextEditor,
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: '10px' }}>
          <Grid item xs>
            <Frame>
              <Element canvas is={Container} padding={5} background="#eeeeee">
                
                <Button text="Click me" size="small" />
                <Text fontSize={20} text="Hi world!" />
                <RichTextEditor richTextValue={richTextValue}  />
                <Element canvas is={Container} padding={6} background="#999999">
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>

      <h1>Slatejs editor</h1>
      <SlateEditor />
    </div>
  );
}