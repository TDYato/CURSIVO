import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { DownloadFileItem } from '../types';
import { downloadSpecificFile } from '../utils/pdfDownload';

interface DownloadFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  files: DownloadFileItem[];
  onDownloadSuccess?: (fileName: string) => void;
}

export const DownloadFilesModal: React.FC<DownloadFilesModalProps> = ({
  isOpen,
  onClose,
  title,
  files,
  onDownloadSuccess
}) => {
  const [downloadingFileId, setDownloadingFileId] = useState<string | null>(null);
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileClick = async (file: DownloadFileItem) => {
    if (downloadingFileId || isDownloadingAll) return;
    setDownloadingFileId(file.id);
    try {
      await downloadSpecificFile(file);
      if (onDownloadSuccess) {
        onDownloadSuccess(file.name);
      }
    } catch (err) {
      console.error('Erro ao baixar arquivo:', err);
    } finally {
      setDownloadingFileId(null);
    }
  };

  const handleDownloadAll = async () => {
    if (isDownloadingAll || downloadingFileId) return;
    setIsDownloadingAll(true);
    try {
      for (const file of files) {
        await downloadSpecificFile(file);
        await new Promise(r => setTimeout(r, 450));
      }
      if (onDownloadSuccess) {
        onDownloadSuccess(`Todos os ${files.length} arquivos foram baixados!`);
      }
    } catch (err) {
      console.error('Erro ao baixar todos os arquivos:', err);
    } finally {
      setIsDownloadingAll(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#14171d] border border-white/10 rounded-2xl sm:rounded-3xl w-full max-w-5xl p-5 sm:p-8 md:p-10 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
          aria-label="Fechar popup"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Título */}
        <h3 className="text-center font-bold text-white text-base sm:text-lg mb-2 tracking-wide">
          {title}
        </h3>
        
        <p className="text-center text-xs text-slate-400 mb-6 sm:mb-8">
          Clique no arquivo para baixar o material original completo em PDF pronto para impressão.
        </p>

        {/* Grid de Arquivos (3 colunas no desktop, 2 no tablet, 1 no mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {files.map((file) => {
            const isDownloading = downloadingFileId === file.id;

            return (
              <div
                key={file.id}
                onClick={() => handleFileClick(file)}
                className="group relative border border-white/20 hover:border-white/60 rounded-2xl overflow-hidden bg-[#1c2128] hover:bg-[#232933] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between select-none"
              >
                {/* Seção Superior: Ícone da Caixa de Arquivo + texto "pdf" */}
                <div className="h-28 sm:h-32 flex items-center justify-center gap-3.5 bg-[#171b21] group-hover:bg-[#1d222a] transition-colors border-b border-white/10">
                  <svg 
                    className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="5" x="2" y="3" rx="1.5" />
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                    <path d="M10 12h4" />
                  </svg>

                  <span className="text-3xl font-medium tracking-tight text-slate-300 group-hover:text-white transition-colors lowercase">
                    pdf
                  </span>
                </div>

                {/* Seção Inferior: Metadados do Arquivo */}
                <div className="bg-[#111419] p-3 sm:p-3.5 text-left flex flex-col justify-between">
                  <p 
                    className="text-xs sm:text-sm font-medium text-slate-100 group-hover:text-sky-300 transition-colors truncate"
                    title={file.name}
                  >
                    {file.name}
                  </p>
                  
                  <div className="mt-1 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-slate-400 font-normal">
                        {file.size}
                      </p>
                      {file.pagesCount && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium">
                          {file.pagesCount} páginas
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-slate-500 font-normal">
                        {file.mimeType}
                      </p>

                      {isDownloading && (
                        <span className="flex items-center gap-1 text-[10px] text-sky-400 font-semibold animate-pulse">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          <span>Baixando...</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé de Ações */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            💡 Clique em qualquer card para fazer download imediato.
          </p>
          <button
            onClick={handleDownloadAll}
            disabled={isDownloadingAll}
            className="w-full sm:w-auto bg-[#12B856] hover:bg-[#0e9645] disabled:bg-slate-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider shrink-0"
          >
            {isDownloadingAll ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Baixando Todos os Arquivos...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Baixar Todos ({files.length} Arquivos)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
