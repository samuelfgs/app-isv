import { registerComponent } from "@plasmicapp/host";
import React from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  React.useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = Math.min(scrollHeight, 250) + "px";
    }
  }, [textAreaRef, value]);
};

export function TextArea(props: {
  className: string;
  value?: string;
  placeholder: string;
  onChange?: (val: string) => void;
}) {
  const { className, value : propsVal, placeholder, onChange } = props;
  const [value, setValue] = React.useState(propsVal ?? "");
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
    onChange?.(val);
  };

  return (
    <textarea
      className={className}
      id="review-text"
      onChange={handleChange}
      placeholder={placeholder}
      ref={textAreaRef}
      rows={1}
      value={value}
      style={{
        resize: "none"
      }}
      autoFocus={true}
    />
  );
}

export const registerTextArea = () => {
  registerComponent(TextArea, {
    name: "TextArea",
    providesData: true,
    props: {
      value: "string",
      placeholder: "string"
    },
    importPath: "./components/code-components/TextArea"
  });
  
}
