# Lee-Meadows-BG - Deployment Information

## ✅ Status: LIVE

**Deployed:** November 20, 2025
**Client:** Lee Meadows
**Invitation Code:** 9vbatfsvno00
**Referral Link:** https://dsj927.com/pc/#/register?code=9vbatfsvno00

---

## 🌐 Live URLs

### Production
```
https://lee-meadows-bg.vercel.app
```

### Latest Deployment
```
https://lee-meadows-p9wycfnab-sony-hos-projects.vercel.app
```

### GitHub Repository
```
https://github.com/sonyho2715/lee-meadows-bg
```

### Vercel Dashboard
```
https://vercel.com/sony-hos-projects/lee-meadows-bg
```

---

## 🔑 Access Information

### Password Protection
**Password:** `Wealth2025`

Users must enter this password to access the dashboard.

### Invitation Code
**Code:** `9vbatfsvno00`
**Link:** `https://dsj927.com/pc/#/register?code=9vbatfsvno00`

This code is displayed inside the dashboard after authentication.

---

## 📋 What's Deployed

### Source
This deployment is **duplicated from bg-walter-peters** with Lee Meadows's invitation code and password.

**Source Location:**
```
/Users/sonyho/Active_Projects/bg-walter-peters/
```

### Technology Stack
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Key Features
- ✅ Password protection (Wealth2025)
- ✅ Bilingual interface (English/Vietnamese)
- ✅ Invitation code system (9vbatfsvno00)
- ✅ Countdown timer for trading sessions
- ✅ Progress dashboard
- ✅ Tutorial videos
- ✅ Performance calculator
- ✅ FAQ section
- ✅ Dark mode support
- ✅ Alarm settings
- ✅ Print-friendly invitation cards

---

## 🎯 Related Dashboards

### Walter Peters Dashboard
- **URL:** https://bg-walter-peters.vercel.app
- **Code:** A3k16Uam5S00
- **Purpose:** Walter Peters' dedicated instance

### Lee Meadows Dashboard (This)
- **URL:** https://lee-meadows-bg.vercel.app
- **Code:** 9vbatfsvno00
- **Password:** Wealth2025
- **Purpose:** Lee Meadows' dedicated instance

**Note:** Both dashboards use the same codebase with different invitation codes and passwords.

---

## 📝 Configuration Details

### Invitation Code Location
File: `/components/InvitationCode.tsx`
```typescript
const INVITATION_CODE = '9vbatfsvno00';
const INVITATION_LINK = 'https://dsj927.com/pc/#/register?code=9vbatfsvno00';
```

### Password Location
File: `/components/PasswordProtection.tsx`
```typescript
// Password: Wealth2025
if (password === 'Wealth2025') {
  setIsAuthenticated(true);
  // ...
}
```

---

## 🚀 Deployment Process

### Making Updates

1. **Edit Files**
   ```bash
   cd ~/Active_Projects/lee-meadows-bg
   # Make your changes...
   ```

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Update Invitation Code

To change the invitation code:

1. Edit `components/InvitationCode.tsx`
2. Update the constants:
   ```typescript
   const INVITATION_CODE = 'YOUR_NEW_CODE';
   const INVITATION_LINK = 'https://dsj927.com/pc/#/register?code=YOUR_NEW_CODE';
   ```
3. Commit and deploy

---

## 🔗 Custom Domain Setup

### Current Configuration
The invitation link is configured as: `https://dsj927.com/pc/#/register?code=9vbatfsvno00`

### To Activate Custom Domain

1. Go to Vercel project settings:
   ```
   https://vercel.com/sony-hos-projects/lee-meadows-bg/settings/domains
   ```

2. Add domain: `dsj927.com`

3. Configure DNS records as instructed by Vercel

---

## 🧪 Testing the Deployment

### 1. Test Password Protection
1. Visit: https://lee-meadows-bg.vercel.app
2. You should see a password screen
3. Enter: `Wealth2025`
4. You should be redirected to language selection

### 2. Test Invitation Code
1. After logging in with password
2. Select language (English or Vietnamese)
3. Scroll to "My invitation code" section
4. Verify code shows: `9vbatfsvno00`
5. Verify link shows: `https://dsj927.com/pc/#/register?code=9vbatfsvno00`

### 3. Test Features
- ✅ Language toggle works
- ✅ Countdown timer displays
- ✅ Tutorial videos load
- ✅ Dark mode toggle works
- ✅ Copy invitation code button works
- ✅ Share button works
- ✅ Print button works

---

## 📊 Project Structure

```
lee-meadows-bg/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── InvitationCode.tsx    ← Lee's code (9vbatfsvno00)
│   ├── PasswordProtection.tsx ← Password screen (Wealth2025)
│   ├── LanguageSelector.tsx
│   ├── CountdownTimer.tsx
│   └── ... (other components)
├── contexts/
│   └── LanguageContext.tsx
├── hooks/
├── lib/
├── locales/
│   ├── en.ts
│   └── vi.ts
├── public/
│   └── docs/
├── types/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔐 Security Notes

- Password is stored in client-side code (session-based)
- No backend authentication system
- Session clears when browser is closed
- Invitation code is visible to authenticated users only

---

## 📞 Support & Maintenance

### View Deployment Logs
```bash
cd ~/Active_Projects/lee-meadows-bg
vercel logs lee-meadows-bg.vercel.app
```

### Check Deployment Status
```bash
cd ~/Active_Projects/lee-meadows-bg
vercel ls
```

### Inspect Deployment
```bash
cd ~/Active_Projects/lee-meadows-bg
vercel inspect lee-meadows-bg.vercel.app
```

---

## 🔄 Syncing with Walter Peters Dashboard

If the Walter Peters dashboard (bg-walter-peters) gets updated and you want to sync:

1. Go to Lee Meadows directory:
   ```bash
   cd ~/Active_Projects/lee-meadows-bg
   ```

2. Copy updates from Walter Peters dashboard:
   ```bash
   rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='.vercel' --exclude='components/InvitationCode.tsx' --exclude='components/PasswordProtection.tsx' ~/Active_Projects/bg-walter-peters/ .
   ```
   **Note:** We exclude InvitationCode.tsx and PasswordProtection.tsx to preserve Lee's credentials.

3. Verify credentials are still correct:
   ```bash
   # Check invitation code
   grep "INVITATION_CODE" components/InvitationCode.tsx
   # Should show: 9vbatfsvno00

   # Check password
   grep "password ===" components/PasswordProtection.tsx
   # Should show: Wealth2025
   ```

4. Commit and deploy:
   ```bash
   git add .
   git commit -m "Sync updates from bg-walter-peters"
   git push
   vercel --prod --yes
   ```

---

## ✅ Deployment Checklist

- [x] Source code copied from bg-walter-peters
- [x] Invitation code updated to 9vbatfsvno00
- [x] Password confirmed (Wealth2025)
- [x] Committed to GitHub
- [x] Deployed to Vercel
- [x] Production URL active
- [x] All features working
- [ ] Custom domain configured (optional)

---

**Project:** Lee-Meadows-BG
**Status:** Production Ready
**Source:** bg-walter-peters (duplicated with Lee Meadows's invitation code)
**Last Updated:** November 20, 2025
