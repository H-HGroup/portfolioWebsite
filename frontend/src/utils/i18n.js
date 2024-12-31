import i18n from 'i18next';  
import { initReactI18next } from 'react-i18next';  

const resources = {  
  fa: {  
    translation: {  
      welcome: "خوش آمدید",  
      sampleText: "این یک متن نمونه است.",
      portfolio: "نمونه کار ها",
      education : "تحصیلات",
      experience : "سوابق کاری",
      home : "خانه",
      about : "درباره ما",
    }  
  },  
  en: {  
    translation: {  
      welcome: "Welcome",  
      sampleText: "This is a sample text.",  
      portfolio: "portfolio",
      education : "education",
      experience : "experience ",
      home : "home",
      about : "about",
    }  
  }  
};  

i18n  
  .use(initReactI18next)  
  .init({  
    resources,  
    lng: "fa", // زبان پیش‌فرض  
    fallbackLng: "en",  
    interpolation: {  
      escapeValue: false,  
    },  
  });  

export default i18n; 