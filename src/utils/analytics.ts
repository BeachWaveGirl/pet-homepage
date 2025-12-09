// Analytics tracking utilities (console-based for development)

export const trackFormSubmission = (formName: string, data?: Record<string, unknown>) => {
  console.log('[Analytics] Form Submission:', formName, data);
};

export const trackMemorialCreation = (petType: string, memorialType: string) => {
  console.log('[Analytics] Memorial Created:', { petType, memorialType });
};

export const trackCTAClick = (ctaName: string, source: string, destination?: string) => {
  console.log('[Analytics] CTA Click:', { ctaName, source, destination });
};

export const trackDownload = (fileName: string, format: string) => {
  console.log('[Analytics] Download:', { fileName, format });
};

export const trackPageView = (pageName: string, path: string) => {
  console.log('[Analytics] Page View:', { pageName, path });
};

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  console.log('[Analytics] Event:', eventName, properties);
};
