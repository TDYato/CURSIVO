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
