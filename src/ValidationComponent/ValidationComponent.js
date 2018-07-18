import React from 'react';

const validationComponent = (props) => {
  let outputMessage = null;

  if (props.textLength < 5) {
    outputMessage = "Text is too short!";
  } else {
    outputMessage = "Text is long enough!";
  }

  return (
    <div>
      {outputMessage}
    </div>
  );
}

export default validationComponent;