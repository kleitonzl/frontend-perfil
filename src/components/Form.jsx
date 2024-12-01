import React, { useState } from "react";
import axios from "axios";
import { Form, Input, TextArea, Button } from "../styles/CardStyles";

const InfoForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    curso: "",
    status: "",
    dataInicio: "",
    dataConclusao: "",
    comentarios: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/create", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      alert("Erro ao tentar salvar os dados.");
    }
  };

  return (
    <Form>
      <label>Nome colaborador:</label>
      <Input name="nome" value={formData.nome} onChange={handleChange} />

      <label>Curso:</label>
      <Input name="curso" value={formData.curso} onChange={handleChange} />

      <label>Status:</label>
      <Input name="status" value={formData.status} onChange={handleChange} />

      <label>Data de Início:</label>
      <Input type="date" name="dataInicio" value={formData.dataInicio} onChange={handleChange} />

      <label>Data de Conclusão prevista:</label>
      <Input type="date" name="dataConclusao" value={formData.dataConclusao} onChange={handleChange} />

      <label>Comentários:</label>
      <TextArea name="comentarios" value={formData.comentarios} onChange={handleChange} />

      <Button onClick={handleSave}>Salvar</Button>
    </Form>
  );
};

export default InfoForm;
