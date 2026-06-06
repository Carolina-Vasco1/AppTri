# App Selección Nacional de Ecuador - La Tri 🇪🇨

¡Bienvenido al repositorio oficial de la aplicación móvil de **La Tri**! Este proyecto es una plataforma móvil interactiva, minimalista y de alto rendimiento desarrollada en **React Native** con **Expo**. Su objetivo es presentar de forma limpia, elegante y profesional el perfil institucional, hitos históricos y la identidad de la Selección Ecuatoriana de Fútbol.

---

## 📱 Características de la Aplicación

La aplicación se destaca por un diseño purista y una experiencia de usuario fluida, dividida en dos módulos principales:

### 1. Pantalla de Bienvenida (Splash Screen) Animada
* **Transiciones Cruzadas (*Cross-fade*):** Animación simultánea basada en opacidades variables controladas mediante `Animated.Value`.
* **Efecto de Rotación:** Los logotipos giran de manera sincronizada en un ángulo de 720 grados mediante interpolación de salida (`transform: [{ rotate: spin }]`).
* **Temporizador de Navegación:** Redirección automática y segura hacia la pantalla principal tras 5000ms utilizando un limpiador de ciclos de vida (`clearTimeout`).

### 2. Pantalla de Inicio (Home Screen - Minimalista y Profesional)
* **Cabecera Avanzada:** Inclusión del título institucional secundado por el escudo oficial `seleccion.png`, posicionado de manera flotante en la esquina superior derecha mediante coordenadas absolutas (`position: 'absolute'`) y priorización de capa (`zIndex`).
* **Marca de Agua Optimizada:** Fondo envolvente estilizado con una opacidad sutil ajustada al `0.18` para garantizar contraste, legibilidad y elegancia tipográfica.
* **Secciones Informativas Limpias:**  
  * **01 PERFIL OFICIAL:** Tarjeta de datos con el seudónimo, fecha de fundación, asociación (FEF/CONMEBOL) y ranking FIFA actual.  
  * **02 COMPETICIONES GLOBALES:** Resumen editorial maquetado en bloques justificables sobre las clasificaciones históricas a los Mundiales de la FIFA.  
  * **03 IDENTIDAD INSTITUCIONAL:** Cita destacada que engloba la filosofía y diversidad cultural detrás del fútbol ecuatoriano.

---

## 🛠️ Stack Tecnológico

* **React Native (v0.x):** Biblioteca principal para renderizado de componentes nativos en múltiples plataformas.
* **Expo Framework:** Entorno de ejecución y ecosistema de compilación rápido.
* **React Navigation (Stack Architecture):** Motor nativo para la transición fluida de pantallas sin barras de navegación visibles (`headerShown: false`).
* **Animated API:** Núcleo de animaciones nativas optimizado con el controlador nativo de la plataforma (`useNativeDriver`).

---

## 📁 Estructura del Proyecto

Para que la aplicación compile y renderice correctamente, los recursos multimedia deben seguir estrictamente la siguiente distribución en el directorio raíz:

```text
AppTriEcuador/
├── assets/
│   ├── fondo.png         # Textura de fondo ligera para la pantalla Splash
│   ├── ec.png            # Logotipo inicial animado (Fase 1 del Splash)
│   ├── ec2.png           # Logotipo secundario animado (Fase 2 del Splash)
│   ├── home.png          # Escudo/Marca de agua difuminada para el fondo del Home
│   └── seleccion.png     # Escudo oficial flotante ubicado en el frente derecho del Header
├── App.js                # Código fuente unificado (Splash, Home, Estilos y Enrutador)
├── package.json          # Archivo de configuración de dependencias y scripts
└── .gitignore            # Archivo de exclusión de archivos temporales de Git