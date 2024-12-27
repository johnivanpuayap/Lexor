import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const editorRef = useRef<any>(null);
  
  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function runCode() {
    const code = editorRef.current.getValue();
    axios.post('http://localhost:5000/api/interpreter/run', { code })
      .then((res) => {
        const consoleElement = document.querySelector('.console pre');
        if (consoleElement) {
          consoleElement.textContent = res.data.output;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  return (
    <div className="container">
      <h1 className="title">Lexo Code Editor</h1>
  
      <div className="editor-container">
        <Editor
          height="50vh"
          defaultLanguage="javascript"
          defaultValue=""
          theme="vs-dark"
          className="editor"
          onMount={handleEditorDidMount}
        />
      </div>

      <button onClick={runCode} className="run-button">Run</button>
      
      <p className="console-label">Console</p>

      <div className="console">
        <pre></pre>
      </div>
    </div> 
  );
};

export default App;