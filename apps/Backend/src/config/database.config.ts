import { registerAs } from '@nestjs/config';

function maskHost(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.hostname ? `${u.hostname}${u.port ? ':' + u.port : ''}` : '(no-host)';
  } catch {
    return '(invalid-url)';
  }
}

export default registerAs('database', () => {
  const platformSource = process.env.DATABASE_INTERNAL_URL
    ? 'DATABASE_INTERNAL_URL'
    : process.env.PLATFORM_DATABASE_URL
      ? 'PLATFORM_DATABASE_URL'
      : process.env.DATABASE_URL
        ? 'DATABASE_URL'
        : 'none';
  const authSource = process.env.DATABASE_INTERNAL_URL
    ? 'DATABASE_INTERNAL_URL'
    : process.env.AUTH_DATABASE_URL
      ? 'AUTH_DATABASE_URL'
      : process.env.PLATFORM_DATABASE_URL
        ? 'PLATFORM_DATABASE_URL'
        : process.env.DATABASE_URL
          ? 'DATABASE_URL'
          : 'none';
  const platform = {
    url: process.env.DATABASE_INTERNAL_URL || process.env.PLATFORM_DATABASE_URL || process.env.DATABASE_URL || '',
    schema: process.env.DB_SCHEMA || 'public',
    ssl: process.env.DB_SSL !== 'false',
  };
  const auth = {
    url: process.env.DATABASE_INTERNAL_URL || process.env.AUTH_DATABASE_URL || process.env.PLATFORM_DATABASE_URL || process.env.DATABASE_URL || '',
    schema: process.env.AUTH_DB_SCHEMA || process.env.DB_SCHEMA || 'public',
    ssl: process.env.AUTH_DB_SSL !== 'false' && process.env.DB_SSL !== 'false',
  };
  console.log('[DATABASE_CONFIG_DIAG]', JSON.stringify({
    platform: { urlSource: platformSource, host: maskHost(platform.url), ssl: platform.ssl, schema: platform.schema },
    auth: { urlSource: authSource, host: maskHost(auth.url), ssl: auth.ssl, schema: auth.schema },
  }));
  return { platform, auth };
});