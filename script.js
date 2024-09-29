let container = document.getElementsByClassName("QRCode-container")[0];
let btn = document.getElementById("btn");
let mssg = document.createElement("p");

async function Qrcode() {
    btn.addEventListener("click", async () => {
        try {
            const Input = document.getElementById("input").value;

            // Vérifier si l'input est vide
            if (Input === "") {
                container.innerHTML="";
                mssg.textContent = "Veuillez saisir une URL ou un texte";
                container.appendChild(mssg);
            } else {
                // Construire l'URL de l'API pour générer le QR code
                const res = await fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${Input}&size=100x100`);
                
                // Créer une balise img et définir la source de l'image avec l'URL du QR code
                const qrcodeimg = document.createElement("img");
                qrcodeimg.src = res.url; // Utiliser res.url pour obtenir l'image

                // Vider le conteneur avant d'ajouter la nouvelle image
                container.innerHTML = ""; 
                container.appendChild(qrcodeimg); // Ajouter l'image dans le conteneur
            }
        } catch (error) {
            console.log("Erreur :", error);
        }
    });
}

Qrcode();
