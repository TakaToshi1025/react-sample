import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {Parent} from "./components/UseContentSample";
import Name from "./components/Name";
import ImageUploader from "./components/UseRefSample";
import {Input} from "./components/CustomHooksSample";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Input/>);