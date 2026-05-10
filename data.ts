import { TheoryPoint, QuizQuestion } from './types';

export const PRETERITO_THEORY: TheoryPoint[] = [
  {
    title: "⏳ Pretérito Perfecto",
    content: "Իսպաներենում Pretérito Perfecto-ն օգտագործվում է խոսելու համար այն գործողությունների մասին, որոնք տեղի են ունեցել անցյալում, բայց կապված են ներկայի հետ (օրինակ՝ այսօր, այս շաբաթ):",
  },
  {
    title: "🛠️ Կազմությունը",
    content: "Կազմվում է HABER օժանդակ բայի ներկա ժամանակով և հիմնական բայի հարակատար դերբայով (Participio):",
    conjugationTables: [
      {
        title: "Hablar (-AR)",
        rows: [
          { pronoun: "Yo", haber: "he", participio: "hablado" },
          { pronoun: "Tú", haber: "has", participio: "hablado" },
          { pronoun: "Él/Ella", haber: "ha", participio: "hablado" },
          { pronoun: "Nosotros", haber: "hemos", participio: "hablado" },
          { pronoun: "Vosotros", haber: "habéis", participio: "hablado" },
          { pronoun: "Ellos/Ellas", haber: "han", participio: "hablado" }
        ]
      },
      {
        title: "Comer (-ER)",
        rows: [
          { pronoun: "Yo", haber: "he", participio: "comido" },
          { pronoun: "Tú", haber: "has", participio: "comido" },
          { pronoun: "Él/Ella", haber: "ha", participio: "comido" },
          { pronoun: "Nosotros", haber: "hemos", participio: "comido" },
          { pronoun: "Vosotros", haber: "habéis", participio: "comido" },
          { pronoun: "Ellos/Ellas", haber: "han", participio: "comido" }
        ]
      },
      {
        title: "Vivir (-IR)",
        rows: [
          { pronoun: "Yo", haber: "he", participio: "vivido" },
          { pronoun: "Tú", haber: "has", participio: "vivido" },
          { pronoun: "Él/Ella", haber: "ha", participio: "vivido" },
          { pronoun: "Nosotros", haber: "hemos", participio: "vivido" },
          { pronoun: "Vosotros", haber: "habéis", participio: "vivido" },
          { pronoun: "Ellos/Ellas", haber: "han", participio: "vivido" }
        ]
      }
    ]
  },
  {
    title: "📚 Participio (Հարակատար դերբայ)",
    rules: [
      "• -AR վերջավորությամբ բայեր -> -ADO (hablado)",
      "• -ER / -IR վերջավորությամբ բայեր -> -IDO (comido, vivido)",
      "⚠️ Անկանոն բայեր: decir (dicho), hacer (hecho), ver (visto), escribir (escrito), romper (roto), volver (vuelto), abrir (abierto), poner (puesto)"
    ]
  },
  {
    title: "📍 Ժամանակային ցուցիչներ",
    markers: [
      "hoy (այսօր)",
      "esta mañana (այս առավոտ)",
      "esta semana (այս շաբաթ)",
      "este mes / este año (այս ամիս / այս տարի)",
      "últimamente (վերջերս)",
      "ya (արդեն) / todavía no (դեռ ոչ)"
    ]
  }
];

export const PRETERITO_QUIZ: QuizQuestion[] = [
  { id: 1, sentence: "Hoy yo ___ (tomar) un café.", options: ["he tomado", "has tomado", "hemos tomado"], correctAnswer: "he tomado", translation: "Այսօր ես մի սուրճ եմ խմել:" },
  { id: 2, sentence: "¿Tú ___ (ver) esa película?", options: ["he visto", "has visto", "ha visto"], correctAnswer: "has visto", translation: "Դու տեսե՞լ ես այդ ֆիլմը:" },
  { id: 3, sentence: "Esta semana nosotros ___ (trabajar) mucho.", options: ["hemos trabajado", "han trabajado", "habéis trabajado"], correctAnswer: "hemos trabajado", translation: "Այս շաբաթ մենք շատ ենք աշխատել:" },
  { id: 4, sentence: "Ellos ___ (hacer) la tarea.", options: ["han hecho", "han hacido", "hemos hecho"], correctAnswer: "han hecho", translation: "Նրանք կատարել են տնային աշխատանքը:" },
  { id: 5, sentence: "Mi madre ___ (ir) al mercado.", options: ["ha ido", "has ido", "he ido"], correctAnswer: "ha ido", translation: "Մայրս գնացել է շուկա:" },
  { id: 6, sentence: "Vosotros ___ (comer) paella.", options: ["habéis comido", "han comido", "hemos comido"], correctAnswer: "habéis comido", translation: "Դուք պաելյա եք կերել:" },
  { id: 7, sentence: "Yo todavía no ___ (escribir) el mensaje.", options: ["he escrito", "has escrito", "he escribido"], correctAnswer: "he escrito", translation: "Ես դեռ չեմ գրել հաղորդագրությունը:" },
  { id: 8, sentence: "Esta mañana Pepe ___ (volver) a casa.", options: ["ha vuelto", "ha volvido", "has vuelto"], correctAnswer: "ha vuelto", translation: "Այս առավոտ Պեպեն վերադարձել է տուն:" },
  { id: 9, sentence: "¿Usted ___ (abrir) la puerta?", options: ["ha abierto", "has abierto", "he abierto"], correctAnswer: "ha abierto", translation: "Դուք բացե՞լ եք դուռը:" },
  { id: 10, sentence: "Este año ___ (viajar, nosotros) a España.", options: ["hemos viajado", "han viajado", "hemos viajando"], correctAnswer: "hemos viajado", translation: "Այս տարի մենք ճանապարհորդել ենք Իսպանիա:" }
];
