# Faccupoint Design System

Biblioteca de componentes React para interfaces web. Projeto de conclusão de curso (TCC) de Jackson Matiazzi — Tecnólogo em Jogos Digitais, Faculdade Integrada de Taquara (Faccupoint).

## Tecnologias

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript

## Rodar o projeto

```bash
npm install
npm run dev
```


## Conteúdo

- **Componentes:** Button, Card, Input
- **Tipografia:** classes text-h1, text-b1, text-c1, etc.
- **Tokens:** cores e espaçamento em `app/globals.css`

## Usar em outro projeto

1. Copie a pasta `components` e o arquivo `app/globals.css`
2. Configure o alias `@/*` no tsconfig.json
3. Importe: `import { Button, Card, Input } from "@/components/ui"`

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
