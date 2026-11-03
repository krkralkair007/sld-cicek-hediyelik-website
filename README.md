# SLD Çiçek & Hediyelik

## Çalıştırma
    npm install
    npm run dev      # http://localhost:3000

## Fotoğraflar
Gerçek ürün fotoğraflarını `public/products/` içine `lib/data.ts` dosyasındaki adlarla koyun
(örn. `jut-duvar-dekoru.jpg`). Dosya yoksa altın SLD yer tutucusu görünür. Logo için `components/Logo.tsx`.

## Yayınlama (Vercel)
GitHub'a yükleyin → vercel.com'da "Import Project" → Deploy. `lib/data.ts` içindeki `SITE.url` değerini
gerçek alan adınızla değiştirin.

## Sonraki adımlar
Ödeme: iyzico/PayTR için `lib/payment.ts`. Admin: `app/admin` + veritabanı. Fiyatlar örnektir.
