# Minha agenda: como colocar no ar

São 3 partes: Supabase (onde as tarefas e livros ficam guardados), GitHub (onde os arquivos ficam) e Vercel (que gera o link do app). Leva uns 15 minutos.

## 1. Supabase

1. Crie um projeto novo em supabase.com (o plano gratuito basta).
2. Abra o **SQL Editor**, cole todo o conteúdo do arquivo `supabase.sql` e clique em **Run**.
3. Vá em **Authentication > Users > Add user > Create new user**. Coloque seu e-mail e uma senha e marque a opção de confirmar o usuário automaticamente. É com esse e-mail e senha que você vai entrar no app.
4. Ainda em Authentication, nas configurações de login, desligue a opção que permite novos cadastros (*Allow new users to sign up*). Assim só você tem acesso.
5. Clique no botão **Connect** (ou vá em **Project Settings > API**) e copie a **Project URL** e a chave **anon public**.

## 2. Arquivo config.js

Abra o `config.js` e cole os dois valores no lugar de `COLE_AQUI...`, mantendo as aspas. A chave anon pode ficar no arquivo: ela só funciona para quem faz login, e cada pessoa só enxerga os próprios dados.

## 3. GitHub

1. Crie um repositório novo (pode ser privado), por exemplo `minha-agenda`.
2. Clique em **uploading an existing file** e arraste **todos os arquivos desta pasta**, incluindo a pasta `icons`.
3. Clique em **Commit changes**.

## 4. Vercel

1. Em vercel.com, clique em **Add New > Project** e importe o repositório `minha-agenda`.
2. Em Framework Preset, deixe **Other**. Não precisa mudar mais nada.
3. Clique em **Deploy**. Pronto, o Vercel mostra o link (algo como `minha-agenda.vercel.app`).

## 5. No iPhone

1. Abra o link no **Safari** e entre com seu e-mail e senha.
2. Toque em compartilhar e escolha **Adicionar à Tela de Início**.
3. O app aparece com a foto das tulipas e abre em tela cheia, sem barra do navegador.
4. Pode apagar o atalho antigo que você criou no app Atalhos.

## Para mudar algo depois

Edite ou substitua o arquivo no GitHub. O Vercel atualiza o link sozinho em alguns segundos. No iPhone, feche e abra o app para ver a versão nova.
