import './style.css';
import { minimalSetup, EditorView } from 'codemirror';

const initialText = 'console.log("Hello, world!")';

const targetElement = document.querySelector('#editor') as Element;

new EditorView({
  doc: initialText,
  extensions: [
    minimalSetup,
  ],
  parent: targetElement,
});
