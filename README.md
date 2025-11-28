# Landing Page TechSolutions - Testing de Accesibilidad WCAG 2.2

## 📋 Descripción

Este proyecto contiene una landing page clásica desarrollada en HTML+CSS+JS que **intencionalmente incluye 21 errores de accesibilidad** basados en los criterios WCAG 2.2. El propósito es probar y validar agentes de accesibilidad para verificar que detectan y resuelven correctamente estos errores.

## 📁 Archivos incluidos

- `index.html` - Estructura HTML de la landing page (con errores)
- `styles.css` - Estilos CSS (con errores de contraste y visuales)
- `script.js` - Funcionalidad JavaScript básica
- `ERRORES_ACCESIBILIDAD.md` - Documentación completa de todos los errores, ubicaciones y soluciones

## 🚀 Cómo usar

### Instalación local

1. Descarga todos los archivos en un directorio
2. Abre `index.html` en tu navegador
3. La página debería cargar sin problemas (visualmente funciona, pero tiene errores de accesibilidad)

### Estructura del proyecto

```
proyecto/
│
├── index.html              # Página principal
├── styles.css              # Hoja de estilos
├── script.js               # Scripts de funcionalidad
└── ERRORES_ACCESIBILIDAD.md  # Documentación de errores
```

## 🔍 Errores implementados

La landing page incluye los siguientes errores WCAG 2.2:

### Nivel A (Críticos) - 15 errores
- **1.1.1** - Contenido no textual: Botones e imágenes sin alternativas
- **1.4.1** - Uso del color: Diferenciación solo por color
- **1.4.2** - Control de audio: Audio automático sin controles
- **2.3.1** - Tres destellos: Animación que parpadea >3 veces/segundo
- **3.1.1** - Idioma de la página: HTML sin atributo lang
- **4.1.2** - Nombre, Rol, Valor: Componentes sin nombres accesibles

### Nivel AA (Medios) - 6 errores
- **1.3.5** - Propósito de entrada: Inputs sin autocomplete
- **1.4.3** - Contraste mínimo: Texto con contraste <4.5:1
- **1.4.10** - Reflujo: Viewport con user-scalable=no
- **1.4.11** - Contraste no textual: Bordes con contraste <3:1
- **3.1.2** - Idioma de las partes: Texto en inglés sin lang

## 🧪 Cómo probar con herramientas

### WAVE (Web Accessibility Evaluation Tool)
```
1. Ve a https://wave.webaim.org/
2. Ingresa la URL o pega el código HTML
3. Revisa los errores detectados
```

### axe DevTools
```
1. Instala la extensión en Chrome/Firefox
2. Abre DevTools (F12)
3. Ve a la pestaña "axe DevTools"
4. Ejecuta "Scan ALL of my page"
```

### Lighthouse (Chrome DevTools)
```
1. Abre DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona "Accessibility"
4. Click en "Analyze page load"
```

## 📊 Verificación de agente de accesibilidad

Para verificar que tu agente de accesibilidad funciona correctamente:

1. **Detección:** El agente debe identificar al menos 18-21 errores
2. **Localización:** Debe indicar la ubicación exacta (archivo y línea)
3. **Clasificación:** Debe clasificar por nivel (A, AA, AAA)
4. **Solución:** Debe proporcionar código corregido
5. **Validación:** Después de aplicar correcciones, debe validar que se resolvieron

## 📝 Checklist de validación

- [ ] Detecta errores 1.1.1 (contenido no textual)
- [ ] Detecta errores 1.3.5 (propósito de entrada)
- [ ] Detecta errores 1.4.1 (uso del color)
- [ ] Detecta errores 1.4.2 (control de audio)
- [ ] Detecta errores 1.4.3 (contraste mínimo)
- [ ] Detecta errores 1.4.10 (reflujo)
- [ ] Detecta errores 1.4.11 (contraste no textual)
- [ ] Detecta errores 2.3.1 (tres destellos)
- [ ] Detecta errores 3.1.1 (idioma de página)
- [ ] Detecta errores 3.1.2 (idioma de partes)
- [ ] Detecta errores 4.1.2 (nombre, rol, valor)
- [ ] Proporciona soluciones correctas
- [ ] Las soluciones son implementables

## 🔄 Próximas versiones

Este mismo conjunto de errores se implementará en:

- [ ] Next.js (React framework)
- [ ] Vue.js 3 (Composition API)
- [ ] Angular (versión reciente)
- [ ] Svelte
- [ ] Astro

## 📚 Recursos adicionales

- **WCAG 2.2 Guidelines:** https://www.w3.org/WAI/WCAG22/quickref/
- **Input Purposes List:** https://www.w3.org/TR/WCAG22/#input-purposes
- **ARIA Roles:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
- **ARIA States & Properties:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
- **WebAIM Resources:** https://webaim.org/resources/

## 🤝 Contribuciones

Este es un proyecto de testing. Si encuentras errores adicionales o mejoras en la documentación, son bienvenidas.

## ⚠️ Advertencia

**Este código NO debe usarse en producción.** Contiene errores intencionados para propósitos de testing. Implementa siempre las correcciones documentadas en `ERRORES_ACCESIBILIDAD.md` antes de usar cualquier código en un proyecto real.

## 📞 Contacto

Para preguntas sobre este proyecto de testing de accesibilidad, consulta la documentación completa en `ERRORES_ACCESIBILIDAD.md`.

---

**Versión:** 1.0 (HTML/CSS/JS)  
**Estándar:** WCAG 2.2 Nivel AA  
**Fecha:** Noviembre 2024
