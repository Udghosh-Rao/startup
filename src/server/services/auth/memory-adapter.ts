/* eslint-disable @typescript-eslint/no-explicit-any -- dev-only in-memory auth adapter */
import type { BetterAuthOptions } from 'better-auth';

const store: Record<string, Record<string, any>> = {};

export const memoryAdapter = (): BetterAuthOptions['database'] => {
  return {
    id: 'memory',
    create: async ({ model, data }: any) => {
      if (!store[model]) store[model] = {};
      const id = data.id || Math.random().toString(36).slice(2);
      const item = { ...data, id };
      store[model][id] = item;
      return item;
    },
    findOne: async ({ model, where }: any) => {
      if (!store[model]) return null;
      for (const item of Object.values(store[model])) {
        let match = true;
        for (const { field, value } of where) {
          if (item[field] !== value) {
            match = false;
            break;
          }
        }
        if (match) return item;
      }
      return null;
    },
    findMany: async ({ model, where }: any) => {
      if (!store[model]) return [];
      if (!where || where.length === 0) return Object.values(store[model]);
      const results = [];
      for (const item of Object.values(store[model])) {
        let match = true;
        for (const { field, value } of where) {
          if (item[field] !== value) {
            match = false;
            break;
          }
        }
        if (match) results.push(item);
      }
      return results;
    },
    update: async ({ model, where, update }: any) => {
      if (!store[model]) return null;
      for (const item of Object.values(store[model])) {
        let match = true;
        for (const { field, value } of where) {
          if (item[field] !== value) {
            match = false;
            break;
          }
        }
        if (match) {
          Object.assign(item, update);
          return item;
        }
      }
      return null;
    },
    delete: async ({ model, where }: any) => {
      if (!store[model]) return;
      for (const item of Object.values(store[model])) {
        let match = true;
        for (const { field, value } of where) {
          if (item[field] !== value) {
            match = false;
            break;
          }
        }
        if (match) {
          delete store[model][item.id];
        }
      }
    },
  } as any;
};
