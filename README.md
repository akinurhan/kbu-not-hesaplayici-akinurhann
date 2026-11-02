# KBÜ Not Hesaplayıcı (Vize–Final/Bütünleme)

Bu proje, Karabük Üniversitesi (KBÜ) not yönetmeliğine uygun olarak öğrencilerin vize, final veya bütünleme notlarına göre ders başarı durumlarını ve harf notlarını hesaplayan web uygulamasıdır.

## 📐 KBÜ Hesaplama Mantığı
- **Ağırlıklar:** Yıl içi %40, Final/Bütünleme %60.
- **Geçme Şartları:** Sınav notu (Final/Bütünleme) en az 50, genel başarı notu en az 60 olmalıdır.
- **Kalıcı Notlar:**
  - **F1:** Devamsızlık durumu.
  - **F2:** Sınava girmeme durumu.
  - **F3:** Sınav notunun 50'den veya başarı notunun 60'tan küçük olması durumu.
- **Harf Aralıkları:** 90-100 (A1), 80-89 (A2), 70-79 (B1), 65-69 (B2), 60-64 (C).

## 🚀 Kullanım Talimatı
1. Proje dosyalarını indirin veya `index.html` dosyasını bir tarayıcıda (Chrome, Edge vb.) çift tıklayarak açın.
2. Vize ve Final/Bütünleme notlarınızı girin.
3. Devamsızlık veya sınava girme durumlarınızı ilgili kutucuklardan seçin.
4. **Hesapla** butonuna basın veya klavyeden `Enter` tuşuna basın.

## 🧪 Test Senaryoları ve Beklenen Sonuçlar
1. **Yıl içi: 70, Final: 60** 
   - Başarı Notu: 64 ➔ **Sonuç: C (Geçti)**
2. **Yıl içi: 95, Final: 48** 
   - Final < 50 olduğu için ➔ **Sonuç: F3 (Kaldı)**
3. **Yıl içi: 58, Bütünleme: 55** (Final girilmemiş)
   - Başarı Notu: 56.2 (< 60) ➔ **Sonuç: F3 (Kaldı)**
4. **Devamsız işaretli** ➔ **Sonuç: F1 (Kaldı)**
5. **Sınava girilmedi seçili** ➔ **Sonuç: F2 (Kaldı)**
