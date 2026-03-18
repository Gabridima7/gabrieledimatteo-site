export async function invokeBackendFunction<T = unknown>(name: string, body: T) {
  const { supabase } = await import('@/integrations/supabase/client');
  return supabase.functions.invoke(name, { body });
}
