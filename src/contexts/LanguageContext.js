import React, { createContext, useContext, useState } from "react";

// Language context
const LanguageContext = createContext();

// Comprehensive translation data for the entire website
const translations = {
  MK: {
    // Navigation
    home: "ПОЧЕТНА",
    about: "ЗА НАС",
    activities: "КАРИЕРИ",
    brands: "БРЕНДОВИ",
    catalogs: "КАТАЛОЗИ",
    news: "ВЕСТИ",
    gallery: "ГАЛЕРИЈА",
    contact: "КОНТАКТ",
    companyName: "Даути-ТранспортШпед",

    // Home page
    homeTitle: "Поврзување на вашиот товар со прецизност и грижа",

    // About page
    aboutTitle: "За Даути-Транспорт-Шпед",
    aboutSubtitle:
      "Ние нудиме транспортни и логистички услуги со високи стандарди за нашите клиенти.",
    ourExperience: "Нашето искуство",
    ourExperienceDesc:
      "Потребите на пазарот во не толку економски развиена земја доведоа до развој на бизнис идеја како резултат на постоечките пазарни можности. Токму во 2003 година, беше воспоставено партнерство помеѓу браќата Даути и Рамадани, кое денес стои како една од компаниите со највисок бруто профит во земјата. Нашата компанија има над 20 години искуство во увоз и извоз на различни стоки во различни земји.",
    goodsSafety: "Безбедност на стоките",
    goodsSafetyDesc:
      "Безбедноста на стоките е наш приоритет. Користењето на напредна технологија и модерна опрема ни овозможува да следиме секоја фаза од патувањето, осигурувајќи навремени и без оштетувања испораки. Оваа посветеност на квалитетот и сигурноста ни донесе репутација како доверлив лидер на пазарот. Дополнително, нашата посветеност на континуирано подобрување гарантира напреден систем кој обезбедува целосна заштита и сигурност за секоја пратка.",
    customerService: "Клиентска услуга",
    customerServiceDesc:
      "Нашиот посветен тим е ангажиран да нуди исклучителна поддршка и брзи решенија за нашите клиенти. Ние ставаме приоритет на задоволството на клиентите со обезбедување јасна комуникација, брзо решавање на проблемите и нудење прилагодена помош за задоволување на индивидуалните потреби. Со фокус на ефикасност и сигурност, осигуруваме дека секој клиент добива внимание и грижа што ги заслужува, помагајќи им да се движат низ сите предизвици со леснотија.",

    // Careers page
     currentOpenings: "Достапни работни позиции",
    position: "Позиција",
    applyNow: "Аплицирај Сега",
    noOpenings: "Во моментов нема достапни позиции.",
    lookingForOpportunities: "Барате нови можности за кариера?",
    contactForJobs: "Контактирајте на",
    forMoreJobs: "за повеќе работни позиции.",
    job1Desc: "Координатор на логистика: Управувајте со дневните операции на пратки, планирање на рути и оптимизација на трошоците.",
    job2Desc: "Специјалист за транспорт на стоки: Координирајте меѓународно движење на стоки и обезбедете усогласеност со царината.",
    job3Desc: "Менаџер на флота: Надгледувајте го одржувањето на возниот парк и обезбедете оперативна ефикасност.",
    job4Desc: "Претставник за корисничка поддршка - Логистика: Поддржувајте клиенти за време на процесот на испорака и решавајте проблеми.",
    job5Desc: "Супервизор на складиште: Управувајте со дневните операции во складиштето, инвентарот и координацијата на тимот.",
    job6Desc: "Аналитичар за оптимизација на рути: Анализирајте ги рутите за достава за да ја подобрите ефикасноста на време и трошоци.",
    noDescription: "Нема достапен опис.",

    // Contact page
    contactTitle: "Контакт",
    contactSubtitle: "Стaпите во контакт со нас за сите ваши прашања и барања",
    getInTouch: "Стaпите во контакт",
    getInTouchDesc:
      "Нашиот тим е тука за да ви помогне. Слободно контактирајте нè за сите прашања или барања.",
    contactInfo: "Контакт информации",
    address: "Адреса",
    addressValue: "Скопје, Македонија",
    phoneLabel: "Телефон",
    emailLabel: "Е-пошта",
    workingHours: "Работно време",
    workingHoursValue: "Понеделник - Петок: 8:00 - 17:00",
    sendMessage: "Испрати порака",
    name: "Име",
    subject: "Предмет",
    messageLabel: "Порака",
    send: "Испрати",

    // Form validation
    required: "Потребно е",
    invalidEmail: "Невалидна е-пошта",
    invalidPhone: "Невалиден телефон",

    // Success/Error messages
    messageSent: "Пораката е успешно испратена!",
    messageError: "Грешка при испраќање на пораката. Обидете се повторно.",
    applicationSent: "Апликацијата е успешно испратена!",
    applicationError:
      "Грешка при испраќање на апликацијата. Обидете се повторно.",

    // Form and UI elements
    yourInformation: "Вашите информации",

    // Additional career translations
    lookingForOpportunities: "Барате нови кариерни можности?",
    contactForJobs: "Контактирајте нè на",
    forMoreJobs: "за повеќе работни позиции.",
    job1Desc:
      "Логистички координатор: Управување со дневните операции за пратки, планирање на рути и осигурување оптимизација на трошоците.",
    job2Desc:
      "Специјалист за товарни превози: Координација на меѓународно движење на стоки и осигурување усогласеност со царинските прописи.",
    job3Desc:
      "Менаџер на флота: Надгледување на одржување на возилата и осигурување оперативна ефикасност.",
    job4Desc:
      "Представник за клиентска услуга - Логистика: Поддршка на клиентите за време на процесот на испорака и решавање проблеми.",
    job5Desc:
      "Супервизор на магацин: Управување со дневните операции на магацин, залихи и координација на тимот.",
    job6Desc:
      "Аналитичар за оптимизација на рути: Анализа на рути за испорака за подобрување на трошоците и временската ефикасност.",
    noDescription: "Нема достапно опишување.",
  },

  AL: {
    // Navigation
    home: "KRYEFAQJA",
    about: "RRETH NESH",
    activities: "KARRIERA",
    brands: "BRENDE",
    catalogs: "KATALOGE",
    news: "LAJME",
    gallery: "GALERI",
    contact: "KONTAKT",
    companyName: "Dauti-TransportShped",

    // Home page
    homeTitle: "Lidhja e ngarkesës suaj me precizion dhe kujdes",

    // About page
    aboutTitle: "Rreth Dauti-Transport-Shped",
    aboutSubtitle:
      "Ne ofrojmë shërbime transporti dhe logjistike me standarde të larta për klientët tanë.",
    ourExperience: "Eksperienca jonë",
    ourExperienceDesc:
      "Nevojat e tregut në një vend jo aq të zhvilluar ekonomikisht çuan në zhvillimin e një ideje biznesi si rezultat i mundësive ekzistuese të tregut. Pikërisht në vitin 2003, u vendos një partneritet midis vëllezërve Dauti dhe Ramadani, i cili sot qëndron si një nga kompanitë me fitimin bruto më të lartë në vend. Kompania jonë ka më shumë se 20 vjet eksperiencë në import dhe eksport të mallrave të ndryshme në vende të ndryshme.",
    goodsSafety: "Siguria e mallrave",
    goodsSafetyDesc:
      "Siguria e mallrave është prioriteti ynë kryesor. Përdorimi ynë i teknologjisë së avancuar dhe ekipit modern na lejon të monitorojmë çdo fazë të udhëtimit, duke siguruar dërgime të përkohshme dhe pa dëmtime. Ky angazhim për cilësi dhe besueshmëri na ka fituar reputacionin si lider i besueshëm në treg. Gjithashtu, dedikimi ynë për përmirësimin e vazhdueshëm garanton një sistem të avancuar që ofron mbrojtje të plotë dhe besueshmëri për çdo dërgesë.",
    customerService: "Shërbimi ndaj klientit",
    customerServiceDesc:
      "Ekipi ynë i dedikuar është i angazhuar për të ofruar mbështetje të jashtëzakonshme dhe zgjidhje të shpejta për klientët tanë. Ne japim prioritet kënaqësisë së klientit duke ofruar komunikim të qartë, duke adresuar shqetësimet në kohë dhe duke ofruar ndihmë të përshtatur për të plotësuar nevojat individuale. Me fokus në efikasitet dhe besueshmëri, ne sigurojmë që çdo klient të marrë vëmendjen dhe kujdesin që meriton, duke i ndihmuar ata të lundrojnë në çdo sfidë me lehtësi.",

    // Careers page
     currentOpenings: "Pozitat e Disponueshme të Punës",
    position: "Pozita",
    applyNow: "Apliko Tani",
    noOpenings: "Aktualisht nuk ka pozita të hapura.",
    lookingForOpportunities: "Dëshironi mundësi të reja karriere?",
    contactForJobs: "Kontaktoni në",
    forMoreJobs: "për pozita të tjera pune.",
    job1Desc: "Koordinator Logjistike: Menaxhoni operacionet ditore të dërgesave, planifikimin e rrugëve dhe optimizimin e kostove.",
    job2Desc: "Specialist Transporti i Mallrave: Koordinoni lëvizjen ndërkombëtare të mallrave dhe sigurohuni për pajtueshmërinë doganore.",
    job3Desc: "Menaxher i Flotës: Mbikëqyrni mirëmbajtjen e flotës së automjeteve dhe sigurohuni për efikasitetin operativ.",
    job4Desc: "Përfaqësues Shërbimi për Klientët - Logjistikë: Mbështet klientët gjatë procesit të transportit dhe zgjidh problemet.",
    job5Desc: "Supervizor Depo: Menaxhoni operacionet ditore të depozitimit, inventarin dhe koordinimin e ekipit.",
    job6Desc: "Analist Optimizimi i Rrugëve: Analizoni rrugët e dorëzimit për të përmirësuar kohën dhe kostot.",
    noDescription: "Nuk ka përshkrim të disponueshëm.",

    // Contact page
    contactTitle: "Kontakti",
    contactSubtitle: "Na kontaktoni për të gjitha pyetjet dhe kërkesat tuaja",
    getInTouch: "Na kontaktoni",
    getInTouchDesc:
      "Ekipi ynë është këtu për t'ju ndihmuar. Mos hezitoni të na kontaktoni për çdo pyetje ose kërkesë.",
    contactInfo: "Informacionet e kontaktit",
    address: "Adresa",
    addressValue: "Shkup, Maqedoni",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    workingHours: "Orari i punës",
    workingHoursValue: "E hënë - E premte: 8:00 - 17:00",
    sendMessage: "Dërgo mesazh",
    name: "Emri",
    subject: "Subjekti",
    messageLabel: "Mesazhi",
    send: "Dërgo",

    // Form validation
    required: "Kërkohet",
    invalidEmail: "Email i pavlefshëm",
    invalidPhone: "Telefon i pavlefshëm",

    // Success/Error messages
    messageSent: "Mesazhi u dërgua me sukses!",
    messageError:
      "Gabim gjatë dërgimit të mesazhit. Ju lutemi provoni përsëri.",
    applicationSent: "Aplikimi u dërgua me sukses!",
    applicationError:
      "Gabim gjatë dërgimit të aplikimit. Ju lutemi provoni përsëri.",

    // Form and UI elements
    yourInformation: "Informacionet tuaja",

    // Additional career translations
    lookingForOpportunities: "Duke kërkuar mundësi të reja karriere?",
    contactForJobs: "Na kontaktoni në",
    forMoreJobs: "për më shumë pozicione pune.",
    job1Desc:
      "Koordinues i Logjistikës: Menaxhimi i operacioneve ditore të dërgesave, planifikimi i rrugëve dhe sigurimi i optimizimit të kostove.",
    job2Desc:
      "Specialist i Transportit të Mallrave: Koordinimi i lëvizjes ndërkombëtare të mallrave dhe sigurimi i përputhshmërisë doganore.",
    job3Desc:
      "Menaxher i Flotës: Mbikëqyrja e mirëmbajtjes së flotës së automjeteve dhe sigurimi i efikasitetit operacional.",
    job4Desc:
      "Përfaqësues i Shërbimit ndaj Klientit - Logjistikë: Mbështetja e klientëve gjatë procesit të transportit dhe zgjidhja e problemeve.",
    job5Desc:
      "Supervizor i Depove: Menaxhimi i operacioneve ditore të depove, inventarit dhe koordinimit të ekipit.",
    job6Desc:
      "Analist i Optimizimit të Rrugëve: Analiza e rrugëve të dërgesave për të përmirësuar efikasitetin e kostove dhe kohës.",
    noDescription: "Nuk ka përshkrim të disponueshëm.",
  },

  EN: {
    // Navigation
    home: "HOME",
    about: "ABOUT",
    activities: "CAREERS",
    brands: "BRANDS",
    catalogs: "CATALOGS",
    news: "NEWS",
    gallery: "GALLERY",
    contact: "CONTACT",
    companyName: "Dauti-TransportShped",

    // Home page
    homeTitle: "Connecting Your Cargo with Precision and Care",

    // About page
    aboutTitle: "About Dauti-Transport-Shped",
    aboutSubtitle:
      "We offer transportation and logistics services with high standards for our clients.",
    ourExperience: "Our Experience",
    ourExperienceDesc:
      "The market needs in a not-so-economically developed country led to the development of a business idea as a result of the existing market opportunities. Precisely in 2003, a partnership was established between the Dauti and Ramadani brothers, which today stands as one of the companies with the highest gross profit in the country. Our company has over 20 years of experience in importing and exporting various goods across different countries.",
    goodsSafety: "Goods Safety",
    goodsSafetyDesc:
      "Goods safety is our top priority. Our use of advanced technology and modern equipment allows us to monitor every stage of the journey, ensuring timely and damage-free deliveries. This commitment to quality and reliability has earned us a reputation as a trusted leader in the market. Additionally, our dedication to continuous improvement guarantees an advanced system that provides full protection and reliability for every shipment.",
    customerService: "Customer Service",
    customerServiceDesc:
      "Our dedicated team is committed to offering exceptional support and fast solutions for our clients. We prioritize customer satisfaction by providing clear communication, addressing concerns promptly, and offering tailored assistance to meet individual needs. With a focus on efficiency and reliability, we ensure that every client receives the attention and care they deserve, helping them navigate any challenges with ease.",

    // Careers page
     currentOpenings: "Available Job Positions",
    position: "Position",
    applyNow: "Apply Now",
    noOpenings: "There are currently no openings.",
    lookingForOpportunities: "Looking for new career opportunities?",
    contactForJobs: "Contact us at",
    forMoreJobs: "for more job positions.",
    job1Desc: "Logistics Coordinator: Manage daily shipment operations, route planning, and ensure cost optimization.",
    job2Desc: "Freight Forwarding Specialist: Coordinate international movement of goods and ensure customs compliance.",
    job3Desc: "Fleet Manager: Oversee vehicle fleet maintenance and ensure operational efficiency.",
    job4Desc: "Customer Service Representative - Logistics: Support clients during the shipping process and resolve issues.",
    job5Desc: "Warehouse Supervisor: Manage daily warehouse operations, inventory, and team coordination.",
    job6Desc: "Route Optimization Analyst: Analyze delivery routes to improve cost and time efficiency.",
    noDescription: "No description available.",

    // Contact page
    contactTitle: "Contact",
    contactSubtitle: "Get in touch with us for all your questions and requests",
    getInTouch: "Get In Touch",
    getInTouchDesc:
      "Our team is here to help. Feel free to contact us for any questions or requests.",
    contactInfo: "Contact Information",
    address: "Address",
    addressValue: "Skopje, Macedonia",
    phoneLabel: "Phone",
    emailLabel: "Email",
    workingHours: "Working Hours",
    workingHoursValue: "Monday - Friday: 8:00 - 17:00",
    sendMessage: "Send Message",
    name: "Name",
    subject: "Subject",
    messageLabel: "Message",
    send: "Send",

    // Form validation
    required: "Required",
    invalidEmail: "Invalid email",
    invalidPhone: "Invalid phone number",

    // Success/Error messages
    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    applicationSent: "Application sent successfully!",
    applicationError: "Error sending application. Please try again.",

    // Form and UI elements
    yourInformation: "Your Information",

    // Additional career translations
    lookingForOpportunities: "Looking for new career opportunities?",
    contactForJobs: "Contact us at",
    forMoreJobs: "for more job positions.",
    job1Desc:
      "Logistics Coordinator: Manage daily shipment operations, route planning, and ensure cost optimization.",
    job2Desc:
      "Freight Forwarding Specialist: Coordinate international movement of goods and ensure customs compliance.",
    job3Desc:
      "Fleet Manager: Oversee vehicle fleet maintenance and ensure operational efficiency.",
    job4Desc:
      "Customer Service Representative - Logistics: Support clients during the shipping process and resolve issues.",
    job5Desc:
      "Warehouse Supervisor: Manage daily warehouse operations, inventory, and team coordination.",
    job6Desc:
      "Route Optimization Analyst: Analyze delivery routes to improve cost and time efficiency.",
    noDescription: "No description available.",
  },
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Load saved language from localStorage, default to MK
    return localStorage.getItem("selectedLanguage") || "MK";
  });

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Store the selected language in localStorage for persistence
    localStorage.setItem("selectedLanguage", language);
  };

  // Get current translations
  const currentTranslations = translations[selectedLanguage];

  const value = {
    selectedLanguage,
    setSelectedLanguage,
    handleLanguageChange,
    translations,
    currentTranslations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
