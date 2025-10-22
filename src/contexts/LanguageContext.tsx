import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface LanguageContextType {
  language: string
  isArabic: boolean
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact us',

    // Home Page - Slide 1
    'home.hero.title': 'Our Mission in an Age of Intelligence',
    'home.hero.subtitle': 'In a world overwhelmed by data and complexity, your ambition deserves an intelligent path forward.',

    // Slide 2
    'home.slide2.title': 'Our purpose is to cut through the noise and deliver the exact AI capabilities you need to win.',
    'home.slide2.subtitle': 'We envision a future where Aql is the default partner for organizations that value tangible, intelligent results over empty talk.',

    // Slide 3
    'home.slide3.title': 'At our core, our goal is to demystify artificial intelligence.',
    'home.slide3.subtitle': 'Making its sophisticated power simple, effective, and accessible for your business and turning it from a complex challenge into your greatest competitive advantage.',

    // Section 4 - Core AI Offerings
    'home.offerings.title': 'Our Core AI Offerings',
    'home.offerings.subtitle': 'We solve critical problems by designing and deploying focused, powerful AI. Our offerings are built to deliver intelligence where it matters most, providing you with a seamless and comprehensive advantage.',
    'home.offerings.tagline': 'Deliver intelligence where it matters most',

    // AI Agents Box
    'home.aiagents.title': 'AI Agents',
    'home.aiagents.description': 'Custom AI agents to automate complex tasks and boost efficiency.',

    // AI Solutions Box
    'home.aisolutions.title': 'AI Solutions',
    'home.aisolutions.description': 'End-to-end AI solutions to solve major challenges and drive growth.',

    // AI Consulting Box
    'home.aiconsulting.title': 'AI Consulting',
    'home.aiconsulting.description': 'Expert consulting to turn your AI vision into a successful roadmap.',

    // Section 5 - The Aql Advantage
    'home.advantage.title': 'The Aql Advantage',
    'home.advantage.description': "The difference in our approach is our exclusive focus. We don't just build AI; we engineer intelligent value. By analyzing every challenge from a holistic, AI-first perspective, we identify opportunities for automation and optimization that others miss. Our expertise in designing and deploying custom AI delivers a direct, positive impact on your bottom line by streamlining processes and revealing powerful new efficiencies. We operate at the speed of innovation. The world of AI doesn't wait, and neither do we. Our agile methodology ensures we deliver superior, intelligent solutions on an accelerated timeline. More than just a vendor, we become an extension of your team. We integrate directly, listen intently to your needs, and commit to your success with the passion and focus that only a true AI specialist can provide. Stop chasing trends. Start building intelligent solutions with Aql.",

    // Section 6 - About Aql
    'home.about.description': 'Aql is that path. We are a dedicated team of AI strategists and engineers focused on one mission: harnessing the transformative power of Artificial Intelligence to build precisely what you need, faster. We move beyond generic platforms to deliver bespoke AI systems that turn your strategic goals into operational realities.',

    'home.partners.title': "We've partnered with over 70",
    'home.partners.subtitle': 'leading technology companies',

    // About Page
    'about.title': 'About Us',
    'about.p1': "At AQL, we're more than just a technology solutions provider—we're your strategic partner in digital transformation. With over a decade of experience and partnerships with 70+ leading technology companies, we bring unmatched expertise to every project.",
    'about.p2': "Our team of experts specializes in delivering results-driven solutions across cloud infrastructure, artificial intelligence, cybersecurity, blockchain, and strategic consulting. We don't believe in empty promises or buzzwords—we believe in measurable outcomes and lasting partnerships.",
    'about.p3': "Founded on the principle that organizations deserve partners who value results over talk, we've helped hundreds of companies navigate complexity, eliminate friction, and achieve their most ambitious goals.",

    // Services Page
    'services.title': 'Services',
    'services.subtitle': 'Focused AI for a comprehensive advantage',
    'services.explore': '',
    'services.intro.title': 'Focused AI for a comprehensive advantage',
    'services.intro.description': "We solve your most critical and pressing problems by designing and deploying focused, powerful AI. Whether you need specialized agent systems to automate operations, end-to-end solutions to unlock growth, or expert consulting to transform your vision into an actionable roadmap, we deliver intelligence where it matters most—providing you with a comprehensive advantage.",

    'services.consulting.title': 'AI Solutions',
    'services.consulting.description': "We solve your most pressing problems with high-performance AI solutions. From advanced data analysis to complete process optimization, we design and implement end-to-end intelligent systems that conquer your challenges and unlock significant opportunities for growth.",

    'services.ai.title': 'AI Consulting for All',
    'services.ai.description': "We provide expert AI consulting to clarify your journey. Whether you are just beginning to explore artificial intelligence or are looking to scale existing capabilities, our strategists provide the direct, expert guidance needed to transform your vision into a viable and impactful AI roadmap.",

    'services.cloud.title': 'AI Agents',
    'services.cloud.description': "We create specialized AI agent systems tailored to your unique operational needs. These intelligent agents automate complex workflows, handle critical tasks with precision around the clock, and work tirelessly to drive new levels of efficiency throughout your organization.",

    'services.blockchain.title': 'Blockchain Solutions',
    'services.blockchain.tagline': 'Your Operations, Transparent and Decentralized.',
    'services.blockchain.description': 'Traditional systems cost money, time, and are vulnerable to misuse/hacks. We leverage blockchain technology to build systems for supply chain transparency, secure smart contracts, and truly decentralized applications that redefine transparency and efficiency in your operations.',

    'services.cybersecurity.title': 'Cybersecurity Solutions',
    'services.cybersecurity.tagline': 'Your Defense, Fortified.',
    'services.cybersecurity.description': "The digital landscape is constantly evolving, and a reactive defensive strategy is no longer enough. We act as your security partner, building resilient, adaptive defenses to not only detect, but neutralize tomorrow's threats. We don't just protect you from today's threats; we anticipate and neutralize tomorrow's.",

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.location': 'Saudi Arabia, Riyadh',
    'contact.phone': 'P +966 533636592',
    'contact.ask': 'Ask Us Anything',
    'contact.request': 'General Information Request',
    'contact.firstName': 'FIRST NAME',
    'contact.lastName': 'LAST NAME',
    'contact.email': 'EMAIL',
    'contact.position': 'POSITION',
    'contact.country': 'COUNTRY',
    'contact.city': 'CITY',
    'contact.submit': 'Submit',
    'contact.submitting': 'Submitting...',
    'contact.successMessage': 'Thank you! Your information has been submitted successfully.',
    'contact.errorMessage': 'Failed to submit. Please try again.',

    'home.why.feature1.title': 'No Bullshit Value.',
    'home.why.feature1.description': 'From our experience, we know that important builds to significant savings. We base important systems, focusing content & results, no marketing and promises, rather than operational reach and delivery driven.',
    'home.why.feature2.title': 'We See Everything.',
    'home.why.feature2.description': 'People need thinking. We tackle your problem from every angle—strategy, security, and execution—ensuring nothing is missed.',
    'home.why.feature3.title': 'No Are They Done.',
    'home.why.feature3.description': "We integrate directly with you, like Aim, but efficient, and execution, and we execute to your success or it's done and complete.",

    // Footer
    'footer.description': 'Aql is that path. We are a dedicated team of AI strategists and engineers focused on one mission: harnessing the transformative power of Artificial Intelligence to build precisely what you need, faster. We move beyond generic platforms to deliver bespoke AI systems that turn your strategic goals into operational realities.',
    'footer.services': 'Services',
    'footer.aiagents': 'AI Agents',
    'footer.aisolutions': 'AI Solutions',
    'footer.aiconsulting': 'AI Consulting',
    'footer.copyright': '© 2024 AQL. All rights reserved.',
    'footer.madeIn': 'Made in Saudi Arabia',
  },
  ar: {
    // Header
    'nav.about': 'حول',
    'nav.services': 'خدمات',
    'nav.contact': 'اتصل بنا',

    // Home Page - Slide 1
    'home.hero.title': 'مهمتنا في عصر الذكاء',
    'home.hero.subtitle': 'في عالم مثقل بالبيانات والتعقيد، يستحق طموحك مسارًا ذكيًا للأمام.',

    // Slide 2
    'home.slide2.title': 'هدفنا هو اختراق الضوضاء وتقديم قدرات الذكاء الاصطناعي الدقيقة التي تحتاجها للفوز.',
    'home.slide2.subtitle': 'نتصور مستقبلاً حيث عقل هو الشريك الافتراضي للمنظمات التي تقدر النتائج الملموسة والذكية على الحديث الفارغ.',

    // Slide 3
    'home.slide3.title': 'في جوهرنا، هدفنا هو إزالة الغموض عن الذكاء الاصطناعي.',
    'home.slide3.subtitle': 'مما يجعل قوته المتطورة بسيطة وفعالة ومتاحة لأعمالك وتحويله من تحدٍ معقد إلى أعظم ميزة تنافسية لك.',

    // Section 4 - Core AI Offerings
    'home.offerings.title': 'عروض الذكاء الاصطناعي الأساسية لدينا',
    'home.offerings.subtitle': 'نحل المشكلات الحرجة من خلال تصميم ونشر الذكاء الاصطناعي القوي والمركز. تم بناء عروضنا لتقديم الذكاء حيث يهم أكثر، مما يوفر لك ميزة سلسة وشاملة.',
    'home.offerings.tagline': 'تقديم الذكاء حيث يهم أكثر',

    // AI Agents Box
    'home.aiagents.title': 'وكلاء الذكاء الاصطناعي',
    'home.aiagents.description': 'وكلاء ذكاء اصطناعي مخصصون لأتمتة المهام المعقدة وتعزيز الكفاءة.',

    // AI Solutions Box
    'home.aisolutions.title': 'حلول الذكاء الاصطناعي',
    'home.aisolutions.description': 'حلول الذكاء الاصطناعي الشاملة لحل التحديات الرئيسية ودفع النمو.',

    // AI Consulting Box
    'home.aiconsulting.title': 'استشارات الذكاء الاصطناعي',
    'home.aiconsulting.description': 'استشارات خبيرة لتحويل رؤيتك للذكاء الاصطناعي إلى خارطة طريق ناجحة.',

    // Section 5 - The Aql Advantage
    'home.advantage.title': 'ميزة عقل',
    'home.advantage.description': 'الفرق في نهجنا هو تركيزنا الحصري. نحن لا نبني الذكاء الاصطناعي فقط؛ بل نهندس القيمة الذكية. من خلال تحليل كل تحدٍ من منظور شامل يركز على الذكاء الاصطناعي، نحدد فرص الأتمتة والتحسين التي يفتقدها الآخرون. خبرتنا في تصميم ونشر الذكاء الاصطناعي المخصص تقدم تأثيرًا إيجابيًا مباشرًا على أرباحك النهائية من خلال تبسيط العمليات والكشف عن كفاءات جديدة قوية. نحن نعمل بسرعة الابتكار. عالم الذكاء الاصطناعي لا ينتظر، ونحن كذلك. تضمن منهجيتنا الرشيقة تقديم حلول ذكية متفوقة في جدول زمني متسارع. أكثر من مجرد بائع، نصبح امتدادًا لفريقك. نتكامل مباشرة، ونستمع بعناية لاحتياجاتك، ونلتزم بنجاحك بالشغف والتركيز الذي لا يمكن إلا لمتخصص حقيقي في الذكاء الاصطناعي تقديمه. توقف عن مطاردة الاتجاهات. ابدأ في بناء حلول ذكية مع عقل.',

    // Section 6 - About Aql
    'home.about.description': 'عقل هو ذلك المسار. نحن فريق مخصص من استراتيجيي ومهندسي الذكاء الاصطناعي يركزون على مهمة واحدة: تسخير القوة التحويلية للذكاء الاصطناعي لبناء ما تحتاجه بالضبط، بشكل أسرع. نتجاوز المنصات العامة لتقديم أنظمة ذكاء اصطناعي مخصصة تحول أهدافك الاستراتيجية إلى حقائق تشغيلية.',

    'home.partners.title': 'لقد شاركنا مع أكثر من 70',
    'home.partners.subtitle': 'شركة تقنية رائدة',

    // About Page
    'about.title': 'معلومات عنا',
    'about.p1': 'في AQL، نحن أكثر من مجرد مزود حلول تقنية - نحن شريكك الاستراتيجي في التحول الرقمي. مع أكثر من عقد من الخبرة والشراكات مع أكثر من 70 شركة تقنية رائدة، نقدم خبرة لا مثيل لها في كل مشروع.',
    'about.p2': 'يتخصص فريق خبرائنا في تقديم حلول موجهة للنتائج عبر البنية التحتية السحابية والذكاء الاصطناعي والأمن السيبراني وتقنية البلوكشين والاستشارات الاستراتيجية. نحن لا نؤمن بالوعود الفارغة أو الكلمات الطنانة - نؤمن بالنتائج القابلة للقياس والشراكات الدائمة.',
    'about.p3': 'تأسست على مبدأ أن المنظمات تستحق شركاء يقدرون النتائج على الكلام، لقد ساعدنا المئات من الشركات على التنقل في التعقيد والقضاء على الاحتكاك وتحقيق أهدافهم الأكثر طموحًا.',

    // Services Page
    'services.title': 'خدمات',
    'services.subtitle': 'ذكاء اصطناعي مركّز للحصول على ميزة شاملة',
    'services.explore': '',
    'services.intro.title': 'ذكاء اصطناعي مركّز للحصول على ميزة شاملة',
    'services.intro.description': 'نحل مشاكلك الأكثر أهمية وإلحاحًا من خلال تصميم ونشر ذكاء اصطناعي قوي ومركّز. سواء كنت بحاجة إلى أنظمة وكلاء متخصصة لأتمتة العمليات، أو حلول شاملة لفتح النمو، أو استشارات خبيرة لتحويل رؤيتك إلى خارطة طريق قابلة للتنفيذ، نقدم الذكاء حيث يهم أكثر—مما يوفر لك ميزة شاملة.',

    'services.consulting.title': 'حلول الذكاء الاصطناعي',
    'services.consulting.description': 'نحل مشاكلك الأكثر إلحاحًا بحلول ذكاء اصطناعي عالية الأداء. من التحليل المتقدم للبيانات إلى التحسين الكامل للعمليات، نصمم وننفذ أنظمة ذكية شاملة تتغلب على تحدياتك وتفتح فرصًا كبيرة للنمو.',

    'services.ai.title': 'استشارات الذكاء الاصطناعي للجميع',
    'services.ai.description': 'نقدم استشارات خبيرة في الذكاء الاصطناعي لتوضيح رحلتك. سواء كنت قد بدأت للتو في استكشاف الذكاء الاصطناعي أو تتطلع إلى توسيع نطاق القدرات الحالية، يقدم استراتيجيونا التوجيه الخبير المباشر اللازم لتحويل رؤيتك إلى خارطة طريق ذكاء اصطناعي قابلة للتطبيق ومؤثرة.',

    'services.cloud.title': 'وكلاء الذكاء الاصطناعي',
    'services.cloud.description': 'نقوم بإنشاء أنظمة وكلاء ذكاء اصطناعي متخصصة مصممة خصيصًا لاحتياجاتك التشغيلية الفريدة. يقوم هؤلاء الوكلاء الأذكياء بأتمتة سير العمل المعقد، والتعامل مع المهام الحرجة بدقة على مدار الساعة، والعمل بلا كلل لدفع مستويات جديدة من الكفاءة في جميع أنحاء مؤسستك.',

    'services.blockchain.title': 'حلول البلوكشين',
    'services.blockchain.tagline': 'عملياتك، شفافة ولامركزية.',
    'services.blockchain.description': 'الأنظمة التقليدية تكلف المال والوقت وهي عرضة لسوء الاستخدام / الاختراقات. نستفيد من تقنية البلوكشين لبناء أنظمة لشفافية سلسلة التوريد والعقود الذكية الآمنة والتطبيقات اللامركزية حقًا التي تعيد تعريف الشفافية والكفاءة في عملياتك.',

    'services.cybersecurity.title': 'حلول الأمن السيبراني',
    'services.cybersecurity.tagline': 'دفاعك، محصن.',
    'services.cybersecurity.description': 'المشهد الرقمي يتطور باستمرار، واستراتيجية الدفاع التفاعلية لم تعد كافية. نحن نعمل كشريك أمني لك، نبني دفاعات مرنة وقابلة للتكيف ليس فقط لاكتشاف، ولكن لتحييد تهديدات الغد. نحن لا نحميك فقط من تهديدات اليوم؛ نحن نتوقع ونحيد تهديدات الغد.',

    // Contact Page
    'contact.title': 'اتصل بنا',
    'contact.location': 'المملكة العربية السعودية، الرياض',
    'contact.phone': 'هاتف +966 533636592',
    'contact.ask': 'اسألنا أي شيء',
    'contact.request': 'طلب معلومات عامة',
    'contact.firstName': 'الاسم الأول',
    'contact.lastName': 'اسم العائلة',
    'contact.email': 'البريد الإلكتروني',
    'contact.position': 'المنصب',
    'contact.country': 'الدولة',
    'contact.city': 'المدينة',
    'contact.submit': 'إرسال',
    'contact.submitting': 'جاري الإرسال...',
    'contact.successMessage': 'شكرا لك! تم إرسال معلوماتك بنجاح.',
    'contact.errorMessage': 'فشل الإرسال. يرجى المحاولة مرة أخرى.',

    'home.why.feature1.title': 'قيمة حقيقية بدون هراء.',
    'home.why.feature1.description': 'من خبرتنا، نعلم أن المهم يبني إلى توفير كبير. نبني أنظمة مهمة، نركز على المحتوى والنتائج، لا تسويق ووعود، بدلاً من الوصول التشغيلي والتسليم المدفوع.',
    'home.why.feature2.title': 'نرى كل شيء.',
    'home.why.feature2.description': 'الناس بحاجة إلى التفكير. نعالج مشكلتك من كل زاوية - الاستراتيجية والأمن والتنفيذ - مما يضمن عدم تفويت أي شيء.',
    'home.why.feature3.title': 'لا نتوقف حتى ننتهي.',
    'home.why.feature3.description': 'نتكامل مباشرة معك، مثل Aim، لكن بكفاءة وتنفيذ، ونعمل على نجاحك أو يتم إنجازه واكتماله.',

    // Footer
    'footer.description': 'عقل هو ذلك المسار. نحن فريق مخصص من استراتيجيي ومهندسي الذكاء الاصطناعي يركزون على مهمة واحدة: تسخير القوة التحويلية للذكاء الاصطناعي لبناء ما تحتاجه بالضبط، بشكل أسرع. نتجاوز المنصات العامة لتقديم أنظمة ذكاء اصطناعي مخصصة تحول أهدافك الاستراتيجية إلى حقائق تشغيلية.',
    'footer.services': 'خدمات',
    'footer.aiagents': 'وكلاء الذكاء الاصطناعي',
    'footer.aisolutions': 'حلول الذكاء الاصطناعي',
    'footer.aiconsulting': 'استشارات الذكاء الاصطناعي',
    'footer.copyright': '© 2024 AQL. جميع الحقوق محفوظة.',
    'footer.madeIn': 'صنع في المملكة العربية السعودية',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(savedLanguage)

    if (savedLanguage === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)

    if (newLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, isArabic: language === 'ar', toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
