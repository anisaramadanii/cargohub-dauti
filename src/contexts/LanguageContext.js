import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  MK: {
    home: "ПОЧЕТНА",
    about: "ЗА НАС",
    activities: "НАШИОТ ТИМ",
    brands: "БРЕНДОВИ",
    catalogs: "КАТАЛОЗИ",
    news: "ВЕСТИ",
    gallery: "ГАЛЕРИЈА",
    contact: "КОНТАКТ",
    companyName: "Даути-ТранспортШпед",

    // Home page
    homeTitle: "Секогаш и насекаде, се приближуваме до вашиот бизнис…",

    // About page
    aboutTitle: "За Даути-Транспорт-Шпед",
    aboutSubtitle:
      "Ние нудиме транспортни и логистички услуги со високи стандарди за нашите клиенти.",
    ourExperience: "Нашето искуство",
    ourExperienceDesc:
      "Пазарните потреби во една не толку економски развиена земја доведоа до развој на бизнис идеја како резултат на постоечките пазарни можности. Токму во 2003 година беше воспоставено партнерство помеѓу браќата Даути и Рамадани, кое денес претставува една од компаниите со највисок бруто-профит во земјата. Нашата компанија има над 20 години искуство во увоз и извоз на разни стоки во различни земји.",
    goodsSafety: "Безбедност на стоките",
    goodsSafetyDesc:
      "Безбедноста на стоките е наш врвен приоритет. Нашата употреба на напредна технологија и современа опрема ни овозможува да го следиме секој стадиум од патувањето, обезбедувајќи навремени и безоштетни испораки. Оваа посветеност на квалитет и доверливост ни ја донесе репутацијата на сигурен лидер на пазарот. Дополнително, нашата посветеност на континуирано унапредување гарантира напреден систем кој обезбедува целосна заштита и доверливост за секоја пратка.",
    customerService: "Клиентска услуга",
    customerServiceDesc:
      "Нашиот посветен тим е посветен на нудење извонредна поддршка и брзи решенија за нашите клиенти. Ние го ставаме задоволството на клиентите во прв план преку обезбедување јасна комуникација, навремено адресирање на загриженостите и понуда на прилагодена помош за задоволување на индивидуалните потреби. Со фокус на ефикасност и доверливост, обезбедуваме секој клиент да ја добие вниманието и грижата што ја заслужува, помагајќи му лесно да се справи со какви било предизвици.",
    readMore: "Прочитај повеќе",

    // Careers page
    aboutMacedonia:
      "Dauti Transport Shped е првата компанија основана во Сарај, Северна Македонија, која постигна брз успех благодарение на професионалноста и доверливите услуги. Со текот на времето, компанијата се прошири надвор од државните граници, отворајќи подружници и во други земји, и стана препознатливо име во областа на транспортот и логистиката. Денес, Dauti Transport Shped претставува симбол на посветеност, квалитет и континуиран развој.",
    aboutAlbania:
      " Dauti Transportsped Sh.p.k. е сигурна и професионална транспортна компанија основана во 2019 година со седиште во Џафзотај Вррине,Драч, Албанија. Со долгогодишно искуство во логистиката и транспортот, нудиме квалитетни услуги за транспорт на различни видови товари, како на домашен така и на меѓународен пазар. Нашиот тим е посветен на навремена и безбедна достава, прилагодена на потребите на секој клиент. Користиме современа опрема и технологии за да обезбедиме максимална ефикасност и сигурност во процесот на транспорт. Целта ни е да изградиме долгорочни партнерства преку професионалност и доверба.",
    aboutKroacia:
      " Dauti Transportšped d.o.o. е доверлива и професионална компанија е основана во 2021 година со седиште на ул.Павлинска улица 5,42000 Вараждин, Р.Хрватска, специјализирана за транспорт и логистички услуги.Со долгогодишно искуство во транспортната индустрија, нудиме квалитетни и безбедни решенија за сите видови товари, како на домашен така и на меѓународен план. Нашиот тим од стручни лица е посветен на навремена достава и задоволство на клиентите, користејќи модерна опрема и прилагодени логистички услуги.",

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

    required: "Потребно е",
    invalidEmail: "Невалидна е-пошта",
    invalidPhone: "Невалиден телефон",

    messageSent: "Пораката е успешно испратена!",
    messageError: "Грешка при испраќање на пораката. Обидете се повторно.",
    applicationSent: "Апликацијата е успешно испратена!",
    applicationError:
      "Грешка при испраќање на апликацијата. Обидете се повторно.",

    yourInformation: "Вашите информации",
  },

  AL: {
    home: "KRYEFAQJA",
    about: "RRETH NESH",
    activities: "EKIPI YNË",
    brands: "BRENDE",
    catalogs: "KATALOGE",
    news: "LAJME",
    gallery: "GALERI",
    contact: "KONTAKT",
    companyName: "Dauti-TransportShped",

    // Home page
    homeTitle: "Kudo, çdoherë, ne afrohemi pranë biznesit tuaj…",

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
    readMore: "Lexo më shumë",

    // Careers page
    aboutMacedonia:
      "Dauti Transport Shped është kompania e parë e themeluar në Saraj, Maqedonia e Veriut, e cila arriti sukses të shpejtë falë profesionalizmit dhe shërbimeve të besueshme. Me kalimin e kohës, kompania u zgjerua jashtë kufijve shtetërorë, duke hapur degë edhe në vende të tjera, dhe u bë një emër i njohur në fushën e transportit dhe logjistikës. Sot, Dauti Transport Shped përfaqëson një simbol të përkushtimit, cilësisë dhe zhvillimit të vazhdueshëm.",
    aboutAlbania:
      "Dauti Transportsped Sh.p.k. është një kompani transporti e sigurt dhe profesionale, e themeluar në vitin 2019 me seli në Zhafzotaj Vrrine, Durrës, Shqipëri. Me eksperiencë të gjatë në logjistikë dhe transport, ne ofrojmë shërbime cilësore për transportin e llojeve të ndryshme të ngarkesave, si në tregun vendas, ashtu edhe në atë ndërkombëtar. Ekipi ynë është i përkushtuar për dorëzime të sigurta dhe në kohë, të përshtatura sipas nevojave të çdo klienti. Ne përdorim pajisje dhe teknologji moderne për të siguruar efikasitet dhe siguri maksimale gjatë procesit të transportit. Qëllimi ynë është të ndërtojmë partneritete afatgjata përmes profesionalizmit dhe besueshmërisë.",
    aboutKroacia:
      "Dauti Transportšped d.o.o. është një kompani e besueshme dhe profesionale, e themeluar në vitin 2021 me seli në ul. Pavlinska 5, 42000 Varaždin, Kroaci, e specializuar në shërbime transporti dhe logjistike. Me përvojë të gjatë në industrinë e transportit, ne ofrojmë zgjidhje cilësore dhe të sigurta për të gjitha llojet e ngarkesave, si në tregun vendas, ashtu edhe në atë ndërkombëtar. Ekipi ynë i ekspertëve është i përkushtuar për dorëzime në kohë dhe kënaqësinë e klientëve, duke përdorur pajisje moderne dhe shërbime logjistike të personalizuara.",

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

    required: "Kërkohet",
    invalidEmail: "Email i pavlefshëm",
    invalidPhone: "Telefon i pavlefshëm",

    messageSent: "Mesazhi u dërgua me sukses!",
    messageError:
      "Gabim gjatë dërgimit të mesazhit. Ju lutemi provoni përsëri.",
    applicationSent: "Aplikimi u dërgua me sukses!",
    applicationError:
      "Gabim gjatë dërgimit të aplikimit. Ju lutemi provoni përsëri.",

    yourInformation: "Informacionet tuaja",
  },

  EN: {
    home: "HOME",
    about: "ABOUT",
    activities: "OUR TEAM",
    brands: "BRANDS",
    catalogs: "CATALOGS",
    news: "NEWS",
    gallery: "GALLERY",
    contact: "CONTACT",
    companyName: "Dauti-TransportShped",

    // Home page
    homeTitle: "Everywhere, Everytime We move close to your Business...",

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
    readMore: "Read More",

    // Careers page
    aboutMacedonia:
      "Dauti Transport Shped is the first company established in Saraj, North Macedonia, which quickly achieved success thanks to its professionalism and reliable services. Over time, the company expanded beyond national borders, opening branches in other countries as well, and became a recognized name in the field of transport and logistics. Today, Dauti Transport Shped represents a symbol of dedication, quality, and continuous development.",
    aboutAlbania:
      "Dauti Transportsped Sh.p.k. is a reliable and professional transport company, founded in 2019 and headquartered in Zhafzotaj Vrrine, Durrës, Albania. With extensive experience in logistics and transportation, we provide high-quality services for transporting various types of cargo, both domestically and internationally. Our team is dedicated to timely and secure deliveries, tailored to the needs of each client. We use modern equipment and technology to ensure maximum efficiency and safety throughout the transport process. Our goal is to build long-term partnerships through professionalism and trust.",
    aboutKroacia:
      "Dauti Transportšped d.o.o. is a reliable and professional company, founded in 2021 and headquartered at ul. Pavlinska 5, 42000 Varaždin, Croatia, specializing in transportation and logistics services. With extensive experience in the transport industry, we provide high-quality and secure solutions for all types of cargo, both domestically and internationally. Our team of experts is dedicated to timely deliveries and customer satisfaction, utilizing modern equipment and tailored logistics services.",

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

    required: "Required",
    invalidEmail: "Invalid email",
    invalidPhone: "Invalid phone number",

    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    applicationSent: "Application sent successfully!",
    applicationError: "Error sending application. Please try again.",

    yourInformation: "Your Information",
  },
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "MK";
  });

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

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
