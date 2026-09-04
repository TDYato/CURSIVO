import { MemberMaterial, DownloadFileItem } from '../types';
import { getOriginalPdf } from './pdfStorage';

/**
 * Trigger browser file download from Blob or URL
 */
const triggerBlobDownload = (blob: Blob, fileName: string): boolean => {
  try {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    return true;
  } catch (err) {
    console.error('Error triggering blob download:', err);
    return false;
  }
};

/**
 * Downloads the exact PDF file for the given material or file item
 */
export const downloadSpecificFile = async (file: DownloadFileItem): Promise<boolean> => {
  // Candidate paths to find the real PDF
  const candidates: string[] = [];
  if (file.filePath) {
    candidates.push(file.filePath);
  }
  candidates.push(
    `/entregaveis/${file.name}`,
    `/entregaveis/${encodeURIComponent(file.name)}`,
    `/entregaveis/${file.id}.pdf`,
    `/${file.name}`,
    `/${encodeURIComponent(file.name)}`
  );

  for (const path of candidates) {
    try {
      const resp = await fetch(path);
      if (resp.ok && resp.status === 200) {
        const contentType = resp.headers.get('content-type') || '';
        // Confirm it is not an HTML 404 page
        if (contentType.includes('application/pdf') || contentType.includes('octet-stream')) {
          const blob = await resp.blob();
          return triggerBlobDownload(blob, file.name);
        }
        // If content-type wasn't explicit, check blob size
        const blob = await resp.blob();
        if (blob.size > 1000) {
          return triggerBlobDownload(blob, file.name);
        }
      }
    } catch {
      // Continue to next candidate
    }
  }

  // Check if stored in IndexedDB (if user uploaded in browser)
  try {
    const stored = await getOriginalPdf(file.id || file.name);
    if (stored && stored.blob) {
      return triggerBlobDownload(stored.blob, stored.originalName || file.name);
    }
  } catch (err) {
    console.warn('Could not retrieve from local store:', err);
  }

  // Fallback: direct anchor click
  const fallbackUrl = file.filePath || `/entregaveis/${file.name}`;
  const link = document.createElement('a');
  link.href = fallbackUrl;
  link.download = file.name;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
};

/**
 * Downloads a material PDF
 */
export const downloadMaterialPDF = async (material: MemberMaterial): Promise<boolean> => {
  const matchingFile: DownloadFileItem = {
    id: material.id,
    name: material.downloadFileName || `${material.title}.pdf`,
    size: material.fileSize || '2.5 MB',
    mimeType: 'application/pdf',
    filePath: material.filePath || `/entregaveis/${material.downloadFileName}`,
  };

  return downloadSpecificFile(matchingFile);
};
