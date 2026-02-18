import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBuilding, faBullhorn, faChartLine, faGraduationCap, faMobileButton, faPalette, faPeopleGroup, faRocket, faShield, faUser } from "@fortawesome/free-solid-svg-icons";

export const forWho = [
  {
    icon: <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Фриленсери",
    description: "Графички дизајнери, веб девелопери, маркетинг стручњаци – презентирај сè што нудиш со еден допир."
  },
  {
    icon: <FontAwesomeIcon icon={faPalette} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Креативци и уметници",
    description: "Портфолио, Instagram, YouTube, Spotify – твојата работа заслужува лесно да се најде."
  },
  {
    icon: <FontAwesomeIcon icon={faBullhorn} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Инфлуенсери и контент креатори",
    description: "Сподели ги сите твои платформи на едно место – направи го вмрежувањето вистинско искуство."
  },
  {
    icon: <FontAwesomeIcon icon={faBuilding} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Бизниси од сите големини",
    description: "Од мали стартапи до големи компании – изгледајте професионално на состаноци, конференции и настани."
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Претприемачи и основачи",
    description: "Кога градиш нешто свое, секој контакт е важен. Конекта ти помага да го направиш вистинскиот прв чекор."
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Студенти и млади професионалци",
    description: "Подготвен/а си за кариера? Започни со визитка која покажува дека размислуваш напред."
  }
];

export const features = [
  {
    icon: <FontAwesomeIcon icon={faPalette} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Целосно прилагодлива",
    description: "Персонализирај ги картичката и профилот според твојот стил – од бои и лого до линкови и информации."
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Напредна анализа",
    description: "Следи прегледи, кликови и оптимизирај го твојот профил според деталната анализа."
  },
  {
    icon: <FontAwesomeIcon icon={faMobileButton} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Оптимизиран за мобилен",
    description: "Конекта профилот изгледа одлично и функционира беспрекорно на сите типови и големини на уреди."
  },
  {
    icon: <FontAwesomeIcon icon={faBolt} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Брза и оптимизирана",
    description: "Профилот се вчитува веднаш – без чекање, кочење и најважно - без компликации."
  },
  {
    icon: <FontAwesomeIcon icon={faShield} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Безбедна и сигурна",
    description: "Сите твои информации се безбедни и заштитени, со 99.9% гарантирано време на достапност."
  },
  {
    icon: <FontAwesomeIcon icon={faPeopleGroup} className="w-4 h-4 text-[#3b82f6]" />,
    title: "Тимска соработка",
    description: "Совршено решение за компании – брендирајте картички за целиот тим и поврзете се професионално."
  }
];

export const reviews = [
  {
    name: "John Doe",
    company: "ABC Company",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus."
  },
  {
    name: "John Doe 1",
    company: "ABC Company 1",
    review: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus."
  },
  {
    name: "John Doe 2",
    company: "ABC Company 2",
    review: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus."
  }
];

export const proizvodi = [
  {
    image1: "/karticki/konekta-1.webp",
    image2: "/karticki/konekta-2.webp",
    image3: "/karticki/konekta-3.webp",
    image4: "/karticki/konekta-4.webp",
    image5: "/karticki/konekta-5.webp",
    name: "Визит картичка",
    price: "1 000 ден.",
    description: "Чиста, модерна и функционална – совршена за секој професионалец.",
    features: [
      "Материјал: Пластика",
      "Можност за печатење на персонализиран дизајн",
      "Вграден NFC + QR код",
      "Вклучено 1 програмирање на токен",
      "Со претплата на конекта профил, вклучена е бесплатно 1 картичка"
    ]
  },
  {
    image1: "/karticki/google.webp",
    image2: "/karticki/business.webp",
    image3: "/karticki/booking.webp",
    image4: "/karticki/tripadviser.webp",
    name: "Картичка за рецензии",
    price: "1 000 ден.",
    description: "Рецензиите се бесплатен маркетинг, овозможии им на муштериите лесна достапност",
    features: [
      "Материјал: Пластика",
      "Можност за печатење на персонализиран дизајн",
      "Вграден NFC + QR код",
      "Вклучено 1 програмирање на токен"
    ]
  },
  {
    image1: "/karticki/linkedin.webp",
    image2: "/karticki/instagram.webp",
    image3: "/karticki/whatsapp.webp",
    image4: "/karticki/facebook.webp",
    name: "Картичка за социјални мрежи",
    price: "1 000 ден.",
    description: "Работата ти е на социјални мрежи? Ова е идеално решение за тебе.",
    features: [
      "Материјал: Пластика",
      "Можност за печатење на персонализиран дизајн",
      "Вграден NFC + QR код",
      "Вклучено 1 програмирање на токен"
    ]
  },
  {
    image1: "/karticki/wifi.webp",
    image2: "/karticki/meni.webp",
    image3: "/karticki/wifi-crna.webp",
    image4: "/karticki/meni-crna.webp",
    name: "Останати картички",
    price: "1 000 ден.",
    description: "Брз преглед на мени, едноставно поврзување на WiFi, имаш друга идеја за користење на NFC?",
    features: [
      "Материјал: Пластика",
      "Можност за печатење на персонализиран дизајн",
      "Вграден NFC + QR код",
      "Вклучено 1 програмирање на токен"
    ]
  },
  {
    image1: "/smiley-privezok.webp",
    // image2: "/plav-privezok.webp",
    image3: "/stiker.webp",
    name: "Други NFC токени",
    price: "500 ден.",
    description: "Носи го твојот контакт-профил секогаш со себе – лесно, паметно и практично.",
    features: [
      "Материјал: Пластика",
      "Компактен NFC уред",
      "Може да се прикачи на телефон, клучеви, торба или ранец",
      "Вклучено 1 програмирање на токен"
    ]
  }
]

export const faqItems = [
  {
    question: "Што е Конекта?",
    answer1: "Конекта е паметна визит-картичка со NFC технологија.",
    answer2: "Со само еден допир до телефон, луѓето можат да ги видат твоите податоци – контакт, линкови, социјални мрежи и друго. Без фрлање хартија, без трошење време."
  },
  {
    question: "Мора ли другата личност да има Конекта за да работи?",
    answer1: "Не!",
    answer2: "Само ти ја имаш картичката – другата личност само го доближува телефонот до неа и автоматски ги гледа твоите информации. Без апликации, без инсталации."
  },
  {
    question: "Дали работи со сите телефони?",
    answer1: "Повеќето современи телефони имаат NFC и ќе функционира без проблем.",
    answer2: "Ако не поддржува NFC, можеш и преку QR код – истиот линк, само со скенирање!"
  },
  {
    question: "Дали податоците ми се безбедни?",
    answer1: "Да, секако.",
    answer2: "Твоите информации се чуваат на приватен и безбеден сервер, и ти си тој/таа што има целосна контрола – менуваш, бришеш или додаваш кога сакаш."
  },
  {
    question: "Можам ли да ги сменам податоците подоцна?",
    answer1: "Апсолутно!",
    answer2: "Сè е онлајн и е достапно 24/7 – се логираш, менуваш што сакаш и веднаш се ажурира. Не мораш да печатиш нова картичка секојпат кога ќе промениш број или линк."
  },
  {
    question: "Може ли да ставам свој дизајн на картичката?",
    answer1: "Да!",
    answer2: "На сите наши картички може да се печати. Ти само прати ни дизајн или лого и ние ќе испечатиме."
  },
  {
    question: "Дали NFC работи ако телефонот има заштитна маска?",
    answer1: "Во повеќето случаи – да.",
    answer2: "Околу 95% од обичните силиконски или пластични маски не претставуваат проблем. Само многу дебели метални или магнетни маски може малку да го ослабнат сигналот."
  },
  {
    question: "Дали морам да плаќам годишно?",
    answer1: "Само ако одбереш претплатен план со конекта профил.",
    answer2: "Ако земеш само картичка без претплата – ја користиш доживотно, со 1 линк кој ќе ни дадеш да го програмираме на картичката. Претплатата е за оние што сакаат конекта профил во кој можат да ги внесат своите контакт информации и линкови, и да следат аналитика на прегледи и кликови."
  }
]