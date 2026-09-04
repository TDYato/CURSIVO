export interface DownloadFileItem {
  id: string;
  name: string;
  size: string;
  mimeType: string;
  description?: string;
  category?: string;
  pagesCount?: number;
  filePath?: string;
}

export interface AuthSession {
  email: string;
  name?: string;
  loggedInAt: number;
}

export interface MemberMaterial {
  id: string;
  title: string;
  category: 'principal' | 'bonus' | 'guia' | 'completo' | 'aula';
  categoryLabel: string;
  description: string;
  pages?: number;
  duration?: string;
  fileSize: string;
  badge?: string;
  colorScheme: 'sky' | 'emerald' | 'amber' | 'purple' | 'rose' | 'indigo';
  coverIcon: string;
  coverImageGradient: string;
  downloadFileName: string;
  gradeLevel: string;
  highlights: string[];
  progress?: number;
  type?: 'pdf' | 'video' | 'poster';
  filePath?: string;
}

export interface ProblemSignal {
  id: string;
  title: string;
  imageType: 'handwriting' | 'slow' | 'tired' | 'classroom' | 'blackboard' | 'dislike';
  alt: string;
}

export interface ActivityModule {
  id: number;
  title: string;
  subtitle: string;
  previewImage: string;
  pages: number;
  description: string;
  samples: string[];
}

export interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
}
