import React, { useMemo, useRef, useState } from "react";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

function SlateEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem('content')) || [
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ]
    )
  
    return (
      <Slate
        editor={editor}
        value={value}
        onChange={value => {
        setValue(value)
        const content = JSON.stringify(value)
        localStorage.setItem('content', content)
      }}
      >
        <Editable />
      </Slate>
    )
}

export default SlateEditor;
