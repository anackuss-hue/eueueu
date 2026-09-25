-- Minha agenda: cole tudo no SQL Editor do Supabase e clique em Run.

create table if not exists public.registros (
  id            text        not null,
  user_id       uuid        not null default auth.uid() references auth.users(id) on delete cascade,
  tipo          text        not null check (tipo in ('tarefa', 'livro', 'config')),
  dados         jsonb       not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now(),
  primary key (user_id, id)
);

alter table public.registros enable row level security;

create policy "ver os proprios registros"    on public.registros for select using (auth.uid() = user_id);
create policy "criar os proprios registros"  on public.registros for insert with check (auth.uid() = user_id);
create policy "editar os proprios registros" on public.registros for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "apagar os proprios registros" on public.registros for delete using (auth.uid() = user_id);

-- Atualização em tempo real entre celular e computador
alter publication supabase_realtime add table public.registros;
