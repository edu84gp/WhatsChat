# 💬 Chat en Tiempo Real con WebSockets (Socket.io)

Aplicación web de chat en tiempo real desarrollada como práctica de desarrollo Full Stack (módulo Back-End). Utiliza una arquitectura cliente-servidor con comunicación bidireccional mediante **WebSockets (Socket.io)** y cuenta con una interfaz de usuario inspirada en **WhatsApp Web**.

---

## 🚀 Características Principales

* **Comunicación en Tiempo Real:** Envío y recepción instantánea de mensajes bidireccionales sin necesidad de recargar la página gracias a WebSockets.
* **Interfaz Estilo WhatsApp Web:**
  * Cabecera oficial en verde `#008069` con estado de conexión en vivo (*en línea* o *desconectado*).
  * Fondo texturizado clásico beige/arena (`#efeae2`).
  * Burbujas diferenciadas: verde pastel claro (`#d9fdd3`) con **doble check azul (`✓✓`)** para tus mensajes y blancas (`#ffffff`) con autor destacado para los mensajes recibidos.
  * Botón circular de envío verde (`#00a884`) y barra de escritura limpia.
* **Identificación de Usuario:** Campo configurable para personalizar tu nombre/apodo en cualquier momento.
* **Scroll Automático:** Desplazamiento suave y automático al fondo de la conversación con cada nuevo mensaje.
* **Seguridad en el DOM (Anti-XSS):** Uso de `textContent` al inyectar mensajes para evitar ejecución de scripts maliciosos.
* **Diseño Responsivo:** Adaptado tanto para ordenadores de escritorio como para pantallas móviles.

---

## 🛠️ Tecnologías Utilizadas

### Backend
* **[Node.js](https://nodejs.org/):** Entorno de ejecución para JavaScript del lado del servidor (configurado con ES Modules `"type": "module"`).
* **[Express](https://expressjs.com/):** Framework web minimalista para servir los archivos estáticos (`public/`).
* **[Socket.io](https://socket.io/):** Librería para comunicación en tiempo real basada en WebSockets con soporte de eventos.
* **[HTTP Nativo](https://nodejs.org/api/http.html):** Para crear el servidor base compartido entre Express y Socket.io.

### Frontend
* **HTML5:** Estructura semántica (`<header>`, `<main>`, `<footer>`, `<form>`).
* **CSS3:** Estilos puros con variables CSS (`:root`), Flexbox, animaciones de entrada (`@keyframes fadeIn`) y media queries.
* **JavaScript (Vanilla):** Manipulación limpia del DOM y gestión de eventos de Socket.io sin dependencias ni frameworks externos.

---

## 📁 Estructura del Proyecto

```text
websocket-ejercicio/
├── public/
│   ├── index.html           # Página principal del chat
│   └── src/
│       ├── css/
│       │   └── style.css    # Estilos de la aplicación (tema WhatsApp)
│       └── js/
│           └── script.js    # Lógica del cliente y conexión Socket.io
├── node_modules/            # Dependencias del proyecto
├── package.json             # Configuración del proyecto y scripts
├── server.js                # Servidor Node.js, Express y Socket.io
└── README.md                # Documentación del proyecto
```

---

## ⚙️ Instalación y Uso

### 1. Requisitos Previos
* Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 2. Clonar o descargar el repositorio
```bash
git clone https://github.com/edu84gp/websocket-ejercicio.git
cd websocket-ejercicio
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Iniciar el servidor
```bash
npm run start
```
> El servidor se iniciará automáticamente en: **`http://localhost:3000`**

### 5. Probar el chat
1. Abre tu navegador y accede a `http://localhost:3000`.
2. Abre una **segunda pestaña** (o una ventana de incógnito) para simular a otro usuario.
3. Cambia el nombre de usuario en cada pestaña y empieza a chatear en tiempo real.

---

## 📡 Eventos de Socket.io

| Evento | Emisor | Receptor | Descripción |
| :--- | :--- | :--- | :--- |
| `connection` | Servidor | Servidor | Se dispara cuando un cliente se conecta. |
| `chat:message` | Cliente | Servidor | Envía el objeto con `{ username, text, time, socketId }`. |
| `chat:message` | Servidor | Todos los Clientes | Retransmite (`io.emit`) el mensaje para mostrarlo en pantalla. |
| `chat:system` | Servidor | Cliente | Muestra avisos informativos centrados en la sala. |
| `disconnect` | Servidor | Servidor | Detecta cuando un usuario cierra la pestaña o se desconecta. |

---

## 📄 Licencia

Este proyecto está bajo la Licencia **ISC**. Desarrollado con fines educativos y de aprendizaje Full Stack.
