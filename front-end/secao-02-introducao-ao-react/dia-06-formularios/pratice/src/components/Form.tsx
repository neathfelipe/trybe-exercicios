import { useState } from "react";

export default function Form() {
  const [error, setError] = useState(false);
  const [terms, setTerms] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    schooling: "Médio",
    resume: "",
  });

  function resetForm() {
    setFormInfo({
      name: "",
      email: "",
      schooling: "Médio",
      resume: "",
    });
    setTerms(false);
    setError(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      alert(
        `Nome: ${formInfo.name}\nemail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`
      );
      resetForm();
    } else {
      setError(true);
    }
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome
        <input
          required
          value={formInfo.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        E-mail
        <input
          required
          value={formInfo.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Escolaridade
        <select
          value={formInfo.schooling}
          name="schooling"
          onChange={handleChange}
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências
        <textarea
          value={formInfo.resume}
          name="resume"
          onChange={handleChange}
        />
      </label>
      <label>
        Aceito os termos e condições
        <input
          type="checkbox"
          checked={terms}
          onChange={() => setTerms((prevTerms) => !prevTerms)}
        />
      </label>
      {error && (
        <h4>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo
        </h4>
      )}
      <button>Enviar</button>
    </form>
  );
}
