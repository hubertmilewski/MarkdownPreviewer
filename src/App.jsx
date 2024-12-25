import { useState } from 'react';
import './index.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'; 
import remarkBreaks from 'remark-breaks'; 

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

This text has a line break at the end.  
And this is on a new line!
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">

      <header className="text-white text-center py-4 text-3xl font-bold">
        Markdown Previewer
      </header>

      <div className="flex flex-grow mx-4 mb-4">
        <textarea
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          className="w-1/2 p-4 mr-1 text-black bg-gray-300 border-r border-gray-300 "/>

        <div id="preview" className="w-1/2 p-4 ml-1 bg-white ">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {markdownText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
