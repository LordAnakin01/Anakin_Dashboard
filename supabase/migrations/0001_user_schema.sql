-- Create profiles table to store additional user information
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade primary key,
    full_name text,
    avatar_url text,
    membership_tier text default 'basic',
    member_since timestamp with time zone default now(),
    date_of_birth text,
    gender text,
    nationality text,
    phone_number text,
    residential_address text,
    employment_status text,
    employer_name text,
    industry text,
    job_title text,
    work_address text,
    start_date text,
    end_date text,
    monthly_salary text,
    reason_for_leaving text,
    education_level text,
    institution text,
    field_of_study text,
    certifications text[],
    skills text[],
    emergency_contact_name text,
    emergency_contact_relation text,
    emergency_contact_phone text,
    wallet_name text,
    bank_account_details text,
    referral_code text,
    communication_preference text,
    updated_at timestamp with time zone default now()
);

-- Create career_activity table
create table if not exists public.career_activity (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references public.profiles(id) on delete cascade,
    applications_count int default 0,
    interviews_count int default 0,
    job_matches_count int default 0,
    updated_at timestamp with time zone default now()
);

-- Create community_activity table
create table if not exists public.community_activity (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references public.profiles(id) on delete cascade,
    upcoming_events_count int default 0,
    unread_messages_count int default 0,
    network_size int default 0,
    updated_at timestamp with time zone default now()
);

-- Create referral_program table
create table if not exists public.referral_program (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references public.profiles(id) on delete cascade,
    referral_code text unique,
    active_referrals int default 0,
    total_earnings decimal(10,2) default 0,
    updated_at timestamp with time zone default now()
);

-- Create financial_overview table
create table if not exists public.financial_overview (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references public.profiles(id) on delete cascade,
    wallet_balance decimal(10,2) default 0,
    investments_count int default 0,
    recent_transactions_count int default 0,
    updated_at timestamp with time zone default now()
);

-- Create security_status table
create table if not exists public.security_status (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references public.profiles(id) on delete cascade,
    two_fa_enabled boolean default false,
    last_login timestamp with time zone,
    security_score int default 0,
    updated_at timestamp with time zone default now()
);

-- Create support_status table
create table if not exists public.support_status (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references public.profiles(id) on delete cascade,
    active_tickets int default 0,
    avg_response_time interval default '2 hours',
    updated_at timestamp with time zone default now()
);

-- Create RLS policies
alter table public.profiles enable row level security;
alter table public.career_activity enable row level security;
alter table public.community_activity enable row level security;
alter table public.referral_program enable row level security;
alter table public.financial_overview enable row level security;
alter table public.security_status enable row level security;
alter table public.support_status enable row level security;

-- Create policies
create policy "Users can view own profile"
    on public.profiles for select
    using (auth.uid() = id);

create policy "Users can update own profile"
    on public.profiles for update
    using (auth.uid() = id);

-- Repeat similar policies for other tables
create policy "Users can view own career activity"
    on public.career_activity for select
    using (auth.uid() = user_id);

create policy "Users can view own community activity"
    on public.community_activity for select
    using (auth.uid() = user_id);

create policy "Users can view own referral program"
    on public.referral_program for select
    using (auth.uid() = user_id);

create policy "Users can view own financial overview"
    on public.financial_overview for select
    using (auth.uid() = user_id);

create policy "Users can view own security status"
    on public.security_status for select
    using (auth.uid() = user_id);

create policy "Users can view own support status"
    on public.support_status for select
    using (auth.uid() = user_id);

-- Create function to handle new user creation
create or replace function public.handle_new_user_creation()
returns trigger as $$
begin
    insert into public.profiles (id, full_name, avatar_url)
    values (new.id, new.raw_user_meta_data->>'full_name', '/images/default-avatar.png');

    -- Initialize other tables
    insert into public.career_activity (user_id) values (new.id);
    insert into public.community_activity (user_id) values (new.id);
    insert into public.referral_program (user_id, referral_code) 
    values (new.id, 'REF' || substring(new.id::text, 1, 6));
    insert into public.financial_overview (user_id) values (new.id);
    insert into public.security_status (user_id) values (new.id);
    insert into public.support_status (user_id) values (new.id);

    return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user creation
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user_creation(); 