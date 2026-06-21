# Vacinação Infantil 💉👶

Aplicação desenvolvida como solução para o desafio técnico da Cyrrus, com o objetivo de auxiliar pais e responsáveis no acompanhamento da vacinação infantil de forma digital, intuitiva e organizada.

## 📋 Sobre o Projeto

O VacinaKids foi criado para centralizar informações relacionadas à jornada vacinal das crianças, permitindo o acompanhamento do histórico de vacinação, identificação de vacinas pendentes ou atrasadas e visualização de campanhas de vacinação ativas.

A proposta busca reduzir a dependência da carteira física de vacinação e facilitar o controle da situação vacinal de cada criança da família.

---

## ✨ Funcionalidades

### 👶 Gestão de Crianças

- Visualização de múltiplas crianças cadastradas.
- Identificação individual de cada criança.
- Exibição de idade e data de nascimento.
- Avatares gerados automaticamente para melhor identificação visual.

### 💉 Histórico Vacinal

- Consulta do histórico de vacinas por criança.
- Visualização da data prevista para aplicação.
- Visualização da data de aplicação realizada.
- Indicadores de status para cada vacina.

### 📊 Situação Vacinal

- Vacinas aplicadas.
- Vacinas pendentes.
- Vacinas atrasadas.
- Barra de progresso do esquema vacinal.
- Indicadores visuais para rápida identificação da situação da criança.

### 🚨 Controle de Pendências

- Destaque para vacinas em atraso.
- Identificação de pendências vacinais de forma clara e intuitiva.

### 📢 Campanhas de Vacinação

- Exibição de campanhas de vacinação ativas.
- Informações relevantes para o público infantil.

---

## 🎯 Cenários Atendidos

### Cenário 1

Uma criança possui vacinas previstas para sua faixa etária.

✅ O responsável consegue identificar facilmente quais vacinas já foram aplicadas e quais ainda estão pendentes.

### Cenário 2

Uma vacina possui data prevista já ultrapassada e ainda não foi aplicada.

✅ O sistema destaca vacinas atrasadas através de indicadores visuais.

### Cenário 3

Existe uma campanha de vacinação ativa.

✅ O usuário consegue visualizar campanhas disponíveis diretamente na aplicação.

### Cenário 4

Uma família possui mais de um filho.

✅ O responsável consegue acompanhar individualmente cada criança e seu histórico vacinal.

---

## 🛠️ Tecnologias Utilizadas

- Angular
- Ionic Framework
- TypeScript
- SCSS
- HTML5

---

## 🎨 Design

A interface foi desenvolvida utilizando a paleta de cores fornecida no desafio:

| Cor | Código |
|------|----------|
| Verde Principal | `#ABC270` |
| Amarelo | `#FEC868` |
| Laranja | `#FDA769` |
| Marrom Escuro | `#473C33` |

O projeto foi construído com foco em:

- Experiência do usuário (UX)
- Clareza visual
- Responsividade
- Navegação intuitiva
- Indicadores visuais

---

## 📱 Responsividade

A aplicação foi desenvolvida para funcionar adequadamente em:

- Smartphones
- Tablets
- Desktops

---

## 🚀 Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
ionic serve
```

### Gerar build de produção

```bash
ionic build
```

---

## 📂 Estrutura do Projeto

```text
src/
│
├── app/
│   ├── pages/
│   │   ├── home/
│   │   ├── children/
│   │   ├── child-detail/
│   │   └── campaigns/
│   │
│   ├── services/
│   ├── models/
│   └── data/
│
├── assets/
└── theme/
```

---

## 💡 Decisões de Desenvolvimento

Para este desafio foi adotada uma arquitetura simples baseada em:

- Componentização com Angular Standalone Components.
- Separação de responsabilidades utilizando Services.
- Organização dos dados através de Models.
- Utilização de dados mockados para simular o funcionamento da aplicação.
- Reutilização de componentes e lógica sempre que possível.

O foco principal foi construir uma solução clara, escalável e fácil de evoluir futuramente para integração com APIs e bancos de dados reais.

---

## 🔮 Possíveis Evoluções

- Integração com Firebase Firestore.
- Autenticação de usuários.
- Cadastro e edição de crianças.
- Cadastro de novas vacinas.
- Notificações de vacinas próximas do vencimento.
- Upload da carteira de vacinação.
- Dashboard com métricas e indicadores.

---

## 👨‍💻 Autor

Desenvolvido por Pietro Strimber.
