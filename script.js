const biciDaCorsa = [
    { nome: 'BMC Roadmachine Two', pesoKg: 8.8 },
    { nome: 'Rose Reveal 06', pesoKg: 7.6 }
];
const biciPiùLeggera = biciclette => {
    let output = biciclette[0];
    for (const bici of biciclette) {
        if (bici.pesoKg < output.pesoKg) {
            output = bici;
        }
    }
    const risultatoBici = biciPiùLeggera(biciDaCorsa);
console.log(risultatoBici);
}
