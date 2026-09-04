import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MEMBER_MATERIALS } from '../data/materials';
import { ATIVIDADES_DOWNLOAD_FILES, PEDAGOGO_DOWNLOAD_FILES } from '../data/downloadFiles';
import { MemberMaterial, AuthSession, DownloadFileItem } from '../types';
import { downloadMaterialPDF } from '../utils/pdfDownload';
import { DownloadFilesModal } from './DownloadFilesModal';
import { 
  CoverColecaoCompleta, 
  CoverAlfabeto03,
  CoverCadernoPratico02,
  CoverCoordenacao,
  CoverSilabario05,
  CoverProducaoFrases04,
  CoverFrases06,
  CoverCadernoPedagogo, 
  CoverCronograma30Dias 
} from './ActivityCardCovers';
import { 
  Download, 
  LogOut, 
  Search, 
  Bell, 
  Check, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
  FolderDown,
  Loader2,
  FileText,
  Printer
} from 'lucide-react';

interface MembersAreaProps {
  onLogout: () => void;
  onNavigateHome: () => void;
}

export const MembersArea: React.FC<MembersAreaProps> = ({ onLogout, onNavigateHome }) => {
  const [session, setSession] = useState<AuthSession | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem('membros_auth');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState<'inicio' | 'aulas' | 'materiais'>('inicio');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  
  // Download files popup state
  const [isFilesModalOpen, setIsFilesModalOpen] = useState(false);
  const [modalFiles, setModalFiles] = useState<DownloadFileItem[]>(ATIVIDADES_DOWNLOAD_FILES);
  const [modalTitle, setModalTitle] = useState('Arquivo(s), clique para fazer download');
  
  // Preview modal
  const [selectedMaterial, setSelectedMaterial] = useState<MemberMaterial | null>(null);

  // Search input ref
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Validate session on mount
  useEffect(() => {
    const stored = localStorage.getItem('membros_auth');
    if (!stored) {
      onLogout();
    }
  }, [onLogout]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleLogoutClick = () => {
    localStorage.removeItem('membros_auth');
    onLogout();
  };

  const openFilesModal = (material?: MemberMaterial) => {
    if (material?.category === 'guia') {
      setModalFiles(PEDAGOGO_DOWNLOAD_FILES);
    } else {
      setModalFiles(ATIVIDADES_DOWNLOAD_FILES);
    }
    setModalTitle('Arquivo(s), clique para fazer download');
    setIsFilesModalOpen(true);
  };

  // Direct download for a specific material div
  const handleDownload = async (material: MemberMaterial, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (downloadingId) return;
    setDownloadingId(material.id);
    try {
      const success = await downloadMaterialPDF(material);
      if (success) {
        setDownloadToast(`Download concluído: ${material.downloadFileName || material.title}`);
        setTimeout(() => setDownloadToast(null), 4500);
      }
    } catch (err) {
      console.error('Erro no download:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  const handleCardClick = (material: MemberMaterial) => {
    handleDownload(material);
  };

  // User initial avatar letter
  const userInitial = useMemo(() => {
    if (!session?.name && !session?.email) return 'V';
    const source = session.name || session.email;
    return source.charAt(0).toUpperCase();
  }, [session]);

  const completePackage = useMemo(() => {
    return MEMBER_MATERIALS.find(m => m.id === 'completo') || MEMBER_MATERIALS[0];
  }, []);

  // Categorized lists - All 6 original PDF files in Atividades Cursiva
  const atividadesCursiva = useMemo(() => {
    return MEMBER_MATERIALS.filter(m => m.category === 'principal');
  }, []);

  const cadernoPedagogo = useMemo(() => {
    return MEMBER_MATERIALS.filter(m => m.category === 'guia');
  }, []);

  // Filtered search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return MEMBER_MATERIALS.filter(m => 
      m.title.toLowerCase().includes(query) ||
      m.description.toLowerCase().includes(query) ||
      (m.downloadFileName && m.downloadFileName.toLowerCase().includes(query)) ||
      m.categoryLabel.toLowerCase().includes(query) ||
      m.gradeLevel.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const scrollShelf = (shelfId: string, direction: 'left' | 'right') => {
    const el = document.getElementById(shelfId);
    if (el) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-slate-100 font-['Montserrat',sans-serif] selection:bg-sky-500 selection:text-white flex flex-col antialiased">
      
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1e2630]/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-500 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-[#12B856] flex items-center justify-center text-white shrink-0 shadow-md">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <div>
            <p className="text-xs font-black text-emerald-400 uppercase tracking-wider">Download Iniciado</p>
            <p className="text-xs text-slate-200 font-bold">{downloadToast}</p>
          </div>
        </div>
      )}

      {/* --- NAVBAR SUPERIOR (ESTILO NETFLIX / EBOOKOTECA) --- */}
      <header className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-10">
            <div 
              onClick={() => { setActiveTab('inicio'); setSearchQuery(''); }}
              className="cursor-pointer flex items-center gap-2 shrink-0 group select-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-wide text-white flex items-center gap-1.5">
                  <span className="text-sky-400">Mundo</span> <span>Cursivo</span>
                </span>
              </div>
            </div>

            {/* Quick Navigation Menu: Início, Materiais */}
            <nav className="hidden sm:flex items-center space-x-6">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'materiais', label: 'Materiais' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as any);
                    setSearchQuery('');
                  }}
                  className={`text-sm font-semibold transition cursor-pointer ${
                    activeTab === item.id && !searchQuery
                      ? 'text-white font-bold drop-shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Search (Lupa), Notifications (Sino), Avatar ("V") */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            
            {/* Search Icon / Expanding Search Bar */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#1e2630] border border-slate-700 rounded-full px-3 py-1.5 w-48 sm:w-64 transition-all">
                  <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar cadernos..."
                    className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-slate-400 hover:text-white ml-1 text-xs"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 text-slate-300 hover:text-white transition cursor-pointer"
                  title="Pesquisar materiais"
                >
                  <Search className="w-5 h-5 stroke-[1.8]" />
                </button>
              )}
            </div>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsUserMenuOpen(false);
                }}
                className="p-1.5 text-slate-300 hover:text-white transition relative cursor-pointer"
                title="Notificações"
              >
                <Bell className="w-5 h-5 stroke-[1.8]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#12B856] rounded-full" />
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-[#1a222d] border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-black text-white uppercase tracking-wider">Notificações</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Atualizado</span>
                  </div>
                  <div className="space-y-3 mt-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex gap-3">
                      <span className="text-lg">📦</span>
                      <div>
                        <p className="text-xs font-bold text-white leading-snug">6 PDFs Originais Prontos!</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Todos os cadernos da pasta entregáveis estão configurados para download direto em cada div.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar Circle with Letter "V" */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsUserMenuOpen(!isUserMenuOpen);
                  setIsNotificationsOpen(false);
                }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#262c36] hover:bg-[#323a47] text-white font-bold text-sm flex items-center justify-center transition cursor-pointer border border-white/10"
              >
                {userInitial}
              </button>

              {/* User Menu Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-[#1a222d] border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-fadeIn">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-[#262c36] text-white font-black text-sm flex items-center justify-center border border-white/10">
                      {userInitial}
                    </div>
                    <div className="overflow-hidden text-left">
                      <p className="text-xs font-bold text-white truncate">
                        {session?.name || 'Membro VIP'}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {session?.email || 'Acesso Vitalício'}
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-black uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                        ⭐ Assinante Vitalício
                      </span>
                    </div>
                  </div>

                  <div className="py-2 space-y-1 text-left">
                    <button
                      onClick={onNavigateHome}
                      className="w-full px-3 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl flex items-center gap-2 transition cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-sky-400" />
                      <span>Ir para Página Principal</span>
                    </button>
                    
                    <button
                      onClick={() => openFilesModal()}
                      className="w-full px-3 py-2 text-xs font-bold text-emerald-400 hover:bg-slate-800 rounded-xl flex items-center gap-2 transition cursor-pointer"
                    >
                      <FolderDown className="w-4 h-4" />
                      <span>Ver Todos os Arquivos (Modal)</span>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <button
                      onClick={handleLogoutClick}
                      className="w-full px-3 py-2 text-xs font-extrabold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl flex items-center justify-between transition cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <LogOut className="w-4 h-4" />
                        <span>Sair da Conta</span>
                      </span>
                      <span className="text-[10px] text-slate-500">Logoff</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL (ESTILO NETFLIX / EBOOKOTECA) --- */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">

        {/* Search Results View */}
        {searchQuery ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-sky-400" />
                  <span>Resultados para "{searchQuery}"</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Encontramos {searchResults.length} {searchResults.length === 1 ? 'material' : 'materiais'}
                </p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-full"
              >
                Limpar Busca
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="bg-[#181f29] border border-white/5 rounded-3xl p-12 text-center">
                <span className="text-4xl block mb-3">🔍</span>
                <h3 className="text-base font-bold text-white mb-1">Nenhum material encontrado</h3>
                <p className="text-xs text-slate-400">Tente pesquisar por palavras como "alfabeto", "junções", "sílabas" ou "frases".</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((material) => (
                  <NetflixCard
                    key={material.id}
                    material={material}
                    onClick={() => handleCardClick(material)}
                    onDownload={(e) => handleDownload(material, e)}
                    isDownloading={downloadingId === material.id}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* --- SEÇÃO: ATIVIDADES CURSIVA (OS 6 PDFS DA PASTA ENTREGÁVEIS) --- */}
            {(activeTab === 'inicio' || activeTab === 'materiais') && (
              <section className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>Atividades Cursiva</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                        6 Cadernos em PDF
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Clique em qualquer card abaixo para baixar o PDF correspondente da pasta entregáveis.
                    </p>
                  </div>

                  {/* Actions Header */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openFilesModal()}
                      className="px-3 py-1.5 rounded-xl bg-[#1e2630] hover:bg-slate-700 text-slate-200 hover:text-white transition cursor-pointer border border-white/10 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <FolderDown className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Baixar Todos</span>
                    </button>

                    <div className="hidden sm:flex items-center gap-1.5">
                      <button
                        onClick={() => scrollShelf('shelf-atividades', 'left')}
                        className="p-2 rounded-full bg-[#1e2630] hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer border border-white/5"
                        aria-label="Rolar esquerda"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => scrollShelf('shelf-atividades', 'right')}
                        className="p-2 rounded-full bg-[#1e2630] hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer border border-white/5"
                        aria-label="Rolar direita"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grid Responsivo com todas as 6 divs de PDF */}
                <div 
                  id="shelf-atividades"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1"
                >
                  {atividadesCursiva.map((material) => (
                    <div key={material.id} className="w-full">
                      <NetflixCard
                        material={material}
                        onClick={() => handleCardClick(material)}
                        onDownload={(e) => handleDownload(material, e)}
                        isDownloading={downloadingId === material.id}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* --- SEÇÃO: CADERNO DO PEDAGOGO & GUIAS --- */}
            {(activeTab === 'inicio' || activeTab === 'materiais') && (
              <section className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Caderno do Pedagogo & Guias Práticos
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Materiais complementares com rotinas de estudo e acompanhamento.
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={() => scrollShelf('shelf-pedagogo', 'left')}
                      className="p-2 rounded-full bg-[#1e2630] hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer border border-white/5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scrollShelf('shelf-pedagogo', 'right')}
                      className="p-2 rounded-full bg-[#1e2630] hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer border border-white/5"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Shelf Grid */}
                <div 
                  id="shelf-pedagogo"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1"
                >
                  {cadernoPedagogo.map((material) => (
                    <div key={material.id} className="w-full">
                      <NetflixCard
                        material={material}
                        onClick={() => handleCardClick(material)}
                        onDownload={(e) => handleDownload(material, e)}
                        isDownloading={downloadingId === material.id}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

      </main>

      {/* --- POPUP DE DOWNLOAD DE ARQUIVOS (MODAL PARA BAIXAR TODOS) --- */}
      <DownloadFilesModal
        isOpen={isFilesModalOpen}
        onClose={() => setIsFilesModalOpen(false)}
        title={modalTitle}
        files={modalFiles}
        onDownloadSuccess={(fileName) => {
          setDownloadToast(`Download concluído: "${fileName}"`);
          setTimeout(() => setDownloadToast(null), 4500);
        }}
      />

      {/* --- FOOTER SIMPLES E ELEGANTE --- */}
      <footer className="border-t border-white/5 bg-[#0d0d0d] py-6 text-center text-xs text-slate-500 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">Mundo Cursivo</span>
            <span>•</span>
            <span className="text-[11px]">Portal do Aluno</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="https://wa.me/5599984283075" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition"
            >
              Suporte Pedagógico (WhatsApp)
            </a>
            <span>•</span>
            <button onClick={handleLogoutClick} className="text-rose-400 hover:underline">Sair</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

// --- COMPONENTE CARD DE MATERIAL (DIV COM DOWNLOAD DIRETO DO PDF) ---
interface NetflixCardProps {
  material: MemberMaterial;
  onClick: () => void;
  onDownload: (e: React.MouseEvent) => void;
  isDownloading: boolean;
}

const NetflixCard: React.FC<NetflixCardProps> = ({ material, onClick, onDownload, isDownloading }) => {
  // Render corresponding high visual cover
  const renderCover = () => {
    switch (material.id) {
      case 'alfabeto-cursivo-03':
      case 'caderno-1':
        return <CoverAlfabeto03 className="w-full h-44" />;
      case 'caderno-pratico-modulo-2':
      case 'caderno-2':
        return <CoverCadernoPratico02 className="w-full h-44" />;
      case 'coordenacao-aplicada-modulo-2-3':
      case 'caderno-6':
        return <CoverCoordenacao className="w-full h-44" />;
      case 'silabario-cursivo-05':
      case 'caderno-3':
        return <CoverSilabario05 className="w-full h-44" />;
      case 'producao-frases-04':
      case 'caderno-4':
        return <CoverProducaoFrases04 className="w-full h-44" />;
      case 'frases-cursiva-06':
      case 'caderno-5':
        return <CoverFrases06 className="w-full h-44" />;
      case 'completo':
        return <CoverColecaoCompleta className="w-full h-44" />;
      case 'guia-1':
      case 'guia-3':
        return <CoverCadernoPedagogo className="w-full h-44" />;
      case 'guia-2':
        return <CoverCronograma30Dias className="w-full h-44" />;
      default:
        return (
          <div className={`relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br ${material.coverImageGradient || 'from-slate-800 to-slate-900'} p-4 flex flex-col justify-between text-white shadow-lg`}>
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-full border border-white/20">
                {material.badge || material.categoryLabel}
              </span>
              <span className="text-[10px] font-bold text-slate-300 bg-black/40 px-2 py-0.5 rounded-full">
                {material.pages ? `${material.pages} Páginas` : material.fileSize}
              </span>
            </div>

            <div className="my-auto text-center z-10">
              <div className="text-3xl mb-1">{material.coverIcon}</div>
              <h4 className="text-sm font-black text-white leading-tight">{material.title}</h4>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold text-slate-300 z-10 border-t border-white/20 pt-1">
              <span>📄 PDF A4</span>
              <span className="text-amber-300">{material.gradeLevel}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-[#181f29] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(18,184,86,0.25)] border border-white/5 hover:border-emerald-500/50 flex flex-col justify-between p-2.5"
    >
      {/* Visual Cover Header */}
      <div>
        {renderCover()}
      </div>

      {/* Details & Direct Download Button */}
      <div className="p-2 pt-2.5 space-y-2 text-left flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition line-clamp-1">
            {material.title}
          </h3>

          {/* Real PDF Filename badge */}
          {material.downloadFileName && (
            <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate flex items-center gap-1" title={material.downloadFileName}>
              <FileText className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{material.downloadFileName}</span>
            </p>
          )}

          <div className="flex items-center justify-between pt-1.5 text-[11px] text-slate-400">
            <span>{material.pages ? `${material.pages} Páginas` : 'PDF'}</span>
            <span className="font-semibold text-slate-300">{material.fileSize}</span>
          </div>
        </div>
        
        {/* Prominent Direct Download Button */}
        <button
          onClick={onDownload}
          disabled={isDownloading}
          className="w-full mt-2 bg-[#12B856] hover:bg-[#0e9645] disabled:bg-slate-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider select-none"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Baixando PDF...</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Baixar PDF</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
