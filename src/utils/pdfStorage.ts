// IndexedDB storage for exact original PDF files uploaded by user

const DB_NAME = 'ebookoteca_pdf_store';
const DB_VERSION = 1;
const STORE_NAME = 'pdf_files';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function normalizeKey(fileNameOrId: string): string {
  return fileNameOrId
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export async function saveOriginalPdf(fileName: string, blob: Blob | File): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const normKey = normalizeKey(fileName);
    const item = {
      key: normKey,
      originalName: fileName,
      blob,
      size: blob.size,
      updatedAt: Date.now(),
    };

    const req = store.put(item);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function getOriginalPdf(fileNameOrId: string): Promise<{ blob: Blob; originalName: string } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);

      const normKey = normalizeKey(fileNameOrId);
      const req = store.get(normKey);

      req.onsuccess = () => {
        if (req.result && req.result.blob) {
          resolve({ blob: req.result.blob, originalName: req.result.originalName || fileNameOrId });
        } else {
          // Try scanning if partial match
          const allReq = store.getAll();
          allReq.onsuccess = () => {
            const list = allReq.result || [];
            const match = list.find(item => 
              normKey.includes(item.key) || item.key.includes(normKey) ||
              normalizeKey(item.originalName).includes(normKey)
            );
            if (match && match.blob) {
              resolve({ blob: match.blob, originalName: match.originalName });
            } else {
              resolve(null);
            }
          };
          allReq.onerror = () => resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function hasOriginalPdf(fileNameOrId: string): Promise<boolean> {
  const file = await getOriginalPdf(fileNameOrId);
  return file !== null;
}

export async function listStoredPdfs(): Promise<Array<{ key: string; originalName: string; size: number }>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();

      req.onsuccess = () => {
        const items = req.result || [];
        resolve(items.map(i => ({ key: i.key, originalName: i.originalName, size: i.size })));
      };
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

export async function removeOriginalPdf(fileNameOrId: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const normKey = normalizeKey(fileNameOrId);
      const req = store.delete(normKey);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // Ignore error
  }
}
