import { vi } from "vitest";

export const mockFetch = ({ data, ok = true, reject, rejectJson }) =>
  vi.fn().mockImplementation(() => {
    if (reject) {
      return Promise.reject({
        ok: false,
        json: () => (rejectJson ? Promise.reject(data) : Promise.resolve(data)),
      });
    }

    return Promise.resolve({
      ok,
      json: () => (rejectJson ? Promise.reject(data) : Promise.resolve(data)),
    });
  });
