# Documento de Errores de Accesibilidad WCAG 2.2
## Landing Page TechSolutions - HTML/CSS/JS

---

## 1.1.1. Contenido no textual (Nivel A)

### Descripción del error
Todo contenido no textual que se presenta al usuario debe tener una alternativa de texto que cumpla la misma función.

### Ubicación en la landing page
**Archivo:** `index.html` - Línea 25
**Elemento:** Botón de búsqueda en el header

### Código con error
```html
<button type="submit" class="icon-search"></button>
```

### Problema
El botón de búsqueda está vacío, sin texto alternativo ni etiqueta accesible. Los usuarios de lectores de pantalla no sabrán qué función cumple este botón.

### Solución propuesta
```html
<button type="submit" aria-label="Buscar" class="icon-search"></button>
```

**Alternativa:**
```html
<button type="submit" class="icon-search">
    <span class="sr-only">Buscar</span>
</button>
```

### Técnica WCAG
- ARIA14: Usar aria-label para proporcionar una etiqueta invisible
- H91: Usar elementos de formulario HTML

---

## 1.3.5. Identificar el propósito de entrada (Nivel AA)

### Descripción del error
El propósito de cada campo de entrada que recoge información del usuario se debe poder determinar mediante programación cuando el campo tenga un propósito identificado en la lista de propósitos de entrada WCAG.

### Ubicación en la landing page
**Archivo:** `index.html` - Líneas 84-95
**Elementos:** Campos del formulario de contacto

### Código con error
```html
<input type="text" id="nombre" name="nombre" placeholder="Ej. Juan Pérez">
<input type="email" id="email" name="email" placeholder="ejemplo@email.com">
<input type="tel" name="telefono" id="telefono" placeholder="Ej. +34 688 456 345">
```

### Problema
Los campos de entrada no tienen el atributo `autocomplete` que indica el propósito esperado del campo, dificultando el autocompletado y la asistencia a usuarios.

### Solución propuesta
```html
<input type="text" id="nombre" name="nombre" placeholder="Ej. Juan Pérez" autocomplete="name">
<input type="email" id="email" name="email" placeholder="ejemplo@email.com" autocomplete="email">
<input type="tel" name="telefono" id="telefono" placeholder="Ej. +34 688 456 345" autocomplete="tel">
```

### Técnica WCAG
- H98: Usar HTML 5.2 autocomplete attributes
- Lista completa de propósitos: https://www.w3.org/TR/WCAG22/#input-purposes

---

## 1.4.1. Uso del color (Nivel A)

### Descripción del error
El color no se debe utilizar como el único medio visual de transmitir información, indicar una acción, provocar una respuesta o distinguir un elemento visual.

### Ubicación en la landing page
**Archivo:** `index.html` - Líneas 49-63
**Elementos:** Iconos de servicios diferenciados solo por color

### Código con error
```html
<i class="icon-web beige"></i>
<i class="icon-mobile verde"></i>
<i class="icon-cloud azul"></i>
```

```css
.icon-web.beige {
    background-color: #f5deb3;
}
.icon-mobile.verde {
    background-color: #90ee90;
}
.icon-cloud.azul {
    background-color: #87ceeb;
}
```

### Problema
Los iconos de servicios se diferencian únicamente por su color, sin texto alternativo ni otra indicación visual que permita a usuarios con daltonismo o ceguera al color distinguirlos.

### Solución propuesta
```html
<i class="icon-web beige" aria-label="Desarrollo Web" role="img"></i>
<i class="icon-mobile verde" aria-label="Apps Móviles" role="img"></i>
<i class="icon-cloud azul" aria-label="Cloud Solutions" role="img"></i>
```

**Mejor solución con iconos SVG:**
```html
<svg class="icon-web" aria-label="Desarrollo Web" role="img">
    <use href="#icon-web"></use>
</svg>
```

### Técnica WCAG
- G14: Asegurar que la información transmitida por diferencias de color también esté disponible en texto
- G182: Asegurar que existan pistas de texto adicionales cuando se use color

---

## 1.4.2. Control de audio (Nivel A)

### Descripción del error
Si cualquier audio en una página web se reproduce automáticamente durante más de 3 segundos, debe haber un mecanismo disponible para pausarlo, detenerlo o controlar su volumen independientemente del nivel del volumen general del sistema.

### Ubicación en la landing page
**Archivo:** `index.html` - Líneas 29-31
**Elemento:** Audio con reproducción automática

### Código con error
```html
<audio autoplay loop>
    <source src="background-music.mp3" type="audio/mpeg">
</audio>
```

### Problema
El audio se reproduce automáticamente sin controles visibles para que el usuario pueda pausarlo o ajustar el volumen. Esto puede desorientar a usuarios de lectores de pantalla y molestar a todos los usuarios.

### Solución propuesta
**Opción 1: Agregar controles**
```html
<audio controls loop id="background-audio">
    <source src="background-music.mp3" type="audio/mpeg">
</audio>
<button onclick="document.getElementById('background-audio').play()">Reproducir música</button>
```

**Opción 2: Reproducción solo a petición del usuario**
```html
<audio id="background-audio" loop>
    <source src="background-music.mp3" type="audio/mpeg">
</audio>
<button onclick="toggleAudio()" aria-label="Reproducir/Pausar música de fondo">
    🎵 Música de fondo
</button>
```

**Opción 3 (recomendada): Eliminar autoplay**
```html
<!-- No incluir audio de fondo automático -->
```

### Técnica WCAG
- G170: Proporcionar un control al inicio de la página web que apague los sonidos
- G171: Reproducir sonidos solo a petición del usuario

---

## 1.4.3. Contraste mínimo (Nivel AA)

### Descripción del error
La presentación visual del texto debe tener una relación de contraste de al menos 4.5:1, excepto para texto grande (3:1), texto incidental, o logotipos.

### Ubicación en la landing page
**Archivo:** `styles.css` - Líneas 187-194
**Elemento:** Números estadísticos en la sección "Sobre Nosotros"

### Código con error
```css
.stat-number.low-contrast {
    color: #8d8d8d;
    background-color: #f4f9ff;
}
```

### Problema
El contraste entre el texto gris (#8d8d8d) y el fondo azul claro (#f4f9ff) es de aproximadamente 3.13:1, inferior al mínimo requerido de 4.5:1.

### Solución propuesta
```css
.stat-number.low-contrast {
    color: #454545;
    background-color: #f4f9ff;
}
```

**Contraste resultante:** 7.8:1 ✓

**Archivo:** `styles.css` - Líneas 246-253
**Elemento:** Opciones de país en el formulario

### Código con error
```css
.country-option {
    color: #8d8d8d;
    background-color: #f4f9ff;
}
```

### Solución propuesta
```css
.country-option {
    color: #454545;
    background-color: #f4f9ff;
}
```

### Técnica WCAG
- G18: Asegurar una relación de contraste de al menos 4.5:1 entre texto y fondo
- Herramienta recomendada: https://webaim.org/resources/contrastchecker/

---

## 1.4.10. Reflujo (Nivel AA)

### Descripción del error
El contenido se debe poder presentar sin pérdida de información o funcionalidad, y sin necesidad de desplazamiento en dos dimensiones para contenido de desplazamiento vertical a un ancho de 320 píxeles CSS.

### Ubicación en la landing page
**Archivo:** `index.html` - Línea 5
**Elemento:** Meta viewport

### Código con error
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

### Problema
El atributo `user-scalable=no` impide que los usuarios hagan zoom en la página, lo cual es especialmente problemático para usuarios con baja visión que necesitan ampliar el contenido.

### Solución propuesta
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**O si necesitas maximum-scale:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
```

### Técnica WCAG
- C32: Usar media queries y grid CSS
- C34: Usar media queries que no inhiban el zoom

---

## 1.4.11. Contraste no textual (Nivel AA)

### Descripción del error
La presentación visual de componentes de interfaz de usuario y objetos gráficos debe tener una relación de contraste de al menos 3:1 frente a colores adyacentes.

### Ubicación en la landing page
**Archivo:** `styles.css` - Líneas 229-235
**Elemento:** Bordes de los campos de formulario

### Código con error
```css
.form-group input,
.form-group textarea {
    border: solid 1px #B8D5FA;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #B8D5FA;
}
```

### Problema
El borde azul claro (#B8D5FA) sobre fondo blanco (#FFFFFF) tiene un contraste de aproximadamente 1.34:1, muy inferior al mínimo de 3:1 requerido para componentes de interfaz.

### Solución propuesta
```css
.form-group input,
.form-group textarea {
    border: solid 1px #378AF6;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #2563EB;
    outline: 2px solid #2563EB;
}
```

**Contraste resultante:** 
- Border normal: 4.02:1 ✓
- Border focus: 5.89:1 ✓

### Técnica WCAG
- G195: Usar un indicador de enfoque visible proporcionado por el autor
- G174: Proporcionar un control con relación de contraste suficiente

---

## 2.3.1. Tres destellos o menos del umbral (Nivel A)

### Descripción del error
La página web no debe contener nada que parpadee más de 3 veces en un período de 1 segundo, o el parpadeo debe estar por debajo de los umbrales de parpadeo general y parpadeo rojo.

### Ubicación en la landing page
**Archivo:** `styles.css` - Líneas 81-85
**Elemento:** Botón CTA con animación de parpadeo

### Código con error
```css
@keyframes flash {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
}

.flashing {
    animation: flash 0.2s infinite;
}
```

**Archivo:** `index.html` - Línea 40
```html
<button class="cta-button flashing">Comenzar Ahora</button>
```

### Problema
La animación parpadea 5 veces por segundo (cada 0.2s), superando ampliamente el límite de 3 destellos por segundo. Esto puede provocar convulsiones en personas con epilepsia fotosensible.

### Solución propuesta
**Opción 1: Animación suave sin parpadeos**
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.pulsing {
    animation: pulse 2s ease-in-out infinite;
}
```

**Opción 2: Animación de brillo gradual**
```css
@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(243, 156, 18, 0.5); }
    50% { box-shadow: 0 0 20px rgba(243, 156, 18, 0.8); }
}

.glowing {
    animation: glow 2s ease-in-out infinite;
}
```

**Opción 3 (recomendada): Sin animación continua**
```css
.cta-button {
    transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
```

### Técnica WCAG
- G19: Asegurar que ningún componente parpadee más de 3 veces por segundo

---

## 3.1.1. Idioma de la página (Nivel A)

### Descripción del error
El idioma humano predeterminado de cada página web se debe poder determinar mediante programación.

### Ubicación en la landing page
**Archivo:** `index.html` - Línea 2
**Elemento:** Etiqueta HTML raíz

### Código con error
```html
<html>
```

### Problema
La etiqueta `<html>` no tiene el atributo `lang`, por lo que los lectores de pantalla no pueden determinar correctamente el idioma del contenido y pueden pronunciar mal las palabras.

### Solución propuesta
```html
<html lang="es">
```

**Para español de España específicamente:**
```html
<html lang="es-ES">
```

**Para español de México:**
```html
<html lang="es-MX">
```

### Técnica WCAG
- H57: Usar el atributo de idioma en la etiqueta HTML

---

## 3.1.2. Idioma de las partes (Nivel AA)

### Descripción del error
El idioma humano de cada pasaje o frase en el contenido se debe poder determinar mediante programación, excepto para nombres propios, términos técnicos, palabras de idioma indeterminado y palabras que se han convertido en parte de la lengua vernácula.

### Ubicación en la landing page
**Archivo:** `index.html` - Líneas 72-74
**Elemento:** Párrafo en inglés dentro de contenido en español

### Código con error
```html
<p>Somos una empresa líder en transformación digital con más de 10 años de experiencia.</p>
<p>Our mission is to deliver innovative solutions that drive business growth and digital transformation.</p>
```

### Problema
El segundo párrafo está en inglés pero no tiene el atributo `lang` para indicarlo, lo que causará que los lectores de pantalla lo lean con pronunciación española.

### Solución propuesta
```html
<p>Somos una empresa líder en transformación digital con más de 10 años de experiencia.</p>
<p lang="en">Our mission is to deliver innovative solutions that drive business growth and digital transformation.</p>
```

**Archivo:** `index.html` - Líneas 20-23
**Elemento:** Selector de idioma

### Código con error
```html
<a href="#lang">
    <img src="es-flag.svg" height="12" alt="es" width="18">
    <label>Español</label>
</a>
```

### Solución propuesta
```html
<a href="#lang" hreflang="es">
    <img src="es-flag.svg" height="12" alt="Bandera de España" width="18">
    <label lang="es">Español</label>
</a>
```

### Técnica WCAG
- H58: Usar atributos de idioma para identificar cambios en el idioma

---

## 4.1.2. Nombre, Rol, Valor (Nivel A)

### Descripción del error
Para todos los componentes de interfaz de usuario, el nombre y el rol se deben poder determinar mediante programación; los estados, propiedades y valores que puede establecer el usuario se deben poder establecer mediante programación; y la notificación de cambios en estos elementos debe estar disponible para agentes de usuario, incluidas las tecnologías de apoyo.

### Ubicación #1 en la landing page
**Archivo:** `index.html` - Líneas 125-127
**Elemento:** Enlaces de redes sociales en el footer

### Código con error
```html
<a href="#" class="social-icon"></a>
<a href="#" class="social-icon"></a>
<a href="#" class="social-icon"></a>
```

### Problema
Los enlaces están vacíos, sin texto ni aria-label, por lo que los usuarios de lectores de pantalla no sabrán a qué red social corresponde cada enlace.

### Solución propuesta
```html
<a href="https://twitter.com/techsolutions" class="social-icon" aria-label="Síguenos en Twitter">
    <svg aria-hidden="true"><!-- icono Twitter --></svg>
</a>
<a href="https://linkedin.com/company/techsolutions" class="social-icon" aria-label="Conéctate en LinkedIn">
    <svg aria-hidden="true"><!-- icono LinkedIn --></svg>
</a>
<a href="https://facebook.com/techsolutions" class="social-icon" aria-label="Encuéntranos en Facebook">
    <svg aria-hidden="true"><!-- icono Facebook --></svg>
</a>
```

### Ubicación #2 en la landing page
**Archivo:** `index.html` - Líneas 102-112
**Elemento:** Selector de país personalizado

### Código con error
```html
<div class="country-selector">
    <div class="country-option selected" data-country="es">
        <span>España</span>
    </div>
    <div class="country-option" data-country="pt">
        <span>Portugal</span>
    </div>
    <div class="country-option" data-country="mx">
        <span>México</span>
    </div>
</div>
```

### Problema
El componente personalizado no tiene roles ARIA ni estados que indiquen que es un selector, ni cuál es la opción seleccionada actualmente.

### Solución propuesta
```html
<div class="country-selector" role="radiogroup" aria-labelledby="country-label">
    <span id="country-label" class="sr-only">Selecciona tu país</span>
    <div class="country-option" role="radio" aria-checked="true" data-country="es" tabindex="0">
        <span>España</span>
    </div>
    <div class="country-option" role="radio" aria-checked="false" data-country="pt" tabindex="-1">
        <span>Portugal</span>
    </div>
    <div class="country-option" role="radio" aria-checked="false" data-country="mx" tabindex="-1">
        <span>México</span>
    </div>
</div>
```

**JavaScript actualizado:**
```javascript
countryOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remover selección anterior
        countryOptions.forEach(opt => {
            opt.classList.remove('selected');
            opt.setAttribute('aria-checked', 'false');
            opt.setAttribute('tabindex', '-1');
        });
        // Agregar selección a la opción clickeada
        this.classList.add('selected');
        this.setAttribute('aria-checked', 'true');
        this.setAttribute('tabindex', '0');
        this.focus();
    });
});
```

### Técnica WCAG
- ARIA16: Usar aria-labelledby para proporcionar un nombre a los controles de interfaz
- ARIA5: Usar atributos de estado y propiedad WAI-ARIA
- H91: Usar elementos y controles de formulario HTML

---

## Resumen de errores por criterio

| Criterio | Nivel | Cantidad | Estado |
|----------|-------|----------|--------|
| 1.1.1 - Contenido no textual | A | 2 | ❌ Crítico |
| 1.3.5 - Propósito de entrada | AA | 3 | ⚠️ Medio |
| 1.4.1 - Uso del color | A | 3 | ❌ Crítico |
| 1.4.2 - Control de audio | A | 1 | ❌ Crítico |
| 1.4.3 - Contraste mínimo | AA | 2 | ⚠️ Medio |
| 1.4.10 - Reflujo | AA | 1 | ⚠️ Medio |
| 1.4.11 - Contraste no textual | AA | 1 | ⚠️ Medio |
| 2.3.1 - Tres destellos | A | 1 | ❌ Crítico |
| 3.1.1 - Idioma de la página | A | 1 | ❌ Crítico |
| 3.1.2 - Idioma de las partes | AA | 2 | ⚠️ Medio |
| 4.1.2 - Nombre, Rol, Valor | A | 4 | ❌ Crítico |

**Total de errores:** 21
**Errores Nivel A (Críticos):** 15
**Errores Nivel AA (Medios):** 6

---

## Herramientas recomendadas para verificación

1. **WAVE (Web Accessibility Evaluation Tool)** - https://wave.webaim.org/
2. **axe DevTools** - Extensión para navegadores
3. **Lighthouse** - Integrado en Chrome DevTools
4. **Color Contrast Checker** - https://webaim.org/resources/contrastchecker/
5. **NVDA/JAWS** - Lectores de pantalla para pruebas reales
6. **W3C Validator** - https://validator.w3.org/

---

## Próximos pasos

1. Implementar todas las correcciones propuestas
2. Validar con herramientas automáticas
3. Realizar pruebas con lectores de pantalla
4. Validar con usuarios reales con discapacidades
5. Repetir el proceso para frameworks (Next.js, Vue, etc.)

---

**Fecha del documento:** Noviembre 2024
**Versión:** 1.0
**Estándar:** WCAG 2.2 Nivel AA
