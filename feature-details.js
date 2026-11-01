// Adds a focused, keyboard-accessible detail view to each community pillar.
// The existing modal layout stays intact; the selected item reveals its own copy.
(() => {
  const details = {
    smartFacilitiesModal: [
      "Pay community charges and facility fees through a clear, convenient digital flow. Residents can review what they owe and keep a record of completed payments. This exhibition version uses a sandbox checkout, so no real money is charged.",
      "Check availability and reserve shared spaces such as the gym, pool or community hall. A booking calendar helps residents plan ahead and avoid double bookings.",
      "Submit requests for shared supplies or maintenance work and follow each request from submission to completion, helping management keep decisions transparent.",
      "Send forms such as maintenance requests and resident applications online, then receive a clear confirmation so there is less paperwork and fewer follow-up calls.",
    ],
    communitySafetyModal: [
      "Keep service agreements, renewal dates and related documents organized in one place, so residents and management can understand what has been agreed.",
      "Register expected guests and let residents know when a visitor arrives. Clear check-in steps help make entry smoother while preserving a human welcome.",
      "Use shared-area camera systems to help the management team review safety incidents. Monitoring should follow local privacy rules and posted community policies.",
      "Coordinate patrol routes and record observations so the team can respond consistently to concerns around entrances, paths and shared facilities.",
    ],
    greenLivingModal: [
      "Adjust watering schedules to weather and planting needs, helping gardens stay healthy while reducing avoidable water use.",
      "Make recycling and composting easier to understand with clear sorting guidance and collection points residents can find around the community.",
      "Provide charging points for electric vehicles and show residents where they are located, supporting lower-emission travel as the community grows.",
      "Track practical steps such as efficient lighting and equipment schedules to reduce energy waste in shared spaces without compromising comfort.",
    ],
    communityConnectModal: [
      "Read current notices from your selected community, including service updates and time-sensitive information.",
      "Browse the community calendar for upcoming activities, dates and practical event information.",
      "Find volunteer opportunities, read what each activity involves and register to take part.",
      "Reach the local management team using the contact information for the region currently selected on the website.",
    ],
  };

  const detailsByLanguage = {
    en: details,
    es: {
      smartFacilitiesModal: [
        "Paga las cuotas comunitarias y las tarifas de las instalaciones mediante un proceso digital claro y cómodo. Los residentes pueden consultar los importes pendientes y conservar un registro de los pagos. Esta versión de demostración utiliza un entorno de pruebas y no cobra dinero real.",
        "Consulta la disponibilidad y reserva espacios compartidos como el gimnasio, la piscina o el salón comunitario. Un calendario de reservas ayuda a planificar con antelación y evitar duplicaciones.",
        "Envía solicitudes de suministros compartidos o mantenimiento y sigue cada solicitud hasta su finalización, para que la gestión mantenga las decisiones transparentes.",
        "Envía formularios, como solicitudes de mantenimiento y trámites de residentes, por internet y recibe una confirmación clara, con menos papeleo y llamadas de seguimiento.",
      ],
      communitySafetyModal: [
        "Organiza en un solo lugar los acuerdos de servicio, las fechas de renovación y los documentos relacionados, para que residentes y administración sepan qué se ha acordado.",
        "Registra las visitas previstas y avisa a los residentes cuando llegue un visitante. Un proceso de entrada claro facilita el acceso sin perder la cordialidad.",
        "Utiliza los sistemas de cámaras de las zonas comunes para ayudar al equipo de gestión a revisar incidentes de seguridad. La vigilancia debe cumplir las normas locales de privacidad y las políticas publicadas.",
        "Coordina las rutas de patrulla y registra observaciones para responder de forma coherente a las inquietudes cerca de las entradas, senderos e instalaciones compartidas.",
      ],
      greenLivingModal: [
        "Ajusta los horarios de riego según el clima y las necesidades de las plantas, para mantener los jardines saludables y reducir el consumo innecesario de agua.",
        "Facilita el reciclaje y el compostaje con instrucciones claras para separar residuos y puntos de recogida fáciles de localizar.",
        "Ofrece puntos de carga para vehículos eléctricos e indica dónde se encuentran, apoyando desplazamientos con menos emisiones.",
        "Controla medidas prácticas, como la iluminación eficiente y los horarios de los equipos, para reducir el desperdicio de energía sin sacrificar la comodidad.",
      ],
      communityConnectModal: [
        "Lee los avisos actuales de la comunidad seleccionada, incluidas las actualizaciones de servicios y la información urgente.",
        "Consulta el calendario comunitario para conocer las próximas actividades, fechas e información práctica de los eventos.",
        "Descubre oportunidades de voluntariado, conoce cada actividad e inscríbete para participar.",
        "Contacta con el equipo de administración local mediante los datos de la región seleccionada en el sitio web.",
      ],
    },
    "zh-CN": {
      smartFacilitiesModal: [
        "通过清晰便捷的数字流程缴纳社区管理费及设施费用。居民可以查看应缴款项，并保留已完成付款的记录。本演示版本使用测试结账环境，不会收取真实款项。",
        "查看健身房、泳池或社区会所等共享空间的可用时段并进行预约。预约日历帮助居民提前安排，避免重复预订。",
        "提交共享用品或维修申请，并跟踪每项申请直至完成，让管理流程更加透明。",
        "在线提交维修申请、居民申请等表格，并获得明确确认，减少纸张手续和后续电话沟通。",
      ],
      communitySafetyModal: [
        "将服务协议、续约日期及相关文件整理在同一处，让居民和管理团队清楚了解已达成的安排。",
        "登记预计到访的访客，并在访客抵达时通知居民。清晰的登记流程让出入更顺畅，同时保留人情味。",
        "利用公共区域摄像系统协助管理团队查看安全事件。监控必须遵守当地隐私法规及已公布的社区政策。",
        "协调巡逻路线并记录观察情况，让团队能够一致地处理入口、步道及共享设施周边的问题。",
      ],
      greenLivingModal: [
        "根据天气和植物需求调整浇水时间，在保持花园健康的同时减少不必要的用水。",
        "通过清晰的分类指引和方便寻找的回收点，让居民更容易进行回收与堆肥。",
        "提供电动车充电点并标明位置，支持社区逐步采用更低排放的出行方式。",
        "通过高效照明和设备运行时段等实际措施，减少公共空间的能源浪费，同时保持舒适度。",
      ],
      communityConnectModal: [
        "阅读当前所选社区的最新通知，包括服务更新和时效性信息。",
        "浏览社区日历，了解即将举行的活动、日期及实用信息。",
        "寻找志愿服务机会，了解活动内容并报名参与。",
        "使用网站当前所选地区的联系方式，与当地管理团队取得联系。",
      ],
    },
    ms: {
      smartFacilitiesModal: [
        "Bayar caj komuniti dan yuran kemudahan melalui proses digital yang jelas dan mudah. Penduduk boleh menyemak jumlah tertunggak serta menyimpan rekod pembayaran. Versi demonstrasi ini menggunakan pembayaran ujian dan tidak mengenakan caj sebenar.",
        "Semak ketersediaan dan tempah ruang bersama seperti gimnasium, kolam renang atau dewan komuniti. Kalendar tempahan membantu penduduk merancang lebih awal dan mengelakkan tempahan bertindih.",
        "Hantar permintaan bekalan bersama atau kerja penyelenggaraan dan ikuti statusnya sehingga selesai, supaya keputusan pengurusan lebih telus.",
        "Hantar borang seperti permintaan penyelenggaraan dan permohonan penduduk secara dalam talian, kemudian terima pengesahan yang jelas dengan kurang urusan kertas dan panggilan susulan.",
      ],
      communitySafetyModal: [
        "Susun perjanjian perkhidmatan, tarikh pembaharuan dan dokumen berkaitan di satu tempat supaya penduduk dan pengurusan memahami persetujuan yang telah dibuat.",
        "Daftarkan tetamu yang dijangka hadir dan maklumkan penduduk apabila pelawat tiba. Langkah daftar masuk yang jelas melancarkan kemasukan sambil mengekalkan layanan mesra.",
        "Gunakan sistem kamera kawasan bersama untuk membantu pasukan pengurusan menyemak insiden keselamatan. Pemantauan mesti mematuhi undang-undang privasi tempatan dan dasar komuniti yang dipaparkan.",
        "Selaraskan laluan rondaan dan rekod pemerhatian supaya pasukan dapat menangani kebimbangan di pintu masuk, laluan pejalan kaki dan kemudahan bersama secara konsisten.",
      ],
      greenLivingModal: [
        "Laraskan jadual penyiraman mengikut cuaca dan keperluan tanaman supaya taman kekal sihat sambil mengurangkan penggunaan air yang tidak perlu.",
        "Jadikan kitar semula dan pengkomposan lebih mudah melalui panduan pengasingan yang jelas serta lokasi pengumpulan yang mudah ditemui.",
        "Sediakan tempat pengecasan kenderaan elektrik dan tunjukkan lokasinya untuk menyokong perjalanan yang menghasilkan pelepasan lebih rendah.",
        "Pantau langkah praktikal seperti pencahayaan cekap tenaga dan jadual peralatan bagi mengurangkan pembaziran tenaga tanpa menjejaskan keselesaan.",
      ],
      communityConnectModal: [
        "Baca notis terkini daripada komuniti yang dipilih, termasuk kemas kini perkhidmatan dan maklumat penting.",
        "Semak kalendar komuniti untuk aktiviti akan datang, tarikh dan maklumat acara yang berguna.",
        "Cari peluang sukarelawan, ketahui skop setiap aktiviti dan daftar untuk menyertainya.",
        "Hubungi pasukan pengurusan tempatan menggunakan maklumat hubungan bagi kawasan yang dipilih di laman web.",
      ],
    },
    ta: {
      smartFacilitiesModal: [
        "தெளிவான, வசதியான டிஜிட்டல் முறையில் சமூகக் கட்டணங்களையும் வசதிக் கட்டணங்களையும் செலுத்துங்கள். செலுத்த வேண்டிய தொகையைப் பார்த்து, முடிந்த பணப்பரிவர்த்தனைகளின் பதிவை வைத்திருக்கலாம். இந்தச் சோதனைப் பதிப்பு உண்மையான பணத்தை வசூலிக்காது.",
        "உடற்பயிற்சிக் கூடம், நீச்சல் குளம் அல்லது சமூக மண்டபம் போன்ற பகிரப்பட்ட இடங்களின் கிடைப்பைச் சரிபார்த்து முன்பதிவு செய்யுங்கள். முன்பதிவு நாட்காட்டி முன்கூட்டியே திட்டமிட உதவுகிறது.",
        "பகிரப்பட்ட பொருட்கள் அல்லது பராமரிப்புப் பணிகளுக்கான கோரிக்கையைச் சமர்ப்பித்து, அது முடியும் வரை அதன் நிலையைப் பின்தொடருங்கள். இதனால் நிர்வாக முடிவுகள் வெளிப்படையாக இருக்கும்.",
        "பராமரிப்புக் கோரிக்கைகள் மற்றும் குடியிருப்பாளர் விண்ணப்பங்கள் போன்ற படிவங்களை இணையத்தில் சமர்ப்பித்து தெளிவான உறுதிப்படுத்தலைப் பெறுங்கள்; காகிதப் பணியும் தொடர்ச்சியான தொலைபேசி அழைப்புகளும் குறையும்.",
      ],
      communitySafetyModal: [
        "சேவை ஒப்பந்தங்கள், புதுப்பிப்பு தேதிகள் மற்றும் தொடர்புடைய ஆவணங்களை ஒரே இடத்தில் ஒழுங்குபடுத்தி, குடியிருப்பாளர்களும் நிர்வாகமும் ஒப்புக்கொண்டவற்றைத் தெளிவாக அறிய உதவுங்கள்.",
        "வரவிருக்கும் விருந்தினர்களைப் பதிவு செய்து, அவர்கள் வந்ததும் குடியிருப்பாளர்களுக்குத் தெரிவியுங்கள். தெளிவான நுழைவுப் பதிவு நடைமுறை வரவேற்பின் அன்பைத் தக்கவைத்து நுழைவை எளிதாக்கும்.",
        "பொதுப் பகுதிகளில் உள்ள கேமரா அமைப்புகளைப் பயன்படுத்தி பாதுகாப்புச் சம்பவங்களை நிர்வாகக் குழு ஆய்வு செய்ய உதவுங்கள். கண்காணிப்பு உள்ளூர் தனியுரிமைச் சட்டங்களையும் சமூகக் கொள்கைகளையும் பின்பற்ற வேண்டும்.",
        "காவல் சுற்றுப்பாதைகளை ஒருங்கிணைத்து நிகழ்வுகளைக் குறித்துக் கொள்ளுங்கள்; நுழைவாயில்கள், நடைபாதைகள் மற்றும் பகிரப்பட்ட வசதிகள் தொடர்பான கவலைகளுக்கு ஒரே மாதிரியாகப் பதிலளிக்கலாம்.",
      ],
      greenLivingModal: [
        "வானிலை மற்றும் தாவரத் தேவைகளுக்கு ஏற்ப நீர்ப்பாய்ச்சும் நேரத்தை மாற்றி, தேவையற்ற நீர் பயன்பாட்டைக் குறைத்தபடி தோட்டங்களை ஆரோக்கியமாக வைத்திருங்கள்.",
        "தெளிவான கழிவு வகைப்பாட்டு வழிகாட்டுதல்களையும் எளிதில் கண்டறியக்கூடிய சேகரிப்பு இடங்களையும் வழங்கி மறுசுழற்சி மற்றும் உரமிடுதலை எளிதாக்குங்கள்.",
        "மின்சார வாகனங்களுக்கான சார்ஜிங் இடங்களை வழங்கி அவற்றின் இருப்பிடத்தைக் காட்டுங்கள்; குறைந்த மாசு உமிழும் பயணத்தை ஆதரிக்கவும்.",
        "திறமையான விளக்குகள் மற்றும் உபகரண நேர அட்டவணைகள் போன்ற நடைமுறை நடவடிக்கைகள் மூலம் வசதியைக் குறைக்காமல் பொதுப் பகுதிகளின் ஆற்றல் வீணாவதைக் குறைக்கவும்.",
      ],
      communityConnectModal: [
        "தேர்ந்தெடுக்கப்பட்ட சமூகத்தின் சமீபத்திய அறிவிப்புகள், சேவை புதுப்பிப்புகள் மற்றும் அவசரத் தகவல்களைப் படியுங்கள்.",
        "வரவிருக்கும் செயல்பாடுகள், தேதிகள் மற்றும் நிகழ்வு விவரங்களுக்கு சமூக நாட்காட்டியைப் பாருங்கள்.",
        "தன்னார்வ வாய்ப்புகளைக் கண்டறிந்து, ஒவ்வொரு செயல்பாட்டையும் அறிந்து பங்கேற்கப் பதிவு செய்யுங்கள்.",
        "இணையதளத்தில் தற்போது தேர்ந்தெடுக்கப்பட்ட பகுதிக்கான தொடர்பு விவரங்களைப் பயன்படுத்தி உள்ளூர் நிர்வாகக் குழுவை அணுகுங்கள்.",
      ],
    },
  };

    // Which items are live today (order matches the modal). Everything else is shown as "Coming soon".
  // The live ones are served by the resident portal at /portal/ (login, sandbox payments, booking, requests).
  const liveItems = { smartFacilitiesModal: [true, true, true, true] };
  const portalTabs = { smartFacilitiesModal: ["pay", "book", "procurement", "requests"] };
  const comingSoonOverlays = new Set(["smartFacilitiesModal", "communitySafetyModal", "greenLivingModal"]);
  const portalHref = (tab) => `/portal/?region=${encodeURIComponent(window.MYCELIUM_COUNTRY || "")}#${tab}`;

  const connectDestinations = ["#", "#", "#", "#"];
  const lang = () => document.documentElement.lang || "en";
  const localizedDetails = () => ({ ...(detailsByLanguage[lang()] || detailsByLanguage.en), ...(window.MYCELIUM_I18N?.get(lang())?.featureDetails || {}) });
  const uiCopy = {
    en: { soon: "Coming soon", soonNote: "Coming soon — this service is planned and not available yet.", openPortal: "Open in the resident portal →", viewCalendar: "View the community calendar →", exploreVolunteer: "Explore volunteer activities →", seeContacts: "See community contacts →", readNotices: "Read community notices →", sendMessage: "Send a message →", communityFeature: "Community feature" },
    es: { soon: "Próximamente", soonNote: "Próximamente: este servicio está previsto, pero aún no está disponible.", openPortal: "Abrir en el portal de residentes →", viewCalendar: "Ver el calendario comunitario →", exploreVolunteer: "Ver actividades de voluntariado →", seeContacts: "Ver contactos de la comunidad →", readNotices: "Leer avisos comunitarios →", sendMessage: "Enviar un mensaje →", communityFeature: "Función comunitaria" },
    "zh-CN": { soon: "即将推出", soonNote: "即将推出——此服务正在规划中，目前尚未开放。", openPortal: "在居民门户中打开 →", viewCalendar: "查看社区日历 →", exploreVolunteer: "查看志愿者活动 →", seeContacts: "查看社区联系方式 →", readNotices: "阅读社区通知 →", sendMessage: "发送消息 →", communityFeature: "社区功能" },
    ms: { soon: "Akan datang", soonNote: "Akan datang — perkhidmatan ini dirancang tetapi belum tersedia.", openPortal: "Buka portal penduduk →", viewCalendar: "Lihat kalendar komuniti →", exploreVolunteer: "Terokai aktiviti sukarelawan →", seeContacts: "Lihat maklumat hubungan komuniti →", readNotices: "Baca notis komuniti →", sendMessage: "Hantar mesej →", communityFeature: "Ciri komuniti" },
    ta: { soon: "விரைவில்", soonNote: "விரைவில் — இந்தச் சேவை திட்டமிடப்பட்டுள்ளது; இன்னும் கிடைக்கவில்லை.", openPortal: "குடியிருப்பாளர் தளத்தைத் திறக்கவும் →", viewCalendar: "சமூக நாட்காட்டியைப் பார்க்கவும் →", exploreVolunteer: "தன்னார்வச் செயல்பாடுகளைப் பார்க்கவும் →", seeContacts: "சமூகத் தொடர்புகளைப் பார்க்கவும் →", readNotices: "சமூக அறிவிப்புகளைப் படிக்கவும் →", sendMessage: "செய்தி அனுப்பவும் →", communityFeature: "சமூக அம்சம்" },
  };
  const U = () => ({ ...(uiCopy[lang()] || uiCopy.en), ...(window.MYCELIUM_I18N?.get(lang())?.featureDetails?.ui || {}) });

  document.querySelectorAll(".feature-modal-overlay").forEach((overlay) => {
    const itemGrid = overlay.querySelector(".feature-modal-items");
    if (!itemGrid) return;
    const copy = () => localizedDetails()[overlay.id] || details[overlay.id] || [];
    const detailPanel = document.createElement("section");
    detailPanel.className = "feature-detail-panel";
    detailPanel.setAttribute("aria-live", "polite");
    detailPanel.hidden = true;
    itemGrid.after(detailPanel);

    itemGrid.querySelectorAll(".feature-modal-item").forEach((item, index) => {
      item.dataset.label = (item.querySelector("[data-i18n]") || item.querySelector("span:last-child"))?.textContent.trim() || "";
      if (comingSoonOverlays.has(overlay.id) && !liveItems[overlay.id]?.[index]) {
        const chip = document.createElement("em");
        chip.className = "feature-soon-chip";
        chip.textContent = U().soon;
        item.append(chip);
      }
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-expanded", "false");
      item.dataset.featureDetailIndex = String(index);

      const showDetail = () => {
        itemGrid.querySelectorAll(".feature-modal-item").forEach((entry) => {
          const selected = entry === item;
          entry.classList.toggle("is-detail-selected", selected);
          entry.setAttribute("aria-expanded", String(selected));
        });
        const label = item.dataset.label || U().communityFeature;
        const icon = item.querySelector("svg")?.cloneNode(true);
        detailPanel.replaceChildren();
        const image = document.createElement("div");
        image.className = "feature-detail-illustration";
        image.setAttribute("aria-hidden", "true");
        if (icon) {
          image.append(icon);
        } else {
          const mark = document.createElement("span");
          mark.className = "feature-detail-mark";
          mark.textContent = String(index + 1).padStart(2, "0");
          image.append(mark);
        }
        detailPanel.append(image);
        const text = document.createElement("div");
        text.className = "feature-detail-copy";
        const heading = document.createElement("h3");
        heading.textContent = label;
        const paragraph = document.createElement("p");
        paragraph.textContent = copy()[index] || "Explore how this community feature supports everyday resident needs.";
        text.append(heading, paragraph);

        const isConnectItem = overlay.id === "communityConnectModal";
        const destination = isConnectItem ? connectDestinations[index] : null;
        if (destination) {
          const link = document.createElement("a");
          link.className = "feature-detail-link";
          link.href = destination;
          link.textContent = [U().readNotices, U().viewCalendar, U().exploreVolunteer, U().seeContacts][index] || U().readNotices;
          link.addEventListener("click", (event) => {
            event.preventDefault();
            overlay.classList.remove("active");
            overlay.setAttribute("aria-hidden", "true");
            const targets = ["#openAnnouncementBtn", "#openCalendarBtn", "#openVolunteerBtn", ".footer"];
            const target = document.querySelector(targets[index]);
            target?.scrollIntoView({ behavior: "smooth", block: "center" });
            if (index === 0) document.querySelector("#openAnnouncementBtn")?.click();
            if (index === 1) document.querySelector("#openCalendarBtn")?.click();
            if (index === 2) document.querySelector("#openVolunteerBtn")?.click();
          });
          text.append(link);
        }
        if (liveItems[overlay.id]?.[index]) {
          const open = document.createElement("a");
          open.className = "feature-detail-link";
          open.href = portalHref(portalTabs[overlay.id][index]);
          open.textContent = U().openPortal;
          text.append(open);
        } else if (comingSoonOverlays.has(overlay.id)) {
          const soon = document.createElement("p");
          soon.className = "feature-soon-note";
          soon.textContent = U().soonNote;
          text.append(soon);
        } else if (overlay.id === "communityConnectModal" && index === 3) {
          const message = document.createElement("a");
          message.className = "feature-detail-link";
          message.style.marginLeft = "18px";
          message.href = portalHref("contact");
          message.textContent = U().sendMessage;
          text.append(message);
        }
        detailPanel.append(text);
        detailPanel.hidden = false;
        detailPanel.classList.remove("is-visible");
        requestAnimationFrame(() => detailPanel.classList.add("is-visible"));
      };

      item.addEventListener("click", showDetail);
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          showDetail();
        }
      });
    });

    window.addEventListener("mycelium:languagechange", () => {
      itemGrid.querySelectorAll(".feature-modal-item").forEach((item) => {
        const labelNode = item.querySelector("[data-i18n]");
        const key = labelNode?.getAttribute("data-i18n");
        if (key && typeof window.t === "function") item.dataset.label = window.t(key);
        const chip = item.querySelector(".feature-soon-chip");
        if (chip) chip.textContent = U().soon;
      });
      itemGrid.querySelector(".is-detail-selected")?.click();
    });

    const trigger = document.querySelector(`[data-modal="${overlay.id}"]`);
    trigger?.addEventListener("click", () => {
      window.setTimeout(() => {
        if (!overlay.classList.contains("active")) return;
        if (itemGrid.querySelector(".is-detail-selected")) return;
        itemGrid.querySelector(".feature-modal-item")?.click();
      }, 0);
    });
  });
})();
