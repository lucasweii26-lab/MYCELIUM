// gallery-seed.js
// 根目录相对图片路径
const IMG = "/img/gallery/";

export const GALLERY_SEED = [
  {
    slug: "sunrise-meditation-2026",
    date: "2026-09-06",
    // 1. 封面图：卡片封面与 Article 顶部巨幅海报
    cover: IMG + "meditation.webp",
    focus: "50% 55%",
    // 2. 正文插图：进入 Article 后正文中间的双栏图（可填 1~2 张特写）
    photos: [
      IMG + "meditation-photo.webp"
    ],
    tag_en: "Wellness",
    tag_zh_CN: "身心健康",
    short_en: "Sunrise Meditation",
    short_zh_CN: "水畔晨间冥想",
    title_en: "Sunrise meditation on the lawn by the water",
    title_zh_CN: "晨曦破晓，湖畔草坪上的静心冥想课",
    lede_en: "Residents rolled out mats at first light for a quiet, guided session beside the lake.",
    lede_zh_CN: "清晨第一缕阳光洒向湖面，居民们在薄雾与微风中铺开瑜伽垫，开启舒缓的一天。",
    body_en: [
      "The class began as the mist was still lifting from the water, with mats laid out in loose rows on the dew-fresh grass.",
      "Afterwards, neighbours stayed to enjoy herbal tea and quiet conversation, with many requesting this to become a fortnightly weekend tradition."
    ],
    body_zh_CN: [
      "晨光初现，薄雾尚未完全散去，数十位居民在沾着朝露的草坪上整齐展开瑜伽垫。在导师柔和的颂钵与呼吸指引下，大家在一呼一吸间感受自然的宁静节奏。",
      "晨练结束后，邻里们围坐在一起品尝温热的草本茶。不少居民表示，这种远离喧嚣的清晨静心体验，让整个身心都得到了彻底的舒缓与充电。"
    ],
    caption_en: "Morning sunlight reflects off the pond as the meditation session concludes.",
    caption_zh_CN: "晨光倒映在湖面上，静心冥想课程在柔和光线中圆满结束。",
    quote_en: "Starting the day with the sound of water and neighbours breathing in unison is pure serenity.",
    quote_zh_CN: "在水流声与邻里同步的平缓呼吸中开启清晨，是一种久违的平静与治愈。",
    quoteBy_en: "Elena Vance, Resident",
    quoteBy_zh_CN: "社区居民 · Elena Vance",
    place_en: "Lakeside lawn",
    place_zh_CN: "湖畔开放草坪",
    host_en: "Wellness Committee",
    host_zh_CN: "身心健康委员会",
    people: "38 residents"
  },
  {
    slug: "botanical-crafts-2026",
    date: "2026-07-12",
    cover: IMG + "botanic.webp",
    photos: [
      IMG + "botanic-photo.webp"
    ],
    tag_en: "Family",
    tag_zh_CN: "亲子工坊",
    short_en: "Botanical Crafts",
    short_zh_CN: "植物标本工坊",
    title_en: "Families press leaves and flowers under the garden pergola",
    title_zh_CN: "花架凉亭下，定格四季植物标本的亲子手作午后",
    lede_en: "Children and parents spent a warm afternoon turning fallen leaves and flora into pressed-botanical art.",
    lede_zh_CN: "午后微风吹拂，家长与孩子们在紫藤花架下采集落叶花瓣，将大自然的痕迹封存于画框之中。",
    body_en: [
      "Long wooden tables under the pergola were laid with freshly gathered leaves, recycled paper, natural dyes, and wooden presses.",
      "The finished botanical artworks were curated into a community exhibition currently displayed on the clubhouse noticeboard."
    ],
    body_zh_CN: [
      "绿意盎然的凉亭下摆满了长木桌，桌上整齐放置着修剪整齐的叶片、花瓣、吸水纸和木质压花器。孩子们细心挑选不同纹理的植物，发挥创意构图。",
      "大家完成的精美植物标本画作已被整理装裱，目前陈列在社区会所一层的艺术走廊中，供往来居民驻足欣赏。"
    ],
    caption_en: "Natural specimens assembled and pressed on handmade parchment.",
    caption_zh_CN: "采集自园区原生植物的手工植物标本手作作品。",
    quote_en: "A wonderful way for children to understand local plants while making something beautiful.",
    quote_zh_CN: "让孩子们在大自然中辨识本土植物，同时亲手创造美好事物，这是最好的自然教育。",
    quoteBy_en: "Marcus Lee, Nature Facilitator",
    quoteBy_zh_CN: "自然科普导师 · Marcus Lee",
    place_en: "Garden pergola",
    place_zh_CN: "中心花园紫藤花架",
    host_en: "Residents' Committee",
    host_zh_CN: "居民联谊委员会",
    people: "45 participants"
  },
  {
    slug: "farmers-market-2026",
    date: "2026-05-17",
    cover: IMG + "market.webp",
    focus: "50% 65%",
    photos: [
      IMG + "market-photo.webp"
    ],
    tag_en: "Community",
    tag_zh_CN: "邻里集市",
    short_en: "Courtyard Market",
    short_zh_CN: "庭院有机集市",
    title_en: "A courtyard market of produce, plants and handmade goods",
    title_zh_CN: "新鲜蔬果与手作醇香：周末邻里庭院市集",
    lede_en: "Stalls lined the courtyard path, bringing fresh organic harvest, balcony seedlings, and artisan baked goods.",
    lede_zh_CN: "石径两旁帐篷相连，本地新鲜有机农产、阳台盆栽幼苗与手工烘焙香气弥漫整个社区中庭。",
    body_en: [
      "Residents browsed under shaded canvas awnings and acoustic melodies, connecting directly with ethical regional growers and home crafters.",
      "Beyond fresh produce, the event served as a lively social hub where old friends caught up and new families were warmly welcomed."
    ],
    body_zh_CN: [
      "在遮阳天幕与舒缓吉他乐声的烘托下，居民们穿梭于各个摊位之间，选购刚刚采摘的新鲜蔬果、手工酵母面包以及阳台盆栽香草。",
      "集市不仅让大家品尝到了纯天然的绿色食材，更成为了一个温馨的社交枢纽，邻里间在此交流种植心得与生活日常。"
    ],
    caption_en: "Colourful stalls showcasing regional produce along the paved courtyard trail.",
    caption_zh_CN: "色彩丰富的农产与手作摊位错落排布在庭院主道上。",
    quote_en: "Knowing exactly who grew the tomatoes on your dinner table creates a rare, real sense of trust.",
    quote_zh_CN: "知道餐桌上的番茄是哪位邻居在后院亲手培育采摘的，这种踏实感弥足珍贵。",
    quoteBy_en: "Chloe Martin, Resident",
    quoteBy_zh_CN: "社区居民 · Chloe Martin",
    place_en: "Central courtyard",
    place_zh_CN: "中央活力中庭",
    host_en: "Events Committee",
    host_zh_CN: "活动策划组",
    people: "120+ visitors"
  },
  {
    slug: "tree-planting-2026",
    date: "2026-03-22",
    cover: IMG + "planting.webp",
    photos: [
      IMG + "planting-photo.webp"
    ],
    tag_en: "Green Living",
    tag_zh_CN: "绿色共建",
    short_en: "Tree Planting",
    short_zh_CN: "社区植树日",
    title_en: "Neighbours plant young trees along the community walking trail",
    title_zh_CN: "为社区添一抹新绿：邻里携手种植本土树苗",
    lede_en: "On a bright crisp morning, volunteers dug, staked, and watered native saplings to extend the shaded perimeter.",
    lede_zh_CN: "微风晴朗的清晨，几十组家庭自发带上工具，在环形慢跑步道两旁栽种下一棵棵本土树苗。",
    body_en: [
      "Teams of neighbours collaborated across small zones, with young children eagerly carrying watering cans while parents staked the taller saplings.",
      "Each tree was tagged with the planting family's name, creating living green milestones that will provide shade for decades to come."
    ],
    body_zh_CN: [
      "邻居们分成三人小组协作配合，有人负责挥锹培土，小朋友们开心地端水浇灌，大家为每株幼苗牢固立起抗风支架。",
      "每棵新树苗都系上了参与家庭亲手书写的木质祝福牌，成为社区共同成长、岁岁长青的绿意见证。"
    ],
    caption_en: "Residents carefully packing nutrient soil around a newly positioned sapling.",
    caption_zh_CN: "居民志愿者正在细心为新栽植的树苗培土与浇灌定根水。",
    quote_en: "Planting a tree is the most genuine promise we can make to the community's future.",
    quote_zh_CN: "亲手种下一棵树，是我们为社区未来的绿色家园许下最真诚的承诺。",
    quoteBy_en: "Arun Nair, Landscape Lead",
    quoteBy_zh_CN: "园艺负责人 · Arun Nair",
    place_en: "Main walking trail",
    place_zh_CN: "绿荫慢跑环道",
    host_en: "Green Living Team",
    host_zh_CN: "绿色生活组",
    people: "52 volunteers"
  },
  {
    slug: "garden-morning-2026",
    date: "2026-01-18",
    cover: IMG + "garden.webp",
    photos: [
      IMG + "garden-photo.webp"
    ],
    tag_en: "Garden",
    tag_zh_CN: "种植养护",
    short_en: "Garden Morning",
    short_zh_CN: "晨间育苗交换",
    title_en: "A golden morning of propagation and composting in the shared plot",
    title_zh_CN: "泥土与芬芳：共享菜园晨间育苗与堆肥日",
    lede_en: "Green thumbs and curious beginners met at the potting benches to pot new seedlings and share compost secrets.",
    lede_zh_CN: "种植达人与新手邻居相约在共建菜园，翻整沃土、分苗定植，分享家庭有机堆肥的小妙招。",
    body_en: [
      "Wooden potting benches were stocked with compost, organic seedlings, and labeled jars of heirloom seeds freely shared among participants.",
      "Experienced gardeners showed newcomer families how to calibrate drip lines and nourish soil naturally without synthetic inputs."
    ],
    body_zh_CN: [
      "清晨的阳光斜照在操作台上，大家带来了自家培育的香草幼苗和传家种子罐，互相交换挑选、移栽上盆。",
      "经验丰富的园丁耐心地向新搬来的住户演示如何观察土壤湿度、配置自制堆肥，体验收获绿色健康的乐趣。"
    ],
    caption_en: "Tending to the freshly sprouted leafy greens in the communal raised beds.",
    caption_zh_CN: "居民正在细心打理共享高位种植箱中刚刚萌发出的翠绿菜苗。",
    quote_en: "There's nothing quite like sharing freshly harvested basil with the family next door.",
    quote_zh_CN: "随手摘一把带着露水的新鲜罗勒送给对门的邻居，这就是理想社区的生活方式。",
    quoteBy_en: "Mei Ling, Garden Club",
    quoteBy_zh_CN: "园艺社团 · 陈美玲",
    place_en: "Community garden plots",
    place_zh_CN: "社区生态种植园",
    host_en: "Green Living Team",
    host_zh_CN: "绿色生活组",
    people: "29 participants"
  },
  {
    slug: "lantern-garden-feast-2025",
    // 仅在马来西亚城市（Pulau Tikus & Johor Bahru）显示
    only: "MY",
    date: "2025-09-06",
    cover: IMG + "garden-feast.webp",
    // 构图焦点：水平居中，垂直偏下约 20%（50%+20%=70%）
    focus: "50% 60%",
    photos: [
      IMG + "garden-feast-photo.webp"
    ],
    tag_en: "Festival",
    tag_zh_CN: "传统节庆",
    short_en: "Lantern Feast",
    short_zh_CN: "星光长桌晚宴",
    title_en: "A warm lantern-lit garden feast under the tropical sky",
    title_zh_CN: "暖光摇曳，灯笼与星光下的邻里长桌晚宴",
    lede_en: "String lights and woven lanterns illuminated a long communal banquet welcoming neighbours of all backgrounds.",
    lede_zh_CN: "草坪花香四溢，成排暖黄色灯笼亮起，百余名多元背景的邻居欢聚于露天长桌旁，共享佳肴美酒。",
    body_en: [
      "Dishes were laid out on banana leaves and hand-carved platters, celebrating local heritage recipes cooked with care by resident families.",
      "Lively laughter and acoustic guitar melodies echoed well into the cool evening as friends toasted to neighbourly solidarity."
    ],
    body_zh_CN: [
      "长桌上铺满翠绿芭蕉叶，盛放着各家精心烹制的传统家常私房菜。热气腾腾的娘惹糕点与香料烤肉香气引人垂涎。",
      "孩子们提着彩纸灯笼在草坪间穿梭追逐，长辈们围坐畅叙家常，欢声笑语伴着吉他声回荡在热带舒适的晚风中。"
    ],
    caption_en: "Warm lantern glow reflecting along the communal dinner table at twilight.",
    caption_zh_CN: "暮色低垂，长桌两旁的暖色纸灯笼相继点亮，烘托出浓厚温馨的邻里温情。",
    quote_en: "Sitting together over a meal is how neighbours become a true, united community.",
    quote_zh_CN: "围坐在一张长桌前共享晚餐，邻居才能真正凝聚成为相扶相亲的一家人。",
    quoteBy_en: "Uncle Rahim, Community Elder",
    quoteBy_zh_CN: "社区长者 · Rahim 大叔",
    place_en: "Clubhouse lawn",
    place_zh_CN: "会所中心大草坪",
    host_en: "Events Committee",
    host_zh_CN: "活动策划委员会",
    people: "85 neighbours"
  },
  {
    slug: "autumn-harvest-feast-2025",
    // 仅在美国（波特兰 Portland）显示
    only: "US",
    date: "2025-11-27",
    cover: IMG + "harvest-feast.webp",
    photos: [
      IMG + "harvest-feast-photo.webp"
    ],
    tag_en: "Festival",
    tag_zh_CN: "丰收节庆",
    short_en: "Harvest Feast",
    short_zh_CN: "秋日丰收晚宴",
    title_en: "An outdoor autumn harvest celebration under festoon lighting",
    title_zh_CN: "秋叶流金：星光串灯下的波特兰秋日丰收晚宴",
    lede_en: "Residents gathered outdoors on a cool November evening to share seasonal pies, roasted squash, and cider.",
    lede_zh_CN: "微寒的十一月傍晚，复古灯串点亮露天庭院，邻居们围坐在木桌旁分享刚出炉的南瓜派与热苹果肉桂饮。",
    body_en: [
      "Long rustic wooden tables were decorated with pumpkins, dried wildflowers, and warm wool blankets as the twilight turned deep blue.",
      "The evening concluded with storytelling by the outdoor fire pits, celebrating another fruitful year of connected living."
    ],
    body_zh_CN: [
      "质朴的原木长桌上装点着金黄南瓜、干花与棉麻暖毯，居民们各自带来了精心烘烤的感恩节风味暖胃菜肴。",
      "晚风渐凉，大家聚集在庭院露天火塘边取暖畅聊，共同举杯感恩一年来温馨互助的邻里温情。"
    ],
    caption_en: "Festoon lamps glow brightly above festive tables decorated with fall produce.",
    caption_zh_CN: "复古星光串灯投下暖色柔光，映衬着充满秋收气氛的长木桌席。",
    quote_en: "There's no better feeling than being surrounded by warmth, good food, and good neighbours.",
    quote_zh_CN: "在微寒的秋夜被温暖的火光、可口的食物和友善的邻居包围，是最幸福的体验。",
    quoteBy_en: "Hannah Collins, Resident",
    quoteBy_zh_CN: "波特兰居民 · Hannah Collins",
    place_en: "Courtyard patio",
    place_zh_CN: "户外庭院篝火台",
    host_en: "Events Committee",
    host_zh_CN: "活动策划委员会",
    people: "65 residents"
  }
];

// Curated translations for the built-in gallery stories. These are also used as a
// fallback for matching Firestore stories when their locale-specific fields are absent.
const GALLERY_TRANSLATIONS = {
  "sunrise-meditation-2026": {
    "es": {
      "tag": "Bienestar",
      "short": "Meditación al amanecer",
      "title": "Una sesión de meditación al amanecer junto al agua",
      "lede": "Los residentes extendieron sus esterillas al amanecer para disfrutar de una sesión guiada y tranquila junto al lago.",
      "body": [
        "La sesión comenzó mientras la niebla aún se disipaba sobre el agua. Las esterillas se colocaron en filas abiertas sobre el césped cubierto de rocío.",
        "Al terminar, los vecinos se quedaron a compartir infusiones y conversar tranquilamente. Muchos propusieron convertir la actividad en una tradición quincenal de fin de semana."
      ],
      "caption": "La luz de la mañana se refleja en el estanque al concluir la sesión de meditación.",
      "quote": "Comenzar el día escuchando el agua y respirando al unísono con los vecinos transmite una serenidad incomparable.",
      "quoteBy": "Elena Vance, residente",
      "place": "Césped junto al lago",
      "host": "Comité de Bienestar",
      "people": "38 residentes"
    },
    "ta": {
      "tag": "நலவாழ்வு",
      "short": "விடியற்காலை தியானம்",
      "title": "ஏரிக்கரையோரப் புல்வெளியில் விடியற்காலை தியானம்",
      "lede": "விடியற்காலையில் குடியிருப்பாளர்கள் பாய்களை விரித்து, ஏரிக்கரையில் அமைதியான வழிநடத்தப்பட்ட தியான அமர்வில் கலந்து கொண்டனர்.",
      "body": [
        "நீர்மேல் படர்ந்திருந்த பனி விலகத் தொடங்கிய நேரத்தில் வகுப்பு தொடங்கியது. பனித்துளிகள் மிளிர்ந்த புல்வெளியில் பாய்கள் இடைவெளியுடன் வரிசையாக விரிக்கப்பட்டிருந்தன.",
        "அமர்வு முடிந்ததும், அண்டை வீட்டார் மூலிகைத் தேநீர் அருந்தி அமைதியாக உரையாடினர். இதை இரண்டு வாரங்களுக்கு ஒருமுறை வார இறுதி நிகழ்வாக நடத்த பலரும் விருப்பம் தெரிவித்தனர்."
      ],
      "caption": "தியான அமர்வு முடிவடையும் வேளையில் காலைச் சூரிய ஒளி குளத்தில் பிரதிபலிக்கிறது.",
      "quote": "நீரின் ஒலியையும் அண்டை வீட்டாரின் ஒரே தாளிலான சுவாசத்தையும் கேட்டு நாளைத் தொடங்குவது மனதிற்கு ஆழ்ந்த அமைதியைத் தருகிறது.",
      "quoteBy": "எலீனா வேன்ஸ், குடியிருப்பாளர்",
      "place": "ஏரிக்கரைப் புல்வெளி",
      "host": "நலவாழ்வுக் குழு",
      "people": "38 குடியிருப்பாளர்கள்"
    }
  },
  "botanical-crafts-2026": {
    "es": {
      "tag": "Familia",
      "short": "Taller botánico",
      "title": "Familias prensan hojas y flores bajo la pérgola del jardín",
      "lede": "Niños y padres pasaron una tarde agradable convirtiendo hojas caídas y flores en obras de arte botánico prensado.",
      "body": [
        "Las largas mesas de madera bajo la pérgola se prepararon con hojas recién recogidas, papel reciclado, tintes naturales y prensas de madera.",
        "Las obras botánicas terminadas se reunieron en una exposición comunitaria que actualmente se muestra en el tablón de anuncios de la casa club."
      ],
      "caption": "Muestras naturales reunidas y prensadas sobre papel artesanal.",
      "quote": "Una forma maravillosa de que los niños conozcan las plantas locales mientras crean algo hermoso.",
      "quoteBy": "Marcus Lee, educador de naturaleza",
      "place": "Pérgola del jardín",
      "host": "Comité de Residentes",
      "people": "45 participantes"
    },
    "ta": {
      "tag": "குடும்பம்",
      "short": "தாவரவியல் கைவினைப் பட்டறை",
      "title": "தோட்டப் பெர்கோலாவின் கீழ் இலைகளையும் மலர்களையும் குடும்பங்கள் பதப்படுத்துகின்றன",
      "lede": "உதிர்ந்த இலைகளையும் மலர்களையும் அழகிய தாவரக் கலைப்படைப்புகளாக மாற்றிக் குழந்தைகளும் பெற்றோர்களும் இனிய பிற்பகலைக் கழித்தனர்.",
      "body": [
        "பெர்கோலாவின் கீழிருந்த நீண்ட மர மேசைகளில் புதிதாகச் சேகரிக்கப்பட்ட இலைகள், மறுசுழற்சி செய்யப்பட்ட காகிதம், இயற்கை நிறமிகள் மற்றும் மர அழுத்துக் கருவிகள் வைக்கப்பட்டிருந்தன.",
        "உருவாக்கப்பட்ட தாவரக் கலைப்படைப்புகள் சமூகக் கண்காட்சிக்காகத் தொகுக்கப்பட்டு, தற்போது கிளப் ஹவுஸ் அறிவிப்புப் பலகையில் காட்சிப்படுத்தப்பட்டுள்ளன."
      ],
      "caption": "கைவினைக் காகிதத்தில் சேகரிக்கப்பட்டு அழுத்திப் பதப்படுத்தப்பட்ட இயற்கை மாதிரிகள்.",
      "quote": "அழகான ஒன்றை உருவாக்கிக்கொண்டே உள்ளூர் தாவரங்களைப் பற்றி குழந்தைகள் அறிந்துகொள்ள இது ஒரு அருமையான வழி.",
      "quoteBy": "மார்கஸ் லீ, இயற்கைக் கல்வி வழிகாட்டி",
      "place": "தோட்டப் பெர்கோலா",
      "host": "குடியிருப்பாளர் குழு",
      "people": "45 பங்கேற்பாளர்கள்"
    }
  },
  "farmers-market-2026": {
    "es": {
      "tag": "Comunidad",
      "short": "Mercado del patio",
      "title": "Un mercado en el patio con productos frescos, plantas y artesanía",
      "lede": "Los puestos a lo largo del sendero del patio ofrecieron cosechas orgánicas frescas, plantones para balcones y repostería artesanal.",
      "body": [
        "Los residentes recorrieron los puestos bajo toldos de lona y acompañados de música acústica, y pudieron conocer directamente a productores regionales responsables y artesanos locales.",
        "Además de ofrecer productos frescos, el encuentro se convirtió en un animado punto de reunión donde viejos amigos se pusieron al día y las nuevas familias recibieron una cálida bienvenida."
      ],
      "caption": "Puestos coloridos con productos regionales a lo largo del sendero pavimentado del patio.",
      "quote": "Saber quién cultivó los tomates que llegan a tu mesa crea una confianza auténtica y poco común.",
      "quoteBy": "Chloe Martin, residente",
      "place": "Patio central",
      "host": "Comité de Eventos",
      "people": "Más de 120 visitantes"
    },
    "ta": {
      "tag": "சமூகம்",
      "short": "முற்றத்து சந்தை",
      "title": "புதிய விளைபொருட்கள், செடிகள் மற்றும் கைவினைப் பொருட்களுக்கான முற்றத்து சந்தை",
      "lede": "முற்றத்துப் பாதையோரம் அமைக்கப்பட்ட கடைகளில் புதிய இயற்கை விளைபொருட்கள், பால்கனிச் செடிக் கன்றுகள் மற்றும் கைவினைப் பேக்கரி உணவுகள் விற்பனை செய்யப்பட்டன.",
      "body": [
        "நிழல் தரும் துணி விதானங்களின் கீழும் மெல்லிய இசையின் பின்னணியிலும் குடியிருப்பாளர்கள் கடைகளைச் சுற்றிப் பார்த்தனர். பொறுப்புணர்வுடன் விளைவிக்கும் உள்ளூர் விவசாயிகளையும் வீட்டிலேயே கைவினைப் பொருட்கள் தயாரிப்பவர்களையும் நேரில் சந்தித்தனர்.",
        "புதிய விளைபொருட்களைத் தாண்டி, இந்த நிகழ்வு பழைய நண்பர்கள் சந்தித்து உரையாடவும் புதிய குடும்பங்களை அன்புடன் வரவேற்கவும் உதவும் உற்சாகமான சமூகச் சந்திப்பிடமாக அமைந்தது."
      ],
      "caption": "முற்றத்தின் நடைபாதையோரம் வண்ணமயமாக அமைந்துள்ள உள்ளூர் விளைபொருள் கடைகள்.",
      "quote": "நம் உணவு மேசையில் இருக்கும் தக்காளியை யார் பயிரிட்டார்கள் என்பதைத் தெரிந்திருப்பது அரிதான, உண்மையான நம்பிக்கையை உருவாக்குகிறது.",
      "quoteBy": "க்ளோயி மார்ட்டின், குடியிருப்பாளர்",
      "place": "மத்திய முற்றம்",
      "host": "நிகழ்வுகள் குழு",
      "people": "120-க்கும் மேற்பட்ட வருகையாளர்கள்"
    }
  },
  "tree-planting-2026": {
    "es": {
      "tag": "Vida sostenible",
      "short": "Plantación de árboles",
      "title": "Los vecinos plantan árboles jóvenes a lo largo del sendero comunitario",
      "lede": "En una mañana luminosa y fresca, los voluntarios cavaron, colocaron tutores y regaron árboles autóctonos para ampliar la zona de sombra.",
      "body": [
        "Grupos de vecinos colaboraron en pequeñas zonas. Los niños llevaban con entusiasmo las regaderas mientras sus padres colocaban tutores para los árboles más altos.",
        "Cada árbol recibió una placa con el nombre de la familia que lo plantó, creando hitos verdes vivos que ofrecerán sombra durante décadas."
      ],
      "caption": "Los residentes cubren cuidadosamente con tierra nutritiva una plántula recién plantada.",
      "quote": "Plantar un árbol es la promesa más sincera que podemos hacer al futuro de nuestra comunidad.",
      "quoteBy": "Arun Nair, responsable de jardinería y paisaje",
      "place": "Sendero principal",
      "host": "Equipo de Vida Verde",
      "people": "52 voluntarios"
    },
    "ta": {
      "tag": "பசுமை வாழ்வு",
      "short": "மரக்கன்றுகள் நடுதல்",
      "title": "சமூக நடைபாதையோரம் அண்டை வீட்டார் இளம் மரக்கன்றுகளை நடுகின்றனர்",
      "lede": "தெளிவான குளிர்ச்சியான காலைப் பொழுதில் தன்னார்வலர்கள் குழி தோண்டி, கன்றுகளுக்குத் தாங்குகோல் அமைத்து, நிழற்பரப்பை விரிவுபடுத்த உள்ளூர் மரக்கன்றுகளுக்கு நீர் ஊற்றினர்.",
      "body": [
        "அண்டை வீட்டார் சிறு குழுக்களாகப் பிரிந்து வெவ்வேறு பகுதிகளில் இணைந்து பணியாற்றினர். குழந்தைகள் ஆர்வத்துடன் தண்ணீர்க் குடங்களை எடுத்துச் சென்றபோது, பெற்றோர் உயரமான கன்றுகளுக்குத் தாங்குகோல் அமைத்தனர்.",
        "ஒவ்வொரு மரத்திலும் அதை நட்ட குடும்பத்தின் பெயருடன் ஒரு அடையாளப் பலகை வைக்கப்பட்டது. பல தசாப்தங்களுக்கு நிழல் தரவுள்ள இந்த மரங்கள் சமூகத்தின் பசுமை வளர்ச்சியை நினைவூட்டும்."
      ],
      "caption": "புதிதாக நடப்பட்ட மரக்கன்றைச் சுற்றி ஊட்டச்சத்து மண்ணை குடியிருப்பாளர்கள் கவனமாக நிரப்புகின்றனர்.",
      "quote": "ஒரு மரத்தை நடுவது நம் சமூகத்தின் எதிர்காலத்திற்காக நாம் அளிக்கக்கூடிய மிக நேர்மையான வாக்குறுதியாகும்.",
      "quoteBy": "அருண் நாயர், நிலப்பரப்பு வடிவமைப்புப் பொறுப்பாளர்",
      "place": "முக்கிய நடைபாதை",
      "host": "பசுமை வாழ்வுக் குழு",
      "people": "52 தன்னார்வலர்கள்"
    }
  },
  "garden-morning-2026": {
    "es": {
      "tag": "Jardinería",
      "short": "Mañana de jardinería",
      "title": "Una mañana dorada de propagación de plantas y compostaje en el huerto compartido",
      "lede": "Aficionados a la jardinería y principiantes curiosos se reunieron en las mesas de cultivo para plantar nuevos brotes y compartir consejos sobre compostaje.",
      "body": [
        "Las mesas de cultivo de madera estaban provistas de compost, plantones orgánicos y frascos etiquetados con semillas tradicionales que los participantes podían compartir libremente.",
        "Jardineros con experiencia enseñaron a las familias recién llegadas a ajustar el riego por goteo y nutrir la tierra de forma natural, sin productos sintéticos."
      ],
      "caption": "Cuidado de las verduras de hoja recién brotadas en los bancales elevados comunitarios.",
      "quote": "No hay nada como compartir albahaca recién cosechada con la familia de al lado.",
      "quoteBy": "Mei Ling, Club de Jardinería",
      "place": "Parcelas del huerto comunitario",
      "host": "Equipo de Vida Verde",
      "people": "29 participantes"
    },
    "ta": {
      "tag": "தோட்டப் பணிகள்",
      "short": "தோட்டப் பராமரிப்புக் காலை",
      "title": "பகிர்ந்து பயன்படுத்தும் தோட்டத்தில் செடிப் பெருக்கமும் உரம் தயாரிப்பும் நிறைந்த பொற்காலை",
      "lede": "தோட்ட ஆர்வலர்களும் புதிதாகக் கற்றுக்கொள்ள விரும்புவோரும் நாற்று மேசைகளில் ஒன்றுகூடி புதிய செடிகளை நடவும் இயற்கை உரம் தயாரிக்கும் முறைகளைப் பகிரவும் செய்தனர்.",
      "body": [
        "மர நாற்று மேசைகளில் இயற்கை உரம், ரசாயனமற்ற செடிக் கன்றுகள் மற்றும் அனைவரும் பகிர்ந்துகொள்ளக்கூடிய பாரம்பரிய விதைகள் அடங்கிய பெயரிடப்பட்ட கண்ணாடிக் குடுவைகள் வைக்கப்பட்டிருந்தன.",
        "அனுபவமுள்ள தோட்டப் பணியாளர்கள் புதிதாக வந்த குடும்பங்களுக்கு சொட்டுநீர்ப் பாசனக் குழாய்களைச் சரிசெய்வதையும் செயற்கைப் பொருட்களின்றி மண்ணுக்கு இயற்கையாக ஊட்டமளிப்பதையும் கற்றுக்கொடுத்தனர்."
      ],
      "caption": "சமூகத்தின் உயர்த்தப்பட்ட தோட்டப் பாத்திகளில் புதிதாக முளைத்த கீரைகளைப் பராமரித்தல்.",
      "quote": "புதிதாகப் பறித்த துளசியை அடுத்த வீட்டுக் குடும்பத்துடன் பகிர்வதற்கு இணையான மகிழ்ச்சி வேறில்லை.",
      "quoteBy": "மெய் லிங், தோட்டக் கழகம்",
      "place": "சமூகத் தோட்டப் பகுதிகள்",
      "host": "பசுமை வாழ்வுக் குழு",
      "people": "29 பங்கேற்பாளர்கள்"
    }
  },
  "lantern-garden-feast-2025": {
    "es": {
      "tag": "Festival",
      "short": "Cena de faroles en el jardín",
      "title": "Una cálida cena en el jardín iluminado por faroles bajo el cielo tropical",
      "lede": "Guirnaldas de luces y faroles tejidos iluminaron un largo banquete comunitario que dio la bienvenida a vecinos de todos los orígenes.",
      "body": [
        "Los platos se sirvieron sobre hojas de plátano y bandejas talladas a mano, en celebración de recetas tradicionales locales preparadas con esmero por las familias residentes.",
        "Las risas y las melodías de guitarra acústica resonaron hasta bien entrada la fresca noche, mientras los amigos brindaban por la unión entre vecinos."
      ],
      "caption": "El cálido resplandor de los faroles se refleja en la mesa comunitaria al anochecer.",
      "quote": "Compartir una comida alrededor de la misma mesa es lo que convierte a los vecinos en una comunidad unida.",
      "quoteBy": "Tío Rahim, referente de la comunidad",
      "place": "Césped de la casa club",
      "host": "Comité de Eventos",
      "people": "85 vecinos"
    },
    "ta": {
      "tag": "திருவிழா",
      "short": "தோட்ட விளக்குத் திருவிருந்து",
      "title": "வெப்பமண்டல வானின் கீழ் விளக்கொளியில் நடைபெற்ற அன்பான தோட்ட விருந்து",
      "lede": "பல்வேறு பின்னணிகளைச் சேர்ந்த அண்டை வீட்டாரை வரவேற்று, நீண்ட சமூக விருந்துமேசையைச் சுற்றி மின்விளக்குத் தொடர்களும் நெய்த விளக்குகளும் ஒளிர்ந்தன.",
      "body": [
        "குடியிருப்புக் குடும்பங்கள் அக்கறையுடன் சமைத்த உள்ளூர் பாரம்பரிய உணவுகள் வாழை இலைகளிலும் கையால் செதுக்கப்பட்ட தட்டுகளிலும் பரிமாறப்பட்டன.",
        "குளிர்ந்த மாலை நேரம் நீண்டபோதும் சிரிப்பொலியும் ஒலியமைப்பு இசைக்கருவியுடன் இசைக்கப்பட்ட கிட்டார் மெட்டுகளும் ஒலித்தன. நண்பர்கள் அண்டை வீட்டார் ஒற்றுமைக்காகக் கோப்பைகளை உயர்த்தினர்."
      ],
      "caption": "அந்தி நேரத்தில் சமூக விருந்துமேசையில் பிரதிபலிக்கும் விளக்குகளின் இதமான ஒளி.",
      "quote": "ஒன்றாக அமர்ந்து உணவருந்துவதன் மூலமே அண்டை வீட்டார் உண்மையான ஒற்றுமைமிக்க சமூகமாக மாறுகின்றனர்.",
      "quoteBy": "சமூக மூத்தவர் ரஹீம் மாமா",
      "place": "கிளப் ஹவுஸ் புல்வெளி",
      "host": "நிகழ்வுகள் குழு",
      "people": "85 அண்டை வீட்டார்"
    }
  },
  "autumn-harvest-feast-2025": {
    "es": {
      "tag": "Festival",
      "short": "Banquete de la cosecha",
      "title": "Una celebración otoñal al aire libre bajo guirnaldas de luces",
      "lede": "Los residentes se reunieron al aire libre en una fresca noche de noviembre para compartir tartas de temporada, calabaza asada y sidra.",
      "body": [
        "Las largas mesas rústicas de madera se decoraron con calabazas, flores silvestres secas y mantas cálidas de lana mientras el cielo del atardecer se volvía azul profundo.",
        "La velada terminó con relatos compartidos alrededor de los fogones al aire libre, celebrando otro año de convivencia y apoyo mutuo."
      ],
      "caption": "Guirnaldas luminosas brillan sobre mesas festivas decoradas con productos de otoño.",
      "quote": "No hay nada mejor que estar rodeado de calidez, buena comida y buenos vecinos.",
      "quoteBy": "Hannah Collins, residente",
      "place": "Terraza del patio",
      "host": "Comité de Eventos",
      "people": "65 residentes"
    },
    "ta": {
      "tag": "திருவிழா",
      "short": "இலையுதிர் அறுவடை விருந்து",
      "title": "அலங்கார மின்விளக்குகளின் கீழ் திறந்தவெளியில் நடைபெற்ற இலையுதிர்கால அறுவடை விழா",
      "lede": "குளிர்ச்சியான நவம்பர் மாலைப் பொழுதில் குடியிருப்பாளர்கள் திறந்தவெளியில் ஒன்றுகூடி பருவகாலப் பழத் துண்டுகள், வறுத்த பூசணி மற்றும் ஆப்பிள் பானங்களைப் பகிர்ந்துகொண்டனர்.",
      "body": [
        "மாலை வானம் ஆழ்ந்த நீலமாக மாறியபோது, நீண்ட கிராமிய மர மேசைகள் பூசணிக்காய்கள், உலர்ந்த காட்டுப்பூக்கள் மற்றும் வெப்பமளிக்கும் கம்பளிகளால் அலங்கரிக்கப்பட்டிருந்தன.",
        "வெளிப்புற நெருப்புக் குழிகளைச் சுற்றி கதைகள் பகிர்ந்துகொண்டு மாலை நிறைவடைந்தது. ஒன்றிணைந்த வாழ்வின் மற்றொரு பயனுள்ள ஆண்டை அனைவரும் கொண்டாடினர்."
      ],
      "caption": "இலையுதிர்கால விளைபொருட்களால் அலங்கரிக்கப்பட்ட விருந்து மேசைகளுக்கு மேலே மின்விளக்குத் தொடர்கள் ஒளிர்கின்றன.",
      "quote": "அன்பான சூழல், சுவையான உணவு, நல்ல அண்டை வீட்டார் ஆகியோரால் சூழப்பட்டிருப்பதைவிடச் சிறந்த உணர்வு வேறில்லை.",
      "quoteBy": "ஹன்னா காலின்ஸ், குடியிருப்பாளர்",
      "place": "முற்றத்து வெளித்தளம்",
      "host": "நிகழ்வுகள் குழு",
      "people": "65 குடியிருப்பாளர்கள்"
    }
  }
};

/**
 * 获取指定地区的画廊数据（支持前缀匹配，如 MY 匹配 MY_PP、MY_JB；US 匹配 US_PL）
 */
export function getGallerySeed(countryCode = "MY_PP") {
  const cc = String(countryCode || "MY_PP").toUpperCase();
  return GALLERY_SEED
    .filter((event) => {
      if (!event.only) return true;
      // 支持国家与二级城市代码的前缀双向匹配
      return event.only === cc || cc.startsWith(event.only) || event.only.startsWith(cc);
    })
    .map((event) => {
      const translations = GALLERY_TRANSLATIONS[event.slug];
      if (!translations) return event;
      const localizedFields = {};
      Object.entries(translations).forEach(([locale, fields]) => {
        Object.entries(fields).forEach(([field, value]) => {
          localizedFields[`${field}_${locale}`] = value;
        });
      });
      return { ...event, ...localizedFields };
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

const TRANSLATABLE_FIELDS = ["tag", "short", "title", "lede", "body", "caption", "quote", "quoteBy", "place", "host", "people"];

/**
 * Fill missing Spanish/Tamil fields on Firestore records from matching curated seed stories.
 * Firestore remains authoritative; existing remote locale fields are never overwritten.
 */
export function mergeGalleryTranslations(rows, countryCode = "MY_PP") {
  const seedBySlug = new Map(getGallerySeed(countryCode).map((seed) => [seed.slug, seed]));
  return (Array.isArray(rows) ? rows : []).map((row) => {
    const seed = seedBySlug.get(row?.slug);
    if (!seed) return row;
    const merged = { ...row };
    ["es", "ta"].forEach((locale) => {
      TRANSLATABLE_FIELDS.forEach((field) => {
        const key = `${field}_${locale}`;
        if ((merged[key] === undefined || merged[key] === null || merged[key] === "") && seed[key] !== undefined) {
          merged[key] = seed[key];
        }
      });
    });
    return merged;
  });
}

