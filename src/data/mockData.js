export const studentsData = [
  {
    id: 1, name: 'سلمى إبراهيم', level: 'الصف الثالث', performance: 86,
    weakness: 'التشكيل', avatar: 'س', color: 'var(--color-mint)',
    parentName: 'والدة سلمى', parentContact: '0551234567', status: 'نشط',
    attendance: 95, lessonsCompleted: 12, avgScore: 86,
    subjects: { قراءة: 90, كتابة: 82, قواعد: 85 },
    monthlyScores: [70, 74, 78, 80, 82, 86],
    activities: [
      { text: 'أكملت تمرين الإملاء', time: 'منذ ساعة', type: 'exercise' },
      { text: 'قرأت قصة الأسد والفأر', time: 'منذ 3 ساعات', type: 'story' },
      { text: 'حصلت على نجمة في القواعد', time: 'أمس', type: 'achievement' },
    ],
  },
  {
    id: 2, name: 'يوسف عبدالله', level: 'الصف الثالث', performance: 74,
    weakness: 'الإملاء', avatar: 'ي', color: 'var(--color-sunny)',
    parentName: 'والد يوسف', parentContact: '0559876543', status: 'نشط',
    attendance: 88, lessonsCompleted: 10, avgScore: 74,
    subjects: { قراءة: 78, كتابة: 68, قواعد: 76 },
    monthlyScores: [60, 65, 68, 70, 72, 74],
    activities: [
      { text: 'أكمل واجب القراءة', time: 'منذ ساعتين', type: 'exercise' },
      { text: 'شارك في مسابقة الإملاء', time: 'أمس', type: 'achievement' },
    ],
  },
  {
    id: 3, name: 'ليلى الخشن', level: 'الصف الثالث', performance: 58,
    weakness: 'القراءة', avatar: 'ل', color: 'var(--color-coral)',
    parentName: 'والدة ليلى', parentContact: '0507654321', status: 'يحتاج متابعة',
    attendance: 78, lessonsCompleted: 7, avgScore: 58,
    subjects: { قراءة: 50, كتابة: 62, قواعد: 60 },
    monthlyScores: [45, 48, 50, 54, 56, 58],
    activities: [
      { text: 'حاولت تمرين القراءة', time: 'منذ 5 ساعات', type: 'exercise' },
    ],
  },
  {
    id: 4, name: 'عمر الناصر', level: 'الصف الثالث', performance: 92,
    weakness: 'لا يوجد', avatar: 'ع', color: 'var(--color-sky)',
    parentName: 'والد عمر', parentContact: '0541112233', status: 'متفوق',
    attendance: 98, lessonsCompleted: 14, avgScore: 92,
    subjects: { قراءة: 95, كتابة: 90, قواعد: 92 },
    monthlyScores: [80, 84, 86, 88, 90, 92],
    activities: [
      { text: 'أكمل جميع التمارين', time: 'منذ 30 دقيقة', type: 'exercise' },
      { text: 'حصل على المركز الأول', time: 'أمس', type: 'achievement' },
      { text: 'قرأ 3 قصص إضافية', time: 'قبل يومين', type: 'story' },
    ],
  },
  {
    id: 5, name: 'نور الهدى', level: 'الصف الثالث', performance: 81,
    weakness: 'الكتابة', avatar: 'ن', color: 'var(--color-grape)',
    parentName: 'والدة نور', parentContact: '0562223344', status: 'نشط',
    attendance: 92, lessonsCompleted: 11, avgScore: 81,
    subjects: { قراءة: 85, كتابة: 72, قواعد: 84 },
    monthlyScores: [68, 72, 75, 78, 80, 81],
    activities: [
      { text: 'أكملت درس حروف الجر', time: 'منذ ساعة', type: 'exercise' },
    ],
  },
  {
    id: 6, name: 'أحمد محمود', level: 'الصف الثالث', performance: 65,
    weakness: 'القواعد', avatar: 'أ', color: 'var(--color-mango)',
    parentName: 'والد أحمد', parentContact: '0573334455', status: 'يحتاج متابعة',
    attendance: 82, lessonsCompleted: 8, avgScore: 65,
    subjects: { قراءة: 70, كتابة: 68, قواعد: 55 },
    monthlyScores: [50, 54, 58, 60, 62, 65],
    activities: [
      { text: 'بدأ تمرين القواعد', time: 'منذ 4 ساعات', type: 'exercise' },
    ],
  },
];

export const weeklyPerformanceData = [
  { day: 'أحد', score: 62 },
  { day: 'إثن', score: 68 },
  { day: 'ثلا', score: 74 },
  { day: 'أرب', score: 70 },
  { day: 'خم', score: 82 },
  { day: 'جم', score: 78 },
  { day: 'سب', score: 86 },
];

export const monthlyProgressData = [
  { month: 'يناير', avg: 62 },
  { month: 'فبراير', avg: 66 },
  { month: 'مارس', avg: 70 },
  { month: 'أبريل', avg: 74 },
  { month: 'مايو', avg: 78 },
  { month: 'يونيو', avg: 82 },
];

export const activityDistribution = [
  { name: 'قراءة', value: 35, color: 'var(--color-sky)' },
  { name: 'كتابة', value: 25, color: 'var(--color-coral)' },
  { name: 'قواعد', value: 22, color: 'var(--color-mint)' },
  { name: 'إملاء', value: 18, color: 'var(--color-sunny)' },
];

export const recentActivities = [
  { id: 1, text: 'تم إضافة درس جديد: التاء المربوطة', time: 'منذ 10 دقائق', icon: 'lesson', color: 'var(--color-sky)' },
  { id: 2, text: 'قام عمر بإكمال جميع التمارين', time: 'منذ 30 دقيقة', icon: 'exercise', color: 'var(--color-mint)' },
  { id: 3, text: 'رسالة جديدة من والدة ليلى', time: 'منذ ساعة', icon: 'message', color: 'var(--color-grape)' },
  { id: 4, text: 'سلمى حصلت على نجمة في الإملاء', time: 'منذ ساعتين', icon: 'achievement', color: 'var(--color-sunny)' },
  { id: 5, text: 'تم تحديث خارطة الطريق', time: 'منذ 3 ساعات', icon: 'roadmap', color: 'var(--color-mango)' },
  { id: 6, text: 'قام تلميذ بإكمال تمرين القراءة', time: 'منذ 4 ساعات', icon: 'exercise', color: 'var(--color-mint)' },
];

export const lessonsData = [
  { id: 1, title: 'حروف الجر', category: 'قواعد', level: 'الصف الثالث', status: 'مكتمل', description: 'تعلم حروف الجر واستخداماتها في الجمل', objectives: 'التعرف على حروف الجر، استخدامها بشكل صحيح', duration: '45 دقيقة', createdAt: '2026-04-10' },
  { id: 2, title: 'اللام الشمسية والقمرية', category: 'إملاء', level: 'الصف الثالث', status: 'حالي', description: 'التفريق بين اللام الشمسية والقمرية', objectives: 'قراءة الكلمات بشكل صحيح، التمييز بين النوعين', duration: '40 دقيقة', createdAt: '2026-04-15' },
  { id: 3, title: 'قراءة نص قصير', category: 'قراءة', level: 'الصف الثالث', status: 'قادم', description: 'قراءة نص قصير والإجابة عن أسئلة الفهم', objectives: 'تحسين مهارة القراءة والفهم', duration: '35 دقيقة', createdAt: '2026-04-20' },
  { id: 4, title: 'التاء المربوطة والمفتوحة', category: 'إملاء', level: 'الصف الثالث', status: 'قادم', description: 'التفريق بين التاء المربوطة والمفتوحة', objectives: 'كتابة التاء بشكل صحيح', duration: '30 دقيقة', createdAt: '2026-04-22' },
  { id: 5, title: 'أسماء الإشارة', category: 'قواعد', level: 'الصف الثالث', status: 'مكتمل', description: 'تعلم أسماء الإشارة للقريب والبعيد', objectives: 'استخدام أسماء الإشارة في جمل مفيدة', duration: '40 دقيقة', createdAt: '2026-04-08' },
  { id: 6, title: 'كتابة فقرة قصيرة', category: 'كتابة', level: 'الصف الثالث', status: 'حالي', description: 'تعلم كتابة فقرة مترابطة', objectives: 'التعبير الكتابي السليم', duration: '50 دقيقة', createdAt: '2026-04-18' },
];

export const storiesData = [
  { id: 1, title: 'الأسد والفأر', moral: 'لا تحتقر الصغار', type: 'نصي ومسموع', content: 'في يوم من الأيام كان الأسد نائماً في الغابة...', readingTime: '5 دقائق', difficulty: 'سهل' },
  { id: 2, title: 'السلحفاة والأرنب', moral: 'في التأني السلامة', type: 'نصي', content: 'تسابق الأرنب والسلحفاة ذات يوم...', readingTime: '7 دقائق', difficulty: 'سهل' },
  { id: 3, title: 'الغراب والجرة', moral: 'الحاجة أم الاختراع', type: 'مسموع', content: 'كان غراب عطشان يبحث عن ماء...', readingTime: '4 دقائق', difficulty: 'متوسط' },
  { id: 4, title: 'النملة والجندب', moral: 'الاستعداد للمستقبل', type: 'نصي ومسموع', content: 'في فصل الصيف كانت النملة تعمل بجد...', readingTime: '6 دقائق', difficulty: 'سهل' },
  { id: 5, title: 'الراعي الكذاب', moral: 'الصدق منجاة', type: 'نصي', content: 'كان هناك راعٍ صغير يرعى الغنم...', readingTime: '5 دقائق', difficulty: 'متوسط' },
];

export const roadmapData = [
  { id: 1, week: 'الأسبوع الأول', topic: 'مراجعة الحروف الهجائية', status: 'completed', lessons: ['الحروف من أ إلى ز', 'الحروف من س إلى ي'] },
  { id: 2, week: 'الأسبوع الثاني', topic: 'الشدة والتنوين', status: 'completed', lessons: ['تعريف الشدة', 'أنواع التنوين'] },
  { id: 3, week: 'الأسبوع الثالث', topic: 'التاء المربوطة والمفتوحة', status: 'current', lessons: ['التاء المربوطة', 'التاء المفتوحة', 'تمارين تطبيقية'] },
  { id: 4, week: 'الأسبوع الرابع', topic: 'همزة الوصل والقطع', status: 'upcoming', lessons: ['همزة الوصل', 'همزة القطع'] },
  { id: 5, week: 'الأسبوع الخامس', topic: 'اللام الشمسية والقمرية', status: 'upcoming', lessons: ['اللام الشمسية', 'اللام القمرية'] },
  { id: 6, week: 'الأسبوع السادس', topic: 'أسماء الإشارة', status: 'upcoming', lessons: ['الإشارة للقريب', 'الإشارة للبعيد'] },
];

export const conversationsData = [
  {
    id: 1, parentName: 'والدة ليلى', avatar: 'و.ل', studentName: 'ليلى الخشن', unread: true,
    messages: [
      { id: 1, text: 'السلام عليكم أستاذة، كيف حال ليلى في الدراسة؟', sender: 'parent', time: '09:00' },
      { id: 2, text: 'وعليكم السلام، ليلى تتحسن تدريجياً ولكن تحتاج مزيد من التدريب على القراءة', sender: 'teacher', time: '09:15' },
      { id: 3, text: 'هل تنصحين بتمارين معينة في البيت؟', sender: 'parent', time: '09:20' },
      { id: 4, text: 'نعم، أنصح بقراءة قصة قصيرة يومياً لمدة 15 دقيقة', sender: 'teacher', time: '09:25' },
      { id: 5, text: 'هل تحسنت في الإملاء هذا الأسبوع؟', sender: 'parent', time: '10:30' },
    ],
  },
  {
    id: 2, parentName: 'والد عمر', avatar: 'و.ع', studentName: 'عمر الناصر', unread: false,
    messages: [
      { id: 1, text: 'شكراً على مجهودك مع عمر', sender: 'parent', time: '14:00' },
      { id: 2, text: 'عمر طالب ممتاز ومجتهد، أتمنى له التوفيق الدائم', sender: 'teacher', time: '14:30' },
      { id: 3, text: 'هل يمكنه المشاركة في مسابقة القراءة؟', sender: 'parent', time: '15:00' },
      { id: 4, text: 'بالتأكيد! عمر مؤهل تماماً لذلك وسأرشحه', sender: 'teacher', time: '15:15' },
    ],
  },
  {
    id: 3, parentName: 'والدة سلمى', avatar: 'و.س', studentName: 'سلمى إبراهيم', unread: true,
    messages: [
      { id: 1, text: 'مرحباً، أريد الاطمئنان على مستوى سلمى', sender: 'parent', time: '11:00' },
      { id: 2, text: 'سلمى ممتازة! تحسنت كثيراً في التشكيل هذا الشهر', sender: 'teacher', time: '11:20' },
      { id: 3, text: 'الحمد لله، شكراً لكِ', sender: 'parent', time: '11:25' },
    ],
  },
  {
    id: 4, parentName: 'والد يوسف', avatar: 'و.ي', studentName: 'يوسف عبدالله', unread: false,
    messages: [
      { id: 1, text: 'كيف أداء يوسف هذا الأسبوع؟', sender: 'parent', time: '16:00' },
      { id: 2, text: 'يوسف بذل مجهوداً جيداً لكنه يحتاج تدريب أكثر على الإملاء', sender: 'teacher', time: '16:30' },
    ],
  },
];

export const inspectorData = {
  name: 'أ. محمد العلي',
  lastVisit: '2026-04-20',
  overallRating: 4.2,
  evaluations: [
    { id: 1, date: '2026-04-20', title: 'زيارة تقييمية - الفصل الثالث', rating: 4.2, status: 'مكتمل',
      strengths: ['إدارة الصف ممتازة', 'تنويع في أساليب التدريس', 'تفاعل جيد مع الطلاب'],
      improvements: ['زيادة استخدام التقنية', 'تفعيل التعلم التعاوني'],
      notes: 'أداء المعلمة جيد جداً بشكل عام. يُنصح بزيادة استخدام الوسائل التعليمية الرقمية.' },
    { id: 2, date: '2026-03-15', title: 'زيارة متابعة', rating: 3.8, status: 'مكتمل',
      strengths: ['التحضير الجيد للدروس', 'الالتزام بالوقت'],
      improvements: ['تنويع أساليب التقييم', 'إشراك جميع الطلاب'],
      notes: 'تحسن ملحوظ منذ الزيارة السابقة.' },
  ],
  recommendations: [
    { id: 1, text: 'استخدام التعلم باللعب في دروس القواعد', status: 'جديد', priority: 'عالي' },
    { id: 2, text: 'إعداد ملف إنجاز لكل طالب', status: 'قيد التنفيذ', priority: 'متوسط' },
    { id: 3, text: 'حضور ورشة تدريبية عن التعلم النشط', status: 'مكتمل', priority: 'عالي' },
  ],
};

export const eventsData = [
  { id: 1, title: 'اجتماع أولياء الأمور', date: '2026-05-05', time: '16:00', type: 'meeting', description: 'اجتماع دوري مع أولياء أمور طلاب الصف الثالث' },
  { id: 2, title: 'ورشة التعلم النشط', date: '2026-05-08', time: '10:00', type: 'seminar', description: 'ورشة تدريبية حول استراتيجيات التعلم النشط' },
  { id: 3, title: 'لقاء والدة ليلى', date: '2026-05-10', time: '14:00', type: 'meeting', description: 'مناقشة خطة تحسين مستوى ليلى في القراءة' },
  { id: 4, title: 'ندوة تربوية', date: '2026-05-15', time: '09:00', type: 'seminar', description: 'ندوة عن أحدث طرق التعليم للمرحلة الابتدائية' },
  { id: 5, title: 'اجتماع والد أحمد', date: '2026-05-18', time: '15:30', type: 'meeting', description: 'متابعة تقدم أحمد في القواعد' },
];
