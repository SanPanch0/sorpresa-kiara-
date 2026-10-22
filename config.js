const CONFIG = {
  tuNombre: "Zidane",
  ellaNombre: "Kiara",
  frasePortada: "Cada día contigo es mi lugar favorito.",
  mensajeEntrada: "Kiara, hice algo pequeño pero con todo mi corazón…",

  sorpresa: {
    foto: "assets/fotos/zidane-pequena.jpeg",
    titulo: "Para la mujer que ilumina mis días",
    texto: "Kiara, desde que llegaste todo es más bonito. Preparé este rincón para guardar nuestros recuerdos y los que nos faltan por vivir. Gracias por ser tú. Te amo. 💙",
    boton: "Entrar a nuestra historia"
  },

  fechaInicio: "2026-02-22T00:00:00",
  fotoPortada: "assets/fotos/portada.jpeg",

  categorias: ["Juntos", "Divertidas", "Paseos", "Atardeceres", "Nuestros bb", "Comidas", "Videos", "Bachiller de Kiara"],

  // Fotos: assets/fotos/   |   Videos (tipo:"video"): assets/videos/
  fotos: [
    // ---- JUNTOS ----
    { categoria: "Juntos", src: "assets/fotos/noche-de-pasion.jpeg", titulo: "Noche de pasión 🔥", descripcion: "Contigo hasta una noche cualquiera se vuelve inolvidable." },
    { categoria: "Juntos", src: "assets/fotos/felices.jpeg", titulo: "Felices", descripcion: "Mira esas sonrisas: así soy yo cuando estoy a tu lado." },
    { categoria: "Juntos", src: "assets/fotos/feliii.jpeg", titulo: "Feliii", descripcion: "Contigo todo me hace feliz, hasta lo más sencillo." },
    { categoria: "Juntos", src: "assets/fotos/agarradita-de-manito.jpeg", titulo: "Agarradita de manito", descripcion: "Tu mano en la mía es mi lugar favorito del mundo." },
    { categoria: "Juntos", src: "assets/fotos/tu-carita-hermosa.jpeg", titulo: "Tu carita hermosa", descripcion: "Podría quedarme mirándote toda la vida y no me cansaría." },
    { categoria: "Juntos", src: "assets/fotos/besito.jpeg", titulo: "Besito 😘", descripcion: "Un besito tuyo y se me arregla el día entero." },
    { categoria: "Juntos", src: "assets/fotos/un-corazon-hermoso.jpeg", titulo: "Un corazón hermoso", descripcion: "Tienes el corazón más bonito que conozco, y es mío. Te amo." },
    { categoria: "Juntos", src: "assets/fotos/una-rosa-para-otra-rosa.jpeg", titulo: "Una rosa para otra rosa 🌹", descripcion: "Esta rosa es para ti, mi flor más hermosa." },

    // ---- DIVERTIDAS ----
    { categoria: "Divertidas", src: "assets/fotos/somos-unas-princesas.jpeg", titulo: "Somos unas princesas 👑", descripcion: "Tú eres mi princesa y yo… bueno, yo te sigo el juego." },
    { categoria: "Divertidas", src: "assets/fotos/somos-unos-bembones.jpeg", titulo: "Somos unos bembones", descripcion: "Locos, bembones y felices. Así me gusta estar contigo." },
    { categoria: "Divertidas", src: "assets/fotos/somos-cool.jpeg", titulo: "Somos cool 😎", descripcion: "Los más cool del lugar, aunque nadie lo haya notado." },
    { categoria: "Divertidas", src: "assets/fotos/aca-con-crito.jpeg", titulo: "Acá con Cristo", descripcion: "Con Crito y contigo, la pasamos increíble." },
    { categoria: "Divertidas", src: "assets/fotos/manejando-bostecitos.jpeg", titulo: "Manejando, botecitos 🚗", descripcion: "Con sueño y todo, el viaje contigo es mi favorito." },
    { categoria: "Divertidas", src: "assets/fotos/me-orino-un-perro.jpeg", titulo: "Me orinó un perro 🐶", descripcion: "Sí, pasó. Y aun así me río cada vez que me acuerdo contigo." },

    // ---- PASEOS ----
    { categoria: "Paseos", src: "assets/fotos/caminando-ando.jpeg", titulo: "Caminando ando", descripcion: "Caminar sin rumbo a tu lado es mi plan perfecto." },
    { categoria: "Paseos", src: "assets/fotos/los-dositos-en-un-mirador.jpeg", titulo: "Los dositos en un mirador", descripcion: "Desde ahí se veía todo hermoso, pero yo solo te miraba a ti." },
    { categoria: "Paseos", src: "assets/fotos/en-la-colina.jpeg", titulo: "En la colina", descripcion: "Subimos juntos hasta arriba y la vista valió cada paso." },
    { categoria: "Paseos", src: "assets/fotos/besitos-en-la-cascada.jpeg", titulo: "Besitos en la cascada 💦", descripcion: "El agua caía, pero yo solo sentía lo que me haces sentir." },
    { categoria: "Paseos", src: "assets/fotos/primer-partido-cc.jpeg", titulo: "Nuestro primer partido con el CC ⚽", descripcion: "Nuestro primer partido juntos. Ojalá vengan muchísimos más." },

    // ---- ATARDECERES ----
    { categoria: "Atardeceres", src: "assets/fotos/atardecer.jpeg", titulo: "Atardecer 🌅", descripcion: "El cielo se pintó de colores, pero tú me pintas todos los días." },
    { categoria: "Atardeceres", src: "assets/fotos/en-el-atardecer.jpeg", titulo: "En el atardecer", descripcion: "Contigo hasta el final del día se siente como un comienzo." },

    // ---- NUESTROS BB ----
    { categoria: "Nuestros bb", src: "assets/fotos/luquitas-y-miel.jpeg", titulo: "Nuestro bb Luquitas y Miel 🐾", descripcion: "Nuestros bebés tan lindos. Qué bonito es compartirlos contigo." },
    { categoria: "Nuestros bb", src: "assets/fotos/dandome-carino-a-tu-bb.jpeg", titulo: "Dándome cariño a tu bb", descripcion: "Tu bb me ganó el corazón, igual que su dueña." },
    { categoria: "Nuestros bb", src: "assets/fotos/nuestra-bb-niebla.jpeg", titulo: "Nuestra bb Niebla", descripcion: "Niebla, mi bebé hermosa, tan chiquita y tan amada." },

    // ---- COMIDAS ----
    { categoria: "Comidas", src: "assets/fotos/lo-que-tomamos.jpeg", titulo: "Lo que tomamos 🍹", descripcion: "Brindo por ti, por nosotros y por todo lo que viene." },
    { categoria: "Comidas", src: "assets/fotos/comiendo-lo-que-me-cocinaste.jpeg", titulo: "Comiendo lo que me cocinaste", descripcion: "Lo que cocinas con tanto amor sabe a hogar. Gracias, mi vida." },

    // ---- VIDEOS (tipo: "video") ----
    { categoria: "Videos", tipo: "video", src: "assets/videos/abuelitos-locos.mp4", titulo: "Abuelitos locos 👴👵", descripcion: "Así nos veo de viejitos: igual de locos y de enamorados." },
    { categoria: "Videos", tipo: "video", src: "assets/videos/hinchas-del-cc.mp4", titulo: "Hinchas del CC 📣", descripcion: "Gritando juntos por nuestro equipo. Contigo hasta el fútbol es más lindo." },

    // ---- BACHILLER ----
    { categoria: "Bachiller de Kiara", src: "assets/fotos/bachiller1.jpeg", titulo: "Mi orgullo", descripcion: "Kiara, estoy muy orgulloso de ti y de todo tu esfuerzo." },
    { categoria: "Bachiller de Kiara", src: "assets/fotos/bachiller2.jpeg", titulo: "Lo lograste", descripcion: "Lo lograste, mi amor. Siempre supe que lo harías. Te amo." }
  ],

  ruleta: [
    { texto: "Bailar",   emoji: "💃", pregunta: "¿Bailamos juntos?",       titulo: "Noche de baile",  detalle: "Pondremos nuestra canción y bailaremos como si nadie nos viera." },
    { texto: "Cena",     emoji: "🍝", pregunta: "¿Salimos a cenar?",       titulo: "Cena para dos",   detalle: "Tú eliges el lugar, yo invito." },
    { texto: "Cine",     emoji: "🎬", pregunta: "¿Vamos al cine?",         titulo: "Cine y cancha",   detalle: "Película, canchita y tu mano en la mía." },
    { texto: "Helado",   emoji: "🍦", pregunta: "¿Nos comemos un helado?", titulo: "Helado de los dos", detalle: "Cada uno elige un sabor y compartimos." },
    { texto: "Picnic",   emoji: "🧺", pregunta: "¿Hacemos un picnic?",     titulo: "Picnic azul",     detalle: "Manta, snacks y buena conversación." },
    { texto: "Viaje",    emoji: "✈️", pregunta: "¿Planeamos un viaje?",    titulo: "Escapada juntos", detalle: "Escoge un destino soñado y empezamos a planearlo." },
    { texto: "Atardecer",emoji: "🌅", pregunta: "¿Vemos el atardecer?",    titulo: "Atardecer",       detalle: "Buscaremos el mejor lugar para ver el cielo pintarse." },
    { texto: "Sorpresa", emoji: "🎁", pregunta: "¿Te animas a una sorpresa?", titulo: "Sorpresa",     detalle: "Es un secreto… ¡cierra los ojos y confía en mí!" }
  ],

  recuerdos: [
    { etiqueta: "22 de febrero de 2026", titulo: "Cuando todo empezó",
      foto: "assets/fotos/recuerdo1.jpeg",
      texto: "Era muy tímido y no sabía cómo decirte que serías la mujer de mi vida. Hoy no tengo miedo de decirlo: te amo." },
    { etiqueta: "Nuestra primera salida", titulo: "Mis nervios, tu sonrisa",
      foto: "assets/fotos/recuerdo2.jpeg",
      texto: "No sabía qué hacer, estaba muy tímido y con las manos sudando. Pero bastó tu sonrisa para que todo se sintiera fácil." },
    { etiqueta: "Nuestras aventuras", titulo: "Siempre únicos",
      foto: "assets/fotos/recuerdo3.jpeg",
      texto: "Nuestras aventuras serán siempre únicas, porque las vivo contigo. Cada lugar se vuelve especial a tu lado. Te amo, y mucho." }
  ],

 carta: {
    titulo: "Para mi Kiara, mi nera hermosa 💙🥹",
    parrafos: [
      "Kiara, mi amor, gracias por llegar a mi vida y convertirla en un lugar mucho más bonito. Desde que llegaste, mis días tienen más luz, mis sonrisas tienen un motivo y mi corazón encontró a alguien a quien quiere cuidar, abrazar y elegir una y mil veces más.",

      "Eres mi paz en medio del caos, mi alegría en los días grises, mi pensamiento favorito antes de dormir y la razón de muchas de mis sonrisas. No sabes lo bonito que es tenerte en mi vida y sentir que, entre tantas personas en este mundo, tuve la suerte de encontrar a alguien tan especial como tú.",

      "Mi nera, eres mi mundo entero, mi lugar favorito, mi personita bonita y ese pedacito de felicidad que no cambiaría por nada. Quiero seguir creando recuerdos contigo, tomarte de la mano en los días buenos y en los difíciles, verte cumplir tus sueños, abrazarte cuando lo necesites y recordarte siempre lo maravillosa que eres para mí.",

      "Tal vez no existan palabras suficientes para explicarte todo lo que siento, pero quiero que nunca dudes de algo: te quiero con todo mi corazón, y cada día encuentro una nueva razón para enamorarme más de ti. No necesito que todo sea perfecto, mi amor; solo quiero que sigamos siendo nosotros, aprendiendo, creciendo y eligiéndonos una y otra vez.",

      "Esta pequeña página es apenas una forma de guardar un pedacito de todo lo que significas para mí, de recordarte que detrás de cada foto hay un momento que atesoro y detrás de cada palabra hay un corazón que late feliz por tenerte.",

      "Gracias por ser tú, por existir, por llegar a mi vida y por hacerme sentir que el amor puede ser tan bonito. Si pudiera volver al día en que te conocí, volvería a elegirte sin pensarlo, porque entre millones de caminos, mi favorito siempre será el que me lleve a ti.",

      "Te quiero hoy, te quiero mañana y quiero seguir queriéndote en todos esos días que todavía nos esperan. Que nunca nos falten los abrazos largos, las risas tontas, los besitos inesperados y esas pequeñas cosas que hacen que lo nuestro sea tan nuestro.",

      "Te amo, mi Kiara, mi nera preciosa. Eres mi mundo entero y uno de los regalos más bonitos que me ha dado la vida. ❤️‍🩹💙"
    ],
    cierre: "Siempre tuyo, Zidane, el que te elige una y mil veces más. ♾️💙"
  },

  cariño: {
    foto: "assets/fotos/zidane.jpeg",
    texto: "Prometo cuidarte, hacerte reír y amarte cada día más.",
    firma: "Con cariño, tu enamorado y tu futuro esposo 💍",
    nombre: "Zidane"
  },

  mensajeFinal: "Kiara, te amo más de lo que cabe en una página. ¿Seguimos escribiendo nuestra historia?",
  musica: "assets/musica/cancion.mp3"
};