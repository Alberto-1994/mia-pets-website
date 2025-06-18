
# MIA PETS - Aplicación Web

Una aplicación web moderna desarrollada con Next.js para el cuidado y gestión de mascotas.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Prisma** - ORM para base de datos
- **React Hook Form** - Manejo de formularios

## 📦 Instalación Local

```bash
# Instalar dependencias
npm install
# o
yarn install

# Ejecutar en modo desarrollo
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🌐 Deployment en Vercel

### Opción 1: Deployment via Git Repository (Recomendado)

1. **Subir el código a GitHub:**
   ```bash
   # Inicializar repositorio Git (si no existe)
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer commit
   git commit -m "Initial commit - MIA PETS app"
   
   # Conectar con repositorio remoto de GitHub
   git remote add origin https://github.com/tu-usuario/mia-pets.git
   
   # Subir código
   git push -u origin main
   ```

2. **Importar en Vercel:**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión
   - Haz clic en "New Project"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio `mia-pets`
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

### Opción 2: Deployment Manual (Upload ZIP)

1. **Usar el archivo ZIP preparado:**
   - Descarga el archivo `mia_pets_website_ready.zip` que se ha creado
   - Ve a [vercel.com](https://vercel.com) e inicia sesión
   - Haz clic en "New Project"
   - Selecciona "Upload" y sube el archivo ZIP
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"

### ⚙️ Configuración en Vercel

**Build Settings (Configuración automática):**
- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` o `yarn install`

**Variables de Entorno:**
Si tu aplicación usa variables de entorno, agrégalas en:
- Ve a tu proyecto en Vercel Dashboard
- Settings → Environment Variables
- Agrega las variables necesarias (ej: `DATABASE_URL`, `NEXTAUTH_SECRET`, etc.)

### 🔄 Actualizaciones Futuras

**Con Git (Opción 1):**
```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de cambios"
git push

# Vercel automáticamente detectará los cambios y redesplegará
```

**Con Upload Manual (Opción 2):**
- Crear nuevo ZIP con los cambios
- Subir nuevo deployment en Vercel Dashboard

### 📋 Checklist Pre-Deployment

- ✅ Todas las dependencias están en `package.json`
- ✅ Variables de entorno configuradas
- ✅ Build funciona localmente (`npm run build`)
- ✅ No hay errores de TypeScript
- ✅ Archivos sensibles están en `.gitignore`

### 🆘 Solución de Problemas Comunes

**Error de Build:**
- Verifica que `npm run build` funcione localmente
- Revisa los logs de build en Vercel Dashboard

**Variables de Entorno:**
- Asegúrate de que todas las variables estén configuradas en Vercel
- Usa `NEXT_PUBLIC_` para variables del cliente

**Errores de Dependencias:**
- Verifica que todas las dependencias estén en `package.json`
- Usa `npm install --save` para agregar dependencias faltantes

### 📞 Soporte

Para más información sobre deployment en Vercel:
- [Documentación oficial de Vercel](https://vercel.com/docs)
- [Guía de Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs)

---

**¡Tu aplicación MIA PETS estará lista para el mundo! 🐾**
