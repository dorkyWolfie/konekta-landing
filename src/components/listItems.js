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
    image: "/bela-karticka.webp",
    name: "Бела Картичка",
    price: "800 ден.",
    description: "Чиста, модерна и функционална – совршена старт картичка за секој професионалец. Вклучена бесплатно со активна претплата.",
    features: [
      "Материјал: Пластика",
      "Боја: Бела",
      "Можност за печатење на дизајн",
      "Вграден NFC + QR код"
    ]
  },
  {
    image: "/plava-karticka.webp",
    name: "Сина Картичка",
    price: "800 ден.",
    description: "Класична и стилска – сина картичка што се истакнува и изгледа професионално.",
    features: [
      "Материјал: Пластика",
      "Боја: Сина",
      "Можност за печатење на дизајн",
      "Вграден NFC + QR код"
    ]
  },
  {
    image: "/crna-karticka.webp",
    name: "Црна Картичка",
    price: "800 ден.",
    description: "Минимализам и елеганција во едно – идеална за оние што сакаат сериозен прв впечаток.",
    features: [
      "Материјал: Пластика",
      "Боја: Црна",
      "Можност за печатење на дизајн",
      "Вграден NFC + QR код"
    ]
  },
  {
    image: "/zolta-karticka.webp",
    name: "Жолта Картичка",
    price: "800 ден.",
    description: "Смела и позитивна – привлечи внимание уште пред првиот допир.",
    features: [
      "Материјал: Пластика",
      "Боја: Жолта",
      "Можност за печатење на дизајн",
      "Вграден NFC + QR код"
    ]
  },
  {
    image: "/plav-privezok.webp",
    name: "Син Привезок",
    price: "300 ден.",
    description: "Носи го твојот контакт-профил секогаш со себе – лесно, паметно и практично.",
    features: [
      "Материјал: Пластика",
      "Боја: Сина",
      "Компактен NFC уред",
      "Може да се прикачи на клучеви, торба или ранец"
    ]
  },
  {
    image: "/smiley-privezok.webp",
    name: "Смајли Привезок",
    price: "700 ден.",
    description: "Мал гест што кажува многу – симпатичен и креативен начин за поврзување со луѓето.",
    features: [
      "Материјал: Пластика",
      "Дизајн: Жолт смајли",
      "Компактен NFC уред",
      "Идеално за подароци или креативни презентации"
    ]
  },
  {
    image: "/stiker.webp",
    name: "Округла Налепница",
    price: "300 ден.",
    description: "Залепи ја каде било – твојата Конекта може да биде и на лаптоп, телефон или врата.",
    features: [
      "Материјал: Самолеплива хартија",
      "Боја: Бела",
      "Компактен NFC уред",
      "Можност за печатење на лого или илустрација",
      "Практично решение за брз пристап",
      "Може да се програмира и Wi-Fi, рецензија (Google, Booking...) и друго"
    ]
  }
]