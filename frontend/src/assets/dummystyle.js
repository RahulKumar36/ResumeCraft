export const landingPageStyles = {
  // Main container
  container: "min-h-screen bg-gray-900",

  // Header styles
  header: "fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-xl border-b border-gray-700",
  headerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
  logoContainer: "flex items-center gap-3",
  logoIcon: "w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-black/50",
  logoIconInner: "w-5 h-5 text-white",
  logoText: "text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent",
  mobileMenuButton: "md:hidden p-2 rounded-xl hover:bg-gray-800 transition-colors",
  mobileMenuIcon: "text-teal-400",

  // Auth buttons
  desktopAuthButton: "relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20",
  desktopAuthButtonText: "relative",
  desktopAuthButtonOverlay: "absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity",
  mobileAuthButton: "w-full px-6 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-2xl",

  // Mobile menu
  mobileMenu: "md:hidden bg-gray-800/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-gray-700 transition-all duration-300 ease-in-out",
  mobileMenuContainer: "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-4 py-2",
  mobileUserWelcome: "text-emerald-400 font-medium text-center py-2 text-base sm:text-lg",
  mobileDashboardButton: "w-full px-6 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all",

  // Main content
  main: "pt-24",

  // Hero section
  heroSection: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20",
  heroGrid: "flex flex-wrap justify-between gap-10 lg:gap-12 items-center",
  heroLeft: "space-y-8",
  tagline: "inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-gray-800 border border-gray-700 text-emerald-400 rounded-full font-bold text-xs sm:text-sm",
  heading: "text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-snug",
  headingText: "block text-gray-100",
  headingGradient: "block bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent",
  description: "text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg font-medium",
  ctaButtons: "flex flex-col sm:flex-row gap-4 ",

  // Buttons
  primaryButton: "group relative px-10 py-4 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20",
  primaryButtonOverlay: "absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity",
  primaryButtonContent: "relative flex items-center gap-2 sm:gap-3",
  primaryButtonIcon: "group-hover:translate-x-1 transition-transform",
  secondaryButton: "px-8 sm:px-10 py-3 sm:py-4 border-2 border-gray-700 text-gray-300 font-bold rounded-2xl hover:border-gray-600 hover:bg-gray-800 transition-all",

  // Stats
  statsContainer: "flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-6",
  statItem: "text-center",
  statNumber: "text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent",
  statLabel: "text-xs sm:text-sm text-gray-500 font-medium",

  // Hero illustration
  heroIllustration: "relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto",
  heroIllustrationBg: "absolute -inset-8 bg-gradient-to-r from-teal-900/50 to-emerald-900/50 rounded-3xl blur-3xl",
  heroIllustrationContainer: "relative",

  // SVG styles
  svgContainer: "w-full h-auto max-w-md mx-auto",
  svgRect: "fill-gray-700 stroke-gray-600 stroke-[2]",
  svgCircle: "fill-gray-800",
  svgRectPrimary: "fill-teal-500",
  svgRectSecondary: "fill-emerald-500",
  svgRectLight: "fill-gray-600",
  svgRectSkill: "fill-gray-600",
  svgAnimatedCircle: "fill-yellow-500 opacity-80",
  svgAnimatedRect: "fill-emerald-500 opacity-80",
  svgAnimatedPolygon: "fill-red-500 opacity-80",

  // Features section
  featuresSection: "bg-gray-800/50 py-16 sm:py-24",
  featuresContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  featuresHeader: "text-center mb-12 sm:mb-20",
  featuresTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-gray-100 mb-4 sm:mb-6",
  featuresTitleGradient: "bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent",
  featuresDescription: "text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-medium",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8",

  // Feature cards
  featureCard: "group relative",
  featureCardHover: "absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-80 transition-opacity blur-xl rounded-3xl from-cyan-500/70 to-teal-500/70",
  featureCardContent: "relative bg-gray-800 border border-gray-700 p-6 sm:p-8 rounded-3xl hover:shadow-2xl hover:shadow-black/50 transition-all group-hover:scale-105 group-hover:border-gray-600",
  featureIconContainer: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-lg shadow-black/50",
  featureIcon: "w-8 h-8 sm:w-10 sm:h-10",
  featureTitle: "text-xl sm:text-2xl font-black text-gray-100 mb-2 sm:mb-4",
  featureDescription: "text-sm sm:text-base text-gray-400 leading-relaxed font-medium",

  // Feature gradients
  featureCardViolet: "from-gray-800 to-gray-800",
  featureCardFuchsia: "from-gray-800 to-gray-800",
  featureCardOrange: "from-gray-800 to-gray-800",
  featureIconViolet: "from-teal-500 to-emerald-600",
  featureIconFuchsia: "from-cyan-500 to-teal-600",
  featureIconOrange: "from-emerald-500 to-green-600",

  // CTA section
  ctaSection: "py-16 sm:py-24",
  ctaContainer: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  ctaCard: "relative",
  ctaCardBg: "absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-teal-900/50 to-emerald-900/50 rounded-3xl blur-3xl",
  ctaCardContent: "relative bg-gray-800 border border-gray-700 rounded-3xl p-8 sm:p-16",
  ctaTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-gray-100 mb-4 sm:mb-6",
  ctaTitleGradient: "bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent",
  ctaDescription: "text-base sm:text-lg text-gray-400 mb-6 sm:mb-10 max-w-2xl mx-auto font-medium",
  ctaButton: "group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20",
  ctaButtonOverlay: "absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity",
  ctaButtonText: "relative",

  // Footer
  footer: "border-t border-gray-700 bg-gray-900 py-6 sm:py-8",
  footerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  footerText: "text-sm sm:text-base text-gray-400 font-medium",
  footerHeart: "bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent",
  footerLink: "hover:text-teal-400 underline"
};

export const dashboardStyles = {
  // Container
  background: "min-h-screen bg-gray-900",
  container: "container mx-auto px-4 py-6",

  // Header
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
  headerTitle: "text-2xl font-bold text-gray-100 ",
  headerSubtitle: "text-gray-400",

  // Create Button
  createButton: "group relative px-10 py-4 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20",
  createButtonOverlay: "absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity",
  createButtonContent: "relative flex items-center gap-3",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-12",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-12 text-center",
  emptyIconWrapper: "bg-gray-800 p-4 rounded-full mb-4",
  emptyTitle: "text-xl font-bold text-gray-100 mb-2",
  emptyText: "text-gray-400 max-w-md mb-6",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // New Resume Card
  newResumeCard: "flex flex-col items-center justify-center bg-gray-800 border-2 border-dashed border-gray-700 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-black/50 hover:border-emerald-500 h-full",
  newResumeIcon: "w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center mb-4",
  newResumeTitle: "text-xl font-bold text-gray-100 mb-2 text-center",
  newResumeText: "text-gray-400 text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-4",
  modalTitle: "text-xl font-bold text-gray-100",
  modalCloseButton: "text-gray-400 hover:text-gray-100",

  // Delete Confirmation
  deleteIconWrapper: "bg-red-900/50 p-3 rounded-full mb-4",
  deleteTitle: "text-lg font-bold text-gray-100 mb-2",
  deleteText: "text-gray-400 mb-4",
};


export const cardStyles = {
  // ProfileInfoCard styles
  profileCard: "flex items-center gap-3 p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-2xl shadow-md shadow-black/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.03]",
  profileInitialsContainer: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-md",
  profileInitialsText: "text-base sm:text-lg font-black text-white",
  profileName: "text-xs sm:text-sm font-bold text-gray-100",
  logoutButton: "text-teal-400 text-[10px] sm:text-xs font-bold cursor-pointer hover:text-emerald-400 transition-colors",

  // ResumeSummaryCard styles
  resumeCard: "group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col bg-gray-800 border border-gray-700 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50 hover:border-emerald-600",
  cardBackground: "absolute inset-0 bg-gradient-to-br from-teal-900/40 via-transparent to-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  previewArea: "p-4 sm:p-6 flex-1 relative overflow-hidden",
  emptyPreview: "w-full h-[180px] sm:h-[200px] lg:h-[220px] flex flex-col items-center justify-center rounded-2xl",
  emptyPreviewIcon: "w-16 h-16 bg-gray-700/90 rounded-2xl flex items-center justify-center mb-4 shadow-md",
  emptyPreviewText: "text-gray-100 text-sm font-bold",
  emptyPreviewSubtext: "text-gray-500 text-xs mt-1",
  infoArea: "bg-gray-900/50 border-t border-gray-700 p-4 sm:p-6",
  title: "text-sm sm:text-base font-bold text-gray-100 truncate mb-2 group-hover:text-emerald-400 transition-colors",
  dateInfo: "flex items-center gap-2 text-xs text-gray-400",

  // Action buttons
  actionOverlay: "absolute inset-4 sm:inset-6 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl",
  actionButtonsContainer: "flex gap-3",
  editButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  deleteButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  buttonIcon: "text-white group-hover/btn:scale-110 transition-transform",

  // Progress and completion styles
  progressBar: "relative w-full h-2 bg-gray-700 rounded-full overflow-hidden",
  progressFill: "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden",
  progressGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse",
  progressIndicator: "absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/20 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-2",
  statusText: "text-xs font-medium text-gray-400",
  percentageText: "text-xs font-bold text-gray-300",

  // Completion indicator
  completionIndicator: "absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-gray-700 border border-gray-600 rounded-full shadow-sm",
  completionDot: "w-3 h-3 rounded-full flex items-center justify-center",
  completionDotInner: "w-1 h-1 bg-white rounded-full",
  completionPercentageText: "text-xs font-bold text-gray-300",

  // Completion color classes
  completionHigh: "from-emerald-500 to-green-600",
  completionMedium: "from-yellow-500 to-orange-500",
  completionLow: "from-red-500 to-pink-600",

  // TemplateCard styles
  templateCard: "relative rounded-lg overflow-hidden shadow-md shadow-black/50 transition-all duration-300 cursor-pointer border border-gray-700",
  templateCardSelected: "ring-2 ring-emerald-500 scale-[1.02]",
  templateCardDefault: "hover:shadow-lg hover:border-gray-600",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-gray-900/10 backdrop-blur-sm",
  selectionIndicator: "absolute top-4 right-4 z-20",
  selectionCircle: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect: "absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-medium text-gray-100",
  emptyTemplate: "relative h-full w-full rounded-lg overflow-hidden",
  emptyTemplateIcon: "p-3 bg-gray-700/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-gray-400 mt-1"
};

export const authStyles = {
  container: "w-[90vw] md:w-[400px] p-8 bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl shadow-black/50",
  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-gray-100 mb-2",
  subtitle: "text-gray-400 font-medium",
  form: "space-y-6",
  errorMessage: "text-red-300 text-sm font-medium bg-red-900/50 border border-red-700 px-4 py-3 rounded-xl",
  submitButton: "w-full py-4 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 transition-all text-lg",
  switchText: "text-center text-sm text-gray-400 font-medium",
  switchButton: "font-black text-teal-400 hover:text-emerald-400 transition-colors",
  signupContainer: "w-[90vw] md:w-[400px] p-8 bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl shadow-black/50 overflow-hidden",
  signupTitle: "text-2xl font-black text-gray-100 mb-2",
  signupSubtitle: "text-gray-400 font-medium",
  signupForm: "space-y-4",
  signupSubmit: "w-full py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-500/20 transition-all text-lg",
  signupSwitchButton: "font-black text-rose-400 hover:text-pink-400 transition-colors"
};

export const shimmerStyle = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
    50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  .animate-flow {
    animation: flow 4s infinite linear;
  }
  
  .animate-bubble {
    animation: bubble 2s infinite ease-in-out;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
`
// Common Styles
export const commonStyles = {
  trashButton: "absolute top-4 right-4 p-2 text-red-400 hover:bg-red-900/50 rounded-xl transition-all",
  addButtonBase: "flex items-center gap-3 px-6 py-3 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg",
};

// AdditionalInfoForm Styles
export const additionalInfoStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  sectionHeading: "text-lg font-bold text-gray-100 mb-6 flex items-center gap-2",
  dotViolet: "w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full",
  dotOrange: "w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full",
  languageItem: "relative bg-gray-700 border border-gray-600 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/50 transition-all",
  interestItem: "relative",
  addButtonLanguage: "bg-gradient-to-r from-teal-400 to-emerald-500",
  addButtonInterest: "bg-gradient-to-r from-orange-500 to-red-500",
};

// CertificationInfoForm Styles
export const certificationInfoStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  item: "relative bg-gray-700 border border-gray-600 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/50 transition-all",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-500",
};

// ContactInfoForm Styles
export const contactInfoStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
};

// EducationDetailsForm Styles
export const educationDetailsStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  item: "relative bg-gray-700 border border-gray-600 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/50 transition-all",
  addButton: "bg-gradient-to-r from-cyan-400 to-teal-400",
};

// ProfileInfoForm Styles
export const profileInfoStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  textarea: "w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 text-gray-100 transition-all outline-none resize-none",
};

// ProjectDetailForm Styles
export const projectDetailStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  item: "relative bg-gray-700 border border-gray-600 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/50 transition-all",
  textarea: "w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 text-gray-100 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-cyan-500 to-teal-500",
};

// SkillsInfoForm Styles
export const skillsInfoStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  item: "relative bg-gray-700 border border-gray-600 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/50 transition-all",
  addButton: "bg-gradient-to-r from-amber-500 to-orange-500",
};

// WorkExperienceForm Styles
export const workExperienceStyles = {
  container: "p-8 bg-gray-800",
  heading: "text-2xl font-black text-gray-100 mb-8",
  item: "relative bg-gray-700 border border-gray-600 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-black/50 transition-all",
  textarea: "w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 text-gray-100 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-emerald-500 to-green-600",
};

export const containerStyles = {

    background: "min-h-screen bg-gray-900",

  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-800 border border-gray-700 rounded-2xl py-4 px-6 mb-6 shadow-sm shadow-black/50",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
  formContainer: "bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-sm shadow-black/50",
  previewContainer: "bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-sm shadow-black/50 p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent: "w-[90vw] h-[80vh]",
  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-gray-800 shadow-lg max-w-[400px] mx-auto"
};

export const buttonStyles = {
  theme: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-700 text-purple-400 font-bold rounded-xl hover:bg-gray-600 transition-all",
  delete: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-900/50 text-red-300 font-bold rounded-xl hover:bg-red-800/50 transition-all",
  download: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-900/50 text-emerald-300 font-bold rounded-xl hover:bg-emerald-800/50 transition-all",
  back: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-gray-300 font-bold rounded-xl hover:bg-gray-600 transition-all text-sm",
  save: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-800/80 text-cyan-300 font-bold rounded-xl hover:bg-cyan-700/80 transition-all text-sm",
  next: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm",
  modalAction: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm"
};

export const statusStyles = {
  completionBadge: "inline-flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-300",
  modalBadge: "inline-flex items-center gap-2 bg-teal-900/70 px-3 py-1 rounded-full text-sm font-medium text-teal-300",
  error: "flex items-center gap-3 text-sm font-medium text-amber-300 bg-amber-900/50 border border-amber-700 px-4 py-3 rounded-xl mb-4"
};

export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
};

export const inputStyles = {
  wrapper: "mb-6 group",
  label: "block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-emerald-400 transition-colors",
  inputContainer: focused => `relative flex items-center bg-gray-700 border-2 px-4 py-3 rounded-xl transition-all duration-300 ${focused
    ? 'border-emerald-500 ring-4 ring-emerald-500/20 shadow-lg'
    : 'border-gray-600 hover:border-gray-500'}`,
  inputField: "w-full bg-transparent outline-none text-gray-100 placeholder-gray-500 font-medium",
  toggleButton: "text-gray-400 hover:text-emerald-400 transition-colors p-1 rounded-lg hover:bg-gray-600",
};

export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",
  placeholder: hovered => `relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-gray-800 border-2 border-dashed border-gray-700 rounded-full cursor-pointer transition-all duration-300 ${hovered ? 'hover:border-emerald-500 hover:bg-gray-700' : ''}`,
  cameraButton: "absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white rounded-full transition-all shadow-lg hover:scale-110",
  previewWrapper: "relative group",
  previewImageContainer: hovered => `w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg transition-all duration-300 ${hovered ? 'group-hover:border-emerald-400' : ''}`,
  previewImage: "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",
  overlay: "absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
  actionButton: (bg, hoverBg, textColor) => `w-10 h-10 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} transition-all`,
};

export const titleInputStyles = {
  container: "flex items-center gap-3",
  titleText: "text-lg sm:text-xl font-bold text-gray-100",
  editButton: "p-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all group",
  editIcon: "w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors",
  inputField: focused => `text-lg sm:text-xl font-bold bg-transparent outline-none text-gray-100 border-b-2 pb-2 transition-all duration-300 ${focused ? 'border-emerald-500' : 'border-gray-600'}`,
  confirmButton: "p-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all",
};

export const modalStyles = {
  overlay: "fixed inset-0 flex items-center justify-center w-full h-full bg-black/70 backdrop-blur-sm z-50",
  container: "relative flex flex-col bg-gray-800/95 backdrop-blur-xl shadow-2xl shadow-black/50 rounded-3xl overflow-hidden border border-gray-700 max-w-[95vw] max-h-[95vh]",
  header: "flex items-center justify-between p-6 border-b border-gray-700 bg-gray-800",
  title: "text-xl font-black text-gray-100",
  actionButton: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg mr-12",
  closeButton: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-700/80 hover:bg-red-900/50 text-gray-400 hover:text-red-400 rounded-xl transition-all shadow-lg hover:scale-110 z-10",
  body: "flex-1 overflow-y-auto"
};

export const infoStyles = {
  // Progress
  progressWrapper: "w-20 h-2 rounded-full bg-gray-600",
  progressBar: color => `h-full rounded-full transition-all`,

  // ActionLink
  actionWrapper: "flex items-center gap-3",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-gray-400 hover:text-emerald-400 transition-colors",

  // CertificationInfo
  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-gray-100",
  certRow: "flex items-center gap-2 mt-1",
  certYear: bgColor => `text-xs font-bold text-white px-3 py-1 rounded-lg`,
  certIssuer: "text-sm text-gray-400 font-medium",

  // ContactInfo
  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-gray-300",

  // EducationInfo
  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-gray-100",
  eduInstitution: "text-sm text-gray-300 font-medium",
  eduDuration: "text-xs text-gray-500 font-medium italic mt-1",

  // Language/Skill Info
  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-gray-100",

  // Links
  linkRow: "flex items-center space-x-1 hover:text-cyan-400",

  // ProjectInfo
  projectContainer: "mb-5",
  projectTitle: isPreview => `${isPreview ? 'text-sm' : 'text-base'} font-semibold text-gray-100`,
  projectDesc: "text-sm text-gray-400 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  // RatingInput
  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  // SkillSection
  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  // WorkExperience
  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-gray-100",
  workRole: "text-base font-medium text-gray-300",
  workDuration: color => `text-sm font-bold italic`,
  workDesc: "text-sm text-gray-400 font-medium leading-relaxed"
};