import React, { useState } from 'react'

const Files = () => {
    const [drag, setDrag] = useState(false);

    const dragStartHandler = (e) => {
      e.preventDefault();
      setDrag(true);
    };

    const dragLeaveHandler = (e) => {
      e.preventDefault();
      setDrag(false);
    };
    const dropHandler = (e) => {
      e.preventDefault();
      let files = [...e.dataTransfer.files];
      const formData = new FormData();
      formData.append("file", files[0]);

      console.log(formData);
      // axios.post("url", formData, options);
      setDrag(false);
    };

  return (
    <div className="app">
      {drag ? (
        <div
          className="drop-area"
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => dropHandler(e)}
        >
          Отпустите файлы, чтобы загрузить их
        </div>
      ) : (
        <div
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          className="drop-area"
        >
          Перетащите файлы, чтобы загрузить их
        </div>
      )}
    </div>
  );
}

export default Files
