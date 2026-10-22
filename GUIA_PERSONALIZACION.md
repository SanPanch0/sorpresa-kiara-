# Guía de personalización

1. **Abrir y probar:** abre la carpeta en Visual Studio Code. Haz doble clic en `index.html` o, con la extensión *Live Server*, clic derecho → *Open with Live Server*.
2. **Qué editar:** TODO está en `config.js` (nombres, fecha, mensajes, ruleta, recuerdos, carta, quiz, final). Los textos que dicen "EJEMPLO" debes cambiarlos. Los colores están al inicio de `styles.css` (`:root`: `--rosa`, `--azul`, `--vino`).
3. **Fotos:** copia tus imágenes en `assets/fotos/` con estos nombres: `portada.jpg`, `foto1.jpg` … `foto6.jpg`. Para otra ruta, cambia el campo `src`. Respeta mayúsculas/minúsculas y la extensión (`.jpg` ≠ `.jpeg`).
4. **Más fotos:** en `config.js`, dentro de `fotos`, copia una línea completa `{ src: ..., titulo: ..., descripcion: ... },`, pégala debajo y cambia los datos. Cuida la coma al final.
5. **Recuerdos, carta, quiz, final:** edita `recuerdos`, `carta`, `quiz` (`correcta` es la posición de la respuesta, empezando en 0) y `mensajeFinal`. Para la ruleta, edita `ruleta` (puedes tener de 3 a 10 planes).
6. **Música:** copia un MP3 en `assets/musica/cancion.mp3`. No suena sola porque los navegadores lo bloquean; hay que pulsar el botón.
7. **Errores típicos:** foto con marcador rosa/azul = ruta o extensión incorrecta; aviso de fecha = escribe `AAAA-MM-DDTHH:MM:SS` y no futura; página sin textos = error de coma/comillas en `config.js` (abre la consola con F12).
8. **Responsive:** F12 → icono de móvil/tableta (Ctrl+Shift+M) y prueba varios tamaños.
9. **Publicar gratis:**
   - *Netlify:* entra a app.netlify.com/drop y arrastra la carpeta completa. El enlace aparece en pantalla.
   - *GitHub Pages:* sube todos los archivos a un repositorio, ve a Settings → Pages → rama `main` y carpeta `/ (root)`. El enlace aparece en esa misma sección.
   Abre el enlace desde tu celular para probarlo.
10. **Antes de compartir:** revisa que no queden textos "EJEMPLO", que la fecha sea la real, que las fotos sean las tuyas y que ella esté de acuerdo con que se publiquen. Quien tenga el enlace puede verlo, así que envíaselo solo a ella.

*Nota:* el botón "Añadir fotos desde mi dispositivo" es temporal: solo se ven en esa sesión. Para dejarlas fijas, usa los pasos 3 y 4.
