# 🤖 Bot de Verificación Discord

<div align="center">

![Bot verification Banner](https://images.piclumen.com/normal/20250103/03/6e91841b94ba4b24adf7bff9be2f249f.webp)

[![Discord.js Version](https://img.shields.io/badge/discord.js-v14-blue.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org)
[![Node.js Version](https://img.shields.io/badge/node.js-v16.9+-green.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Stars](https://img.shields.io/github/stars/Rexyto/discord-verification-bot?style=for-the-badge&color=yellow)](https://github.com/Rexyto/discord-verification-bot/stargazers)

### 🌟 Un bot moderno y elegante para la gestión de verificación en tu servidor de Discord

</div>

## 📋 Características Principales

### ✨ Sistema de Verificación
- Botones interactivos y persistentes
- Interfaz moderna y atractiva
- Mensajes personalizados
- Sistema anti-spam integrado

### 📊 Base de Datos
- Registro completo de usuarios
- Almacenamiento seguro
- Backups automáticos
- Consultas optimizadas

### 🛡️ Seguridad
- Roles automáticos
- Permisos granulares
- Protección administrativa
- Logs detallados

### ⚡ Rendimiento
- Respuestas instantáneas
- Bajo consumo de recursos
- Alta disponibilidad
- Código optimizado

## 🚀 Guía de Instalación

### Requisitos Previos

- Node.js v16.9.0+
- MySQL 5.7+
- Token de Bot de Discord
- Permisos de administrador en el servidor

### Pasos de Instalación

1. **Clonar el Repositorio**
```bash
git clone https://github.com/Rexyto/discord-verification-bot.git
cd discord-verification-bot
```

2. **Instalar Dependencias**
```bash
npm install
```

3. **Configurar el Bot**
Crea y configura el archivo `config.json`:

```json
{
  "token": "TU_TOKEN_BOT",
  "clientId": "ID_BOT",
  "guildId": "ID_SERVIDOR",
  "roles": {
    "initial": "ID_ROL_INICIAL",
    "verified": "ID_ROL_VERIFICADO",
    "admin": "ID_ROL_ADMIN"
  },
  "database": {
    "host": "localhost",
    "user": "tu_usuario",
    "password": "tu_contraseña",
    "database": "discord_bot"
  }
}
```

4. **Iniciar el Bot**
```bash
node .
```

## 🎮 Comandos Disponibles

### Verificación
```
/verificacion [canal]
```
- Configura el sistema de verificación en el canal especificado
- Requiere: Rol de Administrador
- Ejemplo: `/verificacion #verificacion`

### Logs
```
/logs
```
- Muestra un registro detallado de usuarios
- Requiere: Rol de Administrador
- Incluye: ID, username y fecha de ingreso

## ⚙️ Permisos Necesarios

| Permiso | Descripción | Importancia |
|---------|-------------|-------------|
| MANAGE_ROLES | Gestión de roles | Crítico |
| VIEW_CHANNEL | Visualización de canales | Necesario |
| SEND_MESSAGES | Envío de mensajes | Necesario |
| EMBED_LINKS | Creación de embeds | Necesario |
| USE_EXTERNAL_EMOJIS | Uso de emojis | Opcional |
| ADD_REACTIONS | Añadir reacciones | Opcional |

## 🔧 Solución de Problemas

### Error: Missing Permissions

**Problema:** El bot no puede asignar roles a los usuarios.

**Solución:**
1. Verifica los permisos del bot
2. Revisa la jerarquía de roles
3. Confirma los permisos del servidor

**Pasos:**
1. Ve a Configuración del Servidor > Roles
2. Asegúrate que el rol del bot está por encima de los roles que maneja
3. Verifica que el bot tiene el permiso MANAGE_ROLES

### Error: Cannot find module 'discord.js'

**Problema:** Dependencias no instaladas correctamente.

**Solución:**
1. Elimina la carpeta `node_modules`
2. Elimina el archivo `package-lock.json`
3. Ejecuta `npm install`

### Error: Cannot connect to MySQL

**Problema:** No se puede establecer conexión con la base de datos.

**Verificación:**
```bash
sudo service mysql status
mysql -u root -p
CREATE DATABASE discord_bot;
```

## 📝 Notas Importantes

### Jerarquía de Roles
- El rol del bot DEBE estar por encima de los roles que gestiona
- Revisa la configuración de roles regularmente

### Base de Datos
- Se inicializa automáticamente
- Realiza backups periódicos
- Mantén las credenciales seguras

### Persistencia
- Los botones de verificación son persistentes
- Se restauran automáticamente tras reinicios
- No requiere configuración adicional

## 🤝 Contribuciones

1. Fork del repositorio
2. Crea tu rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit de cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📞 Soporte y Ayuda

- **GitHub Issues:** [Reportar un problema](https://github.com/Rexyto/discord-verification-bot/issues)

---

<div align="center">

**[📘 Documentación](https://discord.js.org)** • **[🐛 Reportar Bug](https://github.com/Rexyto/discord-verification-bot/issues)** • **[💡 Sugerir Función](https://github.com/Rexyto/discord-verification-bot/issues)**

</div>
