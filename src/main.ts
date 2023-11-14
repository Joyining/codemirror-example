import './style.css';
import { javascript } from '@codemirror/lang-javascript'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'

const initialText = 'console.log("Hello, world!")';

const targetElement = document.querySelector('#editor') as Element;

new EditorView({
  doc: initialText,
  parent: targetElement,
  state: EditorState.create({
    doc: initialText,
    extensions: [
      basicSetup,
      javascript(),
    ],
  }),
});
