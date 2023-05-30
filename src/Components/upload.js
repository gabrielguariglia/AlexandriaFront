import React, { useState } from 'react';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cria um objeto FormData para enviar o arquivo
    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch('https://alexandria2.000webhostapp.com/arquivo.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="pdf" accept=".pdf" onChange={handleFileChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FileUploadForm;
