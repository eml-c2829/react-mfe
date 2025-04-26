import { ComponentType } from 'react';

export function safeRemoteImport<T extends ComponentType<any>>(
  fn: () => Promise<{ default: T }>
): Promise<{ default: T }> {
  return fn().catch((error) => {
    console.error('Remote module failed to load:', error);

    // Return fallback component of type ComponentType<any> and cast it to T
    return {
      default: (() => <div>Failed to load the remote component. Please try again later.</div>) as ComponentType<any> as T,
    };
  });
}
