"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import apiRoutes from "@/utils/apiRoutes"; // Importa as rotas
import { PlusCircle, Trash, CheckCircle, Play } from "@phosphor-icons/react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [questions, setQuestions] = useState([
    { pergunta: "", opcoes: [{ texto: "", correta: false }] },
  ]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch(apiRoutes.auth.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Falha no login");

      const data = await response.json();
      setToken(data.access_token);
      localStorage.setItem("authToken", data.access_token);
      setIsAuthenticated(true);
      router.push("/admin"); // Redireciona para a página do admin após o login
    } catch (error) {
      alert("Falha no login: " + error.message);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const addQuestion = () => {
    setQuestions([...questions, { pergunta: "", opcoes: [{ texto: "", correta: false }] }]);
  };

  const addOption = (questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].opcoes.push({ texto: "", correta: false });
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].pergunta = value;
    setQuestions(updatedQuestions);
  };

  const updateOption = (
    questionIndex: number,
    optionIndex: number,
    field: "texto" | "correta",
    value: string | boolean
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].opcoes[optionIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].opcoes.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async () => {
    // Validação básica antes de enviar
    if (!title || !videoUrl || !category || !description || questions.length === 0) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    const formattedData = {
      slug: title.trim().toLowerCase().replace(/ /g, "-"),
      title,
      youtube_video_id: videoUrl,
      description,
      category,
      duration: 600, // Duração fixa como exemplo
      questions: questions.map((q) => ({
        question: q.pergunta,
        options: q.opcoes.map((opcao) => ({
          text: opcao.texto,
          is_correct: opcao.correta,
        })),
      })),
    };
  
    // Simula estados de carregamento e erros
    let loading = false;
    let error = "";
  
    try {
      loading = true; // Ativando o estado de carregamento
  
      const response = await fetch(apiRoutes.stories.create, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Certifique-se de que o token está correto
        },
        body: JSON.stringify(formattedData),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Erro ao enviar os dados.");
      }
  
      alert("História enviada com sucesso!");
    } catch (err) {
      error = err.message || "Erro ao enviar os dados.";
      alert(`Erro: ${error}`);
    } finally {
      loading = false; // Desativando o estado de carregamento
    }
  };
  

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login de Admin
          </h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Adicionar Nova História
      </h1>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="title">
            Título
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite um título"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="category">
            Categoria
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Selecione uma categoria</option>
            <option value="EDUCATIONAL">Educacional</option>
            <option value="ANIMATED">Animado</option>
            <option value="MUSIC">Música</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="description">
            Descrição
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite uma descrição"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="video-url">
            URL do Vídeo
          </label>
          <input
            id="video-url"
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Digite a URL do vídeo"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex items-center mb-6">
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            <Play className="w-5 h-5 mr-2" /> Reproduzir Vídeo
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
          Perguntas
          <PlusCircle
            onClick={addQuestion}
            className="ml-3 w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700"
          />
        </h2>

        {questions.map((question, questionIndex) => (
          <div
            key={questionIndex}
            className="bg-gray-50 border border-gray-200 shadow rounded-lg p-6 mb-6"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Pergunta {questionIndex + 1}
              </label>
              <input
                type="text"
                value={question.pergunta}
                onChange={(e) => updateQuestion(questionIndex, e.target.value)}
                placeholder="Digite uma pergunta"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-4">Opções</h3>
            {question.opcoes.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center gap-3 mb-3">
                <input
                  type="text"
                  value={option.texto}
                  onChange={(e) =>
                    updateOption(questionIndex, optionIndex, "texto", e.target.value)
                  }
                  placeholder="Digite uma opção"
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                  type="button"
                  onClick={() =>
                    updateOption(
                      questionIndex,
                      optionIndex,
                      "correta",
                      !option.correta
                    )
                  }
                  className={`p-2 rounded-md border ${
                    option.correta
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-gray-100 border-gray-300 text-gray-500"
                  } hover:bg-green-200`}
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => removeOption(questionIndex, optionIndex)}
                  className="p-2 bg-red-100 text-red-500 border border-red-300 rounded-md hover:bg-red-200"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addOption(questionIndex)}
              className="text-blue-500 hover:text-blue-700 flex items-center gap-1 mt-2"
            >
              <PlusCircle className="w-5 h-5" /> Adicionar Opção
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
      >
        Enviar
      </button>
    </div>
  );
}
