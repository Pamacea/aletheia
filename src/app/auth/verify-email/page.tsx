import { VerifyEmailClient } from './VerifyEmailClient';

interface VerifyEmailPageProps {
  searchParams: Promise<{ error?: string; success?: string }>;
}

export default async function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
  const params = await searchParams;
  const error = params.error || '';
  const success = params.success || '';

  return <VerifyEmailClient error={error} success={success} />;
}
