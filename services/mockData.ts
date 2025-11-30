

import { Product } from '../types';

// Helper to proxy images to bypass hotlink protection and resize for performance
// Using wsrv.nl which is very reliable for resizing and caching
const proxy = (url: string) => `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=800&q=80&output=webp`;

// Nitecore Base URL
const NC_BASE = 'https://www.nitecore.com';
const OLIGHT_CDN = 'https://cdn.olightstore.com/image';
const WUBEN_CDN = 'https://www.wubenlight.com/cdn/shop/files';
const VIC_CDN = 'https://imageengine.victorinox.com/transform';

export const products: Product[] = [
  // --- NITECORE FLASHLIGHTS ---
  {
      id: 'nitecore-p40',
      slug: 'nitecore-p40',
      name: 'Nitecore P40',
      brand: 'Nitecore',
      price: 179.95,
      category: 'tactical',
      description: {
          en: '2900-Meter Ultra-Long Throw Dual Beam LEP Flashlight. Delivers a maximum throw of 2900 meters and a blazing brightness of 2000 lumens.',
          fa: 'چراغ قوه LEP دو پرتو نایتکور P40 با برد فوق‌العاده طولانی ۲۹۰۰ متر و روشنایی خیره‌کننده ۲۰۰۰ لومن.',
          zh: 'NITECORE P40 超长射程双光束 LEP 手电筒，最大射程 2900 米，亮度高达 2000 流明。',
          es: 'Linterna LEP de doble haz de alcance ultra largo de 2900 metros. Ofrece un brillo resplandeciente de 2000 lúmenes.'
      },
      specs: {
          'Max Output': '2,000 Lumens',
          'Max Beam Distance': '2900 m',
          'Technology': 'LEP Dual Beam',
          'Feature': 'Adaptive Cruise'
      },
      images: [
          `${NC_BASE}/Uploads/FLASHLIGHTS/goods_img/1756177653.png`
      ].map(proxy),
      features: {
          en: ['LEP Technology', '2900m Throw', 'Dual Beam'],
          fa: ['تکنولوژی LEP', 'برد ۲۹۰۰ متر', 'پرتو دوگانه'],
          zh: ['LEP 技术', '2900米射程', '双光束'],
          es: ['Tecnología LEP', 'Alcance 2900m', 'Doble haz']
      },
      stock: 10
  },
  {
      id: 'nitecore-ex7',
      slug: 'nitecore-ex7',
      name: 'Nitecore EX7',
      brand: 'Nitecore',
      price: 129.95,
      category: 'tactical',
      description: {
          en: 'Variable Beam Pattern High Performance Flashlight equipped with M515S array LEDs. Max output of 6,000 lumens and a max throw of 500 meters.',
          fa: 'چراغ قوه با عملکرد بالا و الگوی پرتو متغیر EX7 مجهز به آرایه LEDهای M515S. حداکثر خروجی ۶۰۰۰ لومن و برد ۵۰۰ متر.',
          zh: 'NITECORE EX7 可变光束高性能手电筒，配备 M515S 阵列 LED。最大输出 6,000 流明，最大射程 500 米。',
          es: 'Linterna de alto rendimiento con patrón de haz variable equipada con matriz de LED M515S. Salida máxima de 6,000 lúmenes.'
      },
      specs: {
          'Max Output': '6,000 Lumens',
          'Max Beam Distance': '500 m',
          'LED': 'M515S Array',
          'Feature': 'Variable Beam'
      },
      images: [
          `${NC_BASE}/Uploads/FLASHLIGHTS/goods_img/1756969491.png`
      ].map(proxy),
      features: {
          en: ['Variable Beam', '6000 Lumens', 'M515S LEDs'],
          fa: ['پرتو متغیر', '۶۰۰۰ لومن', 'LEDهای M515S'],
          zh: ['可变光束', '6000 流明', 'M515S LED'],
          es: ['Haz variable', '6000 Lúmenes', 'LEDs M515S']
      },
      stock: 25
  },
  {
      id: 'nitecore-edc27-uhi',
      slug: 'nitecore-edc27-uhi',
      name: 'Nitecore EDC27 UHi',
      brand: 'Nitecore',
      price: 99.95,
      category: 'tactical',
      description: {
          en: 'Ultra Slim Tactical EDC Flashlight boasting UHi 20 LEDs with 3,100 lumens and a 305-meter throw. OLED power display.',
          fa: 'چراغ قوه تاکتیکی فوق باریک EDC دارای LEDهای UHi 20 با ۳۱۰۰ لومن و برد ۳۰۵ متر. نمایشگر توان OLED.',
          zh: '超薄战术 EDC 手电筒，配备 3,100 流明的 UHi 20 LED 和 305 米的射程。OLED 电量显示。',
          es: 'Linterna táctica EDC ultra delgada con LED UHi 20 de 3,100 lúmenes y un alcance de 305 metros.'
      },
      specs: {
          'Max Output': '3,100 Lumens',
          'Max Beam Distance': '305 m',
          'LED': 'UHi 20',
          'Feature': 'OLED Display'
      },
      images: [
          `${NC_BASE}/Uploads/Banner/original_img/1730343293.png`
      ].map(proxy),
      features: {
          en: ['Ultra Slim', 'UHi 20 LEDs', 'OLED Screen'],
          fa: ['فوق باریک', 'LEDهای UHi 20', 'صفحه OLED'],
          zh: ['超薄', 'UHi 20 LED', 'OLED 屏幕'],
          es: ['Ultra delgado', 'LEDs UHi 20', 'Pantalla OLED']
      },
      stock: 50
  },
  {
      id: 'nitecore-edc17',
      slug: 'nitecore-edc17',
      name: 'Nitecore EDC17',
      brand: 'Nitecore',
      price: 89.95,
      category: 'tactical',
      description: {
          en: 'Ultra Slim EDC Flashlight featuring three light sources: a 1,500-lumen white light, a 1,350mW UV light, and a <5mW green laser.',
          fa: 'چراغ قوه EDC فوق باریک دارای سه منبع نور: نور سفید ۱۵۰۰ لومن، نور UV و لیزر سبز.',
          zh: '超薄 EDC 手电筒，具有三种光源：1,500 流明白光、1,350mW 紫外线和 <5mW 绿激光。',
          es: 'Linterna EDC ultra delgada con tres fuentes de luz: blanca de 1,500 lúmenes, luz UV y láser verde.'
      },
      specs: {
          'Max Output': '1,500 Lumens',
          'Light Sources': 'White, UV, Laser',
          'Laser': 'Green <5mW',
          'Design': 'Ultra Slim'
      },
      images: [
          `${NC_BASE}/Uploads/FLASHLIGHTS/goods_img/1761616710.png`,
          `${NC_BASE}/Uploads/Banner/original_img/1761616373.webp`
      ].map(proxy),
      features: {
          en: ['Tri-Source', 'Green Laser', 'UV Light'],
          fa: ['سه منبع نور', 'لیزر سبز', 'نور UV'],
          zh: ['三光源', '绿激光', '紫外线'],
          es: ['Tres fuentes', 'Láser verde', 'Luz UV']
      },
      stock: 45
  },
  {
      id: 'nitecore-tup2',
      slug: 'nitecore-tup2',
      name: 'Nitecore TUP2',
      brand: 'Nitecore',
      price: 69.95,
      category: 'accessory',
      description: {
          en: 'Intelligent Three Color Temperatures Keychain Light. Equipped with four quad-core MCT UHE LEDs. Max output 1,200 lumens.',
          fa: 'چراغ جاکلیدی هوشمند با سه دمای رنگ. مجهز به چهار LED چهار هسته‌ای MCT UHE. حداکثر خروجی ۱۲۰۰ لومن.',
          zh: '智能三色温钥匙扣灯。配备四个四核 MCT UHE LED。最大输出 1,200 流明。',
          es: 'Luz de llavero inteligente con tres temperaturas de color. Salida máxima de 1,200 lúmenes.'
      },
      specs: {
          'Max Output': '1,200 Lumens',
          'Max Beam Distance': '125 m',
          'LED': '4x MCT UHE',
          'Display': 'OLED Real-time'
      },
      images: [
          `${NC_BASE}/Uploads/FLASHLIGHTS/goods_img/1759974394.png`,
          `${NC_BASE}/Uploads/Banner/original_img/1759974921.webp`
      ].map(proxy),
      features: {
          en: ['MCT UHE LEDs', 'OLED Display', '3 Color Temps'],
          fa: ['LEDهای MCT UHE', 'نمایشگر OLED', '۳ دمای رنگ'],
          zh: ['MCT UHE LED', 'OLED 显示屏', '三色温'],
          es: ['LEDs MCT UHE', 'Pantalla OLED', '3 Temp. Color']
      },
      stock: 100
  },
  {
      id: 'nitecore-nu25-mct',
      slug: 'nitecore-nu25-mct',
      name: 'Nitecore NU25 MCT',
      brand: 'Nitecore',
      price: 49.95,
      category: 'accessory',
      description: {
          en: 'Ultra Lightweight Multiple Color Temperatures Outdoor Headlamp. 400-lumen output and a 132m long throw.',
          fa: 'هدلامپ فضای باز فوق سبک با دمای رنگ چندگانه. خروجی ۴۰۰ لومن و برد ۱۳۲ متر.',
          zh: '超轻多色温户外头灯。400 流明输出和 132 米长射程。',
          es: 'Linterna frontal ultra ligera con múltiples temperaturas de color. Salida de 400 lúmenes y alcance de 132m.'
      },
      specs: {
          'Max Output': '400 Lumens',
          'Max Beam Distance': '132 m',
          'Weight': 'Ultra Lightweight',
          'LED': 'MCT UHE'
      },
      images: [
          `${NC_BASE}/Uploads/Banner/original_img/1749010537.png`
      ].map(proxy),
      features: {
          en: ['MCT UHE', 'Ultra Light', 'Long Throw'],
          fa: ['MCT UHE', 'فوق سبک', 'برد زیاد'],
          zh: ['MCT UHE', '超轻', '长射程'],
          es: ['MCT UHE', 'Ultra ligera', 'Largo alcance']
      },
      stock: 80
  },
  {
      id: 'nitecore-ut27-mct',
      slug: 'nitecore-ut27-mct',
      name: 'UT27 MCT - Reviewer Program',
      brand: 'Nitecore',
      price: 0.00,
      category: 'accessory',
      description: {
          en: 'REVIEWER WANTED: We’re giving away 100 UT27 MCT Headlamps completely FREE! Variable CRI Multiple Color Temperatures LED.',
          fa: 'فراخوان بررسی‌کننده: ما ۱۰۰ عدد هدلامپ UT27 MCT را کاملاً رایگان هدیه می‌دهیم! LED با CRI متغیر و دمای رنگ چندگانه.',
          zh: '寻找测评员：我们将免费赠送 100 个 UT27 MCT 头灯！可变 CRI 多色温 LED。',
          es: 'SE BUSCA REVISOR: ¡Regalamos 100 linternas frontales UT27 MCT GRATIS! LED de temperatura de color múltiple y CRI variable.'
      },
      specs: {
          'Max Output': '800 Lumens',
          'Max Beam Distance': '168 m',
          'Weight': '74 g',
          'Feature': 'Reviewer Giveaway'
      },
      images: [
          `${NC_BASE}/Uploads/FLASHLIGHTS/goods_img/1758248666.png`
      ].map(proxy),
      features: {
          en: ['Variable CRI', 'Triple Color', 'Giveaway'],
          fa: ['CRI متغیر', 'سه رنگ', 'هدیه'],
          zh: ['可变 CRI', '三色温', '赠品'],
          es: ['CRI Variable', 'Triple color', 'Regalo']
      },
      stock: 100,
      reviews: []
  },
  {
      id: 'nitecore-carbo10000-gen2',
      slug: 'nitecore-carbo10000-gen2',
      name: 'Carbo 10000 Gen2',
      brand: 'Nitecore',
      price: 99.95,
      category: 'power',
      description: {
          en: 'Professional Outdoor Fast-Charge Power Bank. 10,000mAh, up to 30W two-way fast charging. IPX8 waterproof carbon fiber shell.',
          fa: 'پاور بانک حرفه‌ای شارژ سریع فضای باز. ۱۰,۰۰۰ میلی‌آمپر ساعت، شارژ سریع دوطرفه تا ۳۰ وات. بدنه فیبر کربن ضد آب IPX8.',
          zh: '专业户外快充移动电源。10,000mAh，高达 30W 双向快充。IPX8 防水碳纤维外壳。',
          es: 'Batería externa profesional de carga rápida para exteriores. 10,000 mAh, hasta 30 W de carga rápida bidireccional.'
      },
      specs: {
          'Capacity': '10,000mAh',
          'Input/Output': '30W Fast Charge',
          'Material': 'Carbon Fiber',
          'Rating': 'IPX8 Waterproof'
      },
      images: [
          `${NC_BASE}/Uploads/CHARGERS/goods_img/1760324564.png`,
          `${NC_BASE}/Uploads/Banner/original_img/1760324264.webp`
      ].map(proxy),
      features: {
          en: ['30W Fast Charge', 'Carbon Fiber', 'IPX8'],
          fa: ['شارژ سریع ۳۰ وات', 'فیبر کربن', 'IPX8'],
          zh: ['30W 快充', '碳纤维', 'IPX8'],
          es: ['Carga rápida 30W', 'Fibra de carbono', 'IPX8']
      },
      stock: 40
  },
  {
      id: 'nitecore-nb10000-gen3',
      slug: 'nitecore-nb10000-gen3',
      name: 'NB10000 Gen3',
      brand: 'Nitecore',
      price: 59.95,
      category: 'power',
      description: {
          en: 'Lightweight carbon fiber power bank with a 10,000mAh capacity and 22.5W fast charging. Weighing only 150g (5.29 oz).',
          fa: 'پاور بانک فیبر کربنی سبک با ظرفیت ۱۰,۰۰۰ میلی‌آمپر ساعت و شارژ سریع ۲۲.۵ وات. وزن تنها ۱۵۰ گرم.',
          zh: '轻质碳纤维移动电源，容量 10,000mAh，支持 22.5W 快充。仅重 150 克。',
          es: 'Batería externa ligera de fibra de carbono con capacidad de 10,000 mAh y carga rápida de 22.5 W. Pesa solo 150 g.'
      },
      specs: {
          'Capacity': '10,000mAh',
          'Fast Charge': '22.5W',
          'Weight': '150 g',
          'Ports': 'Dual USB-C'
      },
      images: [
          `${NC_BASE}/Uploads/Banner/original_img/1730343180.png`
      ].map(proxy),
      features: {
          en: ['Ultra Light', 'Carbon Fiber', 'Dual USB-C'],
          fa: ['فوق سبک', 'فیبر کربن', 'دو پورت USB-C'],
          zh: ['超轻', '碳纤维', '双 USB-C'],
          es: ['Ultra ligera', 'Fibra de carbono', 'Doble USB-C']
      },
      stock: 60
  },
  {
      id: 'nitecore-cw20',
      slug: 'nitecore-cw20',
      name: 'CineWind™ CW20',
      brand: 'Nitecore',
      price: 119.95,
      category: 'tech',
      description: {
          en: 'Multipurpose pocket photography fan that fits easily in one hand. Features a 100W high power brushless motor.',
          fa: 'فن عکاسی جیبی چندمنظوره که به راحتی در یک دست جا می‌شود. دارای موتور براشلس پرقدرت ۱۰۰ وات.',
          zh: '多用途袖珍摄影风扇，单手即可轻松握持。配备 100W 大功率无刷电机。',
          es: 'Ventilador de fotografía de bolsillo multiusos. Cuenta con un motor sin escobillas de alta potencia de 100 W.'
      },
      specs: {
          'Power': '100W',
          'Motor': 'Brushless',
          'Battery': '26.64W Built-in',
          'Runtime': '20 mins max'
      },
      images: [
          `${NC_BASE}/Uploads/Banner/original_img/1730343284.png`
      ].map(proxy),
      features: {
          en: ['100W Motor', 'Pocket Size', 'Photography'],
          fa: ['موتور ۱۰۰ وات', 'اندازه جیبی', 'عکاسی'],
          zh: ['100W 电机', '袖珍尺寸', '摄影'],
          es: ['Motor 100W', 'Tamaño bolsillo', 'Fotografía']
      },
      stock: 15
  },

  // --- OLIGHT PRODUCTS ---
  {
      id: 'olight-arkpro-series',
      slug: 'olight-arkpro-series',
      name: 'ArkPro Series',
      brand: 'Olight',
      price: 103.99,
      category: 'flashlight',
      description: {
          en: 'ArkPro Series – Flat Unibody EDC Flashlight with Multi-Light Sources. The ultimate everyday carry light.',
          fa: 'سری ArkPro - چراغ قوه EDC تخت یکپارچه با منابع نوری متعدد. چراغ قوه نهایی برای حمل روزمره.',
          zh: 'ArkPro 系列 – 具有多光源的扁平一体式 EDC 手电筒。终极日常携带灯。',
          es: 'Serie ArkPro: linterna EDC plana de cuerpo único con múltiples fuentes de luz.'
      },
      specs: {
          'Max Output': 'High Perf',
          'Type': 'Flat EDC',
          'Feature': 'Multi-Light',
          'Body': 'Unibody'
      },
      images: [
          `https://cdn.olightstore.com/image/1-znz9n8.jpg@600w_600h_90q.webp`,
          `https://cdn.olightstore.com/image/hb-3-1-n2w35w.jpg@300w_300h_85q.webp`
      ].map(proxy),
      features: {
          en: ['Flat Design', 'Multi-Source', 'EDC'],
          fa: ['طراحی تخت', 'چند منبع', 'EDC'],
          zh: ['扁平设计', '多光源', 'EDC'],
          es: ['Diseño plano', 'Multi-fuente', 'EDC']
      },
      stock: 925
  },
  {
      id: 'olight-arkpro-bundle',
      slug: 'olight-arkpro-bundle',
      name: 'ArkPro Series Bundle',
      brand: 'Olight',
      price: 87.98,
      category: 'flashlight',
      description: {
          en: 'Exclusive ArkPro Series Bundle including flashlight and accessories.',
          fa: 'بسته انحصاری سری ArkPro شامل چراغ قوه و لوازم جانبی.',
          zh: '独家 ArkPro 系列套装，包括手电筒和配件。',
          es: 'Paquete exclusivo de la serie ArkPro que incluye linterna y accesorios.'
      },
      specs: {
          'Type': 'Bundle',
          'Includes': 'Flashlight + Acc',
          'Value': 'High',
          'Edition': 'Standard'
      },
      images: [
          `https://cdn.olightstore.com/image/0baf3a74-150d-4d2a-a097-fadcb4c5a0ee-fuffni.png@600w_600h_90q.webp`
      ].map(proxy),
      features: {
          en: ['Bundle Savings', 'Complete Set', 'Gift Ready'],
          fa: ['صرفه‌جویی در بسته', 'ست کامل', 'آماده هدیه'],
          zh: ['套装优惠', '全套', '礼品佳选'],
          es: ['Ahorro en paquete', 'Set completo', 'Listo para regalo']
      },
      stock: 500
  },
  {
      id: 'olight-warrior-ultra',
      slug: 'olight-warrior-ultra',
      name: 'Warrior Ultra',
      brand: 'Olight',
      price: 111.99,
      category: 'tactical',
      description: {
          en: 'Warrior Ultra 2500 Lumens Tactical Flashlight with OAL Material. Rugged and ready for action.',
          fa: 'چراغ قوه تاکتیکی Warrior Ultra با ۲۵۰۰ لومن و مواد OAL. مقاوم و آماده برای عمل.',
          zh: 'Warrior Ultra 2500 流明战术手电筒，采用 OAL 材料。坚固耐用，随时待命。',
          es: 'Linterna táctica Warrior Ultra de 2500 lúmenes con material OAL. Resistente y lista para la acción.'
      },
      specs: {
          'Max Output': '2500 Lumens',
          'Material': 'OAL',
          'Type': 'Tactical',
          'Durability': 'Extreme'
      },
      images: [
          `https://cdn.olightstore.com/image/guoqise-3-5pxgqc.jpg@600w_600h_90q.webp`
      ].map(proxy),
      features: {
          en: ['2500 Lumens', 'OAL Body', 'Tactical Tail'],
          fa: ['۲۵۰۰ لومن', 'بدنه OAL', 'دکمه انتهایی تاکتیکی'],
          zh: ['2500 流明', 'OAL以此', '战术尾盖'],
          es: ['2500 Lúmenes', 'Cuerpo OAL', 'Cola táctica']
      },
      stock: 470
  },
  {
      id: 'olight-marauder-mini-2',
      slug: 'olight-marauder-mini-2',
      name: 'Marauder Mini 2',
      brand: 'Olight',
      price: 175.99,
      category: 'flashlight',
      description: {
          en: 'Marauder Mini 2 Compact Powerful Flashlight. Flood and spot light combined.',
          fa: 'چراغ قوه قدرتمند و فشرده Marauder Mini 2. ترکیب نور پخش و متمرکز.',
          zh: 'Marauder Mini 2 紧凑型强光手电筒。泛光和聚光结合。',
          es: 'Linterna compacta y potente Marauder Mini 2. Luz de inundación y foco combinados.'
      },
      specs: {
          'Type': 'Mini Monster',
          'Beam': 'Flood + Spot',
          'Power': 'High Output',
          'Size': 'Compact'
      },
      images: [
          `https://cdn.olightstore.com/image/marauder-mini-2-ayl-wgdt-1000x1000-kc203d.gif`
      ].map(proxy),
      features: {
          en: ['Dual Beam', 'Compact', 'Powerful'],
          fa: ['پرتو دوگانه', 'فشرده', 'قدرتمند'],
          zh: ['双光束', '紧凑', '强大'],
          es: ['Doble haz', 'Compacta', 'Potente']
      },
      stock: 16
  },
  {
      id: 'olight-oclip-pro',
      slug: 'olight-oclip-pro',
      name: 'Oclip Pro',
      brand: 'Olight',
      price: 31.99,
      category: 'accessory',
      description: {
          en: 'Oclip Pro Clip on Flashlight with Floodlight, Spotlight and Red Light modes.',
          fa: 'چراغ قوه گیره‌ای Oclip Pro با حالت‌های نور پخش، متمرکز و نور قرمز.',
          zh: 'Oclip Pro 夹式手电筒，具有泛光、聚光和红光模式。',
          es: 'Linterna de clip Oclip Pro con modos de luz de inundación, foco y luz roja.'
      },
      specs: {
          'Modes': 'Spot, Flood, Red',
          'Mount': 'Clip-on',
          'Versatility': 'High',
          'Charging': 'USB-C'
      },
      images: [
          `https://cdn.olightstore.com/image/1-compressed-ab3lz6.jpg@600w_600h_90q.webp`,
          `https://cdn.olightstore.com/image/1-akty3s.jpg@300w_300h_85q.webp`
      ].map(proxy),
      features: {
          en: ['3 Modes', 'Clip-on', 'Red Light'],
          fa: ['۳ حالت', 'گیره‌ای', 'نور قرمز'],
          zh: ['3 种模式', '夹式', '红光'],
          es: ['3 Modos', 'De clip', 'Luz roja']
      },
      stock: 1200
  },
  {
      id: 'olight-osight-se',
      slug: 'olight-osight-se',
      name: 'Osight SE',
      brand: 'Olight',
      price: 149.99,
      category: 'tech',
      description: {
          en: 'Osight SE Enclosed Optic with RMSc Footprint and Replaceable Battery.',
          fa: 'اپتیک محصور Osight SE با ردپای RMSc و باتری قابل تعویض.',
          zh: 'Osight SE 封闭式光学瞄准镜，带有 RMSc 接口和可更换电池。',
          es: 'Óptica cerrada Osight SE con huella RMSc y batería reemplazable.'
      },
      specs: {
          'Type': 'Red Dot',
          'Footprint': 'RMSc',
          'Housing': 'Enclosed',
          'Power': 'Replaceable Bat'
      },
      images: [
          `https://cdn.olightstore.com/image/1-y0mqb0.jpg@600w_600h_90q.webp`,
          `https://cdn.olightstore.com/image/1-1skqkz.jpg@300w_300h_85q.webp`
      ].map(proxy),
      features: {
          en: ['RMSc Footprint', 'Enclosed', 'Clear Glass'],
          fa: ['ردپای RMSc', 'محصور', 'شیشه شفاف'],
          zh: ['RMSc 接口', '封闭式', '清晰玻璃'],
          es: ['Huella RMSc', 'Cerrada', 'Vidrio claro']
      },
      stock: 94
  },
  {
      id: 'olight-seeker-4-pro',
      slug: 'olight-seeker-4-pro',
      name: 'Seeker 4 Pro',
      brand: 'Olight',
      price: 97.99,
      category: 'flashlight',
      description: {
          en: 'Seeker 4 Pro High Power Flashlight with stepless dimming and holster.',
          fa: 'چراغ قوه پرقدرت Seeker 4 Pro با دیمر بدون پله و هولستر.',
          zh: 'Seeker 4 Pro 大功率手电筒，具有无级调光和皮套。',
          es: 'Linterna de alta potencia Seeker 4 Pro con atenuación continua y funda.'
      },
      specs: {
          'Max Output': '4600 Lumens',
          'Dimming': 'Stepless',
          'Charging': 'USB-C Holster',
          'Switch': 'Rotary Knob'
      },
      images: [
          `https://cdn.olightstore.com/image/3-1v7ngm-nr3wa9-684ffs.jpg@600w_600h_90q.webp`,
          `https://cdn.olightstore.com/image/4-lc7amt.jpg@300w_300h_85q.webp`
      ].map(proxy),
      features: {
          en: ['Rotary Switch', 'High Power', 'Holster Charging'],
          fa: ['سوئیچ چرخشی', 'قدرت بالا', 'شارژ هولستر'],
          zh: ['旋转开关', '大功率', '皮套充电'],
          es: ['Interruptor giratorio', 'Alta potencia', 'Carga en funda']
      },
      stock: 1991
  },
  {
      id: 'olight-perun-3',
      slug: 'olight-perun-3',
      name: 'Perun 3',
      brand: 'Olight',
      price: 63.99,
      category: 'accessory',
      description: {
          en: 'Perun 3 Headlamp 3000 Lumens White Light and Red Light.',
          fa: 'هدلامپ Perun 3 با ۳۰۰۰ لومن نور سفید و نور قرمز.',
          zh: 'Perun 3 头灯 3000 流明白光和红光。',
          es: 'Linterna frontal Perun 3 de 3000 lúmenes con luz blanca y luz roja.'
      },
      specs: {
          'Max Output': '3000 Lumens',
          'Type': 'Right Angle',
          'Light': 'White + Red',
          'Mount': 'Headband'
      },
      images: [
          `https://cdn.olightstore.com/image/042520fa-4b3e-4699-a8c0-ed34d2956401-zx6974.png@600w_600h_90q.webp`
      ].map(proxy),
      features: {
          en: ['3000 Lumens', 'Right Angle', 'Red Light'],
          fa: ['۳۰۰۰ لومن', 'زاویه قائمه', 'نور قرمز'],
          zh: ['3000 流明', '直角', '红光'],
          es: ['3000 Lúmenes', 'Ángulo recto', 'Luz roja']
      },
      stock: 531
  },

  // --- WUBEN PRODUCTS ---
  {
      id: 'wuben-x4-bundle',
      slug: 'wuben-x4-bundle',
      name: 'Wuben X4 Bundle',
      brand: 'Wuben',
      price: 69.98,
      category: 'flashlight',
      description: {
          en: 'X4 Compact Multi-Function Flashlight Bundle. 1500 Lumens, wireless charging lanyard. Includes G5 keychain light.',
          fa: 'بسته چراغ قوه چندمنظوره فشرده X4. ۱۵۰۰ لومن، بند شارژ بی‌سیم. شامل چراغ جاکلیدی G5.',
          zh: 'X4 紧凑型多功能手电筒套装。1500 流明，无线充电挂绳。包含 G5 钥匙扣灯。',
          es: 'Paquete de linterna multifunción compacta X4. 1500 lúmenes, cordón de carga inalámbrica. Incluye luz de llavero G5.'
      },
      specs: {
          'Max Output': '1500 Lumens',
          'Bundle': 'X4 + G5',
          'Charging': 'Wireless Lanyard',
          'Mount': 'Magnetic Base'
      },
      images: [
          `${WUBEN_CDN}/X4_G5.jpg`,
          `${WUBEN_CDN}/X4_1920x990_7d00b166-4791-4d4c-840f-0effd5b9fce8.jpg`
      ].map(proxy),
      features: {
          en: ['Bundle Deal', '1500 Lumens', 'Wireless Charge'],
          fa: ['معامله بسته', '۱۵۰۰ لومن', 'شارژ بی‌سیم'],
          zh: ['套装特惠', '1500 流明', '无线充电'],
          es: ['Oferta de paquete', '1500 Lúmenes', 'Carga inalámbrica']
      },
      stock: 50
  },
  {
      id: 'wuben-x4',
      slug: 'wuben-x4',
      name: 'Wuben X4',
      brand: 'Wuben',
      price: 38.99,
      category: 'flashlight',
      description: {
          en: 'Compact Multi-Function Flashlight. 1500 Lumens, versatile carrying options, 720H runtime.',
          fa: 'چراغ قوه چندمنظوره فشرده. ۱۵۰۰ لومن، گزینه‌های حمل متنوع، ۷۲۰ ساعت کارکرد.',
          zh: '紧凑型多功能手电筒。1500 流明，多种携带方式，720 小时续航。',
          es: 'Linterna multifunción compacta. 1500 lúmenes, opciones de transporte versátiles, 720 horas de autonomía.'
      },
      specs: {
          'Max Output': '1500 Lumens',
          'Runtime': '720H',
          'Carrying': 'Versatile',
          'Mount': 'Magnetic'
      },
      images: [
          `https://wsrv.nl/?url=https://www.wubenlight.com/cdn/shop/files/002.png&w=800&q=80&output=webp`
      ],
      features: {
          en: ['1500 Lumens', '720H Runtime', 'Versatile'],
          fa: ['۱۵۰۰ لومن', '۷۲۰ ساعت کارکرد', 'متنوع'],
          zh: ['1500 流明', '720 小时续航', '多功能'],
          es: ['1500 Lúmenes', '720H Autonomía', 'Versátil']
      },
      stock: 60
  },
  {
      id: 'wuben-x1',
      slug: 'wuben-x1',
      name: 'Wuben X1 Falcon',
      brand: 'Wuben',
      price: 143.99,
      category: 'flashlight',
      description: {
          en: 'Small and Powerful ECL Flashlight. 12,000 Lumens, Active Cooling System with built-in fan.',
          fa: 'چراغ قوه کوچک و قدرتمند ECL. ۱۲۰۰۰ لومن، سیستم خنک‌کننده فعال با فن داخلی.',
          zh: '小巧强劲的 ECL 手电筒。12,000 流明，内置风扇的主动散热系统。',
          es: 'Linterna ECL pequeña y potente. 12,000 lúmenes, sistema de refrigeración activa con ventilador integrado.'
      },
      specs: {
          'Max Output': '12,000 Lumens',
          'Cooling': 'Active Fan',
          'Battery': 'Built-in 21700',
          'Charging': 'USB-C PD'
      },
      images: [
          `https://wsrv.nl/?url=https://www.wubenlight.com/cdn/shop/files/X1_51d0feec-f511-4b81-8362-1ee3db898966.jpg&w=800&q=80&output=webp`
      ],
      features: {
          en: ['12000 Lumens', 'Active Cooling', 'PD Fast Charge'],
          fa: ['۱۲۰۰۰ لومن', 'خنک‌کننده فعال', 'شارژ سریع PD'],
          zh: ['12000 流明', '主动散热', 'PD 快充'],
          es: ['12000 Lúmenes', 'Refrigeración activa', 'Carga rápida PD']
      },
      stock: 15
  },
  {
      id: 'wuben-x2-pro',
      slug: 'wuben-x2-pro',
      name: 'Wuben X2 Pro',
      brand: 'Wuben',
      price: 45.99,
      category: 'flashlight',
      description: {
          en: 'Multifunctional Side Light Flashlight. 1500 Lumens, RGB or UV side light options for EDC, emergency, or tactical use.',
          fa: 'چراغ قوه با نور جانبی چندمنظوره. ۱۵۰۰ لومن، گزینه‌های نور جانبی RGB یا UV برای استفاده EDC، اضطراری یا تاکتیکی.',
          zh: '多功能侧光手电筒。1500 流明，适用于 EDC、紧急或战术使用的 RGB 或紫外线侧光选项。',
          es: 'Linterna con luz lateral multifuncional. 1500 lúmenes, opciones de luz lateral RGB o UV para uso EDC, de emergencia o táctico.'
      },
      specs: {
          'Max Output': '1,500 Lumens',
          'Side Light': 'RGB / UV',
          'Modes': '3 Main + Side',
          'Material': 'Aluminum'
      },
      images: [
          `https://wsrv.nl/?url=https://www.wubenlight.com/cdn/shop/files/241010_x2-pro__2000x2000-3.jpg&w=800&q=80&output=webp`
      ],
      features: {
          en: ['RGB/UV Side', '1500 Lumens', 'Versatile'],
          fa: ['نور جانبی RGB/UV', '۱۵۰۰ لومن', 'چندکاره'],
          zh: ['RGB/UV 侧光', '1500 流明', '多功能'],
          es: ['Lateral RGB/UV', '1500 Lúmenes', 'Versátil']
      },
      stock: 40
  },
  {
      id: 'wuben-x2',
      slug: 'wuben-x2',
      name: 'Wuben X2',
      brand: 'Wuben',
      price: 179.00,
      category: 'flashlight',
      description: {
          en: 'EDC Camping Flashlight. 2500 Lumens, 146m beam distance. Unique rectangular design fits perfectly in pocket.',
          fa: 'چراغ قوه کمپینگ EDC. ۲۵۰۰ لومن، برد نور ۱۴۶ متر. طراحی مستطیلی منحصر به فرد که کاملاً در جیب جا می‌شود.',
          zh: 'EDC 露营手电筒。2500 流明，146 米射程。独特的长方形设计，完美贴合口袋。',
          es: 'Linterna de camping EDC. 2500 lúmenes, distancia de haz de 146 m. Diseño rectangular único que cabe perfectamente en el bolsillo.'
      },
      specs: {
          'Max Output': '2,500 Lumens',
          'Beam Distance': '146 m',
          'Design': 'Rectangular',
          'Battery': '2000mAh'
      },
      images: [
          `https://wsrv.nl/?url=https://www.wubenlight.com/cdn/shop/files/X2_85cf6ed9-4a3c-4096-9d81-f73423ac2d39.jpg&w=800&q=80&output=webp`
      ],
      features: {
          en: ['Rectangular', '2500 Lumens', 'Compact'],
          fa: ['مستطیلی', '۲۵۰۰ لومن', 'فشرده'],
          zh: ['长方形', '2500 流明', '紧凑'],
          es: ['Rectangular', '2500 Lúmenes', 'Compacta']
      },
      stock: 25
  },
  {
      id: 'wuben-x0',
      slug: 'wuben-x0',
      name: 'Wuben X0 Knight',
      brand: 'Wuben',
      price: 179.00,
      category: 'flashlight',
      description: {
          en: 'Pocket Size EDC Flashlight. 800 Lumens, 7 modes. Magnetic tail cap and distinctive industrial design.',
          fa: 'چراغ قوه EDC جیبی. ۸۰۰ لومن، ۷ حالت. درپوش انتهایی مغناطیسی و طراحی صنعتی متمایز.',
          zh: '袖珍 EDC 手电筒。800 流明，7 种模式。磁吸尾盖和独特的工业设计。',
          es: 'Linterna EDC de tamaño de bolsillo. 800 lúmenes, 7 modos. Tapa trasera magnética y diseño industrial distintivo.'
      },
      specs: {
          'Max Output': '800 Lumens',
          'Modes': '7',
          'Tail': 'Magnetic',
          'Size': 'Pocket'
      },
      images: [
          `https://wsrv.nl/?url=https://www.wubenlight.com/cdn/shop/files/X0_21e8cda6-9e04-4de9-8a72-70c1ff1186e5.jpg&w=800&q=80&output=webp`
      ],
      features: {
          en: ['Pocket Size', 'Magnetic', 'Unique Look'],
          fa: ['اندازه جیبی', 'مغناطیسی', 'ظاهر خاص'],
          zh: ['袖珍尺寸', '磁吸', '独特外观'],
          es: ['Tamaño bolsillo', 'Magnética', 'Aspecto único']
      },
      stock: 30
  },
  {
      id: 'wuben-g5-bundle',
      slug: 'wuben-g5-bundle',
      name: 'Wuben G5 Bundle',
      brand: 'Wuben',
      price: 41.23,
      category: 'accessory',
      description: {
          en: 'G5 EDC Light Bundle. Quick release keychain light with E7 headlamp. Small & Bright.',
          fa: 'بسته چراغ EDC G5. چراغ جاکلیدی با آزادسازی سریع به همراه هدلامپ E7. کوچک و روشن.',
          zh: 'G5 EDC 灯套装。带 E7 头灯的快速释放钥匙扣灯。小巧明亮。',
          es: 'Paquete de luz EDC G5. Luz de llavero de liberación rápida con linterna frontal E7. Pequeña y brillante.'
      },
      specs: {
          'Max Output': '400/1800 Lumens',
          'Bundle': 'G5 + E7',
          'Type': 'EDC Combo',
          'Feature': 'Quick Release'
      },
      images: [
          `${WUBEN_CDN}/1_2de3a625-1923-4b80-9b62-6bed7c6a3b0b.jpg`,
          `${WUBEN_CDN}/G5_94fc98f6-4c83-4a72-a3a4-d2251d57d71a.jpg`
      ].map(proxy),
      features: {
          en: ['EDC Combo', 'Keychain Light', 'Headlamp'],
          fa: ['ترکیب EDC', 'چراغ جاکلیدی', 'هدلامپ'],
          zh: ['EDC 组合', '钥匙扣灯', '头灯'],
          es: ['Combo EDC', 'Luz de llavero', 'Linterna frontal']
      },
      stock: 100
  },
  {
      id: 'wuben-l3-bundle',
      slug: 'wuben-l3-bundle',
      name: 'Wuben L3 Bundle',
      brand: 'Wuben',
      price: 58.99,
      category: 'flashlight',
      description: {
          en: 'L3 Flashlight Bundle with PL01 Penlight. Versatile lighting solutions for tactical and everyday use.',
          fa: 'بسته چراغ قوه L3 با چراغ قلمی PL01. راه‌حل‌های روشنایی متنوع برای استفاده تاکتیکی و روزمره.',
          zh: 'L3 手电筒套装，带 PL01 笔灯。适用于战术和日常使用的多功能照明解决方案。',
          es: 'Paquete de linterna L3 con linterna tipo bolígrafo PL01. Soluciones de iluminación versátiles para uso táctico y diario.'
      },
      specs: {
          'Bundle': 'L3 + PL01',
          'Type': 'Tactical/Everyday',
          'Output': 'High Performance'
      },
      images: [
          `${WUBEN_CDN}/241010_x2-pro_1_1000x1000-1_7e6ae3e2-532d-4df7-97b7-e11d60636ac5.jpg` // Using generic as L3 specific img not found in text, reused X2 pro style or similar
      ].map(proxy),
      features: {
          en: ['Tactical Combo', 'Swivel Head', 'Penlight'],
          fa: ['ترکیب تاکتیکی', 'سر چرخشی', 'چراغ قلمی'],
          zh: ['战术组合', '旋转头', '笔灯'],
          es: ['Combo táctico', 'Cabezal giratorio', 'Linterna bolígrafo']
      },
      stock: 30
  },
  {
      id: 'wuben-pl01-bundle',
      slug: 'wuben-pl01-bundle',
      name: 'Wuben PL01 Bundle',
      brand: 'Wuben',
      price: 39.98,
      category: 'tactical',
      description: {
          en: 'PL01 Tactical Penlight Bundle. Rock solid, rechargeable, paired with G5.',
          fa: 'بسته چراغ قلمی تاکتیکی PL01. بسیار محکم، قابل شارژ، جفت شده با G5.',
          zh: 'PL01 战术笔灯套装。坚固耐用，可充电，搭配 G5。',
          es: 'Paquete de linterna táctica PL01. Sólida como una roca, recargable, emparejada con G5.'
      },
      specs: {
          'Type': 'Penlight',
          'Bundle': 'PL01 + G5',
          'Material': 'Aluminum'
      },
      images: [
          `${WUBEN_CDN}/r3_1be6e5af-0e8a-46b5-a4c2-652a5c000534.jpg`
      ].map(proxy),
      features: {
          en: ['Pen Design', 'Rechargeable', 'EDC Ready'],
          fa: ['طراحی قلمی', 'قابل شارژ', 'آماده EDC'],
          zh: ['笔式设计', '可充电', 'EDC 就绪'],
          es: ['Diseño de bolígrafo', 'Recargable', 'Listo para EDC']
      },
      stock: 45
  },
  {
      id: 'wuben-e1-bundle',
      slug: 'wuben-e1-bundle',
      name: 'Wuben E1 Bundle',
      brand: 'Wuben',
      price: 47.98,
      category: 'flashlight',
      description: {
          en: 'E1 Ultra Slim Flashlight Bundle. Phone-style flat design, easy carry.',
          fa: 'بسته چراغ قوه فوق باریک E1. طراحی تخت سبک گوشی، حمل آسان.',
          zh: 'E1 超薄手电筒套装。手机式扁平设计，便于携带。',
          es: 'Paquete de linterna ultra delgada E1. Diseño plano estilo teléfono, fácil de llevar.'
      },
      specs: {
          'Type': 'Flat Slim',
          'Bundle': 'E1 + G5',
          'Design': 'Modern'
      },
      images: [
          `${WUBEN_CDN}/E1_G5_b919c392-8e4c-4821-a17a-672fd14ac5b3.jpg`
      ].map(proxy),
      features: {
          en: ['Ultra Slim', 'Flat Body', 'Stylish'],
          fa: ['فوق باریک', 'بدنه تخت', 'شیک'],
          zh: ['超薄', '扁平机身', '时尚'],
          es: ['Ultra delgada', 'Cuerpo plano', 'Elegante']
      },
      stock: 40
  },
  {
      id: 'wuben-x3-bundle',
      slug: 'wuben-x3-bundle',
      name: 'Wuben X3 Owl Bundle',
      brand: 'Wuben',
      price: 76.48,
      category: 'flashlight',
      description: {
          en: 'X3 Owl Light Bundle. 180° rotating head, wireless charging box, dual LEDs.',
          fa: 'بسته چراغ جغد X3. سر چرخشی ۱۸۰ درجه، جعبه شارژ بی‌سیم، LEDهای دوگانه.',
          zh: 'X3 猫头鹰灯套装。180° 旋转头，无线充电盒，双 LED。',
          es: 'Paquete de luz búho X3. Cabezal giratorio de 180°, caja de carga inalámbrica, doble LED.'
      },
      specs: {
          'Max Output': '700 Lumens',
          'Feature': 'Rotating Head',
          'Bundle': 'X3 + G5',
          'Battery': 'Wireless Case'
      },
      images: [
          `${WUBEN_CDN}/13_9ee3d48f-301c-4b56-bca7-6fe2a3a487d8.jpg`
      ].map(proxy),
      features: {
          en: ['Rotating Head', 'Wireless Charge', 'Unique'],
          fa: ['سر چرخشی', 'شارژ بی‌سیم', 'منحصر به فرد'],
          zh: ['旋转头', '无线充电', '独特'],
          es: ['Cabezal giratorio', 'Carga inalámbrica', 'Único']
      },
      stock: 25
  },
  {
      id: 'wuben-c3-bundle',
      slug: 'wuben-c3-bundle',
      name: 'Wuben C3 Bundle',
      brand: 'Wuben',
      price: 40.48,
      category: 'flashlight',
      description: {
          en: 'C3 Economical Flashlight Bundle. High value, reliable everyday carry.',
          fa: 'بسته چراغ قوه اقتصادی C3. ارزش بالا، حمل روزمره قابل اعتماد.',
          zh: 'C3 经济型手电筒套装。高价值，可靠的日常携带。',
          es: 'Paquete de linterna económica C3. Alto valor, transporte diario confiable.'
      },
      specs: {
          'Max Output': '1200 Lumens',
          'Bundle': 'C3 + G2',
          'Value': 'Best Buy'
      },
      images: [
          `${WUBEN_CDN}/C3_G2_1b0ff306-c096-4a84-91d9-18df6194e30e.jpg`
      ].map(proxy),
      features: {
          en: ['Cost Effective', 'Reliable', 'EDC'],
          fa: ['مقرون به صرفه', 'قابل اعتماد', 'EDC'],
          zh: ['性价比高', '可靠', 'EDC'],
          es: ['Rentable', 'Confiable', 'EDC']
      },
      stock: 80
  },
  {
      id: 'wuben-e7-bundle',
      slug: 'wuben-e7-bundle',
      name: 'Wuben E7 Bundle',
      brand: 'Wuben',
      price: 49.48,
      category: 'flashlight',
      description: {
          en: 'E7 Headlamp/Flashlight Bundle. 1800 Lumens, includes extension accessories.',
          fa: 'بسته هدلامپ/چراغ قوه E7. ۱۸۰۰ لومن، شامل لوازم جانبی افزایشی.',
          zh: 'E7 头灯/手电筒套装。1800 流明，包括扩展配件。',
          es: 'Paquete de linterna frontal/linterna E7. 1800 lúmenes, incluye accesorios de extensión.'
      },
      specs: {
          'Max Output': '1800 Lumens',
          'Bundle': 'E7 + L50',
          'Type': 'Headlamp'
      },
      images: [
          `${WUBEN_CDN}/23_c429985b-7909-4f4f-8708-4c10a9b97dff.jpg`
      ].map(proxy),
      features: {
          en: ['1800 Lumens', 'Wearable', 'Compact'],
          fa: ['۱۸۰۰ لومن', 'قابل پوشیدن', 'فشرده'],
          zh: ['1800 流明', '可穿戴', '紧凑'],
          es: ['1800 Lúmenes', 'Ponible', 'Compacta']
      },
      stock: 55
  },
  {
      id: 'wuben-l50-bundle',
      slug: 'wuben-l50-bundle',
      name: 'Wuben L50 Bundle',
      brand: 'Wuben',
      price: 52.78,
      category: 'flashlight',
      description: {
          en: 'L50 Tactical Flashlight Bundle. Proven reliability, classic tail switch design.',
          fa: 'بسته چراغ قوه تاکتیکی L50. قابلیت اطمینان اثبات شده، طراحی کلاسیک سوئیچ دمی.',
          zh: 'L50 战术手电筒套装。经过验证的可靠性，经典尾部开关设计。',
          es: 'Paquete de linterna táctica L50. Fiabilidad probada, diseño clásico de interruptor trasero.'
      },
      specs: {
          'Max Output': '1200 Lumens',
          'Bundle': 'L50 + E7',
          'Switch': 'Tail Clicky'
      },
      images: [
          `${WUBEN_CDN}/L50_E7.jpg`
      ].map(proxy),
      features: {
          en: ['Tactical Tail', 'Robust', 'Classic'],
          fa: ['دمی تاکتیکی', 'مقاوم', 'کلاسیک'],
          zh: ['战术尾盖', '坚固', '经典'],
          es: ['Cola táctica', 'Robusta', 'Clásica']
      },
      stock: 60
  },

  // --- VICTORINOX PRODUCTS ---
  {
      id: 'vic-classic-sd',
      slug: 'victorinox-classic-sd',
      name: 'Classic SD Classic Colors',
      brand: 'Victorinox',
      price: 24.00,
      category: 'knife',
      description: {
          en: 'For more than a century, the Classic SD has been an icon of sleek functionality. And we’ve brought it bang up to date in a bold range of peppy colors.',
          fa: 'برای بیش از یک قرن، Classic SD نمادی از کارایی شیک بوده است. و ما آن را با طیف جسورانه‌ای از رنگ‌های شاد به‌روز کرده‌ایم.',
          zh: '一个多世纪以来，Classic SD 一直是时尚功能的象征。我们用一系列大胆的活力色彩将其带入现代。',
          es: 'Durante más de un siglo, la Classic SD ha sido un icono de funcionalidad elegante. Y la hemos actualizado con una audaz gama de colores alegres.'
      },
      specs: {
          'Length': '58 mm',
          'Tools': '7 Functions',
          'Weight': '21 g',
          'Scale Material': 'ABS / Cellidor'
      },
      images: [
          `${VIC_CDN}/d391e6ed-e58b-4081-896e-046d554293a4/SAK_0-6223_S1-jpg`,
          `${VIC_CDN}/8db14b5c-4e20-4a4b-aa37-f51a0f6bf5f9/SAK_0_6223__S4-tif`
      ].map(proxy),
      features: {
          en: ['Small Blade', 'Scissors', 'Nail File', 'Screwdriver'],
          fa: ['تیغه کوچک', 'قیچی', 'سوهان ناخن', 'پیچ‌گوشتی'],
          zh: ['小刀', '剪刀', '指甲锉', '螺丝刀'],
          es: ['Hoja pequeña', 'Tijeras', 'Lima de uñas', 'Destornillador']
      },
      stock: 150
  },
  {
      id: 'vic-synergy-x',
      slug: 'victorinox-synergy-x',
      name: 'Synergy X Alox',
      brand: 'Victorinox',
      price: 85.00,
      category: 'knife',
      description: {
          en: 'We designed the Synergy X Alox as part of our Alox Refined collection. Building on the synergy theme, we added the "X" to represent extended functionality with the addition of precision scissors.',
          fa: 'ما Synergy X Alox را به عنوان بخشی از مجموعه Alox Refined طراحی کردیم. با تکیه بر تم هم‌افزایی، "X" را برای نشان دادن عملکرد گسترده با افزودن قیچی دقیق اضافه کردیم.',
          zh: '我们设计了 Synergy X Alox 作为 Alox Refined 系列的一部分。基于协同主题，我们添加了“X”以代表通过增加精密剪刀扩展的功能。',
          es: 'Diseñamos la Synergy X Alox como parte de nuestra colección Alox Refined. Basándonos en el tema de la sinergia, añadimos la "X" para representar la funcionalidad extendida con la adición de tijeras de precisión.'
      },
      specs: {
          'Tools': '10 Functions',
          'Scales': 'Alox',
          'Feature': 'Skeletonized',
          'Series': 'Alox Refined'
      },
      images: [
          `${VIC_CDN}/12c466ee-728e-41e9-ac2c-e5d6ad66b975/SAK_0-8226-20_S1`
      ].map(proxy),
      features: {
          en: ['Precision Scissors', 'Alox Scales', 'Skeletonized', '10 Functions'],
          fa: ['قیچی دقیق', 'دسته‌های Alox', 'اسکلتی', '۱۰ عملکرد'],
          zh: ['精密剪刀', 'Alox 刀柄', '镂空设计', '10 种功能'],
          es: ['Tijeras de precisión', 'Cachas Alox', 'Esqueleto', '10 Funciones']
      },
      stock: 40
  },
  {
      id: 'vic-huntsman',
      slug: 'victorinox-huntsman',
      name: 'Huntsman',
      brand: 'Victorinox',
      price: 55.00,
      category: 'knife',
      description: {
          en: 'When you hear the words Swiss Army Knife, chances are you think of the legendary Officer\'s knife. And that legend continues with the Huntsman pocket knife.',
          fa: 'وقتی کلمات چاقوی ارتش سوئیس را می‌شنوید، احتمالاً به یاد چاقوی افسری افسانه‌ای می‌افتید. و آن افسانه با چاقوی جیبی Huntsman ادامه می‌یابد.',
          zh: '当您听到瑞士军刀这个词时，您很可能会想到传奇的军官刀。Huntsman 口袋刀延续了这一传奇。',
          es: 'Cuando escuchas las palabras Navaja Suiza, es probable que pienses en la legendaria navaja de oficial. Y esa leyenda continúa con la navaja de bolsillo Huntsman.'
      },
      specs: {
          'Length': '91 mm',
          'Tools': '15 Functions',
          'Weight': '97 g',
          'Handle': 'ABS / Cellidor'
      },
      images: [
          `${VIC_CDN}/be27477a-5deb-4412-87dd-ba03f429520c/SAK_1-3713_S1-tif`,
          `${VIC_CDN}/047f68fe-2b25-44a1-8344-3c713f48e28e/SAK_1_3711_63` // Wood version as variant image
      ].map(proxy),
      features: {
          en: ['Large Blade', 'Scissors', 'Wood Saw', 'Corkscrew'],
          fa: ['تیغه بزرگ', 'قیچی', 'اره چوب', 'چوب پنبه بازکن'],
          zh: ['大刀', '剪刀', '木锯', '开瓶器'],
          es: ['Hoja grande', 'Tijeras', 'Sierra para madera', 'Sacacorchos']
      },
      stock: 100
  },
  {
      id: 'vic-climber-wood-winter',
      slug: 'victorinox-climber-wood-winter',
      name: 'Climber Wood Winter Magic 2025',
      brand: 'Victorinox',
      price: 110.00,
      category: 'knife',
      description: {
          en: 'A collectible at the apex of individuality, Winter Magic 2025 cuts a distinguished profile. Featuring a unique design inspired by the wonder of the winter season.',
          fa: 'یک کالکسیون در اوج فردیت، Winter Magic 2025 پروفایل متمایزی را برش می‌دهد. دارای طراحی منحصر به فرد با الهام از شگفتی فصل زمستان.',
          zh: '作为个性的巅峰收藏品，Winter Magic 2025 展现出卓越的风采。采用受冬季奇观启发的独特设计。',
          es: 'Un objeto de colección en la cúspide de la individualidad, Winter Magic 2025 presenta un perfil distinguido. Con un diseño único inspirado en la maravilla de la temporada de invierno.'
      },
      specs: {
          'Edition': 'Limited 2025',
          'Material': 'Pear Wood',
          'Limit': '10,000 pcs',
          'Tools': '14 Functions'
      },
      images: [
          `${VIC_CDN}/40585665-81ae-4814-8a55-070017e9c74e/SAK_1-3701-63E1_S1`
      ].map(proxy),
      features: {
          en: ['Pear Wood Scales', 'Winter Design', 'Limited Edition'],
          fa: ['دسته‌های چوب گلابی', 'طراحی زمستانی', 'نسخه محدود'],
          zh: ['梨木刀柄', '冬季设计', '限量版'],
          es: ['Cachas de madera de peral', 'Diseño invernal', 'Edición limitada']
      },
      stock: 5
  },
  {
      id: 'vic-synergy-alox',
      slug: 'victorinox-synergy-alox',
      name: 'Synergy Alox',
      brand: 'Victorinox',
      price: 75.00,
      category: 'knife',
      description: {
          en: 'We designed the Synergy Alox as part of our Alox Refined collection. The goal is to offer ultimate versatility in a modernized and minimalistic design.',
          fa: 'ما Synergy Alox را به عنوان بخشی از مجموعه Alox Refined طراحی کردیم. هدف ارائه نهایت تطبیق‌پذیری در طراحی مدرن و مینیمالیستی است.',
          zh: '我们设计了 Synergy Alox 作为 Alox Refined 系列的一部分。目标是在现代化和简约的设计中提供终极的多功能性。',
          es: 'Diseñamos la Synergy Alox como parte de nuestra colección Alox Refined. El objetivo es ofrecer la máxima versatilidad en un diseño modernizado y minimalista.'
      },
      specs: {
          'Tools': '9 Functions',
          'Scales': 'Alox',
          'Design': 'Minimalistic',
          'Color': 'Red/Blue/Silver'
      },
      images: [
          `${VIC_CDN}/50a246db-6f11-48cb-8832-f28155bd86f8/SAK_0-8216-20_S1`
      ].map(proxy),
      features: {
          en: ['9 Essential Tools', 'Minimalist', 'Alox Durability'],
          fa: ['۹ ابزار ضروری', 'مینیمالیست', 'دوام Alox'],
          zh: ['9 种基本工具', '极简主义', 'Alox 耐用性'],
          es: ['9 Herramientas esenciales', 'Minimalista', 'Durabilidad Alox']
      },
      stock: 35
  },
  {
      id: 'vic-onefold-alox',
      slug: 'victorinox-onefold-alox',
      name: 'Onefold Alox',
      brand: 'Victorinox',
      price: 55.00,
      category: 'knife',
      description: {
          en: 'We designed the Onefold Alox as part of our Alox Refined collection. The goal is to offer ultimate simplicity and practicality. Features a large lockable blade.',
          fa: 'ما Onefold Alox را به عنوان بخشی از مجموعه Alox Refined طراحی کردیم. هدف ارائه نهایت سادگی و کاربردی بودن است. دارای یک تیغه بزرگ قفل‌شو.',
          zh: '我们设计了 Onefold Alox 作为 Alox Refined 系列的一部分。目标是提供极致的简单性和实用性。具有可锁定的大刀片。',
          es: 'Diseñamos la Onefold Alox como parte de nuestra colección Alox Refined. El objetivo es ofrecer la máxima simplicidad y practicidad. Cuenta con una gran hoja bloqueable.'
      },
      specs: {
          'Blade': 'Large Lockable',
          'Clip': 'Riveted Carry Clip',
          'Scales': 'Skeletonized Alox',
          'Color': 'Red/Blue/Silver'
      },
      images: [
          `${VIC_CDN}/e65c664d-7612-4d75-8362-19f153060c2e/SAK_0-8006-20_S1`
      ].map(proxy),
      features: {
          en: ['Lockable Blade', 'Carry Clip', 'Simple Design'],
          fa: ['تیغه قفل‌شو', 'گیره حمل', 'طراحی ساده'],
          zh: ['可锁定刀片', '携带夹', '简单设计'],
          es: ['Hoja bloqueable', 'Clip de transporte', 'Diseño simple']
      },
      stock: 30
  },
  {
      id: 'vic-spartan',
      slug: 'victorinox-spartan',
      name: 'Spartan',
      brand: 'Victorinox',
      price: 35.00,
      category: 'knife',
      description: {
          en: 'The Spartan is the descendant of the legendary "Officer\'s Knife" of 1897 and one of the bestsellers. 12 functions.',
          fa: 'Spartan نواده "چاقوی افسری" افسانه‌ای سال ۱۸۹۷ و یکی از پرفروش‌ترین‌هاست. ۱۲ عملکرد.',
          zh: 'Spartan 是 1897 年传奇“军官刀”的后代，也是畅销品之一。12 种功能。',
          es: 'La Spartan es descendiente de la legendaria "Navaja de Oficial" de 1897 y una de las más vendidas. 12 funciones.'
      },
      specs: {
          'Length': '91 mm',
          'Tools': '12 Functions',
          'Weight': '59 g',
          'Origin': 'Swiss Made'
      },
      images: [
          `${VIC_CDN}/3e41526b-7ced-4cc1-8fee-c8447ed9d818/SAK_1_3603_S1-tif`,
          `${VIC_CDN}/43262447-d147-4375-a9c4-59d08baaf740/SAK_1_3603__S4-tif`
      ].map(proxy),
      features: {
          en: ['Large Blade', 'Corkscrew', 'Can Opener', 'Tweezers'],
          fa: ['تیغه بزرگ', 'چوب پنبه بازکن', 'درب بازکن قوطی', 'موچین'],
          zh: ['大刀', '开瓶器', '开罐器', '镊子'],
          es: ['Hoja grande', 'Sacacorchos', 'Abrelatas', 'Pinzas']
      },
      stock: 200
  },
  {
      id: 'vic-swiss-card',
      slug: 'victorinox-swiss-card',
      name: 'Swiss Card Classic',
      brand: 'Victorinox',
      price: 42.00,
      category: 'accessory',
      description: {
          en: 'You\'ll be amazed at how many tools we\'ve packed into the Swiss Card. And you\'ll be surprised at how often you need one of those tools tucked away inside.',
          fa: 'شگفت‌زده خواهید شد که چه تعداد ابزار را در Swiss Card جای داده‌ایم. و تعجب خواهید کرد که چقدر اغلب به یکی از آن ابزارهای پنهان شده در داخل نیاز دارید.',
          zh: '您会惊讶于我们在瑞士卡中装入了多少工具。您也会惊讶于您多久需要一次隐藏在里面的工具。',
          es: 'Te sorprenderá cuántas herramientas hemos empaquetado en la Swiss Card. Y te sorprenderá la frecuencia con la que necesitas una de esas herramientas escondidas dentro.'
      },
      specs: {
          'Format': 'Credit Card',
          'Tools': '10 Functions',
          'Thickness': '4 mm',
          'Weight': '26 g'
      },
      images: [
          `${VIC_CDN}/afea1063-fc35-4e8f-b9a0-660264e091fe/SAK_0_7100_T__S1-tif`,
          `${VIC_CDN}/59492ec2-15fb-4d81-a146-c97f2274dacf/SAK_0_7100_T__S3-tif`
      ].map(proxy),
      features: {
          en: ['Wallet Sized', 'Scissors', 'Blade', 'Pen'],
          fa: ['اندازه کیف پول', 'قیچی', 'تیغه', 'خودکار'],
          zh: ['钱包大小', '剪刀', '刀片', '笔'],
          es: ['Tamaño billetera', 'Tijeras', 'Hoja', 'Bolígrafo']
      },
      stock: 85
  },
  {
      id: 'vic-huntsman-horse',
      slug: 'victorinox-huntsman-horse-2026',
      name: 'Huntsman Year of the Horse',
      brand: 'Victorinox',
      price: 135.00,
      category: 'knife',
      description: {
          en: 'Bold in aesthetic, emboldening in symbolism: Huntsman Year of the Horse 2026 is a collector’s piece of ambition and originality. Limited to 8,888 pieces.',
          fa: 'جسورانه در زیبایی‌شناسی، جسورانه در نمادین بودن: Huntsman سال اسب ۲۰۲۶ یک قطعه کلکسیونی از جاه‌طلبی و اصالت است. محدود به ۸۸۸۸ قطعه.',
          zh: '审美大胆，象征意义大胆：Huntsman 2026 马年特别版是雄心壮志和原创性的收藏品。限量 8,888 件。',
          es: 'Audaz en estética, envalentonado en simbolismo: Huntsman Año del Caballo 2026 es una pieza de colección de ambición y originalidad. Limitado a 8,888 piezas.'
      },
      specs: {
          'Edition': 'Year of Horse 2026',
          'Limit': '8,888 pcs',
          'Tools': '16 Functions',
          'Packaging': 'Special Box'
      },
      images: [
          `${VIC_CDN}/ed7ff060-2838-4a0e-9f59-067c5a7523a8/SAK_1-3714-E15_S1`
      ].map(proxy),
      features: {
          en: ['Zodiac Design', 'Limited Edition', 'Collector Box'],
          fa: ['طراحی زودیاک', 'نسخه محدود', 'جعبه کلکسیونی'],
          zh: ['生肖设计', '限量版', '收藏盒'],
          es: ['Diseño del zodiaco', 'Edición limitada', 'Caja de coleccionista']
      },
      stock: 8
  },
  {
      id: 'vic-nail-clip-580',
      slug: 'victorinox-nail-clip-580',
      name: 'Nail Clip 580',
      brand: 'Victorinox',
      price: 32.00,
      category: 'accessory',
      description: {
          en: 'You deserve to enjoy a multifunctional tool that\'s as sharp as your style. The compact Nail Clip 580 will follow you anywhere.',
          fa: 'شما سزاوار لذت بردن از یک ابزار چندمنظوره هستید که به اندازه سبک شما تیز است. Nail Clip 580 جمع‌وجور شما را همه جا دنبال خواهد کرد.',
          zh: '您理应享受一款像您的风格一样锐利的多功能工具。紧凑的 Nail Clip 580 将随您到任何地方。',
          es: 'Mereces disfrutar de una herramienta multifuncional que sea tan afilada como tu estilo. El compacto Nail Clip 580 te seguirá a todas partes.'
      },
      specs: {
          'Length': '65 mm',
          'Tools': '8 Functions',
          'Feature': 'Nail Clipper',
          'Weight': '36 g'
      },
      images: [
          `${VIC_CDN}/9a45c047-199b-4715-88be-b469f785601f/SAK_0-6463_S1_Reddot-tif`,
          `${VIC_CDN}/75bb2b01-495f-467a-b70f-a5412ea6f010/SAK_0_6463__S2-tif`
      ].map(proxy),
      features: {
          en: ['Nail Clipper', 'Nail File', 'Scissors', 'Key Ring'],
          fa: ['ناخن‌گیر', 'سوهان ناخن', 'قیچی', 'حلقه کلید'],
          zh: ['指甲刀', '指甲锉', '剪刀', '钥匙圈'],
          es: ['Cortaúñas', 'Lima de uñas', 'Tijeras', 'Anillo']
      },
      stock: 60
  }
];
