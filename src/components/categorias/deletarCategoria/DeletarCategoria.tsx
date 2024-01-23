// DeletarCategoria.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deletar, buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: '' });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      navigate('/categorias');
    } else {
      buscarPorId(id);
    }
  }, [id, navigate]);

  const buscarPorId = async (categoriaId: string) => {
    try {
      const categoriaEncontrada = await buscar(`/categorias/${categoriaId}`, setCategoria);
    } catch (error) {
      console.error('Erro ao buscar categoria por ID:', error);
    }
  };

  const deletarCategoria = async () => {
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
      navigate('/categorias');
    } catch (error: any) {
      console.error('Erro ao apagar a categoria:', error);
      if (error.response && error.response.status === 400) {
        alert('Erro ao apagar a categoria. Categoria não encontrada ou outro problema relacionado.');
      } else {
        alert('Erro ao apagar a categoria. Por favor, tente novamente.');
      }
    }
  };

  const retornar = () => {
    navigate('/categorias');
  };

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">Categoria</header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.tipo}</p>
        <div className="flex">
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}>
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
