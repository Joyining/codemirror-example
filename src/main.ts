import './style.css';
import { javascript } from '@codemirror/lang-javascript'
import { basicSetup, EditorView } from 'codemirror';

const initialText = 'console.log("Hello, world!")';

const targetElement = document.querySelector('#editor') as Element;

new EditorView({
  doc: initialText,
  extensions: [
    basicSetup,
    javascript(),
  ],
  parent: targetElement,
});
