document.addEventListener("DOMContentLoaded", function() {

   //yan bar kısmı
   const yanbar = document.getElementById('yan-bar');
   const yanBarIsareti = document.querySelector('.yan-bar-isareti');

    yanBarIsareti.addEventListener('click', function () {
    yanbar.classList.toggle('active');

    if (yanbar.classList.contains('active')) {
        // Scroll kilidi burda koydum
        document.body.style.overflow = 'hidden';
    } else {
        // Scroll kilidini kaldırdım
        document.body.style.overflow = '';
    }
});

    // sepet detayı kısmı

    const sepetPencere = document.getElementById("sepet-pencere");
    const sepetAcBtn = document.getElementById("sepet-ac");

    sepetAcBtn.addEventListener("click", function() {


        sepetPencere.style.display = "block";

        sepetPencere.classList.add("active");

    });
   
  //sepet detayı tamam butonu 

    const sepetTamamBtn = document.getElementById("sepet-goruntule-tamam");

    sepetTamamBtn.addEventListener("click",function(){

        sepetPencere.style.display = "none";

        sepetPencere.classList.remove("active");
          
    });


 
    //sepeti onaylama kısmı 

    const onaylaBtn = document.getElementById("sepet-onayla");
    const onaylaPencere = document.getElementById("sepet-onay-pencere");

    onaylaBtn.addEventListener("click", function() {

        onaylaPencere.style.display = "block";

        onaylaPencere.classList.add("active");
    });


    //sepeti onaylamak için evet veya hayır butonları

    const sepethayirBtn = document.getElementById("onay-hayir");
    
    sepethayirBtn.addEventListener("click", function() {

        onaylaPencere.style.display = "none";

        onaylaPencere.classList.remove("active");

    });

    const sepetevetBtn = document.getElementById("onay-evet");
    const onaylandiPencere = document.getElementById("sepet-onaylandi-pencere"); //evete bastıktan sonra çıkacak pencere

    sepetevetBtn.addEventListener("click", function(){
        onaylaPencere.style.display = "none";
        onaylaPencere.classList.remove("active");

        onaylandiPencere.style.display="block"; //evete bastıktan sonra çıkacak olan pencere
        
        setTimeout(() => {
            onaylandiPencere.style.display="none";
        }, 3000);
      
    });

    //garson çağır butonu

    const garsonCagirBtn = document.getElementById("garson-cagir");
    const garsonCagirPencere = document.getElementById("garson-cagir-pencere");
   
    garsonCagirBtn.addEventListener("click",function(){
        
            garsonCagirPencere.style.display = "block";
            garsonCagirPencere.classList.add("active");

    });
    

    //garson çağırmak için evet veya hayır butonları

    const garsonEvetBtn = document.getElementById("garson-evet");
    
    garsonEvetBtn.addEventListener("click",function(){
               
        garsonCagirPencere.style.display="none";
        garsonCagirPencere.classList.add("active");
        

    });

    const garsonHayirBtn = document.getElementById("garson-hayir");

    garsonHayirBtn.addEventListener("click",function(){
               
        garsonCagirPencere.style.display="none";
        garsonCagirPencere.classList.add("active");

    });

    //Masa değiştirme kısmı
    
    const masaPaneli = document.getElementById("masa-panel");
    const masaDegistirBtn = document.getElementById("masaDegistirBtn");

    masaDegistirBtn.addEventListener("click",function(){

        masaPaneli.style.display="block";
        masaPaneli.classList.add("active");

    });
    
    //Masa değiştirme evet veya hayır butonları
    const masadegistirEvetBtn = document.getElementById("masadegistirEvet");
    const masadegistirHayirBtn = document.getElementById("masadegistirHayir");

    masadegistirEvetBtn.addEventListener("click",function(){
             
        masaPaneli.style.display="none";
        masaPaneli.classList.add("active");
              
    });

    masadegistirHayirBtn.addEventListener("click",function(){
             
        masaPaneli.style.display="none";
        masaPaneli.classList.add("active");
              
    });

     //sipariş detayları kısmı
     
    
    const siparisDetaylariBtn = document.getElementById("siparis-detaylari-btn");
    const siparisDetaylariPencere = document.getElementById("siparis-detaylari-pencere");
    const siparisDetayTamamBtn = document.getElementById("siparis-detay-tamam");

    siparisDetaylariBtn.addEventListener("click",function(){
               siparisDetaylariPencere.style.display="block";
               siparisDetaylariPencere.classList.add("active");

    });

    siparisDetayTamamBtn.addEventListener("click",function(){
        siparisDetaylariPencere.style.display="none";
        siparisDetaylariPencere.classList.add("active");
    });
  
    //sipariş takibi kısmı

    const siparisTakibiBtn = document.getElementById("siparis-takibi-btn");
    const siparisTakibiPencere = document.getElementById("siparis-takibi-pencere");
    const siparisTakibiTamamBtn = document.getElementById("siparis-takibi-tamam");

    siparisTakibiBtn.addEventListener("click",function(){

        siparisTakibiPencere.style.display="block";
        siparisTakibiPencere.classList.add("active");

    });
    
    siparisTakibiTamamBtn.addEventListener("click",function(){
        siparisTakibiPencere.style.display="none";
        siparisTakibiPencere.classList.add("active");
    });

     
    //Sepete Ekle kısmı

    const sepeteEkleBtn = document.querySelectorAll(".order-btn");
    const sepeteEklePencere = document.getElementById("sepete-ekle-pencere");
    const sepeteEkleGeriBtn = document.getElementById("sepete-ekle-geri-btn");

    sepeteEkleBtn.forEach(btn => {
        btn.addEventListener("click", function () {
          sepeteEklePencere.style.display = "block";
          sepeteEklePencere.classList.add("active");
        });
      });

      sepeteEkleGeriBtn.addEventListener("click",function(){
         sepeteEklePencere.style.display="none";
      })

    const sepeteEklendiTamamBtn = document.getElementById("sepete-eklendi-btn");
    const sepeteEklendiPencere = document.getElementById("sepete-eklendi-pencere");  //yukarıdaki sepete-ekle-pencere ile karışmasın.

    sepeteEklendiTamamBtn.addEventListener("click",function(){
        sepeteEklePencere.style.display="none";
        sepeteEklePencere.classList.add("remove");
        sepeteEklendiPencere.style.display="block";

       setTimeout(() => {
            sepeteEklendiPencere.style.display = "none";
        }, 3000);

    });
     
    
    

    //hızlı sipariş kısmı

    const hizliSiparisBtnList = document.querySelectorAll(".fast-order-btn");
    const hizliSiparisPencere = document.getElementById("hizli-siparis-pencere");
    
    //Burda hızlı siparişe tıklandıktan sonra tıklanan ürünün bilgilerini alan ve pencereye yazan kod ayarlandı
    const siparisIsim = document.getElementById("siparis-isim");
    const siparisAciklama = document.getElementById("siparis-aciklama");
    const siparisFiyat = document.getElementById("siparis-fiyat");
    const siparisResim = document.getElementById("siparis-resim");
    
    
    hizliSiparisBtnList.forEach(button => {
      button.addEventListener("click", function () {

        const tiklananKart = button.closest(".menu-urun"); 
        const isim = tiklananKart.querySelector(".urun-ismi").textContent;
        const aciklama = tiklananKart.querySelector(".urun-aciklamasi").textContent;
        const fiyat = tiklananKart.querySelector(".urun-fiyati").textContent;
        const urunResmi = tiklananKart.querySelector(".urun-resmi").src;
    
        siparisIsim.textContent = isim;
        siparisAciklama.textContent = aciklama;
        siparisFiyat.textContent = fiyat;
        siparisResim.src = urunResmi;
    
        hizliSiparisPencere.style.display ="block";
        hizliSiparisPencere.classList.add("active"); 
      });
    });

    //burda ise hizli siparişi onaylama kısmı, evet ve hayır butonları ayarlandı.
    const hizliSiparisEvetBtn = document.querySelectorAll(".hizli-siparis-evet");
    const hizliSiparisHayirBtn = document.querySelectorAll(".hizli-siparis-hayir");

    hizliSiparisEvetBtn.forEach(button => {
        button.addEventListener("click",function(){
            hizliSiparisPencere.style.display="none";
            hizliSiparisPencere.classList.add("active");  
        });
    });

    hizliSiparisHayirBtn.forEach(button => {
        button.addEventListener("click",function(){
            hizliSiparisPencere.style.display="none";
            hizliSiparisPencere.classList.add("active");  
        });
    });
     
    //yapay zeka sesli sohbet kısmı
    
    const yapayzekaSesBtn = document.getElementById("yapay-zeka-sesli-Btn");
    const yapayzekasesPencere = document.getElementById("yapay-zeka-ses-penceresi");
    const seslisohbetKapatBtn = document.getElementById("sesli-sohbeti-kapat");

    yapayzekaSesBtn.addEventListener("click",function(){
       yapayzekasesPencere.style.display = "block";   
       yapayzekasesPencere.classList.add("active");
       

    });

    seslisohbetKapatBtn.addEventListener("click",function(){
        yapayzekasesPencere.style.display="none";
        yapayzekasesPencere.classList.remove("active");
    });
  
    //yapay zeka yazılı sohbet kısmı

    const yapayzekaYaziBtn = document.getElementById("yapay-zeka-yazili-Btn");
    const yapayzekayaziPencere = document.getElementById("yapay-zeka-yazi-penceresi");

    yapayzekaYaziBtn.addEventListener("click",function(){
        yapayzekayaziPencere.style.display="block";
        yapayzekayaziPencere.classList.add("active");
        
    });
    
    const sohbetiKapatBtn= document.getElementById("sohbeti-kapat");

    sohbetiKapatBtn.addEventListener("click",function(){
          yapayzekayaziPencere.style.display="none";
          yapayzekayaziPencere.classList.remove("active");
    });
     
    //şikayet kısmı

    const sikayetBtn = document.getElementById("sikayet-btn");
    const sikayetPencere = document.getElementById("sikayet-penceresi");
    const sikayetKapat = document.getElementById("sikayet-kapama");

    sikayetBtn.addEventListener("click",function(){
        sikayetPencere.style.display = "block";
    });

    sikayetKapat.addEventListener("click",function(){
          sikayetPencere.style.display="none";
    });

    //tema kısmı

    const temaButonu = document.getElementById("tema-buton");
    const govde = document.body;

    temaButonu.addEventListener("click",function(){
          govde.classList.toggle("karanlik-tema");

           // Buton simgesini güncelleme kısmı
      if (govde.classList.contains("karanlik-tema")) {
    temaButonu.textContent = "☀️";
     } else {
    temaButonu.textContent = "🌙";
     }
 
       //burda son tema googlea kaydediliyor ve sonraki girişimizde o tema seçilmiş oluyor onu sağladım.
      localStorage.setItem(
        "tema",
        govde.classList.contains("karanlik-tema") ? "karanlik" : "aydinlik"
      );

    });

});

   