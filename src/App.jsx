import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function generate() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%&#";
    let newPassword = "";

    if (!inputValue) alert("Preencher o tamanho da senha!");

    for (let i = 0; i < inputValue; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>

      <label>Tamanho da senha</label>

      <input type="text" value={inputValue} onChange={handleChange} />

      <button onClick={generate}>Gerar</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div className="password">{password}</div>
    </div>
  );
}

export default App;
