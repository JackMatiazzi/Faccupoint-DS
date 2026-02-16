"use client";

import { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardTitle, CardContent, Input, CodeBlock } from "@/components/ui";
import packageJson from "@/package.json";

type Section = "introducao" | "instalacao" | "tipografia" | "button" | "card" | "input";

const sections: { id: Section; label: string }[] = [
  { id: "introducao", label: "Introdução" },
  { id: "instalacao", label: "Instalação" },
  { id: "tipografia", label: "Tipografia" },
  { id: "button", label: "Button" },
  { id: "card", label: "Card" },
  { id: "input", label: "Input" },
];

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState<Section>("introducao");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col md:flex-row">
      {/* Botão menu mobile */}
      <header className="md:hidden sticky top-0 z-20 flex items-center justify-between bg-white border-b border-neutral-200 px-4 py-3">
        <h1 className="font-bold text-primary-600">Faccupoint DS</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-neutral-100 text-xl font-bold leading-none"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? "×" : "≡"}
        </button>
      </header>

      {/* Overlay no mobile quando menu aberto */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={closeMenu}
          aria-hidden
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-40 w-60 shrink-0 bg-white border-r border-neutral-200 p-5
          flex flex-col
          transform transition-transform duration-200 ease-out
          md:translate-x-0
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col flex-1 min-h-0 pt-12 md:pt-0">
          <div>
            <h2 className="font-bold text-primary-600 text-lg">Faccupoint Design System</h2>
            <nav className="mt-8 space-y-0.5">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    closeMenu();
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                    activeSection === id ? "bg-primary-50 text-primary-700 font-medium" : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
          <p className="text-xs text-neutral-500 mt-auto pt-6">v{packageJson.version}</p>
        </div>
      </aside>

      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-3xl min-w-0">
        {activeSection === "introducao" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Introdução</h2>
            <div className="prose prose-neutral max-w-none">
              <h3 className="text-lg font-semibold text-neutral-800">Sobre o projeto</h3>
              <p className="text-neutral-600 leading-relaxed">
                O Faccupoint Design System é uma biblioteca de componentes React desenvolvida como
                parte do projeto de conclusão de curso (TCC) por Jackson Matiazzi, aluno do curso de
                Tecnólogo em Jogos Digitais da Faculdade Integrada de Taquara (Faccupoint).
                Está em estágios iniciais e poderá ter atualizações no futuro.
              </p>
              <h3 className="text-lg font-semibold text-neutral-800 mt-6">Objetivo</h3>
              <p className="text-neutral-600 leading-relaxed">
                O objetivo é fornecer uma base consistente para construção de interfaces web em
                projetos de jogos digitais e aplicações relacionadas. A biblioteca inclui
                componentes reutilizáveis, tokens de design e padrões visuais definidos.
              </p>
              <h3 className="text-lg font-semibold text-neutral-800 mt-6">Conteúdo</h3>
              <ul className="text-neutral-600 list-disc list-inside space-y-1">
                <li>Componentes: Button, Card, Input</li>
                <li>Tokens de cores (globals.css)</li>
                <li>Integração com Tailwind CSS v4 e Next.js</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === "instalacao" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Instalação</h2>
            <div className="prose prose-neutral max-w-none space-y-6">
              <h3 className="text-lg font-semibold text-neutral-800">Requisitos</h3>
              <p className="text-neutral-600">
                Next.js 13+ (App Router), React 18+, Tailwind CSS v4.
              </p>
              <h3 className="text-lg font-semibold text-neutral-800">Passo 1: Obter os arquivos</h3>
              <p className="text-neutral-600">
                <a href="https://github.com/JackMatiazzi/Faccupoint-DS" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Repositório</a>, clone ou copie manualmente a pasta <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components</code> e
                o arquivo <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">app/globals.css</code> para seu projeto.
              </p>
              <h3 className="text-lg font-semibold text-neutral-800">Passo 2: Configurar o alias</h3>
              <p className="text-neutral-600 mb-2">
                No <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">tsconfig.json</code>, adicione:
              </p>
              <CodeBlock
                code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
              />
              <h3 className="text-lg font-semibold text-neutral-800">Passo 3: Importar os tokens</h3>
              <p className="text-neutral-600">
                No seu arquivo CSS principal (ex: <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">app/globals.css</code>),
                importe o Tailwind e inclua o conteúdo de @theme do globals.css da biblioteca.
              </p>
              <h3 className="text-lg font-semibold text-neutral-800">Passo 4: Usar os componentes</h3>
              <CodeBlock
                code={`import { Button, Card, Input } from "@/components/ui";

<Button variant="primary">Salvar</Button>
<Card variant="elevated">Conteúdo</Card>
<Input label="Nome" placeholder="Digite seu nome" />`}
              />
            </div>
          </section>
        )}

        {activeSection === "tipografia" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Tipografia</h2>
            <p className="text-neutral-600">
              Uma classe por estilo. Use <code className="bg-neutral-200 px-1 rounded">text-h1</code>, <code className="bg-neutral-200 px-1 rounded">text-b1</code>, etc.
            </p>
            <h3 className="text-lg font-semibold text-neutral-800">Uso</h3>
            <div className="space-y-2 mb-4 p-4 bg-white rounded-lg border border-neutral-200">
              <h1 className="text-h1 text-neutral-900">Título principal</h1>
              <p className="text-b1 text-neutral-600">Parágrafo padrão</p>
              <span className="text-c1 text-neutral-500">Legenda</span>
            </div>
            <CodeBlock
              code={`<h1 className="text-h1">Título principal</h1>
<p className="text-b1">Parágrafo padrão</p>
<span className="text-c1">Legenda</span>`}
            />
            <h3 className="text-lg font-semibold text-neutral-800">Referência</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-neutral-200 rounded-lg overflow-hidden min-w-[320px]">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-2 sm:p-3 font-medium">Classe</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Typeface</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Weight</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Size</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Line</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-h1</td><td className="p-2 sm:p-3 text-h1 text-neutral-900">H1. Headline</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">48</td><td className="p-2 sm:p-3">58</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-h2</td><td className="p-2 sm:p-3 text-h2 text-neutral-900">H2. Headline</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">40</td><td className="p-2 sm:p-3">48</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-h3</td><td className="p-2 sm:p-3 text-h3 text-neutral-900">H3. Headline</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">32</td><td className="p-2 sm:p-3">38</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-h4</td><td className="p-2 sm:p-3 text-h4 text-neutral-900">H4. Headline</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">28</td><td className="p-2 sm:p-3">34</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-h5</td><td className="p-2 sm:p-3 text-h5 text-neutral-900">H5. Headline</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">24</td><td className="p-2 sm:p-3">28</td></tr>
                  <tr className="border-t border-neutral-200 bg-neutral-50"><td className="p-2 sm:p-3 font-mono text-xs">text-s1</td><td className="p-2 sm:p-3 text-s1 text-neutral-900">S1. Subtitle</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">18</td><td className="p-2 sm:p-3">28</td></tr>
                  <tr className="border-t border-neutral-200 bg-neutral-50"><td className="p-2 sm:p-3 font-mono text-xs">text-s2</td><td className="p-2 sm:p-3 text-s2 text-neutral-900">S2. Subtitle</td><td className="p-2 sm:p-3">Semi Bold</td><td className="p-2 sm:p-3">16</td><td className="p-2 sm:p-3">24</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-b1</td><td className="p-2 sm:p-3 text-b1 text-neutral-900">B1. Body</td><td className="p-2 sm:p-3">Regular</td><td className="p-2 sm:p-3">16</td><td className="p-2 sm:p-3">24</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-b2</td><td className="p-2 sm:p-3 text-b2 text-neutral-900">B2. Body</td><td className="p-2 sm:p-3">Medium</td><td className="p-2 sm:p-3">16</td><td className="p-2 sm:p-3">24</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-b3</td><td className="p-2 sm:p-3 text-b3 text-neutral-900">B3. Body</td><td className="p-2 sm:p-3">Regular</td><td className="p-2 sm:p-3">14</td><td className="p-2 sm:p-3">20</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-b4</td><td className="p-2 sm:p-3 text-b4 text-neutral-900">B4. Body</td><td className="p-2 sm:p-3">Medium</td><td className="p-2 sm:p-3">14</td><td className="p-2 sm:p-3">20</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-c1</td><td className="p-2 sm:p-3 text-c1 text-neutral-900">C1. Caption</td><td className="p-2 sm:p-3">Regular</td><td className="p-2 sm:p-3">12</td><td className="p-2 sm:p-3">16</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-c2</td><td className="p-2 sm:p-3 text-c2 text-neutral-900">C2. Caption</td><td className="p-2 sm:p-3">Medium</td><td className="p-2 sm:p-3">12</td><td className="p-2 sm:p-3">16</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-c3</td><td className="p-2 sm:p-3 text-c3 text-neutral-900">C3. Caption</td><td className="p-2 sm:p-3">Medium</td><td className="p-2 sm:p-3">10</td><td className="p-2 sm:p-3">14</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">text-label</td><td className="p-2 sm:p-3 text-label text-neutral-900">LABEL</td><td className="p-2 sm:p-3">Medium</td><td className="p-2 sm:p-3">12</td><td className="p-2 sm:p-3">16</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeSection === "button" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Button</h2>
            <p className="text-neutral-600">
              Componente de botão com três variantes e três tamanhos. Aceita todas as props nativas de HTML button.
            </p>
            <h3 className="text-lg font-semibold text-neutral-800">Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-neutral-200 rounded-lg overflow-hidden min-w-[320px]">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-2 sm:p-3 font-medium">Prop</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Tipo</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Padrão</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Descrição</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">variant</td><td className="p-2 sm:p-3">primary | secondary | outline</td><td className="p-2 sm:p-3">primary</td><td className="p-2 sm:p-3">Estilo visual do botão</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">size</td><td className="p-2 sm:p-3">sm | md | lg</td><td className="p-2 sm:p-3">md</td><td className="p-2 sm:p-3">Tamanho do botão</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">fullWidth</td><td className="p-3">boolean</td><td className="p-2 sm:p-3">false</td><td className="p-2 sm:p-3">Ocupa 100% da largura</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800">Exemplos</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button size="sm">Pequeno</Button>
              <Button size="md">Médio</Button>
              <Button size="lg">Grande</Button>
            </div>
            <CodeBlock
              code={`<Button variant="primary">Salvar</Button>
<Button variant="secondary" size="sm">Cancelar</Button>
<Button variant="outline" fullWidth>Continuar</Button>`}
            />
          </section>
        )}

        {activeSection === "card" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Card</h2>
            <p className="text-neutral-600">
              Container para agrupar conteúdo. Inclui subcomponentes CardHeader, CardTitle e CardContent
              para estruturação interna.
            </p>
            <h3 className="text-lg font-semibold text-neutral-800">Props do Card</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-neutral-200 rounded-lg overflow-hidden min-w-[320px]">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-2 sm:p-3 font-medium">Prop</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Tipo</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Padrão</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Descrição</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">variant</td><td className="p-2 sm:p-3">elevated | outlined | filled</td><td className="p-2 sm:p-3">elevated</td><td className="p-2 sm:p-3">Estilo do card</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">padding</td><td className="p-2 sm:p-3">none | sm | md | lg</td><td className="p-2 sm:p-3">md</td><td className="p-2 sm:p-3">Espaçamento interno</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800">Exemplos</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Card variant="elevated" padding="md">
                <CardHeader><CardTitle>Card Elevated</CardTitle></CardHeader>
                <CardContent>Com sombra e borda. Padrão.</CardContent>
              </Card>
              <Card variant="outlined" padding="md">
                <CardHeader><CardTitle>Card Outlined</CardTitle></CardHeader>
                <CardContent>Borda destacada, sem sombra.</CardContent>
              </Card>
            </div>
            <CodeBlock
              code={`<Card variant="elevated">
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card.
  </CardContent>
</Card>`}
            />
          </section>
        )}

        {activeSection === "input" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Input</h2>
            <p className="text-neutral-600">
              Campo de entrada com label, mensagem de hint e tratamento de erro. Usa forwardRef
              para compatibilidade com react-hook-form e outras libs.
            </p>
            <h3 className="text-lg font-semibold text-neutral-800">Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-neutral-200 rounded-lg overflow-hidden min-w-[320px]">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-2 sm:p-3 font-medium">Prop</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Tipo</th>
                    <th className="text-left p-2 sm:p-3 font-medium">Descrição</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">label</td><td className="p-2 sm:p-3">string</td><td className="p-2 sm:p-3">Texto exibido acima do campo</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">hint</td><td className="p-2 sm:p-3">string</td><td className="p-2 sm:p-3">Texto de ajuda abaixo do campo</td></tr>
                  <tr className="border-t border-neutral-200"><td className="p-2 sm:p-3 font-mono text-xs">error</td><td className="p-2 sm:p-3">string</td><td className="p-2 sm:p-3">Mensagem de erro (altera estilo da borda)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-neutral-600 text-sm">
              Além disso, aceita todas as props nativas de input HTML (placeholder, disabled, type, etc).
            </p>
            <h3 className="text-lg font-semibold text-neutral-800">Exemplos</h3>
            <div className="space-y-4 max-w-md mb-6">
              <Input label="Nome completo" placeholder="Digite seu nome" />
              <Input label="Email" placeholder="seu@email.com" hint="Não compartilhamos seu email" />
              <Input label="Senha" type="password" error="Mínimo 8 caracteres" />
            </div>
            <CodeBlock
              code={`<Input label="Nome" placeholder="Digite seu nome" />
<Input label="Email" hint="Opcional" />
<Input label="Erro" error="Campo obrigatório" />`}
            />
          </section>
        )}
      </main>
    </div>
  );
}
