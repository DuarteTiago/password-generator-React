import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [passwordSize, setpasswordSize] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  const handleChange = (event) => {
    setpasswordSize(event.target.value);
  };

  function generate() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%&#";
    let newPassword = "";

    if (!passwordSize) alert("Preencher o tamanho da senha!");

    for (let i = 0; i < passwordSize; i++) {
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
      <div>
        <label htmlFor="passwordSize">Tamanho da senha: </label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={handleChange}
        />
      </div>
      <div className="divButton">
        <button onClick={generate}>Gerar</button>
        <button onClick={copyToClipboard}>{copyText}</button>
      </div>

      <div className="password">{password}</div>
    </div>
  );
}

export default App;
