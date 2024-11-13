/* Exercice 3:
Un magasin de reprographie facture 0,10€ les dix premières photocopies, 
0,09€ les vingt suivantes et 0,08€ au-delà. Ecrivez un algorithme qui 
demande à l’utilisateur le nombre de photocopies effectuées et qui affiche 
la facture correspondante. (demandez à votre formateur plus de précisions sur l'attendu)
*/

let iUnité = 0;
let iPalier = [0.10,0.09,0.08];
/*let iPalier_2 = 0.09;
let iPalier_3 = 0.08;*/
let iPhotocopie = parseInt(prompt("Entrer le nombre de photocopie à éffectuer"));

/* Total  is calculating the total cost of photocopies based
on the number of photocopies entered by the user. */
let iTotal_1 = (iUnité+iPhotocopie)*iPalier[0];

if (iUnité+iPhotocopie>=1 && iUnité+iPhotocopie<11) {
iTotal_1= (iUnité+iPhotocopie)*iPalier[0];
  console.log("Votre Facture sera de",iTotal_1,"€");
  alert("Votre Facture sera de "+iTotal_1+"€"); 
}
else if (iUnité+iPhotocopie>10 && iUnité+iPhotocopie<19) {
iTotal_1= (iUnité+iPhotocopie)*iPalier[1];
  console.log("Votre Facture sera de",iTotal_1,"€");
  alert("Votre Facture sera de "+iTotal_1+"€")
}
else if (iUnité+iPhotocopie>20) {
iTotal_1= (iUnité+iPhotocopie)*iPalier[2];
  console.log("Votre Facture sera de",iTotal_1,"€");
  alert("Votre Facture sera de "+iTotal_1+"€")
}

