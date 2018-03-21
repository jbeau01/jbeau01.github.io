window.onload = function(){

    // Get the modal
    var modele = document.getElementById('monModele');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var image = $('.monImage');
    var modeleImage = $("#modeleImage");
    var imgText = document.getElementById("text");
    
    $('.monImage').click(function(){
        modele.style.display = "block";
        var newSrc = this.src;
        modeleImage.attr('src', newSrc);
        imgText.innerHTML = this.alt;
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modele.style.display = "none";
    }
}
