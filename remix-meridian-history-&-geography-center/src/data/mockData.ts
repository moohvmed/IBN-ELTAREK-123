import { HistoricalSpotlight, UserAccount } from '../types/auth';

export const DEMO_ACCOUNTS: Record<string, UserAccount & { defaultPass: string }> = {
  student: {
    id: 'usr_std_092',
    name: 'أحمد طارق (Ahmed Tarek)',
    email: 'ahmed.tarek@ibn-eltarek.com',
    phone: '01023456789',
    defaultPass: 'IbnEltarek2026!',
    role: 'student',
    loginMethod: 'phone',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    specializationOrGrade: 'الصف الثالث الثانوي · شعبة أدبي (تاريخ وجغرافيا تفوق)',
    linkedParentPhone: '01198765432',
    linkedParentName: 'السيد طارق عبد الحميد (ولي الأمر)',
    nextSession: {
      topic: 'الجغرافيا السياسية: تطور خريطة العالم السياسية ونشأة الحدود',
      tutorOrStudent: 'أ/ طارق عبد الرحمن (كبير معلمين التاريخ والجغرافيا)',
      time: 'اليوم الساعة 5:30 مساءً',
      room: 'قاعة الأطلس التاريخي الذكية (Room 01)',
    },
  },
  tutor: {
    id: 'usr_tut_411',
    name: 'أ/ طارق عبد الرحمن (Ibn ElTarek)',
    email: 'tarek.eltarek.history@gmail.com',
    googleEmail: 'tarek.eltarek.history@gmail.com',
    loginMethod: 'gmail',
    phone: '01234567890',
    defaultPass: 'Cartography1492#',
    role: 'tutor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    specializationOrGrade: 'المشرف العام ومؤسس سنتر ابن الطارق · خبير مناهج التاريخ والجغرافيا',
    nextSession: {
      topic: 'مراجعة خرائط الجغرافيا السياسية ونواتج تعلم التاريخ الحديث',
      tutorOrStudent: 'مجموعة النخبة للمتفوقين (30 طالباً)',
      time: 'اليوم الساعة 5:30 مساءً',
      room: 'قاعة الأطلس التاريخي الذكية (Room 01)',
    },
  },
  parent: {
    id: 'usr_par_803',
    name: 'ولي أمر الطالب أحمد (Mr. Tarek)',
    email: 'parent.ahmed@ibn-eltarek.com',
    phone: '01198765432',
    defaultPass: 'GuardianAccess88$',
    role: 'parent',
    loginMethod: 'phone',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80',
    specializationOrGrade: 'بوابة ولي الأمر · متابعة درجات الامتحانات والواجبات ونسب الحضور',
    linkedStudentPhone: '01023456789',
    linkedStudentName: 'أحمد طارق عبد الحميد',
    linkedStudentId: 'usr_std_092',
    nextSession: {
      topic: 'التقرير الدوري لمستوى الطالب في الاختبارات الجزئية',
      tutorOrStudent: 'إدارة سنتر ابن الطارق',
      time: 'الخميس القادم الساعة 7:00 مساءً',
      room: 'المكتب الأكاديمي لشؤون الطلاب',
    },
  },
};

export const HISTORICAL_SPOTLIGHTS: HistoricalSpotlight[] = [
  {
    id: 'greenwich',
    epoch: '1884 C.E. · International Meridian Conference',
    title: 'The Royal Observatory & Prime Meridian',
    location: 'Greenwich, London, United Kingdom',
    coordinates: '51°28′40″ N, 0°00′05″ W',
    elevation: '46m above sea level',
    historicalSignificance:
      'Standardized global time reckoning and world longitudinal reference, uniting navigation across all seven seas.',
    curatorNote: 'Tutoring Module: Longitude determination & marine chronometer history.',
    projection: 'Mercator',
  },
  {
    id: 'alexandria',
    epoch: 'c. 240 B.C.E. · Hellenistic Mediterranean',
    title: 'Eratosthenes & The Great Library of Alexandria',
    location: 'Alexandria, Ptolemaic Egypt',
    coordinates: '31°12′32″ N, 29°54′33″ E',
    elevation: '5m above sea level',
    historicalSignificance:
      'First accurate calculation of the Earth’s circumference using solar shadow angles at Syene and Alexandria.',
    curatorNote: 'Tutoring Module: Geodesy foundations and classical Mediterranean scholarship.',
    projection: 'Robinson',
  },
  {
    id: 'dunhuang',
    epoch: '7th–10th Century C.E. · Tang Dynasty Silk Road',
    title: 'The Hexi Corridor & Dunhuang Grottoes',
    location: 'Gansu Province, Central Asia / Western China',
    coordinates: '40°08′30″ N, 94°39′45″ E',
    elevation: '1,138m above sea level',
    historicalSignificance:
      'Convergence hub of trans-Eurasian trade, translating cultural geography, Buddhism, and cartographic star charts.',
    curatorNote: 'Tutoring Module: Spatial dispersion and Eurasian mercantile networks.',
    projection: 'Conic',
  },
  {
    id: 'machupicchu',
    epoch: '1450 C.E. · Tawantinsuyu Inca Empire',
    title: 'Machu Picchu & Andean Terracing Systems',
    location: 'Cusco Region, Urubamba Province, Peru',
    coordinates: '13°09′48″ S, 72°32′44″ W',
    elevation: '2,430m above sea level',
    historicalSignificance:
      'Mastery of vertical microclimates, seismic engineering, and mountainous hydraulic irrigation without mortar.',
    curatorNote: 'Tutoring Module: Human-environmental interaction and imperial roadway infrastructure.',
    projection: 'Polar',
  },
];

export const SUBJECT_DISCIPLINES = [
  'الجغرافيا السياسية (Political Geography)',
  'التاريخ الحديث والمعاصر (Modern History)',
  'تحليل الخرائط والمواقع الجغرافية (Cartography & Maps)',
  'حضارات العالم القديم والشرق (Ancient Civilizations)',
  'الجغرافيا الاقتصادية والتنمية (Economic Geography)',
  'مهارات حل أسئلة المستويات العليا ونواتج التعلم (High-Order Thinking)',
];
