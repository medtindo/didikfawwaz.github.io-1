$(document).ready(function() {

    $(".oNama").text(OrganisasiNama);
    $(".oAlamat").text(OrganisasiAlamat);

    // Semua elemen konten awalnya disembunyikan
    $('#content div').hide();    
    
    
    // Tampilkan elemen home saat halaman dimuat
    $('#Page_home').show();
    
    // Tambahkan event handler untuk setiap tombol navigasi
    $('.sidebar-menu a').click(function() {
      // Semua elemen konten disembunyikan saat tombol navigasi diklik
      $('#content div').hide();    
      // Ambil id dari elemen yang sesuai dengan tombol navigasi yang diklik
      var contentID = $(this).attr('href');
      console.log(contentID);
      // Tampilkan elemen yang sesuai dengan id tersebut
      $(contentID).show();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
  });