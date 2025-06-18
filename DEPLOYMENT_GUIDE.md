# 🚀 Guía Completa: Deploy de MIA PETS en GitHub + Vercel

Esta guía te llevará paso a paso desde subir tu código a GitHub hasta tener tu aplicación MIA PETS funcionando en vivo con Vercel.

## 📋 Requisitos Previos
- Cuenta de GitHub (gratuita)
- Cuenta de Vercel (gratuita, se puede crear con GitHub)
- Tu proyecto MIA PETS ya está preparado con Git

---

## 🔧 PARTE 1: Subir el Código a GitHub

### Paso 1: Crear Repositorio en GitHub

1. **Ir a GitHub**
   - Abre tu navegador y ve a [github.com](https://github.com)
   - Inicia sesión en tu cuenta

2. **Crear Nuevo Repositorio**
   - Haz clic en el botón verde **"New"** (o el ícono "+" en la esquina superior derecha)
   - [Screenshot conceptual: Botón "New" en GitHub]

3. **Configurar el Repositorio**
   - **Repository name**: `mia-pets-website`
   - **Description**: `MIA PETS - Plataforma para el cuidado de mascotas`
   - **Visibilidad**: Public (recomendado para Vercel gratuito)
   - **NO marques**: "Add a README file", "Add .gitignore", "Choose a license"
   - [Screenshot conceptual: Formulario de creación de repositorio]

4. **Crear Repositorio**
   - Haz clic en **"Create repository"**
   - [Screenshot conceptual: Página del repositorio vacío con comandos Git]

### Paso 2: Conectar tu Proyecto Local con GitHub

Abre tu terminal y ejecuta estos comandos **exactamente en este orden**:

```bash
# 1. Navegar a tu proyecto
cd /home/ubuntu/mia_pets_website

# 2. Agregar el repositorio remoto (REEMPLAZA 'tu-usuario' con tu username de GitHub)
git remote add origin https://github.com/tu-usuario/mia-pets-website.git

# 3. Verificar que se agregó correctamente
git remote -v

# 4. Subir tu código a GitHub
git push -u origin master
```

**⚠️ IMPORTANTE**: Reemplaza `tu-usuario` con tu nombre de usuario real de GitHub.

### Paso 3: Verificar la Subida

1. Regresa a tu repositorio en GitHub
2. Actualiza la página (F5)
3. Deberías ver todos tus archivos del proyecto
4. [Screenshot conceptual: Repositorio con archivos subidos]

---

## 🌐 PARTE 2: Deploy Automático con Vercel

### Paso 4: Crear Cuenta en Vercel

1. **Ir a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en **"Sign Up"**

2. **Conectar con GitHub**
   - Selecciona **"Continue with GitHub"**
   - Autoriza a Vercel para acceder a tus repositorios
   - [Screenshot conceptual: Página de autorización GitHub-Vercel]

### Paso 5: Importar tu Proyecto

1. **Dashboard de Vercel**
   - Una vez logueado, verás el dashboard
   - Haz clic en **"Add New..."** → **"Project"**
   - [Screenshot conceptual: Dashboard de Vercel con botón "Add New"]

2. **Seleccionar Repositorio**
   - Busca `mia-pets-website` en la lista
   - Haz clic en **"Import"** junto a tu repositorio
   - [Screenshot conceptual: Lista de repositorios con botón Import]

### Paso 6: Configurar el Deploy

1. **Configuración del Proyecto**
   - **Project Name**: `mia-pets-website` (o el nombre que prefieras)
   - **Framework Preset**: Next.js (debería detectarlo automáticamente)
   - **Root Directory**: `./` (dejar por defecto)

2. **Build and Output Settings**
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `.next` (por defecto)
   - **Install Command**: `npm install` (por defecto)

3. **Environment Variables** (si las necesitas)
   - Por ahora, déjalo vacío
   - [Screenshot conceptual: Formulario de configuración de Vercel]

4. **Deploy**
   - Haz clic en **"Deploy"**
   - [Screenshot conceptual: Proceso de build en progreso]

### Paso 7: ¡Tu App Está Viva! 🎉

1. **Esperar el Build**
   - Vercel construirá tu aplicación (toma 1-3 minutos)
   - Verás logs en tiempo real del proceso

2. **Obtener tu URL**
   - Una vez completado, verás: **"Your project has been deployed"**
   - Tu URL será algo como: `https://mia-pets-website-tu-usuario.vercel.app`
   - [Screenshot conceptual: Página de éxito con URL del proyecto]

3. **Probar tu Aplicación**
   - Haz clic en **"Visit"** o copia la URL
   - ¡Tu aplicación MIA PETS ya está en línea!

---

## 🔄 PARTE 3: Actualizaciones Futuras (Deploy Automático)

### Cómo Actualizar tu Aplicación

Cada vez que quieras actualizar tu aplicación:

```bash
# 1. Hacer cambios en tu código local
# 2. Agregar cambios a Git
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "Descripción de los cambios realizados"

# 4. Subir cambios a GitHub
git push origin master
```

**✨ ¡Automático!** Vercel detectará los cambios y desplegará automáticamente la nueva versión.

---

## 🛠️ Comandos de Referencia Rápida

### Comandos Git Esenciales
```bash
# Ver estado del repositorio
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Tu mensaje aquí"

# Subir cambios
git push origin master

# Ver historial
git log --oneline
```

### URLs Importantes
- **Tu repositorio**: `https://github.com/tu-usuario/mia-pets-website`
- **Dashboard Vercel**: `https://vercel.com/dashboard`
- **Tu aplicación**: `https://mia-pets-website-tu-usuario.vercel.app`

---

## 🚨 Solución de Problemas Comunes

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/tu-usuario/mia-pets-website.git
```

### Error: "failed to push some refs"
```bash
git pull origin master --allow-unrelated-histories
git push origin master
```

### Build falla en Vercel
1. Revisa los logs en el dashboard de Vercel
2. Verifica que `package.json` tenga todos los scripts necesarios
3. Asegúrate de que no hay errores de TypeScript/ESLint

### Aplicación no carga correctamente
1. Verifica la consola del navegador (F12)
2. Revisa que todas las rutas estén correctas
3. Confirma que las imágenes y assets estén en la carpeta `public/`

---

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Código subido con `git push`
- [ ] Proyecto importado en Vercel
- [ ] Build completado exitosamente
- [ ] Aplicación accesible en la URL de Vercel
- [ ] Deploy automático configurado

---

## 🎯 Próximos Pasos Recomendados

1. **Dominio Personalizado**: Conecta tu propio dominio en Vercel
2. **Analytics**: Habilita Vercel Analytics para ver estadísticas
3. **Variables de Entorno**: Configura variables para producción si las necesitas
4. **Optimizaciones**: Revisa las sugerencias de Vercel para mejorar performance

---

**¡Felicidades! 🎉 Tu aplicación MIA PETS ya está desplegada profesionalmente con deploy automático.**

Para cualquier duda, consulta la [documentación oficial de Vercel](https://vercel.com/docs) o la [documentación de GitHub](https://docs.github.com).
