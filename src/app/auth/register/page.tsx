import { RegisterForm } from './RegisterForm';

interface RegisterPageProps {
  searchParams: Promise<{ email?: string }>;
}

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;
  const email = params.email || '';

  return <RegisterForm email={email} />;
}
