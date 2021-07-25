import React, { useMemo, useRef, useState } from "react";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import { useNode } from "@craftjs/core";
import SlateEditor from "../slatejs/SlateEditor";

export const RichTextEditor = ({ richTextValue }) => {
  console.log(richTextValue);

  const {
    connectors: {connect, drag},
    actions: { setProp },
  } = useNode();

  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(richTextValue);

  return (
    <div
    ref={(ref) => connect(drag(ref))}
    >
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => {
          setValue(value);
          //const content = JSON.stringify(value);

          // Setting the props of the component managed by Craftjs to the new Slatejs Editor value
          setProp((props) => (props.richTextValue = value));
        }}
      >
        <Editable />
      </Slate>
    </div>
  );
};

// Properties

RichTextEditor.craft = {
  rules: {
    canDrag: (node) => node.data.props.richTextValue != "Drag",
  },
};
